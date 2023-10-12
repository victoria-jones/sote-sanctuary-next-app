export default function Footer () {
    const year = new Date().getFullYear();

    return(
        <footer>
            <div>Logo</div>
            <section>
                <p>a non-profit farm and sanctuary for all</p>
                <p>© {year}</p>
            </section>
        </footer>
    );
}