
const Brand = ({webLink}) => {
    return (
        <a 
        className = "text-calypso my-auto font-medium text-3xl"
        href={webLink} 
        >
            BlockByBlock
        </a>
    );
}

const NavLink = ({text,webLink}) => {
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

const NavLinks = ({webLink}) => {
    return (
        <div className="hidden 2xl:flex ">
            <NavLink webLink={webLink} text="Features" />
            <NavLink webLink={webLink} text="About" />
            <NavLink webLink={webLink} text="Login" />
        </div>
    );
}

const NavBar = ({className,webLink}) => {
    return (
        <div className = {className + " w-full max-w-screen-xl flex p-3 justify-center m-3 2xl:justify-between"}>
            <Brand webLink={webLink}/>
            <NavLinks webLink={webLink}/>
        </div>
    );
}

NavBar.defaultProps = {
    webLink: "!#"
}

export default NavBar;