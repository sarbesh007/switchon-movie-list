import store from './redux/store';
import { Provider } from 'react-redux';
import Movies from './components/movies';

import './App.css';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <Provider store={store}>
      <Movies />
    </Provider>
      </header>
      <p>code here</p>
    </div>
  );
}

export default App;
