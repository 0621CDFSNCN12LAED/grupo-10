import React, { Component } from "react";

const prodcutUrl = "/api/productos/lista"


class ContentPoduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    };

    render() {
        if (!this.state.Product) {
            return <div className="">CARGANDO!!!</div>;
        }

    
    return (
        <div>
           
            {this.state.Product.map( (productoIndividual) => {
                
                return (
                <article className="product-wrapper">
                <a href="/productos/detalle/  productoIndividual.id">
                <div className="image-container">
                    <img className="style-img" src={ productoIndividual.img } alt="" />
                </div>
                </a>
                <div className="description-container">
                <div>
                <p className="style-title">CATEGORIA: { productoIndividual.categorias }</p>
                <p className="style-title">NOMBRE: { productoIndividual.nombre } </p>
                <p className="style-description">DESCRIPCION: { productoIndividual.descripcion} </p>
                <p className="style-price">PRECIO: { productoIndividual.precio} </p>
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
    this.fetchProduct();
      }
    
      async fetchProduct() {
        const resultado = await fetch(prodcutUrl);
        const response = await resultado.json();
        const Product = response.data;
    
        this.setState({Product: Product});
      }
};
export default ContentPoduct;