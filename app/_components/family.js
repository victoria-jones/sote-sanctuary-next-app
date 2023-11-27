import Image from 'next/image';
import '..//_styles/components/family.styles.scss';
import StyledButton from './styled-button';
import Carousel from './carousel';

export default function Family () {
    return(
        <section className="family main-section" id="family-section">

            <div className="family__carousel">
                <h2 className="family__header">Meet our Pack</h2>

                <Carousel />
            </div>

            <div className="family__title">
                <div className="family__title__container">
                    <div className="family__title__upper-text">
                        want to <br /> help feed
                    </div>
                    <div className="family__title__lower-text">
                        our furry friends?
                    </div>
                    <Image
                        className="family__title__heart"
                        src="images/heart.png"
                        width={152}
                        height={153}
                        alt="heart image"
                    />
                </div>
                <div className="family__title__bottom-border"></div>
            </div>

            <div className="family__donate">
                <div className="family__donate__main-text">
                    <p className="family__donate__main-text--p">
                        All donations go directly toward the care of our Salt of the Earth Sanctuary animals. This includes food, shelter, medical, and other animal care.
                    </p>
                    <div className="family__button">
                        <StyledButton buttonText="Donate Here" />
                    </div>
                </div>
            </div>
        </section>
    );
}