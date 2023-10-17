import Logo from './logo';
import '..//_styles/components/about.styles.scss';

export default function About () {
    return(
        <section className="about" id="about-section">
            <div className="about__video-wrapper">
                <div className="about__video-line about__video-line-top"></div>

                <div className="about__logo">
                    <Logo large />
                </div>
                <div className="about__video">video</div>

                <div className="about__video-line about__video-line-bottom"></div>
            </div>

            <div className="about__text">
                <p>
                Salt of the Earth Sanctuary is a sustainable off grid farmstead dedicated to
                the wellness of animals and the community. We are always striving to improve
                upon and be a safe place for all, animal or human. Our property is a carefully
                maintained and cared for, pesticide free, 140 acre property with a spring and
                ponds. Our future plans include providing safe and clean produce for the
                community. We want to be a place where people or animals can seek sanctuary
                while becoming contributing members of the community.
                </p>
            </div>
        </section>
    );
}