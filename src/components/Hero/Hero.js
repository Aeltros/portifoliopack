import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>




        Hello <br/>
        
        My Portifolio Page <br/>
      </SectionTitle>
      <SectionText>
        Lets Build the Web Togethor
      </SectionText>
      <Button onclick={()=>Window.location='aeltros@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;