
const Landing = ({setPage}) => {

    return(
        <main role="main" className="inner cover">
            <h1 className="cover-heading">Hi there.</h1>
            <p className="lead">
                I am a reader. I read fiction, technical documentations, and, philosophy.

                {/* I am a software engineer, and I love building cool stuff. 
                Simplicity and minimalism are some of my core values, and I strive to build 
                Elegant systems, and clean interface designs - be it APIs, or UIs - inspire me, and 
                I strive to build products  */}
            </p>
            <p className="lead">
                I have come to value simplicity and minimalism in my life, and 
                as a software engineer, I am, quite naturally, gravitated towards building clean, elegant systems.

                {/* I strive to harness the chaotic energy the world throws at me, 
                and turn it into something crazy. */}
            </p>
            <p className="lead">
                <a onClick={(e)=>{e.preventDefault();setPage("projects")}} className="btn btn-lg btn-secondary" href='/#'>Chekout my projects</a>
            </p>
        </main>
    )
}

export default Landing;