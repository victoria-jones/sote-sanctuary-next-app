import '..//_styles/components/donate-meter.styles.scss';

export default function DonateMeter ({ addClass }) {
    return(
        <div className={`
            ${addClass ? addClass : ''}
            donate-meter
        `}>
            <script
                src="https://donorbox.org/widget.js"
                paypalExpress="false">
            </script>
            <iframe
                className="donate-metera__iframe"
                frameborder="0"
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