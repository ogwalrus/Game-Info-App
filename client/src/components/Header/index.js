import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useState } from 'react';


const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    window.location.href = `/search/${searchInput}`;
  }
  return (

    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">4RealGamerz</h1>
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
        <div class="input-group">
          <div class="form-outline">
            <input id="search-input" type="search" onChange={handleChange} onSubmit={handleSearch} class="form-control" />
            <label class="form-label" for="form1">Search</label>
          </div>
          <button id="search-button" type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
