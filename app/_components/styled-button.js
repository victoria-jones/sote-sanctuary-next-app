import Link from 'next/link';
import Image from 'next/image';
import '..//_styles/components/styled-button.styles.scss';

export default function StyledButton ({ buttonText }) {
    return(
        <div className="button">
            <Link className="button__link"
                href="#"
                target="blank"
            >
                <div className="button__style">
                    {buttonText}
                </div>
            </Link>
            <Image
                className="button__leaves"
                src="/images/green-leaves.png"
                width={280}
                height={74}
            />
        </div>
    );
}