import useDesktopBreakpoint from "../hooks/use-desktop-breakpoint";

type NavbarLinkProps = {
    label: string;
    href: string;
    className?: string;
};

const NavBarLink = ({ label, href, className = "" }: NavbarLinkProps) => {
    return (
        <a className={`${className} relative group`} href={href}>
            {label}
            <span className="h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300"></span>
        </a>
    );
};

type SocialMediaLinkProps = {
    label: string;
    href: string;
    icon?: JSX.Element;
    imageUrl?: string;
    className?: string;
};

const SocialMediaLink = ({ label, imageUrl, href, icon, className = "" }: SocialMediaLinkProps) => {
    return (
        <a
            className={`flex flex-col justify-center items-center ${className}`}
            href={href}
            target="_blank"
        >
            {icon ? icon : <img className="w-8 rounded-sm" src={imageUrl} alt="Github Link" />}
            <p className="text-sm">{label}</p>
        </a>
    );
};

export default function Header() {
    const isDesktop = useDesktopBreakpoint();

    return (
        <header className="flex justify-center lg:justify-between items-center width-screen-90 m-auto py-3 font-medium sm:px-16">
            {isDesktop && (
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <NavBarLink label="About" href="#" />
                        </li>
                        <li>
                            <NavBarLink label="Skills" href="#" />
                        </li>
                        <li>
                            <NavBarLink label="Projects" href="#" />
                        </li>
                        <li>
                            <NavBarLink label="Experience" href="#" />
                        </li>
                    </ul>
                </nav>
            )}

            {/* Logo */}
            <a href="#" title="Lightning Amnish">
                <img
                    className="w-14 rounded-full"
                    src="./images/LightningAmnishLogo.png"
                    alt="AA"
                />
            </a>

            {/* Social Media */}
            {isDesktop && (
                <nav className="flex gap-5">
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Github"
                        href="https://github.com/Amnish04"
                        imageUrl="/images/github.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/amnish-singh-arora/"
                        imageUrl="/images/linkedin.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Blog"
                        href="https://dev.to/amnish04"
                        imageUrl="/images/dev-black.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Gmail"
                        href="https://dev.to/amnish04"
                        imageUrl="/images/gmail.png"
                    />
                </nav>
            )}
        </header>
    );
}
