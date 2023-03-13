export const getTasksByFeatureId = (tasks, featureId: number) =>
  tasks.filter((task) => task.featureId === featureId);

export const getMilestoneItemsByMilestoneId = (
  milestoneItems,
  milestoneId: number
) => milestoneItems.filter((item) => item.milestoneId === milestoneId);

export const getMilestoneTotalEstimationByMilestoneId = (
  milestoneItems,
  milestoneId: number
) =>
  getMilestoneItemsByMilestoneId(milestoneItems, milestoneId).reduce(
    (curr, next) => curr + (next.estimation || 0),
    0
  );

export const getPluralWordEnding = (count: number) => (count > 1 ? 's' : '');

export const getHumanizedTime = (
  hoursOriginalValue: number,
  options //= { hoursInDay: 8, daysInWeek: 5 }
) => {
  const { hoursInDay, daysInWeek } = options || {
    hoursInDay: 8,
    daysInWeek: 5,
  };

  let hours = hoursOriginalValue;
  let weeks = 0;

  const hoursInWeek = hoursInDay * daysInWeek;
  if (hours >= hoursInWeek) {
    weeks = Math.trunc(hours / hoursInWeek);
    hours = hours - weeks * hoursInWeek;
  }

  let days = 0;
  if (hours >= hoursInDay) {
    days = Math.trunc(hours / hoursInDay);
    hours = hours - days * hoursInDay;
  }

  hours = hours % hoursInDay;

  let humanizedTimeString = [];
  if (weeks > 0) {
    humanizedTimeString.push(`${weeks} week${getPluralWordEnding(weeks)}`);
  }
  if (days > 0) {
    humanizedTimeString.push(`${days} day${getPluralWordEnding(days)}`);
  }
  if (hours > 0) {
    humanizedTimeString.push(`${hours} hour${getPluralWordEnding(hours)}`);
  }

  return humanizedTimeString.join(' ');
};
