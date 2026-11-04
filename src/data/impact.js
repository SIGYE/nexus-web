/**
 * OUR IMPACT PAGE
 * ---------------
 * IMPORTANT: never present proposed numbers as achieved results.
 * - Research claims need a real source. Keep "Source: to be added" until you have one.
 * - Numbers you plan to reach go in `indicators` (proposed) or `progress.targets`.
 * - Only things that have actually happened go in `progress.achieved`.
 */

import { site } from './site'
import { PLACEHOLDER_POSTER, PLACEHOLDER_VIDEO } from './placeholders'

// (A) The problem in three layers
export const problem = {
  challenge: {
    title: 'The challenge',
    text: 'Many young people in Rwanda finish school or training without a clear path into work, and opportunities outside agriculture can be hard to reach.',
  },
  evidence: {
    title: 'The evidence',
    items: [
      { claim: 'Add a research finding on youth unemployment in Rwanda', source: 'Source: to be added', url: '' },
      { claim: 'Add a research finding on skills gaps', source: 'Source: to be added', url: '' },
      { claim: 'Add a research finding on youth and the labour market', source: 'Source: to be added', url: '' },
    ],
  },
  story: {
    title: 'The human story',
    quote: 'Add a quote from a young person affected by unemployment (with their consent).',
    attribution: 'Add name or initials, community',
  },
}

// (B) Four pillars
export const pillars = [
  { title: 'Practical Skills', icon: 'Wrench', text: 'Research-driven, hands-on training in the skills employers are looking for.' },
  { title: 'Mentorship', icon: 'Users', text: 'Guidance from people who have walked the path from learning to work.' },
  { title: 'Work Experience', icon: 'Briefcase', text: 'Project-based experience with local employers, so youth can show what they can do.' },
  { title: 'Entrepreneurship', icon: 'Lightbulb', text: 'Innovation labs that help young people turn ideas into ventures that create jobs.' },
]

// (C) Proposed 4-step model
export const model = [
  { step: 'Identify needs', icon: 'Search', text: 'Listen to young people and employers to understand the gaps.' },
  { step: 'Train & mentor', icon: 'GraduationCap', text: 'Deliver practical training alongside mentorship.' },
  { step: 'Build real projects', icon: 'Hammer', text: 'Work in teams on real challenges set with partners.' },
  { step: 'Connect to opportunities', icon: 'Link', text: 'Link participants to internships, jobs and enterprise support.' },
]

// (D) Grant proposal
export const grant = {
  title: 'Add the title of your grant proposal',
  amount: '$10,000',
  summary: 'Add a two-sentence summary of what the grant would fund.',
  beneficiaries: 'Add who will benefit, and how many (as a target).',
  budget: [
    { item: 'Add budget line (e.g. training)', amount: 'Add amount', purpose: 'Add what it pays for' },
    { item: 'Add budget line (e.g. mentorship)', amount: 'Add amount', purpose: 'Add what it pays for' },
    { item: 'Add budget line (e.g. project materials)', amount: 'Add amount', purpose: 'Add what it pays for' },
    { item: 'Add budget line (e.g. monitoring)', amount: 'Add amount', purpose: 'Add what it pays for' },
  ],
  timeline: [
    { period: 'Add period (e.g. Month 1-2)', activity: 'Add activities' },
    { period: 'Add period', activity: 'Add activities' },
    { period: 'Add period', activity: 'Add activities' },
  ],
  outcomes: ['Add an expected outcome', 'Add an expected outcome'],
  measurement: 'Add how you will measure success (surveys, follow-ups at 6 and 12 months, partner reports...).',
  proposalUrl: site.links.proposal,
  pitchVideo: site.links.pitchVideo || PLACEHOLDER_VIDEO,
  pitchPoster: PLACEHOLDER_POSTER,
}

// (E) Proposed indicators. These are TARGETS, not results.
export const indicators = [
  { indicator: 'Youth trained', target: 'Add target', timeframe: 'Add timeframe', method: 'Add how measured' },
  { indicator: 'Projects completed', target: 'Add target', timeframe: 'Add timeframe', method: 'Add how measured' },
  { indicator: 'Internship / job connections', target: 'Add target', timeframe: 'Add timeframe', method: 'Add how measured' },
  { indicator: 'Businesses supported', target: 'Add target', timeframe: 'Add timeframe', method: 'Add how measured' },
  { indicator: 'Employment outcomes at 6 months', target: 'Add target', timeframe: '6 months after programme', method: 'Add how measured' },
  { indicator: 'Employment outcomes at 12 months', target: 'Add target', timeframe: '12 months after programme', method: 'Add how measured' },
]

// Keep these three lists honest and separate.
export const progress = {
  achieved: ['Add something you have actually done (e.g. E-Lab challenges completed)', 'Add another achievement'],
  inProgress: ['Building our digital footprint (this website)', 'Add something underway'],
  targets: ['Add a target from your proposal', 'Add another target'],
}
