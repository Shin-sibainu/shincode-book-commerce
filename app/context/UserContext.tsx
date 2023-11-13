// "use client";

// import {
//   Dispatch,
//   SetStateAction,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { User } from "../types/types";
// import { supabase } from "../utils/supabaseClient";

// interface UserContextType {
//   user: User | null;
//   setUser: Dispatch<SetStateAction<User | null>>;
// }

// const UserContext = createContext<UserContextType | null>(null);

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<any | null>(null);

//   useEffect(() => {
//     const session = supabase.auth
//       .getSession()
//       .then((session) => setUser(session?.data.session?.user || null));

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         setUser(session?.user || null);
//       }
//     );

//     // console.log(user);

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
