import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handelsbetingelser | Getmait",
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
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
            Lovpligtig information
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4">Handelsbetingelser</h1>
          <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-16 py-14">
            <div className="prose-legal">

              <p className="text-slate-500 italic border-l-2 border-orange-200 pl-4 mb-10 text-[15px] leading-relaxed">Disse betingelser gælder for alle aftaler mellem GetMait ApS og kunden om levering af AI-baserede voice- og automatiseringsydelser. Ved accept af et tilbud eller indgåelse af abonnementsaftale accepteres betingelserne i deres helhed.</p>

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">1. Generelt</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Disse handelsbetingelser gælder for alle aftaler indgået mellem GetMait ApS (herefter "Getmait") og kunden om levering af AI-baserede voice- og automatiseringsydelser.</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmait forbeholder sig ret til at opdatere handelsbetingelserne med et varsel på minimum 30 dage forud for ikrafttræden. Fortsat brug af tjenesten efter varslingsperiodens udløb udgør accept af de opdaterede betingelser.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">2. Ydelser</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Getmait leverer AI-drevne løsninger til restauranter og lignende virksomheder, herunder:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    ["Voice AI", "Automatisk opkaldshåndtering og ordremodtagelse"],
                    ["Chat Widget", "Intelligent mersalg og kundedialog via chat"],
                    ["Dashboard", "Realtids-dashboard til opfølgning og analyse"],
                    ["Integrationer", "Integration til POS- og bestillingssystemer (afhænger af pakke)"],
                    ["AI-optimering", "Løbende opdatering og optimering af AI-modellen"],
                  ].map(([label, desc]) => (
                    <li key={label} className="flex gap-3 text-[15px] text-slate-600">
                      <span className="text-mait font-bold flex-shrink-0">—</span>
                      <span><strong className="text-slate-800">{label}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] text-slate-500">Den præcise ydelsespakke fremgår af den individuelle aftale eller det accepterede tilbud.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">3. Priser og betaling</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Priser aftales individuelt og fremgår af det underskrevne tilbud eller abonnementsaftalen. Alle priser er ekskl. moms, medmindre andet er angivet.</p>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/2">Fakturering</td>
                      <td className="py-2.5 text-slate-800 font-semibold">Månedsvis forud</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Betalingsbetingelse</td>
                      <td className="py-2.5 text-slate-800 font-semibold">8 dage netto</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Morarente</td>
                      <td className="py-2.5 text-slate-800 font-semibold">1,5 % / måned</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmait forbeholder sig ret til at suspendere adgang til platformen ved betalingsrestance ud over <strong className="text-slate-800">14 dage</strong>, indtil mellemværendet er udlignet.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">4. Abonnement og opsigelse</h2>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/2">Bindingsperiode</td>
                      <td className="py-2.5 text-slate-800 font-semibold">3 måneder</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Opsigelsesvarsel</td>
                      <td className="py-2.5 text-slate-800 font-semibold">30 dage til udgangen af en måned</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Opsigelse skal ske skriftligt pr. e-mail til <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>.</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmait kan uden varsel opsige aftalen ved væsentlig misligholdelse, herunder manglende betaling, misbrug af platformen eller overtrædelse af gældende lovgivning.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">5. Kundens forpligtelser</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Kunden forpligter sig til:</p>
                <ul className="space-y-2">
                  {[
                    "At stille nødvendige tekniske oplysninger til rådighed for opsætning (fx telefonnumre, menukort, åbningstider)",
                    "At sikre, at de informationer der gives til Getmait er korrekte og opdaterede",
                    "At informere egne kunder om, at opkald kan blive håndteret af en AI-stemme, i det omfang lovgivningen kræver dette",
                    "At anvende platformen i overensstemmelse med gældende dansk ret og EU-regulering",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15px] text-slate-600">
                      <span className="text-mait font-bold flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">6. Immaterielle rettigheder</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Alle rettigheder til Getmaits platform, software, algoritmer og AI-modeller tilhører GetMait ApS. Kunden opnår alene en ikke-eksklusiv brugsret til platformen i abonnementsperioden.</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">Det er ikke tilladt at kopiere, reverse engineere, videreudvikle eller videresælge nogen del af platformen uden forudgående skriftlig tilladelse.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">7. Ansvarsbegrænsning</h2>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/2">Maks. erstatningsansvar</td>
                      <td className="py-2.5 text-slate-800 font-semibold">3 måneders betaling</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Tilstræbt oppetid</td>
                      <td className="py-2.5 text-slate-800 font-semibold">99,5 % / måned</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[15px] text-slate-600 leading-relaxed">Getmait er ikke ansvarlig for indirekte tab, driftstab, tabt avance eller tab som følge af tredjeparters handlinger. Planlagt vedligeholdelse varsles i videst muligt omfang.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">8. Fortrolighed</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Begge parter forpligter sig til at behandle den anden parts fortrolige oplysninger med diskretion og ikke at videregive disse til tredjeparter uden forudgående skriftligt samtykke.</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">Fortrolighedsforpligtelsen gælder i <strong className="text-slate-800">aftaleperioden og 2 år</strong> herefter.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">9. Lovvalg og værneting</h2>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/2">Lovvalg</td>
                      <td className="py-2.5 text-slate-800 font-semibold">Dansk ret</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Værneting</td>
                      <td className="py-2.5 text-slate-800 font-semibold">Retten i Esbjerg</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">10. Kontakt</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">Spørgsmål til disse handelsbetingelser rettes til:</p>
                <div className="mt-3 text-[14px] text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">GetMait ApS</p>
                  <p>Tarphagevej 34, 6700 Esbjerg · CVR 12345678</p>
                  <p><a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

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
            <p>© 2026 GetMait ApS — CVR 12345678 — Alle rettigheder forbeholdes</p>
          </div>
        </div>
      </footer>
    </>
  );
}
