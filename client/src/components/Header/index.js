import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameSearch from '../../pages/SearchResults';

import Auth from '../../utils/auth';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [searchedGames, setSearchedGames] = useState('');

  const handleInputChange = (event) => {
    setSearchedGames(event.target.value);
  };
  return (

    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0"><img className='icon-img' src='https://icon-library.com/images/mix_color_5__game-512_97495.png'></img>4RealGamerz</h1>
          </Link>
          <p className="m-0">Get into the mind of a gamer.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
        <form>
        <div class="input-group">
          <div class="form-outline">
            <input type="text" id="searchInput" class="form-control" value={searchedGames} onChange={handleInputChange} />
            <label class="form-label" for="searchInput">Search</label>  
          </div>
          <Link to={`/search/${searchedGames}`}>
          <button type="submit" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
          </Link>
        </div>
      </form>
      </div>
    </header>
  );
};

export default Header;
