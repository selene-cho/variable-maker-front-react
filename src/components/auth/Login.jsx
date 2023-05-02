import { CiMail } from 'react-icons/ci';
import { TfiKey } from 'react-icons/tfi';
import Logo from '../common/Logo';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import SocialLogin from './SocialLogin';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // const mutation = useMutation(usernameLogIn, {
  //   onMutate: () => {
  //     console.log('mutation starting');
  //   },
  //   onSuccess: () => {
  //     console.log('mutation is successful, API CALL SUCCESS');
  //     queryClient.refetchQueries(['myinfo']);
  //     navigate('/');
  //   },
  //   onError: () => {
  //     console.log('mutation has an error, API CALL ERROR');
  //   },
  // });

  // const onSubmit = ({ username, password }) => {
  //   mutation.mutate({ username, password });
  // };

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.inputBox}>
            <CiMail className={styles.icon} />
            <input
              type="text"
              {...register('email', {
                required: '이메일을 입력해주세요',
              })}
              placeholder="이메일"
            />
          </div>
          <div className={styles.inputBox}>
            <TfiKey className={styles.icon} />
            <input
              type="password"
              {...register('email', {
                required: '비밀번호를 입력해주세요',
              })}
              placeholder="비밀번호"
            />
          </div>
        </form>
        <div className={styles.divider}>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <div className={styles.socialLogin}>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
