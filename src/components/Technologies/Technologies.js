import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>

<SectionDivider/>
  <SectionTitle>
    Technologies
  </SectionTitle>
  <SectionText>
  "I have successfully completed a full stack coding bootcamp which covered web fundamentals, Python, Java and the MERN stack. I am now ready to embark on my journey as a software developer."
  </SectionText>
<List>
<ListItem>
<DiFirebase size = "3rem"/>
<ListContainer>
<ListTitle>
  Front end
</ListTitle>
<ListParagraph>
Experience with <br/>
React.js <br/>
HTML <br/>
CSS <br/>
Bootstrap <br/>
</ListParagraph>
</ListContainer>

</ListItem>
{/* <ListItem>
<DiFirebase size = "3rem"/>
<ListContainer>
<ListTitle>
  Front end
</ListTitle>
<ListParagraph>
</ListParagraph>
</ListContainer>
</ListItem> */}

<ListItem>
<DiFirebase size = "3rem"/>
<ListContainer>
<ListTitle>
  Back end
</ListTitle>
<ListParagraph>
Experience with <br/>
Node js <br/>
Express <br/>
Java <br/>
<br/>

</ListParagraph>
</ListContainer>
</ListItem>

</List>


    </Section>
  </div>
);

export default Technologies;
