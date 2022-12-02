import { Menu } from 'antd';

export default function MenuTop(){
    return(
      <Menu theme="dark"  mode="horizontal">
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.SubMenu title="Sub Menu">
            <Menu.Item>SubMenu item 1</Menu.Item>
            <Menu.Item>SubMenu item 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
}