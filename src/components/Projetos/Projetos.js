// CSS
import styles from '../../styles/Projeto.module.css'

// COMPONENTE
import ModalProjeto from './ModalProjeto'

export default function Projetos() {
    return <div className={styles.container_projeto}>
        <span className={styles.span_titulo}>Projetos</span>
        < ModalProjeto />
    </div>
}