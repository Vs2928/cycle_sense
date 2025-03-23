// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faClockRotateLeft, 
  faTimes, 
  faCheck, 
  faArrowRight, 
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';

const PeriodTrackerForm = ({ onSubmit, onClose }) => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Get the user's email from localStorage when component mounts
  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const nextStep = () => {
    if (currentStep === 1 && !lastPeriodDate) {
      setError('Please enter your last period start date');
      return;
    }
    if (currentStep === 2 && (cycleLength < 21 || cycleLength > 35)) {
      setError('Cycle length should be between 21 and 35 days');
      return;
    }
    
    setError('');
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setError('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (periodLength < 2 || periodLength > 10) {
      setError('Period length should be between 2 and 10 days');
      setIsSubmitting(false);
      return;
    }

    try {
      const periodData = {
        email: userEmail,
        StartDate: lastPeriodDate,
        cycle: cycleLength.toString(),
        duration: periodLength.toString(),
      };

      const response = await axios.post('http://localhost:5000/add-period', periodData);
      setSuccessMessage(response.data.message);
      setError('');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setLastPeriodDate('');
        setCycleLength(28);
        setPeriodLength(5);
        setCurrentStep(1);
        // Optionally close the modal
        // onClose();
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'Error saving period data');
      setSuccessMessage('');
      console.error('Save error:', error);
    }
    setIsSubmitting(false);
  };

  const renderStepIndicator = () => {
    return (
      <div style={styles.stepIndicator}>
        {[...Array(totalSteps)].map((_, index) => (
          <div 
            key={index} 
            style={{
              ...styles.stepDot,
              backgroundColor: currentStep > index ? '#e83e8c' : '#e0e0e0',
              width: currentStep === index + 1 ? '12px' : '8px',
              height: currentStep === index + 1 ? '12px' : '8px',
            }}
          />
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>When did your last period start?</h3>
            <p style={styles.stepDescription}>
              This helps us calculate your cycle and predict future periods.
            </p>
            <div style={styles.dateInputWrapper}>
              <FontAwesomeIcon icon={faCalendarAlt} style={styles.inputIcon} />
              <input
                type="date"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
                style={styles.dateInput}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>How long is your cycle?</h3>
            <p style={styles.stepDescription}>
              Your cycle length is the number of days from the first day of your period to the day before your next period.
            </p>
            <div style={styles.sliderContainer}>
              <div style={styles.sliderValueDisplay}>
                <span style={styles.sliderValue}>{cycleLength}</span>
                <span style={styles.sliderUnit}>days</span>
              </div>
              <div style={styles.sliderControl}>
                <button 
                  onClick={() => setCycleLength(prev => Math.max(21, prev - 1))}
                  style={styles.sliderButton}
                  disabled={cycleLength <= 21}
                >-</button>
                <input
                  type="range"
                  min="21"
                  max="35"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <button 
                  onClick={() => setCycleLength(prev => Math.min(35, prev + 1))}
                  style={styles.sliderButton}
                  disabled={cycleLength >= 35}
                >+</button>
              </div>
              <p style={styles.sliderNote}>Average cycle is 28 days</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>How long does your period typically last?</h3>
            <p style={styles.stepDescription}>
              This is the number of days you usually bleed during your period.
            </p>
            <div style={styles.periodLengthContainer}>
              <div style={styles.periodLengthOptions}>
                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(days => (
                  <button
                    key={days}
                    onClick={() => setPeriodLength(days)}
                    style={{
                      ...styles.periodOption,
                      backgroundColor: periodLength === days ? '#e83e8c' : '#f8f4fe',
                      color: periodLength === days ? 'white' : '#333',
                    }}
                  >
                    {days}
                  </button>
                ))}
              </div>
              <p style={styles.periodLengthLabel}>days</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (currentStep === totalSteps) {
      return (
        <button
          type="button"
          onClick={handleSubmit}
          style={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon={faCircleNotch} spin style={styles.buttonIcon} />
              <span style={styles.buttonText}>Saving...</span>
            </>
          ) : (
            <>
              <span style={styles.buttonText}>Save Period Data</span>
              <FontAwesomeIcon icon={faCheck} style={styles.buttonIcon} />
            </>
          )}
        </button>
      );
    }

    return (
      <div style={styles.navigationButtons}>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            style={styles.backButton}
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={nextStep}
          style={styles.nextButton}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} style={styles.buttonIcon} />
        </button>
      </div>
    );
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
      width: '100%',
      maxWidth: '460px',
      overflow: 'hidden',
      animation: 'fadeIn 0.3s ease-out',
    },
    header: {
      padding: '24px 24px 0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#333',
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: '#999',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
    },
    body: {
      padding: '0 24px 24px 24px',
    },
    stepIndicator: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      margin: '16px 0 24px 0',
    },
    stepDot: {
      borderRadius: '50%',
      transition: 'all 0.3s ease',
    },
    stepContent: {
      minHeight: '240px',
      display: 'flex',
      flexDirection: 'column',
    },
    stepTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px',
      textAlign: 'center',
    },
    stepDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '24px',
      textAlign: 'center',
    },
    dateInputWrapper: {
      position: 'relative',
      marginTop: '16px',
    },
    inputIcon: {
      position: 'absolute',
      top: '50%',
      left: '16px',
      transform: 'translateY(-50%)',
      color: '#e83e8c',
      fontSize: '16px',
    },
    dateInput: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      fontSize: '16px',
      border: '2px solid #f0f0f0',
      borderRadius: '12px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    sliderContainer: {
      width: '100%',
      marginTop: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    sliderValueDisplay: {
      display: 'flex',
      alignItems: 'baseline',
      margin: '16px 0',
    },
    sliderValue: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#e83e8c',
    },
    sliderUnit: {
      fontSize: '18px',
      color: '#666',
      marginLeft: '8px',
    },
    sliderControl: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    sliderButton: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: '#f0f0f0',
      color: '#333',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    slider: {
      flex: 1,
      height: '6px',
      appearance: 'none',
      backgroundColor: '#f0f0f0',
      borderRadius: '3px',
      outline: 'none',
    },
    sliderNote: {
      fontSize: '13px',
      color: '#999',
      marginTop: '8px',
    },
    periodLengthContainer: {
      marginTop: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    periodLengthOptions: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '8px',
    },
    periodOption: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    periodLengthLabel: {
      fontSize: '16px',
      color: '#666',
      marginTop: '8px',
    },
    error: {
      backgroundColor: '#fff8f8',
      color: '#e74c3c',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '14px',
      marginTop: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    success: {
      backgroundColor: '#f0fff4',
      color: '#2ecc71',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '14px',
      marginTop: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    messageIcon: {
      marginRight: '8px',
      fontSize: '14px',
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '24px',
    },
    nextButton: {
      backgroundColor: '#6c63ff',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      transition: 'background-color 0.2s',
    },
    backButton: {
      backgroundColor: 'transparent',
      color: '#666',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    submitButton: {
      backgroundColor: '#e83e8c',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '16px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s',
    },
    buttonIcon: {
      marginLeft: '8px',
    },
    buttonText: {
      marginRight: '8px',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Track Your Period</h2>
          <button
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div style={styles.body}>
          {renderStepIndicator()}
          
          {renderStepContent()}
          
          {error && (
            <div style={styles.error}>
              <FontAwesomeIcon icon={faTimes} style={styles.messageIcon} />
              {error}
            </div>
          )}
          
          {successMessage && (
            <div style={styles.success}>
              <FontAwesomeIcon icon={faCheck} style={styles.messageIcon} />
              {successMessage}
            </div>
          )}
          
          {renderButtons()}
        </div>
      </div>
    </div>
  );
};

export default PeriodTrackerForm;