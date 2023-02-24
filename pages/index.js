import React from 'react';
import HomePage from './HomePage';
import AboutPage from './FableLand';


function App() {
  const [page, setPage] = React.useState('home');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () => {

    switch (page) {
      case 'home':
        return <HomePage setPage={handlePageChange}/>;
      case 'FABLELAND':
        return <AboutPage setPage={handlePageChange}/>;
      case 'DEADMEAT':
        return <AboutPage setPage={handlePageChange}/>;
      case 'FISHERMAN':
        return <AboutPage setPage={handlePageChange}/>;
      case 'FPSFUN':
        return <AboutPage setPage={handlePageChange}/>;
      case 'MASTEROFCASTLES':
        return <AboutPage setPage={handlePageChange}/>;
      case 'ANIMALROLL':
        return <AboutPage setPage={handlePageChange}/>;
      default:
        return <HomePage setPage={handlePageChange}/>;
    }
  };

  return (

    <div className="App">
        {renderPage()}
    </div>

  );
}

export default App;