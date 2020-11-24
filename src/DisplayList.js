import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ButtonGroup, Button} from 'react-bootstrap';



class DisplayList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }

  // update the quantity of the items and the total price

  handleIncrement = (item) => {
    let newCart = this.state.cart;
    let newTotal = this.state.total;

    newCart[newCart.indexOf(item)].quantity += 1;
    newTotal += item.price;

    this.setState({cart: newCart, total: newTotal});
  };

  handleDecrement = (item) => {
    let newCart = this.state.cart
    let newTotal = this.state.total;

    if (newCart[newCart.indexOf(item)].quantity == 1) {
      newCart.filter (x => x.name != item.name);
      this.setState({cart: newCart, total: newTotal});
    }
    else {
      newCart[newCart.indexOf(item)].quantity -= 1;
      newTotal -= item.price;
      this.setState({cart: newCart, total: newTotal});
    }
  };

  // append the item to the cart list when first selected


  addToCart = (item) => {
    this.setState(({cart, total}) => {
      if (!cart.includes(item)) {
        return {cart: [...cart, item], total: total+item.price};
    }});
  }

  // filter the item which needs to be removed

  removeFromCart = (item) => {
    let newCart = this.state.cart;
    let newTotal = this.state.total;

    newTotal -= item.price * item.quantity
    newCart[newCart.indexOf(item)].quantity = 1;

    this.setState({cart: newCart.filter(x => x.name != item.name), total: newTotal});
  }

  // call the functions within onClick

  render() {
  
    return (
      <Container>
        <Row>
          <Col lg="8">  
              <Row>
                  {this.props.list.map(item =>
                    <Card>
                      <img src={item.src} className="card-image" alt="product" />
                      <h1 className="card-title">{item.name}</h1>
                      <h1 className="price"><span>$ {item.price}</span></h1>
                      <h1 className="card-item"><span>📂 {item.category}</span></h1>
                      <h1 className="card-item"><span>🎨 {item.color}</span></h1>
                      <Button onClick={() => this.addToCart(item)}>Add to Cart</Button>
                  
                    </Card>)}
              </Row>
          </Col>

          {/* shopping cart session */}

          <Col lg="4">
            <Card>
              <h1 className="card-title">Shopping Cart</h1>
              <h1 className="card-title">Total: $<span> {this.state.total}</span></h1>
              {this.state.cart.map(item =>
                    <Card>
                      <img src={item.src} className="card-image" alt="product" />
                      <h1 className="card-title">{item.name}</h1>
                      <h1 className="price"><span>$ {item.price}</span></h1>
                      <h1 className="card-item"><span>📂 {item.category}</span></h1>
                      <h1 className="card-item"><span>🎨 {item.color}</span></h1>
                      <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button onClick={() => this.handleDecrement(item)}>-</Button>
                        <Button disabled>{item.quantity}</Button>
                        <Button onClick={() => this.handleIncrement(item)}>+</Button>
                      </ButtonGroup>

                      <Button onClick={() => this.removeFromCart(item)}>Remove</Button>

                    </Card>)}
            </Card>
          </Col>
            
        </Row>
      </Container>
                     
    )
  }

}

export default DisplayList;