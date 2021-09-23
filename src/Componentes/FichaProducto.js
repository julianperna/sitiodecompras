import React from 'react';
import {CardImg,Modal,ModalHeader,ModalBody,ModalFooter,Container,Button} from 'reactstrap'
import {listaCarrito} from '../listaCarrito.json'
class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock
    };
    this.toggle = this.toggle.bind(this);
    this.agregarCarrito=this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  agregarCarrito() {
    listaCarrito.push({
      "titulo": this.props.props.titulo,
      "precio": this.props.props.precio
      
    });
   this.setState(prevState => ({
     modal: !prevState.modal,
   }));
   
   if (this.state.stock != 0){
   this.setState((prevState) => ({
     stock: prevState.stock -1
   }));
   } else{
     alert("STOCK AGOTADO")
   }
   const badge= document.getElementById("Badge1");
   badge.innerText=listaCarrito.length;
  }
  render() {
    return (
      <Container>
        <Button color="info" onClick={this.toggle}>
          Ver Ficha
        </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>El detalle del producto seleccionado es el siguiente: </p>
            {this.props.props.descripcion}
            <p>
              Este producto tiene un valor de <b>{this.props.props.precio}</b>{" "}
              pesos.
            </p>
            <p>
              Hay <b>{this.state.stock}</b> unidades de este producto
              disponibles.
            </p>
          </ModalBody>
          <ModalFooter className="modalcenter">
            <Button color="primary" onClick={this.agregarCarrito}>
              Agregar al carrito
            </Button>
            <Button color="info" onClick={this.toggle}>
              Volver atrás
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;