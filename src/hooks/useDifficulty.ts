import { DEFAULT_STATISTICS, TAG_ID, WORD_WITHOUT_DIFFICULTY } from '../constants';
import { useCreateUserWordMutation, useUpdateUserWordMutation, useUserSelector } from '../redux';
import { AggregatedWord, MainSignInResponse, Word, WordDifficulty } from '../types';

const useDifficulty = (wordData: Word | AggregatedWord) => {
  const user = useUserSelector();
  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();

  const toggleDifficulty = async (current: WordDifficulty | undefined, desired: WordDifficulty) => {
    const userId = (user as MainSignInResponse).userId;
    const wordId = wordData.id;
    const tagId = TAG_ID.difficulty;
    let optional = { statistics: { ...DEFAULT_STATISTICS } };

    if ('optional' in wordData && wordData.optional) {
      const total = wordData.optional.statistics.total;
      const { rightAnswers, totalAnswers } = total;
      const sprint = wordData.optional.statistics.sprint;
      const audiocall = wordData.optional.statistics.audiocall;
      // reset answersList if a user changes a word's difficulty
      optional = {
        statistics: {
          total: { rightAnswers, totalAnswers, answersList: [] },
          sprint,
          audiocall,
        },
      };
    }

    if (!current) {
      await createUserWord({ difficulty: desired, userId, wordId, tagId });
      return;
    }
    if (current === desired) {
      // removeUserWord doesn't use to save statistics data
      await updateUserWord({
        userId,
        wordId,
        difficulty: WORD_WITHOUT_DIFFICULTY,
        optional,
        tagId,
      });
      return;
    }
    await updateUserWord({ difficulty: desired, userId, wordId, optional, tagId });
  };

  return { toggleDifficulty, user };
};

export default useDifficulty;
