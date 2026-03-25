import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik | Getmait",
};

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
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
            Lovpligtig information
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4">Privatlivspolitik</h1>
          <p className="text-slate-400 text-sm">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-14 py-14">
            <div className="space-y-10 text-[15px] text-slate-600 leading-relaxed">

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">1. Dataansvarlig</h2>
                <p>Den dataansvarlige for behandling af personoplysninger er GetMait ApS, Tarphagevej 34, 6700 Esbjerg, CVR 12345678 · <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">2. Hvilke oplysninger indsamler vi?</h2>
                <p className="mb-3">Getmait indsamler og behandler følgende kategorier af personoplysninger:</p>
                <p className="mb-2"><strong className="text-slate-800">Kontaktoplysninger:</strong> Navn, e-mailadresse og telefonnummer, som du oplyser ved demo-booking eller indgåelse af aftale.</p>
                <p className="mb-2"><strong className="text-slate-800">Virksomhedsoplysninger:</strong> Restaurantens navn og adresse til konfiguration af Voice AI.</p>
                <p className="mb-2"><strong className="text-slate-800">Samtaledata:</strong> Transskriptioner af AI-håndterede opkald og chat-samtaler til kvalitetssikring og modeloptimering, såfremt der er givet samtykke hertil.</p>
                <p className="mb-2"><strong className="text-slate-800">Brugsdata:</strong> Tekniske data om brug af platformen og dashboardet, herunder tidsstempler og interaktionsmønstre.</p>
                <p><strong className="text-slate-800">Betalingsoplysninger:</strong> Faktureringsdata behandles via godkendt betalingsformidler og opbevares ikke direkte af Getmait.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">3. Formål og retsgrundlag</h2>
                <p className="mb-2"><strong className="text-slate-800">Kontraktopfyldelse (GDPR art. 6(1)(b)):</strong> Levering, konfiguration og support af vores Voice AI-platform.</p>
                <p className="mb-2"><strong className="text-slate-800">Legitim interesse (art. 6(1)(f)):</strong> Forbedring af systemkvalitet, fejlretning og interne analyser.</p>
                <p className="mb-2"><strong className="text-slate-800">Samtykke (art. 6(1)(a)):</strong> Samtaledata til modeloptimering — du kan til enhver tid trække dit samtykke tilbage.</p>
                <p><strong className="text-slate-800">Retlig forpligtelse (art. 6(1)(c)):</strong> Opbevaring af regnskabsdata i henhold til bogføringsloven.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">4. Opbevaring og sletning</h2>
                <p className="mb-2">Personoplysninger opbevares ikke længere end nødvendigt for det formål, hvortil de er indsamlet:</p>
                <p className="mb-2"><strong className="text-slate-800">Kundekontaktdata</strong> slettes senest 12 måneder efter aftalens ophør, medmindre lovgivning kræver længere opbevaring.</p>
                <p className="mb-2"><strong className="text-slate-800">Samtaledata</strong> slettes løbende efter 90 dage.</p>
                <p className="mb-2"><strong className="text-slate-800">Regnskabsbilag</strong> opbevares i 5 år i overensstemmelse med bogføringsloven.</p>
                <p><strong className="text-slate-800">Tekniske logfiler</strong> slettes automatisk efter 30 dage.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">5. Deling med tredjeparter og databehandlere</h2>
                <p className="mb-3">Getmait videregiver kun personoplysninger til myndigheder (lovpligtigt) eller ved virksomhedsoverdragelse. Vi sælger aldrig data til markedsføring.</p>
                <p className="mb-3">Getmait anvender følgende godkendte underdatabehandlere, der alle er bundet af databehandleraftaler og lever op til GDPR's krav:</p>
                <p className="mb-2"><strong className="text-slate-800">Twilio Inc.</strong> (USA) — Telefoni og SMS-håndtering. Overførsel via EU-standardkontraktbestemmelser (SCC). <a href="https://www.twilio.com/en-us/legal/privacy" className="text-mait font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Privatlivspolitik</a></p>
                <p className="mb-2"><strong className="text-slate-800">Google LLC</strong> (USA/EU) — Tale-til-tekst og tekst-til-tale. Overførsel via SCC. <a href="https://cloud.google.com/privacy" className="text-mait font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Privatlivspolitik</a></p>
                <p className="mb-2"><strong className="text-slate-800">Anthropic PBC</strong> (USA) — AI-sprogmodel til samtaleforståelse. Overførsel via SCC. <a href="https://www.anthropic.com/privacy" className="text-mait font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Privatlivspolitik</a></p>
                <p className="mb-2"><strong className="text-slate-800">Supabase Inc.</strong> (USA/EU) — Databasehosting, primært placeret i EU. Overførsel via SCC. <a href="https://supabase.com/privacy" className="text-mait font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Privatlivspolitik</a></p>
                <p><strong className="text-slate-800">n8n GmbH</strong> (Tyskland, EU) — Workflow-automatisering. Data behandles inden for EU/EØS.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">6. Overførsel til tredjelande</h2>
                <p>Vores primære datainfrastruktur er placeret i EU/EØS. Visse underleverandørers tjenester kan involvere behandling uden for EU. I sådanne tilfælde sker overførslen på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller tilsvarende passende garantier jf. GDPR kap. V.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">7. Dine rettigheder</h2>
                <p className="mb-3">Som registreret har du følgende rettigheder under GDPR:</p>
                <p className="mb-2"><strong className="text-slate-800">Indsigt:</strong> Ret til at se, hvilke oplysninger vi behandler om dig.</p>
                <p className="mb-2"><strong className="text-slate-800">Berigtigelse:</strong> Ret til at få ukorrekte oplysninger rettet.</p>
                <p className="mb-2"><strong className="text-slate-800">Sletning:</strong> Ret til at få dine oplysninger slettet, med forbehold for lovpligtig opbevaring.</p>
                <p className="mb-2"><strong className="text-slate-800">Begrænsning:</strong> Ret til at anmode om midlertidig begrænsning af behandlingen.</p>
                <p className="mb-2"><strong className="text-slate-800">Dataportabilitet:</strong> Ret til at modtage dine data i et struktureret, maskinlæsbart format.</p>
                <p className="mb-2"><strong className="text-slate-800">Indsigelse:</strong> Ret til at gøre indsigelse mod behandling baseret på legitim interesse.</p>
                <p className="mb-4"><strong className="text-slate-800">Tilbagekaldelse af samtykke:</strong> Ret til at trække et samtykke tilbage uden virkning for den forudgående behandling.</p>
                <p>For at udøve dine rettigheder, kontakt os på <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>. Vi besvarer din henvendelse inden for 30 dage.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">8. Klage</h2>
                <p>Du har ret til at indgive klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby — <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-mait font-semibold hover:underline">datatilsynet.dk</a> · <a href="mailto:dt@datatilsynet.dk" className="text-mait font-semibold hover:underline">dt@datatilsynet.dk</a>.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">9. Cookies</h2>
                <p>Getmaits hjemmeside anvender teknisk nødvendige cookies til at sikre korrekt funktionalitet samt analytiske cookies til forståelse af brugeradfærd. Du kan til enhver tid ændre dine cookie-præferencer via cookiebanneret i bunden af siden.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">10. Ændringer</h2>
                <p>Getmait opdaterer løbende denne privatlivspolitik i takt med ændringer i lovgivning eller vores databehandlingspraksis. Væsentlige ændringer varsles via e-mail til aktive kunder med mindst 14 dages forudgående orientering.</p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
          <p>© 2026 GetMait ApS — CVR 12345678 — Alle rettigheder forbeholdes</p>
          <div className="flex gap-6">
            <a href="/handelsbetingelser" className="hover:text-mait transition">Handelsbetingelser</a>
            <a href="/privatlivspolitik" className="hover:text-mait transition">Privatlivspolitik</a>
            <a href="/databehandleraftale" className="hover:text-mait transition">Databehandleraftale</a>
          </div>
        </div>
      </footer>
    </>
  );
}
