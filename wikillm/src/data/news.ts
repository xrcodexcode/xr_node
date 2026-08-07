import type { NewsItem, OnThisDayItem, DidYouKnowItem } from '../types';

export const IN_THE_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Breakthrough in Room-Temperature Quantum Coherence',
    snippet: 'Physicists achieve stable qubit superposition in diamond nitrogen-vacancy centers at room temperature for over 1.2 seconds.',
    date: 'August 6, 2026',
    category: 'Physics',
    articleId: 'quantum-computing'
  },
  {
    id: 'news-2',
    title: 'Autonomous AI Proves Decades-Old Topology Conjecture',
    snippet: 'A neuro-symbolic reasoning model autonomously generates a 400-page verified proof in four-dimensional manifold geometry.',
    date: 'August 5, 2026',
    category: 'Mathematics & AI',
    articleId: 'agi'
  },
  {
    id: 'news-3',
    title: 'CRISPR In-Vivo Gene Therapy Cures Rare Metabolic Condition',
    snippet: 'Clinical trials demonstrate 100% remission in patients treated with non-viral lipid nanoparticle CRISPR delivery.',
    date: 'August 4, 2026',
    category: 'Medicine',
    articleId: 'crispr'
  },
  {
    id: 'news-4',
    title: 'James Webb Space Telescope Captures Earliest Population III Star Clusters',
    snippet: 'Astronomers detect primordial metal-free star formation signatures at redshift z=14.2.',
    date: 'August 3, 2026',
    category: 'Astrophysics',
    articleId: 'astrophysics'
  }
];

export const ON_THIS_DAY: OnThisDayItem[] = [
  {
    year: '1974',
    event: 'French high-wire artist Philippe Petit performs an unauthorized tightrope walk between the Twin Towers of the World Trade Center in New York City.'
  },
  {
    year: '1942',
    event: 'Allied forces launch Operation Watchtower with landings on Guadalcanal, initiating the Guadalcanal Campaign in WWII.'
  },
  {
    year: '1782',
    event: 'General George Washington establishes the Badge of Military Merit, predecessor of the modern Purple Heart.'
  },
  {
    year: '1609',
    event: 'Galileo Galilei demonstrates his first astronomical telescope to Venetian lawmakers.',
    articleLink: 'astrophysics'
  }
];

export const DID_YOU_KNOW: DidYouKnowItem[] = [
  {
    fact: '... that **Transformer Neural Networks** use self-attention matrices to process all words in a sentence simultaneously rather than one by one?',
    articleLink: 'neural-architecture'
  },
  {
    fact: '... that the human brain contains approximately **86 billion neurons** and consumes 20% of the body\'s total metabolic energy?',
    articleLink: 'neuroscience'
  },
  {
    fact: '... that a **Supermassive Black Hole** with 4 million solar masses resides at the center of our Milky Way galaxy in the region known as Sagittarius A*?',
    articleLink: 'astrophysics'
  },
  {
    fact: '... that **CRISPR-Cas9** was originally discovered as an adaptive immune system used by bacteria to fight off invading viruses?',
    articleLink: 'crispr'
  }
];

export const PORTAL_CATEGORIES = [
  { name: 'Artificial Intelligence', icon: 'Cpu', color: 'from-blue-500 to-indigo-600', count: '14,200 articles' },
  { name: 'Physics & Astronomy', icon: 'Atom', color: 'from-purple-500 to-pink-600', count: '38,900 articles' },
  { name: 'Biology & Medicine', icon: 'Dna', color: 'from-emerald-500 to-teal-600', count: '45,100 articles' },
  { name: 'History & Civilizations', icon: 'Landmark', color: 'from-amber-500 to-orange-600', count: '62,400 articles' },
  { name: 'Art & Philosophy', icon: 'Palette', color: 'from-rose-500 to-red-600', count: '29,800 articles' },
  { name: 'Climate & Energy', icon: 'Zap', color: 'from-cyan-500 to-blue-600', count: '21,500 articles' }
];
