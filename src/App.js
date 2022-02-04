// Components
import AddUserModal from './components/AddUserModal';
import Header from './components/Header';
import UsersList from './components/UsersList';
import UserDetailsRightSlide from './components/UserDetailsRightSlide';

// Custom Hooks
import { useModals, useSliders } from './hooks';

const App = () => {
  
  const { modalIsOpen, setModalIsOpen } = useModals();
  const { rightSlideIsOpen, setRightSlideIsOpen } = useSliders();

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      <UsersList setRightSlideIsOpen={setRightSlideIsOpen} />
      <AddUserModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}  />
      <UserDetailsRightSlide rightSlideIsOpen={rightSlideIsOpen} setRightSlideIsOpen={setRightSlideIsOpen} /> 
    </>
  )
}




export default App;
