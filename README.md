# Programming Joke Fetcher 

A React application that fetches and displays random programming jokes using the JokeAPI. Built as part of the Flatiron School Full-Stack Software Engineering program to demonstrate React hooks, state management, and API integration.

## Features

- Fetches a programming joke automatically when the page loads
- "Get a New Joke" button to fetch additional jokes on demand
- Loading state indicator while waiting for API responses
- Clean, responsive UI with styled components
- Error handling for failed API requests

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **JokeAPI** - External API for programming jokes
- **React Hooks** - `useState` and `useEffect` for state and side effects
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## Project Structure

```
src/
├── App.jsx              # Main component with state and API logic
├── App.css              # Styling for the application
├── components/
│   ├── FetchButton.jsx  # Button component for fetching new jokes
│   └── JokeDisplay.jsx  # Component for displaying jokes and loading state
└── __tests__/
    └── App.test.jsx     # Test suite for the application
```

## Component Breakdown

### App.jsx
- **State Management**: Uses `useState` to manage joke data and loading state
- **Side Effects**: Uses `useEffect` to fetch initial joke on component mount
- **API Integration**: Contains `fetchJoke` async function for API calls
- **Props Drilling**: Passes state and functions to child components

### FetchButton.jsx
- Receives `fetchJoke` function as a prop
- Triggers new joke fetch on button click
- Simple, reusable button component

### JokeDisplay.jsx
- Receives `joke` and `loading` state as props
- Conditional rendering using ternary operator
- Displays "Loading..." or the actual joke text

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shobinn24/react-side-effects-vite.git
   cd react-side-effects-vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Running Tests

```bash
npm test
```

The test suite includes:
- Loading state verification
- Initial joke fetch on component mount
- New joke fetch on button click

## API Reference

This project uses the [JokeAPI v2](https://v2.jokeapi.dev/)

**Endpoint**: `https://v2.jokeapi.dev/joke/Programming?type=single`


## Key Concepts Demonstrated

### 1. State Management with `useState`
```javascript
const [joke, setJoke] = useState('')
const [loading, setLoading] = useState(true)
```

### 2. Side Effects with `useEffect`
```javascript
useEffect(() => {
  fetchJoke()
}, []) // Empty dependency array = runs once on mount
```

### 3. Async/Await for API Calls
```javascript
const fetchJoke = async () => {
  setLoading(true)
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    setJoke(data.joke)
  } catch (error) {
    console.error('Error fetching joke:', error)
  } finally {
    setLoading(false)
  }
}
```

### 4. Props and Component Communication
- Parent component (`App`) manages state
- Child components receive data/functions via props
- Unidirectional data flow

### 5. Conditional Rendering
```javascript
<p>{loading ? 'Loading...' : joke}</p>
```

## Learning Objectives

This project covers:
- Using React Hooks (`useState`, `useEffect`)
- Fetching data from external APIs
- Managing loading states
- Component composition and props
- Event handling in React
- Conditional rendering
- Error handling in async operations
- Writing and passing component tests

## Future Enhancements

- Add joke categories filter
- Implement joke favorites/bookmarking
- Add animations for joke transitions
- Include joke rating system
- Add dark mode toggle
- Share jokes on social media

## Author

**Shobinn Clark**  
Full-Stack Software Engineering Student @ Flatiron School  

## License

This project is part of the Flatiron School curriculum and is intended for educational purposes.

