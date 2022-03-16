import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        👋 Hello, I'm Nicolás. Full-Stack Developer & UX Designer.
      </SectionText>
      <Button>
        <a
          href="https://www.linkedin.com/in/nicol%C3%A1s-marsili"
          target="_blank"
          style={{textDecoration: 'none'}}
        >
          📫 Reach me
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
