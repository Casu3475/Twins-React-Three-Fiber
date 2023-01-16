import "./App.css";
import { Canvas } from "@react-three/fiber";
import Twins from "./Components/Twins";

function App() {
  return (
    <>
      <section className="App-header">
        {/* Canvas 1 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          {/* <ambientLight /> */}
          <Twins position={[-1.2, 0, 0]} />
          <Twins position={[1.2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;
