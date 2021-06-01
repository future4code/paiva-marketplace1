import styled from "styled-components"

export const CardCarrinho = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 50px;
margin: 20px auto;
overflow-y: auto;
border: 1px solid #ccc;
color: #000072;

img {
    width: 100px;
    height: 100px;
}
.carrinho-area{
    border-bottom: 1px solid black;
}

.button {
    display: flex;
    justify-content: flex-end;
    
}
`
export const PrecoTotal = styled.div`
margin-top: 50px;
display: flex;
justify-content: flex-end;
flex-direction: column;

.valor-total {
display: flex;
justify-content: flex-end;
flex-direction: column;
align-items: flex-end;
}
`
export const DisplayFlex = styled.div`
display: flex;

`
export const FlexRow = styled.div`
display: flex;
height:150px;
width: 100%;
justify-content: space-around;
border-bottom: 1px solid black;
align-items: center;

button {
  border: none;
  background: none;
  cursor: pointer;
  color: blueviolet;
  :hover {
    h4{
        color: white;
        text-decoration: underline;
    }
  }
}
.area-produto {
    line-height: 1.5;
    width: 40vw;
}

.quantidade-produto {
    border: 1px solid black;
    display: flex;
    align-items: center;

span {
    padding: 3px;
    :hover {
        cursor: pointer;
        background-color: #ccc;
    }
}
div {
    padding: 3px;
}
}

.valor-produto {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
}
`