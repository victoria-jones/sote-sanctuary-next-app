import Link from 'next/link';
import Logo from './logo';
import '..//_styles/components/navigation.styles.scss';

export default function Nav () {
    return(
        <header>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <Link className="main-nav__link"
                        href="#about-section">
                        <li className="main-nav__link-item">about</li>
                    </Link>
                    <Link className="main-nav__link"
                        href="#family-section">
                        <li className="main-nav__link-item">family</li>
                    </Link>
                    <Link className="main-nav__link"
                        href="#goals-section">
                        <li className="main-nav__link-item">goals</li>
                    </Link>
                    <Link className="main-nav__link"
                        href="#family-section">
                        <li className="main-nav__link-item">donate</li>
                    </Link>
                </ul>
            </nav>

            <Link className="nav-logo"
                href="/">
                    <Logo />
            </Link>

            <nav className="social-nav">
                <ul className="social-nav__list">
                    <Link className="social-nav__link"
                        href="#">
                            <li className="social-nav__link-item">
                                social 1
                            </li>
                    </Link>
                    <Link className="social-nav__link"
                        href="#">
                        <li className="social-nav__link-item">
                            social 2
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}