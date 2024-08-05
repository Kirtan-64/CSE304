import { useState } from 'react'

function App() {
  const [list, setList] = useState([]);

  setList([{ id: 1, title: 'Task 1', isCompleted: false }]);

  return (
    <>
      <div className="p-8 bg-violet-500">
        <div className="p-12 bg-blue-900 flex flex-col">
          <div>
            <h1 className='text-xl text-white'>Get Things Done!</h1>
          </div>
          <div>
            <input type='text' />
          </div>
          <div className='p-2 felx flex-col'>
            {/* here will come the list component */}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
