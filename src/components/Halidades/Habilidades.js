import styles from '../../styles/Habilidades.module.css'

// REACT
import { useState } from 'react'

// COMPONENT SKILL
import Skill from './Skill'

// REACT ICONS
import { FaReact } from 'react-icons/fa'

export default function Habilidades() {

    const [skills, setSkills] = useState ([
        {
            id: 0,
            nome: 'REACT.JS',
            ico: <FaReact />
        },
        {
            id: 1,
            nome: 'RUBENS2',
            ico: "Rubens@"
        }
    ])

    return <div>
        <div className={styles.container_habilidades}>
            <span className={styles.span_titulo}>Habilidades</span>
            <div className={styles.habilidades_box}>
                <div className={styles.container_skills}>
                    {skills && skills.map((skl) => (
                        <Skill 
                            key={skl.id}
                            nome={skl.nome}    
                            ico={skl.ico}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
}