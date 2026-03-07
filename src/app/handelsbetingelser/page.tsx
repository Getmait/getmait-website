import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handelsbetingelser | Getmait",
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
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6">Handelsbetingelser</h1>
                  <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
              </div>
          </div>
      
          {/* Indhold */}
          <main className="px-6 pb-32">
              <div className="max-w-3xl mx-auto">
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-10 md:p-16 prose-section">
      
                      <h2>1. Generelt</h2>
                      <p>Disse handelsbetingelser gælder for alle aftaler indgået mellem GetMait ApS (herefter "Getmait") og kunden om levering af AI-baserede voice- og automatiseringsydelser. Ved accept af et tilbud eller indgåelse af abonnementsaftale accepterer kunden samtidig nærværende betingelser i deres helhed.</p>
                      <p>Getmait forbeholder sig ret til at opdatere handelsbetingelserne med et varsel på minimum 30 dage forud for ikrafttræden. Fortsat brug af tjenesten efter varslingsperiodens udløb udgør accept af de opdaterede betingelser.</p>
      
                      <h2>2. Ydelser</h2>
                      <p>Getmait leverer AI-drevne voice-løsninger til restauranter og lignende virksomheder, herunder:</p>
                      <ul>
                          <li>Automatisk opkaldshåndtering og ordremodtagelse via Voice AI</li>
                          <li>Intelligent mersalg og kundedialog</li>
                          <li>Realtids-dashboard til opfølgning og analyse</li>
                          <li>Integration til eksisterende POS- og bestillingssystemer (afhænger af pakke)</li>
                          <li>Løbende opdatering og optimering af AI-modellen</li>
                      </ul>
                      <p>Den præcise ydelsespakke og eventuelle tilpasninger fremgår af den individuelle aftale eller det accepterede tilbud.</p>
      
                      <h2>3. Priser og betaling</h2>
                      <p>Priser aftales individuelt og fremgår af det underskrevne tilbud eller abonnementsaftalen. Alle priser er ekskl. moms, medmindre andet er angivet. Fakturering sker månedsvis forud, med betalingsbetingelse 8 dage netto.</p>
                      <p>Ved forsinket betaling beregnes renter på 1,5 % pr. påbegyndt måned fra forfaldsdato. Getmait forbeholder sig ret til at suspendere adgang til platformen ved betalingsrestance ud over 14 dage, indtil mellemværendet er udlignet.</p>
      
                      <h2>4. Abonnement og opsigelse</h2>
                      <p>Abonnementsaftalen løber som udgangspunkt med en bindingsperiode på 3 måneder fra aktivering, hvorefter aftalen kan opsiges løbende med 30 dages varsel til udgangen af en måned. Opsigelse skal ske skriftligt pr. e-mail til <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>.</p>
                      <p>Getmait kan uden varsel opsige aftalen, såfremt kunden væsentligt misligholder sine forpligtelser, herunder men ikke begrænset til manglende betaling, misbrug af platformen eller overtrædelse af gældende lovgivning.</p>
      
                      <h2>5. Kundens forpligtelser</h2>
                      <p>Kunden er ansvarlig for:</p>
                      <ul>
                          <li>At stille nødvendige tekniske oplysninger til rådighed for opsætning (fx telefonnumre, menukort, åbningstider)</li>
                          <li>At sikre, at de informationer der gives til Getmait er korrekte og opdaterede</li>
                          <li>At informere egne kunder om, at opkald kan blive håndteret af en AI-stemme, i det omfang lovgivningen kræver dette</li>
                          <li>At anvende platformen i overensstemmelse med gældende dansk ret og EU-regulering</li>
                      </ul>
      
                      <h2>6. Immaterielle rettigheder</h2>
                      <p>Alle rettigheder til Getmaits platform, software, algoritmer og AI-modeller tilhører GetMait ApS. Kunden opnår alene en ikke-eksklusiv brugsret til platformen i abonnementsperioden. Det er ikke tilladt at kopiere, reverse engineere, videreudvikle eller videresælge nogen del af platformen uden forudgående skriftlig tilladelse.</p>
      
                      <h2>7. Ansvarsbegrænsning</h2>
                      <p>Getmaits ansvar over for kunden er i alle tilfælde begrænset til det beløb, kunden har betalt i de seneste 3 måneder forud for skadens opståen. Getmait er ikke ansvarlig for indirekte tab, driftstab, tabt avance eller tab som følge af tredjeparters handlinger.</p>
                      <p>Getmait garanterer ikke 100 % oppetid, men tilstræber en tilgængelighed på minimum 99,5 % på månedsbasis. Planlagt vedligeholdelse varsles i videst muligt omfang.</p>
      
                      <h2>8. Fortrolighed</h2>
                      <p>Begge parter forpligter sig til at behandle den anden parts fortrolige oplysninger med diskretion og ikke at videregive disse til tredjeparter uden forudgående skriftligt samtykke. Fortrolighedsforpligtelsen gælder i aftaleperioden og 2 år herefter.</p>
      
                      <h2>9. Lovvalg og værneting</h2>
                      <p>Aftalen er underlagt dansk ret. Eventuelle tvister, der ikke kan løses i mindelighed, afgøres ved Retten i Esbjerg som rette værneting, med mulighed for anke til landsretten i overensstemmelse med dansk retsplejelov.</p>
      
                      <h2>10. Kontakt</h2>
                      <p>Spørgsmål til disse handelsbetingelser rettes til:</p>
                      <ul>
                          <li>GetMait ApS · Tarphagevej 34 · 6700 Esbjerg</li>
                          <li>E-mail: <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></li>
                          <li>CVR: 12345678</li>
                      </ul>
      
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
