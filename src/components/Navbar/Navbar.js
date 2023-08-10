import Link from "next/link"

// REACT
import { useState } from "react"

// CSS MODULES
import styles from '../../styles/Navbar.module.css'

// ICONS
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {

    //  STATES MENU MOBILE
    const [openMobile, setOpenMobile] = useState(true)
    const [closeMobile, setCloseMobile] = useState(true)

    // FUNCAO ABRIR E FECHAR MENU MOBILE
    const handleOpenMenu = () => setOpenMobile(!openMobile)
    const handleCloseMenu = () => setCloseMobile(!closeMobile)


    return (
        <div>
            <div className={styles.menu_desktop}>
                <div className={styles.logo}>
                    <h2>LOGO</h2>
                </div>
                <nav>
                    <div className={styles.navbar_desktop}>
                        <ul className={styles.ul_desktop}>
                            <li>
                                <Link href={'/about'} target={'_self'}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} target={'_self'}>
                                    Halididades
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} target={'_self'}>
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
                    < FiMenu onClick={handleOpenMenu}/>
                </div>
            </div>

            <div className={` ${styles.menu_mobile} ${styles.open_menu ? `${styles.menu_open}` : `${styles.menu_close}`}`}>
                <ul>
                    <li>
                        <Link href={'/about'} target={'_self'}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} target={'_self'}>
                            Halididades
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'} target={'_self'}>
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