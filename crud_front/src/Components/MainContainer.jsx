import React from 'react'
import ProductsContainer from './ProductsContainer'
import FormContainer from './FormContainer'
import update from 'react-addons-update'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

componentDidMount() {
    axios.get('http://localhost:3001/products')
    .then((results) => {
      console.log(results)
      this.setState({products: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  createProduct = (name) => {
    axios.post('http://localhost:3001/products',{name: name} )
    .then((response) => {
      const newData = update(this.state.products, {$push:[response.data]})
      this.setState({products: newData})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  deleteProduct = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`)
    .then((response) => {
      const productIndex = this.state.products.findIndex(x => x.id === id)
      const deletedProducts = update(this.state.products, {$splice: [[productIndex, 1]]})
      this.setState({products: deletedProducts})
      console.log('set')
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  updateProduct = (id, name) => {
    axios.patch(`http://localhost:3001/products/${id}`,{name: name})
    .then((response) => {
      const productIndex = this.state.products.findIndex(x => x.id === id)
      const products = update(this.state.products, {[productIndex]: {$set: response.data}})
      this.setState({products: products})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className='app-main'>
        <FormContainer createProduct={this.createProduct}/>
        <ProductsContainer productData={ this.state.products } deleteProduct={ this.deleteProduct} updateProduct={ this.updateProduct}/>
      </div>
    )
  }
}

export default MainContainer
