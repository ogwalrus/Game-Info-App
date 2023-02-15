import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import search from '../utils/apiCall';
import GameBox from '../components/GameBox';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { QUERY_THOUGHTS } from '../utils/queries';
import searchGame from '../utils/gameCall';

function Game() {
    const { gameId } = useParams();
    console.log(gameId);
    const [results, setResults] = useState([]);
    const callApi = async () => {
        const response = await searchGame(gameId);
        const data = await response.data;
        console.log(data);
        setResults(data);
    }
    const printStores = (stores) => {
        
        return stores.map((store) => (
            
            <a href={'https://' + store.store.domain} target="_blank">{store.store.name}<br/></a>
        ))

    }
    
    useEffect(() => {
        callApi();
    }, []);
    console.log(results.stores)
    if(!results.name){
        return (
            <main>
                <h1 className="display-1">Game with id {gameId} is not found</h1>
            </main>
        );
    }
    return (
        <main>
            <div className="card-desc mb-3">
                <h4 className='card-header bg-primary text-light p-2 m-0'>
                    {results.name}
                </h4>
                <div className="card-body">
                    <img className="card-img" src={results.background_image} alt="Card image"></img>
                    <p className='card-text'>Description: 
                        <br/>
                        {results.description_raw}
                    </p>

                    <a className="card-text" href={results.website} target='_blank'> Website: {results.website}</a>
                    
                    <p className="card-text">Rating: {results.rating}/{results.rating_top}</p>
                    <p className="card-text">Release Date: {results.released}</p>
                    <p className="card-text">Playtime: {results.playtime}</p>
                    <p className="card-text">Metacritic: {results.metacritic}</p>
                    <p className='card-text'>Where to buy:<br/> {printStores(results.stores)}</p>

                </div>
            </div>
        </main>
    );
}

export default Game;