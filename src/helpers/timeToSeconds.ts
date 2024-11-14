export function timeToSeconds(time: string): number {
    const [minutes, seconds] = time.split(':').map(Number);
  
    if (isNaN(minutes) || isNaN(seconds)) {
      throw new Error("Invalid time format. Please use 'hh:mm:ss'.");
    }
  
    return minutes * 60 + seconds;
  }
  