import React from 'react'
import ReactDOM from 'react-dom'


import Button from '../../node_modules/react-bootstrap/lib/Button'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'
import PageHeader from '../../node_modules/react-bootstrap/lib/PageHeader'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'


const Logo = React.createClass({
	render() {
		return(
			<div id='Logo'>
				<div id='outerAnchor'></div>
				<PageHeader id='mainHeader'>
					Recipe Box
					<br/>
					<small>A way to store those great recipes you'd otherwise forget</small>
				</PageHeader>
			</div>
		)
	}
})


export default Logo