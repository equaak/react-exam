import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from './krishakz.svg'
import facebookLogo from './icons8-facebook.svg'
import instagramLogo from './icons8-instagram.svg'
import vklogo from './icons8-vk.svg'
import youtubeLogo from './icons8-youtube.svg'

const Layout = () => {
    return (
        <>
            <header className='layout-header'>
                <div className="website-links">
                    <a
                        href="https://kolesa.kz/"
                        className="website-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kolesa.kz
                    </a>
                    <p className="website-link underlined">Krisha.kz</p>
                </div>
                <div className="header-menu">
                    <Link className="menu-item">Избранное</Link>
                    <Link className="menu-item">Регистрация</Link>
                    <Link className="menu-item">Личный кабинет</Link>
                </div>
            </header>
            <div className="layout-header-down">
                <div className="layout-header-right">
                    <img src={logo} alt="" className="page-logo" />
                    <Link>Продажа</Link>
                    <Link>Аренда</Link>
                </div>
                <div className="layout-header-left"></div>
            </div>

            <Outlet />
            <footer>
                <div className="footer-part">
                    <p className="dev-info">© 2023 Muratbek Dias</p>
                    <a
                        target="_blank"
                        href="https://krisha.kz/content/special/agreement"
                        className="footer-link"
                    >
                        Пользовательское соглашение
                    </a>
                    <a
                        target="_blank"
                        href="https://krisha.kz/sitemap"
                        className="footer-link"
                    >
                        Карта сайта
                    </a>
                    <a
                        target="_blank"
                        href="https://krisha.kz/content/special/info/regulations"
                        className="footer-link"
                    >
                        Правила размещения объявлении
                    </a>
                </div>
                <div className="footer-part">
                    <p className="website-info">
                        Информация о <Link>сайте</Link>
                    </p>
                    <a
                        target="_blank"
                        href="https://krisha.kz/content/special/write-us/message"
                        className="footer-link"
                    >
                        Написать в службу заботы
                    </a>
                    <a
                        target="_blank"
                        href="http://job.kolesa.kz/"
                        className="footer-link"
                    >
                        Работа в "Kolesa Group"
                    </a>
                    <div className="social-medias">
                        <p>Следите за нашими новостями</p>

                        <a href="https://www.facebook.com/krisha.kz">
                            <img className='media-logo' src={facebookLogo}></img>
                        </a>
                        <a href="https://www.youtube.com/channel/UCwRTPCE3dGzd6w3BKSQRPxQ">
                            <img className='media-logo' src={youtubeLogo}></img>
                        </a>
                        <a href="https://www.instagram.com/krisha.kz">
                            <img className='media-logo' src={instagramLogo}></img>
                        </a>
                        <a href="https://vk.com/krishakz">
                            <img className='media-logo' src={vklogo}></img>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout
