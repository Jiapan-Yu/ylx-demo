// excerpts from "Coding Tip_ Try to Code Without If-statements – jsComplete EdgeCoders" pdf file

let weekendOrWeekday = inputDate => {
  const day = inputDate.getDay();

  return weekendOrWeekday.labels[day] || weekendOrWeekday.labels['default']
}

weekendOrWeekday.labels = {
  0: 'weekend',
  6: 'weekend',
  default: 'weekday'
};

console.log(weekendOrWeekday(new Date()));
