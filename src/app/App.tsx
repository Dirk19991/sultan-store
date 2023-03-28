import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import ScrollToTop from '../utils/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
