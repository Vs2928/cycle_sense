// import React, { useState } from 'react';
// import './EducationalContent.css';

// const EducationalContent = () => {
//   const [activeTab, setActiveTab] = useState('articles');
//   const [expandedArticle, setExpandedArticle] = useState(null);
//   const [expandedMyth, setExpandedMyth] = useState(null);
//   const [expandedQuestion, setExpandedQuestion] = useState(null);

//   const articles = [
//     {
//       id: 1,
//       category: 'Menstrual Health',
//       title: 'Understanding Your Menstrual Cycle: The Four Phases',
//       image: '/images/cycle-phases.jpg',
//       summary: 'Learn about the four distinct phases of your menstrual cycle and how they affect your body and mind.',
//       content: `Your menstrual cycle consists of four main phases: menstrual, follicular, ovulatory, and luteal. Each phase is characterized by different hormonal changes that affect your body in various ways.

//       The menstrual phase begins on the first day of your period and typically lasts 3-7 days. During this time, the uterine lining sheds, causing menstrual bleeding. Many people experience cramps, fatigue, and mood changes during this phase.

//       The follicular phase overlaps with the menstrual phase, starting on day 1 and continuing until ovulation. During this time, follicle-stimulating hormone (FSH) stimulates the ovaries to produce follicles, one of which will mature and release an egg. Estrogen levels rise, causing the uterine lining to thicken.

//       The ovulatory phase is the shortest, lasting only about 24 hours. It occurs around day 14 in a 28-day cycle, when luteinizing hormone (LH) triggers the release of the mature egg from the ovary. This is when fertility is at its highest.

//       The luteal phase follows ovulation and lasts until the next period begins. The ruptured follicle transforms into the corpus luteum, producing progesterone to maintain the uterine lining. If pregnancy doesn't occur, progesterone levels drop, leading to menstruation.

//       Understanding these phases can help you recognize patterns in your energy levels, mood, and physical symptoms throughout the month, allowing you to better work with your body's natural rhythms.`
//     },
//     {
//       id: 2,
//       category: 'Hormonal Balance',
//       title: 'Natural Ways to Balance Your Hormones',
//       image: '/images/hormone-balance.jpg',
//       summary: 'Discover lifestyle changes and natural remedies that can help maintain hormonal balance.',
//       content: `Hormonal balance is crucial for overall health and a regular menstrual cycle. Here are some natural approaches to support hormonal harmony:

//       Nutrition plays a vital role in hormone regulation. Focus on whole foods, including plenty of fruits, vegetables, lean proteins, and healthy fats. Omega-3 fatty acids found in fatty fish, flaxseeds, and walnuts can help reduce inflammation and support hormone production. Cruciferous vegetables like broccoli, cauliflower, and Brussels sprouts contain compounds that help metabolize estrogen.

//       Regular physical activity helps regulate insulin and cortisol levels. Aim for a mix of cardio, strength training, and flexibility exercises. However, excessive exercise can disrupt hormonal balance, so listen to your body.

//       Stress management is essential for hormonal health, as chronic stress increases cortisol levels, which can interfere with other hormones. Practices like meditation, deep breathing, yoga, and adequate sleep can help manage stress.

//       Consider adaptogenic herbs like ashwagandha, rhodiola, and holy basil, which may help the body resist physical and mental stress. Some women also find relief with herbs like chasteberry (vitex) for PMS symptoms.

//       Limit exposure to endocrine-disrupting chemicals found in plastics, pesticides, and personal care products. Choose natural, fragrance-free products when possible.

//       Remember that hormonal balance is complex and individual. These approaches may help, but persistent issues should be discussed with a healthcare provider.`
//     },
//     {
//       id: 3,
//       category: 'Diet',
//       title: 'Foods That Support Menstrual Health',
//       image: '/images/menstrual-diet.jpg',
//       summary: 'Explore the best foods to eat during different phases of your cycle to support hormonal balance and reduce symptoms.',
//       content: `Your nutritional needs change throughout your menstrual cycle. Tailoring your diet to each phase can help reduce symptoms and support overall menstrual health.

//       During the menstrual phase (days 1-5), focus on iron-rich foods to replenish what's lost through bleeding. Good choices include lean red meat, spinach, lentils, and fortified cereals. Anti-inflammatory foods like ginger, turmeric, and fatty fish can help ease cramps. Stay hydrated to reduce bloating.

//       In the follicular phase (days 6-14), your body needs support for estrogen production. Include foods rich in B vitamins like whole grains, eggs, and leafy greens. Antioxidant-rich foods like berries, citrus fruits, and colorful vegetables support follicle development.

//       During the ovulatory phase (around day 14), focus on fiber-rich foods to help remove excess estrogen from the body. Good choices include beans, lentils, flaxseeds, and plenty of vegetables. Light, easy-to-digest foods can help with the slight discomfort some people experience during ovulation.

