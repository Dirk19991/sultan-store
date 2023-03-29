import { createContext, useContext, useState } from 'react';

interface IBurgerMenuContext {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenuContext = createContext<IBurgerMenuContext>({
  openMenu: false,
  setOpenMenu: () => {},
});

export const useBurgerMenuContext = () => useContext(BurgerMenuContext);

function BurgerMenuProvider({ children }: any) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const burgerMenuValue = {
    openMenu,
    setOpenMenu,
  };

  return (
    <BurgerMenuContext.Provider value={burgerMenuValue}>
      {children}
    </BurgerMenuContext.Provider>
  );
}
export default BurgerMenuProvider;
