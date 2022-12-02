import { Layout, Avatar } from 'antd';
import Title from 'antd/es/typography/Title';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function Cabecalho() {

    return(
        <Header style={{padding:8}}>
            <Avatar icon={<UserOutlined />} style={{float:'right', color: '#f56a00', backgroundColor: '#fde3cf'}}>015697172275</Avatar>
            <Title style={{color:'white'}} level={2}>SysHectano</Title>
        </Header>
      )
} 