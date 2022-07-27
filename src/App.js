import {useEffect, useState} from 'react';
import AboutMe from './Pages/AboutMe'
import NavBar from './Pages/NavBar'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Footer from './Pages/Footer'

function App() {

  const [page, setPage] = useState('portfolio')



  function renderPage(page){
    switch(page){
      case 'portfolio': return <Portfolio />;
      case 'about': return <AboutMe />;
      case 'contact': return <Contact />
      case 'resume': return <Resume />;
      default: return <Portfolio />;
    }
  }

  return (
   <>
      <header>
       <NavBar 
       setPage={setPage}
       page={page}
       />
      </header>
      <main>
      {renderPage(page)}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
