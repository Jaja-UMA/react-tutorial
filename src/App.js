import { useEffect, useState } from 'react';
import {List} from "./List";
import {Form} from "./Form"
import Card from "./components/Card/Card";
import { getPokemon } from "./utils/get";
import { getLanguages } from "./languages";
import './App.css';


function App() {
  //pokeAPI
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading,setLoading] = useState(true);
  const [pokemonData,setPokemonData] = useState([]);

  const[tab,setTab]=useState('list');
  const[langs,setLangs]=useState([]);

  useEffect(() => {
    const fetchPokemonData = async() => {
      let res = await getPokemon(initialURL);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  },[]);

  const loadPokemon = async(data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon (pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const fetchLanguages = async () =>{
    const languages = await getLanguages();
    setLangs(languages);
  };

  const addLang = (lang) =>{
    setLangs([...langs,lang]);
    setTab('list');
  }

  return (
    <>
      <div>
        {loading ? (
          <p>ロード中</p>
        ):(
          <div>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
