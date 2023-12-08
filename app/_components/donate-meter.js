'use client';
import { useEffect } from 'react';
import '..//_styles/components/donate-meter.styles.scss';

export default function DonateMeter ({ addClass }) {

    useEffect(()=> {
        const loadScript = async () => {
            try{
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://donorbox.org/widget.js'
                script.paypalExpress= false;

                document.head.appendChild(script);
            } catch (error) {
                console.error('Error loading script:', error);
            }
        }

        loadScript();

        //remove script when/if component is unmounted
            //prevent memory leaks
        return () => {
            const scriptElement = document.querySelector(
                'script[scr="https://donorbox.org/widget.js"]'
            );

            if (scriptElement) {
                document.head.removeChild(scriptElement);
            }
        }
    },[]);

    return(
        <div className={`
            ${addClass ? addClass : ''}
            donate-meter
        `}>
            <iframe
                className="donate-metera__iframe"
                frameBorder="0"
                height="93px"
                name="donorbox"
                scrolling="no"
                seamless="seamless"
                src="https://donorbox.org/embed/salt-of-the-earth-animal-sanctuary-build-kennels-vet-bills-and-feed-our-animals?donation_meter_color=%2338571a&amp;only_donation_meter=true"
                width="100%">
            </iframe>
        </div>
    );
}