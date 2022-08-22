import React, { useCallback, useEffect, useState } from 'react';

import PageTitle from '../../components/PageTitle';
import SprintRound from '../../components/SprintRound';

import {
  useAppDispatch,
  useGroupSelector,
  useLazyGetAggregatedWordsQuery,
  useLazyGetWordsQuery,
  usePageSelector,
  useUserSelector,
} from '../../redux';
import { useSprintWords } from '../../hooks';
import { EASY_WORD, FROM_MAIN, MAX_PAGE, ROUTER_PATHS } from '../../constants';
import { AggregatedWords, WordsPage } from '../../types';
import { goToNextPage } from '../../redux/slices/wordsListSlice';
import { useNavigate } from 'react-router-dom';
import { getUserFriendlyErrorMessage } from '../../utils';

interface SprintGameData {
  words: WordsPage | AggregatedWords | undefined | null;
  word: string | null;
  wordIndex: number;
  wordsRunOut: boolean;
  answers: Array<string> | null;
}

function SprintGamePage() {
  const { state } = useSprintWords();
  const user = useUserSelector();
  const page = usePageSelector();
  const group = useGroupSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [gameData, setGameData] = useState<SprintGameData>({
    words: null,
    word: null,
    wordIndex: 0,
    wordsRunOut: false,
    answers: null,
  });

  const [getAggregatedWords] = useLazyGetAggregatedWordsQuery();
  const [getWords] = useLazyGetWordsQuery();

  const fetchWords = useCallback(
    async (group: number, page: number) => {
      const wordIndex = 0;
      if (user) {
        console.log('in fetchWords fn, PAGE: ', page);
        const { userId } = user;

        const { data, isError, error } = await getAggregatedWords({ userId, group, page });

        if (data) {
          console.log('words is!');
          const words = data.filter((word) => word.difficulty !== EASY_WORD);
          const word = words[wordIndex].word;

          setGameData((prevState) => ({ ...prevState, words, word, wordIndex }));
        } else if (isError && error) {
          alert(getUserFriendlyErrorMessage(error, 'words'));
        }
      } else {
        console.log('not');
        const { data } = await getWords({ group, page });
        if (data) {
          const word = data[wordIndex].word;
          setGameData((prevState) => ({ ...prevState, words: data, word, wordIndex }));
        }
      }
    },
    [user, getAggregatedWords, getWords]
  );

  const toNextWord = () => {
    const { words, wordIndex } = gameData;
    if (words) {
      if (wordIndex !== words.length - 1) {
        const nextIndex = wordIndex + 1;
        const nextWord = words[nextIndex].word;
        setGameData((prevState) => ({ ...prevState, word: nextWord, wordIndex: nextIndex }));
      } else {
        if (page !== MAX_PAGE) {
          dispatch(goToNextPage());
        } else {
          alert('Words ran out!');
          setGameData((prevState) => ({ ...prevState, wordsRunOut: true }));
        }
      }
    }
  };

  useEffect(() => {
    fetchWords(group, page);
    console.log('fetch');
  }, [fetchWords, group, page]);

  useEffect(() => {
    if (gameData.wordsRunOut) {
      navigate(ROUTER_PATHS.gameResults);
    }
  }, [gameData.wordsRunOut, navigate]);

  console.log('RENDER SPRINT');

  return (
    <>
      <PageTitle>Спринт</PageTitle>
      {state === FROM_MAIN ? (
        <div>
          <button type="button" value={1}>
            1 группа
          </button>
          <button type="button" value={2}>
            2 группа
          </button>
          <button type="button" value={3}>
            3 группа
          </button>
          <button type="button" value={4}>
            4 группа
          </button>
          <button type="button" value={5}>
            5 группа
          </button>
          <button type="button" value={6}>
            6 группа
          </button>
          {user && (
            <button type="button" value={7}>
              Сложные
            </button>
          )}
        </div>
      ) : (
        <div>
          <SprintRound word={gameData.word} showNextWord={toNextWord} />
        </div>
      )}
    </>
  );
}

export default SprintGamePage;
