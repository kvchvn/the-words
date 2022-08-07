import {
  useCreateUserWordMutation,
  useRemoveUserWordMutation,
  useUpdateUserWordMutation,
  useUserSelector,
} from '../redux';
import { EASY_WORD, HARD_WORD } from '../constants';
import { MainSignInResponse, Word } from '../types';

const useDifficulty = (wordData: Word) => {
  const user = useUserSelector();
  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();
  const [removeUserWord] = useRemoveUserWordMutation();

  const toggleDifficulty = async (
    current: string | undefined,
    desired: typeof HARD_WORD | typeof EASY_WORD
  ) => {
    const userId = (user as MainSignInResponse).userId;
    const wordId = wordData.id;
    const options = {
      userId,
      wordId,
      optional: wordData,
    };

    if (!current) {
      await createUserWord({ difficulty: desired, ...options });
      return;
    }
    if (current === desired) {
      await removeUserWord({ userId, wordId });
      return;
    }
    await updateUserWord({ difficulty: desired, ...options });
  };

  return { toggleDifficulty, user };
};

export default useDifficulty;
