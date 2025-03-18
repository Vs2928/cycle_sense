import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './CycleSense.css';

function CycleSense() {
  // State for FAQ toggle
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ function
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "Is my health data secure?",
      answer: "Yes, absolutely. We use industry-standard encryption to protect your data. We never share your personal information with third parties, and you can delete your data at any time."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our algorithm becomes more accurate over time as it learns your unique cycle patterns. Most users report that predictions become highly accurate after 2-3 cycles of data."
    },
    {
      question: "Can CycleSense help with irregular periods?",
      answer: "Yes, CycleSense is designed to identify patterns even in irregular cycles. The app can help you track irregularities and provide insights about potential causes, which you can discuss with your healthcare provider."
    },
    {
      question: "Can I use this app for fertility tracking?",
      answer: "While CycleSense provides fertility window estimates, it should not be used as the sole method of contraception. The app is designed for menstrual health tracking and wellness support."
    },
    {
      question: "Is there a premium version?",
      answer: "Yes, CycleSense offers a free basic version and a premium subscription with additional features like advanced analytics, symptom correlation insights, and personalized health reports."
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">Cycle<span>Sense</span></div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            {/* Replace <a> with <Link> for client-side navigation */}
            <li><Link to="/login" className="btn">Log In / Sign Up</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Track, Understand & Nurture Your Menstrual Health</h1>
          <p className="hero-text">CycleSense is a smart assistant that helps you track your menstrual cycle, predict upcoming periods, identify fertility windows, and manage symptoms with personalized insights.</p>
          <button className="btn-primary">Get Started - It's Free</button>
        </div>
        <div className="hero-img">
          <img src="/api/placeholder/400/400" alt="Woman using mobile app" />
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Calendar Demo Section */}
      <CalendarDemo />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <section className="faq" id="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <span>{openFaq === index ? '-' : '+'}</span>
              </div>
              <div 
                className="faq-answer" 
                style={{display: openFaq === index ? 'block' : 'none'}}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta-title">Take Control of Your Menstrual Health</h2>
        <p className="cta-text">Join thousands of users who have transformed their relationship with their menstrual cycle. Start tracking today and discover personalized insights about your body.</p>
        <button className="btn-white">Download Now</button>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

function Features() {
  const featureData = [
    {
      icon: "📊",
      title: "Advanced Cycle Tracking",
      text: "Track your cycle with precision, including period duration, flow intensity, and symptoms for accurate predictions."
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      text: "Get timely notifications for upcoming periods, ovulation windows, and medicine reminders."
    },
    {
      icon: "📈",
      title: "Pattern Analysis",
      text: "Identify cycle irregularities and potential causes like stress, hormonal changes, or lifestyle factors."
    },
    {
      icon: "💊",
      title: "Symptom Management",
      text: "Evidence-based remedies for cramps, bloating, and PMS, including dietary suggestions and lifestyle adjustments."
    },
    {
      icon: "🔒",
      title: "Data Privacy",
      text: "Your health data is encrypted and securely stored. We never share your information with third parties."
    },
    {
      icon: "🧠",
      title: "AI-Powered Insights",
      text: "Our advanced algorithms learn from your data to provide increasingly personalized recommendations."
    }
  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Comprehensive Features</h2>
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">How CycleSense Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">Log Your Period</h3>
          <p>Simply enter your period start date, flow intensity, and any symptoms you experience.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">Get Predictions</h3>
          <p>Our algorithm calculates your next period, ovulation, and fertility windows.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">Receive Insights</h3>
          <p>Get personalized health insights, symptom management tips, and cycle pattern analysis.</p>
        </div>
      </div>
    </section>
  );
}

function CalendarDemo() {
  return (
    <section className="calendar-demo">
      <div className="calendar-content">
        <h2 className="section-title">Intuitive Calendar View</h2>
        <p className="hero-text">Visualize your cycle with our easy-to-understand calendar. Track periods, ovulation, and fertility windows at a glance. Set reminders and log symptoms directly from the calendar view.</p>
        <button className="btn-primary">Try Demo</button>
      </div>
      <div className="calendar-img">
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td className="period-day">3</td>
              <td className="period-day">4</td>
              <td className="period-day">5</td>
              <td className="period-day">6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td className="ovulation-day">15</td>
              <td>16</td>
              <td><span className="current-day">17</span></td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonialData = [
    {
      text: "CycleSense has completely changed how I understand my body. The predictions are incredibly accurate, and the symptom management tips have really helped with my cramps.",
      author: "Sarah K."
    },
    {
      text: "As someone with PCOS, tracking my irregular cycles was always a challenge. This app has made it so much easier to identify patterns and discuss them with my doctor.",
      author: "Maya T."
    },
    {
      text: "The educational content is fantastic! I've learned so much about my reproductive health that I never knew before. Everyone with a period should use this app.",
      author: "Jennifer L."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>CycleSense</h3>
          <p>Your personalized menstrual health assistant, empowering you with knowledge and insights about your body.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Health Articles</a></li>
            <li><a href="#">Community Forum</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Data Protection</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 CycleSense. All rights reserved.</p>
        <p>This app does not provide medical advice. Consult with healthcare professionals for medical concerns.</p>
      </div>
    </footer>
  );
}

export default CycleSense;