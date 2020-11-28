import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import Shop from './components/shop';
import BestSeller from './components/bestseller'
import AboutUs from './components/aboutus';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
  <Router>
    <Layout>
      <Header style={{background:'#353B3F'}}>
        <Text style={{Width: '120px', Height: '23px', fontFamily: 'Fantasy', fontSize: '25px', color: '#FFFFFF'}}>
          SHOP OF LOVE
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px'}}>SHOP</Link>
          <Link to="/bestseller" style={{margin:'8px'}}>BEST SELLER</Link>
          <Link to="/aboutus" style={{margin:'8px'}}>ABOUT US</Link>
        </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inlineblock', background:'#222222'}}>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/bestseller" exact component={BestSeller} />
          <Route path="/aboutus" exact component={AboutUs} />
        </Switch>
      </Content>
      <Footer style={{background:'#D9DFE4', textAlign:'center', width:'100%'}}>
        TUGAS AKHIR PRAKTIKUM RSBK 2020 - KELOMPOK 28 (LAURENSIA & MAHANI)
      </Footer>
    </Layout>
  </Router>
  )
}

export default App;