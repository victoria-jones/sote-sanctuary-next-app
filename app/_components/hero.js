import Image from 'next/image';
import '..//_styles/components/hero.styles.scss';
import FeaturedBanner from './featured-banner.js';

export default function Hero () {
    return(
        <section className="hero">
            <FeaturedBanner
                addClass="hero__featured-banner"
            />

            <div className="hero__logo-image-wrapper">
                <Image
                    className="hero__logo-image"
                    priority
                    fill
                    src="images/logo/sote-sanctuary-logo.png"
                    alt="Salt of the Earth Sanctuary logo"
                />
                <div className="hero__logo-image-circle"></div>
            </div>
            <div className="hero__image-wrapper">
                <Image
                    priority
                    className="hero__image"
                    src="images/waterfall_hero-image_large.png"
                    width={1120}
                    height={896}
                    alt="photo of a waterfall on the Salt of the Earth Sanctuary property"
                />
            </div>
        </section>
    );
}