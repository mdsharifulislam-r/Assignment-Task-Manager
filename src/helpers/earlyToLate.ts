import { TaskType } from "../types/Types";
import { timeToSeconds } from "./timeToSeconds";

export function earlyToLate(taskData:TaskType[],early:boolean=false){
    const earlyArr = taskData.sort((a,b)=>timeToSeconds(b.time)-timeToSeconds(a.time))
    const LateArr = taskData.sort((a,b)=>timeToSeconds(a.time)-timeToSeconds(b.time))
 
    return early?earlyArr:LateArr
    
    
}