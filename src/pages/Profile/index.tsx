import { Card } from 'antd';

export default function Profile() {
    return(
        <div className="site-card-border-less-wrapper">
            <Card title="Profile" bordered={false} style={{ width: 300 }}>
            <p>Profile - User</p>
              <p>Nane - Fulando de Tal</p>
              <p>Roles: Admin, User</p>
            </Card>
        </div>        
    )
}