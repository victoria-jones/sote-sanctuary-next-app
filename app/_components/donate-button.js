import Link from 'next/link';
import '..//_styles/components/donate-button.styles.scss';

export default function DonationButtonn ({ addClass, mobileMenu }) {

    return(
        <div className={`
            ${addClass ? addClass : ''}
        `}>
            <script
                type="text/javascript"
                defer src="https://donorbox.org/install-popup-button.js">
            </script>
            <Link
                class={`
                    ${mobileMenu ? 'dbox-donation-button__mobile' : ''}
                    dbox-donation-button
                `}
                href="https://donorbox.org/salt-of-the-earth-animal-sanctuary-build-kennels-vet-bills-and-feed-our-animals">
                    Donate
            </Link>
        </div>
    );
}