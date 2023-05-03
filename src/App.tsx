import styles from './App.module.scss';
import { Spinner } from './components/spinner/spinner';

function App() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}

export default App;
