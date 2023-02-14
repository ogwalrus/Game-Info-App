import axios from "axios";

const searchGame = (gameId) => 
    axios.get(`https://api.rawg.io/api/games/${gameId}?key=a7bb8bf23e8e49069c1db32e3addcc4d`);

export default searchGame;
