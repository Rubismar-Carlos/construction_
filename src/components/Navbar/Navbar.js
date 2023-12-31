import Link from "next/link"

// REACT
import { useState } from "react"

// CSS MODULES
import styles from '../../styles/Navbar.module.css'

// ICONS
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {

    //  STATES MENU MOBILE
    const [openMobile, setOpenMobile] = useState(false)

    // VISUALIZAR O BOTÃO DO MENU MOBILE
    const [visible, setVisivle] = useState(true)

    // FUNCAO ABRIR MENU MOBILE
    const handleOpenMenu = () => {

        setVisivle(false)
        setOpenMobile(!openMobile)

    }

    // FUNCAO ABRIR MENU MOBILE
    const handleCloseMenu = () => {

        setVisivle(true)
        setOpenMobile(false)

    }


    return (
        <div className={styles.container_navbar}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <h2>LOGO</h2>
                </div>
                <nav>
                    {/* MENU DESKTOP */}
                    <div className={styles.navbar_desktop}>
                        <ul className={styles.ul_desktop}>
                            <li>
                                <Link href={'#inicio'} target={'_self'}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={'#habilidades'} target={'_self'}>
                                    Halidades
                                </Link>
                            </li>
                            <li>
                                <Link href={'#projetos'} target={'_self'}>
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} target={'_self'}>
                                    Certificados
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} target={'_self'}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.btn_mobile}>
                    {/* BOTAO MENU MOBILE PARA ABRIR */}
                    {visible && < FiMenu onClick={handleOpenMenu}/>}
                    {/* BOTAO MENU MOBILE PARA FECHAR */}
                    {!visible && < AiOutlineClose  onClick={handleCloseMenu}/>}
                </div>
            </div>

            {/* MENU MOBILE */}
            <div className={` ${styles.menu_mobile} ${openMobile ? `${styles.menu_open}` : `${styles.menu_close}`}`}>
                <ul className={styles.ul_mobile}>
                    <li>
                        <Link href={'#inicio'} target={'_self'}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={'#habilidades'} target={'_self'}>
                            Halidades
                        </Link>
                    </li>
                    <li>
                        <Link href={'#projetos'} target={'_self'}>
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} target={'_self'}>
                            Certificados
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} target={'_self'}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}