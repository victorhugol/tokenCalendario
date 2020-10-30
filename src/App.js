import {RouterSetup} from './Router';
import { Global } from './styles/GlobalStyle';




function App() {
  return (
    <div className="App">
      <Global/>
      <RouterSetup></RouterSetup>
    </div>
  );
}

export default App;
