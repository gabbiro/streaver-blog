export type UserType = {
  name: string;
};

export type PostType = {
  id: number;
  title: string;
  body: string | null;
  userId: number;
  user: UserType;
};
