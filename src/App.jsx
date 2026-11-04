import { useState, useEffect } from 'react'
import {
  BookOpen,
  Heart,
  Clock,
  Phone,
  MapPin,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Bus,
  Utensils,
  ShieldCheck,
  ChevronRight,
  Globe,
  ArrowRight,
  Check,
  Menu,
  X,
  MessageCircle,
  Volume2,
  Eye,
  Gamepad2,
  Coffee,
  BedDouble,
  Sunrise,
  Send,
  HelpCircle,
  ChevronDown,
  CheckCircle,
  Sparkle
} from 'lucide-react'

const CURRENT_YEAR = 2026

export default function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false)
  const [activeAgeTab, setActiveAgeTab] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Close navigation menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavMenuOpen(false)
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile/desktop nav drawer is open
  useEffect(() => {
    if (navMenuOpen || modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [navMenuOpen, modalOpen])

  // Registration Form State (Completely free of financial/pricing references)
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '4',
    needBus: 'Haa',
    notes: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegistrationSubmit = (e) => {
    e.preventDefault()
    const message = `Asc Itqaan Kids Academy! Waxaan rabaa inaan diiwaangeliyo ilmahayga:
- Magaca Waalidka: ${formData.parentName}
- Taleefanka: ${formData.phone}
- Magaca Ilmaha: ${formData.childName}
- Da'da Ilmaha: ${formData.childAge} sano
- Baahida Baska: ${formData.needBus}
${formData.notes ? `- Faahfaahin dheeraad ah: ${formData.notes}` : ''}`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/252610646540?text=${encoded}`, '_blank')
    setModalOpen(false)
  }

  // Navigation Items
  const navItems = [
    { label: 'Hoyga', href: '#home' },
    { label: 'Nagu Saabsan', href: '#about' },
    { label: 'Waxbarashada', href: '#education' },
    { label: 'Jadwalka', href: '#schedule' },
    { label: 'Daryeelka & Badbaadada', href: '#safety' },
    { label: 'Macallimiinta', href: '#teachers' },
    { label: 'Diiwaangelinta', href: '#enrollment' },
    { label: 'Xiriirka', href: '#contact' }
  ]

  // 3 Educational Pillars
  const pillars = [
    {
      title: 'Diin',
      subtitle: 'Barashada Qur’aanka & Salaadda',
      description: 'Xifdinta Qur’aanka kariimka oo tajwiid sax ah leh, barashada salaadda ficil ahaan, ducooyinka maalinlaha ah, iyo aadaabta suubban ee Islaamka.',
      icon: BookOpen,
      accent: 'border-amberGold-400 text-amberGold-700 bg-amberGold-50/70',
      badge: 'Aasaaska Ruuxiga ah'
    },
    {
      title: 'Maadi',
      subtitle: 'Xisaab, Luqado & Saynis',
      description: 'Dhisidda garaadka maskaxda iyadoo la barayo Af-Soomaaliga, English-ka casriga ah, aasaaska xisaabta iyo aqoonta guud si ilmaha loogu diyaariyo dugsi sare.',
      icon: GraduationCap,
      accent: 'border-burgundy-300 text-burgundy-800 bg-burgundy-50/70',
      badge: 'Garaadka & Maskaxda'
    },
    {
      title: 'Tarbiyah',
      subtitle: 'Akhlaaq & Barbaarin Toosan',
      description: 'Ku barbaarin asluub wanaagsan, daacadnimo, xishood, naxariis, ixtiraamka waalidiinta, iyo dhisidda shakhsiyad adag oo isku kalsoon.',
      icon: Heart,
      accent: 'border-sage-300 text-sage-800 bg-sage-50/70',
      badge: 'Dhaqanka & Asluubta'
    }
  ]

  // What Children Learn (4 Curriculum Domains)
  const curriculumDomains = [
    {
      title: "Qur'aanka Kariimka & Higgaadda",
      desc: 'Barashada xarfaha Carabiga ee saxda ah (Mucallimul Qiraa’ah), higgaadda, tajwiidka iyo xifdinta suuradaha barakaysan ee Juz Camma.',
      icon: BookOpen,
      highlights: ['Higgaad sax ah', 'Tajwiid aasaasi ah', 'Xifdinta Juz Camma', 'Codad qurux badan']
    },
    {
      title: 'Aadaabta & Tarbiyada Islaamka',
      desc: 'Barashada aadaabta cuntada, hurdada, socodka, barashada salaadda iyo weesada saxda ah, iyo ku tababarka jacaylka Alle iyo Nabiga (NNKH).',
      icon: Heart,
      highlights: ['Barashada Salaadda', 'Ducooyinka Maalinlaha', 'Aadaabta Masjidka', 'Ixtiraamka Waalidka']
    },
    {
      title: 'Luqadaha & Akhriska Casriga',
      desc: 'Kobcinta akhriska iyo qoraalka Af-Soomaaliga hooyo oo ay weheliso barashada aasaaska luqadda English-ka si ilmahaagu labada luqadoodba ugu hadlo.',
      icon: Volume2,
      highlights: ['Af-Soomaali qoran & afka', 'English Vocabulary', 'Sheekooyin carruureed', 'Dhawaaq sax ah']
    },
    {
      title: 'Xisaabta & Caqliga Fudud',
      desc: 'Barashada tirinta, isku-darka, ka-jarka, kala-soocidda qaababka iyo cabbirrada, iyadoo loo marayo habab macquul ah oo maskaxda furaya.',
      icon: Sparkles,
      highlights: ['Tirinta & Lambarrada', 'Qaababka & Midabbada', 'Xujooyinka Caqliga', 'Isku-dar & Ka-jar']
    }
  ]

  // Learning Methodologies (Maqal, Muuqaal, Ciyaar)
  const methodologies = [
    {
      method: 'Maqal',
      title: 'Maqal (Auditory Learning)',
      desc: 'Dhageysiga codadka xarfaha, qiraa’ada Qur’aanka, sheekooyin xikmadaysan, iyo ducooyin lagu celceliyo si ay ugu qotomaan xusuusta ilmaha.',
      icon: Volume2,
      tag: 'Cod & Xusuus'
    },
    {
      method: 'Muuqaal',
      title: 'Muuqaal (Visual Learning)',
      desc: 'Sawirro midabyo leh, kaararka xarfaha (Flashcards), jaantusyo indhaha soo jiita, iyo buugaag sawiraysan oo fududeeya fahamka ilmaha.',
      icon: Eye,
      tag: 'Sawirro & Kaarar'
    },
    {
      method: 'Ciyaar',
      title: 'Ciyaar (Play-Based Learning)',
      desc: 'Ciyaaro xisaabeed, farshaxan, dhisidda xujooyinka (puzzles), iyo dhaqdhaqaaq firfircoon oo ilmaha u horseeda inuu farxad iyo kalsooni ku barto.',
      icon: Gamepad2,
      tag: 'Hal-abuur & Ciyaar'
    }
  ]

  // Age-based Learning Programs (3 to 10 years)
  const agePrograms = [
    {
      age: "Da'da 3 – 6 Sano",
      stage: 'Xannaano & Aasaas (Preschool / KG)',
      subjects: ['Xannaano', 'Alif', 'Midab', 'Tirada', 'Ciyaaro'],
      summary: 'Marxaladda bilowga ah ee lagu beero jacaylka waxbarashada iyadoo loo marayo ciyaar, daryeel naxariis leh, garashada xarfaha, iyo aqoonsiga midabada.',
      goals: [
        'Ku dhawaaqista xarfaha Alifka iyo garashada codadka',
        'Kala soocidda midabada aasaasiga ah iyo tirada 1–20',
        'Ciyaaro gacmaha iyo maskaxda isku xira (Fine Motor Skills)',
        'Barashada wada-shaqeynta iyo dhex-galka asxaabta cusub'
      ]
    },
    {
      age: "Da'da 6 – 7 Sano",
      stage: 'Fasalka 1-aad (Higgaad & Akhris)',
      subjects: ['Mucallimul Qiraa’ah', 'Higgaad', 'Akhris'],
      summary: 'Barashada aasaaska akhriska saxda ah, kala-saarista shaqallada iyo shibbanayaasha Carabiga, iyo tillaabooyinka hore ee qoraalka madaxa-bannaan.',
      goals: [
        'Akhrinta erayo fudud oo carabi iyo soomaali ah',
        'Higgaadda toosan ee buugga Mucallimul Qiraa’ah',
        'Qurxinta qoraalka farta iyo layliyo maalinle ah',
        'Fahamka xarfaha isku xiran iyo kuwa kala gooni ah'
      ]
    },
    {
      age: "Da'da 7 – 8 Sano",
      stage: 'Fasalka 2-aad (Qur’aan & Salaad)',
      subjects: ["Barashada iyo xifdinta Qur'aanka", 'Salaada'],
      summary: 'Xifdinta suuradaha Qur’aanka kariimka oo tajwiid ku dheehan yahay iyo ku tababaridda salaadda waajibaadkeeda, weesada iyo aadaabta masjidka.',
      goals: [
        'Xifdinta suuradaha ugu dambeeya ee Juz Camma',
        'Ku celcelinta weesada iyo salaadda ficil ahaan maalin kasta',
        'Barashada ducooyinka subaxda, galabta iyo cuntada',
        'Ku xirnaanta masjidka iyo dabeecadaha suubban'
      ]
    },
    {
      age: "Da'da 8 – 9 Sano",
      stage: 'Fasalka 3-aad (Qur’aan, Somali, Xisaab, Tarbiyah)',
      subjects: ["Qur'aan", 'Somali', 'Xisaab', 'Tarbiyah'],
      summary: 'Kobcinta akhriska iyo qoraalka Af-Soomaaliga, xisaabinta tirooyinka ballaaran, sii wadista xifdinta Qur’aanka, iyo adkeynta tarbiyada.',
      goals: [
        'Sii wadista xifdinta iyo ku celcelinta subaca Qur’aanka',
        'Xisaabta aasaasiga ah: Isku-dar, ka-jar, iyo bilowga dhufo',
        'Qorista jumlado madax-bannaan oo Af-Soomaali ah',
        'Barashada qisooyinka Nabiyada iyo asxaabta'
      ]
    },
    {
      age: "Da'da 9 – 10 Sano",
      stage: 'Fasalka 4-aad (Qur’aan, Luqado & Saynis Guud)',
      subjects: ["Qur'aan", 'Somali', 'English', 'Xisaab', 'Aqoon Guud'],
      summary: 'Isku-dhafka cilmiga diiniga iyo maadiga heerkiisa sare ee dugsiga hoose, iyadoo ardayga loo diyaarinayo dugsiga dhexe isagoo kalsooni buuxda qaba.',
      goals: [
        'Qur’aan xifdi leh iyo fahamka micnaha guud ee aayadaha',
        'Aasaaska luqadda English-ka (Vocabulary & Grammar fudud)',
        'Xallinta su’aalaha xisaabta iyo caqliga (Word Problems)',
        'Aqoonta guud: Sayniska dabiiciga ah, deegaanka iyo caafimaadka'
      ]
    }
  ]

  // Daily Schedule (7:00 AM to 4:00 PM)
  const schedule = [
    {
      time: '07:00 AM – 09:30 AM',
      period: 'Subax',
      activity: 'Waxbarasho & Soo Dhoweyn',
      desc: 'Soo dhoweynta ardayda, ducooyinka subaxnimo, iyo bilowga casharrada ugu muhiimsan ee Qur’aanka iyo Higgaadda xilliga maskaxdu ugu firfircoon tahay.',
      icon: Sunrise,
      badge: 'Bilaabasho Firfircoon'
    },
    {
      time: '09:30 AM – 10:30 AM',
      period: 'Nasasho',
      activity: 'Quraac & Ciyaar',
      desc: 'Quraac caafimaad leh oo nadiif ah oo ay weheliso ciyaar xor ah iyo nasasho garoonka si ardaydu u helaan tamar cusub iyo is-dhexgal asxaabeed.',
      icon: Coffee,
      badge: 'Nafaqo & Dhaqdhaqaaq'
    },
    {
      time: '10:30 AM – 12:30 PM',
      period: 'Waxbarasho',
      activity: 'Subac & Maaddooyin Maadi ah',
      desc: 'Subaca Qur’aanka kariimka, casharrada maadiga ah (Af-Soomaali, Xisaab, English), iyo layliyo gacanta ah oo kooxeed fasalka dhexdiisa.',
      icon: BookOpen,
      badge: 'Diin & Maadi'
    },
    {
      time: '12:30 PM – 02:00 PM',
      period: 'Nasasho',
      activity: 'Salaad, Qado & Hurdo (Qayluulo)',
      desc: 'Tukashada salaadda Duhur, qado macaan oo nafaqo leh, iyo hurdo kooban (Qayluulo) oo soo celisa degganaanta iyo awoodda ilmaha.',
      icon: BedDouble,
      badge: 'Salaad, Qado & Nasasho'
    },
    {
      time: '02:00 PM – 03:30 PM',
      period: 'Hurdada ka dib',
      activity: 'Adkaar & Akhris',
      desc: 'Toosidda hurdada, adkaarta galabnimo, akhris sheekooyin tarbiyeed ah, fanka, iyo hawlo hal-abuur leh oo xiiso gaar ah leh.',
      icon: Heart,
      badge: 'Adkaar & Hal-abuur'
    },
    {
      time: '03:30 PM – 04:00 PM',
      period: 'Ka dib',
      activity: 'Guri ku Noqoshada',
      desc: 'Ururinta boorsooyinka, xaqiijinta nadaafadda iyo badbaadada ilmaha, iyo u gelbinta basaska dugsiga si nabad ah loogu celiyo guryahooda.',
      icon: Bus,
      badge: 'Gelbin & Badbaado'
    }
  ]

  // Childcare and Safety pillars
  const childcareFeatures = [
    {
      title: 'Cunto Caafimaad leh (Nutrition)',
      desc: 'Quraac iyo Qado maalinle ah oo nadiif ah, nafaqo leh, lagana kormeero jikada dugsiga si ilmo kasta u helo awood uu wax ku barto.',
      icon: Utensils
    },
    {
      title: 'Hurdo & Nasasho Nadiif ah (Rest)',
      desc: 'Qol gaar ah oo hurdo oo leh sariiro nadiif ah iyo hawo fiican, si ilmaha loogu helo qayluulo nabad leh oo ka ilaalisa daalka maalinlaha ah.',
      icon: BedDouble
    },
    {
      title: 'Nadaafad & Kormeer Caafimaad (Hygiene)',
      desc: 'Gacmo-dhaqasho joogto ah, fasallo nadiif ah, jeermis-dilid maalin kasta ah, iyo daryeel degdeg ah haddii ilmahaagu dareemo xoogaa xanuun ah.',
      icon: ShieldCheck
    },
    {
      title: 'Gaadiid Aamin ah (Transportation)',
      desc: 'Basas qalabaysan oo leh shaqaale kormeerayaal ah oo ilmaha guriga hortiisa ka qaada, gacantana ugu celiya waalidka aroor iyo galab.',
      icon: Bus
    }
  ]

  // Teachers & Staff
  const teachers = [
    {
      name: 'Maryan',
      role: 'Maamulka (Directress)',
      experience: 'Hogaanka & Kormeerka Guud',
      desc: 'Maryan waxay maamushaa hannaanka waxbarasho, tayada manhajka, iyo xiriirka tooska ah ee waalidiinta si loo hubiyo deegaan aamin ah.',
      specialty: 'Hogaanka & Daryeelka'
    },
    {
      name: 'Bushro',
      role: 'Macallimad',
      experience: '3 Sano Khibrad',
      desc: 'Khabiirad ku xeeldheer barbaarinta marxaladaha hore ee xannaanada, higgaadda codadka xarfaha, iyo dhisidda jacaylka akhriska.',
      specialty: 'Higgaad & Xannaano'
    },
    {
      name: 'Bahjo',
      role: 'Macallimad',
      experience: '5 Sano Khibrad',
      desc: 'Macallimad khibrad weyn u leh xifdinta Qur’aanka kariimka ah, tajwiidka saxda ah, iyo ku tababaridda carruurta salaadda iyo aadaabta.',
      specialty: 'Qur’aan & Tajwiid'
    },
    {
      name: 'Ruqiyo',
      role: 'Macallimad',
      experience: '3 Sano Khibrad',
      desc: 'Ku takhasustay baridda xisaabta carruurta, fanka gacanta, iyo luqadaha iyadoo adeegsanaysa habka ciyaarta iyo hal-abuurka casriga ah.',
      specialty: 'Xisaab & Ciyaaraha Waxbarashada'
    }
  ]

  // FAQs (No financial/pricing information)
  const faqs = [
    {
      q: 'Waa maxay waqtiyada shaqada ee Itqaan Kids Academy?',
      a: 'Akadeemiyadu waxay shaqaysaa Sabti ilaa Arbaco laga bilaabo 7:00 AM subaxnimo ilaa 4:00 PM galabnimo. Waa jadwal buuxa oo waalidiinta u fududeynaya inay shaqadooda qabsadaan iyagoo ku kalsoon daryeelka ilmahooda.'
    },
    {
      q: 'Da’ intee le’eg ayaad aqbashaan?',
      a: 'Waxaan qaabilnaa carruurta da’doodu u dhexeyso 3 ilaa 10 sano jir, waxaana loo qaybiyaa fasallo yaryar oo ku habboon garaadkooda iyo marxaladda korriineed ee ay joogaan.'
    },
    {
      q: 'Sidee loo xaqiijiyaa badbaadada iyo nadaafadda ilmaha?',
      a: 'Iskuulku wuxuu leeyahay kormeer joogto ah, goobo hurdo oo nadaafadoodu heer sareyso, shaqaale daryeel oo gaar ah, iyo basas leh kormeerayaal ilmaha gacanta ku wareejiya waalidka.'
    },
    {
      q: 'Sidee u shaqeeyaa adeegga gaadiidka baska?',
      a: 'Basaska akadeemiyadu waxay carruurta ka soo qaadaan albaabka gurigooda aroortii, galabtiina isla albaabka guriga ayay ku celiyaan iyagoo ay weheliyaan shaqaale kormeerayaal ah oo daryeelaya badbaadadooda.'
    },
    {
      q: 'Sidee loo diiwaangeliyaa ilmaha cusub?',
      a: 'Waalidku wuxuu ku diiwaangelin karaa ilmihiisa isagoo buuxiya foomka diiwaangelinta ee website-ka ama toos ula xiriira xafiiska maamulka WhatsApp ama taleefan si loo qabto ballan booqasho.'
    },
    {
      q: 'Halkee ayay ku taallaa xarunta Itqaan Kids Academy?',
      a: 'Waxaan ku naallaa Suuq Liif, Madiino — Muqdisho, Soomaaliya. Waxaad nagala soo xiriiri kartaa taleefannada: +252 610 646 540 ama +252 610 646 550.'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-charcoal-800 font-sans flex flex-col selection:bg-burgundy-800 selection:text-white">
      {/* 1. TOP UTILITY BAR (Quiet, informative, no financial references) */}
      <div className="bg-cream-100/90 border-b border-cream-200 text-charcoal-700 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-800 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600"></span>
              Diiwaangelinta 2026 Waa Furan Tahay
            </span>
            <span className="hidden md:inline text-slate-500">
              Da’da 3–10 Sano • Suuq Liif, Madiino, Muqdisho
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-burgundy-700" />
              <span>7:00 AM – 4:00 PM (Sabti - Arbaco)</span>
            </div>
            <a
              href="tel:+252610646540"
              className="flex items-center gap-1 text-burgundy-800 hover:text-burgundy-950 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+252 610 646 540</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. REFINED HEADER: Clean, minimal, NO horizontal link clutter, NO logo tagline */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Name on the Left (Properly aligned, NO tagline underneath) */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <img
                src="/logo.jpg"
                alt="ITQAAN Kids Academy"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-amberGold-400 shadow-xs transition group-hover:scale-105"
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-burgundy-900 font-heading">
                ITQAAN <span className="text-amberGold-600 font-normal">KIDS</span> ACADEMY
              </span>
            </a>

            {/* Right Side: WhatsApp + Enrollment CTA + Expandable Menu Toggle Button */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/252610646540"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-sage-800 bg-sage-50 hover:bg-sage-100 border border-sage-200 transition transform hover:-translate-y-0.5 active:scale-95"
                title="Nagala soo xiriir WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-sage-700" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Primary Enrollment CTA */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-burgundy-800 hover:bg-burgundy-900 shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Is-diiwaangeli</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Expandable Navigation Hamburger Button */}
              <button
                type="button"
                onClick={() => setNavMenuOpen(true)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-charcoal-800 hover:text-burgundy-900 bg-cream-50 hover:bg-cream-100 border border-slate-200 transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-burgundy-800/30"
                aria-label="Fur liiska qaybaha"
                title="Qaybaha Website-ka"
              >
                <Menu className="w-5 h-5 text-charcoal-800" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2B. EXPANDABLE NAVIGATION DRAWER (Clean, elegant, opens on hamburger click) */}
      {navMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setNavMenuOpen(false)}
          ></div>

          {/* Slide-out Navigation Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-elevated border-l border-slate-100 flex flex-col justify-between p-6 sm:p-8 z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.jpg"
                    alt="ITQAAN Logo"
                    className="w-10 h-10 rounded-full border border-amberGold-400 object-cover"
                  />
                  <span className="text-base font-bold text-burgundy-900 font-heading">
                    ITQAAN KIDS ACADEMY
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setNavMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-charcoal-900 hover:bg-slate-100 transition focus:outline-none"
                  aria-label="Xir liiska"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Navigation Links */}
              <nav className="py-6 space-y-1">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setNavMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:text-burgundy-900 hover:bg-cream-50 transition group"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-burgundy-800 group-hover:translate-x-0.5 transition" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setNavMenuOpen(false)
                  setModalOpen(true)
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-burgundy-800 hover:bg-burgundy-900 shadow-sm transition flex items-center justify-center gap-2"
              >
                <span>Diiwaangeli Ilmahaaga</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-slate-500 pt-1">
                Suuq Liif, Madiino — Muqdisho • 7:00 AM – 4:00 PM
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO SECTION (Authentic Islamic education photography, NO financial references) */}
      <section id="home" className="relative bg-gradient-to-b from-cream-50 via-white to-white py-12 sm:py-16 lg:py-20 border-b border-cream-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT COLUMN: Clean typography and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-100 border border-cream-300/80 text-burgundy-900 text-xs font-semibold">
                <Sparkle className="w-3.5 h-3.5 text-amberGold-600 fill-amberGold-500" />
                <span>Akadeemiyad ku dhisan Aqoon, Akhlaaq iyo Tarbiyah</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.18] font-heading">
                Dhisidda Mustaqbalka Ilmahaaga Iyadoo Loo Marayo{' '}
                <span className="text-burgundy-800">Aqoon</span>,{' '}
                <span className="text-amberGold-700">Akhlaaq</span> iyo{' '}
                <span className="text-sage-700">Tarbiyah</span>.
              </h1>

              {/* Supporting Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Itqaan Kids Academy waa xarun waxbarasho oo casri ah oo u heellan carruurta da’doodu u dhexeyso <strong>3 ilaa 10 sano</strong>. Waxaan si dhammaystiran isugu xirnaa barashada Qur’aanka kariimka, aadaabta Islaamka, culuunta maadiga ah (Af-Soomaali, English, Xisaab), iyo barbaarinta shakhsiyad toosan.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-burgundy-800 hover:bg-burgundy-900 shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Diiwaangeli Ilmahaaga</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#about"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-charcoal-800 bg-white hover:bg-cream-100 border border-slate-200 transition flex items-center justify-center gap-2"
                >
                  <span>Baro Manhajkayaga</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              </div>

              {/* Key Trust Metrics (Educational, NO prices) */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-burgundy-800 font-heading">3 – 10</div>
                  <div className="text-xs text-slate-500">Sano (Da’da Ardayda)</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-sage-700 font-heading">7am – 4pm</div>
                  <div className="text-xs text-slate-500">Jadwal Daryeel Buuxa</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-amberGold-700 font-heading">Diin & Maadi</div>
                  <div className="text-xs text-slate-500">Manhaj Dhammaystiran</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Authentic Islamic educational photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                <div className="relative rounded-3xl overflow-hidden border border-cream-300/80 shadow-card bg-cream-100/50 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-elevated">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/hero-islamic-learning.jpg"
                      alt="Muslim child learning and reciting the Holy Quran in classroom setting at Itqaan Kids Academy"
                      className="w-full h-72 sm:h-84 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Micro Trust Badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-md flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sage-100 text-sage-800 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-charcoal-900">Deegaan Aamin & Islaami ah</div>
                      <div className="text-[11px] text-slate-500">Qur’aan, Tajwiid, Salaad & Daryeel Joogto ah</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: ABOUT ITQAAN – INTRODUCTION TO THE ACADEMY */}
      <section id="about" className="py-16 sm:py-20 bg-cream-50/60 border-b border-cream-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image: Authentic Islamic classroom setting */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-cream-300 shadow-soft bg-white p-2 group hover:shadow-card transition-all duration-300">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/about-islamic-academy.jpg"
                    alt="Students in traditional Islamic attire learning together in classroom at Itqaan"
                    className="w-full h-72 sm:h-88 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-burgundy-800">
                    AKADEEMIYADDA ITQAAN
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Suuq Liif, Madiino — Muqdisho, Soomaaliya
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editorial Story */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-sage-700" />
                <span>Nagu Saabsan • About Itqaan</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight font-heading">
                Barbaarinta Ugu Horreysa Ee Ilmahaaga — Sal Dhigga Noloshiisa
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Itqaan Kids Academy waxaa loo aasaasay in ay buuxiso baahida weyn ee waalidiinta Muqdisho u qabaan goob waxbarasho oo carruurtooda (3–10 sano) si daryeel leh ugu dhisaysa aqoonta diiniga ah iyo maadiga ah iyada oo aan midna laga tegin.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Waxaan aaminsannahay in sannadaha hore ee carruurnimadu yihiin xilliga ugu qaalisan ee la dhiso caqliga, dabeecadda iyo ixtiraamka ilmaha. Sidaas darteed, waxaan bixinnaa jawi nabad ah, farxad leh, oo macallimiin khibrad u leh carruurta ay ku wehelinayaan tillaabo kasta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Macallimiin u tababaran</strong> barbaarinta carruurta iyo higgaadda Qur’aanka.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Jadwal buuxa (7am - 4pm)</strong> oo daryeelaya waxbarashada, cuntada iyo hurdada.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Xiriir joogto ah</strong> oo lala yeesho waalidka iyo warbixinno asbuucli ah.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Gaadiid nabad ah</strong> oo guri-ilaa-dugsi ah oo leh kormeerayaal gaar ah.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: EDUCATIONAL PHILOSOPHY (DIIN + MAADI + TARBIYAH) */}
      <section id="education" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-800 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-200">
              Falsafadda Waxbarashada
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Saddexda Tiir: Diin + Maadi + Tarbiyah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Waxbarashadu ma aha buug kaliya; waa dhisidda shakhsiyad Muslim ah oo xog-ogaal ah, kalsooni leh, oo anfacda qoyska iyo bulshada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-burgundy-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.accent}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900 font-heading">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-semibold text-burgundy-800 mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-burgundy-800">
                    <span>Manhajka Itqaan</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: WHAT CHILDREN LEARN (CURRICULUM DOMAINS) */}
      <section className="py-16 sm:py-20 bg-cream-50/50 border-b border-cream-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 bg-sage-100 px-3 py-1 rounded-full">
              Waxyaabaha Ilmahaagu Baranaayo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Culuunta & Xirfadaha Aasaasiga ah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Qorshe waxbarasho oo habaysan oo u sahlaya ilmaha inuu maalin kasta helo cilmi cusub oo dhinacyo badan taabanaya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumDomains.map((domain, idx) => {
              const IconComp = domain.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:-translate-y-1 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-cream-100 text-burgundy-800 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-charcoal-900 font-heading">
                      {domain.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 space-y-1.5">
                    {domain.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sage-700 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: LEARNING THROUGH PLAY (MAQAL, MUUQAAL, CIYAAR) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amberGold-800 bg-amberGold-100 px-3 py-1 rounded-full">
                  Habka Waxbaridda Casriga ah
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
                  Maqal • Muuqaal • Ciyaar
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                  Carruurtu isku si wax uma bartaan; qaar waxay wax ku fahmaan codka, qaar sawirrada, qaarna marka ay gacanta ku qabtaan. Manhajka Itqaan wuxuu isku xirayaa saddexda hab si ilmo kasta u helo fursad uu ku iftiimo.
                </p>
              </div>

              <div className="space-y-4">
                {methodologies.map((m, idx) => {
                  const IconComp = m.icon
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-cream-50/70 border border-cream-200/80 flex items-start gap-4 hover:bg-cream-100/70 transition"
                    >
                      <div className="w-10 h-10 rounded-lg bg-burgundy-50 text-burgundy-800 flex items-center justify-center shrink-0 mt-0.5 border border-burgundy-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-charcoal-900 font-heading">
                            {m.title}
                          </h4>
                          <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            {m.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Image: Sheikh sitting with children wearing white qamis */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-card bg-cream-100/50 p-2 group hover:shadow-elevated transition-all duration-300">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/sheikh-with-students.jpg"
                    alt="Shiikh dhex fadhiya carruur qamiisyo cadcad wada wata oo baranaya Qur’aanka Kariimka ee Itqaan Kids Academy"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white rounded-xl mt-2 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Barashada Qur’aanka & Tarbiyada Toosan</span>
                  <span className="text-burgundy-800 font-bold">100% Deegaan Islaami ah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: EDUCATIONAL PROGRAMS (AGE-BASED LEARNING 3 TO 10 YEARS) */}
      <section className="py-16 sm:py-20 bg-cream-50/60 border-b border-cream-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-800 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-200">
              Heerarka Da’da (3 – 10 Sano)
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Barnaamijyada Waxbarasho Ee Da’ Walba
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Marxalad kasta oo ilmahaagu maro waxay leedahay qorshe manhaj oo si taxadar leh loogu habeeyay garaadkiisa iyo awoodda garashadiisa.
            </p>
          </div>

          {/* Age Group Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {agePrograms.map((prog, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveAgeTab(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition transform active:scale-95 ${
                  activeAgeTab === idx
                    ? 'bg-burgundy-800 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200'
                }`}
              >
                {prog.age}
              </button>
            ))}
          </div>

          {/* Active Age Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-amberGold-100 text-amberGold-800">
                    {agePrograms[activeAgeTab].age}
                  </span>
                  <span className="text-sm font-bold text-burgundy-800">
                    {agePrograms[activeAgeTab].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">
                  Hadafyada & Qorshaha Marxaladdan
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {agePrograms[activeAgeTab].summary}
                </p>

                {/* Subjects */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Maadooyinka & Casharrada:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agePrograms[activeAgeTab].subjects.map((subj, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-cream-50 border border-cream-200 text-charcoal-800 text-xs sm:text-sm font-semibold"
                      >
                        ✓ {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Natiijooyinka la hiigsanayo:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {agePrograms[activeAgeTab].goals.map((goal, gIdx) => (
                      <div key={gIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Box (Free of financial/pricing references) */}
              <div className="lg:col-span-4 bg-cream-50 rounded-2xl p-6 border border-cream-200 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-burgundy-800">
                  Daryeelka & Adeegyada
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-cream-200">
                    <span>Saacadaha:</span>
                    <span className="font-semibold text-charcoal-900">7:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-cream-200">
                    <span>Gaadiidka Baska:</span>
                    <span className="font-semibold text-charcoal-900">Guri-ilaa-dugsi</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-cream-200">
                    <span>Cuntada:</span>
                    <span className="font-semibold text-charcoal-900">Quraac & Qado Nadiif ah</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Hurdo / Qayluulo:</span>
                    <span className="font-semibold text-charcoal-900">Qol gaar ah oo nadiif ah</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-burgundy-800 hover:bg-burgundy-900 transition transform hover:-translate-y-0.5 active:scale-95"
                >
                  Diiwaangeli Heerkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: A DAY AT ITQAAN (DAILY SCHEDULE: 7:00 AM TO 4:00 PM) */}
      <section id="schedule" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 bg-sage-100 px-3 py-1 rounded-full">
              Jadwalka Maalinta Ilmaha
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Maalin Buuxda oo Qorshaysan (7:00 AM – 4:00 PM)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Ilmahaagu wuxuu ku jiraa deegaan si nidaamsan isugu xiraya waxbarasho tayo leh, nafaqo caafimaad, cibaado iyo nasasho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 hover:-translate-y-1 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cream-100 text-burgundy-900 border border-cream-200">
                        <Clock className="w-3.5 h-3.5 text-burgundy-800" />
                        {item.time}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-charcoal-900 font-heading mt-0.5">
                        {item.activity}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-sage-800">
                    ✓ {item.badge}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. SECTION 8: CHILDCARE AND SAFETY */}
      <section id="safety" className="py-16 sm:py-20 bg-cream-50/50 border-b border-cream-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-800 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-200">
                  Badbaadada & Daryeelka
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
                  Caafimaad, Cunto Nafaqo leh & Badbaado Buuxda
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                  Badbaadada ilmahaaga ayaa ah mudnaantayada koowaad. Waxaan abuurnay deegaan nadaafaddiisu heer sareyso oo carruurtu ku dareemaan nabadgelyo iyo daryeel la mid ah midka qoyskooda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {childcareFeatures.map((feat, idx) => {
                  const IconComp = feat.icon
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 space-y-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cream-100 text-burgundy-800 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-charcoal-900 font-heading">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Image: Authentic Islamic study environment */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-card bg-white p-2 group hover:shadow-elevated transition-all duration-300">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/quran-study-madrasa.jpg"
                    alt="Young Muslim student in clean Islamic madrasa environment at Itqaan"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-xs font-bold text-charcoal-900">
                    Kormeer & Daryeel Joogto ah
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Deegaan nadaafaddiisu sarrayso oo ku habboon barbaarinta toosan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECTION 9: MEET OUR TEACHERS */}
      <section id="teachers" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 bg-sage-100 px-3 py-1 rounded-full">
              Kooxda & Macallimiinta
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Gacmo Aamin ah oo Carruurta Jecel
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Macallimiinteenu waxay leeyihiin khibrad, sabir iyo jacayl ay ugu adeegaan ilmahaaga si uu waxbarashada u jeclaado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 hover:-translate-y-1 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Avatar badge */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-cream-100 border border-cream-300 text-burgundy-900 flex items-center justify-center font-bold text-xl shadow-xs">
                    {teacher.name[0]}
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-charcoal-900 font-heading">
                      {teacher.name}
                    </h3>
                    <div className="text-xs font-semibold text-burgundy-800 mt-0.5">
                      {teacher.role}
                    </div>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                      {teacher.experience}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 text-center leading-relaxed">
                    {teacher.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Takhasuska
                  </div>
                  <div className="text-xs font-semibold text-charcoal-800 mt-0.5">
                    {teacher.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SECTION 10: ENROLLMENT & REGISTRATION (100% Free of financial/pricing references) */}
      <section id="enrollment" className="py-16 sm:py-20 bg-cream-50/70 border-b border-cream-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-800 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-200">
              Diiwaangelinta Ardayda
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Ku Soo Biir Qoyska ITQAAN Kids Academy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Waxaan kugu soo dhoweynaynaa gacmo furan. Diiwaangelintu waa mid fudud oo hufan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Enrollment Steps & Highlights */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy-800">
                  Tallaabooyinka Qoritaanka
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 font-heading mt-1">
                  Sidee Ilmaha Loogu Qoraa Itqaan?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Waxaan fududeynay nidaamka si waalidiintu u helaan adeeg hagar-la’aan ah.
                </p>
              </div>

              {/* Steps List */}
              <div className="space-y-4 py-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-burgundy-100 text-burgundy-900 font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-charcoal-900">
                      Gudbi Xogta Ilmaha
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Buuxi foomka diiwaangelinta ama toos noogala soo xiriir WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amberGold-100 text-amberGold-900 font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-charcoal-900">
                      Booqashada Xarunta & Qiimeynta
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Soo booqo xarunteena si aad u aragto fasallada, macallimiintana ula kulanto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-sage-100 text-sage-900 font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-charcoal-900">
                      Xaqiijinta Booska & Bilowga
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Waxaa la diyaarinayaa baska ilmaha iyo agabkiisa waxbarasho si uu u bilaabo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-burgundy-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-burgundy-800" />
                  <span>Adeegyada Ay Ardaydu Helaan:</span>
                </div>
                <div className="space-y-1 text-slate-600">
                  <div>• Waxbarasho tayo leh oo isugu jirta Diin iyo Maadi</div>
                  <div>• Quraac iyo Qado nafaqo leh maalin kasta</div>
                  <div>• Gaadiid aamin ah oo guri-ilaa-dugsi ah</div>
                  <div>• Kormeer caafimaad iyo qol gaar ah oo nasasho ah</div>
                </div>
              </div>
            </div>

            {/* Right: Quick Enrollment Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 bg-sage-100 px-3 py-1 rounded-full">
                  Foomka Codsiga
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mt-2 font-heading">
                  Diiwaangeli Ilmahaaga Maanta
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Geli xogta ilmahaaga si toos ahna ugala xiriir xafiiska maamulka WhatsApp.
                </p>
              </div>

              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Magaca Waalidka *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Tusaale: Axmed Cali"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Taleefanka Waalidka (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tusaale: 061XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Magaca Ilmaha *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="Magaca ilmaha"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Da’da Ilmaha (3 – 10) *
                    </label>
                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                    >
                      <option value="3">3 Sano (Xannaano)</option>
                      <option value="4">4 Sano (Xannaano)</option>
                      <option value="5">5 Sano (Xannaano)</option>
                      <option value="6">6 Sano (Higgaad / Fasalka 1)</option>
                      <option value="7">7 Sano (Fasalka 2)</option>
                      <option value="8">8 Sano (Fasalka 3)</option>
                      <option value="9">9 Sano (Fasalka 4)</option>
                      <option value="10">10 Sano (Fasalka 4+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Ma u baahan tahay Gaadiidka Baska?
                    </label>
                    <select
                      name="needBus"
                      value={formData.needBus}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                    >
                      <option value="Haa">Haa, waxaan rabaa gaadiid</option>
                      <option value="Maya">Maya, aniga ayaa keenaya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Goobta ama Xaafadda (Optional)
                    </label>
                    <input
                      type="text"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tusaale: Madiino, Suuq Liif agtiisa..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-burgundy-800 hover:bg-burgundy-900 shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Dir Codsiga Diiwaangelinta (WhatsApp)</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Markaad gujiso badhanka, xafiiska maamulka ayaa toos kuugu soo jawaabaya WhatsApp si loo xaqiijiyo booska ilmahaaga.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              Su’aalaha Waalidiinta
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 mt-3 font-heading">
              Su’aalaha Inta Badan La Isweydiiyo
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Jawaabaha su’aalaha ugu muhiimsan ee waalidiintu naga weydiiyaan nidaamka Itqaan.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/40 transition"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left font-bold text-charcoal-900 flex items-center justify-between gap-4 hover:bg-slate-100/70 transition"
                  >
                    <span className="text-xs sm:text-sm flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-burgundy-800 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-burgundy-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 14. SECTION 11: CONTACT SECTION (EXACT PRESERVED CONTACT DETAILS) */}
      <section id="contact" className="py-16 sm:py-20 bg-cream-50/70 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Contact details */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-burgundy-800 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-200">
                Nala Soo Xiriir
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 font-heading">
                Booqo Xarunta ITQAAN Kids Academy
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Albaabadayadu mar walba way u furan yihiin waalidiinta raba inay indhahooda ku arkaan fasallada, nadaafadda, iyo jawiga waxbarasho ee carruurtooda.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-burgundy-50 text-burgundy-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Goobta / Cinwaanka</div>
                    <div className="text-sm sm:text-base font-bold text-charcoal-900 mt-0.5">
                      Suuq Liif, Madiino — Muqdisho, Soomaaliya
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Taleefannada Rasmiga ah</div>
                    <div className="flex flex-wrap gap-3 pt-0.5 text-sm sm:text-base font-bold text-burgundy-900">
                      <a href="tel:+252610646540" className="hover:underline">
                        +252 610 646 540
                      </a>
                      <span className="text-slate-300">|</span>
                      <a href="tel:+252610646550" className="hover:underline">
                        +252 610 646 550
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amberGold-50 text-amberGold-800 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Website-ka Rasmiga ah</div>
                    <a
                      href="https://www.itqaanacademy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-bold text-charcoal-900 hover:text-burgundy-800 underline mt-0.5 inline-block"
                    >
                      www.itqaanacademy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Location Visit Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-cream-100 text-burgundy-900 border border-cream-300 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">
                  Suuq Liif, Madiino
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Muqdisho, Soomaaliya
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 text-xs text-slate-600 space-y-2 text-left border border-cream-200">
                <div className="flex justify-between">
                  <span>Maalmaha Shaqada:</span>
                  <span className="font-bold text-charcoal-900">Sabti – Arbaco</span>
                </div>
                <div className="flex justify-between">
                  <span>Saacadaha Xafiiska:</span>
                  <span className="font-bold text-burgundy-800">7:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Adeegga Baska:</span>
                  <span className="font-bold text-sage-800">Dagmada oo dhan</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="https://wa.me/252610646540?text=Asc%20Itqaan%20Academy%20waxaan%20rabaa%20in%20aan%20soo%20booqo%20xaruntiina"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl font-semibold text-xs sm:text-sm text-sage-900 bg-sage-100 hover:bg-sage-200 border border-sage-200 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-sage-700" />
                  <span>Ballan Booqasho (WhatsApp)</span>
                </a>

                <a
                  href="tel:+252610646540"
                  className="flex-1 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-burgundy-800 hover:bg-burgundy-900 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Wac Maamulka</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. SECTION 12: PROFESSIONAL FOOTER (Free of financial/pricing references) */}
      <footer className="bg-charcoal-900 text-slate-300 text-xs sm:text-sm pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-charcoal-800">
            {/* Academy Branding */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="ITQAAN Kids Academy"
                  className="w-11 h-11 rounded-full border border-amberGold-400 object-cover"
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight font-heading">
                    AKADEEMIYADDA ITQAAN
                  </div>
                  <div className="text-[11px] text-amberGold-400 font-semibold tracking-wider">
                    ITQAAN KIDS ACADEMY
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Xarun waxbarasho iyo barbaarineed oo casri ah oo ku taalla Suuq Liif, Madiino, Muqdisho. Waxaan dhisnaa aqoonta, akhlaaqda iyo kalsoonida carruurta da’doodu u dhexeyso 3 ilaa 10 sano.
              </p>

              <div className="text-xs text-cream-200 font-medium">
                "Ilmahaaga ku barbaarinaya aqoon, akhlaaq iyo tarbiyah"
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Bogagga Muhiimka ah
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#home" className="hover:text-white transition">Hoyga</a></li>
                <li><a href="#about" className="hover:text-white transition">Nagu Saabsan</a></li>
                <li><a href="#education" className="hover:text-white transition">Waxbarashada</a></li>
                <li><a href="#schedule" className="hover:text-white transition">Jadwalka</a></li>
                <li><a href="#safety" className="hover:text-white transition">Daryeelka & Badbaadada</a></li>
                <li><a href="#teachers" className="hover:text-white transition">Macallimiinta</a></li>
                <li><a href="#enrollment" className="hover:text-white transition">Diiwaangelinta</a></li>
              </ul>
            </div>

            {/* Curriculum & Services (No Pricing) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Adeegyada & Manhajka
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#education" className="hover:text-white transition">Qur’aanka & Tajwiidka</a></li>
                <li><a href="#education" className="hover:text-white transition">Aadaabta & Salaadda</a></li>
                <li><a href="#education" className="hover:text-white transition">Af-Soomaali & English</a></li>
                <li><a href="#safety" className="hover:text-white transition">Quraac & Qado Caafimaad</a></li>
                <li><a href="#safety" className="hover:text-white transition">Gaadiidka Baska</a></li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Xiriirka Rasmiga ah
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amberGold-400 shrink-0" />
                  <a href="tel:+252610646540" className="hover:text-white">
                    +252 610 646 540
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amberGold-400 shrink-0" />
                  <a href="tel:+252610646550" className="hover:text-white">
                    +252 610 646 550
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-amberGold-400 shrink-0" />
                  <a href="https://www.itqaanacademy.com" target="_blank" rel="noreferrer" className="hover:text-white">
                    www.itqaanacademy.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amberGold-400 shrink-0 mt-0.5" />
                  <span>Suuq Liif, Madiino — Muqdisho</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {CURRENT_YEAR} ITQAAN KIDS ACADEMY. Xuquuqda oo dhan way dhowran tahay.</p>
            <p className="text-slate-400">
              Diin • Maadi • Tarbiyah | Suuq Liif, Madiino, Muqdisho
            </p>
          </div>
        </div>
      </footer>

      {/* 16. FLOATING ACTION BUTTON */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/252610646540?text=Asc%20Itqaan%20Kids%20Academy!%20Waxaan%20rabaa%20macluumaad%20dheeraad%20ah."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-sage-700 hover:bg-sage-800 text-white shadow-soft hover:shadow-card flex items-center justify-center transition-all transform hover:scale-105 border border-white"
          title="Nagala soo xiriir WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* 17. ENROLLMENT MODAL (Free of financial/pricing references) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-card relative max-h-[90vh] overflow-y-auto border border-slate-100">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-charcoal-900 hover:bg-slate-100 transition"
              aria-label="Xir foomka"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <img
                src="/logo.jpg"
                alt="ITQAAN Logo"
                className="w-12 h-12 rounded-full mx-auto border border-amberGold-400 object-cover shadow-xs mb-2"
              />
              <h3 className="text-xl font-bold text-charcoal-900 font-heading">
                Is-Diiwaangelinta Ardayda
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Geli macluumaadka si aad boos uga qabsato ITQAAN Kids Academy.
              </p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Magaca Waalidka *
                </label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Geli magacaaga oo buuxa"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Taleefanka Waalidka (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Tusaale: 061XXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Magaca Ilmaha *
                </label>
                <input
                  type="text"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Magaca ilmahaaga"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Da’da Ilmaha *
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                  >
                    <option value="3">3 Sano</option>
                    <option value="4">4 Sano</option>
                    <option value="5">5 Sano</option>
                    <option value="6">6 Sano</option>
                    <option value="7">7 Sano</option>
                    <option value="8">8 Sano</option>
                    <option value="9">9 Sano</option>
                    <option value="10">10 Sano</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gaadiidka Baska *
                  </label>
                  <select
                    name="needBus"
                    value={formData.needBus}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                  >
                    <option value="Haa">Haa, waxaan rabaa gaadiid</option>
                    <option value="Maya">Maya, aniga ayaa keenaya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Goobta ama Xaafadda (Optional)
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tusaale: Madiino, Suuq Liif agtiisa..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-800 bg-slate-50/50"
                />
              </div>

              <div className="p-3 rounded-xl bg-cream-100 border border-cream-200 text-xs text-charcoal-700">
                <span className="font-bold text-burgundy-900">Diiwaangelin Furan:</span> Sannad dugsiyeedka 2026. Xafiiska maamulka ayaa kula xiriiri doona si loo xaqiijiyo booska ilmahaaga.
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition text-xs sm:text-sm"
                >
                  Ka Laabo
                </button>
                <button
                  type="submit"
                  className="flex-2 py-3 rounded-xl font-semibold text-white bg-burgundy-800 hover:bg-burgundy-900 transition text-xs sm:text-sm flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Xaqiiji WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
