export interface GetWordsQueryArgs {
  group: number;
  page: number;
}

export interface GetUserWordsQueryArgs {
  userId: string;
  token: string;
}
