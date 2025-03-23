import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CycleSense.css';
import './Chatbot.css';

function CycleSense() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  // Toggle FAQ function
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Navigate to login page
  const handleGetStarted = () => {
    navigate('/login');
  };

  // Scroll to How It Works section
  const handleLearnMore = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
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
            <li>
              <Link to="/login" className="btn" aria-label="Log In or Sign Up">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.OdFnKF-wSLIEZh1lzZinSgHaHa&pid=Api&P=0&h=180"
                  alt="Login Icon"
                  className="btn-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Track Your Cycle with Confidence</h1>
          <p className="hero-text">
            Our intuitive period tracking app helps you understand your body better,
            predict your cycle accurately, and take control of your reproductive health.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn-secondary" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img
            src="https://assets.grok.com/users/d1f4fbcd-3ca6-44fa-a653-01f369856102/qikzWSOPbinpsahg-generated_image.jpg"
            alt="Period tracking illustration"
          />
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
      <section className="modern-faq" id="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle">
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
              <div
                className={`faq-answer ${openFaq === index ? 'open' : ''}`}
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
        <p className="cta-text">
          Join thousands of users who have transformed their relationship with their
          menstrual cycle. Start tracking today and discover personalized insights
          about your body.
        </p>
      </section>

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
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
    <section className="modern-features" id="features">
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
// HowItWorks Component
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

