import styles from './Word.module.scss';
import clsx from 'clsx';
import { useState, useCallback, useEffect } from 'react';


interface Props {
    addSelected: (word: string) => void, // or React.ReactNode tbc
    removeSelected: (word: string) => void,
    isGoodWord: boolean,
    selecting: boolean,
    children: string //or React.ReactNode tbc
}

const Word: React.FC<Props> = ({ addSelected, removeSelected, isGoodWord, selecting, children }) => {

    /* RANDOM MARGIN GENERATOR - START ("wordcloud") */
    const [margin, setMargin] = useState<string>('');

    const updateMargin = useCallback(() => {
        setMargin(`${Math.floor(Math.random() * (50 - 20) + 20)}px`);
    }, [])

    useEffect(() => {
        updateMargin();
    }, [])
    /* RANDOM MARGIN GENERATOR - END */

    const [selected, setSelected] = useState<boolean>(false);

    const toggleSelected = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (selected) {
          setSelected(false);
          removeSelected(children);
        } else {
          setSelected(true);
          addSelected(children);
        }
    };

    // combined conditions
    const goodWordSelected = selected && !selecting && isGoodWord;
    const badWordSelected = selected && !selecting && !isGoodWord;

    return (
        <button
            style={{marginLeft: margin}}
            className={clsx(
                styles.word,
                !selecting && styles.disabled,
                selected && styles.selected,
                goodWordSelected && styles.good,
                badWordSelected && styles.bad
            )}
            onClick={toggleSelected}
        >
            {children}
        </button>
    );
};

export default Word;