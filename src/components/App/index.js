import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import get from 'lodash/get';
import * as productActions from '../../actions/productsAction';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Footer from '../Footer';
import BagItems from '../BagItems';
import AddToCart from '../AddToCart';
import { CardWrap, Card, CardGrid, Container, DefaultOffer, StyledImage } from './style';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      totalAmount: localStorage.getItem('totalAmount') || 0,
      items: JSON.parse(localStorage.getItem('items')) || []
    };
  }
  componentWillMount() {
    this.getProducts()
  }
  getProducts() {
    this.props.productActions.fetchProducts().then((product) => {
      this.setState({ productList: get(product, 'products.data.responseData.productList', []) })
    });
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

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
