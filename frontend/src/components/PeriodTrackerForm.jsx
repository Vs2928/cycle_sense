import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const PeriodTrackerForm = ({ onSubmit, onClose }) => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lastPeriodDate) {
      setError('Please enter your last period start date');
      return;
    }

    if (cycleLength < 21 || cycleLength > 35) {
      setError('Cycle length should be between 21 and 35 days');
      return;
    }

    if (periodLength < 2 || periodLength > 10) {
      setError('Period length should be between 2 and 10 days');
      return;
    }

    try {
      const periodData = {
        email: "example@gmail.com", // Replace with dynamic user email from state or context
        StartDate: lastPeriodDate,
        cycle: cycleLength.toString(),
        duration: periodLength.toString(),
      };

      const response = await axios.post('http://localhost:5000/add-period', periodData);
      setSuccessMessage(response.data.message);
      setError('');
      setLastPeriodDate('');
      setCycleLength(28);
      setPeriodLength(5);
    } catch (error) {
      setError(error.response?.data?.message || 'Error saving period data');
      setSuccessMessage('');
      console.error('Save error:', error);
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>Track Your Period</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faCalendarAlt} /> When did your last period start?
            </label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="form-control"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faClockRotateLeft} /> How long is your cycle? (days)
            </label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="form-control"
              min="21"
              max="35"
            />
            <small>Average cycle is 28 days (from first day of period to day before next period)</small>
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faCalendarAlt} /> How long is your period? (days)
            </label>
            <input
              type="number"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
              className="form-control"
              min="2"
              max="10"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default PeriodTrackerForm; 