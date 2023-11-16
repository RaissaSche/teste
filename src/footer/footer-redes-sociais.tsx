import { facebookLogo, instagramLogo, linkedinLogo } from "./footer-index";
import { ContainerRedesSociais } from "./footer-styles";

const RedesSociais = () => {
  return (
    <ContainerRedesSociais>
      <img src={instagramLogo} />
      <img src={facebookLogo} />
      <img src={linkedinLogo} />
    </ContainerRedesSociais>
  );
};

export default RedesSociais;
