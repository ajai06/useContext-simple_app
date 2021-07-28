import './App.css';
import Users from './components/Users';
import Header from './components/Header';

import { UserContext } from './context/context';

function App() {
  return (
    <UserContext>
      <div className="container">
        <Header />
        <Users />
      </div>
    </UserContext>

  );
}

export default App;
