import styled from "styled-components";

/* Color Theme Swatches in Hex */
// .Crevasse-1-hex { color: #B4BEC9; }
// .Crevasse-2-hex { color: #159A9C; }
// .Crevasse-3-hex { color: #002333; }
// .Crevasse-4-hex { color: #DEEFE7; }
// .Crevasse-5-hex { color: #FFFFFF; }

// /* Color Theme Swatches in RGBA */


export const Form = styled.div`

    display: flex;
    flex-direction: column;
    color:var(--white-background);
    background-color:var(--green-blue-background);

    width: 14em;
    max-width: 30vw;
    height: 30vh;
    padding: 20px;
    gap: 10px;

    text-align: center;
    font-weight: 700;

    border-radius: 15px;
    box-shadow: 4px 4px 10px var(--green-blue-shadow);

@media only screen and (max-width: 600px) {
    width: 300px;
    max-width: 300px;
}
`;

export const Container = styled.main`
    background-color: var(--green-light-background);

    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
