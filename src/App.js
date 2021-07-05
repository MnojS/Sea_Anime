import './App.css'
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Anime from './components/Anime/Anime';
import VideoPlayer from './components/Anime/Watch/VideoPlayer/VideoPlayer'
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SignIn from './components/LogIn/Account/SignIn';
import SignUp from './components/LogIn/Account/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Switch>
              <Route path="/trash">
                <Toolbar />
                <VideoPlayer />
                <Footer />
              </Route>
              <Route path="/sign-in" >
                  <SignIn />
              </Route>
              <Route path="/sign-up" >
                  <SignUp />
              </Route>
              <Route path="/" exact>
                <Toolbar />
                <Anime />
                <Footer />
              </Route>
            </Switch>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
