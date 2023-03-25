import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 5rem calc(100% - 5rem);
    grid-template-columns: 15% 85%;
`;