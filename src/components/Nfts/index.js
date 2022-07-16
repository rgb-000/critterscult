import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./NftEl";

const Nfts = () => {
  return (
    <ServicesContainer id="nfts">
      <ServicesH1></ServicesH1>
      <ServicesWrapper>
      <ServicesCard>
      <ServicesIcon src={"images/1.png"} />
      </ServicesCard>
      <ServicesCard>
      <ServicesIcon src={"images/2.png"} />
      </ServicesCard>
      <ServicesCard>
      <ServicesIcon src={"images/3.png"} />
      </ServicesCard>
      <ServicesCard>
      <ServicesIcon src={"images/4.png"} />
      </ServicesCard>
        <ServicesCard>
      <ServicesIcon src={"images/5.png"} />
      </ServicesCard>
      <ServicesCard>
      <ServicesIcon src={"images/6.png"} />
      </ServicesCard>
      <ServicesCard>
      <ServicesIcon src={"images/7.png"} />
      </ServicesCard>
      <ServicesCard>
                  <ServicesIcon src={"images/8.png"} />
              </ServicesCard>
              <ServicesCard>
     <ServicesIcon src={"images/9.png"} />
     </ServicesCard>
       <ServicesCard>
      <ServicesIcon src={"images/10.png"} />
      </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/11.png"} />
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={"images/12.png"} />
              </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Nfts;
