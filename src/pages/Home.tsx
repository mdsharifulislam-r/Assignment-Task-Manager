import { useState } from "react";
import DateTimeShow from "../components/Home/DateTimeShow";
import TaskContainer from "../components/Home/TaskContainer";
import TaskForm from "../components/Home/TaskForm";
import { TaskType } from "../types/Types";

export default function Home() {
  const localData = JSON.parse(localStorage.getItem('taskData')||"")
  const [taskData,setTaskData]=useState<TaskType[]>(localData)
  
  return (
    <div className="w-full bg-blue-100 min-h-screen">
      <div className="container min-h-screen py-4 mx-auto flex justify-center place-items-center">
        <div className="md:w-[80%] w-[95%] min-h-56 rounded-md shadow-lg border p-5 bg-white">
            <DateTimeShow/>
            <div className="pt-3">
              <TaskForm setTaskData={setTaskData} />
              <TaskContainer taskData={taskData} setTaskData={setTaskData}/>
            </div>
        </div>
      </div>
    </div>
  )
}
