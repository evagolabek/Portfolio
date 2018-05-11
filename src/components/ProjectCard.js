import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle} from 'material-ui'



export class ProjectCard extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    backendCode: PropTypes.string.isRequired,
    frontendCode: PropTypes.number.isRequired,
  }

  render() {

    return(
      <Card className = 'project-card'>
        <CardMedia>
          <link src={this.props.link} alt="" />
        </CardMedia>
        <CardTitle title={this.props.name} subtitle={this.props.origin} />
      </Card>
    )
  }
}


export default (ProjectCard)
