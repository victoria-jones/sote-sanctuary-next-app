import Image from 'next/image';
import Link from 'next/link';
import '..//_styles/components/featured-banner.styles.scss';
import '..//_styles/_utilities.styles.scss';

export default function FeaturedBanner ({ addClass }) {

    return(
        <div className={`featured-banner
            ${addClass ? addClass : ''}
        `}>
            <div className="featured-banner__text-wrapper">
                <Image
                    className="featured-banner__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />

                <span>New <Link className='inlineLink' href="#about-section">rescue of the month</Link> looking for a forever home!</span>

                <Image
                    className="featured-banner__heart"
                    src="images/heart-small.png"
                    width={20}
                    height={20}
                    alt="heart icon"
                />
            </div>

            <Image
                className="featured-banner__image"
                priority
                fill
                src="images/banner.png"
                alt="banner image"
            />
        </div>
    );
}