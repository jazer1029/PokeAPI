import styled from "styled-components";

export const BodySection = styled.section`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: grid;
    grid-template-column: 100%;
    grid-template-rows: 35% 35% 30%;

    .pokeInfo {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 100%;
        h2 {
            font-size: 0.9rem;
        }
    }

    .abilities,
    .forms,
    .heldItems,
    .moves,
    .types,
    .sprite {
        text-align: center;
        font-size: 0.8rem;
        grid-rows: 1 / 2;
        margin: 0 3px;
        border-radius: 8px;
        border: 2px hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .movesList {
        height: calc(100% - 4rem);
        overflow-y: auto;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .spriteContainer {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .spriteImgContainer {
        width: 5rem;
        height: 5rem;
        text-align: center;
        border: 2px;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .spriteImg {
        width: 5rem;
    }

     .spriteImgContainer:hover {background-color: rgb(98, 99, 141)}

    .spriteImgContainer:active {
      background-color: rgb(98, 99, 141);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(4px);
    }

    .spriteName {
        margin-bottom: 0;
        margin-top: 0;
        font-size: 25px;
    }

    .spritesCarousel {
        grid-column: 1 / 2;
        grid-rows: 3 / 4;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .spriteImgCar {
        width: 6rem;
        border: 2px;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;