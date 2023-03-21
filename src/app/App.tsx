import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
