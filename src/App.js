import AddUserModal from './components/AddUserModal';
import Header from './components/Header';
import UsersList from './components/UsersList';

// Chakra UI
import UserDetailsRightSlide from './components/UserDetailsRightSlide';
import { useUsers, useModals, useSliders } from './hooks';

const App = () => {

  const { users, userSelected, setUserSelected, deleteUserHandler, addUserHandler, isActiveHandler, editUserHandler, pagination, setPagination, loading } = useUsers();
  const { modalIsOpen, setModalIsOpen } = useModals();
  const { rightSlideIsOpen, setRightSlideIsOpen } = useSliders();

  return (
    <>
      <Header usersLength={users.length} setModalIsOpen={setModalIsOpen} />
      <UsersList users={users} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} usersIsLoading={loading} setRightSlideIsOpen={setRightSlideIsOpen} setUserSelected={setUserSelected} pagination={pagination} setPagination={setPagination} />
      <AddUserModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} addUserHandler={addUserHandler} />
      {
        userSelected
        && <UserDetailsRightSlide rightSlideIsOpen={rightSlideIsOpen} setRightSlideIsOpen={setRightSlideIsOpen} userSelected={userSelected} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} editUserHandler={editUserHandler} />
      }
    </>
  )

}




export default App;
