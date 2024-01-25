import PageHeader from '..//_components/page-header.js';
import Link from 'next/link';

export default function About () {
    return(
        <main>
            <PageHeader
                title="about"
                subtitleTopText="salt of the earth"
                subtitleBottomText="sanctuary"
            >
                <p>
                    Salt of the Earth Sanctuary is a sustainable, off-grid farmstead located in
                    the Sierra Mountains. Our property is over 140 acres of carefully-maintained
                    and cared-for land, with flowing natural springs and pongs for our furry friends.
                </p>
                <p>
                    We are dedicated to the wellness of animals and our community. Our mission is to
                    be a place where both people and animals can seek sanctuary while becoming
                    contributing members of our community. Our future plans for the sanctuary include
                    offering programs and resources form animals and humans alike and to expand into
                    a local provider for safe and clean produce for the community.
                </p>
            </PageHeader>

            <section>
                non-profit with donation link and bar
            </section>

            <section className="about__future">
                <h2 classNme="about__future__title">
                    Our future plans/programs
                </h2>
                <div className="about__images">
                    images area
                </div>
                <div className="about__future__content">
                    <section className="about__future__content__section about__future__content__section--rehab">
                        <h3 className="about__future__content__section__title">
                            Rehabilitation
                        </h3>
                        <div className="about__future__content__section__text">
                            <p className="about__future__content__section__text__p">
                                Our goals include providing rehabilitation for both human and
                                animal alike. We are planning on building apartments/kennels to
                                allow us to rescue dogs from breeders, kill shelters, and others
                                that just need a loving home to help get back on track to finding
                                their fur-ever home.
                            </p>
                            <p className="about__future__content__section__text__p">
                                Our rehabilitation program will pair dogs/goats (and in the future,
                                horses) with people, to give each other purpose, and plant both feet
                                and paws firmly on the right track to find their forever home.
                            </p>
                            <p className="about__future__content__section__text__p">
                                For participants that would rather not work with animals, we are also
                                working on a farm to table program!
                            </p>
                        </div>
                    </section>

                    <section className="about__future__content__section about__future__content__section--farmtotable">
                        <h3 className="about__future__content__section__title">
                            Farm to Table
                        </h3>
                        <div className="about__future__content__section__text">
                            <p className="about__future__content__section__text__p">
                                Our future plans include providing safe and clean produce
                                for the community from our expanding farmstead. Participants
                                can work with us on our farm to table program. This would
                                involve helping with the farming, preserving/processing, and
                                cooking of our crops for the community!
                            </p>
                            <p className="about__future__content__section__text__p">
                                Participants will be able to lend a hand to the community as
                                well as learn valuable skills and lessons on farming to take
                                with them beyond the Salt of the Earth Sanctuary.
                            </p>
                        </div>
                    </section>
                </div>
            </section>

            <section>
                see more social media version 2 with videos
            </section>
        </main>
    );
}