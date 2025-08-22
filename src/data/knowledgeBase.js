import { programsData } from '@/components/programs/data';
import { newsData } from '@/data/newsData';
import { successStories } from '@/data/successStoriesData';

const knowledgeBase = [
  // --- General & About Us ---
  {
    keywords: ['hello', 'hi'],
    response: "Hello there! I'm the Dzikwa Trust assistant. How can I help you today?",
  },
  {
    keywords: ['dzikwa trust', 'about', 'who are you', 'mission', 'vision', 'values', 'history', 'story'],
    response: "Dzikwa Trust, founded in 2009, is a non-profit organization dedicated to empowering communities in Zimbabwe. Our mission is to provide comprehensive education, wellbeing programs, and sustainable development initiatives. Our vision is a Zimbabwe where every individual can reach their full potential. Our core values are Integrity, Empowerment, Inclusivity, and Sustainability."
  },
  {
    keywords: ['journey', 'timeline', 'founded', 'established'],
    response: "Dzikwa Trust was founded in 2009. We opened our first education center in 2012, expanded to wellbeing programs in 2015, launched the Edu4Talent initiative in 2018, and started reforestation projects in 2024 to ensure a sustainable future."
  },
  {
    keywords: ['team', 'staff', 'who runs', 'director'],
    response: "Our dedicated team is led by Executive Director Dr. Sarah Mukamuri, Programs Manager James Chikwanha, and Community Outreach Coordinator Grace Mutindi. They are committed professionals creating positive change."
  },
  {
    keywords: ['partners', 'work with'],
    response: "We collaborate with esteemed partners like UNICEF Zimbabwe, World Vision, Save the Children, and the Ministry of Education to maximize our impact."
  },
  {
    keywords: ['governance', 'transparent', 'finances'],
    response: "We uphold the highest standards of financial transparency and accountability. 88% of funding goes directly to our programs, with only 12% for administrative costs. Our annual reports are publicly available."
  },

  // --- Contact & Donations ---
  {
    keywords: ['contact', 'get in touch', 'address', 'phone', 'email', 'volunteer'],
    response: "We'd love to hear from you! You can find all our contact details, a contact form, and information about volunteering on our 'Contact' page. Our main office is in Harare, Zimbabwe."
  },
  {
    keywords: ['donate', 'support', 'give', 'contribution'],
    response: "That's wonderful! You can make a secure donation by visiting our 'Donate' page. Every contribution, big or small, directly supports our programs in education, healthcare, and development."
  },

  // --- Programs ---
  {
    keywords: ['programs', 'what do you do', 'initiatives'],
    response: `We have several core program areas: ${programsData.map(p => p.title).join(', ')}. Which one are you interested in? You can ask about a specific program like 'Education' or 'Wellbeing'.`
  },
  ...programsData.map(program => ({
    keywords: [program.title.toLowerCase(), program.id],
    response: `${program.title}: ${program.description} It includes sub-programs like: ${program.subPrograms.map(sp => sp.title).join(', ')}. For more details, please visit the 'Programs' page or ask about a specific sub-program.`
  })),
  ...programsData.flatMap(p => p.subPrograms.map(subProgram => ({
    keywords: [subProgram.title.toLowerCase(), subProgram.slug],
    response: `${subProgram.title}: ${subProgram.details}`
  }))),

  // --- News ---
  {
    keywords: ['news', 'latest', 'updates', 'events', 'newsletter'],
    response: `You can find all the latest news, event updates, and our newsletters on the 'News' page. The most recent headlines are: ${newsData.slice(0, 3).map(n => n.title).join('; ')}.`
  },
  ...newsData.map(news => ({
    keywords: news.title.toLowerCase().split(' '),
    response: `Regarding "${news.title}": ${news.summary} This was published on ${new Date(news.date).toLocaleDateString()}. For the full story, please visit the 'News' page.`
  })),

  // --- Success Stories ---
  {
    keywords: ['success stories', 'impact', 'beneficiaries', 'alumni'],
    response: `We are proud of our beneficiaries! People like ${successStories.map(s => s.name).join(', ')} have transformed their lives through our programs. You can read their full stories on our homepage or by asking about a specific person.`
  },
  ...successStories.map(story => ({
    keywords: [story.name.toLowerCase(), ...story.name.toLowerCase().split(' ')],
    response: `Here is the story of ${story.name}: ${story.fullStory}`
  })),
  
  // --- Gallery & Backup ---
  {
    keywords: ['gallery', 'photos', 'images', 'pictures'],
    response: "You can see a visual story of our work in the 'Gallery'. The link is in the footer of our website. It features photos from our programs in Education, Sports, Arts & Culture, and more."
  },
  {
    keywords: ['backup', 'portal', 'admin'],
    response: "Access to the admin and backup portals is restricted to authorized personnel. If you are a staff member, please use the direct link provided to you."
  }
];

export const searchKnowledgeBase = (query) => {
  const lowerQuery = query.toLowerCase();
  let bestMatch = { score: 0, response: null };

  knowledgeBase.forEach(item => {
    let currentScore = 0;
    item.keywords.forEach(keyword => {
      if (lowerQuery.includes(keyword)) {
        currentScore += keyword.length; // Longer keywords get a higher score
      }
    });

    if (currentScore > bestMatch.score) {
      bestMatch = { score: currentScore, response: item.response };
    }
  });

  return bestMatch.response;
};