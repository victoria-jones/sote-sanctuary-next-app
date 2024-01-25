import FeaturedBanner from '..//_components/featured-banner.js';

export default function PageHeader ({ children, title, subtitleTopText,subtitleBottomText, image, video }) {
    return(
        <section className="page-header">
            <FeaturedBanner />
            <section className="page-header__wrapper">

                <div className="page-header__image">
                    image holder
                </div>

                <div className="page-header__content">

                    <h2 className="page-header__title">
                        { title }
                    </h2>

                    <div className="page-header__subtitle__wrapper">
                        <h3 className="page-header__subtitle">
                            { subtitleTopText } <br />
                            <span className="page-header__subtitle__bottomText">
                                { subtitleBottomText }
                            </span>
                        </h3>
                    </div>

                    <div className="page-header__bio">
                        { children }
                    </div>

                </div>

            </section>
        </section>
    );
}