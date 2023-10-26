import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #272f36;
  &:hover {
    color: #53b57e;
    letter-spacing: 0.5rem;
  }
`;

export const StyledNavLink = styled(StyledLink)`
  background-color: #53b57e;
  padding: 1rem 0.7rem;
  border-radius: 1.3rem;
  color: white;
  &:hover {
    color: #53b57e;
    background-color: #272f36;
    letter-spacing: 0;
  }
`;
