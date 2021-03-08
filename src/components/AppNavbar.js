import React from 'react';
import classNames from 'classnames';

const AppNavbar = ({className,currentPage,scrollToContact, scrollToHome, scrollToProjects}) => {

  const mainClass = classNames(className,' max-w-screen-2xl text-white bg-calypso');
  const navLinkClass = 'cursor-pointer p-1 rounded-lg hover:bg-white hover:text-black';
  const homeClass = classNames(navLinkClass, {
    'bg-white': currentPage === "home",
    });
  const projectsClass = classNames(navLinkClass, {
    'bg-white': currentPage === "projects",
    });
  const contactClass = classNames(navLinkClass, {
    'bg-white': currentPage === "contact",
    });

  return (
    <header className={mainClass}>
            <h3 className=""> Sandesh Chapagain </h3>
            <div className="flex space-x-4">
                <div>
                    <div 
                    onClick={()=>scrollToHome()} 
                    className={homeClass}
                    >Home</div>
                </div>
                <div>
                    <div 
                    onClick={()=>scrollToProjects()} 
                    className={projectsClass}
                    >Projects</div>
                </div>
                <div>
                    <div 
                    onClick={()=>scrollToContact()} 
                    className={contactClass}
                    >Contact</div>
                </div>
                
            </div>
    </header>
  );
}

export default AppNavbar;

// var btnClass = classNames('btn', this.props.className, {
//   'btn-pressed': this.state.isPressed,
//   'btn-over': !this.state.isPressed && this.state.isHovered
// });