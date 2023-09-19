import './index.css';
import { routes } from './core/routes';
import { RouterProvider } from 'react-router-dom';
import { QuestionModal } from './components/common';

function Root() {
  return (
    <div className='relative'>
      <RouterProvider router={routes} />
      <QuestionModal />
    </div>
  );
}

export default Root;
