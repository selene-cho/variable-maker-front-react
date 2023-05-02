import { useState } from 'react';
import styles from './FeedbackModal.module.scss';
import axios from 'axios';

const SLACK_URL = process.env.REACT_APP_SLACK_WEBHOOKS_URL;

export default function FeedbackModal() {
  const [disabled, setDisabled] = useState(false);
  const [feedback, setFeedback] = useState('');

  const sendFeedback = async (text) => {
    // console.log('text', text);
    try {
      const data = await axios({
        method: 'POST',
        url: 'https://cors-anywhere.herokuapp.com/' + SLACK_URL,
        // url: SLACK_URL,
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          blocks: [
            {
              type: 'section',
              text: {
                type: 'plain_text',
                text,
                emoji: true,
              },
            },
            {
              type: 'divider',
            },
          ],
        },
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setFeedback(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    await new Promise((r) => setTimeout(r, 1000));
    sendFeedback(feedback);
    setFeedback('');
    setDisabled(false);
  };

  return (
    <div className={styles.feedback}>
      <h1 className={styles.title}>Feedback</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.content}
          name="feedback"
          value={feedback}
          onChange={handleChange}
          placeholder=" &#13;&#10;✏️ 시간내어 작성해주신 소중한 피드백 💛&#13;&#10;&#13;&#10; 🙇🏻‍♀️ 미리 감사드립니다!! 🙇🏻‍♂️"
          required
        />
        <button className={styles.submit} type="submit" disabled={disabled}>
          보내기
        </button>
      </form>
    </div>
  );
}
