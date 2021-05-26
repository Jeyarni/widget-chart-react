import React from 'react'
import { useHistory } from 'react-router-dom';
import { BarChartOutlined, ProfileOutlined  } from '@ant-design/icons';

const NavBar = () => {
  const history = useHistory();

  return (
    <>
      <div className="nav-menu" onClick={()=>history.push('/')}><BarChartOutlined className="navbar-icon" />Chart</div>&nbsp;
      <div className="nav-menu" onClick={()=>history.push('/summary')}><ProfileOutlined className="navbar-icon"/>Summary</div>
    </>
  )
}

export default NavBar
