import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

const { Content } = Layout;

export default function MainLayout() {
    return ( 
        <Layout>
            <Cabecalho />
            <Content style={{ padding: '10px', minHeight:'650' }}>

                 <Outlet />

            </Content>
            <Rodape />
        </Layout>
      
    )
 }
 