import './styles.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import BodyView from './components/BodyView/BodyView';
import Card from './components/Card/Card';
import Activity from './components/Activity/Activity';
import Calendar from './components/Calendar/Calendar';
import Schedule from './components/Schedule/Schedule';
import LungsImage from './lung.png' 
import BoneImage from './bone.png'
import TeethImage from './teeth.png'
import Appointments from './components/Appointment/Appointments';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Header />
        <div className="dashboard-grid">
          <div className="left-column">
            <h2 className="section-title">Dashboard</h2>
            <BodyView />
          </div>


          <div className="middle-column">
            <Card
              image={LungsImage}
              label="Lungs"
              date="26 Oct 2021"
              progress="40%"
              color="#ef4444"
            />
            <Card
              image={TeethImage}
              label="Teeth"
              date="26 Oct 2021"
              progress="90%"
              color="#22c55e"
            />
            <Card
              image={BoneImage}
              label="Bone"
              date="26 Oct 2021"
              progress="70%"
              color="orange"
            />
            <Activity />
          </div>
        
          <div className="right-column">
            <Calendar />
            <Appointments />
            <Schedule />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
