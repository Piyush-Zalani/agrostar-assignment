import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Footer from '../Footer';
import BagItems from '../BagItems';
import AddToCart from '../AddToCart';
import { API_URL } from '../../constants';
import { CardWrap, Card, CardGrid, Container, DefaultOffer, StyledImage } from './style';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      totalAmount: localStorage.getItem('totalAmount') || 0,
      items: JSON.parse(localStorage.getItem('items')) || []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    this.setState({ loading: true });
    axios.get(`${API_URL}5b3de5ed310000db1f6de257`)
      .then((response) => {
        this.setState({ productList: response.data.responseData.productList || [], loading: false })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onSearchChange = (e) => {
    this.setState({
      productSearchedList: e.target.value ?
        this.state.productList.filter(product => product.productName.match(e.target.value))
        : null
    })
  };
  onIncrement = (product) => {
    const { items } = this.state;
    items.push({ [product.skuCode]: product.sellingPrice });
    this.setState({ items }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    })
  };
  onDecrement = (product) => {
    const {items} = this.state;
    const newItems = items.findIndex(item => Object.keys(item)[0] === product.skuCode);
    items.splice(newItems, 1);
    this.setState({ items }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    });
  };
  addToCart = (product) => {
    const { items } = this.state;
    items.push({ [product.skuCode]: product.sellingPrice });
    this.setState({ items }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    })
  };
  render() {
    let { productList, items, productSearchedList, loading } = this.state;
    if (loading) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <Header getProducts={this.getProducts}/>
        <Container>
          <SearchBar onSearchChange={this.onSearchChange}/>
          <CardGrid items={items}>
            {
              (productSearchedList ? productSearchedList : productList).map((product) => {
                return (
                  <CardWrap key={product.skuCode}>
                    <Card>
                      <DefaultOffer>
                        {product.defaultOffer}
                      </DefaultOffer>
                      <StyledImage src={product.productImages[0].name || "http://placehold.it/500x500"} className="card-img"/>
                      <div>
                        <p style={{ height: '40px' }}>{product.productName}</p>
                        <p><b>Rs. {product.sellingPrice}</b></p>
                      </div>
                      <AddToCart
                        items={items}
                        product={product}
                        onIncrement={() => this.onIncrement(product)}
                        onDecrement={() => this.onDecrement(product)}
                        addToCart={() => this.addToCart(product)}
                      />
                    </Card>
                  </CardWrap>
                )
              })
            }
          </CardGrid>
        </Container>
        {items.length > 0 && <BagItems items={items} />}
        <Footer />
      </div>
    );
  }
}

export default Index;
