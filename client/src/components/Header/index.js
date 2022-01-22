import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/stylesheet.css"

import Auth from '../../utils/auth';
// import NavTabs from '../NavBar';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="header-div"> 
         <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Gullivarrs Travels
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Trade, Travel, and Make Friends!
        </p>
        {/* <NavTabs/> */}


        <div>
          {Auth.loggedIn() ? (
            <>

            {/* =============== IF LOGGED IN ================= */}
              <Link className="btn btn-lg btn-primary m-2" to="/me">
               <h2 className='title is-4 has-text-white'>  My Villagers    </h2> 
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
               <h2 className='title is-4 has-text-black'> Logout </h2> 
              </button>
            </>
          ) : (
            <>


             {/* =============== IF LOGGED OUT ================= */}
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                <h2 className='title is-3 has-text-white'>  Login </h2>
              </Link>

              <Link className="btn btn-lg btn-light m-2" to="/signup">
               <h2 className='title is-3'> Signup </h2> 
              </Link>
            </>
          )}


        </div>
    
      </div>
    
    </header>
  );
};

export default Header;
