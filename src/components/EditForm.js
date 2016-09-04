import React from 'react'
import ReactDOM from 'react-dom'

import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Form from '../../node_modules/react-bootstrap/lib/Form'
import Label from '../../node_modules/react-bootstrap/lib/Label'
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl'
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup'

import Button from '../../node_modules/react-bootstrap/lib/Button'

// import local storage ---------------------------------
import Lockr from '../../node_modules/lockr/lockr'

class EditForm extends React.Component {
  constructor() {
    super()
    this.state={recipe: [], recipes: []}
  }
  // setInitialRecipeValues(e) {
  //   this.setState({recipe: this.props.recipe})
  // }
  handleEditName(e) {
    console.log(this.state.recipe[0])
    this.setState({recipe: [e.target.value, this.state.recipe[1], this.state.recipe[2], this.state.recipe[3]]})
    console.log(this.state.recipe[0])
  }
  handleEditIngredients(e) {
    console.log(this.state.recipe[1])
    this.setState({recipe: [this.state.recipe[0], e.target.value, this.state.recipe[2], this.state.recipe[3]]})
    console.log(this.state.recipe[1])
  }
  handleEditInstructions(e) {
    console.log(this.state.recipe[2])
    this.setState({recipe: [this.state.recipe[0], this.state.recipe[1], e.target.value, this.state.recipe[3]]})
    console.log(this.state.recipe[2])
  }
  handleEditCategories(e) {
    console.log(this.state.recipe[3])
    this.setState({recipe: [this.state.recipe[0], this.state.recipe[1], this.state.recipe[2], e.target.value]})
    console.log(this.state.recipe[3])
  }
  handleRecipesChange(e) {
    let recipes = Lockr.get('recipes')
    recipes[this.props.recipes.indexOf(this.props.recipe)] = this.state.recipe
    Lockr.set('recipes', recipes)
  }
  render() {

    return(
      <div>
        <h4>{this.props.recipe[0]}</h4>
        <Form className='recForms'>
          <FormGroup>
            <span>Name</span>
            <FormControl className='edit'onChange={this.handleEditName.bind(this)}value={this.state.recipe[0]}/>
          </FormGroup>
          <FormGroup>
            <Row><Col xs={5}><span>Ingredients separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>,</div></Col></Row>
            <FormControl className='edit'onChange={this.handleEditIngredients.bind(this)}value={this.state.recipe[1]}/>
          </FormGroup>
          <FormGroup>
           <Row><Col xs={5}><span>Instructions separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>|</div></Col></Row>
            <FormControl className='edit' onChange={this.handleEditInstructions.bind(this)}value={this.state.recipe[2]}/>
          </FormGroup>
          <FormGroup>
            <Row><Col xs={5}><span>Categories separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>,</div></Col></Row>
            <FormControl className='edit' onChange={this.handleEditCategories.bind(this)}value={this.state.recipe[3]}/>
          </FormGroup>
          <div>
            <div className='text-center' id='closeEdit' onClick={this.props.close}>
              <Button id='confirm' onClick={this.handleRecipesChange.bind(this)}>Confirm changes</Button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
  componentDidMount() {
    this.setState({recipe: this.props.recipe})
  }
}

export default EditForm