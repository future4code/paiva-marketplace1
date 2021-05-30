import styled from "styled-components"

export const FlexR = styled.div`
display: flex;
`

export const CardCarrinho = styled.div`
width: 800px;
box-sizing: border-box;
border-left: thin solid #4D4D81;
display: flex;
flex-direction: column;
padding: 50px;
margin: 20px auto;
max-height: 500px;
overflow-y: auto;
h2{
  color: #000072;
}`

export const MostraCarrinho = styled.div`
  `

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
border-bottom: 1px solid #4D4D81;
padding: 5vh 0;
`

export const FlexColuna = styled.div`
h1{
  font-size: 14px;
  margin-bottom: 10px;
}
button {
  border: none;
  background: none;
  cursor: pointer;
  color: blueviolet;
  :hover {
    color:white;
    text-decoration: underline;
  }
}
`
export const ImgCart = styled.img`
width: 175px;
height: 175px;

margin-right: 25px;
`