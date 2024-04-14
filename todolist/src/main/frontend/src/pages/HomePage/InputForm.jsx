import styles from './InputForm.module.scss';
import addBtn from '../../assets/images/addBtn.svg';

function InputForm() {
  return (
    <div className={styles.container}>
      <input type='text' placeholder='What needs to be done?'></input>
      <button type='button' className={styles.addBtn}>
        <img src={addBtn} alt='profile' className={styles.profileImg} />
      </button>
    </div>
  );
}
export default InputForm;
