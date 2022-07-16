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
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/col.png"} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
                  <ServicesIcon src={"images/globe.png"} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            temporibus quam nesciunt similique accusamus consectetur.
          </ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/suns.png"} />
                  <ServicesH2>Premium Benefits</ServicesH2>
                  <ServicesP>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                      temporibus quam nesciunt similique accusamus consectetur.
                  </ServicesP>
              </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
