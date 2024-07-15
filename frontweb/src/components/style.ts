"use client";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  width: 100%;
  display: grid;
  column-gap: 2rem;
  padding: 0 1rem 0 0;
  /* padding-right: 2rem; */
  transition: all 0.4s;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    "sidebar header header"
    "sidebar main navigation";

  header {
    grid-area: header;
  }

  aside {
    grid-area: sidebar;
  }

  main {
    grid-area: main;
  }

  .navigation {
    grid-area: navigation;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
