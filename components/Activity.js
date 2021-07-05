import styles from "../styles/Activity.module.css";

const Activity = ({ action, name }) => {
  const mountText = (action = "", name = "") => {
    switch (action) {
      case "Listen":
        return (
          <>
            <h1 className={styles.text}>hey babes now go listen to</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "Play":
        return (
          <>
            <h1 className={styles.text}>now it's time to play a bit of</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "Read":
        return (
          <>
            <h1 className={styles.text}>stop being a lil bitch and go read</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "Watch":
        return (
          <>
            <h1 className={styles.text}>sit back and get ready to watch</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "Procrastinate":
        return (
          <>
            <h1 className={styles.text}>lol go do something useless on</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "Practice":
        return (
          <>
            <h1 className={styles.text}>how about you go practice a bit of</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      case "FETCHING":
        return (
          <>
            <h1 className={styles.text}>asking notion what you'll do</h1>
            <h1 className={styles.text}>{name}</h1>
          </>
        );
      case "IDLE":
        return (
          <>
            <h1 className={styles.text}>so you've got some freetime huh?</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );

      case "EMPTY":
        return (
          <>
            <h1 className={styles.text}>notion got me nothing for you</h1>
            <h1 className={styles.accent}>{name}</h1>
          </>
        );
      default:
        return <h1 className={styles.text}>wanna do something?</h1>;
    }
  };
  return <>{mountText(action, name)}</>;
};
export default Activity;
