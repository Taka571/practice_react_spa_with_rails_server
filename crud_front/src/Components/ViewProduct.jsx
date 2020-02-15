import React from 'react'
import {Button} from 'react-bootstrap'

class ViewProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateText: '',
    }
  }

  handleDeleate = () => {
    this.props.onDelete(this.props.data.id)
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateText)
  }

  handleInput = (e) => {
    this.setState({updateText: e.target.value})
  }

  render() {
    return(
      <div>
        <span>{this.props.data.name}</span>
        <span>
          <input type="text" value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <Button type="submit" onClick={this.handleUpdate}>更新！</Button>
        </span>
        <span>
          <Button type="submit" className='deleteButton' onClick={this.handleDeleate}>削除</Button>
        </span>
      </div>
    )
  }
}

export default ViewProduct
