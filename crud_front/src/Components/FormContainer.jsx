import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  onChangetext(e) {
    this.setState({name: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createProduct(this.state.name)
    this.setState({name:''})
  }

  render(){
    return(
      <div>
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter text"
            onChange={ e => this.onChangetext(e)}
          />
        </FormGroup>
      </form>
      <Button type="submit" onClick={this.hundleSubmit}>つぶやく</Button>
      </div>
    )
  }
}

export default FormContainer
