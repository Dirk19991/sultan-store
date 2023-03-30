import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import ScrollToTop from '../utils/ScrollToTop';
import styled from 'styled-components';
import { useBurgerMenuContext } from '../context/BurgerMenuProvider';
import BurgerMenu from '../features/burgerMenu/BurgerMenu';
import { useEffect } from 'react';

const Modal = styled.div<{ openMenu: boolean }>`
  display: ${(props) => (props.openMenu ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  margin-top: -100px;
  margin-left: 0px;
`;

function App() {
  const { openMenu, setOpenMenu } = useBurgerMenuContext();
  useEffect(() => {
    console.log('mount');
    function closeModal(event: any) {
      let target = event.target as HTMLElement;
      console.log(target.dataset.type);
      if (target.dataset.type) {
        setOpenMenu(false);
      }
    }
    window.addEventListener('click', closeModal);
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

      <div onClick={() => setOpenMenu(false)}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
