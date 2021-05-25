import React, { Component } from "react";
import "./Body.css";
export class Body extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="container1">
            <div className="containerFrase">
              <h1 className='frase'>
                Junte-se ao maior marketplace de trabalho do mundo
              </h1>

              <p className='subFrase'>Encontre grandes
              talentos. Construa seu negócio.
              <br />
                Leve sua carreira para o próximo
                nível.
              </p>

              <div className='containerButton'>
                <div class="box-1">
                  <div class="btn btn-one">
                    <span>Encontre Talento</span>
                  </div>
                </div>

                <div class="box-1">
                  <div class="btn btn-one">
                    <span>Encontre Trabalho</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="containerImage"></div>
            <img src='./ninja.png' />
          </div>
        </main>

        <footer className='containerFooter'>
          <p>Redes Sociais </p>
          <a href='https://github.com/'>GitHub</a>
          <a href='https://instagram.com/'>Instagram</a>
          <a href='https://twitter.com/'>Twitter</a>
          <a href='https://youtube.com/'>Youtube</a>
        </footer>

      </div >

    );
  }
}
