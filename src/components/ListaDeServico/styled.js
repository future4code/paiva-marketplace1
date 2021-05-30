import styled from 'styled-components'


//Estilização Produto
export const ContainerTotal = styled.div`
  display: flex;

  button{
    margin-top:5px;
  }
`

export const Filtro = styled.div`
  display: flex;
  min-width: 260px;
  border-right: 2px solid #4D4D81;
  color: #000072;

  justify-content: center;
  input {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 5px;
    &:focus {
  border-color: #cccccc;
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
      }
    }

  h3{margin-bottom: 2vh;}
  h5{ margin-top: 2vh;}
  div{margin-top: 10px;}
  select{border: 1px solid #B7B7C3; cursor: pointer;}
`



// Component Produto
export const ContainerProduto = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    margin: 0 auto;
`

export const HeaderProduto = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin: 10px 20px 30px 20px;
`

export const ContainerCardProduto = styled.div`
color: #000072;
  display: flex;
  margin: 0 10vw;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

// Component Produtos
export const CardContainer = styled.div`

  background-color: #F7F7F7;
  color: #000072;
  border-radius:5px;
    
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 2px #DCDCDC;
    width: 220px;
    min-height: 400px;
    justify-content: space-between;
    padding: 10px;
    margin: 10px 20px;
    :hover {
        background-color: rgb(242,	197,	167, 0.8);
       
    }
    
    p {
        margin: 6px;
    }
`

export const FotoProduto = styled.img`
    width: 100%;
    height: 100%;
    justify-self: center;
    background-color: white;
    border: 1px solid #4D4D81;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    button{
      width:100%;
    }
    img {
        width: 100%;
        color: white;
        margin-right: 5px;
    }
`
