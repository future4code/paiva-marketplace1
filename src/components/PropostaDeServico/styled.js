import styled from "styled-components";

export const CardServico = styled.div`
  width: 50%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 50px auto;
  align-items: center;
  color: #000072;

  h2 {
    :first-child {
      text-align: center;
      margin-bottom: 10px;
    }
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

    .descricao {
      textarea {
        height: 100px;
        width: 100%;
        border: solid 1px #585858;
      }
    }
    .prazo {
      input[type="date"] {
        color: #585858;
      }
    }

    .pagamento {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .card-pagamentos {
        input {
          width: 1rem;
        }
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
  button {
    width: 100%;
    align-items: center;
    padding: 10px;
    color: white;
    font-weight: 700;
    margin: 0 auto;
  }
`;
