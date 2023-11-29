type BookType = {
  id: number;
  title: string;
  price: number;
  content: string;
  thumbnail: { url: string };
  created_at: string;
  updated_at: string;
};

type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  sessionId: string;
  createdAt: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type { BookType, Purchase, User };
