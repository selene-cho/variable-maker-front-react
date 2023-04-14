import Variable from './Variable';
import styles from './Home.module.scss';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Variable />
      <Search />
    </div>
  );
}
