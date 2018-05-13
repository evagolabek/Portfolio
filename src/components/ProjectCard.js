import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle, CardActions, FlatButton } from 'material-ui'
import './ProjectCard.css'
import renderHTML from 'react-render-html'


export class ProjectCard extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    deployed: PropTypes.string,
    backendCode: PropTypes.string.isRequired,
    frontendCode: PropTypes.number.isRequired,
  }

  render() {
    console.log(this.props.deployed === "");

    return(
      <Card className = 'project-card'>
        <CardMedia className = 'card-image'>
          <img src={this.props.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.name} subtitle={renderHTML(`<a href=${this.props.deployed}>deployed</a>`)}/>
        <CardActions>
          <a href={this.props.frontendCode}>
            <FlatButton label= "Front-end code"/>
          </a>
          <a href={this.props.backendCode}>
            <FlatButton label= "Back-end code"/>
          </a>

        </CardActions>
      </Card>
    )
  }
}

export default (ProjectCard)
