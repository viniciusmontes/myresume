import { ReactNode } from 'react';
import { StyledContainer } from './style';


interface iChildren {
  children: ReactNode;
}
const Container = ({ children }: iChildren) => {
  

  return (
    <StyledContainer>{children}</StyledContainer>
  );
};

export default Container;