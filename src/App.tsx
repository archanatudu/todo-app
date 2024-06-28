import React from 'react'
import TaskList from './component/TaskList'
import CompletedTask from './component/CompletedTask'

const App:React.FC = () => {
  return (
    <>
    <TaskList/>
    <CompletedTask/>
    </>
  )
}

export default  App