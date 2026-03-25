import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databehandleraftale | Getmait",
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4">Databehandleraftale</h1>
          <p className="text-slate-400 text-sm">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-14 py-14">
            <div className="space-y-10 text-[15px] text-slate-600 leading-relaxed">

              <p className="text-slate-500 italic border-l-2 border-orange-200 pl-4">Denne databehandleraftale regulerer GetMaits behandling af personoplysninger på vegne af kunden i forbindelse med levering af GetMait-platformen. Aftalen er en integreret del af serviceaftalen og træder i kraft ved indgåelse heraf.</p>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">1. Parter</h2>
                <p className="mb-2"><strong className="text-slate-800">Databehandler:</strong> GetMait ApS, Tarphagevej 34, 6700 Esbjerg, CVR 12345678 · <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
                <p><strong className="text-slate-800">Dataansvarlig:</strong> Den virksomhed (restaurant eller lignende) der har indgået serviceaftale med GetMait ApS.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">2. Formål og omfang</h2>
                <p className="mb-3">GetMait behandler personoplysninger på den dataansvarliges vegne med henblik på at levere følgende ydelser: AI-baseret telefonisk ordremodtagelse (Voice AI), AI-baseret chat-ordremodtagelse, SMS-kommunikation til slutkunder samt dashboard til administration af ordrer og indstillinger.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">3. Kategorier af registrerede og oplysninger</h2>
                <p className="mb-3">GetMait behandler følgende personoplysninger på den dataansvarliges vegne:</p>
                <p className="mb-2"><strong className="text-slate-800">Slutkunder (restaurantgæster):</strong> Telefonnummer, samtaleindhold (transskription af ordresamtaler), bestillingsoplysninger (varelinje, leverings-/afhentningstype, adresse).</p>
                <p>GetMait behandler ikke følsomme personoplysninger jf. GDPR art. 9.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">4. GetMaits forpligtelser</h2>
                <p className="mb-3">GetMait forpligter sig til at behandle personoplysninger udelukkende efter dokumenteret instruks fra den dataansvarlige, at sikre at autoriserede medarbejdere er underlagt fortrolighed, at træffe alle nødvendige tekniske og organisatoriske sikkerhedsforanstaltninger jf. GDPR art. 32, at bistå den dataansvarlige med at opfylde registreredes rettigheder inden for rimelig tid, at slette eller tilbagelevere alle personoplysninger ved aftalens ophør samt at stille dokumentation til rådighed for overholdelse af denne aftale.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">5. Underdatabehandlere</h2>
                <p className="mb-3">Den dataansvarlige giver hermed generel skriftlig tilladelse til, at GetMait kan anvende underdatabehandlere. GetMait underretter den dataansvarlige om planlagte ændringer med mindst 14 dages varsel.</p>
                <p className="mb-2"><strong className="text-slate-800">Twilio Inc.</strong> (USA) — Telefoni og SMS. Overførsel via SCC.</p>
                <p className="mb-2"><strong className="text-slate-800">Google LLC</strong> (USA/EU) — Tale-til-tekst og tekst-til-tale. Overførsel via SCC.</p>
                <p className="mb-2"><strong className="text-slate-800">Anthropic PBC</strong> (USA) — AI-sprogmodel. Overførsel via SCC.</p>
                <p className="mb-2"><strong className="text-slate-800">Supabase Inc.</strong> (USA/EU) — Databasehosting, primært EU. Overførsel via SCC.</p>
                <p><strong className="text-slate-800">n8n GmbH</strong> (Tyskland, EU) — Workflow-automatisering. Behandles inden for EU/EØS.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">6. Sikkerhed</h2>
                <p>GetMait har implementeret følgende tekniske og organisatoriske foranstaltninger: krypteret datatransmission (HTTPS/TLS) på alle endpoints, adgangskontrol med rollebaserede rettigheder, automatisk sletning af samtaledata efter 90 dage, daglig backup med 14 dages opbevaring samt løbende overvågning og alarmsystem ved servicefejl.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">7. Brud på persondatasikkerheden</h2>
                <p>GetMait underretter den dataansvarlige uden unødigt ophold — og om muligt inden for 24 timer — efter at GetMait er blevet bekendt med et brud på persondatasikkerheden. Underretningen indeholder som minimum en beskrivelse af brudets karakter, de berørte kategorier og omtrentlige antal registrerede samt de foranstaltninger, der er truffet eller foreslås truffet.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">8. Overførsel til tredjelande</h2>
                <p>Behandling uden for EU/EØS sker udelukkende på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller anden passende overførselsmekanisme jf. GDPR kap. V. Se afsnit 5 for liste over underdatabehandlere og overførselsgrundlag.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">9. Aftalens varighed og ophør</h2>
                <p>Aftalen er gældende, så længe GetMait behandler personoplysninger på den dataansvarliges vegne. Ved aftalens ophør sletter GetMait alle personoplysninger inden for 30 dage, medmindre lovgivning kræver længere opbevaring.</p>
              </section>

              <div className="border-t border-slate-100" />

              <section>
                <h2 className="text-base font-black uppercase tracking-widest text-slate-400 mb-3">10. Kontakt</h2>
                <p>Spørgsmål til denne aftale rettes til <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a>.</p>
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
