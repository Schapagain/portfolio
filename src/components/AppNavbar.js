import React from 'react';
import classNames from 'classnames';

const AppNavbar = ({className,currentPage,setPage}) => {

  const navLinkClass = 'cursor-pointer p-1 rounded-lg hover:bg-gray-200';

  const homeClass = classNames(className, navLinkClass, {
    'bg-white': currentPage === "home",
    });
  
  const projectsClass = classNames(className, navLinkClass, {
    'bg-white': currentPage === "projects",
    });

  const contactClass = classNames(className, navLinkClass, {
    'bg-white': currentPage === "contact",
    });

  return (
    <header className="flex mb-10 justify-between">
            <h3 className=""> Sandesh Chapagain </h3>
            <div className="flex space-x-4">
                <div>
                    <div 
                    onClick={()=>setPage("home")} 
                    className={homeClass}
                    >Home</div>
                </div>
                <div>
                    <div 
                    onClick={()=>setPage("projects")} 
                    className={projectsClass}
                    >Projects</div>
                </div>
                <div>
                    <div 
                    onClick={()=>setPage("contact")} 
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