import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCalendarAlt,
  faChartLine,
  faNotesMedical,
  faUserMd,
  faBook,
  faUsers,
  faCog,
  faClock,
  faChartPie,
  faStethoscope,
  faStickyNote,
  faLightbulb,
  faPlus,
  faBell,
  faChevronLeft,
  faChevronRight,
  faTint,
  faBolt,
  faHeadSideVirus,
  faCloudRain,
  faTemperatureHigh,
  faTired,
  faExclamationTriangle,
  faRunning,
  faHeartbeat,
  faHotTub,
  faSpinner,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import PeriodTrackerForm from './PeriodTrackerForm';

const Dashboard = ({ isNewUser }) => {
  const navigate = useNavigate();
  const [activeSymptom, setActiveSymptom] = useState(null);
  const [notes, setNotes] = useState([
    { date: 'March 15, 2025', text: 'Started feeling cramps a day before ovulation. Yoga helped a lot!' },
    { date: 'March 9, 2025', text: 'Last day of period. Flow was lighter than usual this month.' },
    { date: 'March 5, 2025', text: 'Period started on time. Used chamomile tea for cramps - worked well!' },
  ]);
  const [newNote, setNewNote] = useState('');
  const [showForm, setShowForm] = useState(isNewUser); // Show form if it's a new user
  const [cycleData, setCycleData] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [insights, setInsights] = useState([]);

  // Format date for display
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Calculate where we are in the cycle
  const calculateCycleDay = () => {
    if (!cycleData) return { day: 0, phase: 'unknown', totalDays: 0 }; // Default values

    const { lastPeriodDate, cycleLength } = cycleData;
    const today = new Date();

    // Calculate days since last period start
    const daysSinceLastPeriod = Math.floor((today - lastPeriodDate) / (1000 * 60 * 60 * 24));

    // Calculate current cycle day (1-based)
    const currentCycleDay = (daysSinceLastPeriod % cycleLength) + 1;

    // Determine cycle phase
    let phase = 'unknown';
    if (currentCycleDay <= cycleData.periodLength) {
      phase = 'period';
    } else if (currentCycleDay >= cycleLength - 3) {
      phase = 'premenstrual';
    } else if (currentCycleDay >= Math.floor(cycleLength / 2) - 2 && currentCycleDay <= Math.floor(cycleLength / 2) + 2) {
      phase = 'ovulation';
    } else if (currentCycleDay > cycleData.periodLength && currentCycleDay < Math.floor(cycleLength / 2) - 2) {
      phase = 'follicular';
    } else {
      phase = 'luteal';
    }

    return { day: currentCycleDay, phase, totalDays: cycleLength };
  };

  // Calculate next important dates (next period, ovulation)
  const calculateNextDates = () => {
    if (!cycleData) return { nextPeriod: null, nextOvulation: null };

    const { lastPeriodDate, cycleLength } = cycleData;
    const today = new Date();

    // Calculate days since last period start
    const daysSinceLastPeriod = Math.floor((today - lastPeriodDate) / (1000 * 60 * 60 * 24));

    // Calculate how many complete cycles have passed
    const cyclesPassed = Math.floor(daysSinceLastPeriod / cycleLength);

    // Calculate next period start date
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + (cyclesPassed + 1) * cycleLength);

    // Calculate next ovulation date
    const nextOvulationDate = new Date(nextPeriodDate);
    nextOvulationDate.setDate(nextPeriodDate.getDate() - Math.floor(cycleLength / 2));

    // If ovulation is in the past (we're past ovulation in current cycle), go to next cycle
    if (nextOvulationDate < today) {
      nextOvulationDate.setDate(nextOvulationDate.getDate() + cycleLength);
    }

    return {
      nextPeriod: nextPeriodDate,
      nextOvulation: nextOvulationDate,
    };
  };

  // Get cycleInfo and nextDates
  const cycleInfo = calculateCycleDay();
  const nextDates = calculateNextDates();

  // Check if we have stored cycle data on load
  useEffect(() => {
    const savedCycleData = localStorage.getItem('cycleData');
    if (savedCycleData) {
      const parsedData = JSON.parse(savedCycleData);
      parsedData.lastPeriodDate = new Date(parsedData.lastPeriodDate);
      setCycleData(parsedData);
      setShowForm(false); // Hide form if data already exists
    } else {
      setShowForm(true); // Show form if no data exists
    }
  }, []);

  // Handle form submission
  const handleFormSubmit = (data) => {
    setCycleData(data);
    localStorage.setItem('cycleData', JSON.stringify(data));
    setShowForm(false); // Hide form after submission
  };

  // Handle quiz navigation
  const navigateToQuiz = () => {
    navigate('/quiz');
  };
  const navigateToremedies = () => {
    navigate('/remedies');
  };
  const navigateTocontents = () => {
    navigate('/contents');
  };

  return (
    <div>
      {/* Period Tracker Form Modal */}
      {showForm && (
        <PeriodTrackerForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Dashboard Content */}
      {!showForm && (
        <>
          {/* Navigation */}
          <nav>
            <div className="nav-container">
              <div className="logo">Cycle<span>Sense</span></div>
              <ul className="nav-links">
                
                
              </ul>
              <div className="user-profile">
                
              </div>
            </div>
          </nav>

          {/* Dashboard Layout */}
          <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
              <ul className="sidebar-menu">
                <li><Link to="/remedies" onClick={navigateToremedies}><FontAwesomeIcon icon={faHome} /> Remedies</Link></li>
                <li><Link to="/quiz" onClick={navigateToQuiz}><FontAwesomeIcon icon={faChartLine} /> Quiz</Link></li>
                <li><Link to="/contents" onClick={navigateTocontents}><FontAwesomeIcon icon={faChartLine} /> Contents</Link></li>
                
               
              </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
              {/* Dashboard Header */}
              <div className="dashboard-header">
                <div>
                  <h2 className="greeting">Hello!</h2>
                  <p className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="actions">
                  <button onClick={() => setShowForm(true)}><FontAwesomeIcon icon={faPlus} /> Log Period</button>
                  <button><FontAwesomeIcon icon={faBell} /> Reminders</button>
                </div>
              </div>

              {/* Widgets Grid */}
              <div className="widgets-grid">
                {/* Cycle Status Widget */}
                <div className="widget">
                  <div className="widget-header">
                    <h3 className="widget-title">Cycle Status</h3>
                    <div className="widget-icon"><FontAwesomeIcon icon={faClock} /></div>
                  </div>
                  <div className="widget-content">
                    <div className="cycle-status">
                      {cycleData ? (
                        <>
                          <h2>Day {cycleInfo.day} of {cycleInfo.totalDays}</h2>
                          <p>You're in your {cycleInfo.phase} phase</p>
                          <div className="cycle-progress">
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${(cycleInfo.day / cycleInfo.totalDays) * 100}%` }}
                              ></div>
                              <div
                                className="progress-marker"
                                style={{ left: `${(cycleInfo.day / cycleInfo.totalDays) * 100}%` }}
                              ></div>
                            </div>
                            <div className="progress-labels">
                              <span>Period</span>
                              <span>Ovulation</span>
                              <span>Next Period</span>
                            </div>
                          </div>
                          <div className="upcoming-dates">
                            <div className="date-item">
                              <span className="date-label">Next Period:</span>
                              <span className="date-value">{formatDate(nextDates.nextPeriod)}</span>
                            </div>
                            <div className="date-item">
                              <span className="date-label">Next Ovulation:</span>
                              <span className="date-value">{formatDate(nextDates.nextOvulation)}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="no-data-message">
                          <p>Please log your period data to see cycle predictions</p>
                          <button onClick={() => setShowForm(true)} className="action-button">
                            <FontAwesomeIcon icon={faPlus} /> Log Period
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rest of the Dashboard widgets... */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;