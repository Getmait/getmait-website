import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databehandleraftale | Getmait",
};

const sections = [
  { num: "1", title: "Parter" },
  { num: "2", title: "Formål og omfang" },
  { num: "3", title: "Kategorier af registrerede og oplysninger" },
  { num: "4", title: "GetMaits forpligtelser" },
  { num: "5", title: "Underdatabehandlere" },
  { num: "6", title: "Sikkerhed" },
  { num: "7", title: "Brud på persondatasikkerheden" },
  { num: "8", title: "Overførsel til tredjelande" },
  { num: "9", title: "Aftalens varighed og ophør" },
  { num: "10", title: "Kontakt" },
];

const processors = [
  { name: "Twilio Inc.", country: "USA", role: "Telefoni og SMS-håndtering", transfer: "SCC" },
  { name: "Google LLC", country: "USA/EU", role: "Tale-til-tekst og tekst-til-tale", transfer: "SCC" },
  { name: "Anthropic PBC", country: "USA", role: "AI-sprogmodel", transfer: "SCC" },
  { name: "Supabase Inc.", country: "USA/EU", role: "Databasehosting, primært EU", transfer: "SCC" },
  { name: "n8n GmbH", country: "Tyskland · EU", role: "Workflow-automatisering", transfer: "EU/EØS" },
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
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-8 py-6">
            <p className="text-slate-700 text-[15px] leading-relaxed">Denne databehandleraftale regulerer GetMaits behandling af personoplysninger på vegne af kunden i forbindelse med levering af GetMait-platformen. Aftalen er en integreret del af serviceaftalen og træder i kraft ved indgåelse heraf.</p>
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

            <div id="s1"><SectionHeader num="1" title="Parter" />
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-2">
                <p><span className="font-bold text-slate-900">Databehandler:</span> GetMait ApS, Tarphagevej 34, 6700 Esbjerg, CVR 12345678 · <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
                <p><span className="font-bold text-slate-900">Dataansvarlig:</span> Den virksomhed (restaurant eller lignende) der har indgået serviceaftale med GetMait ApS.</p>
              </div>
            </div>

            <Divider />

            <div id="s2"><SectionHeader num="2" title="Formål og omfang" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">GetMait behandler personoplysninger på den dataansvarliges vegne med henblik på at levere følgende ydelser:</p>
              <div className="space-y-2">
                {[
                  { label: "Voice AI", desc: "AI-baseret telefonisk ordremodtagelse" },
                  { label: "Chat", desc: "AI-baseret chat-ordremodtagelse" },
                  { label: "SMS", desc: "SMS-kommunikation til slutkunder" },
                  { label: "Dashboard", desc: "Administration af ordrer og indstillinger" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 px-5 py-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-mait mt-2" />
                    <p className="text-[13px] text-slate-600"><span className="font-bold text-slate-900">{item.label}:</span> {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s3"><SectionHeader num="3" title="Kategorier af registrerede og oplysninger" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">GetMait behandler følgende personoplysninger på den dataansvarliges vegne:</p>
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-2 mb-4">
                <p><span className="font-bold text-slate-900">Slutkunder (restaurantgæster):</span> Telefonnummer, samtaleindhold (transskription af ordresamtaler), bestillingsoplysninger (varelinje, leverings-/afhentningstype, adresse).</p>
              </div>
              <p className="text-slate-500 text-[13px]">GetMait behandler ikke følsomme personoplysninger jf. GDPR art. 9.</p>
            </div>

            <Divider />

            <div id="s4"><SectionHeader num="4" title="GetMaits forpligtelser" />
              <div className="space-y-2">
                {[
                  "Behandle personoplysninger udelukkende efter dokumenteret instruks fra den dataansvarlige",
                  "Sikre at autoriserede medarbejdere er underlagt fortrolighed",
                  "Træffe alle nødvendige tekniske og organisatoriske sikkerhedsforanstaltninger jf. GDPR art. 32",
                  "Bistå den dataansvarlige med at opfylde registreredes rettigheder inden for rimelig tid",
                  "Slette eller tilbagelevere alle personoplysninger ved aftalens ophør",
                  "Stille dokumentation til rådighed for overholdelse af denne aftale",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-black text-mait">{i + 1}</span>
                    </div>
                    <p className="text-[13px] text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s5"><SectionHeader num="5" title="Underdatabehandlere" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">Den dataansvarlige giver hermed generel skriftlig tilladelse til, at GetMait kan anvende underdatabehandlere. GetMait underretter den dataansvarlige om planlagte ændringer med mindst 14 dages varsel.</p>
              <div className="space-y-3">
                {processors.map((p) => (
                  <div key={p.name} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] font-bold text-slate-900">{p.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{p.country}</span>
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{p.transfer}</span>
                      </div>
                      <p className="text-[13px] text-slate-500">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s6"><SectionHeader num="6" title="Sikkerhed" />
              <div className="space-y-2">
                {[
                  "Krypteret datatransmission (HTTPS/TLS) på alle endpoints",
                  "Adgangskontrol med rollebaserede rettigheder",
                  "Automatisk sletning af samtaledata efter 90 dage",
                  "Daglig backup med 14 dages opbevaring",
                  "Løbende overvågning og alarmsystem ved servicefejl",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-mait mt-2" />
                    <p className="text-[13px] text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            <div id="s7"><SectionHeader num="7" title="Brud på persondatasikkerheden" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">GetMait underretter den dataansvarlige uden unødigt ophold — og om muligt inden for <strong className="text-slate-900">24 timer</strong> — efter at GetMait er blevet bekendt med et brud på persondatasikkerheden.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">Underretningen indeholder som minimum en beskrivelse af brudets karakter, de berørte kategorier og omtrentlige antal registrerede samt de foranstaltninger, der er truffet eller foreslås truffet.</p>
            </div>

            <Divider />

            <div id="s8"><SectionHeader num="8" title="Overførsel til tredjelande" />
              <p className="text-slate-600 text-[15px] leading-relaxed">Behandling uden for EU/EØS sker udelukkende på baggrund af EU-Kommissionens standardkontraktbestemmelser (SCC) eller anden passende overførselsmekanisme jf. GDPR kap. V. Se afsnit 5 for liste over underdatabehandlere og overførselsgrundlag.</p>
            </div>

            <Divider />

            <div id="s9"><SectionHeader num="9" title="Aftalens varighed og ophør" />
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Varighed</p>
                  <p className="text-base font-extrabold text-slate-900">Løbende</p>
                  <p className="text-[12px] text-slate-500">mens data behandles</p>
                </div>
                <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sletning ved ophør</p>
                  <p className="text-base font-extrabold text-slate-900">30 dage</p>
                  <p className="text-[12px] text-slate-500">fra aftalens ophør</p>
                </div>
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed">Aftalen er gældende, så længe GetMait behandler personoplysninger på den dataansvarliges vegne. Ved aftalens ophør sletter GetMait alle personoplysninger inden for 30 dage, medmindre lovgivning kræver længere opbevaring.</p>
            </div>

            <Divider />

            <div id="s10"><SectionHeader num="10" title="Kontakt" />
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">GetMait ApS</p>
                <p>Tarphagevej 34, 6700 Esbjerg · CVR 12345678</p>
                <p><a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
              </div>
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
    </>
  );
}
