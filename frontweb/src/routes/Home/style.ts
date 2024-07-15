import styled from "styled-components";

export const StyledHome = styled.div`
display: flex;
flex: 1;
flex-direction: column;
  .home-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
