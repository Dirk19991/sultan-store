import { Link } from 'react-router-dom';
import MobileContainer from '../../../components/MobileContainer';
import { useBurgerMenuContext } from '../../../context/BurgerMenuProvider';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import getCartQuantity from '../../../utils/getCartQuantity';
import {
  Wrapper,
  UpperHeader,
  Burger,
  Logo,
  ShoppingCart,
  MobileCircle,
  Line,
  LowerHeader,
  Catalogue,
  DashedLine,
  Search,
  SearchWrapper,
} from './MobileHeader.style';

function MobileHeader() {
  const { items } = useShoppingCartContext();
  const quantity = getCartQuantity(items);

  const { openMenu, setOpenMenu } = useBurgerMenuContext();

  const iconSourse = openMenu ? './icons/cross.svg' : './icons/burger.svg';

  return (
    <header>
      <MobileContainer>
        <Wrapper>
          <UpperHeader>
            <Burger onClick={() => setOpenMenu((prev) => !prev)}>
              <img src={iconSourse} alt='burger' />
            </Burger>
            <Link to='/'>
              <Logo>
                <img src='./icons/sultanLogoSmall.svg' alt='logo' />
              </Logo>
            </Link>
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
    </header>
  );
}
export default MobileHeader;
