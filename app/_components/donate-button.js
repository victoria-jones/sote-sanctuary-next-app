'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import '..//_styles/components/donate-button.styles.scss';

export default function DonationButtonn ({ addClass, mobileMenu }) {

    useEffect(() => {
        const loadScript = async () => {
            try {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://donorbox.org/install-popup-button.js'

                document.head.appendChild(script);
            } catch (error) {
                console.error('Error loading script:', error);
            }
        }

        loadScript();

        //remove script when/if component is unmounted
            //avoid memory leaks
        return () => {
            const scriptElement = document.querySelector(
                'script[src="https://donorbox.org/install-popup-button.js"]'
              );

              if (scriptElement) {
                document.head.removeChild(scriptElement);
              }
        }
    },[]);

    return(
        <div className={`
            ${addClass ? addClass : ''}
        `}>
            <Link
                className={`
                    ${mobileMenu ? 'dbox-donation-button__mobile' : ''}
                    dbox-donation-button
                `}
                href="https://donorbox.org/salt-of-the-earth-animal-sanctuary-build-kennels-vet-bills-and-feed-our-animals">
                    Donate
            </Link>
        </div>
    );
}