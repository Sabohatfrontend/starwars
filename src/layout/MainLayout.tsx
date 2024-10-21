import { Outlet } from 'react-router-dom';

export default function MainLayout(): React.JSX.Element {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
