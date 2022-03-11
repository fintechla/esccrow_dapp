import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 0.5px solid rgba(131, 131, 131, 0.5);
  padding-top: 18px;
  padding-bottom: 18px;

  & .footer-content {
    justify-content: space-between;

    & span,
    & a {
      color: var(--text-secondary-perpetuo);
    }
    & ul {
      display: flex;
      list-style: none;
      gap: 20px;
      & a {
        text-decoration: none;
      }
    }
  }
`;
