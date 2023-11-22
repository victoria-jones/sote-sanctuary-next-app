import '..//_styles/components/ripped-edge-container.styles.scss';

export default function RippedEdgeContainer ({ children, addClass }) {
    //github pages work around for issue with applying bg images with css
    //add another class to the element if the environment is github pages
    if(process.env.IS_GITHUB_PAGES === 'true') {
        require('..//_styles/components/github-pages.styles.scss');
    }

    return(
        <div className={`ripped-edge-container goalsContainerBackgroundImage
            ${ addClass ? addClass : ''}
        `}>
            { children }
        </div>
    );
}