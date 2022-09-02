import { TAG_ID, WORD_WITHOUT_DIFFICULTY } from '../constants';
import { useCreateUserWordMutation, useUpdateUserWordMutation, useUserSelector } from '../redux';
import { MainSignInResponse, Word, WordDifficulty } from '../types';

const useDifficulty = (wordData: Word) => {
  const user = useUserSelector();
  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();

  const toggleDifficulty = async (current: WordDifficulty | undefined, desired: WordDifficulty) => {
    const userId = (user as MainSignInResponse).userId;
    const wordId = wordData.id;
    const tagId = TAG_ID.difficulty;

    if (!current) {
      await createUserWord({ difficulty: desired, userId, wordId, tagId });
      return;
    }
    if (current === desired) {
      // removeUserWord doesn't use to save statistics data
      await updateUserWord({ userId, wordId, difficulty: WORD_WITHOUT_DIFFICULTY, tagId });
      return;
    }
    await updateUserWord({ difficulty: desired, userId, wordId, tagId });
  };

  return { toggleDifficulty, user };
};

export default useDifficulty;
