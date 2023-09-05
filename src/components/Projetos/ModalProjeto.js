import { useState } from "react"

// CSS
import styles from '../../styles/Projeto.module.css'

export default function ModalProjeto({imgProjeto, nomeProjeto}) {

    const [projeto, setProjeto] = useState(false)

    const [openModal, setOpenModal] = useState(false)

    const mouseOpen = () => {setProjeto(true)}
    const mouseLeave = () => {setProjeto(false)}

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return <div>
        <div>
            <div className={styles.box_projeto}>
                <div className={styles.img_projeto}>
                    {imgProjeto}
                    {projeto && 
                        <div className={styles.box_saiba_mais}>
                            <span>Clique para saber mais</span>
                        </div>
                    }
                </div>
                <div className={styles.img_projeto_apresentacao} onMouseEnter={mouseOpen} onMouseLeave={mouseLeave}>
                    <span className={styles.nome_projeto}>
                        {nomeProjeto}
                    </span>
                </div>
            </div>
            <div className={styles.modal_open}>
                {openModal &&
                    <div className={styles.modal}>
                        <div className={styles.modal_img}>
                            {imgProjeto}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}