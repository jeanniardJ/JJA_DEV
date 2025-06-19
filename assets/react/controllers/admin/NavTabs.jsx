import React from 'react'

function NavTabLi(props) {
    return (
        <li className="nav-item">
            <a className={'nav-link ' + (props.isActive ? 'active' : '')} href={props.route}>
                {props.name}
            </a>
        </li>
    )
}

export default function NavTabs(props) {
    let navTabs = props.navTabs
    let navTabActive = props.navTabActive
    
    return (
        <ul className="nav nav-tabs mb-3">
            {Object.values(navTabs).map((tab, key) => (
                <NavTabLi key={key} isActive={tab.id === navTabActive} {...tab} />
            ))}
        </ul>
    )
}
