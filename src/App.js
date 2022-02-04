// Components
import AddUserModal from './components/AddUserModal';
import Header from './components/Header';
import UsersList from './components/UsersList';
import UserDetailsRightSlide from './components/UserDetailsRightSlide';

const App = () => {

  return (
    <>
      <Header />
      <UsersList />
      <AddUserModal />
      <UserDetailsRightSlide /> 
    </>
  )
}




export default App;
