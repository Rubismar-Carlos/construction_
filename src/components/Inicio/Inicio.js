'use cliente'

// CSS
import styles from '../../styles/Inicio.module.css'

export default function Inicio() {
    return (
        <div className={styles.inicio_container}>
            <div className={styles.inicio_box}>
                <div className={styles.box_img}>
                    <img src="" alt="Imagem pessoal" />
                </div>
                <div className={styles.box_text}>
                    <h1>Olá, eu sou o Rubismar Carlos</h1>
                    <h2>Desenvolvedor Front-End</h2>
                    <div className={styles.box_btns}>
                        <button>Currículo</button>
                        <button>Entrar em contato</button>
                    </div>
                </div>
            </div>
            <div className={styles.inicio_about}>
                <span>Sobre mim</span>
                <div className={styles.about_text}>
                    <p>Desenvolvedor front-end, especializado em JavaScript e Node. Utilizo o framework React para desenvolvimento de aplicações web. Sou uma pessoa compromissada, gosto de sair da zona de conforto para tentar novos desafios e gosto de trabalhar em equipe. Tenho habilidades de comunicação e colaboração para ajudar a alcançar objetivos em equipe.</p>
                </div>
            </div>
        </div>
    )
} 