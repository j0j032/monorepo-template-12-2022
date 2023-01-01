import styles from './App.module.scss';
import { Button } from 'ui';
import { capitalizeAllLongWords } from 'functions';

function App() {
    return (
        <div className={styles.app}>
            <Button
                label={capitalizeAllLongWords('hello world')}
                onClick={() => console.log('clicked')}
                backgroundColor="#367345"
            />
        </div>
    );
}

export default App;
