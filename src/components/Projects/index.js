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
          {toggle === 'automation - data scraping' ?
            <ToggleButton active value="automation - data scraping" onClick={() => setToggle('automation - data scraping')}>AUTOMATION / DATA SCRAPING</ToggleButton>
            :
            <ToggleButton value="automation - data scraping" onClick={() => setToggle('automation - data scraping')}>AUTOMATION / DATA SCRAPING</ToggleButton>
          }
          <Divider />
          {toggle === 'automation - data scraping' ?
            <ToggleButton active value="automation - data scraping" onClick={() => setToggle('machine learning - deep learning - computer vision')}>ML / DL / Computer Vision</ToggleButton>
            :
            <ToggleButton value="automation - data scraping" onClick={() => setToggle('machine learning - deep learning - computer vision')}>ML / DL / Computer Vision</ToggleButton>
          }
          <Divider />
          {toggle === 'python tools and scripts' ?
            <ToggleButton active value="python tools and scripts" onClick={() => setToggle('python tools and scripts')}>PYTHON TOOLS / SCRIPTS</ToggleButton>
            :
            <ToggleButton value="python tools and scripts" onClick={() => setToggle('python tools and scripts')}>PYTHON TOOLS / SCRIPTS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects