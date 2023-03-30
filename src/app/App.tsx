import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import ScrollToTop from '../utils/ScrollToTop';
import { useBurgerMenuContext } from '../context/BurgerMenuProvider';
import BurgerMenu from '../features/burgerMenu/BurgerMenu';
import { useEffect } from 'react';
import { Modal, Wrapper } from './App.styles';

function App() {
  const { openMenu, setOpenMenu } = useBurgerMenuContext();

  // логика для модального окна на мобильных устройствах, закрывается при клике вне модалки и при ресайзе окна
  useEffect(() => {
    function closeModal(event: any) {
      let target = event.target as HTMLElement;
      if (target.dataset.type) {
        setOpenMenu(false);
      }
    }
    window.addEventListener('click', closeModal);
    window.addEventListener('resize', () => setOpenMenu(false));
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <>
      <Modal data-type='modal' openMenu={openMenu}>
        <Wrapper data-type='modal'>
          <Header />
          <BurgerMenu />
        </Wrapper>
      </Modal>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
