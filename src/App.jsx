
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AnatomySection from './components/DashboardMainContent/DashboardOverview/AnatomySection';
import HealthStatusCards from './components/DashboardMainContent/DashboardOverview/HealthStatusCards';
import ActivityFeed from './components/DashboardMainContent/ActivityFeed';
import CalendarView from './components/DashboardMainContent/CalendarView';
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule';
import './App.css'

function App() {
 
  return (
    <>

   

    <div className="app-container">
      <Sidebar />
      
    </div>

    <div className="main-content">
        <Header />
        <AnatomySection />
        <HealthStatusCards />

        <ActivityFeed/>
        <CalendarView/>
        <UpcomingSchedule/>
      </div>



    
    </>
  )
}

export default App
