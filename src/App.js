import React, { Component} from 'react';
import './App.css';

export const App = () => {
  
   class Cadastro  extends Component {
      constructor(props) {
          super(props)
          this.state = {
              email : 'usuario@teste.com',
              password : 'usuario_test_@@',
              logado: false
          }
      }

      onChange(e){
        this.setState({
          [e.target.email] : e.target.value
        })
      }
      chamaLogin = () => {
        this.setState({
          logado: true
        })
      }
   }

    return (
    <div className="wrapper">
      <div className="form-wrapper">
            <br /><br />
            <img source="./images/logo.png"/>
            <form >
                 <div className="email">
                   <label htmlFor="email">E-mail</label><br /><br />
                   <input id="email" type="text" className="" placeholder="E-mail" name="email"/>
                 </div>
                 <div className="password">
                   <label htmlFor="password">Password</label><br /><br />
                   <input id="password" type="password" className="" placeholder="Password" name="password"/>
                 </div><br /><br />
                 <div className="createAccount">

                     <button>NEXT</button>
                    
                 </div>
          </form>
      </div>
    </div>);
}//Adicionei <br /> para não precisar ficar dando margin