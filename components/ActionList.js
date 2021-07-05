import styles from "../styles/ActionList.module.css";

const ActionList = ({ actions, onToggle }) => {
  return (
    <div className={styles.list}>
      {actions.map((action) => (
        <div className={styles.action} key={action.name}>
          {action.name}
          <label className={styles.togglecontrol}>
            <input
              type="checkbox"
              checked={action.isActive}
              onChange={() => onToggle(action.name)}
            />
            <span className={styles.control}></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ActionList;
