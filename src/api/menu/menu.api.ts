import { MENU_ICONS_KEY, MENU_STORE_KEY } from "@/contants/storage";

export type Menu = {
  NAME: string;
  LINK: string | null;
  alloc_type?: number;
  children?: Menu[];
};
export type MenuIcons = { [key: string]: string | null };
export type MenuList = { [key: string]: Menu };
export type MenuView = {
  index: number;
  title: string;
  children: Menu[];
};

export const saveMenu = (menu: MenuList) => {
  window.localStorage.setItem(MENU_STORE_KEY, JSON.stringify(menu));
};

export const saveMenuIcons = (menuIcons: MenuIcons) => {
  window.localStorage.setItem(MENU_ICONS_KEY, JSON.stringify(menuIcons));
};

export const getMenuIcons = () => {
  const menuIcons = JSON.parse(
    window.localStorage.getItem(MENU_ICONS_KEY) || "null"
  );

  return menuIcons;
};

export const getMenu = () => {
  const menuList = JSON.parse(
    window.localStorage.getItem(MENU_STORE_KEY) || "[]"
  );

  const menu: MenuView[] = Object.entries(menuList).map((menuItem, index) => {
    const children = menuItem[1] as Menu[];

    return {
      index,
      title: menuItem[0],
      children: children.map((child, index) => ({
        ...child,
        index,
      })),
    };
  });

  return menu;
};
