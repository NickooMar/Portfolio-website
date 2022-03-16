import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import { Carousel } from 'react-bootstrap';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider  />
    <SectionTitle main> Projects </SectionTitle>

    <GridContainer>
      {projects.map(({id, images, title, description, tags, source}) => (
        <BlogCard key={id}>

          <Carousel>
            {images?.map((image, index) => (
                <Carousel.Item>
                  <Img key={index} src={image} />
                </Carousel.Item>
            ))}
          </Carousel>

          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent style={{marginTop: '20px'}}>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i} >{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source} target="_blank" >Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;