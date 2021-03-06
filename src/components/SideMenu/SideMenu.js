import React from 'react'
import { Menu, Icon } from 'antd'

import './SideMenu.less'

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props)

    this.menuRef = React.createRef()
  }

  renderMenuItem(itemData, index) {
    return <Menu.Item key={index} onClick={e => itemData.action(e, itemData)}>{itemData.name}</Menu.Item>
  }

  render() {
    const { menus } = this.props
    return (
      <Menu
        className="side-menu"
        mode="inline"
        defaultSelectedKeys={['0']}
        ref={this.menuRef}
      >
        {menus.map(this.renderMenuItem)}

        {/* <Menu.SubMenu title="okkk1">
          <Menu.Item key="1">Option 1</Menu.Item>
        </Menu.SubMenu> */}
      </Menu>
    )
  }

} // class SideMenu end