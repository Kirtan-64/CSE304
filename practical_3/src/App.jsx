import './App.css'
import { useState } from 'react';

function App() {
  const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const futureDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();
const [time, setTime] = useState(new Date().toLocaleTimeString());

setInterval(() => {
  setTime(new Date().toLocaleTimeString());
},1000);

  return (
    <div className='container'>
      <div className='heading-1'>Welcome to Charusat</div>
      <div className='content'>The date is: {currDate}</div>
      <div className='content'>The time is: {time}</div>
      <div className='content'>The date after 5 days will be: {futureDate}</div>
    </div>
  )
}

export default App
