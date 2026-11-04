import { Quote } from 'lucide-react'
import Picture from './ui/Picture'

const prompts = [
  ['surprised', 'What surprised me'],
  ['learned', 'What I learned'],
  ['challenge', 'My biggest challenge'],
  ['differently', "What I'd do differently"],
  ['proud', "What I'm proud of"],
]

export default function ReflectionCard({ member }) {
  const { name, role, photo, reflection = {} } = member
  return (
    <article className="relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
      <Quote className="absolute right-6 top-6 size-10 text-gold/40" aria-hidden="true" />
      <header className="flex items-center gap-4">
        <Picture src={photo} alt={`Portrait of ${name}`} kind="person" placeholder="" className="size-14 shrink-0 rounded-full ring-2 ring-gold/50" />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </header>
      <dl className="mt-6 space-y-4">
        {prompts.map(([key, label]) =>
          reflection[key] ? (
            <div key={key}>
              <dt className="font-display text-xs font-semibold uppercase tracking-widest text-leaf-dark">{label}</dt>
              <dd className="mt-1 text-base leading-relaxed">{reflection[key]}</dd>
            </div>
          ) : null,
        )}
      </dl>
    </article>
  )
}
