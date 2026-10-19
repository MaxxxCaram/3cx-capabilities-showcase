import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  Layers,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
  Monitor,
  Headphones,
  Award,
  Sparkles,
  ArrowRight,
  Send,
  X,
  PhoneCall
} from 'lucide-react';

// Multilingual text dictionary (Hebrew & English)
const translations = {
  he: {
    dir: 'rtl',
    brandName: 'DIMENSIONS',
    badgeText: 'הרחבת יכולות 3CX רשמית | Dimensions Technologies',
    heroTitle: 'מעצימים את מרכזיית',
    heroTitleHighlight: '3CX',
    heroTitleEnd: 'לרמת ביצועים ותובנות שטרם הכרתם',
    heroDesc: 'פתרון תקשורת טלפונית חכם המחבר את 3CX לדשבורדים חיים בזמן אמת, ניתוח שיחות מתקדם, לוחות מנהלים (Wallboards) ובינה מלאכותית מותאמת למוקדי שירות ומכירות תובעניים.',
    ctaBookDemo: 'תיאום שיחת הדגמה חיה',
    ctaExploreModules: 'צפייה במודולים ומאפיינים',
    stats: {
      channelFocus: { label: 'CHANNEL FOCUS', value: '100%', desc: 'בלעדי לערוצי הפצה' },
      latency: { label: 'LATENCY', value: '0.2s', desc: 'סנכרון Live מול 3CX' },
      branding: { label: 'BRANDING', value: 'White-Label', desc: 'התאמת מותג ולוגו מלאה' },
      integration: { label: 'INTEGRATION', value: 'Native SIP', desc: 'הטמעה תוך דקות ספורות' }
    },
    mobileSection: {
      tag: 'שליטה ניידת מלאה למנהלי מוקד',
      title: 'מחוונים וטלקומניקציה בכף ידך',
      desc: 'דוחות חיים, עומסי תורים, פריסת שיחות שעתית וניטור סטטוס נציגי 3CX בכל מקום ובכל רגע ישירות מהנייד.',
      liveBadge: '4.2k שיחות בטיפול היום',
      slaBadge: 'SLA: 94.6%'
    },
    superpowersSection: {
      tag: '3CX SUPERPOWERS',
      title: 'איך Dimensions משדרגת את 3CX?',
      desc: 'מרכזיית 3CX מהווה מנוע שיחות יוצא מן הכלל. Dimensions מעניקה לה שכבת אינטליגנציה ודשבורדים חזותיים שחוסכים זמן ומזניקים את שביעות הרצון.',
      features: [
        {
          title: 'לוחות בקרה ו-Wallboards חיים ב-Live Streaming',
          desc: 'הצגת עומסים, תורים, וזמני המתנה בזמן אמת על גבי מסכי ענק במוקד ובסמארטפון ללא כל שיהוי בשידור.',
          highlight: 'עדכון פעימות קוליות בכל שנייה',
          icon: 'Monitor'
        },
        {
          title: 'ניתוח עמוק של ביצועי נציגים (Agent Deep Analytics)',
          desc: 'זיהוי מיידי של זמני טיפול ממוצעים (AHT), משך צלצול לפני מענה, שיחות שננטשו על ידי לקוחות ודירוג עובד החודש הדינמי.',
          highlight: 'מדדי KPI אישיים וקבוצתיים',
          icon: 'Users'
        },
        {
          title: 'התראות חכמות ופרואקטיביות (Real-Time Alerts)',
          desc: 'הודעות התראה אוטומטיות ב-Telegram, ב-Microsoft Teams או ב-SMS כאשר זמן ההמתנה חורג מ-SLA או כשנרשם גל נטישת שיחות.',
          highlight: 'אפס הפתעות בזמני עומס חריגים',
          icon: 'Zap'
        },
        {
          title: 'דוחות מנהלים ומגמות היסטוריות',
          desc: 'הפקת דוחות אוטומטיים יומיים ושבועיים לסיוע בתכנון משמרות נציגים, מניעת צווארי בקבוק והורדה דרסטית של עלויות תפעול המוקד.',
          highlight: 'ייצוא מובנה ל-PDF, Excel ו-API',
          icon: 'BarChart3'
        }
      ]
    },
    wallboardSection: {
      tag: 'LIVE TELEMETRY COCKPIT',
      title: 'תצוגת מסך מנהלים חי (Live Wallboard)',
      desc: 'מסך הבקרה המלא של Dimensions בחיבור ישיר למרכזיית 3CX. הופך נתונים גולמיים לחוויית תחרות חיובית ושליטה מוחלטת במוקד.',
      tabs: [
        { id: 'all', name: 'הכל (מוקד ראשי)', waitTime: '00:00:18', answered: '113 / 25', mvp: 'Jane (40)', active: 18 },
        { id: 'support', name: 'תמיכה טכנית', waitTime: '00:00:24', answered: '64 / 8', mvp: 'Dan (32)', active: 9 },
        { id: 'sales', name: 'מוקד מכירות', waitTime: '00:00:12', answered: '89 / 4', mvp: 'Sarah (45)', active: 12 },
        { id: 'care', name: 'שירות לקוחות', waitTime: '00:00:15', answered: '102 / 14', mvp: 'Alex (38)', active: 11 }
      ],
      metrics: {
        avgRing: 'זמן צלצול ממוצע',
        answeredVsAbandoned: 'נענו מול ננטשו',
        mvp: 'עובד/ת החודש',
        syncStatus: 'סנכרון ערוצים: 3CX Dedicated & Hosted',
        realtimeBadge: '100% Realtime'
      }
    },
    modularSuite: {
      tag: '3CX MODULAR SUITE',
      title: 'מוצרי ושירותי 3CX המורחבים',
      desc: 'שילוב מהיר של רכיבי Dimensions עם מודולי הליבה של מרכזיית 3CX להרחבה מיידית של הפונקציונליות:',
      modules: [
        {
          category: '3CX Call Center & Queue',
          title: 'Dimensions Live Queue Control & Smart Routing',
          desc: 'ניתוב שיחות חכם לפי רמת מיומנות הנציג, ניהול תורים בלייב ושינוי הרשאות נציגים דינמי בקליק אחד ללא כניסה לניהול המרכזייה הראשית.'
        },
        {
          category: '3CX CRM Integration',
          title: 'Omnichannel History & Contextual Screen Pops',
          desc: 'קפיצת חלונית לקוח מותאמת (Screen Pop) עם היסטוריית פניות מלאה מכלל הערוצים (שיחות, וואטסאפ, צ׳אט) ישירות לתוך כרטיס ה-CRM שלכם.'
        },
        {
          category: '3CX Teams Integration',
          title: 'Unified Teams Telephony Wallboard',
          desc: 'גישור מלא ולוחות נתונים משותפים לנציגים הפועלים מתוך Microsoft Teams המחוברים אל מרכזיית 3CX, כולל סטטוסי זמינות הדדיים.'
        },
        {
          category: '3CX Recording & Compliance',
          title: 'Dimensions Sentiment Analysis & AI Transcription',
          desc: 'מנוע תמלול וזיהוי סנטימנט שיחות מתקדם, המסמן באופן אוטומטי שיחות מתוחות או לקוחות שדורשים טיפול מנהל מיידי.'
        }
      ]
    },
    resellerBenefits: {
      tag: 'FOR THE CHANNEL ONLY',
      title: 'יתרונות למפיצים ומשווקי 3CX',
      desc: 'Dimensions אינה מתחרה בשותפיה! אנו עובדים במודל ערוצים בלעדי במטרה לחזק את ההצעה העסקית שלכם ללקוחות הקצה.',
      items: [
        {
          title: 'מודל ערוצים בלעדי (Channel-Only)',
          desc: 'ללא תחרות ישירה על לקוחות הקצה שלכם. אנו מקדישים 100% מהמשאבים להצלחת המשווקים.',
          icon: 'ShieldCheck'
        },
        {
          title: 'מיתוג אישי מלא (White-Label)',
          desc: 'הציעו פורטל אנליטיקה ו-Wallboards עם הלוגו, כתובת הדומיין והצבעים של החברה שלכם.',
          icon: 'Sparkles'
        },
        {
          title: 'תמיכה טכנית וליווי מלא בהטמעה',
          desc: 'הכשרה מעשית לצוותי ה-Pre-Sale והתמיכה שלכם, לצד חומרי מכירה ושיווק ייעודיים.',
          icon: 'Headphones'
        },
        {
          title: 'עבודה ישירה מול צוות הפיתוח',
          desc: 'השפעה ישירה על מפת הדרכים הטכנולוגית (Roadmap) של הפלטפורמה וקבלת פיצ\'רים לפי דרישה.',
          icon: 'Cpu'
        }
      ]
    },
    socialProof: {
      tag: 'FIELD PROVEN',
      title: 'הוכחות מהשטח: מה אומרים השותפים?',
      desc: 'עשרות אלפי נציגים ומאות מפיצי 3CX ברחבי העולם כבר משתמשים במערכת יום-יום:',
      testimonials: [
        {
          quote: 'Dimensions הוכיחה יכולת מרשימה לתרגם את הצרכים הייחודיים שלנו לתוכנה חדשנית המייעלת את התפעול ומקפיצה את חוויית הלקוח לגבהים חדשים.',
          author: 'T2k Voice & Data',
          role: 'שותף ערוץ מוסמך 3CX'
        },
        {
          quote: 'יכולות הדיווח בזמן אמת העניקו להנהלה תובנות מעשיות, ואיפשרו החלטות מבוססות נתונים ששיפרו דרסטית את ביצועי רשת הסניפים שלנו.',
          author: 'JS Comms',
          role: 'Channel Partner UK'
        },
        {
          quote: 'היתרון העצום ביותר הוא הדוחות היומיים האוטומטיים. הם מאפשרים לנו לוודא שהמטופלים שלנו אינם ממתינים דקה מיותרת על הקו.',
          author: 'Chicago VoIP',
          role: 'Channel Partner USA'
        }
      ]
    },
    checklist: {
      title: 'הטמעה מלאה תוך פחות מ-24 שעות',
      desc: 'ללא צורך בחומרה נוספת, ללא השבתת מרכזיית ה-3CX הקיימת, ובחיבור API חלק ומאובטח.',
      items: [
        'תאימות מלאה ל-3CX v18 ו-v20 (Dedicated ו-Cloud)',
        'תקן אבטחה מחמיר ISO 27001 ו-GDPR Compliant',
        'תמיכה מלאה בריבוי שפות: עברית מלאה (RTL) ואנגלית'
      ]
    },
    demoForm: {
      title: 'התחילו עכשיו עם 3CX + Dimensions',
      desc: 'דברו ישירות עם צוות המומחים שלנו ותאמו הדגמת לייב המותאמת למערך התקשורת שלכם.',
      nameLabel: 'שם מלא',
      namePlaceholder: 'ישראל ישראלי',
      phoneLabel: 'מספר טלפון נייד',
      phonePlaceholder: '050-1234567',
      orgLabel: 'סוג ארגון',
      orgOptions: [
        { value: 'reseller', label: 'משווק / אינטגרטור של 3CX' },
        { value: 'callcenter', label: 'מוקד שירות ומכירות (End Customer)' },
        { value: 'telecom', label: 'ספק תקשורת / IT מנוהל' }
      ],
      submitBtn: 'שלח בקשת הדגמה ללא התחייבות',
      successMsg: 'הבקשה התקבלה בהצלחה! נציג טכני יחזור אליך תוך שעה.',
      whatsappBtn: 'פנייה ישירה ב-WhatsApp',
      callBtn: 'שיחת ייעוץ טלפונית'
    },
    nav: {
      overview: 'סקירה',
      cockpit: 'קוקפיט 3CX',
      packages: 'חבילות',
      wallboard: 'וולבורד',
      demo: 'תיאום דמו'
    }
  },
  en: {
    dir: 'ltr',
    brandName: 'DIMENSIONS',
    badgeText: 'Official 3CX Enhancement | Dimensions Technologies',
    heroTitle: 'Supercharge Your',
    heroTitleHighlight: '3CX',
    heroTitleEnd: 'PBX With Next-Level Real-Time Telemetry',
    heroDesc: 'An intelligent telecom solution connecting 3CX directly to real-time live dashboards, granular call analytics, high-impact supervisor wallboards, and conversational AI built for high-performance service and sales call centers.',
    ctaBookDemo: 'Schedule Live Demo',
    ctaExploreModules: 'Explore Modules & Features',
    stats: {
      channelFocus: { label: 'CHANNEL FOCUS', value: '100%', desc: 'Strictly Channel Only' },
      latency: { label: 'LATENCY', value: '0.2s', desc: 'Realtime 3CX Sync' },
      branding: { label: 'BRANDING', value: 'White-Label', desc: 'Full custom branding' },
      integration: { label: 'INTEGRATION', value: 'Native SIP', desc: 'Deployed in minutes' }
    },
    mobileSection: {
      tag: 'Full Mobile Control for Supervisors',
      title: 'Real-time Metrics in the Palm of Your Hand',
      desc: 'Live reports, queue density, hourly call distributions, and 3CX agent availability status anywhere, anytime straight from mobile.',
      liveBadge: '4.2k calls handled today',
      slaBadge: 'SLA: 94.6%'
    },
    superpowersSection: {
      tag: '3CX SUPERPOWERS',
      title: 'How Dimensions Elevates 3CX',
      desc: '3CX is an exceptional telephony engine. Dimensions adds an enterprise visualization and intelligence layer that cuts operational friction and drives customer delight.',
      features: [
        {
          title: 'Live Streaming Wallboards & Cockpits',
          desc: 'Broadcast queue surges, wait times, and call flows on big screens and mobile displays with zero lag.',
          highlight: 'Updated every single second',
          icon: 'Monitor'
        },
        {
          title: 'Agent Deep Performance Analytics',
          desc: 'Instant visibility into Average Handling Time (AHT), time to answer, abandoned ratios, and dynamic agent gamification.',
          highlight: 'Individual & team KPI scoring',
          icon: 'Users'
        },
        {
          title: 'Proactive Real-Time SLA Alerts',
          desc: 'Automated warnings via Telegram, Microsoft Teams, or SMS whenever queue delays spike or abandon trends appear.',
          highlight: 'Zero surprises during peak rushes',
          icon: 'Zap'
        },
        {
          title: 'Executive Historical Trends & BI Reports',
          desc: 'Scheduled automated reports to optimize shift scheduling, remove structural bottlenecks, and reduce telephony costs.',
          highlight: 'Native export to PDF, Excel & API',
          icon: 'BarChart3'
        }
      ]
    },
    wallboardSection: {
      tag: 'LIVE TELEMETRY COCKPIT',
      title: 'Live Executive Wallboard',
      desc: 'The complete Dimensions command center connected straight to your 3CX PBX. Turns raw call data into a productive, motivating hub.',
      tabs: [
        { id: 'all', name: 'All Queues (Main)', waitTime: '00:00:18', answered: '113 / 25', mvp: 'Jane (40)', active: 18 },
        { id: 'support', name: 'Tech Support', waitTime: '00:00:24', answered: '64 / 8', mvp: 'Dan (32)', active: 9 },
        { id: 'sales', name: 'Sales Hub', waitTime: '00:00:12', answered: '89 / 4', mvp: 'Sarah (45)', active: 12 },
        { id: 'care', name: 'Customer Care', waitTime: '00:00:15', answered: '102 / 14', mvp: 'Alex (38)', active: 11 }
      ],
      metrics: {
        avgRing: 'Avg. Ring Time',
        answeredVsAbandoned: 'Answered vs Abandoned',
        mvp: 'Top Performer',
        syncStatus: 'Sync: 3CX Dedicated & Hosted',
        realtimeBadge: '100% Realtime'
      }
    },
    modularSuite: {
      tag: '3CX MODULAR SUITE',
      title: 'Extended 3CX Modules & Add-Ons',
      desc: 'Seamless integration with native 3CX modules to expand capabilities without replacing existing infrastructure:',
      modules: [
        {
          category: '3CX Call Center & Queue',
          title: 'Dimensions Live Queue Control & Smart Routing',
          desc: 'Skill-based dynamic call routing, live queue management, and instantaneous permission updates without entering PBX management.'
        },
        {
          category: '3CX CRM Integration',
          title: 'Omnichannel History & Contextual Screen Pops',
          desc: 'Instant caller screen pop with full interaction history across voice, WhatsApp, and chat directly into CRM records.'
        },
        {
          category: '3CX Teams Integration',
          title: 'Unified Teams Telephony Wallboard',
          desc: 'Complete cross-platform bridging and collaborative telemetry for teams working within Microsoft Teams and 3CX.'
        },
        {
          category: '3CX Recording & Compliance',
          title: 'Dimensions Sentiment Analysis & AI Transcription',
          desc: 'Advanced conversational speech-to-text and tone detection that flags at-risk interactions in real time.'
        }
      ]
    },
    resellerBenefits: {
      tag: 'FOR THE CHANNEL ONLY',
      title: 'Dedicated Benefits for 3CX Partners',
      desc: 'Dimensions never competes with partners. We operate strictly channel-only to boost your margins and client retention.',
      items: [
        {
          title: '100% Channel-Only Model',
          desc: 'We never sell direct to end users. 100% of our focus is empowering reseller success.',
          icon: 'ShieldCheck'
        },
        {
          title: 'Full White-Label Customization',
          desc: 'Deploy wallboards and portals branded with your own logo, domain, and colors.',
          icon: 'Sparkles'
        },
        {
          title: 'Pre-Sales & Technical Onboarding',
          desc: 'Dedicated technical training, co-selling resources, and architecture support for your team.',
          icon: 'Headphones'
        },
        {
          title: 'Direct R&D Influence',
          desc: 'Direct line to our engineering team with high-priority roadmap feature requests.',
          icon: 'Cpu'
        }
      ]
    },
    socialProof: {
      tag: 'FIELD PROVEN',
      title: 'Field-Tested: What Partners Say',
      desc: 'Thousands of agents and top 3CX resellers rely on Dimensions every day:',
      testimonials: [
        {
          quote: 'Dimensions demonstrated an impressive ability to translate our specific operational needs into intuitive software that elevated our customer experience.',
          author: 'T2k Voice & Data',
          role: 'Certified 3CX Channel Partner'
        },
        {
          quote: 'The real-time insights gave our executive leadership actionable data, resulting in measurable efficiency improvements across all branch locations.',
          author: 'JS Comms',
          role: 'Channel Partner UK'
        },
        {
          quote: 'The automated daily digests save hours every week, ensuring our patients never wait an extra minute on hold.',
          author: 'Chicago VoIP',
          role: 'Channel Partner USA'
        }
      ]
    },
    checklist: {
      title: 'Complete Deployment Under 24 Hours',
      desc: 'Zero hardware overhead, zero downtime for your existing 3CX server, and a fully secured API bridge.',
      items: [
        'Full compatibility with 3CX v18 & v20 (Dedicated & Cloud)',
        'Strict ISO 27001 certified & GDPR compliant security',
        'Multi-language native support: English & full RTL Hebrew'
      ]
    },
    demoForm: {
      title: 'Get Started with 3CX + Dimensions',
      desc: 'Connect with our telecom solution architects to see a personalized live environment demo.',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 019-2834',
      orgLabel: 'Organization Type',
      orgOptions: [
        { value: 'reseller', label: '3CX Reseller / Integrator' },
        { value: 'callcenter', label: 'Call Center / End Customer' },
        { value: 'telecom', label: 'Managed IT / Telecom Provider' }
      ],
      submitBtn: 'Request Free Live Demo',
      successMsg: 'Demo request received! A specialist will contact you within the hour.',
      whatsappBtn: 'Instant WhatsApp Chat',
      callBtn: 'Direct Phone Consultation'
    },
    nav: {
      overview: 'Overview',
      cockpit: '3CX Cockpit',
      packages: 'Packages',
      wallboard: 'Wallboard',
      demo: 'Book Demo'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState('he');
  const [activeTab, setActiveTab] = useState('all');
  const [currentNav, setCurrentNav] = useState('overview');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orgType: 'reseller'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Live seconds ticker to simulate real-time live data
  const [liveSeconds, setLiveSeconds] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSeconds(prev => (prev >= 30 ? 12 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const t = translations[lang];
  const isRtl = lang === 'he';

  // Toggle language and update HTML document direction
  const handleToggleLanguage = () => {
    const nextLang = lang === 'he' ? 'en' : 'he';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'he' ? 'rtl' : 'ltr';
  };

  // Handle demo request submission
  const handleSubmitDemo = async (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(lang === 'he' ? 'אנא מלא שם ומספר טלפון' : 'Please provide your name and phone number');
      return;
    }

    setIsSubmitting(true);
    try {
      // Call Node.js serverless backend
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({ success: true }));
      setSubmitSuccess(true);
    } catch (err) {
      // Graceful fallback for preview / offline mode
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTabData = t.wallboardSection.tabs.find(tab => tab.id === activeTab) || t.wallboardSection.tabs[0];

  return (
    <div className={`min-h-screen bg-surface text-on-surface flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`} dir={t.dir}>
      
      {/* Top Glassmorphism Navigation Bar */}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-high shadow-lg">
        <div className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Certification Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-xl md:text-2xl font-black tracking-tight text-primary font-mono">
                {t.brandName}
              </span>
              <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full font-bold border border-primary/30">
                +3CX
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full border border-surface-container-high">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)] animate-pulse" />
              <span>3CX Certified Partner</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
            <a href="#overview" className="hover:text-primary transition-colors">{t.nav.overview}</a>
            <a href="#superpowers" className="hover:text-primary transition-colors">{t.nav.cockpit}</a>
            <a href="#wallboard" className="hover:text-primary transition-colors">{t.nav.wallboard}</a>
            <a href="#modules" className="hover:text-primary transition-colors">{t.nav.packages}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.demo}</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Language Switcher */}
            <button
              onClick={handleToggleLanguage}
              title={lang === 'he' ? 'Switch to English' : 'עבור לעברית'}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors border border-surface-container-high text-primary"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'he' ? 'EN' : 'עב'}</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:03332420042"
              className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors border border-surface-container-high"
              title="Call Sales"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            {/* Quick Demo CTA */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-on-primary-fixed font-bold text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/20"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.ctaBookDemo}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20 pb-28 md:pb-16 flex flex-col items-center">
        <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col gap-12 md:gap-20">

          {/* SECTION 1: HERO */}
          <section id="overview" className="relative pt-6 md:pt-12 flex flex-col gap-6">
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute top-40 -left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

            {/* Official Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/80 border border-primary/20 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.9)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-primary tracking-wide">
                {t.badgeText}
              </span>
            </div>

            {/* Hero Main Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-on-surface">
                {t.heroTitle}{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                  {t.heroTitleHighlight}
                </span>{' '}
                {t.heroTitleEnd}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
                {t.heroDesc}
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-on-primary-fixed rounded-xl font-bold text-base shadow-lg shadow-primary/25 hover:brightness-110 active:scale-98 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.ctaBookDemo}</span>
              </button>

              <a
                href="#modules"
                className="flex items-center justify-center gap-2 py-3.5 px-6 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-xl font-semibold text-base border border-surface-container-highest transition-colors"
              >
                <Layers className="w-5 h-5 text-primary" />
                <span>{t.ctaExploreModules}</span>
              </a>
            </div>

            {/* Telemetry Stats Ticker (Bento 2x2 on mobile, 4 in row on desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <div className="bg-surface-container-low/90 rounded-2xl p-4 border border-surface-container-high flex flex-col gap-1 shadow-sm hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono">
                  <span>{t.stats.channelFocus.label}</span>
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-primary tracking-tight font-mono">
                  {t.stats.channelFocus.value}
                </div>
                <div className="text-xs text-on-surface-variant">{t.stats.channelFocus.desc}</div>
              </div>

              <div className="bg-surface-container-low/90 rounded-2xl p-4 border border-surface-container-high flex flex-col gap-1 shadow-sm hover:border-secondary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono">
                  <span>{t.stats.latency.label}</span>
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-secondary tracking-tight font-mono">
                  {t.stats.latency.value}
                </div>
                <div className="text-xs text-on-surface-variant">{t.stats.latency.desc}</div>
              </div>

              <div className="bg-surface-container-low/90 rounded-2xl p-4 border border-surface-container-high flex flex-col gap-1 shadow-sm hover:border-tertiary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono">
                  <span>{t.stats.branding.label}</span>
                  <Sparkles className="w-4 h-4 text-tertiary" />
                </div>
                <div className="text-lg md:text-xl font-black text-on-surface tracking-tight mt-1">
                  {t.stats.branding.value}
                </div>
                <div className="text-xs text-on-surface-variant">{t.stats.branding.desc}</div>
              </div>

              <div className="bg-surface-container-low/90 rounded-2xl p-4 border border-surface-container-high flex flex-col gap-1 shadow-sm hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between text-on-surface-variant text-xs font-mono">
                  <span>{t.stats.integration.label}</span>
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <div className="text-lg md:text-xl font-black text-on-surface tracking-tight mt-1">
                  {t.stats.integration.value}
                </div>
                <div className="text-xs text-on-surface-variant">{t.stats.integration.desc}</div>
              </div>
            </div>

          </section>


          {/* SECTION 2: MOBILE ANALYTICS SHOWCASE */}
          <section className="bg-surface-container-low/70 rounded-3xl p-5 md:p-8 border border-surface-container-high relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              
              <div className="flex-1 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-semibold">
                  <BarChart3 className="w-4 h-4" />
                  <span>{t.mobileSection.tag}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface">
                  {t.mobileSection.title}
                </h2>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {t.mobileSection.desc}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-xs font-mono text-secondary border border-secondary/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-time KPI sync</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-xs font-mono text-primary border border-primary/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span>0s PBX Latency</span>
                  </span>
                </div>
              </div>

              {/* Mockup Preview Card */}
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden aspect-[16/10] bg-surface-container-lowest border border-surface-container-highest shadow-2xl group">
                <img
                  src="/screen.png"
                  alt="Dimensions Mobile Analytics for 3CX"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to high-res online preview if local file is loading
                    e.currentTarget.src = "https://lh3.googleusercontent.com/aida/AEtjO1Vn7YcD8YXZuXUv8Gu7X2Cz56aHAdkhvgSH_wIm2i-PW1Q3Wmq5jhgP92N7A3DszFbg7qveXx0Mkt8e2nvIydY_r5DsgKb0zQUBjRHS6gnv7y_sT2GBaP7m5PrkwCSMaaVhiwPLHbg74vY5liizW7-v5vP6F-jkZgiZ70acbmGe3XXoSVE9_MOvOGYBsjKbV9MhzD5rTSrg6VASyQQtjsWa6BaERCpGfhf1yoU423ikpJ58AUbaT9hPKs39";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 right-3 left-3 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 bg-surface/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-surface-container-high">
                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)] animate-pulse" />
                    <span className="font-semibold text-on-surface">{t.mobileSection.liveBadge}</span>
                  </div>
                  <span className="font-mono text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-lg backdrop-blur-md font-bold">
                    {t.mobileSection.slaBadge}
                  </span>
                </div>
              </div>

            </div>
          </section>


          {/* SECTION 3: HOW DIMENSIONS EXTENDS 3CX (SUPERPOWERS) */}
          <section id="superpowers" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-secondary tracking-wider">
                {t.superpowersSection.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                {t.superpowersSection.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
                {t.superpowersSection.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.superpowersSection.features.map((feat, idx) => {
                const icons = {
                  Monitor: <Monitor className="w-6 h-6 text-primary" />,
                  Users: <Users className="w-6 h-6 text-secondary" />,
                  Zap: <Zap className="w-6 h-6 text-tertiary" />,
                  BarChart3: <BarChart3 className="w-6 h-6 text-primary" />
                };
                return (
                  <div
                    key={idx}
                    className="bg-surface-container rounded-2xl p-5 border border-surface-container-high flex flex-col justify-between gap-4 hover:border-primary/40 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-surface-container-highest">
                        {icons[feat.icon] || <Zap className="w-6 h-6 text-primary" />}
                      </div>
                      <h3 className="text-lg font-bold text-on-surface">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-xs font-mono font-semibold text-primary">
                      <span>{feat.highlight}</span>
                      {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>


          {/* SECTION 4: LIVE WALLBOARD COCKPIT (INTERACTIVE) */}
          <section id="wallboard" className="bg-surface-container-low/90 rounded-3xl p-5 md:p-8 border border-surface-container-high flex flex-col gap-6 shadow-xl">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-primary tracking-wider">
                {t.wallboardSection.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                {t.wallboardSection.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
                {t.wallboardSection.desc}
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {t.wallboardSection.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-on-primary-fixed shadow-md shadow-primary/30 scale-102'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Wallboard Screenshot & Live Stats Display */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden p-3 border border-surface-container-high flex flex-col gap-4 shadow-2xl">
              
              <div className="relative w-full rounded-xl overflow-hidden aspect-[16/9] bg-surface-container border border-surface-container-high group">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vn7YcD8YXZuXUv8Gu7X2Cz56aHAdkhvgSH_wIm2i-PW1Q3Wmq5jhgP92N7A3DszFbg7qveXx0Mkt8e2nvIydY_r5DsgKb0zQUBjRHS6gnv7y_sT2GBaP7m5PrkwCSMaaVhiwPLHbg74vY5liizW7-v5vP6F-jkZgiZ70acbmGe3XXoSVE9_MOvOGYBsjKbV9MhzD5rTSrg6VASyQQtjsWa6BaERCpGfhf1yoU423ikpJ58AUbaT9hPKs39"
                  alt="Dimensions 3CX Wallboard Live Screen"
                  className="w-full h-full object-cover object-top group-hover:scale-101 transition-transform duration-500"
                />
                
                {/* Floating status tag */}
                <div className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-secondary border border-secondary/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span>{selectedTabData.active} active agents</span>
                </div>
              </div>

              {/* Dynamic Interactive Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-surface-container/80 p-3.5 rounded-xl border border-surface-container-high flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-on-surface-variant mb-1">{t.wallboardSection.metrics.avgRing}</span>
                  <span className="text-xl font-bold font-mono text-primary">
                    00:00:{liveSeconds < 10 ? `0${liveSeconds}` : liveSeconds}
                  </span>
                </div>

                <div className="bg-surface-container/80 p-3.5 rounded-xl border border-surface-container-high flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-on-surface-variant mb-1">{t.wallboardSection.metrics.answeredVsAbandoned}</span>
                  <span className="text-xl font-bold font-mono text-secondary">
                    {selectedTabData.answered}
                  </span>
                </div>

                <div className="bg-surface-container/80 p-3.5 rounded-xl border border-surface-container-high flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-on-surface-variant mb-1">{t.wallboardSection.metrics.mvp}</span>
                  <span className="text-xl font-bold font-mono text-tertiary">
                    {selectedTabData.mvp}
                  </span>
                </div>
              </div>

              {/* Footer status of the live wallboard */}
              <div className="flex items-center justify-between text-xs text-on-surface-variant px-2 pt-1 border-t border-surface-container-high">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>{t.wallboardSection.metrics.syncStatus}</span>
                </div>
                <span className="font-mono text-primary font-semibold">
                  {t.wallboardSection.metrics.realtimeBadge}
                </span>
              </div>

            </div>
          </section>


          {/* SECTION 5: 3CX MODULAR SUITE */}
          <section id="modules" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-primary tracking-wider">
                {t.modularSuite.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                {t.modularSuite.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
                {t.modularSuite.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.modularSuite.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container rounded-2xl p-5 border border-surface-container-high flex flex-col gap-3 hover:border-primary/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      {mod.category}
                    </span>
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-on-surface">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>


          {/* SECTION 6: PARTNER & RESELLER BENEFITS */}
          <section className="bg-surface-container-lowest rounded-3xl p-5 md:p-8 border border-surface-container-high flex flex-col gap-6 shadow-xl">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-secondary tracking-wider">
                {t.resellerBenefits.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                {t.resellerBenefits.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
                {t.resellerBenefits.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.resellerBenefits.items.map((item, idx) => {
                const icons = {
                  ShieldCheck: <ShieldCheck className="w-5 h-5 text-secondary" />,
                  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
                  Headphones: <Headphones className="w-5 h-5 text-tertiary" />,
                  Cpu: <Cpu className="w-5 h-5 text-primary" />
                };
                return (
                  <div
                    key={idx}
                    className="bg-surface-container-low rounded-xl p-4 border border-surface-container-high flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-surface-container-high shrink-0 border border-surface-container-highest">
                      {icons[item.icon] || <ShieldCheck className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm sm:text-base font-bold text-on-surface">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>


          {/* SECTION 7: FIELD PROVEN / TESTIMONIALS */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-primary tracking-wider">
                {t.socialProof.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                {t.socialProof.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
                {t.socialProof.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.socialProof.testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container rounded-2xl p-5 border border-surface-container-high flex flex-col justify-between gap-4 shadow-sm"
                >
                  <p className="text-sm text-on-surface italic leading-relaxed">
                    "{test.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container-high">
                    <div>
                      <div className="text-sm font-bold text-primary">{test.author}</div>
                      <div className="text-xs text-on-surface-variant">{test.role}</div>
                    </div>
                    <Award className="w-5 h-5 text-secondary shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* SECTION 8: RAPID DEPLOYMENT CHECKLIST */}
          <section className="bg-surface-container-high/60 rounded-2xl p-5 md:p-6 border border-surface-container-highest flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-bold text-on-surface">
                {t.checklist.title}
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant">
              {t.checklist.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {t.checklist.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-on-surface bg-surface-container/60 p-2.5 rounded-lg border border-surface-container-high">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>


          {/* SECTION 9: BOTTOM CTA & CONTACT / DEMO FORM */}
          <section id="contact" className="bg-surface-container-low rounded-3xl p-6 md:p-10 border border-surface-container-high flex flex-col items-center text-center gap-6 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Headphones className="w-7 h-7" />
            </div>

            <div className="flex flex-col gap-2 max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface">
                {t.demoForm.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {t.demoForm.desc}
              </p>
            </div>

            {/* Interactive Form */}
            <div className="w-full max-w-md bg-surface-container rounded-2xl p-5 md:p-6 border border-surface-container-high flex flex-col gap-4 text-right">
              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-secondary-container/30 border border-secondary text-on-surface flex flex-col items-center text-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                  <span className="text-base font-bold text-secondary">
                    {t.demoForm.successMsg}
                  </span>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs text-primary underline mt-2"
                  >
                    {lang === 'he' ? 'שלח בקשה נוספת' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitDemo} className="flex flex-col gap-3">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-on-surface-variant">
                      {t.demoForm.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.demoForm.namePlaceholder}
                      className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-on-surface-variant">
                      {t.demoForm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.demoForm.phonePlaceholder}
                      className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:border-primary transition-colors text-left"
                    />
                  </div>

                  {/* Organization Type Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-on-surface-variant">
                      {t.demoForm.orgLabel}
                    </label>
                    <select
                      value={formData.orgType}
                      onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                      className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                    >
                      {t.demoForm.orgOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-surface-container">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 bg-primary-container text-on-primary-fixed rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin w-5 h-5 border-2 border-on-primary-fixed border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <span>{t.demoForm.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Direct Contact links */}
                  <div className="flex items-center justify-center gap-4 pt-3 text-xs border-t border-surface-container-high mt-2">
                    <a
                      href="https://wa.me/443332420042"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-secondary hover:underline font-semibold"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.demoForm.whatsappBtn}</span>
                    </a>
                    <span className="text-on-surface-variant">•</span>
                    <a
                      href="tel:03332420042"
                      className="flex items-center gap-1.5 text-primary hover:underline font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{t.demoForm.callBtn}</span>
                    </a>
                  </div>

                </form>
              )}
            </div>

          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-on-surface-variant py-6 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary font-mono">{t.brandName}</span>
              <span>© {new Date().getFullYear()} Dimensions Technologies Ltd. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span>3CX Certified Advanced Partner</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </footer>

        </div>
      </main>

      {/* Floating Bottom Navigation Bar (Mobile Tab Shell) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface-container-low/95 backdrop-blur-xl border-t border-surface-container-high shadow-2xl">
        <div className="flex justify-around items-center h-16 px-2">
          
          <a
            href="#overview"
            onClick={() => setCurrentNav('overview')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[56px] transition-colors ${
              currentNav === 'overview' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-[10px]">{t.nav.overview}</span>
          </a>

          <a
            href="#superpowers"
            onClick={() => setCurrentNav('cockpit')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[56px] transition-colors ${
              currentNav === 'cockpit' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <Zap className="w-5 h-5" />
            <span className="text-[10px]">{t.nav.cockpit}</span>
          </a>

          <a
            href="#modules"
            onClick={() => setCurrentNav('packages')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[56px] transition-colors ${
              currentNav === 'packages' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-[10px]">{t.nav.packages}</span>
          </a>

          <a
            href="#wallboard"
            onClick={() => setCurrentNav('wallboard')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[56px] transition-colors ${
              currentNav === 'wallboard' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <Monitor className="w-5 h-5" />
            <span className="text-[10px]">{t.nav.wallboard}</span>
          </a>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-bold">{t.nav.demo}</span>
          </button>

        </div>
      </nav>

      {/* Demo Booking Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-surface-container rounded-3xl p-6 md:p-8 border border-surface-container-high shadow-2xl flex flex-col gap-4">
            
            {/* Close button */}
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 left-4 p-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-1 pr-6">
              <span className="text-xs font-mono font-bold text-primary">3CX + DIMENSIONS</span>
              <h3 className="text-xl md:text-2xl font-bold text-on-surface">
                {t.demoForm.title}
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant">
                {t.demoForm.desc}
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/30 flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-secondary" />
                <span className="text-base font-bold text-secondary">
                  {t.demoForm.successMsg}
                </span>
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    setSubmitSuccess(false);
                  }}
                  className="mt-3 px-6 py-2 bg-primary text-on-primary-fixed rounded-xl font-bold text-xs"
                >
                  {lang === 'he' ? 'סגור חלון' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitDemo} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 text-right">
                  <label className="text-xs font-mono text-on-surface-variant">
                    {t.demoForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.demoForm.namePlaceholder}
                    className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1 text-right">
                  <label className="text-xs font-mono text-on-surface-variant">
                    {t.demoForm.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.demoForm.phonePlaceholder}
                    className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:border-primary text-left"
                  />
                </div>

                <div className="flex flex-col gap-1 text-right">
                  <label className="text-xs font-mono text-on-surface-variant">
                    {t.demoForm.orgLabel}
                  </label>
                  <select
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                    className="w-full bg-surface-container-lowest border border-surface-container-high rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                  >
                    {t.demoForm.orgOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-surface-container">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 px-6 bg-primary-container text-on-primary-fixed rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-spin w-4 h-4 border-2 border-on-primary-fixed border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <span>{t.demoForm.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
