import styled from 'styled-components';
import Container from '../../components/Container';
import useMediaQuery from '../../hooks/useMediaQuery';
import LowerHeader from './lowerHeader/LowerHeader';
import MobileHeader from './mobileHeader/MobileHeader';
import UpperHeader from './upperHeader/UpperHeader';

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--darkGrey);
  opacity: 0.2;
`;

const BottomLine = styled(Line)`
  margin-bottom: 46px;
`;

function Header() {
  const mobileMedia = useMediaQuery('(max-width: 900px)');

  return mobileMedia ? (
    <MobileHeader />
  ) : (
    <>
      <Container>
        <UpperHeader />
      </Container>
      <Line />
      <Container>
        <LowerHeader />
      </Container>
      <BottomLine />
    </>
  );
}
export default Header;
