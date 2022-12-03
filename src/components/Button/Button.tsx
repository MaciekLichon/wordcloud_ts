import styles from './Button.module.scss';


interface Props {
    children: React.ReactNode,
    action?: (e: React.FormEvent) => void
};

const Button: React.FC<Props> = ({ children, action }) => {
    return (
        <button className={styles.button} onClick={action}>
            {children}
        </button>
    );
};

export default Button;