import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik | Getmait",
};

const sections = [
  { num: "1", title: "Dataansvarlig" },
  { num: "2", title: "Hvilke oplysninger indsamler vi?" },
  { num: "3", title: "Formål og retsgrundlag" },
  { num: "4", title: "Opbevaring og sletning" },
  { num: "5", title: "Databehandlere" },
  { num: "6", title: "Overførsel til tredjelande" },
  { num: "7", title: "Dine rettigheder" },
  { num: "8", title: "Klage" },
  { num: "9", title: "Cookies" },
  { num: "10", title: "Ændringer" },
];

const processors = [
  { name: "Twilio Inc.", country: "USA", role: "Telefoni og SMS-håndtering", transfer: "SCC", url: "https://www.twilio.com/en-us/legal/privacy" },
  { name: "Google LLC", country: "USA/EU", role: "Tale-til-tekst og tekst-til-tale", transfer: "SCC", url: "https://cloud.google.com/privacy" },
  { name: "Anthropic PBC", country: "USA", role: "AI-sprogmodel til samtaleforståelse", transfer: "SCC", url: "https://www.anthropic.com/privacy" },
  { name: "Supabase Inc.", country: "USA/EU", role: "Databasehosting (primært EU)", transfer: "SCC", url: "https://supabase.com/privacy" },
  { name: "n8n GmbH", country: "Tyskland · EU", role: "Workflow-automatisering", transfer: "EU/EØS", url: null },
];

const rights = [
  { title: "Indsigt", desc: "Ret til at se, hvilke oplysninger vi behandler om dig" },
  { title: "Berigtigelse", desc: "Ret til at få ukorrekte oplysninger rettet" },
  { title: "Sletning", desc: "Ret til at få dine oplysninger slettet, med forbehold for lovpligtig opbevaring" },
  { title: "Begrænsning", desc: "Ret til at anmode om midlertidig begrænsning af behandlingen" },
  { title: "Dataportabilitet", desc: "Ret til at modtage dine data i et struktureret, maskinlæsbart format" },
  { title: "Indsigelse", desc: "Ret til at gøre indsigelse mod behandling baseret på legitim interesse" },
  { title: "Tilbagekaldelse", desc: "Ret til at trække et samtykke tilbage uden virkning for den forudgående behandling" },
];

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mt-12 mb-5">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
        <span className="text-[13px] font-black text-mait">{num}</span>
      </div>
      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-slate-100 my-10" />;
}

