import { useState } from 'react';
import styles from './FeedbackModal.module.scss';

export default function FeedbackModal() {
  const [disabled, setDisabled] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = ({ target: {value} }) => setFeedback(value)
  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setDisabled(false);
  }
  return (
    <div className={styles.feedback}>
      <h1 className={styles.title}>Feedback</h1>
      <form className={styles.form}>
        <textarea 
          className={styles.content}
          name="feedback"
          value={feedback}
          onChange={handleChange}
          placeholder=' &#13;&#10;✏️ 시간내어 작성해주신 소중한 피드백 💛&#13;&#10;&#13;&#10; 🙇🏻‍♀️ 미리 감사드립니다!! 🙇🏻‍♂️'
          required
        />
        <button 
          className={styles.submit} 
          type="submit"
          disabled={disabled}
          onSubmit={handleSubmit}
        >
          보내기
        </button>
      </form>
    </div>
  );
}

