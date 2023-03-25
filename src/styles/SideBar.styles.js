import styled from "styled-components";

export const SideBarSection = styled.section`
    padding-top: 1rem;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    .pokemonList {
        grid-gap: 5px;
        list-style-position: outside;
        list-style: none;
        margin: 0;
        height: 100%;
        overflow-y: scroll;
    }

    ol {
        margin: 0;
        padding: 0;
    }

    .pokemonName {
        font-size: 1rem;
        width: 9rem;
    }
`;