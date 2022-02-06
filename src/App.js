import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Anagram from "./components/Anagram";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [anagram, setAnagram] = useState([])
  const [word, setWord] = useState([])


  useEffect(() => {
    const getAnagram = async () => {
      const anagramFromServer = await fetchAnagram()
      setAnagram(anagramFromServer.anagram)
      setWord(anagramFromServer.word)
    }

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    // getTasks()
    getAnagram()
  }, [])

  // Fetch anagrams
  const fetchAnagram = async () => {
    const res = await fetch('http://localhost:8000/anagram/')
    const data = await res.json()
    console.log(data)
    return data
  }

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks', {mode: 'no-cors'})
    const data = await res.json()

    return data
  }

  // Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  // Delete Task 
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  // Refresh Anagram
  const refreshAnagram = async () => {
    const anagramFromServer = await fetchAnagram()
      setAnagram(anagramFromServer.anagram)
      setWord(anagramFromServer.word)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to show')}
      <Anagram anagram={anagram} onRefresh={() => refreshAnagram()} />
      <div>{word}</div>
    </div>
  );
}

export default App;
