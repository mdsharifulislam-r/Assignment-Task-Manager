import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { TaskType } from "../../types/Types"
import toast from "react-hot-toast"


export default function TaskForm({setTaskData}:{setTaskData:React.Dispatch<React.SetStateAction<TaskType[]>>}) {
    const [formData,setFormData]=useState<TaskType>({
        name:"",
        time:"",
        priroty:"",
        success:false
    })
    
    const FormRef = useRef<HTMLFormElement|null>(null)
    const addValue = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const {name,time,priroty} = formData
        if(!name || !time || !priroty){
            toast.error('Please fill all required field')
            return
        }
        setTaskData(prev=>{
            const timeExist = prev.some(item=>item.time==time)
            if(timeExist){
                toast.error("Time is already booked")
                return prev
            }
            const newArr = [...prev,{
                id:Math.random().toString(),
                ...formData
            }]
            localStorage.setItem('taskData',JSON.stringify(newArr))
            return newArr
        })
        toast.success('Task add successfully')

        setFormData({
            name:"",
        time:"",
        priroty:"",
        success:false
        })
        FormRef?.current?.reset()
        
    }
  return (
    <form ref={FormRef} onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-3">
      <input type="text" onChange={addValue} name="name" id="" className="px-3 py-2 border rounded-md focus:outline-none focus:shadow-lg" placeholder="Task Here" />
      <div className="flex place-items-center gap-2 ">
      <input type="time" onChange={addValue} name="time" id="" className="px-3 py-2 border rounded-md focus:outline-none focus:shadow-lg" />
      <div className="flex py-2 justify-center h-full place-items-center px-4 border rounded-md">
        <select name="priroty" onChange={addValue} id="" className="bg-white">
            <option disabled selected value="">Priroty</option>
            <option value="importent">Importent</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
      </div>
      <button className="bg-slate-600 py-2 h-full px-3 text-white font-bold rounded-md">Add Task</button>
      </div>
      
      
    </form>
  )
}
