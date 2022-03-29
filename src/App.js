import { useState, useEffect } from "react";
import Header from "./components/Header";
import Anagram from "./components/Anagram";
import Button from "./components/Button"

function App() {
  const [anagrams, setAnagrams] = useState(Array({"anagram": "-", "word": "-", "active": false}).fill(5))

  const qtt = 5
  useEffect(() => {
    refreshAnagrams()
  }, [])

  // Fetch anagrams
  const fetchAnagram = async () => {
    const res = await fetch('http://localhost:8000/anagram/')
    const data = await res.json()
    return data
  }

  // Refresh Anagram
  const refreshAnagrams = async () => {
    const fetchedAnagrams = []
    for (let i = 0; i < qtt; i++) {
      const anagramFromServer = await fetchAnagram()
      anagramFromServer['id'] = i
      anagramFromServer['active'] = false
      fetchedAnagrams[i] = anagramFromServer
    }
    console.log(fetchedAnagrams)
    setAnagrams(fetchedAnagrams)
  }

  const anagramsDisplay = []
  anagrams.forEach(function (element, i) {
    anagramsDisplay.push(<Anagram key={i} anagram={element.anagram} word={element.word} active={false}/>)
  });

  return (
    <div className="container">
      <Header />
      <div>
        <Button color='blue' text='Refresh' onClick={() => refreshAnagrams()} />
      </div>
      {anagramsDisplay}
      {/* <Anagram anagram={anagrams[0].anagram} word={anagrams[0].word}/>
      <Anagram anagram={anagrams[1].anagram} word={anagrams[1].word}/>
      <Anagram anagram={anagrams[2].anagram} word={anagrams[2].word}/>
      <Anagram anagram={anagrams[3].anagram} word={anagrams[3].word}/>
      <Anagram anagram={anagrams[4].anagram} word={anagrams[4].word}/> */}
      {/* <Answer length={anagrams[0].anagram.length} /> */}
    </div>
  );
}

export default App;
