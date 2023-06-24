import styled from "styled-components";

function Footer() {
  return (
    <>
      <MainHeadArea>
        <CenterContainer>
          <a>Tesla © 2021</a>
          <a>Privacy & Legal</a>
          <a>Careers</a>
          <a>News</a>
          <a className="more">Engage</a>
          <a className="more">Locations</a>
        </CenterContainer>
      </MainHeadArea>
    </>
  );
}

const MainHeadArea = styled.div`
  height: 100px;
  width: 100%;
  letter-spacing: 1px;
  white-space: nowrap;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenterContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .more{
        display: none;
    }
  }
  a {
    margin: 0px 10px;
  }
`;

export default Footer;
