import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineCodepen } from 'react-icons/ai';

import { FaFreeCodeCamp } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px', fontFamily: 'sans-serif'}}>
          <AiOutlineCodepen size="3rem"/> <Span  style={{marginLeft: '5px'}}>Nicolás Marsili</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/NickooMar?tab=repositories" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nicol%C3%A1s-marsili/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/nicoo_marsili" target="_blank">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.freecodecamp.org/nicoomarsili" target="_blank">
        <FaFreeCodeCamp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
