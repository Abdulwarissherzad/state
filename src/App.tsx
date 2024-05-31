import Bug from "./components/Bug";
import Button from "./components/Button";
import ImmerLibrary from "./components/ImmerLibrary";
import Message from "./components/Message";
import ShopCard from "./components/ShopCard";
import UdatingNestedOjects from "./components/UdatingNestedOjects";
import ParantComponents from "./stateManagement/ParantComponents";

function App() {
  return (
    <>
      <h1>Click Down Add A Player!</h1> <br />
      <Button />
      <ShopCard />
      <Message />
      <Bug />
      <ImmerLibrary />
      <UdatingNestedOjects />
      <ParantComponents />
    </>
  );
}

export default App;
