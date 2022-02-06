import { useState, useEffect } from "react";
import Header from "./components/Header";
import Anagram from "./components/Anagram";
import Answer from "./components/Answer";

function App() {
  const [anagram, setAnagram] = useState("")
  const [word, setWord] = useState("")


  useEffect(() => {
    const getAnagram = async () => {
      const anagramFromServer = await fetchAnagram()
      setAnagram(anagramFromServer.anagram)
      setWord(anagramFromServer.word)
    }
    getAnagram()
  }, [])

  // Fetch anagrams
  const fetchAnagram = async () => {
    const res = await fetch('http://localhost:8000/anagram/')
    const data = await res.json()
    return data
  }

  // Refresh Anagram
  const refreshAnagram = async () => {
    const anagramFromServer = await fetchAnagram()
    setAnagram(anagramFromServer.anagram)
    setWord(anagramFromServer.word)
  }

  return (
    <div className="container">
      <Header />
      <Anagram anagram={anagram} onRefresh={() => refreshAnagram()} />
      <Answer length={anagram.length}/>
    </div>
  );
}

export default App;
