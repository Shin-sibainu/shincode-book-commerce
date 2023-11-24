type Author = {
  id: number;
  name: string;
  description: string;
  profile_icon: string;
};

type BookType = {
  id: number;
  author: Author;
  title: string;
  price: number;
  content: string;
  thumbnail: { url: string };
  created_at: string;
  updated_at: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  profile_icon: string;
};

type FormData = {
  email: string;
  password: string;
};

export type { Author, BookType, User };
