import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <main className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={styles.heroBtn}>
          <button>Shop Now</button>
          <button className={styles.secBtn}>Category</button>
        </div>

        <div className={styles.Shopping}>
          <p>Also Available on</p>
          <div className={styles.brandImages}>
            <img src="/brand-images/flipkart.png" alt="flipkart" />
            <img src="/brand-images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/brand-images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};
export default HeroSection;
