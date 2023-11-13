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
                        Jezabelle
                    </div>
                    <Image
                        src="images/animal-portraits/jezabelle-portrait.png"
                        width={190}
                        height={190}
                        className="carousel__animal-image"
                        id="family-animal-image--02"
                        alt="Jezabelle the livestock guardian dog of Salt of the Earth Sanctuary"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--02"
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
                        Bobby
                    </div>
                    <Image
                        src="images/animal-portraits/bobby-portrait.png"
                        width={190}
                        height={190}
                        className="carousel__animal-image"
                        id="family-animal-image--03"
                        alt="Robert (Bobby) Fischer the family dog"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--03"
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
                        Jasper
                    </div>
                    <Image className="carousel__animal-image"
                        id="family-animal-image--04"
                        src="images/animal-portraits/jasper-portrait.png"
                        width={190}
                        height={190}
                        alt="Jasper the family dog"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--04"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

                <div className="carousel__animal-container
                    carousel__animal-container--05
                ">
                    <div className="carousel__animal-name">
                        Bruce
                    </div>
                    <Image className="carousel__animal-image"
                        id="family-animal-image--05"
                        src="images/animal-portraits/bruce-portrait.png"
                        width={190}
                        height={190}
                        alt="Bruce Wayne the family dog"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--05"
                        src="images/heart-large.png"
                        width={190}
                        height={192}
                        alt="heart"
                    />
                </div>

                <div className="carousel__animal-container
                    carousel__animal-container--06
                ">
                    <div className="carousel__animal-name">
                        Aslan
                    </div>
                    <Image className="carousel__animal-image"
                        id="family-animal-image--06"
                        src="images/animal-portraits/aslan-portrait.png"
                        width={190}
                        height={190}
                        alt="Aslan the livestock guardian dog of Salt of the Earth Sanctuary"
                    />
                    <Image className="carousel__animal-heart"
                        id="family-aninaml-heart--06"
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