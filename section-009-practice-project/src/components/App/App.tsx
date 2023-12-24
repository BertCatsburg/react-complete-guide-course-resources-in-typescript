import React, {useState} from 'react'
import {ProjectsSidebar, NoProjectSelected, NewProject, projectDataInterface, SelectedProject, taskDataInterface} from "../index";

interface projectStateInterface {
  selectedProjectId: number | undefined | null
  projects: projectDataInterface[]
  tasks: taskDataInterface[]
}


export const App = () => {

  const [projectsState, setProjectsState] = useState<projectStateInterface>({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  const handleAddTask = (task: string) => {
    setProjectsState((oldState => {
      const newTask = {
        id: Math.random(),
        projectId: oldState.selectedProjectId as number,
        task: task
      }

      const newTaskList: taskDataInterface[] = [...oldState.tasks, newTask]
      return {
        ...oldState,
        tasks: newTaskList,
      }
    }))
  }

  const handleDeleteTask = (projectid: number, taskid: number) => {
    setProjectsState((oldState) => {
      const newTaskList: taskDataInterface[] = oldState.tasks.filter((t) => {
        return !(t.id === taskid && t.projectId === projectid);
      })

      return {
        ...oldState,
        tasks: newTaskList
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectsState(oldState => {
      return {
        ...oldState,
        selectedProjectId: null,
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(oldState => {
      return {
        ...oldState,
        selectedProjectId: undefined,
      }
    })
  }


  const handleAddProject = (projectData: projectDataInterface) => {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          newProject,
        ]
      }
    })
  }

  const handleSelectProject = (id: number) => {
    setProjectsState(oldState => {
      return {
        ...oldState,
        selectedProjectId: id,
      }
    })
  }

  const handleDeleteProject = (id: number): void => {
    setProjectsState(oldState => {
      const newStateProjects = oldState.projects.filter((p) => p.id !== id)
      return {
        ...oldState,
        projects: newStateProjects,
        selectedProjectId: undefined
      }
    })
  }

  const selectedProject = projectsState.projects
    .find(p => p.id === projectsState.selectedProjectId)
  let content = selectedProject
    ? <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasksForThisProject={projectsState.tasks.filter((t) => selectedProject.id === t.projectId)}
    />
    : null;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

