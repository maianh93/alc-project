import { Layout, Menu } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
& {
  background: white;
}
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  )
}

export default Header;