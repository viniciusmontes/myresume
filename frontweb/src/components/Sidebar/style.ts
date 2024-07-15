import styled from "styled-components";

export const SidebarStyled = styled.nav`
  .sidebar-container {
    display: flex;
    padding: 20px;
    justify-content: flex-end;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.background};

    ul {
      list-style: none;
    }

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
