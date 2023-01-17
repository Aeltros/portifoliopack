import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../myprojects/constants';

const Projects = () => (
  <div>
    <Section nopadding id='projects'>
      <SectionDivider/>
      <SectionTitle min>Projects</SectionTitle>
      <GridContainer>
        {
          projects.map(({id, image, title, description, source, visit, tags}) => (
            <div key={id} style={{ 
                width: '100%',
                height: '80%'
            }}>
              <img src={image} style={{
                objectFit: 'cover',
                width: '100%',
                height: '80%'
              }}/>
              <BlogCard>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr/>
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {
                    tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)
                  }
                </TagList>
                <UtilityList>
                  <ExternalLinks href={visit}>Visit</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks>
                </UtilityList>
              </BlogCard>
            </div>
          ))
        }
      </GridContainer>
    </Section>
  </div>
);

export default Projects;

