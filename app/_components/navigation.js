'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
import ViewportSize from './viewport-size';
import '..//_styles/components/navigation.styles.scss';
import instagram from '../../public/images/icons/instagram.svg';
import facebook from '../../public/images/icons/facebook.svg';
import tiktok from '../../public/images/icons/tiktok.svg';
import youtube from '../../public/images/icons/youtube.svg';

export default function Nav () {
    const { width } = ViewportSize();
    const [ mobileView, setMobileView ] = useState(false);
    const [ openMobileMenu, setOpenMobileMenu ] = useState();

    useEffect(() => {
        const mobileBreakpoint = 900;
        width <= mobileBreakpoint ? setMobileView(true) : setMobileView(false);
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
                                href="#">
                                    <li className="mobile__social-nav__link--item">
                                        <Image
                                            className="mobile__social-nav__link--image"
                                            priority
                                            src={instagram}
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
                                            src={facebook}
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
                                            src={tiktok}
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
                                            src={youtube}
                                            width={40}
                                            height={40}
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
                                        width={25}
                                        height={25}
                                        alt="instagram icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#">
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src={facebook}
                                        width={25}
                                        height={25}
                                        alt="instagram icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#">
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src={tiktok}
                                        width={25}
                                        height={25}
                                        alt="instagram icon"
                                    />
                                </li>
                        </Link>
                        <Link className="social-nav__link"
                            href="#">
                                <li className="social-nav__link--item">
                                    <Image
                                        className="social-nav__link--item--image"
                                        priority
                                        src={youtube}
                                        width={25}
                                        height={25}
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