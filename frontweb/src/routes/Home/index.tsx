import { Dispatch } from "react";
import { StyledHome } from "./style";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

type IHome = {
  isLightTheme: boolean;
  setIsLightTheme: Dispatch<React.SetStateAction<boolean>>;
};

export default function Home({ isLightTheme, setIsLightTheme }: IHome) {
  return (
    <StyledHome>
      <Sidebar isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <div className="home-container">
        <Header />
      </div>
    </StyledHome>
  );
}
