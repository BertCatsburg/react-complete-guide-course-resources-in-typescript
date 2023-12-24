import React from 'react'
import {Button} from "../UI/Button"
import {projectDataInterface} from "../index"


interface ProjectsSidebarInterface {
  onStartAddProject: () => void
  onSelectProject: (id: number) => void
  projects: projectDataInterface[]
  selectedProjectId: number | null | undefined
}

export const ProjectsSidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}: ProjectsSidebarInterface) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {
          projects.map((p) => {

            let cssClasses = "w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800"

            if (p.id === selectedProjectId) {
              cssClasses += ' bg-stone-800 text-stone-200'
            } else {
              cssClasses += ' text-stone-400'
            }
            return (
              <li key={p.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectProject(p.id)}
                >
                  {p.title}
                </button>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}
