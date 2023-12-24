import React from 'react'
import {NewTask, taskDataInterface} from "../index";

interface TaskInterface {
  onAddTask: (task: string) => void
  onDeleteTask: (projectid: number, taskid: number) => void
  tasks: taskDataInterface[]
  projectid: number
}

export const Tasks = ({onAddTask, onDeleteTask, tasks, projectid}: TaskInterface) => {

  const handleDeleteClick = (taskid: number) => {
    onDeleteTask(projectid, taskid)
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask}/>

      <ul className="mt-3">
        {
          tasks.length === 0 && <p className="text-stone-800 my-4">There are no tasks yet</p>
        }
        {
          tasks.length > 0 && tasks.map((t) => {
            return (
              <li key={t.id} className="mb-2 bg-stone-100 hover:bg-stone-200">
                <button
                  className="text-red-500 font-bold mr-4 bg-stone-300 px-2 py-1 rounded-md hover:bg-stone-300"
                  onClick={() => handleDeleteClick(t.id)}
                >X</button>
                {t.task}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
