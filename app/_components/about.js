import Logo from './logo';
import '..//_styles/components/about.styles.scss';

export default function About () {
    return(
        <section className="about main-section" id="about-section">
            <div className="about__video-wrapper">
                <div className="about__video-line about__video-line-top"></div>

                <div className="about__logo">
                    <Logo large />
                </div>
                <div className="about__video">
                    <video width="100%" height="100%" muted autoPlay loop>
                        <source src="videos/pig-and-pond_sote-sanctuary_video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="about__video-line about__video-line-bottom"></div>
            </div>

            <div className="about__text">
                <p>
                Salt of the Earth Sanctuary is a sustainable off grid farmstead
                located in the Sierra Mountains dedicated to the wellness of
                animals and the community. We are always striving to improve
                upon and be a safe space for all, animal or human. Our property
                is a carefully maintained and cared for 140 acre property with
                flowing natural springs and ponds for our furry friends. Our
                future plans include providing safe and clean produce for the
                community from our expanding farmstead. We strive to be a place
                where people or animals can seek sanctuary while becoming
                contributing members of the community by offering programs and
                resources.
                </p>
                <p>
                Our property is a sanctuary focused on rehabilitation of animals
                and people in the community. We plan on building apartments/kennels
                to rescue more dogs from breeders and kill shelters while taking in
                those that need help getting back on track. Our rehabilitation
                program pairs dogs/goats and future horses with people to give each
                other purpose and on the right track to their forever home. Becoming
                a non profit organization is allowing us to verify our status in
                order to ask for grants and donations to build as needed. We&apos;ve
                already invested 1million and realized these past three years its the
                way to go. Also if the person doesn&apos;t want to work with animals we
                have the farm to table program which is just farming,
                preserving/processing and cooking.
                </p>
            </div>
        </section>
    );
}