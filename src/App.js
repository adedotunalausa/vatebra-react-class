import GitHubUsers from "./GitHubUsers";
import "./index.css";
import { createContext, useContext } from "react";

export const MyAppContext = createContext();

export const useMyAppContext = () => useContext(MyAppContext);

const App = () => {
  const movieList = [
    {
      id: 1,
      image: "https://static.bunnycdn.ru/i/cache/images/9/9f/9f2b3516bf3b43a5eec8d7ece7f2fd42.jpg-w380",
      title: "John Wick: Chapter 4",
      year: "2023",
      duration: "169 min",
      type: "Movie",
      tagColor: "red"
    },
    {
      id: 2,
      image: "https://static.bunnycdn.ru/i/cache/images/b/bb/bba502d6ca211528284128fb5703febb.jpg-w380",
      title: "Shazam! Fury of the Gods",
      year: "2023",
      duration: "130 min",
      type: "Movie",
      tagColor: "blue"
    },
    {
      id: 3,
      image: "https://static.bunnycdn.ru/i/cache/images/9/94/941fbc9ad932fd150769a382ff59d13a.jpg-w380",
      title: "Glass Onion: A Knives Out Mystery",
      year: "2022",
      duration: "139 min",
      type: "Movie",
      tagColor: "green"
    },
  ];
  return (
    <MyAppContext.Provider value={{ movieList, name: "Chief Eberechi" }} >
      <main>
        <GitHubUsers />
      </main>
    </MyAppContext.Provider>
  )
}

export default App
