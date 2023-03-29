import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../../components/Container';
import Light from '../../../components/Light';
import MobileContainer from '../../../components/MobileContainer';
import SemiBold from '../../../components/SemiBold';
import { useBurgerMenuContext } from '../../../context/BurgerMenuProvider';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import getCartQuantity from '../../../utils/getCartQuantity';
import { YellowCircle } from '../lowerHeader/LowerHeader.style';
import { Address, Column } from '../upperHeader/UpperHeader.style';

const Wrapper = styled.div`
  height: 93px;
  padding: 10px 15px;
`;

const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Burger = styled.div`
  width: 32px;
  height: 32px;
  margin-top: -2px;
  cursor: pointer;
`;

const Logo = styled.div`
  margin-left: 2px;
`;

const ShoppingCart = styled.div`
  position: relative;
  margin-right: 7px;
  margin-top: 5px;
  cursor: pointer;
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

const Line = styled.div`
  width: 320px;
  height: 1px;
  background-color: var(--darkGrey);
  transform: translateX(-15px);
  opacity: 0.1;
`;

const LowerHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const DashedLine = styled.div`
  height: 30px;
  opacity: 0.1;
  border: 1px dashed #3f4e65;
  transform: translateX(10px);
`;

const Catalogue = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 30px;
  margin-top: 4px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  transform: translateX(22px);

  > div {
    margin-top: 4px;
  }
`;

const Search = styled.input`
  width: 100px;
  height: 20px;
  border: none;
  color: rgba(92, 99, 112, 1);

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  z-index: 2;
`;

function MobileHeader() {
  const { items } = useShoppingCartContext();
  const quantity = getCartQuantity(items);

  const { openMenu, setOpenMenu } = useBurgerMenuContext();

  const iconSourse = openMenu ? './icons/cross.svg' : './icons/burger.svg';

  return (
    <MobileContainer>
      <Wrapper>
        <UpperHeader>
          <Burger onClick={() => setOpenMenu((prev) => !prev)}>
            <img src={iconSourse} alt='burger' />
          </Burger>
          <Logo>
            <img src='./icons/sultanLogoSmall.svg' alt='logo' />
          </Logo>
          <Link to='./cart'>
            <ShoppingCart>
              <img src='./icons/shoppingCartSmall_black.svg' alt='cart' />
              <MobileCircle> {quantity}</MobileCircle>
            </ShoppingCart>
          </Link>
        </UpperHeader>
        <Line />
        <LowerHeader>
          <Catalogue>
            <div>
              <img src='./icons/catalogueBlack.svg' alt='catalogue' />
            </div>
            <div>Каталог</div>
          </Catalogue>
          <DashedLine />
          <SearchWrapper>
            <div>
              <img src='./icons/lookingGlassBlack.svg' alt='lookingGlass' />
            </div>

            <Search placeholder='Поиск'></Search>
          </SearchWrapper>
        </LowerHeader>
        <Line />
      </Wrapper>
    </MobileContainer>
  );
}
export default MobileHeader;
