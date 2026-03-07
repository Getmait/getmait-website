import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik | Getmait",
};

export default function Page() {
  return (
    <>
      {/* Nav */}
          <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                  <a href="index.html" className="flex items-center gap-2.5">
                      <div className="bg-mait p-1.5 rounded-lg text-white shadow-lg shadow-orange-600/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
                      </div>
                      <span className="text-xl font-extrabold tracking-tight">Get<span className="text-mait">mait</span></span>
                  </a>
                  <a href="index.html" className="btn-primary px-7 py-3 rounded-full text-sm font-bold">
                      Tilbage til forsiden
                  </a>
              </div>
          </nav>
      
          {/* Hero */}
          <div className="pt-40 pb-16 px-6" style={{backgroundImage: "radial-gradient(at 100% 0%, rgba(234,88,12,0.08) 0%, transparent 50%)"}}>
              <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
                      Lovpligtig information
                  </div>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6">Privatlivspolitik</h1>
                  <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
              </div>
          </div>
      
          {/* Indhold */}
          <main className="px-6 pb-32">
              <div className="max-w-3xl mx-auto">
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-10 md:p-16 prose-section">
      
                      <div className="highlight-box">
                          <p>Vi tager dit privatliv alvorligt. Denne politik forklarer tydeligt, hvilke data vi indsamler, hvorfor vi gør det, og hvilke rettigheder du har som registreret.</p>
                      </div>
      
                      <h2>1. Dataansvarlig</h2>
                      <p>Den dataansvarlige for behandling af personoplysninger er:</p>
                      <ul>
                          <li>GetMait ApS</li>
                          <li>Tarphagevej 34, 6700 Esbjerg</li>
                          <li>CVR: 12345678</li>
                          <li>E-mail: <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></li>
                      </ul>
      
                      <h2>2. Hvilke oplysninger indsamler vi?</h2>
                      <p>Getmait indsamler og behandler følgende kategorier af personoplysninger:</p>
                      <ul>
                          <li><strong>Kontaktoplysninger:</strong> Navn, e-mailadresse og telefonnummer, som du oplyser ved demo-booking eller indgåelse af aftale</li>
                          <li><strong>Virksomhedsoplysninger:</strong> Restaurantens navn og adresse til konfiguration af Voice AI</li>
                          <li><strong>Lydoptagelser:</strong> Opkald håndteret af Voice AI kan optages til kvalitetssikring og modeloptimering, såfremt der er givet samtykke hertil</li>
                          <li><strong>Brugsdata:</strong> Tekniske data om brug af platformen og dashboardet, herunder tidsstempler og interaktionsmønstre</li>
                          <li><strong>Betalingsoplysninger:</strong> Faktureringsdata behandles via godkendt betalingsformidler og opbevares ikke direkte af Getmait</li>
                      </ul>
      
                      <h2>3. Formål og retsgrundlag</h2>
                      <p>Vi behandler dine personoplysninger til følgende formål:</p>
                      <ul>
                          <li><strong>Kontraktopfyldelse (GDPR art. 6, stk. 1, litra b):</strong> Levering, konfiguration og support af vores Voice AI-platform</li>
                          <li><strong>Legitim interesse (art. 6, stk. 1, litra f):</strong> Forbedring af systemkvalitet, fejlretning og interne analyser</li>
                          <li><strong>Samtykke (art. 6, stk. 1, litra a):</strong> Lydoptagelser til modeloptimering — du kan til enhver tid trække dit samtykke tilbage</li>
                          <li><strong>Retlig forpligtelse (art. 6, stk. 1, litra c):</strong> Opbevaring af regnskabsdata i henhold til bogføringsloven</li>
                      </ul>
      
                      <h2>4. Opbevaring og sletning</h2>
                      <p>Personoplysninger opbevares ikke længere end nødvendigt for det formål, hvortil de er indsamlet:</p>
                      <ul>
                          <li>Kundekontaktdata slettes senest 12 måneder efter aftalens ophør, medmindre lovgivning kræver længere opbevaring</li>
                          <li>Lydoptagelser slettes løbende efter 90 dage, medmindre der foreligger konkret årsag til længere opbevaring</li>
                          <li>Regnskabsbilag opbevares i 5 år i overensstemmelse med bogføringsloven</li>
                          <li>Tekniske logfiler slettes automatisk efter 30 dage</li>
                      </ul>
      
                      <h2>5. Deling med tredjeparter</h2>
                      <p>Getmait videregiver kun personoplysninger til tredjeparter i følgende tilfælde:</p>
                      <ul>
                          <li><strong>Databehandlere:</strong> Underleverandører, der behandler data på vores vegne (fx cloud-hosting, STT-tjenester) og er bundet af en databehandleraftale</li>
                          <li><strong>Lovpligtig videregivelse:</strong> Til myndigheder, når dette kræves af dansk eller europæisk lovgivning</li>
                          <li><strong>Overdragelse:</strong> Ved salg eller fusion af virksomheden, med forudgående orientering til berørte parter</li>
                      </ul>
                      <p>Vi sælger aldrig dine personoplysninger til tredjepart med henblik på markedsføring.</p>
      
                      <h2>6. Overførsel til tredjelande</h2>
                      <p>Vores primære datainfrastruktur er placeret i EU/EØS. Visse underleverandørers tjenester (fx AI-sprogmodeller) kan involvere behandling uden for EU. I sådanne tilfælde sker overførslen på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller tilsvarende passende garantier jf. GDPR kap. V.</p>
      
                      <h2>7. Dine rettigheder</h2>
                      <p>Som registreret har du følgende rettigheder:</p>
                      <ul>
                          <li><strong>Indsigt:</strong> Ret til at se, hvilke oplysninger vi behandler om dig</li>
                          <li><strong>Berigtigelse:</strong> Ret til at få ukorrekte oplysninger rettet</li>
                          <li><strong>Sletning:</strong> Ret til at få dine oplysninger slettet ("retten til at blive glemt"), med forbehold for lovpligtig opbevaring</li>
                          <li><strong>Begrænsning:</strong> Ret til at anmode om midlertidig begrænsning af behandlingen</li>
                          <li><strong>Dataportabilitet:</strong> Ret til at modtage dine data i et struktureret, maskinlæsbart format</li>
                          <li><strong>Indsigelse:</strong> Ret til at gøre indsigelse mod behandling baseret på legitim interesse</li>
                          <li><strong>Tilbagekaldelse af samtykke:</strong> Ret til at trække et samtykke tilbage uden virkning for den forudgående behandling</li>
                      </ul>
                      <p>For at udøve dine rettigheder bedes du kontakte os på <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>. Vi besvarer din henvendelse inden for 30 dage.</p>
      
                      <h2>8. Klage</h2>
                      <p>Du har ret til at indgive klage til Datatilsynet, hvis du mener, at Getmait behandler dine personoplysninger i strid med GDPR:</p>
                      <ul>
                          <li>Datatilsynet · Carl Jacobsens Vej 35 · 2500 Valby</li>
                          <li>dt.dk · <a href="mailto:dt@datatilsynet.dk" className="text-mait font-semibold hover:underline">dt@datatilsynet.dk</a></li>
                      </ul>
      
                      <h2>9. Cookies</h2>
                      <p>Getmaits hjemmeside anvender teknisk nødvendige cookies til at sikre korrekt funktionalitet. Vi anvender derudover analytiske cookies til forståelse af brugeradfærd, og markedsføringscookies såfremt dit samtykke indhentes via vores cookiebanner. Du kan til enhver tid ændre dine cookie-præferencer via cookiebanneret i bunden af siden.</p>
      
                      <h2>10. Ændringer til denne politik</h2>
                      <p>Getmait opdaterer løbende denne privatlivspolitik i takt med ændringer i lovgivning eller vores databehandlingspraksis. Væsentlige ændringer varsles via e-mail til aktive kunder med mindst 14 dages forudgående orientering. Den aktuelle version vil altid være tilgængelig på getmait.dk.</p>
      
                  </div>
              </div>
          </main>
      
          {/* Footer */}
          <footer className="bg-white border-t border-slate-100 px-6 py-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  <p>© 2026 GetMait ApS — CVR 12345678 — Alle rettigheder forbeholdes</p>
                  <div className="flex gap-6">
                      <a href="handelsbetingelser.html" className="hover:text-mait transition">Handelsbetingelser</a>
                      <a href="privatlivspolitik.html" className="hover:text-mait transition">Privatlivspolitik</a>
                  </div>
              </div>
          </footer>
    </>
  );
}
