import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'
import './App.css'

function App() {
  // set up state for joke and loading status
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  // create fetchJoke function to get jokes from API
  const fetchJoke = async () => {
    setLoading(true)
    try {
      const response = await
      fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      const data = await response.json()
      setJoke(data.joke)
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke('Failed to fetch joke. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  // Use useEffect to fetch joke when component mounts
  useEffect(() => {
    fetchJoke()
  }, []) // enpty dependency array mean this runs once on mount
  

  return (
    <div className="App">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
