import './App.css'
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Anime from './components/Anime/Anime';
import Trash from './trash/trash'
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Toolbar />
            <Switch>
              <Route path="/trash"  component={Trash} />
              <Route path="/" exact component={Anime} />
            </Switch>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
