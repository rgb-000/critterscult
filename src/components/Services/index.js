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
                  <ServicesH2>Lore & Art oriented</ServicesH2>
          <ServicesP>
             Cri ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/col.png"} />
          <ServicesH2>Access to new Collections </ServicesH2>
          <ServicesP>
            Dolor sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
                  <ServicesIcon src={"images/globe.png"} />
          <ServicesH2>Worldbuilding</ServicesH2>
          <ServicesP>
           Sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/suns.png"} />
                  <ServicesH2>Sun Studio</ServicesH2>
                  <ServicesP>
                      Created by @rgb0x00, Suns is a pixel art studio focused on excelencce and on building community around high quality art.
                  </ServicesP>
              </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
