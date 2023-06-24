import styled from "styled-components";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import React from "react";
function CarScreen({
  showNav,
  dataUrl,
  firstChev,
  OneBtn,
  Title,
  Description,
  ButtonLeftText,
  ButtonRightText,
  lastScreen,
}) {
  return (
    <>
      <Screen url={dataUrl} >
        <HeadingArea>
          <Fade bottom>
            <span>{Title}</span>
            <p>{Description}</p>
          </Fade>
        </HeadingArea>
        <Fade bottom>
          <BottomArea>
            <ButtonArea>
              <ButtonLeft btn={OneBtn}>{ButtonLeftText}</ButtonLeft>
              {OneBtn ? null : <ButtonRight>{ButtonRightText}</ButtonRight>}
            </ButtonArea>

            <FloatingIconArea>
              {firstChev && <i className="fa-solid fa-chevron-down" />}
            </FloatingIconArea>
          </BottomArea>
        </Fade>
        {lastScreen && <Footer />}
      </Screen>
    </>
  );
}
const Screen = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
const HeadingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7%;
  flex: 2;
  color: #333;

  span {
    font-weight: 300;
    font-size: 44px;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  width: 100%;
  max-width: 768px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FloatingIconArea = styled.div`
  animation: bounce 1s infinite alternate;
  i {
    font-size: 28px;
    color: white;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;
const BottomArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .FadeEffect {
    width: 100%;
    height: 100%;
    background: red;
  }
`;
const ButtonLeft = styled.div`
  background-color: black;
  opacity: ${(props) => (props.btn ? "" : "0.6")};

  width: 35%;
  height: 25%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 65%;
  }
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: azure;
  color: #333;
  opacity: 0.85;
`;
export default CarScreen;
