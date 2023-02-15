import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gameSearch from '../utils/GameSearch';
import GameBox from '../components/GameBox';

function GameSearch(){
    const { gameName } = useParams();
    console.log(gameName);
    const [results, setResults] = useState([]);
    const callApi = async () => {
        const response = await gameSearch(gameName);
        const data = await response.data;
        console.log(data);
        setResults(data.results);
    }
    useEffect(() => {
        callApi();
    }, []);
    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-8 mb-3">
                    <GameBox games={results}/>
                </div>
            </div>
        </main>
    );
}

export default GameSearch;