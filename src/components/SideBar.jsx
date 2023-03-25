import { SideBarSection } from "../styles/SideBar.styles";

const SideBar = (props) => {
    const pokemons = props?.data2;
    const setCurrentPokemon = props.setCurrentPokemon;

    return (
        <SideBarSection>
            <ol className="pokemonList">
                {pokemons.map((pokemon) => {
                    return (
                        <button
                            onClick={() => {
                                setCurrentPokemon(pokemon);
                            }}
                            key={pokemon.name}
                        >
                            <li className="pokemonName">{pokemon.name.toUpperCase()}</li>
                        </button>
                    );
                })}
            </ol>
        </SideBarSection>
    );
};

export default SideBar;