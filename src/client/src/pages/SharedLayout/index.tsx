import { Outlet } from 'react-router-dom';

export function SharedLayout(): JSX.Element {
  return (
    <div>
      <h1>MERN TypeScript Starter</h1>
      <Outlet />
    </div>
  );
}
