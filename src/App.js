import { useState, useEffect } from "react";
import Header from "./components/Header";
import Anagram from "./components/Anagram";
import Answer from "./components/Answer";
import Button from "./components/Button";

function App() {
  const [anagrams, setAnagrams] = useState(Array({"anagram": "ttees", "word": "teste", "size": 5}).fill(5))
  const [activeAnagram, setActiveAnagram] = useState(0)

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
      fetchedAnagrams[i] = anagramFromServer
    }
    setAnagrams(fetchedAnagrams)
  }

  // Refresh Anagram
  const setNextActive = async () => {
    var nextActive = 0
    if (activeAnagram===qtt-1) {
      nextActive = 0
    } else {
      nextActive = activeAnagram + 1
    }  
    setActiveAnagram(nextActive)
  }

  const anagramsDisplay = []
  var isActive = false
  anagrams.forEach(function (element, i) {
    isActive = false
    if (i===activeAnagram) {
      isActive = true
    }
    anagramsDisplay.push(<Anagram key={i} anagram={element.anagram} word={element.word} active={isActive}/>)
  });

  return (
    <div className="container">
      <Header />
      <div>
        <Button color='blue' text='Refresh' onClick={() => refreshAnagrams()} />
        {/* <Button color='orange' text='Set Next Active' onClick={() => setNextActive()} /> */}
      </div>
      {anagramsDisplay}
      <Answer length={anagrams[activeAnagram].size} word={anagrams[activeAnagram].word} setNextActive={() => setNextActive()}/>
    </div>
  );
}

export default App;
