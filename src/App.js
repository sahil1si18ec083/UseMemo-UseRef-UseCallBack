import "./styles.css";
import Usecallback from "./Usecallback/Usecallback";
import UseMemoHook from "./UseMemo/UseMemoHook";
import UseRef from "./UseRef/UseRef";
export default function App() {
  return (
    <div className="App">
      {/* <UseMemoHook /> */}
      {/* <Usecallback/> */}
      <UseRef />
    </div>
  );
}
