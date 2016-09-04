import React from 'react'
import ReactDOM from 'react-dom'

import Modal from '../../node_modules/react-bootstrap/lib/Modal'
import Popover from '../../node_modules/react-bootstrap/lib/Popover'
import Tooltip from '../../node_modules/react-bootstrap/lib/Tooltip'
import OverlayTrigger from '../../node_modules/react-bootstrap/lib/OverlayTrigger'
import Button from '../../node_modules/react-bootstrap/lib/Button'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'

import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Form from '../../node_modules/react-bootstrap/lib/Form'
import Label from '../../node_modules/react-bootstrap/lib/Label'
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl'
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup'

import Lockr from '../../node_modules/lockr/lockr'

class DeleteConfirmation extends React.Component{
  constructor() {
    super()
    this.state={ show: false, recipes: Lockr.get('recipes') }
  }
  handleDeleteRecipe(e) {
    let recipes = this.state.recipes
    console.log(this.props.recIndex)
    recipes.splice(this.props.recIndex, 1)
    console.log(recipes)
    Lockr.set('recipes', recipes)
  }
  render() {
    let close = () => this.setState({ show: false})

    return (
      <div className="text-center modal-container">
        <Button className='btn btn-default action'bsStyle='danger' onClick={() => this.setState({ show: true})}>Delete</Button>
        <Modal show={this.state.show} onHide={close} container={this.parent} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Are you sure you want to delete this recipe?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <div className='closeBox' onClick={close}>
                <Button onClick={this.handleDeleteRecipe.bind(this)}>Delete</Button>
                <Button onClick={close}>Cancel</Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default DeleteConfirmation