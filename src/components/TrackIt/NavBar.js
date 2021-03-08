const Brand = ({webLink}) => {
    return (
        <a 
        className = "text-white my-auto font-medium text-3xl"
        href={webLink}
        rel="noreferrer"
        target="_blank"
        >
            Track It
        </a>
    );
}

const NavLink = ({text,webLink}) => {
    return (
        <a 
        className = {
            `p-2 font-medium text-lg mx-4
            transition ease-in-out duration-700 hover:bg-indigo-600 hover:text-white rounded-xl`
        }
        href={webLink}
        rel="noreferrer"
        target="_blank"
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
        <div className = {className + " text-white w-full max-w-screen-xl flex p-3 justify-center m-3 2xl:justify-between"}>
            <Brand webLink={webLink}/>
            <NavLinks webLink={webLink}/>
        </div>
    );
}

NavBar.defaultProps = {
    webLink: "!#"
}

export default NavBar;