import axios from 'axios'
//Api keys Authentication 
const KEY_GETS_PUBLIC = "dfb6e0daa99fd247ea8cea07c24904e5"
const KEY_GETS_PRIVATE = "c85830ec545d68e9df01466854312cfccb3dbd1b"
const HASH_GETS_REQUEST = "e8e748b01ed708790c38ff86b96845cd"
const TIME_TAMP = "9"

// Lista todos los superheroes GET  
export const ListSuperHeroes = async (pageNumber : string | undefined | string[] = "0"): Promise<any> => {
  const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${KEY_GETS_PUBLIC}&ts=${TIME_TAMP}&hash=${HASH_GETS_REQUEST}&offset=${pageNumber}`);
  return await res.json();
};

// Busca un superHeroe expecifico
export const Search = async (name : string,pageNumber : number = 0, typeSearch = "all"): Promise<any> => {

  if(typeSearch === "all"){
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${KEY_GETS_PUBLIC}&ts=${TIME_TAMP}&hash=${HASH_GETS_REQUEST}&offset=${pageNumber}`);
    return await res.json();
  }
  if(typeSearch === "comics"){
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/comics?title=${name}&apikey=${KEY_GETS_PUBLIC}&ts=${TIME_TAMP}&hash=${HASH_GETS_REQUEST}&offset=${pageNumber}`);
    return await res.json();
  }
  if(typeSearch === "series"){
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/series?title=${name}&apikey=${KEY_GETS_PUBLIC}&ts=${TIME_TAMP}&hash=${HASH_GETS_REQUEST}&offset=${pageNumber}`);
    return await res.json();
  }
  

};
// Datos un superHeroe expecifico
export const DataHeroSelect =  (id: string | undefined | string[]): Promise<any> => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${KEY_GETS_PUBLIC}&ts=${TIME_TAMP}&hash=${HASH_GETS_REQUEST}`).then(res => res.data)
    .catch(error => error)
};
