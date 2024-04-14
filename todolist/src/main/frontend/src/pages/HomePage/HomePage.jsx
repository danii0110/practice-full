import styles from './HomePage.module.scss';
import TodoBox from './TodoBox';
import InputForm from './InputForm';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>TODO LIST</div>
      <div className={styles.main}>
        <div className={styles.mainArea}>
          <TodoBox todo='HTML' />
          <TodoBox todo='CSS' />
          <TodoBox todo='JAVASCRIPT' />
          <TodoBox todo='SPRING' />
        </div>
        <InputForm />
      </div>
    </div>
  );
}
export default HomePage;
