import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>Co</Link>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" araia-controls="navbarCollapse" aria-expanded="false">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    
                </div>
            </nav>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul> */}
        </div>
    )

}

export default Navigation;