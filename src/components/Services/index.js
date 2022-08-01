import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
          <ServicesH1>Critters Cult principles</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={"images/book.png"} />
                  <ServicesH2>Narrative</ServicesH2>
          <ServicesP>
                      The Critters Cult foundation is the dynamic narrative that composes the project and brings the community together.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/col.png"} />
          <ServicesH2>Playfullness</ServicesH2>
          <ServicesP>
                      All stages are intended to push forward the traditional way of making a multimedia project embracing the new features from web 3.0.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
                  <ServicesIcon src={"images/globe.png"} />
          <ServicesH2>Worldbuilding</ServicesH2>
          <ServicesP>
                      The intention behind the complexity of this project is to allow further developments beyond what is currently settled.
          </ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/suns.png"} />
                  <ServicesH2>Sun Studio</ServicesH2>
                  <ServicesP>
                      Establishes a long-term community around high quality art and reward holders’ support with exclusive rgb0x00 creations.
                  </ServicesP>
              </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
