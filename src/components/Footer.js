import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()} </p>
            {location.pathname === "/" && <Link to="/about">About</Link>}
        </footer>
    );
}

export default Footer;