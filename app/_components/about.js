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
                    <video className="about__video__content"
                        width="100%" height="100%" muted loop playsInline autoPlay>
                        <source src="videos/pig-and-pond_sote-sanctuary_video.mp4" type="video/mp4" />
                        <source src="videos/pig-and-pond_sote-sanctuary_video_03.mp4" type="video/mp4" />
                        video is not supported
                    </video>
                </div>

                <div className="about__video-line about__video-line-bottom"></div>
            </div>

            <div className="about__text">
                <p>
                Salt of the Earth Sanctuary is a sustainable, off-grid farmstead
                located in the Sierra Mountains.  Dedicated to the wellness of
                animals and the community, we are always striving to improve and
                be a safe space for all, animal or human.
                </p>
                <p>
                Our property is over 140 acres of carefully-maintained and cared-for
                land, with flowing natural springs and ponds for our furry friends.
                </p>
                <p>
                Our future plans also include providing safe and clean produce for
                the community from our expanding farmstead. We strive to be a place
                where both people and animals can seek sanctuary while becoming
                contributing members of the community by offering programs and
                resources.
                </p>
                <p>
                Our property is a sanctuary focused on rehabilitation of animals and
                people in the community. We plan on building apartments/kennels to
                rescue more dogs from breeders and kill shelters while also taking
                in those that just need a loving home to help get back on track to
                find their fur-ever home. Our rehabilitation program pairs
                dogs/goats(and in the future, horses) with people, to give each
                other purpose,  and plant their feet and paws firmly on the right
                track to find their forever home.
                </p>
                <p>
                Becoming a non-profit organization is allowing us to verify our
                status to be able to ask for grants and donations to build as
                needed. We&apos;ve already invested over $1 million of our own
                resources, and realized these past three years that if we really
                want to accomplish this goal we <u>NEED YOUR HELP</u>!
                </p>
                <p>
                Also, if a participant would rather not work with animals, we also
                have the farm to table program, which would involve helping with
                the farming, preserving/processing and cooking of our crops!
                </p>
            </div>
        </section>
    );
}