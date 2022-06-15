import { Layout, Menu } from "antd";
import styled from "styled-components";

const StyledFooter = styled(Layout.Footer)`
& {
  background: white;
}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  )
}

export default Footer;