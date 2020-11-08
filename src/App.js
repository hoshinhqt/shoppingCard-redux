
import './App.css';
import HandlingE from './handling-event';
import ExampleHandlEvent from './handling-event/example';
import LiftingStateUp from './lifting-state-up';
import Childone from './lifting-state-up/childone';
import ListKey from './list-keys';
import EListKeys from './list-keys/example';
import ExampleFilm from './list-keys/exampleFilm';
import Props from './props';
import LiftingStateUpCart from './shopingCard';
import LiftingStateUpCartRedux from './shopingCard-redux';
import StateEx from './state';
import ExampleSTT from './state/exampleSTT';
// import Home from './usermanagement';
import HomeRedux from './usermanagement-redux';

// import RenderElement from './rendering-elements'
// import Baitap2 from './baitap2';
// import Baitap1 from "./baitap1";



function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2/> */}
      {/* <RenderElement/> */}
      {/* <HandlingE/> */}
      {/* <ExampleHandlEvent/> */}
      {/* <StateEx/> */}
      {/* <ExampleSTT/> */}
      {/* <ListKey/> */}
      {/* <EListKeys/> */}
      {/* <ExampleFilm/> */}
      {/* <Props/> */}
      {/* <LiftingStateUp/> */}
      {/* <LiftingStateUpCart/> */}
      {/* <Home/> */}
      {/* <HomeRedux/> */}
      <LiftingStateUpCartRedux/>
    </div>

  );
}

export default App;
