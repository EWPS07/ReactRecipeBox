import React from 'react'
import ReactDOM from 'react-dom'

// React-bootstrap imports ------------------------------------------
import Accordion from '../../node_modules/react-bootstrap/lib/Accordion'
import PanelGroup from '../../node_modules/react-bootstrap/lib/PanelGroup'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import ButtonGroup from '../../node_modules/react-bootstrap/lib/ButtonGroup'
import Button from '../../node_modules/react-bootstrap/lib/Button'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'
import PageHeader from '../../node_modules/react-bootstrap/lib/PageHeader'

// Local storage ---------------------------------------
import Lockr from '../../node_modules/lockr/lockr'

// Application components imports ----------------------
import NewRecipePopup from './NewRecipePopup'
import EditPopup from './EditPopup'
import DeleteConfirmation from './DeleteConfirmation'
import Logo from './Logo'



class RecipeBox extends React.Component {
  constructor() {
    super()
    if(Lockr.get('recipes') !== undefined) {
      this.state={recipe: [], recipes: Lockr.get('recipes')}
    }
    else {
   	  Lockr.set('recipes', [])	
      this.state={recipe: [], recipes: Lockr.get('recipes')}
    }
  }
  // create new recipe methods ------------------------------
  // recipe name ----------------
  handleRecipeName(e) {
    console.log(this.state.recipe)
    this.setState({recipe: [e.target.value, this.state.recipe[1], this.state.recipe[2], this.state.recipe[3]]})
    console.log(this.state.recipe)
  }
  // recipe ingredients ----------
  handleRecipeIngredients(e) {
    console.log(this.state.recipe)
    this.setState({recipe: [this.state.recipe[0], e.target.value, this.state.recipe[2], this.state.recipe[3]]})
    console.log(this.state.recipe)
  }
  // recipe instructions ---------
  handleRecipeInstructions(e) {
    console.log(this.state.recipe)
    this.setState({recipe: [this.state.recipe[0], this.state.recipe[1], e.target.value, this.state.recipe[3]]})
    console.log(this.state.recipe)
  }
  // recipe Categories -----------------
  handleRecipeCategories(e) {
    console.log(this.state.recipe)
    this.setState({recipe: [this.state.recipe[0], this.state.recipe[1], this.state.recipe[2], e.target.value]})
    console.log(this.state.recipe)
  }
  // add new recipes to list of recipes --------------------------
  handleAddRecipe(e) {
    console.log(this.state.recipes)
    this.state.recipes.push(this.state.recipe)
    console.log(this.state.recipes)
    // let storageKey = this.state.recipe[0]
    // Lockr.set(storageKey, this.state.recipe[0])
    Lockr.set('recipes', this.state.recipes)
  } 
  // delete a recipe ---------------------------------------------
  handleDeleteRecipe(e) {
    console.log(this.state.recipes)
  }
  handleRefresh(e) {
    this.setState({recipes: Lockr.get('recipes')})
  }
  render() {
    return(
      <div onMouseMove={this.handleRefresh.bind(this)}id='MainHousing'>
        <Logo/>
        <NewRecipePopup refresh={this.handleRefresh.bind(this)}recipe={this.state.recipe} recipes={this.state.recipes} handleAddRecipe={this.handleAddRecipe.bind(this)} handleRecipeName={this.handleRecipeName.bind(this)} handleRecipeIngredients={this.handleRecipeIngredients.bind(this)} handleRecipeInstructions={this.handleRecipeInstructions.bind(this)} handleRecipeCategories={this.handleRecipeCategories.bind(this)}/>
        <Accordion id='recipeList'>
          {
            this.state.recipes.map(function(recipe, index) {
              const title = (<h3 className='recTitle'>{recipe[0]}</h3>)
              return (
                <Panel className='recipeList'header={title} key={index} eventKey={index}>
                  <Row>
                    <Col className='text-center' xs={6}>
                      <h2>Ingredients</h2>
                    </Col>
                    <Col className='text-center' xs={6}>
                      <h2>Instructions</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='text-center' xs={5} xsOffset={1}>
                      <ul className='display'>
                        {
                          recipe[1].split(',').map(function(ingredient, index) {
                            return(
                                <li className='text-left'key={index}>{ingredient}</li>
                              )
                          })
                        }
                      </ul>
                      </Col>
                    <Col className='text-center' xsOffset={1} xs={5} >
                      <ul className='display'>
                        {
                          recipe[2].split('|').map(function(instruction, index) {
                            return(
                                <li className='text-left'key={index}>{instruction}</li>
                              )
                          })
                        }
                      </ul>
                    </Col>
                  </Row>
                  <Row className='text-center'>
                    <ButtonGroup>
                      <div>
                        <Col xs={6}>
                          <EditPopup className='btn btn-default' recIndex={index}/>
                        </Col>
                      </div>
                      <div>
                        <Col xs={6}>
                          <DeleteConfirmation className='btn btn-default' recIndex={index}/>
                        </Col>
                      </div>
                    </ButtonGroup>
                  </Row>
                </Panel>
                )
            })
          }
        </Accordion>
      </div>
      )
  }
  componentDidMount() {
    this.setState({recipes: Lockr.get('recipes')})
  }
}



export default RecipeBox