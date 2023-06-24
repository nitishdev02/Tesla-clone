import CarScreen from "./Components/CarScreen";
import Header from "./Components/Header";
import React from "react";
import useScrollSnap from "react-use-scroll-snap";
import { carInfo } from "./app/DataSlice";
import { useSelector } from "react-redux";
function App() {
  const DataState = useSelector(carInfo).teslaData;
  const ContainRef = React.useRef(null);
  useScrollSnap({ ref: ContainRef, duration: 100, delay: 50 });
  return (
    <div ref={ContainRef}>
      <Header />

      {DataState.map((data) => {
        return (
          <CarScreen
            dataUrl={data.imgUrl}
            Title={data.Title}
            Description={data.Description}
            firstChev={data?.firstChev}
            ButtonLeftText={data.ButtonLeftText}
            ButtonRightText={data?.ButtonRightText}
            showNav={data?.showNav}
            OneBtn={data?.OneBtn}
            lastScreen={data?.lastScreen}
          />
        );
      })}
    </div>
  );
}

export default App;
