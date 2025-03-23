import React, { useState } from 'react';
import './Remedies.css';

const Remedies = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedRemedy, setExpandedRemedy] = useState(null);

  const remedyCategories = [
    { id: 'all', name: 'All Remedies' },
    { id: 'pain', name: 'Pain Relief' },
    { id: 'mood', name: 'Mood Support' },
    { id: 'nutrition', name: 'Nutritional Support' },
    { id: 'exercise', name: 'Exercise Therapy' },
    { id: 'alternative', name: 'Alternative Therapies' }
  ];

  const remedies = [
    {
      id: 1,
      category: 'pain',
      title: 'Heat Therapy for Menstrual Cramps',
      description: 'Heat therapy is one of the most effective ways to alleviate menstrual cramps. The application of heat helps relax the uterine muscles, increase blood flow, and reduce pain signals.',
      steps: [
        'Apply a heating pad to your lower abdomen for 15-20 minutes',
        'Alternatively, take a warm bath or shower',
        'Use heat therapy every 2-3 hours as needed during painful periods',
        'Combine with gentle stretching for maximum relief'
      ],
      precautions: 'Avoid falling asleep with a heating pad on. Use medium heat settings to prevent burns.',
      videoId: 'XWqSVz0wXDw',
      videoTitle: 'Heat Therapy for Menstrual Pain Relief',
      videoLink: 'https://youtu.be/lIHEaADyL_o?si=iC2qY8JRUkVWce_q' // Add YouTube link
    },
    {
      id: 2,
      category: 'exercise',
      title: 'Gentle Stretching Routine',
      description: 'A gentle stretching routine can help relieve tension in the lower back, hips, and pelvic area, reducing menstrual pain. These stretches are designed to be comfortable even during your period.',
      steps: [
        'Hip flexor stretch: Kneel on one knee and gently push your hips forward',
        "Child's pose: Kneel and sit back on your heels, then stretch your arms forward",
        'Seated forward bend: Sit with legs extended and gently fold forward',
        'Reclining bound angle pose: Lie on your back with the soles of your feet together',
        'Hold each stretch for 30 seconds to 1 minute, breathing deeply',
        'Perform routine 1-2 times daily during your period'
      ],
      precautions: 'Move slowly and gently. Never push through pain. Use props like pillows for support if needed.',
      videoId: 'ikJGnQIWHJg',
      videoTitle: 'Gentle Stretching Routine for Period Pain Relief',
      videoLink: 'https://youtu.be/lNySrpeJXBw?si=3d94UABo_JaMIBuh' // Add YouTube link
    },
    {
      id: 3,
      category: 'nutrition',
      title: 'Anti-Inflammatory Tea Blend',
      description: 'Certain herbal teas have anti-inflammatory and antispasmodic properties that can help reduce menstrual pain and related symptoms. This blend combines several beneficial herbs.',
      steps: [
        'Combine equal parts of dried ginger, cinnamon, and chamomile',
        'Add 1 tsp of the blend to a cup of hot water',
        'Steep for 5-7 minutes',
        'Add honey if desired',
        'Drink 2-3 cups daily during your period'
      ],
      precautions: 'Check for herb allergies before use. Consult with a healthcare provider if you take medications, as some herbs can interact with them.',
      videoId: 'RRlOaQTJ0uA',
      videoTitle: 'How to Make Anti-Inflammatory Tea for Period Pain',
      videoLink: 'https://youtu.be/jJx-f_VZK2c?si=a2rz8mqT4an59AZH' // Add YouTube link
    },
    {
      id: 4,
      category: 'mood',
      title: 'Mindfulness Meditation for PMS',
      description: 'Mindfulness meditation can help manage mood changes, anxiety, and irritability associated with PMS. Regular practice can help reduce stress hormones and promote emotional balance.',
      steps: [
        'Find a quiet, comfortable space',
        'Set a timer for 5-10 minutes',
        'Focus on your breath, noticing the sensation of breathing in and out',
        'When your mind wanders, gently bring attention back to your breath',
        'Practice daily, especially in the week before your period'
      ],
      precautions: 'Start with short sessions and gradually increase duration. Meditation is not a replacement for professional help if you experience severe mood disorders.',
      videoId: 'inpok4MKVLM',
      videoTitle: 'Guided Meditation for PMS and Period Symptoms',
      videoLink: 'https://youtu.be/Fc3F6Q2ae28?si=3S9g2FafxNK06q2k' // Add YouTube link
    },
    {
      id: 5,
      category: 'alternative',
      title: 'Acupressure Points for Period Relief',
      description: 'Acupressure is a traditional Chinese medicine technique that involves applying pressure to specific points on the body to alleviate pain and other symptoms. Several points are particularly effective for menstrual discomfort.',
      steps: [
        'Locate the Spleen 6 point (three finger-widths above the inner ankle bone)',
        'Apply firm pressure with your thumb for 1-2 minutes',
        'Locate the Liver 3 point (in the webbing between your big toe and second toe)',
        'Apply pressure for 1-2 minutes',
        'Repeat on both sides, 2-3 times daily during your period'
      ],
      precautions: 'Do not apply pressure to the point where it causes pain. Avoid certain acupressure points during pregnancy.',
      videoId: 'nKCe0fmQFCk',
      videoTitle: 'Acupressure Points for Menstrual Pain Relief',
      videoLink: 'https://youtu.be/e2rMFXgYUW4?si=vu-a7cksfVcKDtPh' // Add YouTube link
    },
    {
      id: 6,
      category: 'pain',
      title: 'Essential Oil Massage for Cramps',
      description: 'Essential oils with anti-inflammatory and antispasmodic properties can help reduce menstrual cramps when applied topically. This massage blend combines several beneficial oils.',
      steps: [
        'Mix 2 drops of lavender oil, 2 drops of clary sage oil, and 1 drop of marjoram oil',
        'Add to 1 tablespoon of carrier oil like coconut or jojoba',
        'Gently massage the blend into your lower abdomen using circular motions',
        'Apply a warm compress over the area after massage',
        'Repeat 2-3 times daily during painful periods'
      ],
      precautions: 'Always dilute essential oils. Perform a patch test before use. Avoid during pregnancy or if you have hormone-sensitive conditions.',
      videoId: 'HqNEbx_3HZA',
      videoTitle: 'Essential Oil Massage for Menstrual Pain',
      videoLink: 'https://youtu.be/xTf0Pl2hxsI?si=bYmBp3UxitsPQ2CH' // Add YouTube link
    }
  ];

  const filteredRemedies = activeCategory === 'all' 
    ? remedies 
    : remedies.filter(remedy => remedy.category === activeCategory);

  const toggleRemedy = (id) => {
    setExpandedRemedy(expandedRemedy === id ? null : id);
  };

  return (
    <div className="remedies-container">
      <h1>Natural Remedies for Menstrual Health</h1>
      <p className="remedies-intro">
        Explore these evidence-based natural remedies to help manage menstrual symptoms. 
        Each remedy includes step-by-step instructions and helpful video tutorials.
      </p>

      <div className="remedies-categories">
        {remedyCategories.map(category => (
          <button 
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="remedies-grid">
        {filteredRemedies.map(remedy => (
          <div key={remedy.id} className="remedy-card">
            <div className="remedy-header">
              <h2>{remedy.title}</h2>
              <span className="remedy-category-tag">{remedyCategories.find(cat => cat.id === remedy.category).name}</span>
            </div>
            
            <p className="remedy-description">{remedy.description}</p>
            
            <button 
              className="view-details-button"
              onClick={() => toggleRemedy(remedy.id)}
            >
              {expandedRemedy === remedy.id ? 'Hide Details' : 'View Details'}
            </button>
            
            {expandedRemedy === remedy.id && (
              <div className="remedy-details">
                <div className="remedy-steps">
                  <h3>How to Use This Remedy:</h3>
                  <ol>
                    {remedy.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="remedy-precautions">
                  <h3>Precautions:</h3>
                  <p>{remedy.precautions}</p>
                </div>
                
                <div className="remedy-video">
                  <h3>Watch Tutorial:</h3>
                  <div className="video-container">
                    <div className="video-placeholder">
                      <div className="video-info">
                        <span className="video-title">{remedy.videoTitle}</span>
                        <a 
                          href={remedy.videoLink} // Use the videoLink property
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="watch-button"
                        >
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="remedy-disclaimer">
        <h3>Important Note:</h3>
        <p>
          These remedies are intended to complement, not replace, medical care. 
          If you experience severe or persistent symptoms, please consult with a healthcare provider. 
          Always check with your doctor before trying new remedies, especially if you have existing health conditions or take medications.
        </p>
      </div>
    </div>
  );
};

export default Remedies;