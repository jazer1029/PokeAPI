import { HeaderStyles } from "../styles/Header.styles";
import { useState } from "react";
const Header = ({ getSearchBarValue, totalOfPokemons }) => {
    // const [searchBarValue, setSearchBarValue] = useState(null);

    const handleOnInput = (e) => {
        // setSearchBarValue(e.target.value);
        getSearchBarValue(e.target.value);
    };

    return (
        <HeaderStyles>
            <div className="inputWrapper">
                <input className="inputSearch" type="search" placeholder="Search for Pokemons" onInput={handleOnInput} />
            </div>
            <span className="occurrences">Total of Pokemons: {totalOfPokemons}</span>
        </HeaderStyles>
    );
};

export default Header;