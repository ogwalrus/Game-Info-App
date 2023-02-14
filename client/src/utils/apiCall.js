import axios from 'axios';


const search = () => 
  axios.get(`https://api.rawg.io/api/games?key=a7bb8bf23e8e49069c1db32e3addcc4d`);

export default search;

// Path: Game-Info-App\client\src\utils\apiCall.js
