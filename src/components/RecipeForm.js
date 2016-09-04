import React from 'react'
import ReactDOM from 'react-dom'

import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Form from '../../node_modules/react-bootstrap/lib/Form'
import Label from '../../node_modules/react-bootstrap/lib/Label'
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl'
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup'


class RecipeForm extends React.Component {
  render() {
    return(
      <div>
        <Form className='recForms'>
          <FormGroup>
            <span>Name</span>
            <FormControl onChange={this.props.handleRecipeName} placeholder='ex...BLT'/>
          </FormGroup>
          <FormGroup>
            <Row><Col xs={5}><span>Ingredients separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>,</div></Col></Row>
            <FormControl onChange={this.props.handleRecipeIngredients}placeholder='ex...Sourdough bread,bacon,butter,butter lettuce,tomato,mayo,salt&pepper'/>
          </FormGroup>
          <FormGroup>
            <Row><Col xs={5}><span>Instructions separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>|</div></Col></Row>
            <FormControl onChange={this.props.handleRecipeInstructions}placeholder='Start bacon in cold pan, turn to med heat|butter bread and toast when bacon is near ready|construct sandwich'/>
          </FormGroup>
          <FormGroup>
            <Row><Col xs={5}><span>Categories separated by a</span></Col><Col className='text-left'xs={1}><div className='syntax'>,</div></Col></Row>
            <FormControl onChange={this.props.handleRecipeCategories}placeholder='BLT,bacon,easy,quick'/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RecipeForm