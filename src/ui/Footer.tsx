import Logo from './Logo';
import CommonLinks from './CommonLinks';

const Footer = () => {
    return (
        <footer className="bg-primary-light-purple px-3 py-16 md:px-9 md:py-8">
            <div className="flex flex-col items-center gap-6 text-lg font-bold text-primary-purple md:flex-row md:justify-between md:gap-16">
                <div className="flex flex-col gap-1">
                    <Logo />
                    <a
                        className="transition-all hover:scale-110"
                        href="https://rawg.io/apidocs"
                    >
                        Built with ➡ RAWG API
                    </a>
                </div>
                <div className="gap-6 md:flex  md:flex-col md:gap-8">
                    <ul className="flex flex-col items-center gap-3 md:flex-row">
                        <CommonLinks />
                    </ul>
                    <div className="text-end">
                        <p className="mt-3 text-sm md:mt-4">
                            <span>© 2023 Video Games Digital.</span>{' '}
                            <span>All rights reversed.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
