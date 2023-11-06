'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
import ViewportSize from './viewport-size';
import '..//_styles/components/navigation.styles.scss';

export default function Nav () {
    const { width } = ViewportSize();
    const [ mobileView, setMobileView ] = useState(false);
    const [ openMobileMenu, setOpenMobileMenu ] = useState();

    useEffect(() => {
        const mobileBreakpoint = 900;
        width <= mobileBreakpoint ? setMobileView(true) : setMobileView(false);


        //a fix for before viewport component is loaded
        if(width === null) {
            window.innerWidth > mobileBreakpoint ? setMobileView(false) : setMobileView(true);
        }

    }, [width]);

    useEffect(() => {
        setOpenMobileMenu(false);
    },[]);

    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }


    if ( mobileView ) {
        return(
           <header className="mobile">
                <Link className="mobile__nav-logo"
                    href="/">
                        <Logo mobile toggleColor={openMobileMenu ? true : false}/>
                </Link>

                <div className={`mobile__menu
                    ${openMobileMenu ? 'mobile__menu--active' : ''}
                `}
                    onClick={toggleMobileMenu}>
                        <div className={`mobile__menu__bar mobile__menu__bar--1
                            ${openMobileMenu ? 'mobile__menu--active__bar mobile__menu--active__bar--1' : ''}
                        `}></div>
                        <div className={`mobile__menu__bar mobile__menu__bar--2
                            ${openMobileMenu ? 'mobile__menu--active__bar mobile__menu--active__bar--2' : ''}
                        `}></div>
                        <div className={`mobile__menu__bar mobile__menu__bar--3
                            ${openMobileMenu ? 'mobile__menu--active__bar mobile__menu--active__bar--3' : ''}
                        `}></div>
                </div>

                <div className={`mobile__dropmenu
                    ${openMobileMenu ? 'mobile__dropmenu--active' : ''}
                `}>
                    <nav className="mobile__main-nav">
                        <ul className="mobile__main-nav__list">
                            <Link onClick={toggleMobileMenu}
                                className="mobile__main-nav__link"
                                href="#about-section">
                                <li className="mobile__main-nav__link--item">about</li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__main-nav__link"
                                href="#family-section">
                                <li className="mobile__main-nav__link--item">family</li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__main-nav__link"
                                href="#goals-section">
                                <li className="mobile__main-nav__link--item">goals</li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__main-nav__link"
                                href="#family-section">
                                <li className="mobile__main-nav__link--item">donate</li>
                            </Link>
                        </ul>
                    </nav>
                    <nav className="mobile__social-nav">
                        <ul className="mobile__social-nav__list">
                            <Link onClick={toggleMobileMenu}
                                className="mobile__social-nav__link"
                                target="blank"
                                href="https://www.instagram.com/sote_sanctuary/">
                                    <li className="mobile__social-nav__link--item">
                                        <Image
                                            className="mobile__social-nav__link--image"
                                            priority
                                            src='images/icons/instagram.svg'
                                            width={40}
                                            height={40}
                                            alt="instagram icon"
                                        />
                                    </li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__social-nav__link"
                                target="blank"
                                href="#">
                                    <li className="mobile__social-nav__link--item">
                                        <Image
                                            className="mobile__social-nav__link--image"
                                            priority
                                            src='images/icons/facebook.svg'
                                            width={40}
                                            height={40}
                                            alt="facebook icon"
                                        />
                                    </li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__social-nav__link"
                                target="blank"
                                href="#">
                                    <li className="mobile__social-nav__link--item">
                                        <Image
                                            className="mobile__social-nav__link--image"
                                            priority
                                            src='images/icons/tiktok.svg'
                                            width={40}
                                            height={40}
                                            alt="tiktok icon"
                                        />
                                    </li>
                            </Link>
                            <Link onClick={toggleMobileMenu}
                                className="mobile__social-nav__link"
                                target="blank"
                                href="#">
                                    <li className="mobile__social-nav__link--item">
                                        <Image
                                            className="mobile__social-nav__link--image"
                                            priority
                                            src='images/icons/youtube.svg'
                                            width={40}
                                            height={40}
                                            alt="youtube icon"
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
                            href="https://www.instagram.com/sote_sanctuary/"
                            target="blank"
                        >
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src='images/icons/instagram.svg'
                                        width={25}
                                        height={25}
                                        alt="instagram icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#"
                            target="blank"
                        >
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src='images/icons/facebook.svg'
                                        width={25}
                                        height={25}
                                        alt="facebook icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#"
                            target="blank"
                        >
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src='images/icons/tiktok.svg'
                                        width={25}
                                        height={25}
                                        alt="tiktok icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#"
                            target="blank"

                        >
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src='images/icons/youtube.svg'
                                        width={25}
                                        height={25}
                                        alt="youtube icon"
                                    />
                                </li>
                        </Link>
                    </ul>
                </nav>
            </header>
        );
    }
}