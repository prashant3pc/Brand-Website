import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className="container">
      <div className={styles.logo}>
        <img src="/brand-images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default Navigation;