//       The luteal phase (days 15-28) is when many experience PMS symptoms. Combat this with magnesium-rich foods like dark chocolate, nuts, seeds, and leafy greens to help with mood swings and cramps. Complex carbohydrates like sweet potatoes, quinoa, and oats can help stabilize blood sugar and mood. Calcium-rich foods such as yogurt and kale can reduce PMS symptoms.

//       Throughout your cycle, limit processed foods, excess sugar, alcohol, and caffeine, which can exacerbate hormonal imbalances and worsen symptoms.`
//     },
//     {
//       id: 4,
//       category: 'Exercise',
//       title: 'Cycle Syncing: Exercising According to Your Menstrual Phases',
//       image: '/images/cycle-exercise.jpg',
//       summary: 'Learn how to adjust your workout routine based on your menstrual cycle phases for optimal results and comfort.',
//       content: `Cycle syncing your workouts means adjusting your exercise routine to work with your hormonal fluctuations throughout your menstrual cycle. This approach can help you maximize results while minimizing discomfort.

//       During the menstrual phase (days 1-5), energy levels are typically low. Focus on gentle movement like walking, light yoga, or stretching. These activities can help increase blood flow and reduce cramps without overtaxing your body. Listen to your body and rest if needed.

//       In the follicular phase (days 6-14), estrogen levels rise, bringing increased energy and strength. This is an excellent time for high-intensity workouts, strength training, cardio, and trying new fitness classes. Your body recovers more quickly during this phase, so you can push yourself a bit harder.

//       The ovulatory phase (around day 14) is when energy and strength peak. Take advantage of this surge by scheduling challenging workouts, HIIT sessions, or working toward fitness goals. Your coordination may also be at its best during this time.

//       During the luteal phase (days 15-28), energy levels gradually decline as progesterone rises. Start with moderate-intensity workouts like Pilates, barre, or moderate strength training. As you approach your period, transition to lower-intensity activities like yoga, swimming, or walking. This phase is also great for focusing on form and technique.

//       Throughout your cycle, staying hydrated is crucial, especially during the luteal phase when you're more prone to water retention. Always listen to your body—these are guidelines, not rules, and individual experiences vary.`
//     },
//     {
//       id: 5,
//       category: 'Mental Health',
//       title: 'Managing Mood Changes Throughout Your Cycle',
//       image: '/images/mental-health.jpg',
//       summary: 'Strategies for understanding and coping with mood fluctuations related to hormonal changes.',
//       content: `Mood changes throughout your menstrual cycle are a normal response to hormonal fluctuations. Understanding these patterns and developing coping strategies can help you navigate these changes more effectively.

//       During the follicular phase (days 1-14), rising estrogen levels often bring increased energy, optimism, and cognitive function. This is a great time to tackle challenging projects, make important decisions, and engage in social activities. Capitalize on this natural energy boost by planning ahead for busier periods.

//       The ovulatory phase (around day 14) typically brings peak confidence and sociability. Use this time for important conversations, networking, or situations where you need to feel your best socially.

//       The luteal phase (days 15-28) can bring premenstrual symptoms for many, including irritability, anxiety, mood swings, and decreased energy. Practice self-compassion during this time, recognizing that these feelings are temporary and hormone-related. Mindfulness meditation, journaling, and breathing exercises can help manage emotional intensity.

//       Create a supportive routine during the luteal phase by prioritizing sleep, reducing caffeine and alcohol, engaging in gentle exercise, and practicing stress-reduction techniques. Consider tracking your moods alongside your cycle to identify patterns and triggers.

//       If mood changes are severe or interfere with daily functioning, you might be experiencing Premenstrual Dysphoric Disorder (PMDD). Talk to a healthcare provider about additional support options, which might include therapy, medication, or supplementation.

//       Remember that each person's experience is unique. Tracking your symptoms can help you understand your personal patterns and develop tailored coping strategies.`
//     }
//   ];

