'use client';

import { useRef, useState, useEffect } from 'react';

type Selections = { opkald: string | null; ordre: string | null };

export default function Home() {
  const callsSliderRef = useRef<HTMLInputElement>(null);
  const orderSliderRef = useRef<HTMLInputElement>(null);
  const [callsDisplay, setCallsDisplay] = useState(40);
  const [orderDisplay, setOrderDisplay] = useState(175);
  const [roiResult, setRoiResult] = useState('');
  const [upsellText, setUpsellText] = useState('');
  const [timeText, setTimeText] = useState('');

  const [step, setStep] = useState(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [selections, setSelections] = useState<Selections>({ opkald: null, ordre: null });
  const [navn, setNavn] = useState('');
  const [telefon, setTelefon] = useState('');
  const [pizzaria, setPizzaria] = useState('');
  const [email, setEmail] = useState('');
  const [s1Error, setS1Error] = useState(false);
  const [s2Error, setS2Error] = useState(false);
  const [s3Loading, setS3Loading] = useState(true);

  function calcROI(calls: number, order: number) {
    const annualRevenue = Math.round(calls * (order * 1.15) * 52);
    const upsellAmount = Math.round(calls * (order * 0.15) * 52);
    const annualHours = Math.round((calls * 52 * 5) / 60);
    setRoiResult(annualRevenue.toLocaleString('da-DK') + ',-');
    setUpsellText('+' + upsellAmount.toLocaleString('da-DK') + ' kr.');
    setTimeText(annualHours + 't');
  }

  useEffect(() => { calcROI(callsDisplay, orderDisplay); }, []);

  function updateROI() {
    const calls = parseInt(callsSliderRef.current?.value || '50');
    const order = parseInt(orderSliderRef.current?.value || '250');
    setCallsDisplay(calls);
    setOrderDisplay(order);
    calcROI(calls, order);
  }

  function selectCard(group: keyof Selections, value: string, el: HTMLElement) {
    setSelections(prev => ({ ...prev, [group]: value }));
    const container = el.closest('[id$="-cards"]') as HTMLElement || el.parentElement;
    container?.querySelectorAll('.choice-card').forEach((c: Element) => {
      c.classList.remove('border-mait', 'bg-orange-50');
      c.classList.add('border-slate-200', 'bg-slate-50');
    });
    el.classList.remove('border-slate-200', 'bg-slate-50');
    el.classList.add('border-mait', 'bg-orange-50');
  }

  async function submitStep1() {
    if (!navn || !telefon) { setS1Error(true); return; }
    setS1Error(false);
    try {
      const res = await fetch('https://n8n.getmait.dk/webhook/getmait-lead-init', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ navn, telefon }),
      });
      const data = await res.json();
      setLeadId(data.lead_id);
    } catch { /* fortsæt alligevel */ }
    setStep(2);
  }

  async function submitStep2() {
    if (!pizzaria || !email || !selections.opkald || !selections.ordre) {
      setS2Error(true); return;
    }
    setS2Error(false);
    setStep(3);
    setS3Loading(true);
    fetch('https://n8n.getmait.dk/webhook/getmait-lead-complete', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lead_id: leadId, pizzaria, email, navn,
        opkald_niveau: selections.opkald,
        ordre_niveau: selections.ordre,
        telefon,
      }),
    }).catch(() => {});
    setTimeout(() => setS3Loading(false), 1500);
  }

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const targetY = target.getBoundingClientRect().top + window.scrollY - 104;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });
  }, []);

  const pd = (n: number) => {
    if (n < step) return 'w-9 h-9 rounded-full bg-green-500 text-white text-xs font-black flex items-center justify-center transition-all duration-300 shrink-0';
    if (n === step) return 'w-9 h-9 rounded-full bg-mait text-white text-xs font-black flex items-center justify-center shadow-lg shadow-orange-200/60 transition-all duration-300 shrink-0';
    return 'w-9 h-9 rounded-full bg-slate-200 text-slate-400 text-xs font-black flex items-center justify-center transition-all duration-300 shrink-0';
  };

  return (
    <>
    {/* Navigationsbar */}
        <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="bg-mait p-1.5 rounded-lg text-white shadow-lg shadow-orange-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight">Get<span className="text-mait">mait</span></span>
                </div>
    
                <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-500">
                    <a href="#problem" className="hover:text-mait transition">Hvorfor nu?</a>
                    <a href="#voice" className="hover:text-mait transition">Voice AI</a>
                    <a href="#roi" className="hover:text-mait transition">ROI Beregner</a>
                    <a href="#demo" className="hover:text-mait transition">Prøv Mait</a>
                </div>
    
                <div className="flex items-center gap-4">
                    <a href="#demo" className="btn-primary px-7 py-3 rounded-full text-sm font-bold">
                        Prøv Mait gratis
                    </a>
                </div>
            </div>
        </nav>
    
        {/* Hero Sektion */}
        <section className="relative pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-mait"></span>
                    </span>
                    Bygget specielt til pizzariaer
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.05]">
                    Telefonen er dit pizzarias <br />
                    <span className="text-mait">største værditab.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                    Hvert ubesvaret opkald fredag aften er en tabt ordre. Getmaits Voice AI tager telefonen for dig, mersælger toppings og drikkevarer automatisk — og frigør dit personale til ovnen.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <a href="#demo" className="btn-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3">
                        Hør en Voice-demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a href="#roi" className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-sm">
                        Beregn din gevinst
                    </a>
                </div>
            </div>
        </section>
    
        {/* Problem/Værditab Sektion */}
        <section id="problem" className="py-24 px-6 bg-slate-900 text-white rounded-[64px] mx-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-mait/10 blur-[120px] rounded-full"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Du efterlader penge <br /><span className="text-mait">på bordet hver dag.</span>
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/><path d="m10 13 4-4"/><path d="m14 13-4-4"/></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">Ubesvarede ordrer</h4>
                                <p className="text-slate-400">Fredag aften er din travleste time — og også den hvor flest opkald bliver misset. Kunden venter ikke; de ringer til pizzariaet på den anden side af gaden.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7 3 5-3 5"/><path d="m19 7-3 5 3 5"/></svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">Manglende mersalg</h4>
                                <p className="text-slate-400">En travl medarbejder glemmer at spørge om ekstra toppings, dipsauce eller drikkevarer. Getmaits AI glemmer det aldrig — og øger din gennemsnitsordre hver eneste gang.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="grid grid-cols-2 gap-4">
                    <div className="saas-card bg-white/5 border-white/10 p-8 text-center animate-float">
                        <span className="block text-4xl font-extrabold text-mait mb-2">~15%</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-tight">Tabt omsætning grundet optaget telefon</p>
                    </div>
                    <div className="saas-card bg-white/5 border-white/10 p-8 text-center animate-float" style={{animationDelay: "1s"}}>
                        <span className="block text-4xl font-extrabold text-mait mb-2">12t</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-tight">Spildt tid på simple spørgsmål pr. uge</p>
                    </div>
                    <div className="saas-card bg-white/5 border-white/10 p-8 text-center animate-float" style={{animationDelay: "0.5s"}}>
                        <span className="block text-4xl font-extrabold text-mait mb-2">100%</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-tight">Svar-rate på alle indgående opkald</p>
                    </div>
                    <div className="saas-card bg-white/5 border-white/10 p-8 text-center animate-float" style={{animationDelay: "1.5s"}}>
                        <span className="block text-4xl font-extrabold text-mait mb-2">+18%</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-tight">Gns. stigning i ordreværdi</p>
                    </div>
                </div>
            </div>
        </section>
    
        {/* ROI Beregner */}
        <section id="roi" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="inline-block px-4 py-1 bg-orange-50 text-mait rounded-full text-[11px] font-extrabold uppercase tracking-wider border border-orange-100">
                            ROI-Analysen
                        </div>
                        <h2 className="text-5xl font-extrabold tracking-tight">Hvad koster dit <br /><span className="text-mait">nuværende setup?</span></h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Indtast dine tal herunder og se, hvor meget din omsætning vil stige, når vi fjerner ventetiden og automatiserer dit mersalg.
                        </p>
    
                        <div className="space-y-12 pt-6">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center font-bold">
                                    <label className="text-slate-400 uppercase text-xs tracking-widest leading-none">Ubesvarede opkald pr. uge</label>
                                    <span className="text-2xl text-slate-900">{callsDisplay}</span>
                                </div>
                                <input type="range" ref={callsSliderRef} onInput={updateROI} min="0" max="150" defaultValue="40" className="w-full" />
                            </div>
    
                            <div className="space-y-6">
                                <div className="flex justify-between items-center font-bold">
                                    <label className="text-slate-400 uppercase text-xs tracking-widest leading-none">Gennemsnitsordre (kr)</label>
                                    <span className="text-2xl text-slate-900">{orderDisplay}</span>
                                </div>
                                <input type="range" ref={orderSliderRef} onInput={updateROI} min="100" max="500" step="5" defaultValue="175" className="w-full" />
                            </div>
                        </div>
                    </div>
    
                    <div className="saas-card bg-slate-950 p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-mait opacity-20 rounded-full blur-[60px]"></div>
    
                        <div className="relative z-10 space-y-10 text-center">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Årlig værditilvækst</p>
                                <div className="text-4xl md:text-5xl font-black text-mait tracking-tighter break-all">{roiResult}</div>
                            </div>
    
                            <div className="h-px bg-white/10 w-full"></div>
    
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-left space-y-1">
                                    <span className="block text-2xl font-extrabold text-mait">{upsellText}</span>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Gevinst ved mersalg</span>
                                </div>
                                <div className="text-left space-y-1 border-l border-white/5 pl-8">
                                    <span className="block text-2xl font-extrabold text-white">{timeText}</span>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Frigjort tid / år</span>
                                </div>
                            </div>
    
                            <a href="#demo" className="btn-primary w-full py-5 rounded-2xl font-bold text-lg inline-block">
                                Jeg vil have disse tal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        {/* Dashboard Preview */}
        <section id="dashboard" className="py-32 bg-slate-50 border-y border-slate-100 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <div className="saas-card overflow-hidden shadow-2xl bg-white border-slate-200">
                        <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Performance Matrix</span>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-3 gap-4 mb-10">
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Konvertering</span>
                                    <span className="text-xl font-bold text-slate-900">94.2%</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Besparelse</span>
                                    <span className="text-xl font-bold text-slate-900">8.420 kr.</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Mersalg</span>
                                    <span className="text-xl font-bold text-mait">+2.140 kr.</span>
                                </div>
                            </div>
    
                            <div className="space-y-4">
                                <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100 p-4 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end gap-1 px-4 pb-2">
                                        <div className="w-full bg-mait/20 h-[40%] rounded-t-sm"></div>
                                        <div className="w-full bg-mait/20 h-[60%] rounded-t-sm"></div>
                                        <div className="w-full bg-mait/40 h-[80%] rounded-t-sm"></div>
                                        <div className="w-full bg-mait h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(234,88,12,0.3)]"></div>
                                        <div className="w-full bg-mait/60 h-[70%] rounded-t-sm"></div>
                                        <div className="w-full bg-mait/30 h-[50%] rounded-t-sm"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Aktivitet (Opkaldshåndtering)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="order-1 lg:order-2 space-y-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Datadrevet drift <br /><span className="text-mait">gør dig uovervindelig.</span></h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Med dit personlige dashboard har du altid fuldt overblik over hver eneste krone, vi genererer for dig. Se din konverteringsrate, dit mersalg og dine mest populære kampagner i realtid.
                    </p>
                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4 text-slate-700 font-semibold italic">
                            <div className="w-6 h-6 rounded-full bg-mait/10 flex items-center justify-center text-mait">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            Daglig rapportering af overskud og performance
                        </div>
                        <div className="flex items-center gap-4 text-slate-700 font-semibold italic">
                            <div className="w-6 h-6 rounded-full bg-mait/10 flex items-center justify-center text-mait">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            Se præcis hvilke pizzaer og toppings kunderne bestiller mest
                        </div>
                        <div className="flex items-center gap-4 text-slate-700 font-semibold italic">
                            <div className="w-6 h-6 rounded-full bg-mait/10 flex items-center justify-center text-mait">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            Lyt til Voice-optagelser og optimer løbende (valgfrit)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        {/* USPs */}
        <section id="voice" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Vores løfte til din forretning</h2>
                    <p className="text-slate-500 text-lg">Vi er ikke bare software. Vi er din nye mest pålidelige medarbejder.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-[24px] shadow-sm flex items-center justify-center text-mait">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight italic uppercase">Total Driftssikkerhed</h4>
                        <p className="text-slate-500 leading-relaxed">Vi har bygget vores platform til at håndtere rushet fredag og lørdag aften. Når din ovn kører for fuld kraft, tager Getmait sig af telefonen — uden fejl, uden pauser.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-[24px] shadow-sm flex items-center justify-center text-mait">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight italic uppercase">Profit-optimering</h4>
                        <p className="text-slate-500 leading-relaxed">Systemet er ikke bygget til blot at svare. Det er bygget til at sælge. Fra intelligent opsalg af toppings og drikkevarer til at minde kunder om deres favoritpizza.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-[24px] shadow-sm flex items-center justify-center text-mait">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight italic uppercase">Kundetillid i centrum</h4>
                        <p className="text-slate-500 leading-relaxed">Getmaits Voice AI lyder som et rigtigt menneske og husker kundens navn og yndlingspizza. Det skaber den stamkundeoplevelse, som kun de bedste pizzariaer formår at give.</p>
                    </div>
                </div>
            </div>
        </section>
    
        {/* AI Sales Funnel */}
        <section id="demo" className="py-32 px-6">
            <div className="max-w-2xl mx-auto">
    
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Prøv din Mait inden du beslutter</h2>
                    <p className="text-slate-500 text-lg italic">Svar på 2 hurtige spørgsmål og ring til nummeret. Din Mait gør bestillingsopkaldet for dig.</p>
                </div>
    
                {/* Progress */}
                <div className="flex items-center mb-10">
                    <div id="pd1" className={pd(1)}>1</div>
                    <div id="pl1" style={{background: step >= 2 ? "rgb(34 197 94)" : "#e2e8f0"}} className="flex-1 h-0.5 bg-slate-200 mx-2 transition-all duration-500"></div>
                    <div id="pd2" className={pd(2)}>2</div>
                    <div id="pl2" style={{background: step >= 3 ? "rgb(34 197 94)" : "#e2e8f0"}} className="flex-1 h-0.5 bg-slate-200 mx-2 transition-all duration-500"></div>
                    <div id="pd3" className={pd(3)}>3</div>
                </div>
    
                <div className="saas-card bg-white p-10 md:p-14 relative overflow-hidden min-h-[400px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-mait/5 rounded-full blur-[80px] pointer-events-none"></div>
    
                    {/* TRIN 1: Navn + Telefon */}
                    <div id="step1" style={{display: step===1 ? "block" : "none"}}>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="relative shrink-0">
                                <div className="w-16 h-16 rounded-full bg-mait/10 border-2 border-mait/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mait"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <span className="absolute inset-0 rounded-full border-2 border-mait/30 animate-ping"></span>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-mait uppercase tracking-[0.2em] mb-1">Trin 1 af 3</p>
                                <h3 className="text-3xl font-extrabold tracking-tight">Hvem er du?</h3>
                                <p className="text-slate-400 mt-1">Vi konfigurerer din Mait med dine oplysninger.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Dit navn</label>
                                <input id="f-navn" value={navn} onChange={(e) => setNavn(e.target.value)} type="text" placeholder="Fornavn Efternavn" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-mait transition" />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Telefonnummer</label>
                                <input id="f-telefon" value={telefon} onChange={(e) => setTelefon(e.target.value)} type="tel" placeholder="+45 12 34 56 78" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-mait transition" />
                            </div>
                            <p id="s1-error" style={{display: s1Error ? "block" : "none"}} className="hidden text-red-500 text-sm font-semibold">Udfyld venligst begge felter.</p>
                            <button onClick={submitStep1} id="s1-btn" className="w-full btn-primary py-5 rounded-xl font-bold text-lg mt-2">
                                Næste trin →
                            </button>
                            <p className="text-center text-xs text-slate-400 italic">Ingen binding. Ingen spam.</p>
                        </div>
                    </div>
    
                    {/* TRIN 2: Kvalificering */}
                    <div id="step2" style={{display: step===2 ? "block" : "none"}} className="hidden">
                        <p className="text-[11px] font-bold text-mait uppercase tracking-[0.2em] mb-3">Trin 2 af 3</p>
                        <h3 className="text-3xl font-extrabold mb-2 tracking-tight">Fortael os om dit pizzaria</h3>
                        <p className="text-slate-400 mb-8">Sådan konfigurerer vi din Mait til din forretning.</p>
                        <div className="space-y-8">
    
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Pizzarianavn</label>
                                <input id="f-pizzaria" value={pizzaria} onChange={(e) => setPizzaria(e.target.value)} type="text" placeholder="Ex. Napoli Pizza" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-mait transition" />
                            </div>
    
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">E-mail</label>
                                <input id="f-email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="din@email.dk" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-mait transition" />
                            </div>
    
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Hvor mange opkald misser I på en travl aften?</label>
                                <div className="grid grid-cols-2 gap-3" id="opkald-cards">
                                    <button onClick={(e) => selectCard('opkald', 'under-10', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">Under 10</span>
                                        <span className="text-xs text-slate-400">Rolig drift</span>
                                    </button>
                                    <button onClick={(e) => selectCard('opkald', '10-30', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">10 – 30</span>
                                        <span className="text-xs text-slate-400">Mærkes på bundlinjen</span>
                                    </button>
                                    <button onClick={(e) => selectCard('opkald', '30-50', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">30 – 50</span>
                                        <span className="text-xs text-slate-400">Tydelig indkomstlækage</span>
                                    </button>
                                    <button onClick={(e) => selectCard('opkald', 'over-50', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">Over 50</span>
                                        <span className="text-xs text-slate-400">Kritisk — vi kan hjælpe nu</span>
                                    </button>
                                </div>
                            </div>
    
                            <div>
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Hvad er jeres gennemsnitsordre?</label>
                                <div className="grid grid-cols-2 gap-3" id="ordre-cards">
                                    <button onClick={(e) => selectCard('ordre', 'under-150', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">Under 150 kr.</span>
                                    </button>
                                    <button onClick={(e) => selectCard('ordre', '150-250', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">150 – 250 kr.</span>
                                    </button>
                                    <button onClick={(e) => selectCard('ordre', '250-400', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">250 – 400 kr.</span>
                                    </button>
                                    <button onClick={(e) => selectCard('ordre', 'over-400', e.currentTarget)} className="choice-card text-left p-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-mait/50 transition-all">
                                        <span className="block text-lg font-extrabold text-slate-900">Over 400 kr.</span>
                                    </button>
                                </div>
                            </div>
    
                            <p id="s2-error" style={{display: s2Error ? "block" : "none"}} className="hidden text-red-500 text-sm font-semibold">Udfyld venligst alle felter og vælg en mulighed for hvert spørgsmål.</p>
                            <button onClick={submitStep2} id="s2-btn" className="w-full btn-primary py-5 rounded-xl font-bold text-lg">
                                Vis mig mit nummer →
                            </button>
                        </div>
                    </div>
    
                    {/* TRIN 3: Ring nu */}
                    <div id="step3" style={{display: step===3 ? "block" : "none"}} className="hidden">
                        {s3Loading ? (
                            <div className="text-center py-12">
                                <div className="flex justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full border-4 border-orange-100 border-t-mait animate-spin"></div>
                                </div>
                                <p className="text-slate-500 font-semibold">Konfigurerer din Mait...</p>
                            </div>
                        ) : (
                            <div className="text-center space-y-8 py-4">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-mait/10 border-2 border-mait/20 mx-auto relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mait"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    <span className="absolute inset-0 rounded-full border-2 border-mait/30 animate-ping"></span>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-mait uppercase tracking-widest mb-2">Din Mait er klar</p>
                                    <h3 className="text-3xl font-extrabold tracking-tight mb-3">Ring og bestil en pizza</h3>
                                    <p className="text-slate-400 text-lg">Oplev hvordan dine kunder vil blive mødt hos {pizzaria || 'dit pizzaria'}</p>
                                </div>
                                <a href="tel:+4552515498" className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    +45 52 51 54 98
                                </a>
                                <p className="text-xs text-slate-400 italic">Sig du vil bestille en pizza og oplev resten selv</p>
                            </div>
                        )}
                    </div>
    
                </div>
            </div>
        </section>
    
        {/* Footer */}
        <footer className="bg-white pt-24 pb-12 border-t border-slate-100 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2.5">
                            <div className="bg-mait p-1.5 rounded-lg text-white shadow-lg shadow-orange-600/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
                            </div>
                            <span className="text-xl font-extrabold tracking-tight text-slate-900">Get<span className="text-mait">mait</span></span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed italic font-medium">
                            Vi transformerer pizzariabranchen gennem menneskelig AI Voice-teknologi — så du kan fokusere på pizzaen, ikke telefonen.
                        </p>
                    </div>
    
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Firmaoplysninger</h4>
                        <ul className="text-sm text-slate-500 space-y-2 italic font-medium">
                            <li>Getmait</li>
                            <li>Stormgade 200</li>
                            <li>6700 Esbjerg</li>
                        </ul>
                    </div>
    
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Kontakt</h4>
                        <ul className="text-sm text-slate-500 space-y-2 italic font-medium">
                            <li><a href="mailto:sale@getmait.dk" className="hover:text-mait transition">sale@getmait.dk</a></li>
                            <li><a href="tel:+4529939973" className="hover:text-mait transition">+45 29 93 99 73</a></li>
                            <li>Support: 24/7 (AI-overvåget)</li>
                        </ul>
                    </div>
    
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Lovpligtig</h4>
                        <ul className="text-sm text-slate-500 space-y-2 italic font-medium">
                            <li><a href="/handelsbetingelser" className="hover:text-mait transition">Handelsbetingelser</a></li>
                            <li><a href="/privatlivspolitik" className="hover:text-mait transition">Privatlivspolitik</a></li>
                            <li><a href="#" className="hover:text-mait transition">Cookie-indstillinger</a></li>
                        </ul>
                    </div>
                </div>
    
                <div className="pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                    <p>© 2026 Getmait — Alle rettigheder forbeholdes</p>
                </div>
            </div>
        </footer>
    </>
  );
}
