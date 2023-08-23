// CSS 
import styles from '../../styles/Habilidades.module.css'

export default function Skill({nome, ico}) {

    return <div>
        <div className={styles.skill_box}>
            <div className={styles.skill_ico}>{ico}</div>
            <p>{nome}</p>
        </div>
    </div>
}