//   const myths = [
//     {
//       id: 1,
//       myth: "You shouldn't exercise during your period",
//       reality: "Exercise is actually beneficial during menstruation. Physical activity can help reduce cramps, bloating, and mood swings by increasing blood circulation and triggering the release of endorphins, which are natural pain relievers. The key is to listen to your body and choose activities that feel comfortable. Light to moderate exercise like walking, swimming, or yoga can be especially helpful. However, if you experience severe pain or heavy bleeding, it's okay to take it easy and rest as needed."
//     },
//     {
//       id: 2,
//       myth: "PMS is all in your head",
//       reality: "Premenstrual Syndrome (PMS) is a real physiological condition caused by hormonal fluctuations, not a psychological invention. Scientific research has established that PMS involves complex interactions between hormonal changes, neurotransmitters, and brain chemistry. Approximately 80-90% of people who menstruate experience at least some PMS symptoms, which can include physical symptoms like bloating, breast tenderness, and headaches, as well as emotional symptoms like irritability and mood swings. For some, these symptoms can be severe enough to interfere with daily life, as in Premenstrual Dysphoric Disorder (PMDD). PMS is a genuine medical condition that deserves appropriate attention and management."
//     },
//     {
//       id: 3,
//       myth: "Having a period means you can't get pregnant",
//       reality: "It is possible to get pregnant during your period, especially if you have a shorter cycle or longer periods. While the chance is lower, sperm can survive in the reproductive tract for up to 5 days. If you have a short cycle (for example, 21 days), you might ovulate soon after your period ends. Since sperm can survive for several days, sexual activity during the end of your period could lead to pregnancy. Additionally, some people experience breakthrough bleeding or spotting during ovulation, which might be mistaken for a period. If you're trying to avoid pregnancy, it's important to use contraception consistently throughout your cycle, not just during certain phases."
//     },
//     {
//       id: 4,
//       myth: "Irregular periods are always a sign of a serious problem",
//       reality: "While irregular periods can sometimes indicate underlying health issues, they often have benign causes and may not be a reason for concern. Many factors can affect menstrual regularity, including stress, significant weight changes, excessive exercise, travel, and sleep disturbances. Periods can also be irregular during puberty, after childbirth, while breastfeeding, and during perimenopause. However, consistently irregular periods (especially if accompanied by symptoms like severe pain, unusually heavy bleeding, or cycles shorter than 21 days or longer than 35 days) should be discussed with a healthcare provider. Conditions like PCOS, thyroid disorders, or endometriosis might be responsible and benefit from treatment."
//     },
//     {
//       id: 5,
//       myth: "Using tampons means you lose your virginity",
//       reality: "Using tampons has nothing to do with virginity. Virginity is a social and cultural concept, not a medical one, and it's not determined by whether the hymen is intact. The hymen is a thin, flexible membrane that partially covers the vaginal opening and can stretch or tear for many reasons, including physical activity, sports, or using tampons. Many people are born with very small hymens or none at all. Using tampons is a personal choice and a safe way to manage menstrual flow. It's important to use the right absorbency for your flow and to change tampons regularly to prevent rare but serious conditions like Toxic Shock Syndrome."
//     },
//     {
//       id: 6,
//       myth: "Period blood is dirty or toxic",
//       reality: "Menstrual blood is not dirty, toxic, or impure. It consists of blood, tissue from the uterine lining, and mucus from the cervix. This is a normal, healthy part of the reproductive cycle. The uterine lining builds up each month in preparation for a potential pregnancy; when pregnancy doesn't occur, this lining is shed through menstruation. The stigma around menstrual blood has historical and cultural roots but lacks scientific basis. In fact, menstrual blood is generally sterile until it exits the body. Understanding that periods are a natural biological process helps combat harmful taboos and discrimination that affect people who menstruate around the world."
//     }
//   ];

//   const expertAdvice = [
//     {
//       id: 1,
//       expert: "Dr. Sarah Johnson, OB/GYN",
//       question: "What's considered a 'normal' period, and when should I be concerned?",
//       answer: `A "normal" period varies widely from person to person, but generally falls within certain parameters. Most menstrual cycles last 21-35 days, with bleeding lasting 2-7 days. The average blood loss is about 30-40 ml per period.

//       You should consult a healthcare provider if you experience:
//       - Periods that consistently last longer than 7 days
//       - Extremely heavy bleeding (soaking through a pad or tampon every hour for several consecutive hours)
//       - Severe pain that interferes with daily activities
//       - Consistently irregular cycles (if this is new for you)
//       - Bleeding between periods
//       - No periods for 3 months or more (if you're not pregnant, breastfeeding, or in perimenopause)
//       - Significant changes in your typical pattern

//       These symptoms could indicate conditions like fibroids, polyps, endometriosis, PCOS, or hormonal imbalances that benefit from medical evaluation. Remember that what's "normal" is individual, so significant changes to your personal pattern are often more important than comparing to general guidelines.`
//     },
//     {
//       id: 2,
//       expert: "Dr. Michael Chen, Endocrinologist",
//       question: "How does stress affect my menstrual cycle?",
//       answer: `Stress can significantly impact your menstrual cycle through its effects on the hypothalamic-pituitary-adrenal (HPA) axis, which plays a crucial role in regulating stress responses and reproductive hormones.

//       When you're stressed, your body produces more cortisol and adrenaline, which can suppress the production of reproductive hormones like estrogen and progesterone. This hormonal disruption can lead to:
//       - Delayed periods
//       - Missed periods (secondary amenorrhea)
//       - Irregular cycles
//       - More severe PMS symptoms
//       - Changes in flow and duration
//       - Worsened menstrual pain

//       Chronic stress can potentially contribute to long-term conditions like PCOS or functional hypothalamic amenorrhea, where periods stop completely.

