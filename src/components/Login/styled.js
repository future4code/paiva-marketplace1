import styled from "styled-components"

export const Card = styled.div`
width: 50%;
height: 100%;
font-family: "Roboto", sans-serif;
display: flex;
flex-direction: column;
padding: 10px;
margin: 50px auto;
align-items: center;
color:#000072;

h2 {
    :first-child{
        text-align: center;
        margin-bottom: 50px;
    }
}
p{
    margin-top: 20px;;
}
input {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 5px;
}

.container {
    width: 90%;

    .categoria {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px 0;
    }
}
.botao-enviar {
    margin-top: 60px;
    width: 100%;
    align-items: center;
    padding: 10px;
    font-weight: 700;
    button {
        margin: 0 auto;
        width: 30%;
    }
}
`