// CalendarDemo Component
function CalendarDemo() {
  return (
    <section className="calendar-demo">
      <div className="calendar-content">
        <h2 className="section-title">Intuitive Calendar View</h2>
        <p className="hero-text">
          Visualize your cycle with our easy-to-understand calendar. Track periods,
          ovulation, and fertility windows at a glance. Set reminders and log symptoms
          directly from the calendar view.
        </p>
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

// Testimonials Component
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
    <section className="modern-testimonials" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">“{testimonial.text}”</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Cycle<span>Sense</span></h3>
          <p className="footer-text">
            Your personalized menstrual health assistant, empowering you with knowledge and insights about your body.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#e83e8c"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#e83e8c"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="#e83e8c"/>
                <circle cx="4" cy="4" r="2" fill="#e83e8c"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 0 0-6.5 17.5A10 10 0 0 0 12 22a10 10 0 0 0 6.5-17.5A10 10 0 0 0 12 2zm0 4.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#e83e8c"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Health Articles</a></li>
            <li><a href="#">Community Forum</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Legal</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Data Protection</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 CycleSense. All rights reserved.</p>
        <p>This app does not provide medical advice. Consult with healthcare professionals for medical concerns.</p>
      </div>
    </footer>
  );
}
// Chatbot Component
function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const OPENROUTER_API_KEY = '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';
  const API_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';

  const getBotResponse = async (userMessage) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Chatbot',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat:free',
          messages: [{ role: 'user', content: userMessage }],
          max_tokens: 5000,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error('Invalid API response structure');
      }
    } catch (error) {
      console.error('Error:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }
  };

  const formatBotMessage = (message) => {
    message = message.replace(/\n/g, '<br>');
    message = message.replace(/(#+)\s(.+)/g, (match, hashes, text) => {
      const size = hashes.length;
      return `<h${size}>${text}</h${size}>`;
    });
    message = message.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    message = message.replace(/\*(.*?)\*/g, '<i>$1</i>');
    return message;
  };

  const addMessageToChat = (message, isUser) => {
    const newMessage = {
      text: message,
      isUser,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleUserInput = async () => {
    const message = userInput.trim();
    if (!message) return;

    addMessageToChat(message, true);
    setUserInput('');

    const typingMessage = { isTyping: true, isUser: false };
    setMessages((prevMessages) => [...prevMessages, typingMessage]);

    try {
      const botResponse = await getBotResponse(message);
      setMessages((prevMessages) => {
        const filtered = prevMessages.filter(msg => !msg.isTyping);
        return [...filtered, {
          text: botResponse,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }];
      });
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => {
        const filtered = prevMessages.filter(msg => !msg.isTyping);
        return [...filtered, {
          text: 'Sorry, there was an error processing your request.',
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }];
      });
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen && messages.length === 0) {
      addMessageToChat(
        "Hi there! 👋 I'm your CycleSense assistant. How can I help you with your menstrual health tracking today?",
        false
      );
    }
  };

  const botAvatarUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI0ZGNkI4QiIvPjxwYXRoIGQ9Ik0xNSAyMUMyMCAxNyAzMCAxNyAzNSAyMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE1IiByPSIyIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjMyIiBjeT0iMTUiIHI9IjIiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTI1IDMwQzI4IDMwIDMxIDMyIDMxIDM1QzMxIDM4IDI4IDQwIDI1IDQwQzIyIDQwIDE5IDM4IDE5IDM1QzE5IDMyIDIyIDMwIDI1IDMwWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=";

  return (
    <div>
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '65px',
            height: '65px',
            borderRadius: '50%',
            backgroundColor: '#FF6B8B',
            color: 'white',
            border: 'none',
            boxShadow: '0 6px 16px rgba(255, 107, 139, 0.25)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src={botAvatarUrl}
            alt="CycleSense Assistant"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
        </button>
      )}

      {isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '380px',
            height: '550px',
            borderRadius: '20px',
            backgroundColor: 'white',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: '1000',
            border: '1px solid #f1f1f1',
            animation: 'slideUp 0.3s ease'
          }}
        >
          <div
            style={{
              padding: '16px 24px',
              background: 'linear-gradient(135deg, #FF6B8B 0%, #FF8E9E 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={botAvatarUrl}
                alt="CycleSense Assistant"
                style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.7)' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>CycleSense Assistant</span>
                <span style={{ fontSize: '12px', opacity: '0.8' }}>Online</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: '1',
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              backgroundColor: '#f8f9fd'
            }}
          >
            {messages.map((message, index) =>
              message.isTyping ? (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    maxWidth: '80%',
                    marginLeft: '0',
                    marginRight: 'auto'
                  }}
                >
                  <img
                    src={botAvatarUrl}
                    alt="CycleSense Assistant"
                    style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                  />
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'white',
                      borderRadius: '18px',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #eaeaea'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF6B8B', animation: 'bounce 1s infinite' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF6B8B', animation: 'bounce 1s infinite .3s' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF6B8B', animation: 'bounce 1s infinite .6s' }}></span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '80%',
                    marginLeft: message.isUser ? 'auto' : '0',
                    marginRight: message.isUser ? '0' : 'auto',
                    gap: '4px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: '8px',
                      flexDirection: message.isUser ? 'row-reverse' : 'row'
                    }}
                  >
                    {!message.isUser && (
                      <img
                        src={botAvatarUrl}
                        alt="CycleSense Assistant"
                        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                      />
                    )}
                    <div
                      style={{
                        padding: '14px 18px',
                        borderRadius: '20px',
                        backgroundColor: message.isUser ? '#FF6B8B' : 'white',
                        color: message.isUser ? 'white' : '#333',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
                        border: message.isUser ? 'none' : '1px solid #eaeaea',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        wordBreak: 'break-word',
                        borderBottomRightRadius: message.isUser ? '4px' : '20px',
                        borderBottomLeftRadius: !message.isUser ? '4px' : '20px'
                      }}
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#999',
                      alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                      marginLeft: message.isUser ? '0' : '38px',
                      marginTop: '2px'
                    }}
                  >
                    {message.timestamp}
                  </div>
                </div>
              )
            )}
          </div>

          <div
            style={{
              padding: '16px 20px',
              borderTop: '1px solid #eaeaea',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
              placeholder="Type your question about cycle tracking..."
              style={{
                flex: '1',
                padding: '14px 20px',
                borderRadius: '30px',
                border: '1px solid #e0e0e0',
                outline: 'none',
                fontSize: '14px',
                transition: 'all 0.3s',
                backgroundColor: '#f8f9fd',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05) inset'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#FF6B8B';
                e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 139, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05) inset';
              }}
            />
            <button
              onClick={handleUserInput}
              style={{
                background: 'linear-gradient(135deg, #FF6B8B 0%, #FF8E9E 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 4px 10px rgba(255, 107, 139, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 107, 139, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(255, 107, 139, 0.3)';
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CycleSense;