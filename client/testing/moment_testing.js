const moment = require("moment");

findProgress = (timestamps, created, goal) => {
    const goalDate = moment(created).add(goal, 'days');
    const daysCompleted = moment().diff(created, 'days');
    const daysRemaining = goalDate.diff(moment(), 'days');
    const percentage = Math.round((timestamps.length / daysCompleted) * 100);

    const progress = { goalDate: goalDate.format(), daysCompleted, daysRemaining, percentage };

    return progress;
}

const timestamps = ['check in 1', 'check in 2', 'check in 3', 'check in 4'];
const created = "2019-06-10T12:24:19-04:00";
const goal = 30;

thisProgress = findProgress(timestamps, created, goal);

console.log(thisProgress);