import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
      <SectionTitle main>Overview</SectionTitle>
      <SectionText> This three-part project will detail a significant project I led (part-i), model search engine revenue dynamics with data visualization (part-ii), and analyze fictional user feedback to recommend prioritized remediations (part-iii) for DuckDuckGo's search service. </SectionText>
    
  </Section>
);

export default Projects;