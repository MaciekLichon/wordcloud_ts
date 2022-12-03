import styles from './Result.module.scss';
import Button from '../Button/Button';


interface Props {
    user: string,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number | undefined>>,
}

const Result: React.FC<Props> = ({ user, score, setScore }) => {
    return (
        <div className={styles.result}>
            <h2 className={styles.message}>
                Hi {user}!
                <br/>
                Your score:
                <br/>
                <span className={styles.score}>{score} points</span>
            </h2>
            <Button action={() => setScore(undefined)}>Play again</Button>
        </div>
    );
};

export default Result;