import React from 'react'
import ReactDOM from 'react-dom'

import Modal from '../../node_modules/react-bootstrap/lib/Modal'
import Popover from '../../node_modules/react-bootstrap/lib/Popover'
import Tooltip from '../../node_modules/react-bootstrap/lib/Tooltip'
import OverlayTrigger from '../../node_modules/react-bootstrap/lib/OverlayTrigger'
import Button from '../../node_modules/react-bootstrap/lib/Button'

import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Form from '../../node_modules/react-bootstrap/lib/Form'
import Label from '../../node_modules/react-bootstrap/lib/Label'
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl'
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup'

import RecipeForm from './RecipeForm'


var NewRecipePopup = React.createClass({
  getInitialState() {
    return { show: false }
  },
  render() {
    let close = () => this.setState({ show: false})

    return (
      <div id='modal'>
        <div className="text-left modal-container">
          <Button className='success'bsStyle="success" bsSize="large" onClick={() => this.setState({ show: true})}>
            Add a new recipe
          </Button>
          <Modal show={this.state.show} onHide={close} container={this.parent} aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                New Recipe
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RecipeForm recipe={this.props.recipe} recipes={this.props.recipes} handleAddRecipe={this.props.handleAddRecipe} handleRecipeName={this.props.handleRecipeName} handleRecipeIngredients={this.props.handleRecipeIngredients} handleRecipeInstructions={this.props.handleRecipeInstructions} handleRecipeCategories={this.props.handleRecipeCategories}/>
            </Modal.Body>
            <Modal.Footer>
              <div onMouseUp={this.props.refresh}>
                <div className='closeBox' onClick={close}>
                  <Button onClick={this.props.handleAddRecipe}>Add</Button>
                  <Button onClick={close}>Cancel</Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
})

export default NewRecipePopup