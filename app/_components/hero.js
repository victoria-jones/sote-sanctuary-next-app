import Image from 'next/image';
import '..//_styles/components/hero.styles.scss';

export default function Hero () {
    return(
        <section className="hero">
            <div className="hero__logo-image-wrapper">
                <Image
                    className="hero__logo-image"
                    priority
                    fill
                    src="images/salt-of-the-earth-sanctuary_large-logo_large.png"
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