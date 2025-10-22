import styles from './HomePage.module.css'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

function HomePage() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={[styles.logo, styles.react].join(" ")} alt="React logo" />
        </a>
      </div>
      <h1>This is the Home Page, your grace!</h1>
      <div className={styles.card}>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default HomePage