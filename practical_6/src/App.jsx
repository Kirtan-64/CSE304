import { useEffect, useState } from 'react'
import ListItem from './ListItem';

function App() {
  const [list, setList] = useState([{id: 1, text: 'Learn React'}, {id: 2, text: 'Learn Vue'}]);

  const onDelete = (id) => {
    // delete the item from the list
    const newList = list.filter(item => item.id !== id);
    setList(newList);

    // update the local storage
    localStorage.setItem('list', JSON.stringify(newList));
  }

  const onAdd = (text) => {
    // add the item to the list
    const newList = [...list, {id: list.length + 1, text}];
    setList(newList);

    // update the local storage
    localStorage.setItem('list', JSON.stringify(newList));
  }



  localStorage.setItem('list', JSON.stringify(list));

  useEffect(() => {
    // fetch the list from the local storage
    const list = localStorage.getItem('list');
    if (list) {
      setList(JSON.parse(list));
    }
  }, [])

  return (
    <>
      <div className="p-8 bg-violet-500">
        <div className="p-12 bg-blue-900 flex flex-col justify-center w-full">
          <div className="flex justify-center w-full">
            <h1 className='text-xl text-white p-5'>Get Things Done!</h1>
          </div>
          <div className='flex flex-row justify-center w-full'>
            <input type='text' className='p-2' placeholder='Add a new task' />
            <button className='p-2 bg-violet-500 text-white' onClick={() => onAdd('Learn Angular')}>Add Task</button>
          </div>
          <div className='p-2 felx flex-col justify-center w-full'>
            {/* here will come the list component */}
            <ListItem item='Learn React' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
