import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const GameBox = ({
    games,
}) => {
    return (
        <div className='container-main'>
        <div className='row'>
            {games &&
                games.sort((a, b) => (a.ratings_count > b.ratings_count) ? -1 : 1).map((game) => (

                    <Link to={`/${game.id}`}>
                        <div key={game.id} className='card-main mb-3'>
                            <h4 className='card-header bg-primary text-light p-2 m-0'>
                                {game.name}
                            </h4>
                            <div className="card-body">
                                <img className="card-img" src={game.background_image} alt="Card image"></img>
                                <p className="card-text">Rating : {game.rating}</p>
                                <p className="card-text">Release Date : {game.released}</p>
                                <p className="card-text">Playtime : {game.playtime}</p>
                                <p className="card-text">Metacritic : {game.metacritic}</p>
                                <p className="card-text">Platforms : {game.platforms.map((platform) => (
                                    <span key={platform.platform.id}>{platform.platform.name}, </span>
                                ))}</p>
                                <p className="card-text">Click for more Info</p>



                            </div>
                        </div>
                    </Link>
                ))}

        </div>
        </div>

    )

}

export default GameBox;