import React from "react";
import { useRouter } from "next/router";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const router = useRouter();
  
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Review of <br />
          Project Submission 
        </SectionTitle>
        <SectionText>
          I'm excited about the potential opportunity to contribute to DuckDuckGo's mission of privacy, trust, and transparency. This project highlights my ability to solve business challenges, enhance operations, and create <em>moments of delight</em>—where seamless execution feels like magic.
        </SectionText>
        <Button onClick={() => router.push('/parti')}>Review</Button>
      </LeftSection>
    </Section>
  );
};
export default Hero;
