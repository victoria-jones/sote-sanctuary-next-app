import Image from 'next/image';
import RippedEdgeContainer from './ripped-edge-container';
import StyledButton from './styled-button';
import '..//_styles/components/rescue-feature.styles.scss';

export default function RescueFeature () {
    //github pages work around for issue with applying bg images with css
    //add another class to the element if the environment is github pages
    if(process.env.IS_GITHUB_PAGES === 'true') {
        require('..//_styles/components/github-pages.styles.scss');
    }

    return(
        <div className="rescue-feature main-section section-margin" id="rescue-feature-section">
            <RippedEdgeContainer addClass="rescue-feature__container">

                <div className="rescue-feature__image-container">
                    <Image
                        className="rescue-feature__image-container__image"
                        src="images/rescue_puppy-01_01.png"
                        width={300}
                        height={300}
                        alt='rescue puppy that is possibly a border-collie pitbull mix'
                    />
                    <Image
                        className="rescue-feature__image-container__leaves"
                        src="images/orange-leaves_angled_large.png"
                        width={300}
                        height={80}
                        alt="orange leaves image"
                    />
                </div>


                <div className="rescue-feature__info">

                    <h2 className="rescue-feature__heading">
                        Rescue of the Month
                    </h2>

                    <div className="rescue-feature__p-wrapper">
                    <p className="rescue-feature__p">
                    On November 17th 2023 around 4pm, we were driving along on
                    highway 5 when suddenly a tiny puppy was seen on the side
                    of the highway looking ready to cross. Our courageous
                    Treasurer risked his own life to stop traffic and pick up
                    the puppy nearly seconds away from becoming road kill. He is
                    now safe and deeply loved at the sanctuary. We are featuring
                    this sweet angel pup to find him a forever home to brighten
                    your lives. He is a sweet gentle soul and very healthy at
                    around 6 weeks of age.
                    </p>

                    <p className="rescue-feature__p">
                    If you are interested in this little guy or want more information please email
                    us at: <span className="text-highlight">saltoftheearthsanctuary@gmail.com</span> or click the adopt
                    me! button below.
                    </p>

                    </div>

                    <StyledButton buttonText="Adopt Me!" buttonLink="mailto:saltoftheearthsanctuary@gmail.com" />

                </div>
            </RippedEdgeContainer>
        </div>
    );
}