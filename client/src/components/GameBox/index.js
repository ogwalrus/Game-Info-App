import React from 'react';
import { Link } from 'react-router-dom';

const GameBox = ({
    games,
}) => {
    return (
        <div>
            {games &&
                games.map((game) => (
                    <div className="card mb-3">
                        <h4 className='card-header bg-primary text-light p-2 m-0'>
                            {game.name}
                        </h4>

                    </div>
                ))}
        </div>
                    
        )
                
}

export default GameBox;