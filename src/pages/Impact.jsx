import { ArrowRight, BarChart3, CalendarClock, CheckCircle2, Clock, Download, ExternalLink, FileText, Quote, Target, Users, Wallet } from 'lucide-react'
import { grant, indicators, model, pillars, problem, progress } from '../data/impact'
import { renderIcon } from '../lib/icons'
import PageHero from '../components/ui/PageHero'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import StatusBadge from '../components/ui/StatusBadge'
import WaveDivider from '../components/ui/WaveDivider'
import Button from '../components/ui/Button'
import VideoEmbed from '../components/VideoEmbed'

function ProblemLayers() {
  const { challenge, evidence, story } = problem
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="A · The problem"
          title="Three layers of one problem"
          description="What the challenge is, what the evidence says, and what it means for a real person."
        />
        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          <RevealItem className="rounded-3xl bg-navy-deep p-8 text-slate-200 shadow-lift">
            <p className="font-display text-5xl font-extrabold leading-none text-outline-gold">01</p>
            <h3 className="mt-5 text-xl font-bold text-white">{challenge.title}</h3>
            <p className="mt-3 text-base leading-relaxed">{challenge.text}</p>
          </RevealItem>

          <RevealItem className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-display text-5xl font-extrabold leading-none text-outline-navy">02</p>
            <h3 className="mt-5 text-xl font-bold">{evidence.title}</h3>
            <ul className="mt-4 space-y-4">
              {evidence.items.map((e, i) => (
                <li key={i} className="border-l-2 border-leaf pl-4">
                  <p className="text-base leading-relaxed text-navy-deep">{e.claim}</p>
                  {e.url ? (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-leaf-dark underline-offset-2 hover:underline"
                    >
                      {e.source}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm italic text-slate-600">{e.source}</p>
                  )}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem as="article" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf to-emerald-300 p-8 text-navy-deep shadow-lift">
            <p className="font-display text-5xl font-extrabold leading-none text-white/40">03</p>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">{story.title}</h3>
            <figure className="mt-4">
              <Quote className="size-8 text-navy-deep/40" aria-hidden="true" />
              <blockquote className="mt-2 font-display text-lg font-semibold leading-snug text-navy-deep">{story.quote}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy-deep">{story.attribution}</figcaption>
            </figure>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="B · Our approach" title="Four pillars" />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <RevealItem key={p.title} className="rounded-3xl bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="inline-flex rounded-2xl bg-navy p-3 text-gold">{renderIcon(p.icon, { className: 'size-6' })}</span>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function Model() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading dark eyebrow="C · How it works" title="Our 4-step model" />
          <Reveal>
            <StatusBadge status="proposed" label="Proposed model" dark />
          </Reveal>
        </div>
        <RevealGroup as="ol" stagger={0.12} className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-gold via-leaf to-navy lg:block" aria-hidden="true" />
          {model.map((m, i) => (
            <RevealItem as="li" key={m.step} className="relative">
              <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-leaf text-navy-deep shadow-glow">
                {renderIcon(m.icon, { className: 'size-7' })}
              </span>
              <p className="mt-6 font-display text-sm font-semibold text-gold">Step {i + 1}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{m.step}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">{m.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function GrantSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={`D · The ${grant.amount} grant`} title={grant.title} description={grant.summary} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6">
            <VideoEmbed video={grant.pitchVideo} poster={grant.pitchPoster} title="Our 3-minute grant pitch" />
            <div className="flex flex-wrap gap-3">
              <Button href={grant.proposalUrl} icon={Download}>
                Download the proposal
              </Button>
              <Button to="/media" variant="secondary" icon={ArrowRight}>
                More videos
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4">
            <div className="rounded-3xl bg-mist p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Users className="size-5 text-leaf-dark" aria-hidden="true" />
                Who benefits
              </h3>
              <p className="mt-2 text-base">{grant.beneficiaries}</p>
            </div>
            <div className="rounded-3xl bg-mist p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <BarChart3 className="size-5 text-leaf-dark" aria-hidden="true" />
                How we will measure it
              </h3>
              <p className="mt-2 text-base">{grant.measurement}</p>
            </div>
            <div className="rounded-3xl bg-mist p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Target className="size-5 text-leaf-dark" aria-hidden="true" />
                Expected outcomes
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
                {grant.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-navy/10 p-6 shadow-soft sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Wallet className="size-5 text-leaf-dark" aria-hidden="true" />
              How the budget is used
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead className="border-b border-navy/10 font-display text-xs uppercase tracking-widest text-slate-600">
                  <tr>
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Item
                    </th>
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Amount
                    </th>
                    <th scope="col" className="py-3 font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5">
                  {grant.budget.map((b, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 font-medium text-navy-deep">{b.item}</td>
                      <td className="py-3 pr-4 font-display font-semibold text-navy">{b.amount}</td>
                      <td className="py-3">{b.purpose}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="border-t-2 border-navy/10">
                  <tr>
                    <th scope="row" className="py-3 pr-4 font-display font-bold text-navy-deep">
                      Total
                    </th>
                    <td className="py-3 pr-4 font-display font-bold text-navy-deep" colSpan={2}>
                      {grant.amount}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-navy/10 p-6 shadow-soft sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <CalendarClock className="size-5 text-leaf-dark" aria-hidden="true" />
              Timeline
            </h3>
            <ol className="mt-4 space-y-4 border-l-2 border-mist pl-6">
              {grant.timeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 size-3 rounded-full bg-leaf ring-4 ring-white" aria-hidden="true" />
                  <p className="font-display text-sm font-semibold text-navy">{t.period}</p>
                  <p className="text-base">{t.activity}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Indicators() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="E · Measuring success"
            title="How we would know it works"
            description="These are targets for the proposed programme, not results achieved."
          />
          <Reveal>
            <StatusBadge status="proposed" label="Proposed indicators" />
          </Reveal>
        </div>
        <Reveal className="mt-10 overflow-x-auto rounded-3xl bg-white shadow-soft ring-1 ring-navy/5">
          <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
            <caption className="sr-only">Proposed indicators (targets, not results)</caption>
            <thead className="bg-navy-deep font-display text-xs uppercase tracking-widest text-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Indicator
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Target
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Timeframe
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  How we measure
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5">
              {indicators.map((row) => (
                <tr key={row.indicator} className="transition hover:bg-mist/60">
                  <th scope="row" className="px-6 py-4 font-display font-semibold text-navy-deep">
                    {row.indicator}
                  </th>
                  <td className="px-6 py-4 font-semibold text-navy">{row.target}</td>
                  <td className="px-6 py-4">{row.timeframe}</td>
                  <td className="px-6 py-4">{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}

const progressColumns = [
  { key: 'achieved', title: 'Achieved', status: 'achieved', icon: CheckCircle2, note: 'Things that have actually happened.' },
  { key: 'inProgress', title: 'In progress', status: 'in-progress', icon: Clock, note: 'Work currently underway.' },
  { key: 'targets', title: 'Targets', status: 'target', icon: Target, note: 'What we are aiming for. Not yet achieved.' },
]

function Progress() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Where we stand"
          title="Achieved, in progress, and targets"
          description="We keep these separate so that nothing we hope for is mistaken for something we have done."
        />
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {progressColumns.map(({ key, title, status, icon: Icon, note }) => (
            <RevealItem key={key} className="flex flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Icon className="size-5 text-leaf-dark" aria-hidden="true" />
                  {title}
                </h3>
                <StatusBadge status={status} />
              </div>
              <p className="mt-2 text-sm text-slate-600">{note}</p>
              <ul className="mt-5 space-y-3">
                {progress[key].map((item, i) => (
                  <li key={i} className="flex gap-3 rounded-2xl bg-mist px-4 py-3 text-base">
                    <FileText className="mt-1 size-4 shrink-0 text-navy" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={
          <>
            From problem to <span className="text-gold">proposal</span>
          </>
        }
        description="What we learned about youth unemployment in Rwanda, and what we propose to do about it. Everything below the problem is a proposal, clearly labelled as such."
      />
      <ProblemLayers />
      <Pillars />
      <WaveDivider className="bg-mist text-navy-deep" />
      <Model />
      <WaveDivider className="bg-navy-deep text-white" flip />
      <GrantSection />
      <Indicators />
      <Progress />
    </>
  )
}
