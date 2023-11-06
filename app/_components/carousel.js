'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import '..//_styles/components/carousel.styles.scss';

export default function Carousel () {
    let carousel = useRef(null);
    let carouselScroller = useRef(null);
    let carouselItems = useRef(null);

    //onload useEffect
    useEffect(() => {
        //can only set after page loads
        carousel.current = document.querySelectorAll(".carousel")[0];
        carouselScroller.current = carousel.current.querySelector(".carousel__scroller");
        carouselItems.current = Array.from(carouselScroller.current.children);

        //check if person has reduced motion setting on browser before activating carousel
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            activateCarousel();
        }
    },[]);

    const activateCarousel = () => {
        carousel.current.setAttribute("data-animated", true);   //will only be added when a user does not have reduced motion actived
        duplicateScrollContent();
    }

    const duplicateScrollContent = () => {
        carouselItems.current.forEach(item => {
            const dupeItem = item.cloneNode(true);
            //prevent dupe content from getting to usability stuff/readers
            dupeItem.setAttribute('aria-hidden', true);
            carouselScroller.current.appendChild(dupeItem);
        });
    }

    return(
        <div className="carousel">
            <div className="carousel__scroller">

                <div className="carousel__animal-container
                    carousel__animal-container--01
                ">
                    <div className="carousel__animal-name">
                        Lilith
                    </div>
                    <Image
                        className="carousel__animal-image"
                        src="images/animal-portraits/lilith-portrait.png"
                        width={190}
                        height={190}
                        id="family-animal-image--01"
                        alt="Lilith the livestock guardian dog of Salt of the Earth Sanctuary"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--01"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

                <div className="carousel__animal-container
                    carousel__animal-container--02
                ">
                    <div className="carousel__animal-name">
                        The General
                    </div>
                    <Image
                        src="images/animal-portraits/goat-portrait.png"
                        width={190}
                        height={190}
                        className="carousel__animal-image"
                        id="family-animal-image--01"
                        alt="animal image placeholder"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--01"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

                <div className="carousel__animal-container
                    carousel__animal-container--03
                ">
                    <div className="carousel__animal-name">
                        BUGAWK
                    </div>
                    <Image
                        src="images/animal-portraits/chicken-portrait.png"
                        width={190}
                        height={190}
                        className="carousel__animal-image"
                        id="family-animal-image--01"
                        alt="animal image placeholder"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--01"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

                <div className="carousel__animal-container
                    carousel__animal-container--04
                ">
                    <div className="carousel__animal-name">
                        Pigsly
                    </div>
                    <Image className="carousel__animal-image"
                        id="family-animal-image--01"
                        src="images/animal-portraits/pig-portrait.png"
                        width={190}
                        height={190}
                        alt="animal image placeholder"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--01"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

            </div>
        </div>
    );
}