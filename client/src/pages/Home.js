import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import GameBox from '../components/GameBox';

import { QUERY_THOUGHTS } from '../utils/queries';


async function callApi() {
  return fetch(`https://api.rawg.io/api/games?key=a7bb8bf23e8e49069c1db32e3addcc4d`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },

  })
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      
      return json;
    })
    .then(
        (response) => ({ response }),
        (error) => ({ error: error.message || 'Something bad happened' })
      
    );
}

async function Home(){
  const apiData = await callApi();
  const gameObject = apiData.response.results;
  let gameArray = [];
  for(const game of gameObject){
    gameArray.push(game);
  }
  console.log(typeof gameObject);
  console.log(typeof gameArray);
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
            <GameBox games={gameObject}/>
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."/>

              </>
            
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
