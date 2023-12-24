import React, {useState} from 'react'

interface NewTaskInterface {
  onAddTask: (enteredTask: string) => void
}

export const NewTask = ({onAddTask}: NewTaskInterface) => {

  const [enteredTask, setEnteredTask] = useState<string>('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredTask(event.currentTarget.value)
  }

  const handleClick = () => {
    // Forward value to App component
    onAddTask(enteredTask)
    // Empty the string
    setEnteredTask('')

  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 ps-2 py-2 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />

      <button
        className="text-stone-700 hover:text-stone-100 px-3 py-1 bg-stone-200 rounded-md hover:bg-stone-600"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  )
}
