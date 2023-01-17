import Link from 'next/link';
import React from 'react';

import { AiFillEyeInvisible, AiFillGithub, AiFillIdcard, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <div>
 
<container>
<Div1>
<Link    a href='/'> 
<a  style={{display:'flex',alignItems:"center", color:'whitesmoke'}}>

<DiCssdeck size='3rem'/><Span style={{fontSize: '2rem', marginTop:'10px'}}>Portifolio</Span>
</a>
</Link>
</Div1>
<Div2>
  <li>
    <Link href='#projects'>
      <NavLink>Projects</NavLink>
    </Link>
  </li>
  <li>
    <Link href='#tech'>
      <NavLink>TechStack</NavLink>
    </Link>
  </li>
  <li>
    <Link href='#about'>
      <NavLink>About</NavLink>
    </Link>
  </li>
  <Div3  >
  <SocialIcons href='https://github.com'>
<AiFillGithub size='3rem'/>
  </SocialIcons>
  <SocialIcons href='https://github.com'>
<AiFillLinkedin  size='3rem'/>
  </SocialIcons>
  <SocialIcons href='https://youtube.com'>
<AiFillYoutube size='3rem'/>
  </SocialIcons>
</Div3>

</Div2>
\
{/* <Div3>ModeToggle</Div3> */}

</container>

 


  </div>
);

export default Header;
