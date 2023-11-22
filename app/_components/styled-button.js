'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '..//_styles/components/styled-button.styles.scss';

export default function StyledButton ({ buttonText, buttonLink }) {
    //github pages work around for issue with applying bg images with css
        //add another class to the element if the environment is github pages
    if(process.env.IS_GITHUB_PAGES === 'true') {
        require('..//_styles/components/github-pages.styles.scss');
    }

    //so sass isn't working for me when trying to randmoly apply different transition times
    //for the hearts so I guess we are doing it in javascsript now.
    useEffect(() => {
        randomizeHeartAnimation();
    },[]);

    const randomizeHeartAnimation = () => {
        const hearts = document.querySelectorAll('.button__heart');

        hearts.forEach((heart) => {
            heart.style.animationDelay = Math.random() + 's';
        });
    }


    return(
        <div className="button">
            <Link className="button__link"
                href={
                    buttonLink ? buttonLink : '#'
                }
                target="blank"
            >
                <div className="button__style buttonBackgroundImage">
                    {buttonText}
                </div>
            </Link>
            <Image
                className="button__leaves"
                src="images/green-leaves.png"
                width={280}
                height={74}
                alt="decorative leaves"
            />
            <div className="button__hearts">
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
                <Image
                    className="button__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
            </div>
        </div>
    );
}