import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import store from './REDUX/store';

function App() {
  const [page, setPage] = useState('home');
  return (
    <Provider store={store}>
      <div className="App">
        <Header setPage={setPage} />
        {
          page === "home" ?
            <Home />
            :
            <Cart />
        }
      </div>
    </Provider>
  );
}

export default App;
