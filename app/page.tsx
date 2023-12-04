import Book from "./components/Book";
import { BookType, Purchase } from "./types/types";
import { getAllBooks } from "./lib/microcms/client";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./lib/next-auth/options";
import { Suspense } from "react";
import Loading from "./loading";
// import { getServerSession } from "next-auth";
// import { nextAuthOptions } from "./lib/next-auth/options";

//https://zenn.dev/arsaga/articles/3f5bce7c904ebe#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1
// 疑似データ
// const books = [
//   {
//     id: 1,
//     title: "Book 1",
//     thumbnail: "/thumbnails/discord-clone-udemy.png",
//     author: {
//       id: 1,
//       name: "Author 1",
//       description: "Author 1 description",
//       profile_icon: "https://source.unsplash.com/random/2",
//     },
//     content: "Content 1",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   {
//     id: 2,
//     title: "Book 2",
//     thumbnail: "/thumbnails/notion-udemy.png",
//     author: {
//       id: 2,
//       name: "Author 2",
//       description: "Author 2 description",
//       profile_icon: "https://source.unsplash.com/random/3",
//     },
//     content: "Content 2",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   {
//     id: 3,
//     title: "Book 3",
//     thumbnail: "/thumbnails/openai-chatapplication-udem.png",
//     author: {
//       id: 3,
//       name: "Author 3",
//       description: "Author 3 description",
//       profile_icon: "https://source.unsplash.com/random/4",
//     },
//     content: "Content 3",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   // 他の本のデータ...
// ];
export default async function Home() {
  // const [books, setBooks] = useState<BookType[]>([]);
  // const [purchasedBookIds, setPurchasedBookIds] = useState<number[]>([]);

  const session = await getServerSession(nextAuthOptions);
  const user: any = session?.user;

  const { contents } = await getAllBooks();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
  );
  const purchasesData = await response.json();
  const purchasedIds = purchasesData.map(
    (purchase: Purchase) => purchase.bookId
  );
  // const { data: session } = useSession();
  // const user: any = session?.user;

  // useEffect(() => {
  //   const fetchBooksAndPurchases = async () => {
  //     try {
  //       // 書籍データの取得
  //       const booksData = await getAllBooks();
  //       setBooks(booksData.contents);

  //       // ユーザーの購入履歴の取得
  //       if (user && user.id) {
  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
  //         );
  //         const purchasesData = await response.json();
  //         const purchasedIds = purchasesData.map(
  //           (purchase: Purchase) => purchase.bookId
  //         );
  //         setPurchasedBookIds(purchasedIds);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchBooksAndPurchases();
  // }, [user]);

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-20 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
          {contents.map((book: BookType) => (
            <Book
              key={book.id}
              book={book}
              user={user}
              isPurchased={purchasedIds.includes(book.id)}
            />
          ))}
      </main>
    </>
  );
}
