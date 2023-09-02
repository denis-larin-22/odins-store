import { routes } from './core/routes';
import './index.css';
import { RouterProvider } from 'react-router-dom';

function Root() {
  return (
    <div className="">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default Root;
