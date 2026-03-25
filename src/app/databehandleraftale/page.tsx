import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databehandleraftale | Getmait",
};

export default function Page() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="bg-mait p-1.5 rounded-lg text-white shadow-lg shadow-orange-600/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight">Get<span className="text-mait">mait</span></span>
          </a>
          <a href="/" className="btn-primary px-7 py-3 rounded-full text-sm font-bold">
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6">Databehandleraftale</h1>
          <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      {/* Indhold */}
      <main className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-10 md:p-16 prose-section">

            <div className="highlight-box">
              <p>Denne databehandleraftale ("DPA") regulerer GetMaits behandling af personoplysninger på vegne af kunden ("den dataansvarlige") i forbindelse med levering af GetMait-platformen. Aftalen er en integreret del af serviceaftalen mellem parterne og træder i kraft ved indgåelse heraf.</p>
            </div>

            <h2>1. Parter</h2>
            <p><strong>Databehandler:</strong> GetMait ApS, Tarphagevej 34, 6700 Esbjerg, CVR 12345678, kontakt@getmait.dk</p>
            <p><strong>Dataansvarlig:</strong> Den virksomhed (restaurant eller lignende) der har indgået serviceaftale med GetMait ApS.</p>

            <h2>2. Formål og omfang</h2>
            <p>GetMait behandler personoplysninger på den dataansvarliges vegne med henblik på at levere følgende ydelser:</p>
            <ul>
              <li>AI-baseret telefonisk ordremodtagelse (Voice AI)</li>
              <li>AI-baseret chat-ordremodtagelse (Chat Widget)</li>
              <li>SMS-kommunikation til slutkunder</li>
              <li>Dashboard til administration af ordrer og indstillinger</li>
            </ul>

            <h2>3. Kategorier af registrerede og oplysninger</h2>
            <p>GetMait behandler følgende personoplysninger på den dataansvarliges vegne:</p>
            <ul>
              <li><strong>Slutkunder (restaurantgæster):</strong> Telefonnummer, samtaleindhold (transskription af ordresamtaler), bestillingsoplysninger (varelinje, leverings-/afhentningstype, adresse)</li>
              <li><strong>Ingen særlige kategorier:</strong> GetMait behandler ikke følsomme personoplysninger jf. GDPR art. 9</li>
            </ul>

            <h2>4. GetMaits forpligtelser</h2>
            <p>GetMait forpligter sig til at:</p>
            <ul>
              <li>Behandle personoplysninger udelukkende efter dokumenteret instruks fra den dataansvarlige og i overensstemmelse med denne aftale</li>
              <li>Sikre at autoriserede medarbejdere er underlagt fortrolighed</li>
              <li>Træffe alle nødvendige tekniske og organisatoriske sikkerhedsforanstaltninger jf. GDPR art. 32</li>
              <li>Bistå den dataansvarlige med at opfylde registreredes rettigheder (indsigt, sletning mv.) inden for rimelig tid og uden unødigt ophold</li>
              <li>Slette eller tilbagelevere alle personoplysninger ved aftalens ophør, efter den dataansvarliges valg</li>
              <li>Stille alle oplysninger til rådighed, der er nødvendige for at påvise overholdelse af forpligtelserne i denne artikel</li>
            </ul>

            <h2>5. Underdatabehandlere</h2>
            <p>Den dataansvarlige giver hermed generel skriftlig tilladelse til, at GetMait kan anvende underdatabehandlere. GetMait anvender aktuelt følgende underdatabehandlere:</p>
            <ul>
              <li><strong>Twilio Inc.</strong> (USA) — Telefoni og SMS. Overførsel via SCC.</li>
              <li><strong>Google LLC</strong> (USA/EU) — Tale-til-tekst og tekst-til-tale. Overførsel via SCC.</li>
              <li><strong>Anthropic PBC</strong> (USA) — AI-sprogmodel. Overførsel via SCC.</li>
              <li><strong>Supabase Inc.</strong> (USA/EU) — Databasehosting, primært EU.</li>
              <li><strong>n8n GmbH</strong> (Tyskland, EU) — Workflow-automatisering.</li>
            </ul>
            <p>GetMait underretter den dataansvarlige om planlagte ændringer vedrørende tilføjelse eller udskiftning af underdatabehandlere med mindst 14 dages varsel, hvorved den dataansvarlige har mulighed for at gøre indsigelse.</p>

            <h2>6. Sikkerhed</h2>
            <p>GetMait har implementeret følgende tekniske og organisatoriske foranstaltninger:</p>
            <ul>
              <li>Krypteret datatransmission (HTTPS/TLS) på alle endpoints</li>
              <li>Adgangskontrol med rollebaserede rettigheder</li>
              <li>Automatisk sletning af samtaledata efter 90 dage</li>
              <li>Daglig backup med 14 dages opbevaring</li>
              <li>Løbende overvågning og alarmsystem ved servicefejl</li>
            </ul>

            <h2>7. Brud på persondatasikkerheden</h2>
            <p>GetMait underretter den dataansvarlige uden unødigt ophold — og om muligt inden for 24 timer — efter at GetMait er blevet bekendt med et brud på persondatasikkerheden. Underretningen skal som minimum indeholde en beskrivelse af brudets karakter, de berørte kategorier og omtrentlige antal af registrerede og personoplysningsposter samt de foranstaltninger, der er truffet eller foreslås truffet.</p>

            <h2>8. Overførsel til tredjelande</h2>
            <p>Behandling uden for EU/EØS sker udelukkende på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller anden passende overførselsmekanisme jf. GDPR kap. V. En liste over relevante underdatabehandlere og deres overførselsgrundlag fremgår af afsnit 5.</p>

            <h2>9. Aftalens varighed og ophør</h2>
            <p>Denne aftale er gældende, så længe GetMait behandler personoplysninger på den dataansvarliges vegne. Ved aftalens ophør sletter GetMait alle personoplysninger inden for 30 dage, medmindre lovgivning kræver længere opbevaring.</p>

            <h2>10. Kontakt og spørgsmål</h2>
            <p>Spørgsmål til denne aftale rettes til <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>.</p>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
          <p>© 2026 GetMait ApS — CVR 12345678 — Alle rettigheder forbeholdes</p>
          <div className="flex gap-6">
            <a href="/handelsbetingelser" className="hover:text-mait transition">Handelsbetingelser</a>
            <a href="/privatlivspolitik" className="hover:text-mait transition">Privatlivspolitik</a>
          </div>
        </div>
      </footer>
    </>
  );
}
