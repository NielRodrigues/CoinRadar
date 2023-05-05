import styled, {keyframes} from "styled-components";
import defaultTheme from "../../style/Theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${defaultTheme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Animation = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(16px, -16px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

export const Logo = styled.img`
  height: 40vmin;
  margin: 0;
  animation: ${Animation} infinite 2s linear;
`;

export const Title = styled.h1 `
  margin: 0;
  font-size: ${defaultTheme.fontSize.base2x1};
  color: ${defaultTheme.colors.text};
  text-align: center;

  & span{
    color: ${defaultTheme.colors.primary};
  }
`;

export const Subtitle = styled.h2 `
  font-size: ${defaultTheme.fontSize.base};
  margin-top: 4px;
  color: ${defaultTheme.colors.gray600};
  font-weight: 400;
`;

export const Link = styled.a `
  color: ${defaultTheme.colors.primary};
  font-size: ${defaultTheme.fontSize.xl};
  font-weight: 600;
  margin-top: 16px;
`;
