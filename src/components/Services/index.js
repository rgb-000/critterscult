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
      <ServicesH1></ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={"images/book.png"} />
                  <ServicesH2>Narrative oriented</ServicesH2>
          <ServicesP>
                 The core of the project will be in the stories behind each piece we create and how people can felt attached to this to build a community.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/col.png"} />
          <ServicesH2>Escalate</ServicesH2>
          <ServicesP>
            The project will grow beyond the traditional narrative format or a mere pfp collection to something more playfull, interactive and cohese with the web 3.0.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
                  <ServicesIcon src={"images/globe.png"} />
          <ServicesH2>Worldbuilding</ServicesH2>
          <ServicesP>
            As a world-building-like work, the ambition is to create something that can be a kind of boilerplate to admit future expansions and developments.
          </ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/suns.png"} />
                  <ServicesH2>Sun Studio</ServicesH2>
                  <ServicesP>
                      Created by @rgb0x00, Suns is a pixel art studio focused on excelence and on building community around high quality art.
                  </ServicesP>
              </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
