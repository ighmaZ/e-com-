import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/Directory';

const Home = () => {

 

  return (
      <div>
          <Outlet />
<Directory categories={categories}/> 

      </div>
  );
  };

export default Home;