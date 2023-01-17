import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href='tel:267-344-7432'>267-344-7432</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href='mailto:aeltros@gmail.com'>aeltros@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>


<SocialIconsContainer>
<CompanyContainer>
  <Slogan>
    Developing one resuable Component at a time
  </Slogan>
</CompanyContainer>
<SocialContainer>
<SocialIcons href='https://github.com'>
<AiFillGithub size='3rem'/>
  </SocialIcons>
  <SocialIcons href='https://github.com'>
<AiFillLinkedin  size='3rem'/>
  </SocialIcons>
  <SocialIcons href='https://youtube.com'>
{/* <AiFillYoutube size='3rem'/> */}
  </SocialIcons>
</SocialContainer>
</SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
