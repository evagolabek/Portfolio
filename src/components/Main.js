import React, { PureComponent } from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import ProjectCard from './ProjectCard'
import './Main.css'

const projects =
[
  {
    name: "Flexicon",
    img: "../images/flexicon.png",
    backendCode: "backendCode",
    frontendCode: "frontendCode"
  },

  {
    name: "Battleship",
    img: "../images/battleship.png",
    backendCode: "backendCode",
    frontendCode: "frontendCode"
  },
  {
    name: "Evaluation App",
    // img: "../images/evaluationapp.png",
    backendCode: "backendCode",
    frontendCode: "frontendCode"
  },
]




class Main extends PureComponent {

  render() {

    return(
      <div className = 'project-list'>
        { projects && projects.map(project =>
          <ProjectCard
            name={project.name}
            img={project.img}
            backendCode={project.backendCode}
            frontendCode={project.frontendCode}
          />
        )
        }
      </div>
    )
  }
}





export default (Main)
