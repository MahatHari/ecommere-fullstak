import React, { useState } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import {
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu, Item } = Menu; // can be wrtitten aslo as Menu.Submenu instead

const Header = () => {
  const [current, setCurrent] = useState('');
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode='horizontal'>
      <Item key='home' icon={<HomeOutlined />}>
        <NavLink to='/'>Home</NavLink>
      </Item>
      <SubMenu key='SubMenu' icon={<SettingOutlined />} title='UserName '>
        <Item key='setting:1'>
          <NavLink to='/register'>Register</NavLink>
        </Item>
        <Item key='setting:2'>
          <NavLink to='/login'>Login</NavLink>{' '}
        </Item>
      </SubMenu>
      <Item key='register' icon={<UserAddOutlined />} className='float-right'>
        <NavLink to='/register'>Register</NavLink>
      </Item>
      <Item key='login' icon={<UserOutlined />} className='float-right'>
        <NavLink to='/login'>Login</NavLink>
      </Item>
    </Menu>
  );
};

export default Header;
