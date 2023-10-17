import './reset.css';
import './common.css';
import './style.css';

import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
