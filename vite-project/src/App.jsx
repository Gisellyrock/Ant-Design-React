import { Menu } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as Icons from '@ant-design/icons';

function App() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100vh',
      }}
    >
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: 'lightskyblue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
      }}
    >
      Header
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: 'lightgray',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
      }}
    >
      Footer
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Menu
      onClick={({ key }) => {
        if (key === 'signout') {
          //TODO, signout
        } else {
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: 'Home', key: '/', icon: <Icons.HomeOutlined /> },
        {
          label: 'Dashboard',
          key: '/dashboard',
          icon: <Icons.DashboardOutlined />,
        },
        {
          label: 'Users List',
          key: '/usersList',
          icon: <Icons.UnorderedListOutlined />,
          children: [
            { label: 'Active Users', key: '/activeUsers' },
            { label: 'Disabled users', Key: '/DisabledUsers' },
          ],
        },
        { label: 'Profile', key: '/profile', icon: <Icons.UserOutlined /> },
        {
          label: 'Signout',
          key: 'signout',
          icon: <Icons.PoweroffOutlined />,
          danger: true,
        },
      ]}
    ></Menu>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route
          path="/activeUsers"
          element={<div>Active Users List</div>}
        ></Route>
        <Route
          path="/disableUsers"
          element={<div>Disabled Users List</div>}
        ></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
