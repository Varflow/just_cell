export type Menu = { NAME: string; LINK: string | null };
export type MenuList = { [key: string]: Menu };
export type MenuView = {
  index: number;
  title: string;
  children: Menu[];
};

const MENU_STORE_KEY = "user_menu";

export const saveMenu = (menu: MenuList) => {
  window.localStorage.setItem(MENU_STORE_KEY, JSON.stringify(menu));
};

export const getMenu = () => {
  const menuList = JSON.parse(
    window.localStorage.getItem(MENU_STORE_KEY) || "[]"
  );

  const menu: MenuView[] = Object.entries(menuList).map((menuItem, index) => {
    const children = menuItem[1] as Menu[];
    children.unshift({
      NAME: "Оффлайн",
      LINK: "terminals/offlineTerminal",
    });
    return {
      index,
      title: menuItem[0],
      children,
    };
  });

  return menu;
};
