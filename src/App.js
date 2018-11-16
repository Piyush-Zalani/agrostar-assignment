import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
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
    axios.get('http://www.mocky.io/v2/5b3de5ed310000db1f6de257')
      .then((response) => {
        this.setState({ productList: response.data.responseData.productList || [], loading: false })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    let { productList, items, productSearchedList, loading } = this.state;
    if (loading) {
      return (<div>Loading...</div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <soan className="fa fa-user user-profile" />
          <span className="fa fa-refresh refresh" onClick={() => this.getProducts() } />
        </header>
        <div className="container">
          <div className="search">
          <span className="fa fa-search"></span>
          <input placeholder="Search term" onChange={(e) => {
            this.setState({
              productSearchedList: e.target.value ?
                this.state.productList.filter(product => product.productName.match(e.target.value))
                : null
            })}} />
        </div>
          <div className="card-grid" style={{ marginBottom: (items.length > 0 && '115px') || '60px' }}>
            {
              (productSearchedList ? productSearchedList : productList).map((product) => {
                return (
                  <div className="card-wrap" key={product.skuCode}>
                    <div className="card">
                <span className="default-offer">
                  {product.defaultOffer}
                </span>
                      <img src={product.productImages[0].name || "http://placehold.it/500x500"} className="card-img"/>
                      <div>
                        <p style={{ height: '40px' }}>{product.productName}</p>
                        <p><b>Rs. {product.sellingPrice}</b></p>
                      </div>
                      {!items.filter(item => Object.keys(item)[0] === product.skuCode).length &&
                      <button
                        className="payment-button"
                        onClick={() => {
                          const { items } = this.state;
                          items.push({ [product.skuCode]: product.sellingPrice });
                          this.setState({ items }, () => {
                            localStorage.setItem('items', JSON.stringify(this.state.items));
                          })
                        }}>
                        Add
                      </button>
                      ||
                      <div className="input-group">
                    <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-number button-color"
                          onClick={() => {
                            const {items} = this.state;
                            const newItems = items.findIndex(item => Object.keys(item)[0] === product.skuCode);
                            items.splice(newItems, 1);
                            this.setState({ items }, () => {
                              localStorage.setItem('items', JSON.stringify(this.state.items));
                            });
                          }}
                        >
                          <span className="glyphicon glyphicon-minus"/>
                        </button>
                    </span>
                        <input
                          type="text"
                          className="form-control input-number"
                          value={items.filter(item => Object.keys(item)[0] === product.skuCode).length}
                          style={{textAlign: 'center'}}
                        />
                        <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-number button-color"
                          onClick={() => {
                            const { items } = this.state;
                            items.push({ [product.skuCode]: product.sellingPrice });
                            this.setState({ items }, () => {
                              localStorage.setItem('items', JSON.stringify(this.state.items));
                            })
                          }}
                        >
                            <span className="glyphicon glyphicon-plus"/>
                        </button>
                    </span>
                      </div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {items.length > 0 &&
        <div className="bag-notification">
          <span>
            {items.length} items
            |
            Rs. {items.map(item => Number(Object.values(item))).reduce((a, b) => a + b, 0)}
          </span>
          <span style={{float: 'right'}}>
            View Bag >
          </span>
        </div>
        }

        <footer className="App-footer">
          <button className="products">
            <i></i>
            <span>Products</span>
          </button>
          <button className="my-orders">
            <i></i>
            <span>My Orders</span>
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
