import styled from "styled-components";
import { breakpoints } from "../../contants/breakpoints";

export const HeaderStyled = styled.div`
  .section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .header-social-container svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 4rem;
    padding: 10px;
  }

  .header-content {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    flex-wrap: wrap;
    width: 100%;
  }

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 8rem;
    margin: 0;
    text-align: center;
  }

  .header-subtitle {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
  }

  @media ${breakpoints.sm} {
    h1 {
      font-size: 3rem;
      margin: 0;
    }
    h2 {
      font-size: 4rem;
      margin: 0;
    }

    .section {
      padding: 10px 0;
    }
    .header-social-container svg {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3rem;
    }

    .header-content {
      flex-direction: column;
    }
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 3rem;
    }

    .header-content {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media ${breakpoints.lg} {
    .header-title {
      font-size: 8rem;
    }
  }
`;
