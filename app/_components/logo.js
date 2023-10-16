import Image from 'next/image';
import '..//_styles/components/logo.styles.scss';


export default function Logo ({ toggleColor, mobile }) {
    return(
        <div className={`logo
            ${toggleColor ? 'logo__white' : ''}
            ${mobile ? 'logo__mobile' : ''}
        `}>
            {
                mobile ? (
                    <div className="logo__top-mobile">
                        sote
                    </div>
                ) : (
                    <div className="logo__top">
                        salt of the earth
                    </div>
                )
            }
            {
                mobile ? (
                    null
                ) :
                (
                    <div className="logo__bottom">
                        sanctuary
                    </div>
                )
            }

            <div className="logo__leaf">
                <Image
                    priority
                    src="/images/orange-leaves.png"
                    height={mobile ? 30 : 45}
                    width={mobile ? 139 : 154}
                    alt=""
                />
            </div>
        </div>
    );
}