import React, { Component } from "react";

const userUrl = "/api/usuarios/lista"


class ContentUser extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    };

    render() {
        if (!this.state.User) {
            return <div className="">CARGANDO!!!</div>;
        }


    return (
        <div>
           
            {this.state.User.map( (usuario) => {
                return (
                <article className="product-wrapper">
                
                <div className="image-container">
                    <img className="style-img" src={ "/img" +  usuario.img } alt="" />
                </div>
                
                <div className="description-container">
                <div>
                <p className="style-title">NOMBRE: { usuario.Nombre }</p>
                <p className="style-title">APELLIDO: { usuario.Apellido } </p>
                <p className="style-title">DIRECCION: { usuario.Direccion }</p>
                <p className="style-title">EDAD: { usuario.Edad } </p>
                <p className="style-title">EMAIL: { usuario.Email }</p>
                
                </div>
                </div>
                </article>

            )
        })
     }
          
            
        </div>
    )
    }
    componentDidMount() {
    this.fetchUser();
      }
    
      async fetchUser() {
        const resultado = await fetch(userUrl);
        const response = await resultado.json();
        const User = response.data;
    
        this.setState({User: User});
      }
};
export default ContentUser;