import React, { PureComponent } from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import ProjectCard from './ProjectCard'
import './Main.css'

const projects =
[
  {
    name: "Flexicon",
    img: "../images/flexicon2.png",
    deployed: "https://gentle-crag-71071.herokuapp.com/login",
    frontendCode: "https://github.com/Bowt13/frontend-RLP",
    backendCode: "https://github.com/Safisyx/backend-RLP"
  },

  {
    name: "Battleship",
    img: "../images/battleship2.png",
    deployed:"",
    frontendCode: "https://github.com/evagolabek/Battleship_Frontend_Backend",
    backendCode: "https://github.com/evagolabek/Battleship_Frontend_Backend"
  },

  {
    name: "Evaluation App",
    img: "../images/evaluationapp2.png",
    deployed:"",
    frontendCode: "https://github.com/evagolabek/student-evaluation-app-FRONTEND",
    backendCode: "https://github.com/evagolabek/student-evaluation-app-BACKEND"
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
            deployed={project.deployed}
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
