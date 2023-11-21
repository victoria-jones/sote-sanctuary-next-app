import Image from 'next/image';
import '..//_styles/components/logo.styles.scss';


export default function Logo ({ toggleColor, mobile, large }) {
    const mediaSrc = process.env.IS_GITHUB_PAGES ?
        '/sote-sanctuary-next-app/' :
        null;

    if (large) {
        return (
            <div className={`logo logo__large
                ${toggleColor ? 'logo__white' : ''}
            `}>

                {
                    toggleColor ? (
                        <Image
                            src="images/logo/sote-sanctuary-logo-text_white.png"
                            height={70}
                            width={236}
                            alt="Salt of the Earth Sanctuary Logo"
                        />
                    ):
                    (
                        <Image
                            src="images/logo/sote-sanctuary-logo-text.png"
                            height={70}
                            width={236}
                            alt="Salt of the Earth Sanctuary Logo"
                        />
                    )
                }

            </div>
        );
    } else {
        return (
            <div className={`logo
                ${toggleColor ? 'logo__white' : ''}
                ${mobile ? 'logo__mobile' : ''}
            `}>
                {
                    mobile ? (
                        toggleColor ? (
                            <Image
                                src="images/logo/sote-sanctuary-logo-abbreviation_white.png"
                                height={30}
                                width={109}
                                alt="Salt of the Earth Sanctuary Logo"
                            />
                        ) : (
                            <Image
                                src="images/logo/sote-sanctuary-logo-abbreviation.png"
                                height={30}
                                width={109}
                                alt="Salt of the Earth Sanctuary Logo"
                            />
                        )
                    ) :
                    (
                        toggleColor ? (
                            <Image
                                src="images/logo/sote-sanctuary-logo-text_white.png"
                                height={70}
                                width={236}
                                alt="Salt of the Earth Sanctuary Logo"
                            />
                        ):
                        (
                            <Image
                                src="images/logo/sote-sanctuary-logo-text.png"
                                height={70}
                                width={236}
                                alt="Salt of the Earth Sanctuary Logo"
                            />
                        )
                    )
                }
            </div>
        );
    }
}