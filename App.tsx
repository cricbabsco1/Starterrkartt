
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronRight, Layout, CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, Instagram, Plus, Trash2, Edit3, Save, Lock, Mail } from 'lucide-react';
import { INITIAL_DATA, FAQ_DATA } from './constants';
import { SiteData, PricingPlan, PortfolioItem } from './types';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-zinc-900">
          STARTER<span className="text-[#F4C430]">KART</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
              {link.name}
            </a>
          ))}
          <Link to="/admin" className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <Lock size={18} />
          </Link>
          <a href="#contact" className="bg-[#F4C430] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:brightness-95 transition-all">
            Get Started
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-zinc-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 px-6 pb-8 pt-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-900">
              {link.name}
            </a>
          ))}
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-400 flex items-center gap-2">
            Admin Login <Lock size={18} />
          </Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#F4C430] text-black w-full text-center py-4 rounded-xl font-bold text-lg mt-4">
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ links }: { links: { whatsapp: string, portfolio: string } }) => (
  <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1">
      <h1 className="text-4xl md:text-7xl font-black leading-[1.1] text-zinc-900 mb-6">
        All-in-one solution for clothing shops to <span className="text-[#F4C430]">sell online.</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-600 font-medium mb-10 max-w-2xl">
        Catalog • COD • UPI • Shipping • WhatsApp Orders • Checkout
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
        <a href="#portfolio" className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all group">
          View Work <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={links.whatsapp} className="w-full sm:w-auto bg-[#F4C430] text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:brightness-95 transition-all">
          <MessageCircle size={20} /> WhatsApp Us
        </a>
      </div>
    </div>
    <div className="flex-1 w-full max-w-md md:max-w-none relative">
      <div className="absolute -inset-4 bg-[#F4C430]/10 blur-3xl rounded-full"></div>
      <img src="https://picsum.photos/800/800?commerce" alt="E-commerce Dashboard" className="relative w-full rounded-2xl shadow-2xl border border-zinc-100" />
    </div>
  </section>
);

const ClientSegments = () => (
  <section className="bg-zinc-50 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-zinc-400 font-bold uppercase tracking-widest text-sm mb-10">We empower</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        {['Clothing Shops', 'Boutiques', 'Streetwear Brands', 'Thrift Stores', 'Kids Wear', 'Instagram Sellers'].map(item => (
          <span key={item} className="text-lg md:text-2xl font-extrabold text-zinc-900">{item}</span>
        ))}
      </div>
    </div>
  </section>
);

