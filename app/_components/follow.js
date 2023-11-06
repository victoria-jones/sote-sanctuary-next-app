'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ViewportSize from './viewport-size';
import '..//_styles/components/follow.styles.scss';

export default function Follow () {
    const { width } = ViewportSize();
    const [ mobileView, setMobileView ] = useState(false);

    useEffect(() => {
        const mobileBreakpoint = 800;
        width <= mobileBreakpoint ? setMobileView(true) : setMobileView(false);

        //a fix for before viewport component is loaded
        if(width === null) {
            window.innerWidth > mobileBreakpoint ? setMobileView(false) : setMobileView(true);
        }
    }, [width]);

    return(
        <section className="follow main-section" id="follow-section">
            <Image className="follow__image follow__image--01"
                src="images/jasper-and-brent.png"
                fill
                alt="jasper the dog and brent riding in a car"
            />
            <Image className="follow__image follow__image--02"
                src="images/wednesday-and-beans.png"
                fill
                alt="wednesday the pig and beans the dog in the grass"
            />
            <Image className="follow__image follow__image--03"
                src="images/jezebel.png"
                fill
                alt="jezebel the dog with a cowboy hat"
            />
            <Image className="follow__image follow__image--04"
                src="images/heart.png"
                fill
                alt="heart icon"
            />
            <Image className="follow__image follow__image--05"
                src="images/beans.png"
                fill
                alt="fresh grown beans"
            />
            <Image className="follow__image follow__image--06"
                src="images/animal-portraits/goat-portrait_social-media.png"
                fill
                alt="portrait of a goat"
            />
            <Image className="follow__image follow__image--07"
                src="images/goats-running.png"
                fill
                alt="goats running across a bridge"
            />
            <Image className="follow__image follow__image--08"
                src="images/pumpkins.png"
                fill
                alt="fresh grown pumpkins"
            />
            <Image className="follow__image follow__image--09"
                src="images/wednesday-and-pond.png"
                fill
                alt="wednesday the pig grazing in the field next to the pond"
            />
            <Image className="follow__image follow__image--10"
                src="images/animal-portraits/lilith-portrait_social-media.png"
                fill
                alt="portrait of Lilith the dog"
            />
            {
                mobileView ? (
                    <Image className="follow__image follow__image--11"
                        src="images/heart.png"
                        fill
                        alt="heart icon"
                    />
                ):
                ( null )
            }

            <div className="follow__container">
                <div className="follow__social-media">
                    <Link className="follow__social-media__link"
                        target="blank"
                        href="https://www.instagram.com/sote_sanctuary/"
                    >
                        <Image
                            className="follow__social-media__icon"
                            priority
                            src='images/icons/instagram.svg'
                            width={40}
                            height={40}
                            alt="instagram icon"
                        />
                    </Link>

                    <Link className="follow__social-media__link"
                        target="blank"
                        href="#"
                    >
                        <Image
                            className="follow__social-media__icon"
                            priority
                            src='images/icons/facebook.svg'
                            width={40}
                            height={40}
                            alt="facebook icon"
                        />
                    </Link>

                    <Link className="follow__social-media__link"
                        target="blank"
                        href="#"
                    >
                        <Image
                            className="follow__social-media__icon"
                            priority
                            src='images/icons/tiktok.svg'
                            width={40}
                            height={40}
                            alt="tiktok icon"
                        />
                    </Link>

                    <Link className="follow__social-media__link"
                        target="blank"
                        href="#"
                    >
                        <Image
                            className="follow__social-media__icon"
                            priority
                            src='images/icons/youtube.svg'
                            width={40}
                            height={40}
                            alt="youtube icon"
                        />
                    </Link>
                </div>

                <div className="follow__text-box">
                    <h2 className="follow__title">
                        <span className="follow__title__top">
                            Follow Sote Sanctuary
                        </span>
                        <span className="follow__title__bottom">
                            for real time updates
                        </span>
                    </h2>
                    <p className="follow__paragraph">
                        Get real time Sanctuary updates and progress, see your donations in action,
                        and of course see what our furry friends are up to too! We thank you all
                        for everything, everyone is welcome to be a part of the Salt of the Earth
                         Sanctuary community!
                    </p>
                    <Image
                        className="follow__heart"
                        src="images/heart.png"
                        width={30}
                        height={31}
                        alt="heart image"
                    />
                </div>
            </div>
        </section>
    );
}