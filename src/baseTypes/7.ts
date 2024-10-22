/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week{
  WORK_DAY,
  WEEKEND

}

function isWeekend(day:Week):boolean{
  if(day === Week.WEEKEND){
    return true;
  } else {
    return false;
  }
};