function Footer() {
  return (
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
            <p className="text-slate-500 text-sm leading-relaxed italic font-medium">Vi transformerer pizzariabranchen gennem menneskelig AI Voice-teknologi — så du kan fokusere på pizzaen, ikke telefonen.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Firmaoplysninger</h4>
            <ul className="text-sm text-slate-500 space-y-2 italic font-medium">
              <li>GetMait ApS</li>
              <li>CVR: 12345678</li>
              <li>Tarphagevej 34</li>
              <li>6700 Esbjerg</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Kontakt</h4>
            <ul className="text-sm text-slate-500 space-y-2 italic font-medium">
              <li><a href="mailto:kontakt@getmait.dk" className="hover:text-mait transition">kontakt@getmait.dk</a></li>
              <li><a href="tel:+4512345678" className="hover:text-mait transition">+45 12 34 56 78</a></li>
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
          <p>© 2026 GetMait ApS — CVR 12345678 — Alle rettigheder forbeholdes</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="bg-mait p-1.5 rounded-lg text-white shadow-lg shadow-orange-600/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight">Get<span className="text-mait">mait</span></span>
          </a>
          <a href="/" className="btn-primary px-7 py-3 rounded-full text-sm font-bold">Tilbage til forsiden</a>
        </div>
      </nav>

      <div className="pt-40 pb-16 px-6" style={{backgroundImage: "radial-gradient(at 100% 0%, rgba(234,88,12,0.08) 0%, transparent 50%)"}}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
            Lovpligtig information
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4">Privatlivspolitik</h1>
          <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-8 py-6">
            <p className="text-slate-700 text-[15px] leading-relaxed">Vi tager dit privatliv alvorligt. Denne politik forklarer tydeligt, hvilke data vi indsamler, hvorfor vi gør det, og hvilke rettigheder du har som registreret.</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl px-8 py-6 shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Indhold</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              {sections.map((s) => (
                <a key={s.num} href={`#s${s.num}`} className="flex items-center gap-3 group">
                  <span className="text-[11px] font-black text-mait w-5">{s.num}.</span>
                  <span className="text-sm text-slate-500 group-hover:text-slate-900 transition">{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-16 py-12">

            <div id="s1"><SectionHeader num="1" title="Dataansvarlig" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">Den dataansvarlige for behandling af personoplysninger er:</p>
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">GetMait ApS</p>
                <p>Tarphagevej 34, 6700 Esbjerg · CVR 12345678</p>
                <p><a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
              </div>
            </div>

            <Divider />

            <div id="s2"><SectionHeader num="2" title="Hvilke oplysninger indsamler vi?" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">Getmait indsamler og behandler følgende kategorier af personoplysninger:</p>
              <div className="space-y-3">
                {[
                  { label: "Kontaktoplysninger", desc: "Navn, e-mailadresse og telefonnummer, som du oplyser ved demo-booking eller indgåelse af aftale" },
                  { label: "Virksomhedsoplysninger", desc: "Restaurantens navn og adresse til konfiguration af Voice AI" },
                  { label: "Samtaledata", desc: "Transskriptioner af AI-håndterede opkald og chat-samtaler til kvalitetssikring og modeloptimering, såfremt der er givet samtykke hertil" },
                  { label: "Brugsdata", desc: "Tekniske data om brug af platformen og dashboardet, herunder tidsstempler og interaktionsmønstre" },
                  { label: "Betalingsoplysninger", desc: "Faktureringsdata behandles via godkendt betalingsformidler og opbevares ikke direkte af Getmait" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-mait mt-2" />
                    <div><span className="text-[13px] font-bold text-slate-900">{item.label}: </span><span className="text-[13px] text-slate-600">{item.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s3"><SectionHeader num="3" title="Formål og retsgrundlag" />
              <div className="space-y-3">
                {[
                  { basis: "Kontraktopfyldelse", art: "art. 6(1)(b)", desc: "Levering, konfiguration og support af vores Voice AI-platform" },
                  { basis: "Legitim interesse", art: "art. 6(1)(f)", desc: "Forbedring af systemkvalitet, fejlretning og interne analyser" },
                  { basis: "Samtykke", art: "art. 6(1)(a)", desc: "Samtaledata til modeloptimering — du kan til enhver tid trække dit samtykke tilbage" },
                  { basis: "Retlig forpligtelse", art: "art. 6(1)(c)", desc: "Opbevaring af regnskabsdata i henhold til bogføringsloven" },
                ].map((item) => (
                  <div key={item.basis} className="flex gap-4 p-4 rounded-xl border border-slate-100">
                    <span className="flex-shrink-0 inline-block px-2 py-1 rounded-md bg-orange-50 text-mait text-[11px] font-black h-fit">{item.art}</span>
                    <div><span className="text-[13px] font-bold text-slate-900">{item.basis}: </span><span className="text-[13px] text-slate-600">{item.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s4"><SectionHeader num="4" title="Opbevaring og sletning" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { type: "Kundekontaktdata", period: "12 mdr.", note: "efter aftaleophør" },
                  { type: "Samtaledata", period: "90 dage", note: "løbende sletning" },
                  { type: "Regnskabsbilag", period: "5 år", note: "bogføringsloven" },
                  { type: "Logfiler", period: "30 dage", note: "automatisk" },
                ].map((item) => (
                  <div key={item.type} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.type}</p>
                    <p className="text-xl font-extrabold text-slate-900 tracking-tight">{item.period}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s5"><SectionHeader num="5" title="Databehandlere" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">Getmait videregiver kun personoplysninger til myndigheder (lovpligtigt) eller ved virksomhedsoverdragelse. Vi sælger aldrig data til markedsføring. Følgende underdatabehandlere behandler data på vores vegne:</p>
              <div className="space-y-3">
                {processors.map((p) => (
                  <div key={p.name} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/30">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[14px] font-bold text-slate-900">{p.name}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-semibold">{p.country}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-orange-50 text-mait font-bold">{p.transfer}</span>
                      </div>
                      <p className="text-[13px] text-slate-600">{p.role}</p>
                    </div>
                    {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[12px] text-mait font-semibold hover:underline whitespace-nowrap">Politik →</a>}
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s6"><SectionHeader num="6" title="Overførsel til tredjelande" />
              <p className="text-slate-600 text-[15px] leading-relaxed">Vores primære datainfrastruktur er placeret i EU/EØS. Visse underleverandørers tjenester kan involvere behandling uden for EU. I sådanne tilfælde sker overførslen på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) jf. GDPR kap. V.</p>
            </div>

            <Divider />

            <div id="s7"><SectionHeader num="7" title="Dine rettigheder" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {rights.map((r) => (
                  <div key={r.title} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <p className="text-[13px] font-bold text-slate-900 mb-1">{r.title}</p>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4">
                <p className="text-[14px] text-slate-700">Kontakt os på <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a> for at udøve dine rettigheder. Vi svarer inden for 30 dage.</p>
              </div>
            </div>

            <Divider />

            <div id="s8"><SectionHeader num="8" title="Klage" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">Du har ret til at indgive klage til Datatilsynet:</p>
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Datatilsynet</p>
                <p>Carl Jacobsens Vej 35, 2500 Valby</p>
                <p><a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-mait font-semibold hover:underline">datatilsynet.dk</a> · <a href="mailto:dt@datatilsynet.dk" className="text-mait font-semibold hover:underline">dt@datatilsynet.dk</a></p>
              </div>
            </div>

            <Divider />

            <div id="s9"><SectionHeader num="9" title="Cookies" />
              <p className="text-slate-600 text-[15px] leading-relaxed">Getmaits hjemmeside anvender teknisk nødvendige cookies til at sikre korrekt funktionalitet samt analytiske cookies til forståelse af brugeradfærd. Du kan til enhver tid ændre dine cookie-præferencer via cookiebanneret i bunden af siden.</p>
            </div>

            <Divider />

            <div id="s10"><SectionHeader num="10" title="Ændringer" />
              <p className="text-slate-600 text-[15px] leading-relaxed">Getmait opdaterer løbende denne privatlivspolitik i takt med ændringer i lovgivning eller vores databehandlingspraksis. Væsentlige ændringer varsles via e-mail til aktive kunder med mindst 14 dages forudgående orientering.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
