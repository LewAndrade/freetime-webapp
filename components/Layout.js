import styles from "../styles/Layout.module.css";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <div className={styles.container}> */}
      <main className={styles.container}>{children}</main>
      {/* </div> */}
    </>
  );
};

export default Layout;
