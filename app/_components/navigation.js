'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
import ViewportSize from './viewport-size';
import '..//_styles/components/navigation.styles.scss';
import instagram from '../../public/images/icons/instagram.svg';

export default function Nav () {
    const { width } = ViewportSize();
    const [ mobileView, setMobileView ] = useState(false);

    useEffect(() => {
        const mobileBreakpoint = 900;
        width <= mobileBreakpoint ? setMobileView(true) : setMobileView(false);
    }, [width]);


    if ( mobileView ) {
        return(
           <header className="mobile">
                <Link className="mobile__nav-logo"
                    href="/">
                        <Logo />
                </Link>
                <div className="mobile__menu">

                </div>
                <div className="mobile__dropmenu">
                    <nav className="mobile-main-nav">
                        <ul className="mobile-main-nav__list">
                            <Link className="mobile-main-nav__link"
                                href="#about-section">
                                <li className="mobile-main-nav__link--item">about</li>
                            </Link>
                            <Link className="mobile-main-nav__link"
                                href="#family-section">
                                <li className="mobile-main-nav__link--item">family</li>
                            </Link>
                            <Link className="mobile-main-nav__link"
                                href="#goals-section">
                                <li className="mobile-main-nav__link--item">goals</li>
                            </Link>
                            <Link className="mobile-main-nav__link"
                                href="#family-section">
                                <li className="mobile-main-nav__link--item">donate</li>
                            </Link>
                        </ul>
                    </nav>
                    <nav className="mobile-social-nav">
                        <ul className="mobile-social-nav__list">
                            <Link className="mobile-social-nav__link"
                                href="#">
                                    <li className="mobile-social-nav__link--item">
                                        <Image
                                            className="mobile-social-nav__link--item--image"
                                            priority
                                            src={instagram}
                                            width={30}
                                            height={30}
                                            alt="instagram icon"
                                        />
                                    </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
           </header>
        );
    } else {
        return(
            <header>
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <Link className="main-nav__link"
                            href="#about-section">
                            <li className="main-nav__link--item">about</li>
                        </Link>
                        <Link className="main-nav__link"
                            href="#family-section">
                            <li className="main-nav__link--item">family</li>
                        </Link>
                        <Link className="main-nav__link"
                            href="#goals-section">
                            <li className="main-nav__link--item">goals</li>
                        </Link>
                        <Link className="main-nav__link"
                            href="#family-section">
                            <li className="main-nav__link--item">donate</li>
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
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src={instagram}
                                        width={30}
                                        height={30}
                                        alt="instagram icon"
                                    />
                                </li>
                        </Link>
                    </ul>
                </nav>
            </header>
        );
    }
}