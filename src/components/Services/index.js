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
      <ServicesH1>Critters Cult Principles</ServicesH1>
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
          <ServicesH2>Playfullness</ServicesH2>
          <ServicesP>
            The narrative will developed beyond a traditional media to something more playfull, interactive and cohese with the web 3.0 spirit.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
                  <ServicesIcon src={"images/globe.png"} />
          <ServicesH2>Worldbuilding</ServicesH2>
          <ServicesP>
            The aim is to create a setting that will work as a boilerplate to future expansions, new stories and developments.
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
