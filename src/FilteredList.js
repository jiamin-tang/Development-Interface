import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayList from './DisplayList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
import './App.css';



class FilteredList extends React.Component {

  // create dynamically-changing states to keep track of the selected method of filtering/sorting
  
  constructor() {
    super();
    this.state = {
      category: "All",
      color: "All",
      sortby: "Select"
    };
  }

  // set the state to the selected category/color/sort method

  onSelectFilterCategory = event=> {
    this.setState({category: event})
  }

  onSelectFilterColor = event=> {
    this.setState({color: event})
  }

  onSelectSort = event=> {
    this.setState({sortby: event})
  }
  
  // create a multi-filtering condition to display the corresponding items 

  matchesFilter = item => {
    if(this.state.category === "All" && this.state.color === "All") {
        return true
    }
    else if (this.state.category === item.category && this.state.color === "All") {
        return true
    }
    else if (this.state.category === "All" && this.state.color === item.color) {
        return true
    }
    else if (this.state.category === item.category && this.state.color === item.color) {
        return true
    }
    else {
        return false
    }
  }

  // create a multi-soring condition to display the corresponding items 

  
  sortProducts = (item1, item2) => {

    if(this.state.sortby === "Select") {
        return 0
    }
    else if (this.state.sortby === "Lowest to Highest") {
        if (item1.price > item2.price) {
            return 1
        }

        if (item1.price <= item2.price) {
            return -1
        }
    }
    else if (this.state.sortby === "Highest to Lowest") {
        if (item1.price > item2.price) {
            return -1
        }

        if (item1.price <= item2.price) {
            return 1
        }
    }
  }

  

  
  // pass OnSelectFilter/Sort functions to the onSelect event handler of HTML buttons as eventKey
  // matchesFilter/Sort functions are called inside the built-in filter() and sort() function
  // the list is displayed under the buttons after filtering and sorting

  render () {

    const displayCounter = this.state.counter > 0;

      return (
        <div>
          <Container>
            <Navbar>
              Category
              <Nav className="mr-auto">
                <Nav.Item><Nav.Link eventKey="All" active onSelect={this.onSelectFilterCategory}>All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Sofa" onSelect={this.onSelectFilterCategory}>Sofa</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Bed" onSelect={this.onSelectFilterCategory}>Bed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Table" onSelect={this.onSelectFilterCategory}>Table</Nav.Link></Nav.Item>
            </Nav>
            </Navbar>

            <Navbar>
              Color
              <Nav className="mr-auto">
                <Nav.Item><Nav.Link eventKey="All" active onSelect={this.onSelectFilterColor}>All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="White" onSelect={this.onSelectFilterColor}>White</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Black" onSelect={this.onSelectFilterColor}>Black</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Beige" onSelect={this.onSelectFilterColor}>Beige</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Blue" onSelect={this.onSelectFilterColor}>Blue</Nav.Link></Nav.Item>
              </Nav>
            </Navbar>


            <Navbar>
                Sort by Price
                <DropdownButton title="Select">
                    <Dropdown.Item eventKey="Select" active onSelect={this.onSelectSort}>Select</Dropdown.Item>
                    <Dropdown.Item eventKey="Highest to Lowest" onSelect={this.onSelectSort}>Highest to Lowest</Dropdown.Item>
                    <Dropdown.Item eventKey="Lowest to Highest" onSelect={this.onSelectSort}>Lowest to Highest</Dropdown.Item>
                </DropdownButton>
            </Navbar>

          </Container>
          

          <DisplayList list={this.props.list.filter(this.matchesFilter).sort(this.sortProducts)}/>

        </div>
      )
    

  }
}

export default FilteredList;