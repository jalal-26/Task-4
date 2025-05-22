import "./Footer.css";
import type { FooterData } from "../../DataProject/Data";
interface FooterProps {
    data: FooterData;
}
const Footer : React.FC<FooterProps>=({ data })=> {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section logo-section">
                    <img
                        src={data.logo}
                        alt="Flora Logo"
                        className="footer-logo"
                    />
                    <p>{data.description}</p>
                </div>

                {data.sections.map((section, index) => (
                    <div className="footer-section" key={index}>
                        <h4>{section.title}</h4>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="footer-section">
                    <h4>Our Location</h4>
                    <p>{data.address}</p>
                    <div className="social-icons">
                        {data.socials.map((icon, index) => (
                            <div className="icon center"><img key={index} src={icon} alt="social-icon" /></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{data.copyright}</p>
                <div className="legal-links">
                    <a href="#">{data.terms}</a>
                    <a href="#">{data.privacy}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
