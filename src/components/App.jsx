import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Productos"}/>
    </>
  );
}

export default App;
