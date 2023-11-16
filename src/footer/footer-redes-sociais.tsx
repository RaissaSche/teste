import { facebookLogo, instagramLogo, linkedinLogo } from "./footer-index.ts";
import { ContainerRedesSociais } from "./footer-styles.ts";

const RedesSociais = () => {
  return (
    <ContainerRedesSociais>
      <a href="https://www.instagram.com/lacrei.saude" target="_blank">
        <img src={instagramLogo} />
      </a>
      <a href="https://www.facebook.com/lacrei.saude" target="_blank">
        <img src={facebookLogo} />
      </a>
      <a href="https://www.linkedin.com/company/lacrei" target="_blank">
        <img src={linkedinLogo} />
      </a>
    </ContainerRedesSociais>
  );
};

export default RedesSociais;
