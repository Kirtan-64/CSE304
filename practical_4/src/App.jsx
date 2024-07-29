import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleIncrement = () => {
    setCount((prev) =>  prev + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  }

  const handleIncrement5 = () => {
    setCount((prev) => prev + 5);
  }

  const handleFirstname = (e) => {
    let value = e.target.value;
    console.log(value);
    setFirstname(value);
  }

  const handleLastname = (e) => {
    let value = e.target.value;
    console.log(value)
    setLastname(value);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Count: {count}</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleReset}>Reset</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleIncrement}>Increment</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleDecrement}>Decrement</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md" onClick={handleIncrement5}>Increment by 5</button>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Welcome to charusat</h1>
        </div>
        <div className="mt-4">
          <input className="px-4 py-2 border border-gray-300 rounded-md" name="firstname" onChange={handleFirstname} />
        </div>
        <div className="mt-2">
          <input className="px-4 py-2 border border-gray-300 rounded-md" name="lastname" onChange={handleLastname} />
        </div>
        <div className="mt-4">Firstname: {firstname}</div>
        <div className="mt-2">Lastname: {lastname}</div>
      </div>
    </>
  )
}

export default App