//       Managing stress through techniques like mindfulness, regular exercise, adequate sleep, and possibly cognitive behavioral therapy can help regulate your cycle. If stress is significantly affecting your periods, consider working with both a mental health professional and a healthcare provider to address both the stress and its physical manifestations.`
//     },
//     {
//       id: 3,
//       expert: "Aisha Patel, Registered Dietitian",
//       question: "What dietary changes can help with menstrual cramps?",
//       answer: `Dietary changes can significantly help manage menstrual cramps by reducing inflammation and supporting hormone balance:

//       Anti-inflammatory foods are particularly beneficial:
//       - Omega-3 rich foods like fatty fish, flaxseeds, and walnuts
//       - Colorful fruits and vegetables, especially dark leafy greens
//       - Turmeric and ginger, which have natural anti-inflammatory properties
//       - Extra virgin olive oil

//       Magnesium-rich foods can help relax muscles and reduce cramps:
//       - Dark chocolate (70% cocoa or higher)
//       - Nuts and seeds, especially almonds and pumpkin seeds
//       - Legumes like beans and lentils
//       - Whole grains

//       It's also helpful to reduce:
//       - Processed foods high in trans fats
//       - Excessive sugar, which can increase inflammation
//       - Alcohol, which can worsen cramps and disrupt hormone balance
//       - Caffeine, which can increase tension and anxiety

//       Staying hydrated is crucial, as dehydration can worsen cramps. Some people find relief with warm herbal teas like ginger or chamomile.

//       Consider tracking your diet alongside your symptoms to identify specific triggers or helpful foods for your body, as individual responses can vary significantly.`
//     },
//     {
//       id: 4,
//       expert: "Dr. Fatima Rodriguez, Gynecologist",
//       question: "How can I manage PCOS symptoms naturally?",
//       answer: `Polycystic Ovary Syndrome (PCOS) can be managed through several natural approaches alongside medical treatment:

//       Dietary modifications are foundational:
//       - Focus on low-glycemic foods to manage insulin resistance
//       - Emphasize anti-inflammatory foods like colorful vegetables, fruits, fatty fish, and olive oil
//       - Increase fiber intake through whole grains, legumes, and vegetables
//       - Consider a Mediterranean-style diet, which has shown benefits for PCOS

//       Regular exercise is crucial for PCOS management:
//       - Aim for at least 150 minutes of moderate activity weekly
//       - Include both strength training and cardio
//       - Even walking regularly can improve insulin sensitivity

//       Stress management helps regulate hormones:
//       - Practice mindfulness meditation or yoga
//       - Prioritize adequate sleep (7-9 hours nightly)
//       - Consider cognitive behavioral therapy if stress is significant

//       Supplements that may help (consult your doctor before starting):
//       - Inositol (myo-inositol and D-chiro-inositol)
//       - Omega-3 fatty acids
//       - Vitamin D (if deficient)
//       - Magnesium

//       Maintain a healthy weight if appropriate, as even a 5-10% weight reduction can improve symptoms significantly.

//       Remember that PCOS is a complex condition requiring individualized care. Work with healthcare providers to develop a comprehensive management plan that may include both natural approaches and medical treatments when necessary.`
//     },
//     {
//       id: 5,
//       expert: "Dr. James Wilson, Reproductive Endocrinologist",
//       question: "What causes severe PMS and PMDD, and what treatments are available?",
//       answer: `Severe PMS and Premenstrual Dysphoric Disorder (PMDD) are caused by complex interactions between hormonal fluctuations and brain chemistry. While the exact mechanisms aren't fully understood, research suggests that people with severe PMS or PMDD don't have abnormal hormone levels but rather an heightened sensitivity to normal hormonal changes.

//       Contributing factors may include:
//       - Genetics (family history of PMS/PMDD)
//       - Altered serotonin function during the luteal phase
//       - History of trauma or chronic stress
//       - Nutritional deficiencies
//       - Underlying mood disorders

//       Treatment options range from lifestyle modifications to medical interventions:

//       Lifestyle approaches:
//       - Regular exercise (30+ minutes daily)
//       - Anti-inflammatory diet rich in omega-3s, complex carbohydrates, and calcium
//       - Stress reduction techniques like mindfulness meditation
//       - Improved sleep hygiene
//       - Reducing caffeine, alcohol, and sodium

//       Supplements (consult with healthcare provider):
//       - Calcium (1200mg daily)
//       - Vitamin B6 (up to 100mg daily)
//       - Magnesium (200-400mg daily)
//       - Chasteberry (Vitex)

//       Medical treatments:
//       - Selective Serotonin Reuptake Inhibitors (SSRIs) - first-line treatment for PMDD
//       - Hormonal contraceptives to suppress ovulation
//       - Diuretics for severe bloating
//       - GnRH agonists for severe cases (short-term use)
//       - Cognitive Behavioral Therapy

//       The most effective approach often combines lifestyle modifications with appropriate medical treatment. Working with healthcare providers who specialize in women's health or reproductive psychiatry can help develop a personalized treatment plan.`
//     }
//   ];

