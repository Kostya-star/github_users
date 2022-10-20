export type SearchUserType = {
  login: string;
  id: number;
};

export type SearchResultType = {
  items: SearchUserType[];
};

export type UserType = {
  followers: number
  login: string
  avatar_url: string
}
