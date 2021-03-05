
const webLink = "https://block-by-block.netlify.app/";
const Brand = () => {
    return (
        <a 
        className = "mx-auto md:mx-none text-calypso my-auto font-medium text-3xl"
        href={webLink} 
        >
            BlockByBlock
        </a>
    );
}

const NavLink = ({text}) => {
    return (
        <a 
        className = {
            `p-2 font-medium text-calypso text-lg mx-4
            transition ease-in-out duration-700 hover:bg-calypso hover:text-white rounded-xl`
        }
        href={webLink}
        >
            {text}
        </a>
    )
}

const NavLinks = () => {
    return (
        <div className="hidden lg:flex">
            <NavLink text="Features" />
            <NavLink text="About" />
            <NavLink text="Login" />
        </div>
    );
}

const NavBar = () => {

    return (
        <div className = "w-full max-w-screen-xl flex p-3 m-3 justify-between">
            <Brand />
            <NavLinks />
        </div>
    );
}

export default NavBar;