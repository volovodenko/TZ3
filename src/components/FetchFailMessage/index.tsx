import React from 'react';

//styles
import styles from './styles.scss';

export const FetchFailMessage = (props: IProps) => (
    <div className={styles.fetchFail}>
        <p>Слюшай, дарагой, не делай мне нервы, тут сервак какую то маляву прислал:</p>
        <p>"{props.message}".</p>
        <p>Если ты понял что это - купи себе медаль.</p>
    </div>
);

interface IProps {
    message: string;
}
