import React from 'react'

export default function Nav(props) {
    return (
        <aside className="d-flex flex-column flex-shrink-0 p-3 shadow-lg h-100">
            <div className="d-flex align-items-center">
                <a href={props.admin.path} className="col-10 mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className={`${props.admin.icon} fs-4 me-2`}></i>
                    <span className="fs-4">{props.admin.trans.title}</span>
                </a>
                <button
                    type="button"
                    className="d-inline d-sm-none btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    data-bs-target="#menuOffcan"
                ></button>
            </div>
            <hr className="text-bg-dark" />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a
                        href={props.admin.path}
                        className={`nav-link text-white ${props.menuActive === 'home' ? 'active' : ''}`}
                    >
                        <i className={`${props.dashboard.icon} pe-1`}></i>
                        {props.admin.trans.home}
                    </a>
                </li>
                <li className={`nav-item dropdown text-white`}>
                    <a
                        className={`nav-link dropdown-toggle text-white ${
                            props.menuActive === 'modules' ? 'active' : ''
                        }`}
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                    >
                        <i className={props.module.icon}></i> {props.module.trans.title}
                    </a>
                    <NavModules modules={props.modules} subMenuActive={props.subMenuActive} />
                </li>
                <li className="nav-item">
                    <a
                        href={props.user.path}
                        className={`nav-link text-white ${props.menuActive === 'user' ? 'active' : ''}`}
                    >
                        <i className="bi bi-people pe-1"></i>
                        {props.user.trans.title}
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href={props.contact.path}
                        className={`nav-link text-white ${props.menuActive === 'contact' ? 'active' : ''}`}
                    >
                        <i className="bi bi-envelope-at"></i> Contact
                    </a>
                </li>
                <hr className="text-bg-dark" />
                <li className={`nav-item dropdown text-white`}>
                    <a
                        className={`nav-link dropdown-toggle text-white ${
                            props.menuActive === 'config' ? 'active' : ''
                        }`}
                        data-bs-toggle="dropdown"
                        role="button"
                    >
                        <i className={props.setting.icon}></i> {props.setting.trans.title}
                    </a>

                    <NavParameters settings={props.settings} subMenuActive={props.subMenuActive} />
                </li>
            </ul>
        </aside>
    )
}

function NavModules({ modules, subMenuActive }) {
    return (
        <ul className="dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark">
            {Object.values(modules).map((module) => {
                if (module.isGranted === false) {
                    return null
                }

                return (
                    <li
                        className={`dropdown-item mt-1 mb-1 ${subMenuActive === module.name ? 'active' : ''}`}
                        key={module.path}
                    >
                        <a href={module.path} className="d-inline-flex text-white text-decoration-none">
                            <i className={`${module.icon} me-2`}></i>
                            {module.trans.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

function NavParameters({ settings, subMenuActive }) {
    return (
        <ul className="dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark">
            {Object.values(settings).map((setting) => {
                if (setting.isGranted === false) {
                    return null
                }

                return (
                    <li
                        className={`dropdown-item mt-1 mb-1 ${subMenuActive === setting.name ? 'active' : ''}`}
                        key={setting.path}
                    >
                        <a href={setting.path} className="d-inline-flex text-white text-decoration-none">
                            <i className={`${setting.icon} me-2`}></i>
                            {setting.trans.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
