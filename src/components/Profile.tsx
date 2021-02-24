import styles from '../style/components/Profile.module.css';

export function Profile(){
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/RCristyan.png" alt="Renan Cristyan"/>
            <div>
                <strong>Renan Cristyan</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}