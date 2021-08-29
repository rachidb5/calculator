import Index from './pages/Index'
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Index />
    </Provider>
  );
}

export default App;
