import styles from '../../styles/Habilidades.module.css'

// REACT
import { useState } from 'react'

// COMPONENT SKILL
import Skill from './Skill'

// REACT ICONS
import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { DiJavascript1, DiBootstrap, DiMongodb, DiMysql } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'

export default function Habilidades() {

    const [skills, setSkills] = useState ([
        {
            id: 0,
            nome: 'HTML5',
            ico: < AiFillHtml5 />
        },
        {
            id: 1,
            nome: 'CSS3',
            ico: < FaCss3Alt />
        },
        {
            id: 2,
            nome: 'JavaScript',
            ico: < DiJavascript1 />
        },
        {
            id: 3,
            nome: 'React.JS',
            ico: < FaReact />
        },
        {
            id: 4,
            nome: 'BootStrap',
            ico: < DiBootstrap />
        },
        {
            id: 5,
            nome: 'MongoDB',
            ico: < DiMongodb />
        },
        {
            id: 6,
            nome: 'MySql',
            ico: < DiMysql />
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