//   const toggleArticle = (id) => {
//     setExpandedArticle(expandedArticle === id ? null : id);
//   };

//   const toggleMyth = (id) => {
//     setExpandedMyth(expandedMyth === id ? null : id);
//   };

//   const toggleQuestion = (id) => {
//     setExpandedQuestion(expandedQuestion === id ? null : id);
//   };

//   return (
//     <div className="educational-content">
//       <h1>Menstrual Health Education</h1>
      
//       <div className="tabs">
//         <button 
//           className={`tab ${activeTab === 'articles' ? 'active' : ''}`} 
//           onClick={() => setActiveTab('articles')}
//         >
//           Articles & Blogs
//         </button>
//         <button 
//           className={`tab ${activeTab === 'myths' ? 'active' : ''}`} 
//           onClick={() => setActiveTab('myths')}
//         >
//           Myth Busting
//         </button>
//         <button 
//           className={`tab ${activeTab === 'expert' ? 'active' : ''}`} 
//           onClick={() => setActiveTab('expert')}
//         >
//           Expert Advice
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'articles' && (
//           <div className="articles-section">
//             <p className="section-intro">
//               Expand your knowledge about menstrual health with our expert-curated articles covering various aspects of your cycle, hormonal balance, and overall wellbeing.
//             </p>
            
//             <div className="category-filters">
//               <button className="category-filter active">All</button>
//               <button className="category-filter">Menstrual Health</button>
//               <button className="category-filter">Hormonal Balance</button>
//               <button className="category-filter">Diet</button>
//               <button className="category-filter">Exercise</button>
//               <button className="category-filter">Mental Health</button>
//             </div>

//             <div className="articles-grid">
//               {articles.map(article => (
//                 <div key={article.id} className="article-card">
//                   <div className="article-image">
//                     <div className="image-placeholder"></div>
//                     <span className="article-category">{article.category}</span>
//                   </div>
//                   <div className="article-info">
//                     <h3>{article.title}</h3>
//                     <p>{article.summary}</p>
//                     <button 
//                       className="read-more" 
//                       onClick={() => toggleArticle(article.id)}
//                     >
//                       {expandedArticle === article.id ? 'Read Less' : 'Read More'}
//                     </button>
                    
//                     {expandedArticle === article.id && (
//                       <div className="article-content">
//                         <p>{article.content}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'myths' && (
//           <div className="myths-section">
//             <p className="section-intro">
//               Let's separate fact from fiction. Here we debunk common myths about menstruation that have been perpetuated through generations.
//             </p>
            
//             <div className="myths-list">
//               {myths.map(item => (
//                 <div key={item.id} className="myth-item">
//                   <div 
//                     className="myth-header" 
//                     onClick={() => toggleMyth(item.id)}
//                   >
//                     <h3>Myth: {item.myth}</h3>
//                     <span className={`expand-icon ${expandedMyth === item.id ? 'expanded' : ''}`}>+</span>
//                   </div>
                  
//                   {expandedMyth === item.id && (
//                     <div className="myth-reality">
//                       <h4>Reality:</h4>
//                       <p>{item.reality}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'expert' && (
//           <div className="expert-section">
//             <p className="section-intro">
//               Our panel of healthcare professionals answers your most pressing questions about menstrual health and related concerns.
//             </p>
            
//             <div className="expert-questions">
//               {expertAdvice.map(item => (
//                 <div key={item.id} className="expert-item">
//                   <div 
//                     className="expert-question" 
//                     onClick={() => toggleQuestion(item.id)}
//                   >
//                     <div className="expert-header">
//                       <h3>{item.question}</h3>
//                       <span className="expert-name">{item.expert}</span>
//                     </div>
//                     <span className={`expand-icon ${expandedQuestion === item.id ? 'expanded' : ''}`}>+</span>
//                   </div>
                  
//                   {expandedQuestion === item.id && (
//                     <div className="expert-answer">
//                       <p>{item.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
            
//             <div className="ask-expert">
//               <h3>Have a Question?</h3>
//               <p>Submit your menstrual health questions to our panel of experts.</p>
//               <form className="question-form">
//                 <textarea placeholder="Type your question here..."></textarea>
//                 <button type="submit">Submit Question</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EducationalContent;
import React, { useState } from 'react';
import './EducationalContent.css';

const EducationalContent = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [expandedMyth, setExpandedMyth] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const articles = [
    
      {
        id: 1,
        category: 'Menstrual Health',
        title: 'Understanding Your Menstrual Cycle: The Four Phases',
        image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
        summary: 'Learn about the four distinct phases of your menstrual cycle and how they affect your body and mind.',
        content: `...`
      },
      {
        id: 2,
        category: 'Hormonal Balance',
        title: 'Natural Ways to Balance Your Hormones',
        image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
        summary: 'Discover lifestyle changes and natural remedies that can help maintain hormonal balance.',
        content: `...`
      },
      {
        id: 3,
        category: 'Diet',
        title: 'Foods That Support Menstrual Health',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
        summary: 'Explore the best foods to eat during different phases of your cycle to support hormonal balance and reduce symptoms.',
        content: `...`
      },
      {
        id: 4,
        category: 'Exercise',
        title: 'Cycle Syncing: Exercising According to Your Menstrual Phases',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
        summary: 'Learn how to adjust your workout routine based on your menstrual cycle phases for optimal results and comfort.',
        content: `...`
      },
      {
        id: 5,
        category: 'Mental Health',
        title: 'Managing Mood Changes Throughout Your Cycle',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80',
        summary: 'Strategies for understanding and coping with mood fluctuations related to hormonal changes.',
        content: `...`
      }
    ];

  const myths = [
    {
      id: 1,
      myth: "You shouldn't exercise during your period",
      reality: "Exercise is actually beneficial during menstruation. Physical activity can help reduce cramps, bloating, and mood swings by increasing blood circulation and triggering the release of endorphins, which are natural pain relievers. The key is to listen to your body and choose activities that feel comfortable. Light to moderate exercise like walking, swimming, or yoga can be especially helpful. However, if you experience severe pain or heavy bleeding, it's okay to take it easy and rest as needed."
    },
    {
      id: 2,
      myth: "PMS is all in your head",
      reality: "Premenstrual Syndrome (PMS) is a real physiological condition caused by hormonal fluctuations, not a psychological invention. Scientific research has established that PMS involves complex interactions between hormonal changes, neurotransmitters, and brain chemistry. Approximately 80-90% of people who menstruate experience at least some PMS symptoms, which can include physical symptoms like bloating, breast tenderness, and headaches, as well as emotional symptoms like irritability and mood swings. For some, these symptoms can be severe enough to interfere with daily life, as in Premenstrual Dysphoric Disorder (PMDD). PMS is a genuine medical condition that deserves appropriate attention and management."
    },
    {
      id: 3,
      myth: "Having a period means you can't get pregnant",
      reality: "It is possible to get pregnant during your period, especially if you have a shorter cycle or longer periods. While the chance is lower, sperm can survive in the reproductive tract for up to 5 days. If you have a short cycle (for example, 21 days), you might ovulate soon after your period ends. Since sperm can survive for several days, sexual activity during the end of your period could lead to pregnancy. Additionally, some people experience breakthrough bleeding or spotting during ovulation, which might be mistaken for a period. If you're trying to avoid pregnancy, it's important to use contraception consistently throughout your cycle, not just during certain phases."
    },
    {
      id: 4,
      myth: "Irregular periods are always a sign of a serious problem",
      reality: "While irregular periods can sometimes indicate underlying health issues, they often have benign causes and may not be a reason for concern. Many factors can affect menstrual regularity, including stress, significant weight changes, excessive exercise, travel, and sleep disturbances. Periods can also be irregular during puberty, after childbirth, while breastfeeding, and during perimenopause. However, consistently irregular periods (especially if accompanied by symptoms like severe pain, unusually heavy bleeding, or cycles shorter than 21 days or longer than 35 days) should be discussed with a healthcare provider. Conditions like PCOS, thyroid disorders, or endometriosis might be responsible and benefit from treatment."
    },
    {
      id: 5,
      myth: "Using tampons means you lose your virginity",
      reality: "Using tampons has nothing to do with virginity. Virginity is a social and cultural concept, not a medical one, and it's not determined by whether the hymen is intact. The hymen is a thin, flexible membrane that partially covers the vaginal opening and can stretch or tear for many reasons, including physical activity, sports, or using tampons. Many people are born with very small hymens or none at all. Using tampons is a personal choice and a safe way to manage menstrual flow. It's important to use the right absorbency for your flow and to change tampons regularly to prevent rare but serious conditions like Toxic Shock Syndrome."
    },
    {
      id: 6,
      myth: "Period blood is dirty or toxic",
      reality: "Menstrual blood is not dirty, toxic, or impure. It consists of blood, tissue from the uterine lining, and mucus from the cervix. This is a normal, healthy part of the reproductive cycle. The uterine lining builds up each month in preparation for a potential pregnancy; when pregnancy doesn't occur, this lining is shed through menstruation. The stigma around menstrual blood has historical and cultural roots but lacks scientific basis. In fact, menstrual blood is generally sterile until it exits the body. Understanding that periods are a natural biological process helps combat harmful taboos and discrimination that affect people who menstruate around the world."
    }
  ];

  const expertAdvice = [
    {
      id: 1,
      expert: "Dr. Sarah Johnson, OB/GYN",
      question: "What's considered a 'normal' period, and when should I be concerned?",
      answer: `A "normal" period varies widely from person to person, but generally falls within certain parameters. Most menstrual cycles last 21-35 days, with bleeding lasting 2-7 days. The average blood loss is about 30-40 ml per period.

      You should consult a healthcare provider if you experience:
      - Periods that consistently last longer than 7 days
      - Extremely heavy bleeding (soaking through a pad or tampon every hour for several consecutive hours)
      - Severe pain that interferes with daily activities
      - Consistently irregular cycles (if this is new for you)
      - Bleeding between periods
      - No periods for 3 months or more (if you're not pregnant, breastfeeding, or in perimenopause)
      - Significant changes in your typical pattern

      These symptoms could indicate conditions like fibroids, polyps, endometriosis, PCOS, or hormonal imbalances that benefit from medical evaluation. Remember that what's "normal" is individual, so significant changes to your personal pattern are often more important than comparing to general guidelines.`
    },
    {
      id: 2,
      expert: "Dr. Michael Chen, Endocrinologist",
      question: "How does stress affect my menstrual cycle?",
      answer: `Stress can significantly impact your menstrual cycle through its effects on the hypothalamic-pituitary-adrenal (HPA) axis, which plays a crucial role in regulating stress responses and reproductive hormones.

      When you're stressed, your body produces more cortisol and adrenaline, which can suppress the production of reproductive hormones like estrogen and progesterone. This hormonal disruption can lead to:
      - Delayed periods
      - Missed periods (secondary amenorrhea)
      - Irregular cycles
      - More severe PMS symptoms
      - Changes in flow and duration
      - Worsened menstrual pain

      Chronic stress can potentially contribute to long-term conditions like PCOS or functional hypothalamic amenorrhea, where periods stop completely.

      Managing stress through techniques like mindfulness, regular exercise, adequate sleep, and possibly cognitive behavioral therapy can help regulate your cycle. If stress is significantly affecting your periods, consider working with both a mental health professional and a healthcare provider to address both the stress and its physical manifestations.`
    },
    {
      id: 3,
      expert: "Aisha Patel, Registered Dietitian",
      question: "What dietary changes can help with menstrual cramps?",
      answer: `Dietary changes can significantly help manage menstrual cramps by reducing inflammation and supporting hormone balance:

      Anti-inflammatory foods are particularly beneficial:
      - Omega-3 rich foods like fatty fish, flaxseeds, and walnuts
      - Colorful fruits and vegetables, especially dark leafy greens
      - Turmeric and ginger, which have natural anti-inflammatory properties
      - Extra virgin olive oil

      Magnesium-rich foods can help relax muscles and reduce cramps:
      - Dark chocolate (70% cocoa or higher)
      - Nuts and seeds, especially almonds and pumpkin seeds
      - Legumes like beans and lentils
      - Whole grains

      It's also helpful to reduce:
      - Processed foods high in trans fats
      - Excessive sugar, which can increase inflammation
      - Alcohol, which can worsen cramps and disrupt hormone balance
      - Caffeine, which can increase tension and anxiety

      Staying hydrated is crucial, as dehydration can worsen cramps. Some people find relief with warm herbal teas like ginger or chamomile.

      Consider tracking your diet alongside your symptoms to identify specific triggers or helpful foods for your body, as individual responses can vary significantly.`
    },
    {
      id: 4,
      expert: "Dr. Fatima Rodriguez, Gynecologist",
      question: "How can I manage PCOS symptoms naturally?",
      answer: `Polycystic Ovary Syndrome (PCOS) can be managed through several natural approaches alongside medical treatment:

      Dietary modifications are foundational:
      - Focus on low-glycemic foods to manage insulin resistance
      - Emphasize anti-inflammatory foods like colorful vegetables, fruits, fatty fish, and olive oil
      - Increase fiber intake through whole grains, legumes, and vegetables
      - Consider a Mediterranean-style diet, which has shown benefits for PCOS

      Regular exercise is crucial for PCOS management:
      - Aim for at least 150 minutes of moderate activity weekly
      - Include both strength training and cardio
      - Even walking regularly can improve insulin sensitivity

      Stress management helps regulate hormones:
      - Practice mindfulness meditation or yoga
      - Prioritize adequate sleep (7-9 hours nightly)
      - Consider cognitive behavioral therapy if stress is significant

      Supplements that may help (consult your doctor before starting):
      - Inositol (myo-inositol and D-chiro-inositol)
      - Omega-3 fatty acids
      - Vitamin D (if deficient)
      - Magnesium

      Maintain a healthy weight if appropriate, as even a 5-10% weight reduction can improve symptoms significantly.

      Remember that PCOS is a complex condition requiring individualized care. Work with healthcare providers to develop a comprehensive management plan that may include both natural approaches and medical treatments when necessary.`
    },
    {
      id: 5,
      expert: "Dr. James Wilson, Reproductive Endocrinologist",
      question: "What causes severe PMS and PMDD, and what treatments are available?",
      answer: `Severe PMS and Premenstrual Dysphoric Disorder (PMDD) are caused by complex interactions between hormonal fluctuations and brain chemistry. While the exact mechanisms aren't fully understood, research suggests that people with severe PMS or PMDD don't have abnormal hormone levels but rather an heightened sensitivity to normal hormonal changes.

      Contributing factors may include:
      - Genetics (family history of PMS/PMDD)
      - Altered serotonin function during the luteal phase
      - History of trauma or chronic stress
      - Nutritional deficiencies
      - Underlying mood disorders

      Treatment options range from lifestyle modifications to medical interventions:

      Lifestyle approaches:
      - Regular exercise (30+ minutes daily)
      - Anti-inflammatory diet rich in omega-3s, complex carbohydrates, and calcium
      - Stress reduction techniques like mindfulness meditation
      - Improved sleep hygiene
      - Reducing caffeine, alcohol, and sodium

      Supplements (consult with healthcare provider):
      - Calcium (1200mg daily)
      - Vitamin B6 (up to 100mg daily)
      - Magnesium (200-400mg daily)
      - Chasteberry (Vitex)

      Medical treatments:
      - Selective Serotonin Reuptake Inhibitors (SSRIs) - first-line treatment for PMDD
      - Hormonal contraceptives to suppress ovulation
      - Diuretics for severe bloating
      - GnRH agonists for severe cases (short-term use)
      - Cognitive Behavioral Therapy

      The most effective approach often combines lifestyle modifications with appropriate medical treatment. Working with healthcare providers who specialize in women's health or reproductive psychiatry can help develop a personalized treatment plan.`
    }
  ];

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const toggleMyth = (id) => {
    setExpandedMyth(expandedMyth === id ? null : id);
  };

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="educational-content">
      <h1>Menstrual Health Education</h1>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'articles' ? 'active' : ''}`} 
          onClick={() => setActiveTab('articles')}
        >
          Articles & Blogs
        </button>
        <button 
          className={`tab ${activeTab === 'myths' ? 'active' : ''}`} 
          onClick={() => setActiveTab('myths')}
        >
          Myth Busting
        </button>
        <button 
          className={`tab ${activeTab === 'expert' ? 'active' : ''}`} 
          onClick={() => setActiveTab('expert')}
        >
          Expert Advice
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'articles' && (
          <div className="articles-section">
            <p className="section-intro">
              Expand your knowledge about menstrual health with our expert-curated articles covering various aspects of your cycle, hormonal balance, and overall wellbeing.
            </p>
            
            <div className="category-filters">
              <button className="category-filter active">All</button>
              <button className="category-filter">Menstrual Health</button>
              <button className="category-filter">Hormonal Balance</button>
              <button className="category-filter">Diet</button>
              <button className="category-filter">Exercise</button>
              <button className="category-filter">Mental Health</button>
            </div>

            <div className="articles-grid">
              {articles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} /> {/* Add image here */}
                    <span className="article-category">{article.category}</span>
                  </div>
                  <div className="article-info">
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <button 
                      className="read-more" 
                      onClick={() => toggleArticle(article.id)}
                    >
                      {expandedArticle === article.id ? 'Read Less' : 'Read More'}
                    </button>
                    
                    {expandedArticle === article.id && (
                      <div className="article-content">
                        <p>{article.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'myths' && (
          <div className="myths-section">
            <p className="section-intro">
              Let's separate fact from fiction. Here we debunk common myths about menstruation that have been perpetuated through generations.
            </p>
            
            <div className="myths-list">
              {myths.map(item => (
                <div key={item.id} className="myth-item">
                  <div 
                    className="myth-header" 
                    onClick={() => toggleMyth(item.id)}
                  >
                    <h3>Myth: {item.myth}</h3>
                    <span className={`expand-icon ${expandedMyth === item.id ? 'expanded' : ''}`}>+</span>
                  </div>
                  
                  {expandedMyth === item.id && (
                    <div className="myth-reality">
                      <h4>Reality:</h4>
                      <p>{item.reality}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'expert' && (
          <div className="expert-section">
            <p className="section-intro">
              Our panel of healthcare professionals answers your most pressing questions about menstrual health and related concerns.
            </p>
            
            <div className="expert-questions">
              {expertAdvice.map(item => (
                <div key={item.id} className="expert-item">
                  <div 
                    className="expert-question" 
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <div className="expert-header">
                      <h3>{item.question}</h3>
                      <span className="expert-name">{item.expert}</span>
                    </div>
                    <span className={`expand-icon ${expandedQuestion === item.id ? 'expanded' : ''}`}>+</span>
                  </div>
                  
                  {expandedQuestion === item.id && (
                    <div className="expert-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="ask-expert">
              <h3>Have a Question?</h3>
              <p>Submit your menstrual health questions to our panel of experts.</p>
              <form className="question-form">
                <textarea placeholder="Type your question here..."></textarea>
                <button type="submit">Submit Question</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalContent;