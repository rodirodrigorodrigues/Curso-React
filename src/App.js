import './App.css';
import Header from './Header'
import HookState from './HookState'
import HookEffect from './HookEffect';
import RenderizacaoCondicional from './RenderizacaoCondicional';
import MakingRequests from './MakingRequests';

function App() {
  return (
    <div className="App">
      <Header />
      <HookState />
      <HookEffect />
      <RenderizacaoCondicional />
      <MakingRequests />
    </div>
  );
}

export default App;
