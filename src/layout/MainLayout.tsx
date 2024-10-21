import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

export default function MainLayout(): React.JSX.Element {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
