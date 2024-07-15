import styled from "styled-components";
import { breakpoints } from "../../contants/breakpoints";

export const CardSkillsStyled = styled.div`
  .base-card {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 4px 20px ${({ theme }) => theme.colors.shadow};
    border-radius: 10px;
    width: 420px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .base-card p {
    text-align: left;
  }

  .card-skills-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom : 10px;
  }

  .card-skills-image-container {
    display: flex;
    width: 380px;
    height: 280px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2rem;
    font-wheight: bold;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    text-align: left;
  }
  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    width: 100%;
    heigth: 100%;
  }

  button {
    background-color: ${({ theme }) => theme.colors.black};
  }

  @media ${breakpoints.md} {
    .base-card {
      width: 280px;
    }
    .card-skills-image-container {
      width: 280px;
      height: 180px;
    }
      h1 {
        font-size: 2rem;
      }
  }
`;
