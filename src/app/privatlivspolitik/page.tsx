import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik | Getmait",
};

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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-16 py-14">
            <div>

              <p className="text-slate-500 italic border-l-2 border-orange-200 pl-4 mb-10 text-[15px] leading-relaxed">Vi tager dit privatliv alvorligt. Denne politik forklarer tydeligt, hvilke data vi indsamler, hvorfor vi gør det, og hvilke rettigheder du har som registreret.</p>

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">1. Dataansvarlig</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Den dataansvarlige for behandling af personoplysninger er:</p>
                <div className="text-[14px] text-slate-600 space-y-1 pl-4 border-l-2 border-slate-100">
                  <p className="font-semibold text-slate-800">GetMait ApS</p>
                  <p>Tarphagevej 34, 6700 Esbjerg · CVR 12345678</p>
                  <p><a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
                </div>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">2. Hvilke oplysninger indsamler vi?</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Getmait indsamler og behandler følgende kategorier af personoplysninger:</p>
                <ul className="space-y-2">
                  {[
                    ["Kontaktoplysninger", "Navn, e-mailadresse og telefonnummer, som du oplyser ved demo-booking eller indgåelse af aftale"],
                    ["Virksomhedsoplysninger", "Restaurantens navn og adresse til konfiguration af Voice AI"],
                    ["Samtaledata", "Transskriptioner af AI-håndterede opkald og chat-samtaler til kvalitetssikring og modeloptimering, såfremt der er givet samtykke hertil"],
                    ["Brugsdata", "Tekniske data om brug af platformen og dashboardet, herunder tidsstempler og interaktionsmønstre"],
                    ["Betalingsoplysninger", "Faktureringsdata behandles via godkendt betalingsformidler og opbevares ikke direkte af Getmait"],
                  ].map(([label, desc]) => (
                    <li key={label} className="flex gap-3 text-[15px] text-slate-600">
                      <span className="text-mait font-bold flex-shrink-0">—</span>
                      <span><strong className="text-slate-800">{label}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">3. Formål og retsgrundlag</h2>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-slate-400 font-semibold w-1/4">Retsgrundlag</th>
                      <th className="text-left py-2 text-slate-400 font-semibold">Formål</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Art. 6(1)(b)", "Kontraktopfyldelse", "Levering, konfiguration og support af vores Voice AI-platform"],
                      ["Art. 6(1)(f)", "Legitim interesse", "Forbedring af systemkvalitet, fejlretning og interne analyser"],
                      ["Art. 6(1)(a)", "Samtykke", "Samtaledata til modeloptimering — kan til enhver tid trækkes tilbage"],
                      ["Art. 6(1)(c)", "Retlig forpligtelse", "Opbevaring af regnskabsdata i henhold til bogføringsloven"],
                    ].map(([art, type, desc]) => (
                      <tr key={art} className="border-t border-slate-100">
                        <td className="py-2.5 text-slate-400 text-[12px] font-mono align-top">{art}</td>
                        <td className="py-2.5 align-top">
                          <p className="font-semibold text-slate-800 mb-0.5">{type}</p>
                          <p className="text-slate-500">{desc}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">4. Opbevaring og sletning</h2>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-slate-400 font-semibold w-1/2">Datakategori</th>
                      <th className="text-left py-2 text-slate-400 font-semibold">Opbevaringsperiode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Kundekontaktdata", "12 måneder efter aftaleophør"],
                      ["Samtaledata", "90 dage (løbende sletning)"],
                      ["Regnskabsbilag", "5 år (bogføringsloven)"],
                      ["Logfiler", "30 dage (automatisk)"],
                    ].map(([cat, period]) => (
                      <tr key={cat} className="border-t border-slate-100">
                        <td className="py-2.5 text-slate-600">{cat}</td>
                        <td className="py-2.5 text-slate-800 font-semibold">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">5. Databehandlere</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Getmait videregiver kun personoplysninger til myndigheder (lovpligtigt) eller ved virksomhedsoverdragelse. Vi sælger aldrig data til markedsføring. Følgende underdatabehandlere behandler data på vores vegne:</p>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-slate-400 font-semibold w-1/3">Leverandør</th>
                      <th className="text-left py-2 text-slate-400 font-semibold">Opgave</th>
                      <th className="text-left py-2 text-slate-400 font-semibold w-1/5">Overførsel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Twilio Inc.", "USA", "Telefoni og SMS", "SCC", "https://www.twilio.com/en-us/legal/privacy"],
                      ["Google LLC", "USA/EU", "Tale-til-tekst og tekst-til-tale", "SCC", "https://cloud.google.com/privacy"],
                      ["Anthropic PBC", "USA", "AI-sprogmodel", "SCC", "https://www.anthropic.com/privacy"],
                      ["Supabase Inc.", "USA/EU", "Databasehosting (primært EU)", "SCC", "https://supabase.com/privacy"],
                      ["n8n GmbH", "DE/EU", "Workflow-automatisering", "EU/EØS", null],
                    ].map(([name, country, role, transfer, url]) => (
                      <tr key={name} className="border-t border-slate-100">
                        <td className="py-2.5 align-top">
                          <p className="font-semibold text-slate-800">{name}</p>
                          <p className="text-slate-400 text-[12px]">{country}</p>
                        </td>
                        <td className="py-2.5 text-slate-600 align-top">
                          {role}{url && <><br /><a href={url} target="_blank" rel="noopener noreferrer" className="text-mait text-[12px] hover:underline">Privatlivspolitik →</a></>}
                        </td>
                        <td className="py-2.5 text-slate-600 align-top">{transfer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">6. Overførsel til tredjelande</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">Vores primære datainfrastruktur er placeret i EU/EØS. Visse underleverandørers tjenester kan involvere behandling uden for EU. I sådanne tilfælde sker overførslen på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) jf. GDPR kap. V.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">7. Dine rettigheder</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Som registreret har du følgende rettigheder jf. GDPR:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    ["Indsigt", "Ret til at se, hvilke oplysninger vi behandler om dig"],
                    ["Berigtigelse", "Ret til at få ukorrekte oplysninger rettet"],
                    ["Sletning", "Ret til at få dine oplysninger slettet, med forbehold for lovpligtig opbevaring"],
                    ["Begrænsning", "Ret til at anmode om midlertidig begrænsning af behandlingen"],
                    ["Dataportabilitet", "Ret til at modtage dine data i et struktureret, maskinlæsbart format"],
                    ["Indsigelse", "Ret til at gøre indsigelse mod behandling baseret på legitim interesse"],
                    ["Tilbagekaldelse", "Ret til at trække et samtykke tilbage uden virkning for den forudgående behandling"],
                  ].map(([right, desc]) => (
                    <li key={right} className="flex gap-3 text-[15px] text-slate-600">
                      <span className="text-mait font-bold flex-shrink-0">—</span>
                      <span><strong className="text-slate-800">{right}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-slate-600 leading-relaxed">Kontakt os på <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a> for at udøve dine rettigheder. Vi svarer inden for 30 dage.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">8. Klage</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Du har ret til at indgive klage til Datatilsynet:</p>
                <div className="text-[14px] text-slate-600 space-y-1 pl-4 border-l-2 border-slate-100">
                  <p className="font-semibold text-slate-800">Datatilsynet</p>
                  <p>Carl Jacobsens Vej 35, 2500 Valby</p>
                  <p><a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-mait font-semibold hover:underline">datatilsynet.dk</a> · <a href="mailto:dt@datatilsynet.dk" className="text-mait font-semibold hover:underline">dt@datatilsynet.dk</a></p>
                </div>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">9. Cookies</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmaits hjemmeside anvender teknisk nødvendige cookies til at sikre korrekt funktionalitet samt analytiske cookies til forståelse af brugeradfærd. Du kan til enhver tid ændre dine cookie-præferencer via cookiebanneret i bunden af siden.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">10. Ændringer</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmait opdaterer løbende denne privatlivspolitik i takt med ændringer i lovgivning eller vores databehandlingspraksis. Væsentlige ændringer varsles via e-mail til aktive kunder med mindst 14 dages forudgående orientering.</p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
