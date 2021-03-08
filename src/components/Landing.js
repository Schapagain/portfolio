import classNames from 'classnames';

const Landing = ({className,Ref,scrollToProjects,scrollToContact}) => {

    const mainClass = classNames(className,'flex bg-theme-color justify-center text-center');
    const buttonClass = 'hover:bg-gray-600 hover:text-white text-black bg-white p-3 ml-2 mr-2 mt-5 rounded-md';
    const headingClass = 'text-3xl mb-2';
    const introClass = 'text-xl';
    const buttonGroupClass = 'flex justify-center'
    const mainTextClass = 'flex z-30 flex-col w-full md:w-1/2 p-5 justify-center';

    return(
        <main ref={Ref} className={mainClass}>
            <div className={mainTextClass}>
                <h1 className={headingClass}>Hi there.</h1>
                <div className={introClass}>
                    <p>I am a reader.</p> 
                    <p>I read fiction, technical documentations, and philosophy.</p>
                    <p>
                        I have come to value simplicity and minimalism in my life, and 
                        as a software engineer, I am, quite naturally, gravitated towards building clean, elegant systems.
                    </p>
                    <p className="mt-2">
                        And, oh, I also love Physics.
                    </p>
                    {/* I am a software engineer, and I love building cool stuff. 
                    Simplicity and minimalism are some of my core values, and I strive to build 
                    clean interfaces. I work with both front and back end technologies,
                    and am experienced with full-stack development.*/}
                </div>
                <div className={buttonGroupClass}>
                    <a onClick={(e)=>{e.preventDefault();scrollToContact()}} className={buttonClass} href='/#'>Get in touch</a>
                    <a onClick={(e)=>{e.preventDefault();scrollToProjects()}} className={buttonClass} href='/#'>Checkout my projects</a>
                </div>    
            </div>
            {/* <div className={mainImageClass}>
                <img className="" src={characterModel} alt="avatar of a persons character"/>
            </div> */}
        </main>
    )
}

export default Landing;