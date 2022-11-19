import './App.css';
import ItemListContainer from './itemListContainer/itemListContainer';
import Navbar from './navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Productos"}/>
    </>
  );
}

export default App;