const Services = ({ services }: { services: SiteData['services'] }) => {
  const IconMap: any = { Layout, CreditCard, Truck, ShieldCheck };
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">What We Do</h2>
        <div className="h-2 w-24 bg-[#F4C430]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((pillar) => {
          const Icon = IconMap[pillar.icon] || Layout;
          return (
            <div key={pillar.title} className="p-8 border border-zinc-100 rounded-3xl hover:border-[#F4C430] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center text-[#F4C430] mb-6">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">{pillar.title}</h3>
              <ul className="space-y-3">
                {pillar.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-500 font-medium">
                    <CheckCircle2 size={16} className="text-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Portfolio = ({ portfolio }: { portfolio: PortfolioItem[] }) => (
  <section id="portfolio" className="py-24 bg-zinc-900 text-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Portfolio / Work</h2>
        <div className="h-2 w-24 bg-[#F4C430]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolio.map(item => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#F4C430] text-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-black group-hover:text-[#F4C430] transition-colors">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = ({ plans }: { plans: PricingPlan[] }) => (
  <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-4">Pricing Plans</h2>
      <p className="text-zinc-500 font-medium text-lg">Transparent pricing with no hidden monthly costs.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map(plan => (
        <div key={plan.id} className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.isPopular ? 'border-[#F4C430] shadow-2xl scale-105 z-10' : 'border-zinc-100'} transition-all`}>
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F4C430] text-black px-4 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">
              Most brands choose this
            </div>
          )}
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">{plan.price}</span>
            </div>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
          </div>
          
          <div className="flex-1 space-y-4 mb-10">
            {plan.features.map(f => (
              <div key={f} className="flex items-start gap-3 text-zinc-600 text-sm font-medium">
                <CheckCircle2 size={18} className="text-[#F4C430] flex-shrink-0 mt-0.5" />
                {f}
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
             <p className="text-xs font-bold uppercase text-zinc-400">Outcome</p>
             <p className="text-sm font-semibold text-zinc-900">{plan.outcome}</p>
             <p className="text-xs font-bold uppercase text-zinc-400 pt-2 border-t border-zinc-200">Ideal For</p>
             <p className="text-sm text-zinc-600">{plan.idealFor}</p>
          </div>

          <button className={`w-full py-4 rounded-2xl font-black text-lg ${plan.isPopular ? 'bg-[#F4C430] text-black' : 'bg-zinc-900 text-white'}`}>
            Select Plan
          </button>
        </div>
      ))}
    </div>
    
    <div className="mt-16 p-8 bg-zinc-50 rounded-3xl border border-dashed border-zinc-300 text-center max-w-4xl mx-auto">
      <h4 className="text-lg font-black mb-2">Pricing Notes</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-500 font-medium">
        <div>One-time setup fee. No hidden monthly charges from Starterkart.</div>
        <div>Platform fees (e.g. payment gateway) are paid directly to provider.</div>
        <div>Monthly subscription (if any) is paid to Shopify/platform, not Starterkart.</div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-zinc-900 py-16 px-6 overflow-hidden">
    <div className="flex animate-marquee gap-12 whitespace-nowrap">
      {[
        { label: 'COD', icon: Truck },
        { label: 'UPI', icon: CreditCard },
        { label: 'WhatsApp Orders', icon: MessageCircle },
        { label: 'Shipping', icon: Truck },
        { label: 'Mobile First', icon: Layout },
        { label: 'Catalog', icon: Layout },
        { label: 'Easy to Manage', icon: CheckCircle2 },
      ].map((feat, i) => (
        <div key={i} className="flex items-center gap-3 bg-zinc-800 px-6 py-4 rounded-2xl border border-zinc-700">
          <feat.icon size={20} className="text-[#F4C430]" />
          <span className="text-white font-bold">{feat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-4">Simple Process</h2>
      <div className="h-2 w-24 bg-[#F4C430]"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { step: "01", title: "Send Photos", desc: "Share your catalog images and details on WhatsApp." },
        { step: "02", title: "We Design", desc: "Our team designs your storefront optimized for sales." },
        { step: "03", title: "Payments & COD", desc: "We integrate UPI and enable COD checkout flows." },
        { step: "04", title: "Launch", desc: "Your clothing brand goes live and starts taking orders." },
      ].map((s, i) => (
        <div key={i} className="relative p-10 bg-white rounded-3xl border border-zinc-100 group">
          <span className="text-5xl font-black text-zinc-50 opacity-0 group-hover:opacity-100 absolute top-4 right-4 transition-all duration-500 select-none">{s.step}</span>
          <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black mb-6 z-10 relative">{s.step}</div>
          <h3 className="text-xl font-black mb-2">{s.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
          {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-zinc-200 z-20" size={32} />}
        </div>
      ))}
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-24 bg-zinc-50 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">FAQ</h2>
        <p className="text-zinc-500 font-medium">Common questions for clothing commerce</p>
      </div>
      <div className="space-y-4">
        {FAQ_DATA.map((item, i) => (
          <details key={i} className="bg-white border border-zinc-100 rounded-2xl p-6 group cursor-pointer">
            <summary className="list-none flex items-center justify-between font-black text-lg">
              {item.q}
              <ChevronRight className="group-open:rotate-90 transition-transform text-[#F4C430]" />
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed font-medium">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = ({ links }: { links: SiteData['contactLinks'] }) => (
  <section id="contact" className="py-32 px-6 text-center max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#F4C430]/10 blur-[120px] rounded-full -z-10"></div>
    <h2 className="text-4xl md:text-7xl font-black mb-10 text-zinc-900 leading-[1.1]">
      Let’s build your <br/><span className="text-[#F4C430]">clothing brand</span> online.
    </h2>
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
      <a href={links.whatsapp} className="w-full sm:w-auto bg-[#F4C430] text-black px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
        <MessageCircle size={24} /> WhatsApp Us
      </a>
      <a href={`mailto:${links.email}`} className="w-full sm:w-auto bg-white text-zinc-900 px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl border border-zinc-100">
        <Mail size={24} /> Email Us
      </a>
    </div>
    <div className="mt-16 flex items-center justify-center gap-6">
       <div className="flex -space-x-3">
          {[1,2,3,4].map(i => (
            <img key={i} src={`https://picsum.photos/100/100?face=${i}`} className="w-10 h-10 rounded-full border-2 border-white" />
          ))}
       </div>
       <p className="text-sm font-bold text-zinc-500">Joined by 150+ clothing shops this month</p>
    </div>
  </section>
);

// --- Admin Section ---

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials. (Hint: admin)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-zinc-50">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100">
        <div className="text-center mb-8">
           <h1 className="text-3xl font-black mb-2">Owner Login</h1>
           <p className="text-zinc-500">Manage your Starterkart site</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-zinc-400 uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-zinc-50 rounded-xl border border-zinc-200 outline-none focus:border-[#F4C430] transition-colors"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
          <button type="submit" className="w-full py-4 bg-[#F4C430] text-black font-black rounded-xl hover:brightness-95 transition-all">
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ data, setData }: { data: SiteData, setData: (d: SiteData) => void }) => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'pricing' | 'contacts'>('portfolio');

  const updatePortfolio = (id: string, updates: Partial<PortfolioItem>) => {
    setData({
      ...data,
      portfolio: data.portfolio.map(item => item.id === id ? { ...item, ...updates } : item)
    });
  };

  const removePortfolioItem = (id: string) => {
    setData({ ...data, portfolio: data.portfolio.filter(i => i.id !== id) });
  };

  const addPortfolioItem = () => {
    const newItem: PortfolioItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Project',
      type: 'Demo',
      imageUrl: 'https://picsum.photos/800/1200'
    };
    setData({ ...data, portfolio: [newItem, ...data.portfolio] });
  };

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-black">Admin Panel</h1>
        <Link to="/" className="text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors">Logout</Link>
      </div>

      <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
        {(['portfolio', 'pricing', 'contacts'] as const).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-black capitalize transition-all whitespace-nowrap ${activeTab === tab ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Manage Portfolio</h2>
            <button onClick={addPortfolioItem} className="flex items-center gap-2 bg-[#F4C430] text-black px-4 py-2 rounded-lg font-bold text-sm">
              <Plus size={18} /> Add Project
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.portfolio.map(item => (
              <div key={item.id} className="p-6 bg-white border border-zinc-200 rounded-3xl space-y-4">
                <img src={item.imageUrl} className="w-full h-48 object-cover rounded-xl" />
                <input 
                  className="w-full p-2 border border-zinc-100 rounded-lg font-bold"
                  value={item.title}
                  onChange={(e) => updatePortfolio(item.id, { title: e.target.value })}
                />
                <select 
                  className="w-full p-2 border border-zinc-100 rounded-lg"
                  value={item.type}
                  onChange={(e) => updatePortfolio(item.id, { type: e.target.value as any })}
                >
                  <option value="Demo">Demo</option>
                  <option value="Client">Client</option>
                </select>
                <div className="flex gap-2">
                  <button onClick={() => removePortfolioItem(item.id)} className="flex-1 p-2 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'pricing' && (
        <div className="space-y-12">
          {data.pricing.map((plan, idx) => (
            <div key={plan.id} className="p-8 bg-white border border-zinc-200 rounded-3xl space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black">Plan {idx + 1}: {plan.name}</h3>
                <Edit3 size={20} className="text-zinc-300" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-zinc-400 uppercase mb-1">Name</label>
                  <input className="w-full p-3 bg-zinc-50 rounded-xl" value={plan.name} onChange={(e) => {
                    const next = [...data.pricing];
                    next[idx].name = e.target.value;
                    setData({ ...data, pricing: next });
                  }} />
                </div>
                <div>
                  <label className="block text-xs font-black text-zinc-400 uppercase mb-1">Price</label>
                  <input className="w-full p-3 bg-zinc-50 rounded-xl" value={plan.price} onChange={(e) => {
                    const next = [...data.pricing];
                    next[idx].price = e.target.value;
                    setData({ ...data, pricing: next });
                  }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-zinc-400 uppercase mb-1">Description</label>
                <textarea className="w-full p-3 bg-zinc-50 rounded-xl h-24" value={plan.description} onChange={(e) => {
                   const next = [...data.pricing];
                   next[idx].description = e.target.value;
                   setData({ ...data, pricing: next });
                }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'contacts' && (
        <div className="p-8 bg-white border border-zinc-200 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold">Contact Links</h2>
          <div>
            <label className="block text-xs font-black text-zinc-400 uppercase mb-1">WhatsApp URL (Include Country Code)</label>
            <input className="w-full p-3 bg-zinc-50 rounded-xl mb-4" value={data.contactLinks.whatsapp} onChange={(e) => setData({
              ...data,
              contactLinks: { ...data.contactLinks, whatsapp: e.target.value }
            })} />
            
            <label className="block text-xs font-black text-zinc-400 uppercase mb-1">Contact Email</label>
            <input className="w-full p-3 bg-zinc-50 rounded-xl" value={data.contactLinks.email} onChange={(e) => setData({
              ...data,
              contactLinks: { ...data.contactLinks, email: e.target.value }
            })} />
          </div>
        </div>
      )}

      <div className="mt-12 text-center text-sm text-zinc-400 font-bold">
        Admin data is saved in your browser locally.
      </div>
    </div>
  );
};

// --- Main Site Wrapper ---

const MainSite = ({ data }: { data: SiteData }) => (
  <main className="animate-in fade-in duration-1000">
    <Hero links={data.contactLinks} />
    <ClientSegments />
    <Services services={data.services} />
    <Portfolio portfolio={data.portfolio} />
    <Pricing plans={data.pricing} />
    <Features />
    <Process />
    <FAQ />
    <ContactCTA links={data.contactLinks} />
    <footer className="py-12 border-t border-zinc-100 px-6 text-center text-zinc-400 text-sm font-bold">
      <div className="mb-4 flex flex-col items-center gap-2">
        <a href={`mailto:${data.contactLinks.email}`} className="text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1">
          <Mail size={14} /> {data.contactLinks.email}
        </a>
      </div>
      <p>© {new Date().getFullYear()} Starterkart Solutions. All rights reserved.</p>
    </footer>
  </main>
);

const App = () => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('starterkart_site_data');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem('starterkart_site_data', JSON.stringify(siteData));
  }, [siteData]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSite data={siteData} />} />
        <Route path="/admin" element={
          isLoggedIn ? 
            <AdminDashboard data={siteData} setData={setSiteData} /> : 
            <AdminLogin onLogin={() => setIsLoggedIn(true)} />
        } />
      </Routes>
    </Router>
  );
};

export default App;
