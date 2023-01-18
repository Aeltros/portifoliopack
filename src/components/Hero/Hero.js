import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>




        Dev<br/>
        
        Portifolio Page <br/>
      </SectionTitle>
      <SectionText>
        One reusable Component at a time
      </SectionText>
      <Button onclick={()=>Window.location='aeltros@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;