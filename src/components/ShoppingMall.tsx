import { useState, useEffect } from 'react';
import { 
  Store, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Globe,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const translations = {
  en: {
    nav: {
      home: 'Home',
      directory: 'Directory',
      events: 'Events',
      gallery: 'Gallery',
      map: 'Map',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title: 'Grand Plaza Mall',
      subtitle: 'Where Shopping Meets Luxury',
      cta: 'Explore Stores'
    },
    directory: {
      title: 'Shop Directory',
      subtitle: 'Discover our curated collection of premium stores',
      all: 'All Stores'
    },
    events: {
      title: 'Upcoming Events',
      subtitle: 'Don\'t miss out on our exciting promotions and events'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Experience the elegance of Grand Plaza'
    },
    map: {
      title: 'Mall Map',
      subtitle: 'Find your way around',
      floor: 'Floor'
    },
    testimonials: {
      title: 'What Our Visitors Say',
      subtitle: 'Real experiences from our valued guests'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'We\'re here to help',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      hours: 'Opening Hours',
      address: 'Address',
      addressText: '123 Main Street, City Center'
    },
    categories: {
      fashion: 'Fashion',
      electronics: 'Electronics',
      food: 'Food & Dining',
      entertainment: 'Entertainment'
    }
  },
  ku: {
    nav: {
      home: 'سەرەکی',
      directory: 'لیستی فرۆشگاکان',
      events: 'بۆنەکان',
      gallery: 'وێنەخانە',
      map: 'نەخشە',
      testimonials: 'بۆچوونەکانمان',
      contact: 'پەیوەندی'
    },
    hero: {
      title: 'پاساژی گراند پلازا',
      subtitle: 'شوێنی کۆبوونەوەی کڕین و جوانی',
      cta: 'گەڕان بە فرۆشگاکاندا'
    },
    directory: {
      title: 'لیستی فرۆشگاکان',
      subtitle: 'دۆزینەوەی کۆمەڵێک فرۆشگای تایبەت',
      all: 'هەموو فرۆشگاکان'
    },
    events: {
      title: 'بۆنە داهاتووەکان',
      subtitle: 'بۆنە و داشکاندنە جێگیرەکانمان لەدەست مەدە'
    },
    gallery: {
      title: 'وێنەخانە',
      subtitle: 'ئەزموونی جوانی گراند پلازا'
    },
    map: {
      title: 'نەخشەی پاساژ',
      subtitle: 'ڕێگای خۆت بدۆزەوە',
      floor: 'نهۆم'
    },
    testimonials: {
      title: 'بۆچوونی میوانەکانمان',
      subtitle: 'ئەزموونی ڕاستەقینە لە میوانە بەنرخەکانمان'
    },
    contact: {
      title: 'پەیوەندیمان پێوە بکە',
      subtitle: 'ئێمە ئامادەین بۆ یارمەتیدان',
      name: 'ناوت',
      email: 'ئیمەیڵەکەت',
      message: 'پەیامەکەت',
      send: 'ناردنی پەیام',
      hours: 'کاتی کارکردن',
      address: 'ناونیشان',
      addressText: 'شەقامی سەرەکی ١٢٣، ناوەندی شار'
    },
    categories: {
      fashion: 'مۆدێل',
      electronics: 'ئەلیکترۆنیات',
      food: 'خواردن و خواردنەوە',
      entertainment: 'کات بەسەربردن'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      directory: 'دليل المتاجر',
      events: 'الفعاليات',
      gallery: 'العرض',
      map: 'خريطة',
      testimonials: 'آراء',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'مجمع جراند بلازا',
      subtitle: 'حيث يلتقي التسوق بالفخامة',
      cta: 'استكشف المتاجر'
    },
    directory: {
      title: 'دليل المتاجر',
      subtitle: 'اكتشف مجموعتنا المختارة من المتاجر الفاخرة',
      all: 'جميع المتاجر'
    },
    events: {
      title: 'الفعاليات القادمة',
      subtitle: 'لا تفوت عروضنا وفعالياتنا المثيرة'
    },
    gallery: {
      title: 'العرض',
      subtitle: 'اختبر أناقة جراند بلازا'
    },
    map: {
      title: 'خريطة المجمع',
      subtitle: 'اعثر على طريقك',
      floor: 'الطابق'
    },
    testimonials: {
      title: 'آراء زوارنا',
      subtitle: 'تجارب حقيقية من ضيوفنا الكرام'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا للمساعدة',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      hours: 'ساعات العمل',
      address: 'العنوان',
      addressText: 'شارع الرئيسي ١٢٣، وسط المدينة'
    },
    categories: {
      fashion: 'الأزياء',
      electronics: 'الإلكترونيات',
      food: 'الطعام والشراب',
      entertainment: 'الترفيه'
    }
  }
};

const stores = [
  { id: 1, name: 'Luxury Fashion Boutique', category: 'fashion', floor: 1, location: { x: 20, y: 30 } },
  { id: 2, name: 'Tech World', category: 'electronics', floor: 2, location: { x: 60, y: 40 } },
  { id: 3, name: 'Gourmet Bistro', category: 'food', floor: 3, location: { x: 40, y: 60 } },
  { id: 4, name: 'Cinema Complex', category: 'entertainment', floor: 4, location: { x: 50, y: 20 } },
  { id: 5, name: 'Designer Shoes', category: 'fashion', floor: 1, location: { x: 70, y: 35 } },
  { id: 6, name: 'Smart Electronics', category: 'electronics', floor: 2, location: { x: 30, y: 45 } },
  { id: 7, name: 'Italian Restaurant', category: 'food', floor: 3, location: { x: 55, y: 65 } },
  { id: 8, name: 'Gaming Zone', category: 'entertainment', floor: 4, location: { x: 25, y: 55 } },
  { id: 9, name: 'Jewelry Palace', category: 'fashion', floor: 1, location: { x: 45, y: 25 } },
  { id: 10, name: 'Mobile Hub', category: 'electronics', floor: 2, location: { x: 80, y: 50 } },
  { id: 11, name: 'Coffee House', category: 'food', floor: 3, location: { x: 35, y: 70 } },
  { id: 12, name: 'Kids Playground', category: 'entertainment', floor: 4, location: { x: 65, y: 30 } }
];

const events = [
  {
    id: 1,
    title: 'Summer Sale Extravaganza',
    date: 'June 15-30, 2024',
    description: 'Up to 70% off on selected items across all stores',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
  },
  {
    id: 2,
    title: 'Fashion Week Showcase',
    date: 'July 5-7, 2024',
    description: 'Latest trends from international designers',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80'
  },
  {
    id: 3,
    title: 'Food Festival',
    date: 'July 20-22, 2024',
    description: 'Culinary delights from around the world',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
  },
  {
    id: 4,
    title: 'Tech Expo 2024',
    date: 'August 10-12, 2024',
    description: 'Discover the latest in technology and innovation',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
  }
];

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&q=80', alt: 'Mall Interior', caption: 'Luxurious Shopping Space' },
  { id: 2, url: 'https://images.unsplash.com/photo-1555529669-2269763671c1?w=800&q=80', alt: 'Luxury Store', caption: 'Premium Retail Experience' },
  { id: 3, url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80', alt: 'Food Court', caption: 'Gourmet Dining Area' },
  { id: 4, url: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80', alt: 'Shopping Area', caption: 'Modern Shopping Experience' },
  { id: 5, url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80', alt: 'Entertainment Zone', caption: 'Entertainment & Leisure' },
  { id: 6, url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80', alt: 'Fashion Store', caption: 'Designer Fashion Boutique' }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing shopping experience! The mall is beautifully designed and has everything you need.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Ahmed Ali',
    rating: 5,
    comment: 'Great variety of stores and excellent customer service. Highly recommended!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    rating: 4,
    comment: 'Love the atmosphere and the food court has amazing options. Will definitely come back!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
  }
];

export default function ShoppingMall() {
  const [language, setLanguage] = useState<'en' | 'ku' | 'ar'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredStore, setHoveredStore] = useState<number | null>(null);

  const t = translations[language];
  const isRTL = language === 'ar' || language === 'ku';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredStores = stores.filter(store => 
    (selectedCategory === 'all' || store.category === selectedCategory) &&
    store.floor === selectedFloor
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A1128]/98 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-[#D4AF37] flex items-center space-x-2 group cursor-pointer">
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
              <span className="group-hover:text-white transition-colors duration-300">Grand Plaza</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-white hover:text-[#D4AF37] transition-all duration-300 relative group font-medium px-2"
                >
                  {value}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <Globe className="text-white w-5 h-5 animate-pulse-slow" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-white border-2 border-[#D4AF37] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 cursor-pointer"
              >
                <option value="en" className="bg-[#0A1128]">EN</option>
                <option value="ku" className="bg-[#0A1128]">KU</option>
                <option value="ar" className="bg-[#0A1128]">AR</option>
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1128]/98 backdrop-blur-xl animate-slide-down">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left text-white hover:text-[#D4AF37] py-3 transition-colors hover:bg-[#D4AF37]/10 rounded-lg px-4"
                >
                  {value}
                </button>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <Globe className="text-white w-5 h-5" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-transparent text-white border-2 border-[#D4AF37] rounded-lg px-3 py-2 w-full"
                >
                  <option value="en" className="bg-[#0A1128]">English</option>
                  <option value="ku" className="bg-[#0A1128]">کوردی</option>
                  <option value="ar" className="bg-[#0A1128]">العربية</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 animate-ken-burns"
            poster="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=1920&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-modern-shopping-mall-6532/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/60 to-[#0A1128]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A1128_100%)]" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="inline-block animate-float mb-6">
              <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-up tracking-tight">
              <span className="bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent animate-gradient">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-12 animate-slide-up animation-delay-200 font-light tracking-wide">
              {t.hero.subtitle}
            </p>
            <Button
              onClick={() => scrollToSection('directory')}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A1128] font-bold text-lg px-10 py-7 rounded-full transition-all duration-500 transform hover:scale-110 animate-slide-up animation-delay-400 shadow-2xl hover:shadow-[#D4AF37]/50 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Shop Directory */}
      <section id="directory" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0A1128] rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <TrendingUp className="w-10 h-10 text-[#D4AF37] animate-bounce-slow" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0A1128] mb-6 tracking-tight">
              {t.directory.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.directory.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={`${selectedCategory === 'all' 
                ? 'bg-[#0A1128] hover:bg-[#0A1128]/90 shadow-lg shadow-[#0A1128]/30' 
                : 'border-2 border-[#0A1128] text-[#0A1128] hover:bg-[#0A1128] hover:text-white'
              } transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base font-semibold`}
            >
              {t.directory.all}
            </Button>
            {Object.entries(t.categories).map(([key, value]) => (
              <Button
                key={key}
                onClick={() => setSelectedCategory(key)}
                variant={selectedCategory === key ? 'default' : 'outline'}
                className={`${selectedCategory === key 
                  ? 'bg-[#0A1128] hover:bg-[#0A1128]/90 shadow-lg shadow-[#0A1128]/30' 
                  : 'border-2 border-[#0A1128] text-[#0A1128] hover:bg-[#0A1128] hover:text-white'
                } transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base font-semibold`}
              >
                {value}
              </Button>
            ))}
          </div>

          {/* Stores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stores
              .filter(store => selectedCategory === 'all' || store.category === selectedCategory)
              .map((store, index) => (
                <Card 
                  key={store.id} 
                  onMouseEnter={() => setHoveredStore(store.id)}
                  onMouseLeave={() => setHoveredStore(null)}
                  className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in border-2 border-transparent hover:border-[#D4AF37] bg-white group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#0A1128]/5 transition-all duration-500"></div>
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1128]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${hoveredStore === store.id ? 'shadow-xl' : ''}`}>
                      <Store className="text-[#D4AF37] group-hover:text-[#0A1128] transition-colors duration-300" size={28} />
                    </div>
                    <CardTitle className="text-[#0A1128] group-hover:text-[#D4AF37] transition-colors duration-300 text-xl">
                      {store.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center justify-between text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      <span className="capitalize font-medium">{t.categories[store.category as keyof typeof t.categories]}</span>
                      <span className="bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 px-3 py-1 rounded-full font-semibold">
                        {t.map.floor} {store.floor}
                      </span>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#0A1128] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 bg-[#0A1128] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,#D4AF37_0%,transparent_50%)] opacity-10"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,#D4AF37_0%,transparent_50%)] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <Calendar className="w-10 h-10 text-[#D4AF37] animate-bounce-slow" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t.events.title}
            </h2>
            <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto">
              {t.events.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 animate-fade-in bg-white border-2 border-transparent hover:border-[#D4AF37] group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0A1128] px-4 py-2 rounded-full flex items-center space-x-2 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Calendar size={18} />
                  </div>
                  <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-2"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#0A1128] group-hover:text-[#D4AF37] transition-colors duration-300 text-xl">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#D4AF37] font-semibold mb-3">{event.date}</p>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0A1128] mb-6 tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="relative h-96 md:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={galleryImages[galleryIndex].url}
                alt={galleryImages[galleryIndex].alt}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-3xl font-bold mb-2">{galleryImages[galleryIndex].caption}</h3>
                <p className="text-[#D4AF37] text-lg">{galleryImages[galleryIndex].alt}</p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>

            <button
              onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-[#D4AF37] p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-125 group backdrop-blur-sm border-2 border-transparent hover:border-white"
            >
              <ChevronLeft className="text-[#0A1128] group-hover:text-white transition-colors duration-300" size={28} />
            </button>

            <button
              onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-[#D4AF37] p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-125 group backdrop-blur-sm border-2 border-transparent hover:border-white"
            >
              <ChevronRight className="text-[#0A1128] group-hover:text-white transition-colors duration-300" size={28} />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`relative h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                    index === galleryIndex 
                      ? 'bg-[#D4AF37] w-12 shadow-lg shadow-[#D4AF37]/50' 
                      : 'bg-gray-300 w-3 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-12">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setGalleryIndex(index)}
                className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-500 group ${
                  index === galleryIndex 
                    ? 'ring-4 ring-[#D4AF37] scale-110 shadow-2xl shadow-[#D4AF37]/30' 
                    : 'hover:scale-110 hover:shadow-xl'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {index === galleryIndex && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Sparkles className="text-[#0A1128]" size={24} />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section id="map" className="py-24 px-4 bg-[#0A1128] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#D4AF37_0%,transparent_70%)] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <MapPin className="w-10 h-10 text-[#D4AF37] animate-bounce-slow" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t.map.title}
            </h2>
            <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto">
              {t.map.subtitle}
            </p>
          </div>

          {/* Floor Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((floor) => (
              <Button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                variant={selectedFloor === floor ? 'default' : 'outline'}
                className={`${selectedFloor === floor 
                  ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A1128] shadow-2xl shadow-[#D4AF37]/50 scale-110' 
                  : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1128]'
                } transition-all duration-500 transform hover:scale-110 px-8 py-6 text-base font-bold`}
              >
                {t.map.floor} {floor}
              </Button>
            ))}
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500">
            <div className="relative w-full h-96 md:h-[600px] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500">
              {/* Floor Plan Grid */}
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-px bg-gray-300/20">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="bg-white/50" />
                ))}
              </div>

              {/* Store Markers */}
              {filteredStores.map((store, index) => (
                <div
                  key={store.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-fade-in"
                  style={{
                    left: `${store.location.x}%`,
                    top: `${store.location.y}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative">
                    <MapPin 
                      className="text-[#D4AF37] drop-shadow-2xl transition-all duration-500 group-hover:scale-150 group-hover:-translate-y-2 animate-bounce-subtle" 
                      size={36} 
                      fill="#D4AF37"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#D4AF37] rounded-full opacity-30 group-hover:opacity-50 animate-ping-slow"></div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform -translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#0A1128] text-white px-6 py-3 rounded-xl shadow-2xl whitespace-nowrap text-base font-semibold border-2 border-[#D4AF37]">
                        {store.name}
                      </div>
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#0A1128] mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500">
                <h3 className="font-bold text-[#0A1128] mb-3 text-lg">Legend</h3>
                <div className="space-y-2 text-base">
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-[#D4AF37]" fill="#D4AF37" />
                    <span className="text-gray-700 font-medium">Store Location</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Store List */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStores.map((store, index) => (
                <div 
                  key={store.id}
                  className="flex items-center space-x-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-[#D4AF37]/10 hover:to-[#0A1128]/5 transition-all duration-500 border-2 border-transparent hover:border-[#D4AF37] hover:shadow-xl group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:rotate-6 transition-all duration-500">
                    <Store className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1128] group-hover:text-[#D4AF37] transition-colors duration-300 text-base">
                      {store.name}
                    </p>
                    <p className="text-sm text-gray-600 capitalize font-medium">
                      {t.categories[store.category as keyof typeof t.categories]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <Star className="w-10 h-10 text-[#D4AF37] animate-bounce-slow" fill="#D4AF37" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0A1128] mb-6 tracking-tight">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 animate-fade-in border-2 border-transparent hover:border-[#D4AF37] group bg-white relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <CardContent className="pt-8 relative z-10">
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-[#D4AF37] group-hover:scale-110 transition-all duration-500 shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                        <Star size={16} className="fill-white text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1128] text-lg group-hover:text-[#D4AF37] transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center space-x-1 mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className="fill-[#D4AF37] text-[#D4AF37] animate-star-pulse" 
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#0A1128] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_70%)] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <Mail className="w-10 h-10 text-[#D4AF37] animate-bounce-slow" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-2xl hover:shadow-[#D4AF37]/20 bg-white">
              <CardContent className="pt-8">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="group">
                    <label className="block text-sm font-bold mb-3 text-gray-700 group-focus-within:text-[#D4AF37] transition-colors duration-300">
                      {t.contact.name}
                    </label>
                    <Input 
                      placeholder={t.contact.name}
                      className="border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] h-14 text-base transition-all duration-300 hover:border-[#D4AF37]/50"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold mb-3 text-gray-700 group-focus-within:text-[#D4AF37] transition-colors duration-300">
                      {t.contact.email}
                    </label>
                    <Input 
                      type="email"
                      placeholder={t.contact.email}
                      className="border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] h-14 text-base transition-all duration-300 hover:border-[#D4AF37]/50"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold mb-3 text-gray-700 group-focus-within:text-[#D4AF37] transition-colors duration-300">
                      {t.contact.message}
                    </label>
                    <Textarea 
                      placeholder={t.contact.message}
                      rows={6}
                      className="border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] text-base transition-all duration-300 hover:border-[#D4AF37]/50"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A1128] font-bold py-7 text-lg shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-500 transform hover:scale-105 group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{t.contact.send}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group bg-white transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1128]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Phone className="text-[#D4AF37]" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1128] mb-2 text-lg">Phone</h3>
                        <p className="text-gray-600 font-medium">+2 234 567 8900</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group bg-white transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1128]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Mail className="text-[#D4AF37]" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1128] mb-2 text-lg">Email</h3>
                        <p className="text-gray-600 font-medium">info@grandplaza.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group bg-white transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1128]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Clock className="text-[#D4AF37]" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1128] mb-2 text-lg">{t.contact.hours}</h3>
                        <p className="text-gray-600 font-medium">10 AM - 10 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group bg-white transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1128]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <MapPin className="text-[#D4AF37]" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1128] mb-2 text-lg">{t.contact.address}</h3>
                        <p className="text-gray-600 font-medium">{t.contact.addressText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-2xl h-72 border-4 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 transform hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194951854847!2d-122.41941548468195!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1635450000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-[#D4AF37] mb-4 flex items-center justify-center space-x-3 group cursor-pointer">
            <Sparkles className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
            <span className="group-hover:text-white transition-colors duration-300">Grand Plaza Mall</span>
          </div>
          <p className="text-gray-400 text-lg">
            © 2024 Grand Plaza. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scroll-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes star-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-star-pulse {
          animation: star-pulse 1s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        html.ltr {
          direction: ltr;
        }

        html.rtl {
          direction: rtl;
        }
      `}</style>
    </div>
  );
}


