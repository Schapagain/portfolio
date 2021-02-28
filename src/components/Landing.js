import classNames from 'classnames';
import characterModel from '../images/characterModel.png';

const Landing = ({setPage,className}) => {

    const buttonClass = classNames(className, 'bg-white p-3 mt-2 rounded-md', {

    });

    const headingClass = 'text-3xl mb-2';
    const introClass = 'text-xl';
    const buttonGroupClass = 'flex'
    const mainTextClass = 'flex flex-col w-1/2 p-5 justify-center';
    const mainImageClass = 'w-1/2 bg-white flex';

    return(
        <main className="flex h-2/3">
            <div className={mainTextClass}>
                <h1 className={headingClass}>Hi there.</h1>
                <div className={introClass}>
                    <p>I am a reader.</p> 
                    <p>I read fiction, technical documentations, and, philosophy.</p>
                    <p>
                        I have come to value simplicity and minimalism in my life, and 
                        as a software engineer, I am, quite naturally, gravitated towards building clean, elegant systems.
                    </p>
                    {/* I am a software engineer, and I love building cool stuff. 
                    Simplicity and minimalism are some of my core values, and I strive to build 
                    Elegant systems, and clean interface designs - be it APIs, or UIs - inspire me, and 
                    I strive to build products  */}
                </div>
                <div className={buttonGroupClass}>
                    {/* <a onClick={(e)=>{e.preventDefault();setPage("contact")}} className={buttonClass} href='/#'>Contact me</a> */}
                    <a onClick={(e)=>{e.preventDefault();setPage("projects")}} className={buttonClass} href='/#'>Chekout my projects</a>
                </div>    
            </div>
            {/* <div className={mainImageClass}>
                <img className="" src={characterModel} alt="avatar of a persons character"/>
            </div> */}
        </main>
    )
}

export default Landing;