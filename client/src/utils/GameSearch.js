import axios from 'axios';

const gameSearch = (name) =>
    axios.get(`https://api.rawg.io/api/games?key=a7bb8bf23e8e49069c1db32e3addcc4d&search=${name}&page_size=50`);

export default gameSearch;