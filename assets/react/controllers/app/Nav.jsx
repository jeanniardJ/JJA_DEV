import React, { useState, useEffect } from 'react'

export default function(props) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        
        // Ajoute l'écouteur d'événement lors du montage du composant
        window.addEventListener('scroll', onScroll)
        
        const navbar = document.querySelector('.navbar-toggler')
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'aria-expanded') {
                    const isExpanded =
                        navbar.getAttribute('aria-expanded') === 'true'
                    setShow(isExpanded)
                }
            })
        })
        
        observer.observe(navbar, { attributes: true })
        
        // Nettoie l'écouteur lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', onScroll),
                observer.disconnect()
        }
    }, [])
    
    // Ajoute 'bg-dark' de Bootstrap si isScrolled est true ou si le menu est affiché
    const menuClassName = `navbar navbar-expand-lg fixed-top ${
        isScrolled || show ? ' bg-dark' : ''
    }`
    
    return (
        <nav className={`${menuClassName}`}>
            <div className="container">
                <div id="jjadev_logo">
                    <a
                        className="navbar-brand d-flex align-items-center"
                        href={props.link_home}
                        title="JJA DEV - Création de sites web et applications mobiles dans le Jura"
                    >
                        <img
                            src={props.logo}
                            srcSet={props.logo}
                            width={40}
                            height={40}
                            alt="Logo de l'entreprise"
                            title="JJA DEV - Création de sites web et applications mobiles"
                        />
                        <span className="ms-3">JJA DEV</span>
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href={props.link_home}
                                title="Retour à l\'accueil"
                            >
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={props.link_home + '#services'}
                                title='Aller à la section "Services"'
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={props.link_home + '#contact'}
                                title='Aller à la section "Contact"'
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={props.link_blog}
                                title="Aller sur le blog"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.facebook.com/jjadevweb"
                                aria-label="Lien vers la page facebook de l'entreprise"
                                title="Aller sur la page facebook de l'entreprise"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
