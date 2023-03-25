import styled from "styled-components";

export const HeaderStyles = styled.header`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;

    .inputWrapper {
        width: 50%;
    }

    .inputSearch {
        background-repeat: no-repeat;
        background-position: 1rem;
        padding-left: 3rem;
        width: 70%;
        height: 3.5rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: 600;
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        background-color: #f5f5f5;
        opacity: 0.5;
        // margin-left: 20px;
    }
`;