import styles from './TodoBox.module.scss';
import editBtnImg from '../../assets/images/editBtn.svg';
import deleteBtnImg from '../../assets/images/deleteBtn.svg';

function TodoBox(props) {
  const handleEditClick = () => {
    //편집 버튼 클릭 시 처리할 로직 작성
  };

  const handleDeleteClick = () => {
    //삭제 버튼 클릭 시 처리할 로직 작성
  };
  return (
    <div className={styles.container}>
      <input type='checkbox' id='check_btn' />
      <label for='check_btn' />
      <div className={styles.todo}>{props.todo}</div>
      <div className={styles.buttonArea}>
        <button type='button' onClick={handleEditClick}>
          <img src={editBtnImg} alt='profile' className={styles.editBtnImg} />
        </button>
        <button type='button' onClick={handleDeleteClick}>
          <img src={deleteBtnImg} alt='profile' className={styles.deleteBtnImg} />
        </button>
      </div>
    </div>
  );
}

export default TodoBox;
