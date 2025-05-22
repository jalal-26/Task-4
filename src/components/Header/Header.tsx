import "./Header.css";
import type { NavLink, HeroInfo } from "../../DataProject/Data";
import { useEffect, useState } from "react";
type HeaderProps = {
    logo: string;
    links: NavLink[];
    title: string;
    heroInfo: HeroInfo[];
};
const Header: React.FC<HeaderProps> = ({ logo, links, title, heroInfo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
    useEffect(() => {
        const handleRize = () => {
            setIsMobile(window.innerWidth < 992);
            if (window.innerWidth >= 992) {
                setIsMenuOpen(true);
            }
        };
        window.addEventListener("resize", handleRize);
        return () => window.removeEventListener("resize", handleRize);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            {!isMobile && (
                <nav className="large">
                    <img className="logo" src={logo} alt="Logo" />
                    <ul>
                        {links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="center">Login</button>
                </nav>
            )}
            {isMobile && (
                <nav className="medium">
                    <img className="logo" src={logo} alt="Logo" />
                    <ul className={`${isMenuOpen ? "close" : "open"}`}>
                        {links.map((link, i) => (
                            <li onClick={toggleMenu} key={i}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        ))}
                        <button className="center">Login</button>
                    </ul>
                    <button className="muneBtn" onClick={toggleMenu}>
                        <img
                            className="mune-icon"
                            src={
                                isMenuOpen
                                    ? `/Task-4/menuIcon/BurgarIcon.svg`
                                    : `/Task-4/menuIcon/Xicon.svg`
                            }
                            alt=""
                        />
                    </button>
                </nav>
            )}
            <div className="hero">
                <img
                    className="background-img"
                    src="/HeroImg.png"
                    alt="Hero Background"
                />
                <div className="content">
                    <h1>{title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Imperdiet tempus felis vitae sit est quisque.
                    </p>
                    <ul className="information">
                        {heroInfo.map((li, index) => (
                            <li key={index}>
                                <div className="up-icon">
                                    <img
                                        className="icon"
                                        src={li.icon}
                                        alt=""
                                    />
                                </div>
                                <div className="sub-content">
                                    <h3>{li.h3}</h3>
                                    <p>{li.p}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
