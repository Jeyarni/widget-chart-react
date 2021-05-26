import React from 'react'
import { Layout } from 'antd'
import NavBar from './NavBar';

const { Header } = Layout;

const MyLayout = ({ children }) => {
  return (
      <Layout className="layout">
        <Header className="navbar"><NavBar/></Header>
        <div className="layout-child">
          {children}
        </div>
      </Layout>
  )
}

export default MyLayout
