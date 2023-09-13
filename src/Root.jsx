import './index.css';
import { routes } from './core/routes';
import { RouterProvider } from 'react-router-dom';

function Root() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default Root;
