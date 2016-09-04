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

import RecipeForm from './RecipeForm'
import EditForm from './EditForm'

// Local storage ---------------------------------------
import Lockr from '../../node_modules/lockr/lockr'


var EditPopup = React.createClass({
  getInitialState() {
    return { show: false, recipes: Lockr.get('recipes')}
  },
  render() {
    let close = () => this.setState({ show: false})

    return (
      <div className="text-center modal-container">
        <Button className='btn btn-default action'bsStyle='info' onClick={() => this.setState({ show: true})}>Edit</Button>
        <Modal show={this.state.show} onHide={close} container={this.parent} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Edit Recipe
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm close={close} recipes={this.state.recipes} recipe={this.state.recipes[this.props.recIndex]} nameValue={this.state.recipes[this.props.recIndex][0]} ingredientsValue={this.state.recipes[this.props.recIndex][1]} instructionsValue={this.state.recipes[this.props.recIndex][2]} CategoriesValue={this.state.recipes[this.props.recIndex][3]}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

export default EditPopup