import style from './HomePage.module.scss';
import TodoBox from '../../components/todoBox/todoBox';
import plusImg from '../../assets/images/plusImg.png';

function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.header}>TODO LIST</div>
      <div className={style.main}>
        <div className={style.inputArea}>
          <input type='text' placeholder='What needs to be done?'></input>
          <button>
            <img src={plusImg} alt='plus-img' />
          </button>
        </div>
        <div className={style.mainArea}>
          <TodoBox />
          <TodoBox />
          <TodoBox />
          <TodoBox />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
