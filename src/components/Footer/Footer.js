import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">437-213-6179</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            nevthedeveloper@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Creating Moments of Delight</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/nrjbrown" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size="3rem"/>
                </SocialIcons> 
                <SocialIcons href="https://www.linkedin.com/in/neville-brown-blockchain/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin size="3rem"/>
                </SocialIcons> 
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;