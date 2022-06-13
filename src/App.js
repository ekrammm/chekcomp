
import './App.css';
import Adressee from './components/Adressee';
import FullName from './components/FullName';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
      <Card.Body>
        <Card.Title> <FullName/></Card.Title>
        <Card.Text>
        <Adressee/>   
        </Card.Text>
       
      </Card.Body>
    </Card> 
    </div>
  );
}

export default App;
