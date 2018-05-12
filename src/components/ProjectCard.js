import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle, CardText } from 'material-ui'
import './ProjectCard.css'



export class ProjectCard extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    backendCode: PropTypes.string.isRequired,
    frontendCode: PropTypes.number.isRequired,
  }

  render() {

    return(
      <Card className = 'project-card'>
        <CardMedia className = 'card-image'>
          <img src={this.props.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.name}/>
        <CardText>
          {this.props.frontendCode}
          <br/>
          <br/>
          {this.props.backendCode}
        </CardText>
      </Card>
    )
  }
}


export default (ProjectCard)
