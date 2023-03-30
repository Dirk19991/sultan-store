import Container from '../../components/Container';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Line, BottomLine } from './Header.style';
import LowerHeader from './lowerHeader/LowerHeader';
import MobileHeader from './mobileHeader/MobileHeader';
import UpperHeader from './upperHeader/UpperHeader';

function Header() {
  const mobileMedia = useMediaQuery('(max-width: 900px)');

  return mobileMedia ? (
    <MobileHeader />
  ) : (
    <header>
      <Container>
        <UpperHeader />
      </Container>
      <Line />
      <Container>
        <LowerHeader />
      </Container>
      <BottomLine />
    </header>
  );
}
export default Header;
