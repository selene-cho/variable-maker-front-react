import { useState } from 'react';
import styles from './Feedback.module.scss';
import { IoMegaphoneOutline } from 'react-icons/io5';
import FeedbackModal from './FeedbackModal';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';

export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Button onClick={openModalHandler}>
        <IoMegaphoneOutline className={styles.icon} />
        Feedback
      </Button>
      {isOpen && 
        <Modal closeModal={() => openModalHandler()}>
          <FeedbackModal />
        </Modal>
      }
    </>
  );
}

