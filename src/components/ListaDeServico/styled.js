import styled from 'styled-components'


// Component Produto
export const ContainerProduto = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`

export const HeaderProduto = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin: 10px 20px 30px 20px;
`

export const ContainerCardProduto = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  width: 100%;
  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`

// Component ProdutosCard
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 2px #DCDCDC;
    width: 200px;
    justify-content: center;
    padding: 10px;
    margin: 10px 20px;
    @media(max-width: 600px){
    justify-self: center;
  }
    :hover {
        background-color: #F7F7F7
    }
    
    p {
        margin: 6px;
    }
`

export const FotoProduto = styled.img`
    width: 100%;
    justify-self: center;
    background-color: white;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
        display: flex;
        border: none;
        background-color: #4136CC;
        padding: 10px 5px;
        border-radius: 10px;
        color: #FFFF;
        justify-content: center;
        :hover{
            background-color: #3D31B5;
        }
    }
    img {
        width: 14px;
        color: white;
        margin-right: 5px;
    }
`