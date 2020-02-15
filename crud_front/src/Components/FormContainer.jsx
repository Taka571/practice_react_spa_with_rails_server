import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: ''
    }
  }

  onChangetext(e) {
    this.setState({product: e.target.value})
  }

  render(){
    return(
      <div>
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.products}
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
