import { TaskType } from "../types/Types";

export function successItem(taskData:TaskType[],success:boolean){
    const succssData = taskData.filter(item=>item.success==true)
    const unsuccssData = taskData.filter(item=>item.success==false)
    return success?succssData:unsuccssData
}