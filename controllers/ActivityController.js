import { server } from "../config/index";

function getRandomActivity(activities) {
  return activities[Math.floor(Math.random() * activities.length)];
}

const fetchActivities = async (actions) => {
  const actionsParam = actions
    .filter((action) => action.isActive)
    .map((action) => action.name)
    .toString();

  const query = actionsParam ? `?actions=` + actionsParam : "";

  const res = await fetch(`${server}/api/activities${query}`);

  const activities = await res.json();
  return activities;
};

export { getRandomActivity, fetchActivities };
