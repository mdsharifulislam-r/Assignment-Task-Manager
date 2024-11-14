
import TaskItem from './TaskItem'
import { TaskType } from '../../types/Types'

export default function TaskTable({taskData,setTaskData}:{taskData:TaskType[],setTaskData:React.Dispatch<React.SetStateAction<TaskType[]>>}) {
const data = taskData?.map(item=>(
  <TaskItem task={item} key={item?.id} setTaskData={setTaskData}/>
))
  return (
    <div className="relative flex pt-3 flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
  <table className="w-full text-left  min-w-max">
    <thead>
      <tr>
        
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            Name
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            Priroty
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            Time
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500" />
        </th>
      </tr>
    </thead>
    <tbody>
     {data}
   
    </tbody>
  </table>
</div>

  )
}
