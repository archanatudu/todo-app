import React from 'react'
import TaskList from './component/TaskList'
import CompletedTask from './component/CompletedTask'
import './App.scss';

const App:React.FC = () => {
  return (
    <>
      <div className ="todo_app_section">
    
        <div className ="todo_app_container">

          <div className="new_task_list task_list">
            <h1>Task List</h1>
            <div>
              <TaskList/>
            </div>
          </div>

        
          <div className="completed_task_list task_list">
            <h1> Completed Task</h1>
            <div>
              <CompletedTask/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default  App