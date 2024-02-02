import '..//_styles/components/page-header.styles.scss';
import FeaturedBanner from '..//_components/featured-banner.js';
import StyledLine from '..//_components/styled-line';

export default function PageHeader ({ children, title, subtitleTopText,subtitleBottomText, image, video }) {
    return(
        <section className="page-header">
            <FeaturedBanner />
            <section className="page-header__wrapper section-margin">

                <div className="page-header__image">
                    image holder
                </div>

                <div className="page-header__content">

                    <div className="page-header__title--wrapper">
                        <h2 className="page-header__title">
                            { title }
                        </h2>


                        <div className="page-header__subtitle__wrapper">
                            <h3 className="page-header__subtitle">
                                { subtitleTopText } <br />
                                <span className="page-header__subtitle__bottomtext">
                                    { subtitleBottomText }
                                </span>
                            </h3>
                        </div>

                        <StyledLine />
                    </div>

                    <div className="page-header__bio">
                        { children }
                    </div>

                </div>

            </section>
        </section>
    );
}