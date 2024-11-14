import { useState } from "react"

export default function DateTimeShow() {
    const [time,setTime]=useState("")
    function getTime(){
        const instance = new Date()
        const TimeStr = `${instance.getHours()}:${instance.getMinutes()}:${instance.getSeconds()}`
        setTime(TimeStr)
    }
    setTimeout(getTime,1000)
  return (
    <div className="flex text-slate-600 justify-between">
      <div>
        {new Date().toDateString()}
      </div>
      <div>
        {time}
      </div>
    </div>
  )
}
