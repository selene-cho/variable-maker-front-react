import { IoClose } from 'react-icons/io5';
import styles from './Modal.module.scss';

export default function Modal({closeModal, children}) {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeModal}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
}

