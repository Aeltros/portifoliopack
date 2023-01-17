import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../myprojects/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

 const handleClick = (e, i) => {
   e.preventDefault();

   if (carouselRef.current) {
     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
     
     carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
   }
 }

 const handleScroll = () => {
   if (carouselRef.current) {
     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

     setActiveItem(index);
   }
 }

 useEffect(() => {
   const handleResize = () => {
     carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
   }

   window.addEventListener('resize', handleResize);
   return ()=> window.removeEventListener('resize', handleResize);
 }, []);

 return (
   <Section id='about'>
     <SectionTitle>About Me</SectionTitle>
     <SectionText>
       <p>
         Junior Software Developer,
         with a passion for creating efficient and user-friendly software.
       </p> 
     </SectionText>
     <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
       {TimeLineData.map((item, index) => (
         <CarouselMobileScrollNode
          key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>

           <CarouselItem
            index={index} 
            id={`carousel__item-${index}`}
             active={activeItem}
              onClick={e => handleClick(e, index)}>
             
             
             <CarouselItemTitle>
             {item.year}
             <CarouselItemImg
  width={208}
  height={6}
  viewBox="0 0 208 6"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="Paint0_linear" x1="0" y1="3" x2="208" y2="3">
      {/* Your gradient stop elements here */}
    </linearGradient>
  </defs>
  <path 
    fillRule="evenodd" 
    clipRule="evenodd" 
    d="M 2.5 5.5 C 3.88071 5.555 4.38071 5 3 3"
    fill={`url(#Paint0_linear)`}
    fillOpacity="0.33"
  />
</CarouselItemImg>

             
             
             
             </CarouselItemTitle>
           </CarouselItem>



           
           <CarouselItemText>
{item.text}

           </CarouselItemText>
         </CarouselMobileScrollNode>
       ))}
     </CarouselContainer>
        <CarouselButtons>
  {TimeLineData.map((items, index) => (
    <CarouselButton
      key={index}
      index={index}
      active={activeItem}
      onClick={e => handleClick(e, index)}
      type="button"
    >

<CarouselButtonDot active={activeItem} onClick={handleScroll} />

  </CarouselButton>
  ))}
 
</CarouselButtons>
<SectionDivider>
  
</SectionDivider>
   </Section>
 );
}

export default Timeline;
