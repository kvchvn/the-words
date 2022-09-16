import { DEFAULT_STATISTIC, TAG_ID, WORD_WITHOUT_DIFFICULTY } from '../constants';
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
    let optional = { statistic: { ...DEFAULT_STATISTIC } };

    if ('optional' in wordData && wordData.optional) {
      const total = wordData.optional.statistic.total;
      const { rightAnswers, totalAnswers } = total;
      const sprint = wordData.optional.statistic.sprint;
      const audiocall = wordData.optional.statistic.audiocall;
      // reset answersList if a user changes a word's difficulty
      optional = {
        statistic: {
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
