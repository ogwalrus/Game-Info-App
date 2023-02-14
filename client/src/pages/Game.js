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
    const {gameId} = useParams();
    console.log(gameId);
    const [results, setResults] = useState([]);
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];
    const callApi = async () => {
        const response = await searchGame(gameId);
        const data = await response.data;
        console.log(data);
        setResults(data);
    }
    
    useEffect(() => {
        callApi();
    }, []);
    
    return (
        <main>
            
        </main>
    );
}

export default Game;