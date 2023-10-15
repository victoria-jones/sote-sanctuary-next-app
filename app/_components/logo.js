import Image from 'next/image';
import '..//_styles/components/logo.styles.scss';


export default function Logo ({ toggleColor }) {
    return(
        <div className={`logo
            ${toggleColor ? 'logo__white' : ''}
        `}>
            <div className="logo__top">
                salt of the earth
            </div>
            <div className="logo__bottom">
                sanctuary
            </div>
            <div className="logo__leaf">
                <Image
                    priority
                    src="/images/orange-leaves.png"
                    height={45}
                    width={154}
                    alt=""
                />
            </div>
        </div>
    );
}