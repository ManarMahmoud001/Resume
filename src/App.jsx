import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import {
  Code,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  ChevronRight,
  ChevronLeft,
  Download,
  ArrowUpRight,
  Megaphone,
  Terminal
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('/marketing') || hash.includes('#marketing')) return 'marketing';
    if (path.includes('/dev') || hash.includes('#dev')) return 'dev';
    return 'all';
  });

  const [activeCarouselIdx, setActiveCarouselIdx] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/marketing') || hash.includes('#marketing')) setActiveTab('marketing');
      else if (path.includes('/dev') || hash.includes('#dev')) setActiveTab('dev');
      else setActiveTab('all');
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
    const newHash = tab === 'all' ? '#overview' : `#${tab}`;
    window.history.pushState(null, '', newHash);
  };

  const dashboardScreenshots = [
    {
      title: 'Performance',
      subtitle: 'Messaging conversations started',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '171' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.29' },
        { label: 'Views', value: '24,953' },
        { label: 'Viewers', value: '11,269' }
      ],
      activities: [
        { label: 'Video plays', val: '22930', width: '100%' },
        { label: 'Post engagements', val: '8619', width: '38%' },
        { label: 'Link clicks', val: '584', width: '8%' },
        { label: 'Messaging conversations started', val: '171', width: '3%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$0.00 spent over 37 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '298' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.29' },
        { label: 'Views', value: '48,175' },
        { label: 'Viewers', value: '10,582' }
      ],
      activities: [
        { label: 'Post engagements', val: '12464', width: '100%' },
        { label: '3-second video plays', val: '11526', width: '92%' },
        { label: 'Link clicks', val: '815', width: '10%' },
        { label: 'Messaging conversations started', val: '299', width: '4%' }
      ]
    },
    {
      title: 'Advertising summary',
      subtitle: 'Glory Ads spent $270.06 on 10 ads in the last 30 days.',
      meta: 'Last 30 days: Aug 12, 2026 - Sep 10, 2026',
      cards: [
        { label: 'Views', value: '274.6K', change: '179.4%' },
        { label: 'Viewers', value: '119.6K', change: '389%' },
        { label: 'Post engagements', value: '29,345', change: '100%' }
      ],
      activities: []
    },
    {
      title: 'Advertising summary',
      subtitle: 'Glory Ads spent $810.11 on 15 ads in the last 60 days.',
      meta: 'Last 60 days: Jul 13, 2026 - Sep 10, 2026',
      cards: [
        { label: 'Views', value: '1.5M', change: '82.5%' },
        { label: 'Viewers', value: '502.7K', change: '43.3%' },
        { label: 'Post engagements', value: '121.2K', change: '100%' }
      ],
      activities: []
    },
    {
      title: 'Performance overview',
      subtitle: 'Messaging conversations started',
      meta: 'Day',
      cards: [
        { label: 'Messaging conversations started', value: '800' },
        { label: 'Per Messaging Conversation Started', value: '$0.13' },
        { label: 'Amount spent', value: '$103.37' }
      ],
      activities: []
    },
    {
      title: 'Performance',
      subtitle: '$17.94 spent over 10 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '44' },
        { label: 'Cost per Messaging Conversation Started', value: '--' },
        { label: 'Views', value: '10,056' },
        { label: 'Viewers', value: '7,420' }
      ],
      activities: [
        { label: '3-second video plays', val: '2128', width: '100%' },
        { label: 'Link clicks', val: '305', width: '15%' },
        { label: 'Messaging conversations started', val: '44', width: '4%' },
        { label: 'Post reactions', val: '17', width: '2%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$55.76 spent over 16 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '146' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.38' },
        { label: 'Views', value: '34,434' },
        { label: 'Viewers', value: '15,459' }
      ],
      activities: [
        { label: 'Video plays', val: '31317', width: '100%' },
        { label: 'Post engagements', val: '11443', width: '36%' },
        { label: 'Link clicks', val: '428', width: '5%' },
        { label: 'Messaging conversations started', val: '146', width: '2%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$0.00 spent over 22 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '115' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.27' },
        { label: 'Views', value: '22,384' },
        { label: 'Viewers', value: '8,851' }
      ],
      activities: [
        { label: 'Post engagements', val: '5032', width: '100%' },
        { label: '3-second video plays', val: '4658', width: '92%' },
        { label: 'Link clicks', val: '318', width: '8%' },
        { label: 'Messaging conversations started', val: '116', width: '3%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$28.40 spent over 15 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '94' },
        { label: 'Cost per Messaging Conversation Started', value: '--' },
        { label: 'Views', value: '18,458' },
        { label: 'Viewers', value: '11,185' }
      ],
      activities: [
        { label: '3-second video plays', val: '3606', width: '100%' },
        { label: 'Link clicks', val: '413', width: '12%' },
        { label: 'Messaging conversations started', val: '94', width: '4%' },
        { label: 'Post reactions', val: '22', width: '2%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$46.90 spent over 16 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '211' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.22' },
        { label: 'Views', value: '32,173' },
        { label: 'Viewers', value: '9,513' }
      ],
      activities: [
        { label: 'Post engagements', val: '636', width: '100%' },
        { label: 'Link clicks', val: '527', width: '83%' },
        { label: 'Messaging conversations started', val: '211', width: '33%' },
        { label: 'Post reactions', val: '22', width: '4%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$35.72 spent over 25 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '121' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.30' },
        { label: 'Views', value: '15,709' },
        { label: 'Viewers', value: '6,378' }
      ],
      activities: [
        { label: 'Video plays', val: '12782', width: '100%' },
        { label: 'Post engagements', val: '3698', width: '29%' },
        { label: 'Link clicks', val: '415', width: '5%' },
        { label: 'Messaging conversations started', val: '121', width: '2%' }
      ]
    },
    {
      title: 'Performance',
      subtitle: '$19.89 spent over 10 days.',
      meta: 'Lifetime',
      cards: [
        { label: 'Messaging conversations started', value: '130' },
        { label: 'Cost per Messaging Conversation Started', value: '$0.15' },
        { label: 'Views', value: '14,308' },
        { label: 'Viewers', value: '7,555' }
      ],
      activities: [
        { label: 'Video plays', val: '12275', width: '100%' },
        { label: 'Post engagements', val: '4584', width: '37%' },
        { label: 'Link clicks', val: '494', width: '5%' },
        { label: 'Messaging conversations started', val: '130', width: '2%' }
      ]
    }
  ];

  const nextCarousel = () => {
    setActiveCarouselIdx((prev) => (prev + 1) % dashboardScreenshots.length);
  };

  const prevCarousel = () => {
    setActiveCarouselIdx((prev) => (prev - 1 + dashboardScreenshots.length) % dashboardScreenshots.length);
  };

  const projects = [
    {
      title: 'Done Shop',
      category: 'marketing',
      tags: ['Marketing Strategy', 'Paid Ads', 'Influencers'],
      desc: 'Full marketing roadmap end-to-end including offline initiatives, digital growth, full-funnel ad campaigns, and influencer collaborations.',
      link: '#',
      image: 'assets/img/works/work01.png'
    },
    {
      title: 'Glory Gym Jordan',
      category: 'marketing',
      tags: ['Fitness Campaign', 'Lead Acquisition', 'Content Calendar'],
      desc: 'Content strategy and paid advertising campaigns driving membership leads and brand growth across Jordan.',
      link: '#',
      image: 'assets/img/works/9.jpg'
    },
    {
      title: 'Octopus DXB',
      category: 'dev',
      tags: ['Corporate Web Development', 'Dubai Business', 'Responsive UX'],
      desc: 'Business web platform tailored for Dubai enterprise operations and services showcase.',
      link: 'https://octopus-dxb.com/',
      image: 'assets/img/works/work01.png'
    },
    {
      title: 'True Dream',
      category: 'dev',
      tags: ['E-Commerce Platform', 'WordPress / Web', 'UI/UX'],
      desc: 'Custom web portal built for digital presence, lead capture, and brand representation.',
      link: 'https://truedream1.com/',
      image: 'assets/img/works/store.png'
    },
    {
      title: 'Topmix Real Estate',
      category: 'dev',
      tags: ['Real Estate Portal', 'Lead Gen', 'Property Showcase'],
      desc: 'Property listing and real estate web application designed for fast property discovery.',
      link: 'https://topmix-realstate.com/',
      image: 'assets/img/works/14.png'
    },
    {
      title: 'Cindar Egypt',
      category: 'dev',
      tags: ['Commercial Website', 'Web Development', 'Brand Strategy'],
      desc: 'Corporate website built for Egyptian commercial operations with optimized performance.',
      link: 'https://cindar-eg.com/',
      image: 'assets/img/works/9.jpg'
    },
    {
      title: 'Al Nisr Al Jawy Travel',
      category: 'dev',
      tags: ['Travel Platform', 'Booking Portal', 'Web App'],
      desc: 'Tourism and flight booking agency web system created for trip management and itinerary inquiries.',
      link: 'https://alnisraljawy-travel.com/',
      image: 'assets/img/works/work01.png'
    },
    {
      title: 'True Dream Travel',
      category: 'dev',
      tags: ['Travel Portal', 'Custom Web', 'SEO'],
      desc: 'Dedicated travel agency platform supporting trip packages and booking requests.',
      link: 'https://true-dreamtravel.com/',
      image: 'assets/img/works/store.png'
    },
    {
      title: 'Secret for AI Website',
      category: 'dev',
      tags: ['Web Design', 'React / HTML', 'Agency Site'],
      desc: 'High-performance web agency platform tailored for AI services and client showcase.',
      link: 'https://www.secret4ai.com/',
      image: 'assets/img/works/work01.png'
    },
    {
      title: 'Alex Store',
      category: 'dev',
      tags: ['Webdesign', 'E-Commerce', 'Frontend'],
      desc: 'Custom e-commerce storefront for consultancy and commercial services.',
      link: 'https://alex-consultancy.com/',
      image: 'assets/img/works/store.png'
    },
    {
      title: 'Tamkeen Egypt',
      category: 'dev',
      tags: ['Webdesign', 'CMS', 'Responsive'],
      desc: 'NGO platform built for seamless content management and public engagement.',
      link: 'https://tamkeen-egypt.org/',
      image: 'assets/img/works/9.jpg'
    },
    {
      title: 'Ertqi Mobile App',
      category: 'dev',
      tags: ['Mobile App', 'Flutter / Android', 'Play Store'],
      desc: 'Mobile application published on Google Play Store with interactive user features.',
      link: 'https://play.google.com/store/apps/details?id=co.median.android.nwrxbj&pcampaignid=web_share',
      image: 'assets/img/works/ertqi.png'
    },
    {
      title: 'Secret Online Store',
      category: 'dev',
      tags: ['WordPress', 'PHP', 'WooCommerce'],
      desc: 'Online store with payment integration and product catalog management.',
      link: 'https://store.secret4ai.com/',
      image: 'assets/img/works/14.png'
    },
  ];

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'marketing') return p.category === 'marketing';
    if (activeTab === 'dev') return p.category === 'dev';
    return true;
  });

  const experiences = [
    {
      role: 'Marketing Manager',
      company: 'Done Shop',
      period: 'Aug 2025 to Present',
      type: 'marketing',
      points: [
        'Leading full marketing roadmap end-to-end: planning, content strategy, and campaign execution.',
        'Managing full-funnel paid ad campaigns across platforms from budget allocation to performance optimization.',
        'Directing influencer collaborations and managing lead generation pipelines.'
      ]
    },
    {
      role: 'Marketing Manager',
      company: 'Glory Gym (Jordan)',
      period: 'Aug 2025 to Present',
      type: 'marketing',
      points: [
        'Owning full marketing plan and content calendar for Jordan fitness brand to drive membership leads.',
        'Planning and managing paid advertising campaigns across social platforms.',
        'Tracking performance analytics across channels and refining strategy based on ROI results.'
      ]
    },
    {
      role: 'Marketing Agency Manager',
      company: 'Secret for AI',
      period: 'Dec 2023 to Jul 2025',
      type: 'marketing',
      points: [
        'Managed marketing agency operations, client deliverables, and growth campaigns.',
        'Designed social media assets in Canva and Photoshop to support brand identity.'
      ]
    },
    {
      role: 'Web Development Lead',
      company: 'Secret for AI',
      period: 'Dec 2023 to Jul 2025',
      type: 'dev',
      points: [
        'Handled website development projects ensuring responsive UI and high performance.',
        'Architected custom web agency platform and client sites.'
      ]
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 to Present',
      type: 'dev',
      points: [
        'Built custom websites using HTML, CSS, JavaScript, PHP, and WordPress.',
        'Customized themes and plugins to deliver responsive web solutions.'
      ]
    },
    {
      role: 'Freelance Digital Marketer',
      company: 'Self-Employed',
      period: '2023 to Present',
      type: 'marketing',
      points: [
        'Delivered digital marketing services including campaign planning, paid ads, and brand growth.',
        'Executed full-funnel customer acquisition strategies.'
      ]
    }
  ];

  const filteredExperiences = experiences.filter(exp => {
    if (activeTab === 'marketing') return exp.type === 'marketing';
    if (activeTab === 'dev') return exp.type === 'dev';
    return true;
  });

  const currentDashboard = dashboardScreenshots[activeCarouselIdx];

  const marketingBrands = ['Done Shop', 'Glory Gym Jordan', 'Secret for AI'];
  const devBrands = ['Secret for AI', 'Octopus DXB', 'Topmix Real Estate', 'Cindar Egypt', 'Al Nisr Al Jawy', 'True Dream'];
  const allBrands = ['Done Shop', 'Glory Gym Jordan', 'Secret for AI', 'Octopus DXB', 'Topmix', 'Cindar Egypt'];

  const displayedBrands = activeTab === 'marketing' ? marketingBrands : activeTab === 'dev' ? devBrands : allBrands;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans-body antialiased selection:bg-amber-100 selection:text-stone-900 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-stone-900 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-stone-900 text-[#FAF8F5] flex items-center justify-center font-bold text-sm font-sans-body tracking-wider shadow-sm cursor-pointer"
            >
              ME
            </motion.div>
            <div>
              <span className="font-sans-body font-bold text-stone-900 text-lg block leading-none tracking-tight">Manar Mahmoud</span>
              <span className="text-xs text-stone-600 font-sans-body font-medium tracking-normal mt-1 block">Digital Marketing & Web Development</span>
            </div>
          </div>

          {/* Persona Switcher */}
          <div className="bg-stone-200/60 p-1.5 rounded-full flex items-center gap-1 font-sans-body text-xs font-bold border border-stone-300/60">
            {['all', 'marketing', 'dev'].map((t) => (
              <button
                key={t}
                onClick={() => changeTab(t)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-200 uppercase tracking-wider ${
                  activeTab === t ? 'text-[#FAF8F5]' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {activeTab === t && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-stone-900 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{t === 'all' ? 'Overview' : t === 'marketing' ? 'Marketing' : 'Development'}</span>
              </button>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-[#FAF8F5] px-6 py-2.5 rounded-full text-xs font-sans-body font-bold tracking-wider uppercase transition shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 border-b border-stone-200/80 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif-display text-stone-900 leading-[1.05] tracking-tight italic"
                >
                  {activeTab === 'marketing' && 'Digital Marketing Manager owning full-funnel acquisition.'}
                  {activeTab === 'dev' && 'Web Developer crafting high-performance digital platforms.'}
                  {activeTab === 'all' && 'Bridging digital marketing strategy with technical web execution.'}
                </motion.h1>
              </AnimatePresence>

              <p className="text-xl sm:text-2xl text-stone-700 font-serif leading-relaxed max-w-3xl font-normal">
                Computer Science and AI graduate managing dual-company marketing roadmaps across Egypt and Jordan while writing clean, responsive code.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2 font-sans-body">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="bg-stone-900 hover:bg-stone-800 text-[#FAF8F5] font-bold px-8 py-4 rounded-full text-sm tracking-wider uppercase transition flex items-center gap-3 shadow-sm"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://drive.google.com/file/d/1Ev5F_-B7YlaWj_kgQq8GxPPE3yNpc5Zi/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-stone-200/60 hover:bg-stone-200 text-stone-900 border border-stone-300/80 font-bold px-8 py-4 rounded-full text-sm tracking-wider uppercase transition flex items-center gap-3 shadow-xs"
                >
                  <Download className="w-4 h-4 text-stone-700" />
                  <span>Download CV</span>
                </motion.a>
              </div>

              {/* Brands */}
              <div className="pt-10 border-t border-stone-200/80 font-sans-body">
                <div className="text-xs uppercase font-bold text-stone-500 tracking-widest mb-4">
                  {activeTab === 'marketing' && 'Marketing Engagements'}
                  {activeTab === 'dev' && 'Development Projects'}
                  {activeTab === 'all' && 'Organizations & Clients'}
                </div>
                <motion.div layout className="flex flex-wrap items-center gap-3 text-sm font-bold text-stone-800">
                  {displayedBrands.map((b, bidx) => (
                    <motion.span
                      key={b}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: bidx * 0.05 }}
                      className="bg-stone-200/60 border border-stone-300/70 px-4 py-2 rounded-xl"
                    >
                      {b}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Side Card - Contextualized per Persona */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 font-sans-body"
            >
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <div className="pb-5 border-b border-stone-200/80">
                  <h3 className="font-sans-body font-bold text-stone-900 text-xl tracking-tight">Manar Mahmoud Elnoby</h3>
                  <p className="text-sm text-stone-600 font-medium mt-1">Cairo, Egypt</p>
                  <p className="text-sm text-stone-900 font-bold mt-1">B.S. Computer Science & AI</p>
                </div>

                <div className="space-y-4 text-sm font-sans-body">
                  <div className="flex items-center justify-between py-2 border-b border-stone-200/70 gap-4">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0">EXPERIENCE</span>
                    <span className="font-bold text-stone-900 text-base text-right">4+ Years</span>
                  </div>

                  {/* Show Marketing Scope on Marketing and Overview tabs */}
                  {(activeTab === 'marketing' || activeTab === 'all') && (
                    <div className="flex items-center justify-between py-2 border-b border-stone-200/70 gap-4">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0">MARKETING SCOPE</span>
                      <span className="font-bold text-stone-900 text-base text-right">2 Active Companies</span>
                    </div>
                  )}

                  {/* Show Web Projects on Dev and Overview tabs */}
                  {(activeTab === 'dev' || activeTab === 'all') && (
                    <div className="flex items-center justify-between py-2 gap-4">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0">WEB PROJECTS</span>
                      <span className="font-bold text-stone-900 text-base text-right">10+ Deployed</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Dashboards Carousel */}
      {(activeTab === 'marketing' || activeTab === 'all') && (
        <section className="py-20 bg-stone-100/60 border-b border-stone-200/80">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-sans-body font-bold tracking-widest text-stone-500 uppercase bg-stone-200/70 px-3 py-1 rounded-full border border-stone-300/80">
                  VERIFIED ANALYTICS
                </span>
                <h2 className="text-3xl font-sans-body font-bold text-stone-900 mt-2 tracking-tight">
                  Ad Campaign Performance
                </h2>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 font-sans-body">
                <button
                  onClick={prevCarousel}
                  className="p-2.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition shadow-xs"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-stone-700 font-bold px-2">
                  {activeCarouselIdx + 1} / {dashboardScreenshots.length}
                </span>
                <button
                  onClick={nextCarousel}
                  className="p-2.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition shadow-xs"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Recreated Dashboard Component matching Meta Ads screenshot UI exactly */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCarouselIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white text-[#1c2b36] rounded-2xl p-7 shadow-sm border border-stone-200 font-sans-body"
              >
                <div className="flex items-start justify-between pb-5 border-b border-stone-200 mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-[#1c2b36] flex items-center gap-1.5">
                      <span>{currentDashboard.title}</span>
                      <span className="text-stone-400 text-xs">ⓘ</span>
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 font-medium">{currentDashboard.subtitle}</p>
                  </div>
                  <div className="bg-slate-50 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 border border-slate-300/80 flex items-center gap-1">
                    <span>{currentDashboard.meta}</span>
                    <span className="text-xs">▼</span>
                  </div>
                </div>

                {/* Meta ad metric grid boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {currentDashboard.cards.map((c, cidx) => (
                    <div key={cidx} className="bg-[#f5f6f8] p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                      <div className="text-[11px] font-semibold text-stone-600 leading-tight">
                        {c.label} <span className="text-stone-400">ⓘ</span>
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900 font-sans-body tracking-tight">{c.value}</span>
                        {c.change && (
                          <span className="text-xs font-bold text-emerald-600">
                            ↑ {c.change}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Meta Activity Horizontal Bars */}
                {currentDashboard.activities.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Activity</div>
                    {currentDashboard.activities.map((bar, bidx) => (
                      <div key={bidx} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-slate-700">
                          <span>{bar.label}</span>
                          <span className="font-bold text-slate-900 font-mono">{bar.val}</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-sm overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: bar.width }}
                            transition={{ duration: 0.5, delay: bidx * 0.08 }}
                            className="h-full bg-[#008080] rounded-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-20 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans-body font-bold tracking-widest text-stone-500 uppercase">Background</span>
              <h2 className="text-4xl font-serif-display font-bold text-stone-900 mt-2 leading-tight">
                Computer Science rigor meets acquisition strategy.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-stone-800 text-lg leading-relaxed font-serif font-normal">
                Managing full-scale marketing operations for multiple companies simultaneously across Egypt and Jordan requires systematic clarity. My background in CS & AI informs every paid acquisition campaign, content strategy, and web application I deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-stone-100/50 border-b border-stone-200/80 font-sans-body">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">Capabilities</span>
            <h2 className="text-4xl font-serif-display font-bold text-stone-900 mt-1">Skills & Tooling</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(activeTab === 'marketing' || activeTab === 'all') && (
              <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-stone-900" />
                  <h3 className="font-bold text-stone-900 text-xl">Digital Marketing Operations</h3>
                </div>
                <ul className="space-y-3 text-sm text-stone-800 font-semibold pt-2">
                  {['Full-Funnel Paid Advertising & Budgeting', 'Marketing Strategy & Content Calendars', 'Lead Acquisition Pipelines & Influencer Campaigns', 'Performance Analytics & ROI Tracking', 'Creative Direction (Canva, Photoshop)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-stone-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(activeTab === 'dev' || activeTab === 'all') && (
              <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-stone-900" />
                  <h3 className="font-bold text-stone-900 text-xl">Web & Software Engineering</h3>
                </div>
                <ul className="space-y-3 text-sm text-stone-800 font-semibold pt-2">
                  {['HTML5, CSS3, JavaScript (ES6+), ReactJS', 'WordPress Custom Themes & Plugins', 'PHP & Core Backend Architecture', 'Flutter Mobile App Development', 'Performance Optimization (NTI Certified)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-stone-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-sans-body font-bold tracking-widest text-stone-500 uppercase">Selected Work</span>
            <h2 className="text-4xl font-serif-display font-bold text-stone-900 mt-1">Shipped Projects & Campaigns</h2>
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className={`group rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xs border ${
                    p.category === 'marketing'
                      ? 'bg-[#FAF8F5] border-indigo-200 hover:border-indigo-500'
                      : 'bg-[#FAF8F5] border-cyan-200 hover:border-cyan-600'
                  }`}
                >
                  <div className="space-y-3 font-sans-body">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 ${
                        p.category === 'marketing'
                          ? 'bg-indigo-900 text-white'
                          : 'bg-cyan-900 text-white'
                      }`}>
                        {p.category === 'marketing' ? (
                          <>
                            <Megaphone className="w-3.5 h-3.5" />
                            <span>Marketing Campaign</span>
                          </>
                        ) : (
                          <>
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Web Dev Architecture</span>
                          </>
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">{p.title}</h3>

                    <p className="text-sm font-sans-body font-normal text-stone-700 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-5 font-sans-body space-y-3 border-t border-stone-200/80 mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t, tid) => (
                        <span
                          key={tid}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-200/60 text-stone-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider hover:text-amber-800 transition pt-1"
                      >
                        <span>Visit live site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-stone-100/50 border-b border-stone-200/80 font-sans-body">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">Career Track</span>
            <h2 className="text-4xl font-serif-display font-bold text-stone-900 mt-1">Experience</h2>
          </div>

          <div className="space-y-6">
            {filteredExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg text-white ${exp.type === 'marketing' ? 'bg-indigo-900' : 'bg-cyan-900'}`}>
                      {exp.type === 'marketing' ? <BarChart3 className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">{exp.role}</h3>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-stone-100 text-stone-800 border border-stone-200">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm font-bold text-stone-600 pl-11">{exp.company}</div>

                <ul className="space-y-2 pt-2 text-sm text-stone-800 font-sans-body font-normal leading-relaxed pl-11 border-t border-stone-200/80 mt-3">
                  {exp.points.map((pt, pidx) => (
                    <li key={pidx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-stone-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl font-serif-display font-bold text-stone-900 tracking-tight">Let's connect</h2>
          <p className="text-stone-700 font-serif text-xl max-w-xl mx-auto">
            Available for marketing strategy, paid ad performance management, or web engineering opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm font-sans-body font-bold">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:mahmoudmanar224@gmail.com"
              className="flex items-center gap-3 text-stone-900 bg-white px-7 py-3.5 rounded-full border border-stone-200 hover:bg-stone-50 transition shadow-xs"
            >
              <Mail className="w-4 h-4 text-stone-900" />
              <span>mahmoudmanar224@gmail.com</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+201090775948"
              className="flex items-center gap-3 text-stone-900 bg-white px-7 py-3.5 rounded-full border border-stone-200 hover:bg-stone-50 transition shadow-xs"
            >
              <Phone className="w-4 h-4 text-stone-900" />
              <span>+20 109 077 5948</span>
            </motion.a>
            <div className="flex items-center gap-3 text-stone-900 bg-white px-7 py-3.5 rounded-full border border-stone-200 shadow-xs">
              <MapPin className="w-4 h-4 text-stone-900" />
              <span>Cairo / Alexandria, Egypt</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {[
              { href: "https://github.com/ManarMahmoud001", Icon: Github },
              { href: "https://www.linkedin.com/in/manar-mahmoud-b87034243/", Icon: Linkedin },
              { href: "https://www.facebook.com/manar.mahmoud.16144606", Icon: Facebook }
            ].map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white rounded-full text-stone-900 hover:bg-stone-50 border border-stone-200 transition shadow-xs"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-sans-body pt-8 border-t border-stone-200/80 font-medium uppercase tracking-wider">
            © 2026 Manar Mahmoud Elnoby. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
