import { ChangeEvent } from "react";
import { TaskType } from "../../types/Types";
import TaskTable from "../Tasktable/TaskTable";
import { earlyToLate } from "../../helpers/earlyToLate";
import { importentToLow } from "../../helpers/importentToLow";
import { successItem } from "../../helpers/successItem";


export default function TaskContainer({taskData,setTaskData}:{taskData:TaskType[],setTaskData:React.Dispatch<React.SetStateAction<TaskType[]>>}) {
  const localData:TaskType[] = JSON.parse(localStorage.getItem('taskData')||"")
    const searchItem=(e:ChangeEvent<HTMLInputElement>)=>{
      importentToLow(localData)
 
        setTaskData(()=>{
        
            const newArr = localData.filter(item=>{
                const smallname = item.name.toLowerCase()
                if(smallname.includes(e.target.value.toLowerCase())){
                    return item
                }
            })

            return newArr
        })
    }

    const SortData = (e:ChangeEvent<HTMLSelectElement>)=>{
      const {value}=e.target
      switch(value){
        case 'etol':
          setTaskData(earlyToLate(localData,false))
          return
        case 'ltoe':
          setTaskData(earlyToLate(localData,true))
          return
        case 'ltoi':
          setTaskData(importentToLow(localData,true))
          return
        case 'itol':
          setTaskData(importentToLow(localData,false))
          return
        case 'suc':
          setTaskData(successItem(localData,true))
          return
          case 'unsuc':
            setTaskData(successItem(localData,false))
            return

      }
    }
  return (
    <div>
      <div className="header mt-12 flex md:flex-row flex-col gap-3 justify-between md:place-items-center">
        <h1 className="text-2xl text-slate-600">Task Manager</h1>
        <div className="flex gap-4">
          <input onChange={searchItem} className="px-3 py-2 border rounded-md" placeholder="Search Task" type="search" name="" id="" />
          <div className="flex justify-center place-items-center px-4 border rounded-md">
            <select onChange={SortData} name="priroty" id="" className="bg-white">
              <option disabled selected value="">
                Sort By
              </option>
              <option value="etol">Early To Late</option>
              <option value="ltoe">Late To Early</option>
              <option value="itol">Importent To Low</option>
              <option value="ltoi">Low to Importent</option>
              <option value="suc">Completed</option>
              <option value="unsuc">Incompleted</option>


            </select>
          </div>
        </div>
      </div>
      <TaskTable setTaskData={setTaskData} taskData={taskData}/>
    </div>
  );
}
