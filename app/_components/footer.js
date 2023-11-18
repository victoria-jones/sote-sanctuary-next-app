import Logo from './logo';
import '..//_styles/components/footer.styles.scss';

export default function Footer () {
    const year = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer__logo">
                <Logo toggleColor />
            </div>
            <section className="footer__text">
                <p className="footer__text__paragraph">Non-profit rescue and farmstead</p>
                <p className="footer__text__paragraph">© {year}</p>
            </section>
        </footer>
    );
}