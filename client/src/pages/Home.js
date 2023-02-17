import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import search from '../utils/apiCall';
import GameBox from '../components/GameBox';

import { QUERY_THOUGHTS } from '../utils/queries';




function Home(){
  
  
  const [results, setResults] = useState([]);
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  const callApi = async () => {
    const response = await search();
    const data = await response.data;
    console.log(data);
    setResults(data.results);
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <main>
      <div className="card-box flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <p>These are some of the most popular games being played.</p>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <GameBox games={results.sort((a, b) => (a.ratings_count > b.ratings_count) ? -1 : 1)}/>
            </>
            
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
