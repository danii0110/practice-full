import style from './todoBox.module.scss';
import editImg from '../../assets/images/editImg.png';
import minusImg from '../../assets/images/minusImg.png';

function todoBox() {
  return (
    <div className={style.container}>
      <input type='checkbox' id='check_btn' />
      <label for='check_btn' />
      <div className={style.todo}>HTML</div>
      <div className={style.buttonArea}>
        <button>
          <img src={editImg} alt='edit-img' />
        </button>
        <button>
          <img src={minusImg} alt='minus-img' />
        </button>
      </div>
    </div>
  );
}

export default todoBox;
