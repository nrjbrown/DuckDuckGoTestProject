import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDuckduckgo } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import Technologies from "../Technologies/Technologies";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20"}}>
        <SiDuckduckgo size="8rem" />
        <Span>
          Neville Brown <br />
          Senior Business Operations Manager
        </Span>
      </Link> 
    </Div1>
    <Div2>
      <li>
        <Link href="/parti">
          <NavLink>part i</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/partii">
          <NavLink>part ii</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/partiii">
          <NavLink>part iii</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nrjbrown" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons> 
      <SocialIcons href="https://www.linkedin.com/in/neville-brown-blockchain/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons> 
    </Div3>

  </Container>
);

export default Header;
