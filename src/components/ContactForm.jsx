import { useState } from 'react'
import { CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import { site } from '../data/site'

const channels = [
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
]

const field =
  'mt-1.5 block w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-[0.95rem] text-black placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-black/10'
const label = 'block font-display text-sm font-semibold text-black'

/**
 * Contact form with two channels.
 * - Email: opens the visitor's email app with the title + message filled in, addressed to site.contact.formEmail.
 * - WhatsApp: opens WhatsApp with the message pre-filled to site.contact.whatsapp.
 * Neither address is shown on the form itself.
 */
export default function ContactForm() {
  const [channel, setChannel] = useState('email')
  const [form, setForm] = useState({ subject: '', message: '' })
  const [note, setNote] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const isEmail = channel === 'email'

  const sendWhatsApp = () => {
    const url = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(form.message.trim())}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setNote('WhatsApp has opened with your message. Just press send there.')
  }

  const sendEmail = () => {
    const params = `subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(form.message.trim())}`
    window.location.href = `mailto:${site.contact.formEmail}?${params}`
    setNote('Your email app has opened with your message. Just press send there.')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (isEmail) sendEmail()
    else sendWhatsApp()
  }

  const switchTo = (id) => {
    setChannel(id)
    setNote('')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border-2 border-black bg-white p-6 text-black sm:p-8">
      {/* Channel choice */}
      <fieldset>
        <legend className={label}>How would you like to reach us?</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-full border-2 border-black p-1">
          {channels.map(({ id, label: text, icon: Icon }) => {
            const active = channel === id
            return (
              <label
                key={id}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 font-display text-sm font-semibold transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-black/20 ${
                  active ? 'bg-black text-white' : 'text-black hover:bg-black/5'
                }`}
              >
                <input type="radio" name="channel" value={id} checked={active} onChange={() => switchTo(id)} className="sr-only" />
                <Icon className="size-4" aria-hidden="true" />
                {text}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-6 space-y-4">
        {isEmail && (
          <>
            <div>
              <label htmlFor="cf-subject" className={label}>
                Title
              </label>
              <input id="cf-subject" type="text" required value={form.subject} onChange={update('subject')} className={field} placeholder="What is your message about?" />
            </div>
          </>
        )}

        <div>
          <label htmlFor="cf-message" className={label}>
            Message
          </label>
          <textarea id="cf-message" required rows={6} value={form.message} onChange={update('message')} className={`${field} resize-y`} placeholder="Write your message here…" />
        </div>

      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 sm:text-base"
      >
        {isEmail ? <Send className="size-4" aria-hidden="true" /> : <MessageCircle className="size-4" aria-hidden="true" />}
        {isEmail ? 'Send email' : 'Send on WhatsApp'}
      </button>

      <p role="status" aria-live="polite" className="min-h-[1.25rem]">
        {note && (
          <span className="mt-4 flex items-start gap-2 text-sm text-black">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {note}
          </span>
        )}
      </p>
    </form>
  )
}
