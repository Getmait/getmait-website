import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handelsbetingelser | Getmait",
};

const sections = [
  { num: "1", title: "Generelt" },
  { num: "2", title: "Ydelser" },
  { num: "3", title: "Priser og betaling" },
  { num: "4", title: "Abonnement og opsigelse" },
  { num: "5", title: "Kundens forpligtelser" },
  { num: "6", title: "Immaterielle rettigheder" },
  { num: "7", title: "Ansvarsbegrænsning" },
  { num: "8", title: "Fortrolighed" },
  { num: "9", title: "Lovvalg og værneting" },
  { num: "10", title: "Kontakt" },
];

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mt-12 mb-5 first:mt-0">
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6">Handelsbetingelser</h1>
          <p className="text-slate-400 text-base font-medium">Gældende fra 1. januar 2026 · GetMait ApS · CVR 12345678</p>
        </div>
      </div>

      <main className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Intro */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-8 py-6">
            <p className="text-slate-700 text-[15px] leading-relaxed">Disse betingelser gælder for alle aftaler mellem GetMait ApS og kunden om levering af AI-baserede voice- og automatiseringsydelser. Ved accept af et tilbud eller indgåelse af abonnementsaftale accepteres betingelserne i deres helhed.</p>
          </div>

          {/* Indholdsfortegnelse */}
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

          {/* Indhold */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm px-10 md:px-16 py-12">

            {/* 1 */}
            <div id="s1">
              <SectionHeader num="1" title="Generelt" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">Disse handelsbetingelser gælder for alle aftaler indgået mellem GetMait ApS (herefter "Getmait") og kunden om levering af AI-baserede voice- og automatiseringsydelser.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">Getmait forbeholder sig ret til at opdatere handelsbetingelserne med et varsel på minimum 30 dage forud for ikrafttræden. Fortsat brug af tjenesten efter varslingsperiodens udløb udgør accept af de opdaterede betingelser.</p>
            </div>

            <Divider />

            {/* 2 */}
            <div id="s2">
              <SectionHeader num="2" title="Ydelser" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">Getmait leverer AI-drevne løsninger til restauranter og lignende virksomheder, herunder:</p>
              <div className="space-y-3 mb-5">
                {[
                  { icon: "📞", label: "Voice AI", desc: "Automatisk opkaldshåndtering og ordremodtagelse" },
                  { icon: "💬", label: "Chat Widget", desc: "Intelligent mersalg og kundedialog via chat" },
                  { icon: "📊", label: "Dashboard", desc: "Realtids-dashboard til opfølgning og analyse" },
                  { icon: "🔗", label: "Integrationer", desc: "Integration til POS- og bestillingssystemer (afhænger af pakke)" },
                  { icon: "⚙️", label: "AI-optimering", desc: "Løbende opdatering og optimering af AI-modellen" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <span className="text-[13px] font-bold text-slate-900">{item.label}: </span>
                      <span className="text-[13px] text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[13px]">Den præcise ydelsespakke fremgår af den individuelle aftale eller det accepterede tilbud.</p>
            </div>

            <Divider />

            {/* 3 */}
            <div id="s3">
              <SectionHeader num="3" title="Priser og betaling" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Fakturering", value: "Månedsvis forud" },
                  { label: "Betalingsbetingelse", value: "8 dage netto" },
                  { label: "Morarente", value: "1,5 % / måned" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 text-center">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-base font-extrabold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">Priser aftales individuelt og fremgår af det underskrevne tilbud eller abonnementsaftalen. Alle priser er ekskl. moms, medmindre andet er angivet.</p>
              <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                <p className="text-[13px] text-slate-600">Getmait forbeholder sig ret til at suspendere adgang til platformen ved betalingsrestance ud over <strong className="text-slate-900">14 dage</strong>, indtil mellemværendet er udlignet.</p>
              </div>
            </div>

            <Divider />

            {/* 4 */}
            <div id="s4">
              <SectionHeader num="4" title="Abonnement og opsigelse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Bindingsperiode", value: "3 måneder" },
                  { label: "Opsigelsesvarsel", value: "30 dage" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">Opsigelse skal ske skriftligt pr. e-mail til <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a> til udgangen af en måned.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">Getmait kan uden varsel opsige aftalen ved væsentlig misligholdelse, herunder manglende betaling, misbrug af platformen eller overtrædelse af gældende lovgivning.</p>
            </div>

            <Divider />

            {/* 5 */}
            <div id="s5">
              <SectionHeader num="5" title="Kundens forpligtelser" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">Kunden er ansvarlig for:</p>
              <div className="space-y-3">
                {[
                  "At stille nødvendige tekniske oplysninger til rådighed for opsætning (fx telefonnumre, menukort, åbningstider)",
                  "At sikre, at de informationer der gives til Getmait er korrekte og opdaterede",
                  "At informere egne kunder om, at opkald kan blive håndteret af en AI-stemme, i det omfang lovgivningen kræver dette",
                  "At anvende platformen i overensstemmelse med gældende dansk ret og EU-regulering",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-black text-mait">{i + 1}</span>
                    </div>
                    <p className="text-[13px] text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* 6 */}
            <div id="s6">
              <SectionHeader num="6" title="Immaterielle rettigheder" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">Alle rettigheder til Getmaits platform, software, algoritmer og AI-modeller tilhører GetMait ApS. Kunden opnår alene en ikke-eksklusiv brugsret til platformen i abonnementsperioden.</p>
              <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                <p className="text-[13px] text-slate-600">Det er ikke tilladt at kopiere, reverse engineere, videreudvikle eller videresælge nogen del af platformen uden forudgående skriftlig tilladelse.</p>
              </div>
            </div>

            <Divider />

            {/* 7 */}
            <div id="s7">
              <SectionHeader num="7" title="Ansvarsbegrænsning" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Maks. erstatningsansvar", value: "3 mdr. betaling" },
                  { label: "Tilstræbt oppetid", value: "99,5 % / md." },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-extrabold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed">Getmait er ikke ansvarlig for indirekte tab, driftstab, tabt avance eller tab som følge af tredjeparters handlinger. Planlagt vedligeholdelse varsles i videst muligt omfang.</p>
            </div>

            <Divider />

            {/* 8 */}
            <div id="s8">
              <SectionHeader num="8" title="Fortrolighed" />
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">Begge parter forpligter sig til at behandle den anden parts fortrolige oplysninger med diskretion og ikke at videregive disse til tredjeparter uden forudgående skriftligt samtykke.</p>
              <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                <p className="text-[13px] text-slate-600">Fortrolighedsforpligtelsen gælder i <strong className="text-slate-900">aftaleperioden og 2 år</strong> herefter.</p>
              </div>
            </div>

            <Divider />

            {/* 9 */}
            <div id="s9">
              <SectionHeader num="9" title="Lovvalg og værneting" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Lovvalg", value: "Dansk ret" },
                  { label: "Værneting", value: "Retten i Esbjerg" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-extrabold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* 10 */}
            <div id="s10">
              <SectionHeader num="10" title="Kontakt" />
              <div className="bg-slate-50 rounded-2xl px-6 py-5 text-[14px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">GetMait ApS</p>
                <p>Tarphagevej 34, 6700 Esbjerg</p>
                <p>CVR: 12345678</p>
                <p>E-mail: <a href="mailto:kontakt@getmait.dk" className="text-mait font-semibold hover:underline">kontakt@getmait.dk</a></p>
              </div>
            </div>

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
            <a href="/databehandleraftale" className="hover:text-mait transition">Databehandleraftale</a>
          </div>
        </div>
      </footer>
    </>
  );
}
