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
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm">
            Lovpligtig information
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4">Databehandleraftale</h1>
          <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-16 py-14">
            <div>

              <p className="text-slate-500 italic border-l-2 border-orange-200 pl-4 mb-10 text-[15px] leading-relaxed">Denne databehandleraftale regulerer GetMaits behandling af personoplysninger på vegne af kunden i forbindelse med levering af GetMait-platformen. Aftalen er en integreret del af serviceaftalen og træder i kraft ved indgåelse heraf.</p>

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">1. Parter</h2>
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/4 align-top">Databehandler</td>
                      <td className="py-2.5 text-slate-800 font-semibold align-top">GetMait ApS, Tarphagevej 34, 6700 Esbjerg, CVR 12345678 · <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 align-top">Dataansvarlig</td>
                      <td className="py-2.5 text-slate-600 align-top">Den virksomhed (restaurant eller lignende) der har indgået serviceaftale med GetMait ApS.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">2. Formål og omfang</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">GetMait behandler personoplysninger på den dataansvarliges vegne med henblik på at levere følgende ydelser:</p>
                <ul className="space-y-2">
                  {[
                    ["Voice AI", "AI-baseret telefonisk ordremodtagelse"],
                    ["Chat", "AI-baseret chat-ordremodtagelse"],
                    ["SMS", "SMS-kommunikation til slutkunder"],
                    ["Dashboard", "Administration af ordrer og indstillinger"],
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
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">3. Kategorier af registrerede og oplysninger</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">GetMait behandler følgende personoplysninger på den dataansvarliges vegne:</p>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/3 align-top">Registrerede</td>
                      <td className="py-2.5 text-slate-600 align-top">Slutkunder (restaurantgæster)</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 align-top">Oplysninger</td>
                      <td className="py-2.5 text-slate-600 align-top">Telefonnummer, samtaleindhold (transskription af ordresamtaler), bestillingsoplysninger (varelinje, leverings-/afhentningstype, adresse)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[14px] text-slate-500">GetMait behandler ikke følsomme personoplysninger jf. GDPR art. 9.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">4. GetMaits forpligtelser</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">GetMait forpligter sig til at:</p>
                <ul className="space-y-2">
                  {[
                    "Behandle personoplysninger udelukkende efter dokumenteret instruks fra den dataansvarlige",
                    "Sikre at autoriserede medarbejdere er underlagt fortrolighed",
                    "Træffe alle nødvendige tekniske og organisatoriske sikkerhedsforanstaltninger jf. GDPR art. 32",
                    "Bistå den dataansvarlige med at opfylde registreredes rettigheder inden for rimelig tid",
                    "Slette eller tilbagelevere alle personoplysninger ved aftalens ophør",
                    "Stille dokumentation til rådighed for overholdelse af denne aftale",
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
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">5. Underdatabehandlere</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">Den dataansvarlige giver hermed generel skriftlig tilladelse til, at GetMait kan anvende underdatabehandlere. GetMait underretter den dataansvarlige om planlagte ændringer med mindst 14 dages varsel.</p>
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
                      ["Twilio Inc.", "USA", "Telefoni og SMS", "SCC"],
                      ["Google LLC", "USA/EU", "Tale-til-tekst og tekst-til-tale", "SCC"],
                      ["Anthropic PBC", "USA", "AI-sprogmodel", "SCC"],
                      ["Supabase Inc.", "USA/EU", "Databasehosting, primært EU", "SCC"],
                      ["n8n GmbH", "DE/EU", "Workflow-automatisering", "EU/EØS"],
                    ].map(([name, country, role, transfer]) => (
                      <tr key={name} className="border-t border-slate-100">
                        <td className="py-2.5 align-top">
                          <p className="font-semibold text-slate-800">{name}</p>
                          <p className="text-slate-400 text-[12px]">{country}</p>
                        </td>
                        <td className="py-2.5 text-slate-600 align-top">{role}</td>
                        <td className="py-2.5 text-slate-600 align-top">{transfer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">6. Sikkerhed</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">GetMait har implementeret følgende tekniske og organisatoriske foranstaltninger:</p>
                <ul className="space-y-2">
                  {[
                    "Krypteret datatransmission (HTTPS/TLS) på alle endpoints",
                    "Adgangskontrol med rollebaserede rettigheder",
                    "Automatisk sletning af samtaledata efter 90 dage",
                    "Daglig backup med 14 dages opbevaring",
                    "Løbende overvågning og alarmsystem ved servicefejl",
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
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">7. Brud på persondatasikkerheden</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">GetMait underretter den dataansvarlige uden unødigt ophold — og om muligt inden for <strong className="text-slate-800">24 timer</strong> — efter at GetMait er blevet bekendt med et brud på persondatasikkerheden. Underretningen indeholder som minimum en beskrivelse af brudets karakter, de berørte kategorier og omtrentlige antal registrerede samt de foranstaltninger, der er truffet eller foreslås truffet.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">8. Overførsel til tredjelande</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">Behandling uden for EU/EØS sker udelukkende på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller anden passende overførselsmekanisme jf. GDPR kap. V. Se afsnit 5 for liste over underdatabehandlere og overførselsgrundlag.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section className="mb-10">
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">9. Aftalens varighed og ophør</h2>
                <table className="w-full text-[14px] mb-4">
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500 w-1/2">Aftalens varighed</td>
                      <td className="py-2.5 text-slate-800 font-semibold">Løbende, så længe GetMait behandler data</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="py-2.5 text-slate-500">Sletning ved ophør</td>
                      <td className="py-2.5 text-slate-800 font-semibold">Inden for 30 dage</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[14px] text-slate-500">Lovgivning kan kræve længere opbevaring i specifikke tilfælde.</p>
              </section>

              <div className="border-t border-slate-100 mb-10" />

              <section>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">10. Kontakt</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-3">Spørgsmål til denne aftale rettes til:</p>
                <div className="text-[14px] text-slate-600 space-y-1 pl-4 border-l-2 border-slate-100">
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
