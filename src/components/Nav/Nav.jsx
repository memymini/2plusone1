import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LogoImg,
  NavItem,
  Tooltip,
  NavItemText,
  NavList,
  Root,
  WalletButton,
} from "./styled";
import { navItems } from "../../utils/NavUtils";

export const Nav = () => {
  return (
    <Root>
      <Container>
        <LogoImg />
        {navItems.map((item) => (
          <NavItem key={item.link}>
            {item.text}
            {item.details.length > 0 && (
              <Tooltip>
                {item.details.map((detail, index) => (
                  <NavItemText key={`${detail.src}_${index}`}>
                    <Link to={detail.src}>{detail.name}</Link>
                  </NavItemText>
                ))}
              </Tooltip>
            )}
          </NavItem>
        ))}
        <WalletButton>지갑 연동</WalletButton>
      </Container>
    </Root>
  );
};
