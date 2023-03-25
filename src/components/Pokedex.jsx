import { getPokemons } from "../fetchMethods/getMethods";
import { useState } from "react";
import { useQuery } from "react-query";
import Body from "./Body";
import Header from "./Header";
import SideBar from "./SideBar";
import { Main } from "../styles/Pokedex.styles";

const Pokedex = () => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [searchBarValue, setSearchBarValue] = useState("");

    const { data } = useQuery("pokemons", () => getPokemons().then((res) => res.json()), {
        refetchOnWindowFocus: false,
    });

    let data2 = [];

    if (!searchBarValue) {
        data2 = data?.results;
    } else {
        if (data?.results) {
            const filteredValues = data?.results.filter((pokemon) => pokemon.name.includes(searchBarValue.toLowerCase() || ""));
            data2 = filteredValues;
        }
    }

    const getSearchBarValue = (inputValue) => {
        setSearchBarValue(inputValue);
    };

    return (
        <Main>
            <Header getSearchBarValue={getSearchBarValue} totalOfPokemons={data2?.length} />
            {data2?.length > 0 ? <SideBar setCurrentPokemon={setCurrentPokemon} data2={data2} /> : <></>}
            <Body key={5} currentPokemon={currentPokemon} />
        </Main>
    );
};

export default Pokedex;