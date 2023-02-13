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
                        <h4>
                            {game.name}
                        </h4>

                    </div>
                ))}
        </div>
                    
        )
                
}

export default GameBox;