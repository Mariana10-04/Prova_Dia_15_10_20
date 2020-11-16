import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/Header.jsx';
import Footer from '../src/components/footer/Footer.jsx'
import LandingPage from '../src/components/pages/LandingPage';
import Pagina1 from '../src/components/pages/Pagina1';
import Pagina2 from '../src/components/pages/Pagina2';
import Pagina3 from '../src/components/pages/Pagina3';
import Pagina4 from '../src/components/pages/Pagina4';
import Erro404 from '../src/components/pages/Erro404';

function App() {
  return (
    <>
        <Router>
            <Header />
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path='/Pagina1' component={Pagina1} />
              <Route path='/Pagina2' component={Pagina2} />
              <Route path='/Pagina3' component={Pagina3} />
              <Route path='/Pagina4' component={Pagina4} />
              <Route path='*' component={Erro404} />
            </Switch>
          <Footer />
          </Router>

    </>
  );
}

export default App;
