import "./App.css";
import {Card} from "./components";

import {trackList} from "./songs/trackList";

function App() {
  return (
    <div className="App">
      <Card song={trackList[2]}></Card>
    </div>
  );
}

export default App;
