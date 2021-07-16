import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">

        <Card className="App-Card">
  
           <ProfilePhoto/>
 
        <Card.Body>

            <FullName/> 
            <Address/>
              
        </Card.Body>
             
        </Card>




      </header>
    </div>
  );
}

export default App;
