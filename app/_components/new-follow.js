import Image from 'next/image';
import Link from 'next/link';
import '..//_styles/components/new-follow.styles.scss';

export default function NewFollow () {

    return(
        <section className="new-follow main-section" id="follow-section">
            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--narrow-rectangle" id="new-follow__image-holder-01">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--01"
                    src="images/jasper-and-brent.png"
                    fill
                    alt="jasper the dog and brent riding in a car"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--rectangle" id="new-follow__image-holder-02">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--02"
                    src="images/wednesday-and-beans.png"
                    fill
                    alt="wednesday the pig and beans the dog in the grass"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--square" id="new-follow__image-holder-03">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--03"
                    src="images/jezebel.png"
                    fill
                    alt="jezebel the dog with a cowboy hat"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--square" id="new-follow__image-holder-04">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--04"
                    src="images/heart.png"
                    fill
                    alt="heart icon"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--square" id="new-follow__image-holder-05">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--05"
                    src="images/beans.png"
                    fill
                    alt="fresh grown beans"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--square" id="new-follow__image-holder-06">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--06"
                    src="images/animal-portraits/goat-portrait_social-media.png"
                    fill
                    alt="portrait of a goat"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--portrait-rectangle" id="new-follow__image-holder-07">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--07"
                    src="images/goats-running.png"
                    fill
                    alt="goats running across a bridge"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--portrait-rectangle" id="new-follow__image-holder-08">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--08"
                    src="images/pumpkins.png"
                    fill
                    alt="fresh grown pumpkins"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--rectangle" id="new-follow__image-holder-09">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--09"
                    src="images/wednesday-and-pond.png"
                    fill
                    alt="wednesday the pig grazing in the field next to the pond"
                />
            </div>

            <div className="new-follow__grid-item new-follow__image-holder new-follow__image-holder--narrow-rectangle" id="new-follow__image-holder-10">
                <Image className="new-follow__image-holder__image new-follow__image-holder__image--10"
                    src="images/animal-portraits/lilith-portrait_social-media.png"
                    fill
                    alt="portrait of Lilith the dog"
                />
            </div>

            <div className="new-follow__grid-item new-follow__container">
                <div className="new-follow__social-media">
                    <Link className="new-follow__social-media__link"
                        target="blank"
                        href="https://www.instagram.com/sote_sanctuary/"
                    >
                        <Image
                            className="new-follow__social-media__icon"
                            priority
                            src='images/icons/instagram.svg'
                            width={40}
                            height={40}
                            alt="instagram icon"
                        />
                    </Link>

                    <Link className="new-follow__social-media__link"
                        target="blank"
                        href="https://www.facebook.com/sotesanctuary?mibextid=LQQJ4d"
                    >
                        <Image
                            className="new-follow__social-media__icon"
                            priority
                            src='images/icons/facebook.svg'
                            width={40}
                            height={40}
                            alt="facebook icon"
                        />
                    </Link>

                    <Link className="new-follow__social-media__link"
                        target="blank"
                        href="https://www.tiktok.com/@sote_sanctuary?_t=8habgH7BbEk&_r=1"
                    >
                        <Image
                            className="new-follow__social-media__icon"
                            priority
                            src='images/icons/tiktok.svg'
                            width={40}
                            height={40}
                            alt="tiktok icon"
                        />
                    </Link>
                </div>

                <div className="new-follow__text-box">
                    <h2 className="new-follow__title">
                        <span className="new-follow__title__top">
                            Follow Sote Sanctuary
                        </span>
                        <span className="new-follow__title__bottom">
                            for real time updates
                        </span>
                    </h2>
                    <p className="new-follow__paragraph">
                        Get real time Sanctuary updates and progress, see your donations in action,
                        and of course see what our furry friends are up to too! We thank you all
                        for everything, everyone is welcome to be a part of the Salt of the Earth
                         Sanctuary community!
                    </p>
                    <Image
                        className="new-follow__heart"
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