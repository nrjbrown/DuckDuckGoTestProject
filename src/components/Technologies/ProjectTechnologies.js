import React from 'react';
import { DiReact, DiJavascript1 } from 'react-icons/di';
import { SiMaterialui, SiFramer, SiRecharts, SiCloudflare } from 'react-icons/si';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import styled from 'styled-components';

// Create styled components directly in this file
const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 56px;
  line-height: 67px;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.9);
`;

const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 3.6rem;
`;

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  margin: 3rem 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`;

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  color: #FFFFFF;
`;

const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
`;

const ProjectTechnologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The DuckDuckGo market analysis dashboard was built using a modern tech stack that combines powerful data visualization tools with a polished UI framework.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Core Technologies</ListTitle>
          <ListParagraph>
            Built with React for component-based<br />
            UI development and efficient rendering
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMaterialui size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI Framework</ListTitle>
          <ListParagraph>
            Material UI components like Accordion<br />
            and Framer Motion for animations
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRecharts size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            Recharts library for responsive,<br />
            interactive data visualization
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsFillFileEarmarkPdfFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>PDF Generation</ListTitle>
          <ListParagraph>
            jsPDF for exporting dashboards<br />
            to PDF format for offline use
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiCloudflare size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>External Integration</ListTitle>
          <ListParagraph>
            Cloudflare Radar integration<br />
            for real-time geographic data
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript ES6+</ListTitle>
          <ListParagraph>
            Modern JavaScript features<br />
            for clean, maintainable code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default ProjectTechnologies;