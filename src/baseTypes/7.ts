/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  MONDAY, TUESDAY, WEDNDESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

function isWeekend(day: Weekday): boolean {
  if (day < 5) {
    return false;
  }
  return true;
}