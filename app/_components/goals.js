import Image from 'next/image';
import StyledButton from './styled-button';
import RippedEdgeContainer from './ripped-edge-container';
import '..//_styles/components/goals.styles.scss';

export default function Goals () {
    //github pages work around for issue with applying bg images with css
    //add another class to the element if the environment is github pages
    if(process.env.IS_GITHUB_PAGES === 'true') {
        require('..//_styles/components/github-pages.styles.scss');
    }

    return(
        <section className="goals main-section section-margin" id="goals-section">
            <RippedEdgeContainer addClass="goals__container">
                <h2 className="goals__heading">
                    Sanctuary Goals
                </h2>

                <ul className="goals__list">
                    <li className="goals__list__item">
                        <p className="goals__list__item__text">
                            Get a tractor to continue building and help with snow removal.
                        </p>
                        <div className="goals__list__item__number">1.</div>
                    </li>
                    <li className="goals__list__item">
                        <p className="goals__list__item__text">
                            Build dog condo kennels.
                        </p>
                        <div className="goals__list__item__number">2.</div>
                    </li>
                    <li className="goals__list__item">
                        <p className="goals__list__item__text">
                            Build a barn and indoor riding arena
                        </p>
                        <div className="goals__list__item__number">3.</div>
                    </li>
                    <li className="goals__list__item">
                        <p className="goals__list__item__text">
                           Get more freezers for food storage.
                        </p>
                        <div className="goals__list__item__number">4.</div>
                    </li>
                    <li className="goals__list__item">
                        <p className="goals__list__item__text">
                            Get more solar panels and batteries for the ability to use heat lamps and more food storage freezers.
                        </p>
                        <div className="goals__list__item__number">5.</div>
                    </li>
                </ul>

                <div className="goals__wishlist">
                    <div className="goals__wishlist__wrapper">
                        <h3>want to help us reach our goals?</h3>
                        <p className="goals__wishlist__text">
                            By purchasing an item from the Sanctuary&apos;s Amazon wishlist you can personally
                            help us reach our goals and improve upon the Sanctuary and our community.
                        </p>
                        <StyledButton buttonText="Wishlist" buttonLink="https://www.amazon.com/hz/wishlist/ls/8MSZ6J3CJ5M6?ref_=wl_share" />
                    </div>
                </div>

                <Image
                    className="goals__container__bg"
                    src="images/animal-portraits/chicken-portrait_large.png"
                    width={294}
                    height={374}
                    alt="chicken"
                />
            </RippedEdgeContainer>
        </section>
    );
}