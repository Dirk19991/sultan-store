import styled from 'styled-components';
import Container from '../../../components/Container';
import MobileContainer from '../../../components/MobileContainer';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import getCartQuantity from '../../../utils/getCartQuantity';
import { YellowCircle } from '../lowerHeader/LowerHeader.style';

const Wrapper = styled.div`
  height: 93px;
  padding: 10px 15px;
`;

const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Burger = styled.div`
  width: 32px;
  height: 32px;
  margin-top: -2px;
`;

const Logo = styled.div``;

const ShoppingCart = styled.div`
  position: relative;
  margin-right: 7px;
  margin-top: 5px;
`;

const MobileCircle = styled(YellowCircle)`
  width: 23px;
  height: 23px;
  top: -8px;
  right: -10px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`;

function MobileHeader() {
  const { items } = useShoppingCartContext();
  const quantity = getCartQuantity(items);

  return (
    <MobileContainer>
      <Wrapper>
        <UpperHeader>
          <Burger>
            <img src='./icons/burger.svg' alt='burger' />
          </Burger>
          <Logo>
            <img src='./icons/sultanLogoSmall.svg' alt='logo' />
          </Logo>
          <ShoppingCart>
            <img src='./icons/shoppingCartSmall_black.svg' alt='cart' />
            <MobileCircle> {quantity}</MobileCircle>
          </ShoppingCart>
        </UpperHeader>
      </Wrapper>
    </MobileContainer>
  );
}
export default MobileHeader;
