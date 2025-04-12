import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'automation' ?
            <ToggleButton active value="automation" onClick={() => setToggle('automation')}>AUTOMATION</ToggleButton>
            :
            <ToggleButton value="automation" onClick={() => setToggle('automation')}>AUTOMATION</ToggleButton>
          }
          <Divider />
          {toggle === 'data scraping' ?
            <ToggleButton active value="data scraping" onClick={() => setToggle('data scraping')}>DATA SCRAPING</ToggleButton>
            :
            <ToggleButton value="data scraping" onClick={() => setToggle('data scraping')}>DATA SCRAPING</ToggleButton>
          }
          <Divider />
          {toggle === 'artificial intelligence' ?
            <ToggleButton active value="artificial intelligence" onClick={() => setToggle('artificial intelligence')}>AI</ToggleButton>
            :
            <ToggleButton value="artificial intelligence" onClick={() => setToggle('artificial intelligence')}>AI</ToggleButton>
          }
          <Divider />
          {toggle === 'python tools & scripts' ?
            <ToggleButton active value="python tools" onClick={() => setToggle('python tools')}>PYTHON TOOLS</ToggleButton>
            :
            <ToggleButton value="python tools" onClick={() => setToggle('python tools')}>PYTHON TOOLS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.categories.includes(toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
