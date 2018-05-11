import React, { PureComponent } from 'react'
import ProjectCard from './ProjectCard'

const projects =
[
  {
    name: "Flexicon",
    link: "",
    backendCode: "",
    frontendCode: ""
  },

  {
    name: "Battleship",
    link: "",
    backendCode: "",
    frontendCode: ""
  },
]




class Main extends PureComponent {

  render() {

    return(
      <div className = 'fruit-list'>
        { projects && projects.map(project =>
          <ProjectCard
            name={project.name}
            link={project.link}
            backendCode={project.backendCode}
            frontendCode={project.backendCode}
          />
        )
        }
      </div>
    )
  }
}





export default (Main)
