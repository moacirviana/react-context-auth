import { Layout } from 'antd';
import { Card, Avatar } from 'antd';
import Title from 'antd/es/typography/Title';
import { UserOutlined } from '@ant-design/icons';


const { Header, Footer, Content } = Layout;

export default function Profile() {

    return(
        <Layout>
            

            <Content>

            <div className="site-card-border-less-wrapper">
                <Card title="Profile" bordered={false} style={{ width: 300 }}>
                <p>Profile</p>
                <p>Card content</p>
                <p>Card content</p>
                
                </Card>
            </div>
            </Content>
            <Footer>Rodapé</Footer>

      </Layout>
    )
}


/*
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import Home from './pages/Home';
import { Login } from './components/Login';
import Profile from './pages/Profile';
import "antd/dist/reset.css";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        
        <Routes>
          
          <Route path='/profile' element={<ProtectedLayout><Profile /></ProtectedLayout>}  />
          
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />}>

          </Route>

        </Routes>
        
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
*/