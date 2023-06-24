import React from "react";
import styled from "styled-components";
import { carInfo } from "../app/DataSlice";
import { useSelector } from "react-redux";
function Header() {
  const SideMenuData = useSelector(carInfo).SideMenuData;
  const [OpenDrawer, setOpenDrawer] = React.useState(false);
  React.useEffect(() => {
    OpenDrawer && (document.body.style.overflow = "hidden");
    !OpenDrawer && (document.body.style.overflow = "unset");
  }, [OpenDrawer]);
  return (
    <>
      <MainHeadArea>
        <ImageContainer>
          <img
            src={
              "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg"
            }
            alt="teslaLogo"
          />
        </ImageContainer>
        <CenterContainer>
          <a>Model S</a>
          <a>Model Y</a>
          <a>Model 3</a>
          <a>Model X</a>
          <a>Solar Roof</a>
          <a>Solar Panels</a>
        </CenterContainer>
        <MenuContainer>
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setOpenDrawer(!OpenDrawer);
            }}
          />
          <div className="menu-items">
            <a>Shop</a>
            <a>Account</a>
            <a
              onClick={() => {
                setOpenDrawer(!OpenDrawer);
              }}
            >
              Menu
            </a>
          </div>
        </MenuContainer>
        {OpenDrawer && (
          <>
            <GlassOverlay></GlassOverlay>
          </>
        )}
        <FloatingMenuContainer show={OpenDrawer}>
          <DrawerClose>
            <i
              className="fa-solid fa-x"
              onClick={() => {
                setOpenDrawer(!OpenDrawer);
              }}
            />
          </DrawerClose>
          {SideMenuData.map((data) => {
            return <a className="selections">{data}</a>;
          })}
        </FloatingMenuContainer>
      </MainHeadArea>
    </>
  );
}
const FloatingMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;
  .selections {
    width: 90%;
    margin: 10px;
    height: 40px;
    display: flex;
    padding-left: 10px;
    align-items: center;
  }
`;
const DrawerClose = styled.div`
  height: 100px;
  width: 80%;
  padding-top: 50px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  i {
    cursor: pointer;
  }
`;
const GlassOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: saturate(180%) blur(3px);
  width: 100%;
`;
const MainHeadArea = styled.div`
  position: fixed;
  z-index: 10;
  height: 70px;
  width: 100%;
  letter-spacing: 1px;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.25s ease-in-out;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
  a {
    cursor: pointer;
    padding: 2px;
    transition-duration: 300ms;
    transition-property: background-color;
    border-radius: 5px;
  }
  a:hover {
    background-color: #333;
    opacity: 0.65;
    color: white;
  }
`;
const CenterContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 1124px) {
    display: none;
  }
  a {
    margin: 10px;
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 25%;

  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  display: flex;
  align-items: center;
  img {
    padding-left: 50px;
    width: 150px;
    height: 60px;
  }
`;
const MenuContainer = styled.div`
  width: 22%;
  height: 100%;
  margin-right: 10px;
  margin-left: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  i {
    font-size: 28px;
    width: 100px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
  }
  .menu-items {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 768px) {
    .menu-items {
      display: none;
    }
  }
`;
export default Header;
