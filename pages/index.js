import { useState } from "react";
import ActionList from "../components/ActionList";
import Activity from "../components/Activity";
import Button from "../components/Button";
import { server } from "../config";
import styles from "../styles/Home.module.css";
import {
  fetchActivities,
  getRandomActivity,
} from "../controllers/ActivityController";

export default function Home({ activities }) {
  const [activity, setActivity] = useState({
    name: "lets see what you'll do now...",
    action: "IDLE",
  });

  const [activitiesList, setActivitiesList] = useState(activities);

  const [diffActivities, setDiffActivities] = useState(false);

  const [actions, setActions] = useState([
    {
      name: "Play",
      isActive: false,
    },
    {
      name: "Watch",
      isActive: false,
    },
    {
      name: "Read",
      isActive: false,
    },
    {
      name: "Listen",
      isActive: false,
    },
    {
      name: "Practice",
      isActive: false,
    },
    {
      name: "Procrastinate",
      isActive: false,
    },
  ]);

  const getNewActivity = async () => {
    if (diffActivities) {
      setActivity({ name: "please wait :)", action: "FETCHING" });
      const response = await fetchActivities(actions);
      if (!response.length) {
        setActivity({ name: "try changing the categorires?", action: "EMPTY" });
      } else {
        setActivitiesList(response);
        setDiffActivities(false);
        setActivity(getRandomActivity(response));
      }
    } else setActivity(getRandomActivity(activitiesList));
  };

  const toggleAction = (name) => {
    let newActions = actions.map((action) => {
      if (action.name == name) {
        const updatedAction = {
          ...action,
          isActive: !action.isActive,
        };

        return updatedAction;
      }

      return action;
    });

    setActions(newActions);
    setDiffActivities(true);
  };

  return (
    <div className={styles.container}>
      <ActionList actions={actions} onToggle={toggleAction} />
      <Activity action={activity.action} name={activity.name} />
      <Button text={"?"} onClick={async () => await getNewActivity()} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/activities`);

  const activities = await res.json();

  return {
    props: {
      activities,
    },
  };
};
