import  { useEffect, useState } from 'react'
import { TaskType } from '../../types/Types'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function TaskItem({task,setTaskData}:{task:TaskType,setTaskData:React.Dispatch<React.SetStateAction<TaskType[]>>}) {
    const [formData,setFormData]=useState<TaskType>()
    useEffect(()=>{
        setFormData(task)
    },[])
    const localData:TaskType[] = JSON.parse(localStorage.getItem('taskData')||"[]")
    const deleteTask = ()=>{

        setTaskData(()=>{
            const newArr = localData.filter(item=>item?.id!=task?.id)
            localStorage.setItem('taskData',JSON.stringify(newArr))
            return newArr
        })
        toast.success("task delete successfully")
    }
    const successItem = ()=>{
        setTaskData(()=>{
            const index = localData.findIndex(item=>item?.id==task?.id)
            const newArr =[...localData]
            newArr[index]={
                ...task,
                success:!task.success
            }
            localStorage.setItem('taskData',JSON.stringify(newArr))
            return newArr
        })
        toast.success("Task Completed")
    }

  return (
    <motion.tr initial={{opacity:0,translateY:4}} transition={{duration:0.6}} exit={{opacity:0,translateY:4}}  animate={{opacity:1,translateY:0}}  className="hover:bg-slate-50">
  
    <td className="p-4 border-b flex place-items-center gap-2 border-slate-200">
        <input checked={task?.success} onChange={successItem} type="checkbox" className=' accent-green-500 peer/check' />
      <p className="block peer-checked/check:line-through text-sm text-slate-800 px-3 py-1">{formData?.name}</p>
    </td>
    <td className="p-4 border-b border-slate-200">
      <p className={`block ${formData?.priroty=='importent'?"bg-red-500":formData?.priroty=='medium'?"bg-orange-400":"bg-green-500"} w-fit px-3 text-white text-sm rounded-md `}>{formData?.priroty}</p>
    </td>
    <td className="p-4 border-b border-slate-200">
      <p className="block text-sm text-slate-800">{formData?.time}</p>
    </td>
    <td className="p-4 border-b border-slate-200">
      <button onClick={deleteTask} className="block text-sm font-semibold bg-red-400 text-white px-3 py-1 rounded-md">
        Delete
      </button>
    </td>
  </motion.tr>
  )
}
