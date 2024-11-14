import { TaskType } from "../types/Types";

export function importentToLow(taskData:TaskType[],isLow:boolean=false){
    const importent4 = taskData.filter(item=>item.priroty=='importent')
    const medium = taskData.filter(item=>item.priroty=='medium')
    const low = taskData.filter(item=>item.priroty=='low')
    const itol = importent4.concat(medium,low)
    const ltoi = low.concat(medium,importent4)
    return isLow?ltoi:itol
}