/**
 * SITE-WIDE CONTENT
 * -----------------
 * Edit text here; components read from this file.
 * Anything starting with "Add ..." is a placeholder for the team to replace.
 * Leave a link as an empty string ('') to hide it automatically.
 *
 * Image paths are relative to /public, e.g. 'images/brand/logo.svg'.
 */

export const site = {
  name: 'NEXUS',
  tagline: 'A student-led think tank on youth employment in Rwanda',
  programme: 'E-Lab',
  // Drop a logo file into public/images/brand/ and put its path here. Empty = text logo.
  logo: 'images/brand/logo.png',
  // Shown next to the logo in the navbar and footer.
  wordmark: { name: 'NEXUS', suffix: 'Enterprise' },

  contact: {
    email: '', // e.g. 'hello@nexus.rw'
    phone: '',
    location: 'Kigali, Rwanda',
    // Contact form targets (used behind the scenes, never shown on the form).
    // WhatsApp: full international number, digits only (no +, spaces or dashes).
    whatsapp: '250791847917',
    // Email: "Send email" opens the visitor's email app addressed here.
    formEmail: 'l.mwesigye@alustudent.com',
  },

  // Text shown next to each icon in the footer.
  socialLabels: {
    instagram: '@nexus_jpeg',
    youtube: 'NEXUS ALU',
  },
  socials: {
    instagram: 'https://www.instagram.com/nexus_jpeg',
    linkedin: '',
    youtube: 'https://www.youtube.com/@NEXUS-ALU',
    x: '',
    facebook: '',
    tiktok: '',
  },

  // Single source for these two: they are reused on the Journey, Impact and Media pages.
  links: {
    // Put the proposal PDF in public/docs/ and use 'docs/your-file.pdf', or paste a Google Drive link.
    proposal: '',
    // YouTube link/ID or 'videos/pitch.mp4' of the 3-minute grant pitch.
    pitchVideo: '',
  },
}

export const hero = {
  // Full-screen background video on the Home hero (paths inside /public).
  // `backgroundVideo` = desktop, `backgroundVideoMobile` = lighter file for phones.
  backgroundVideo: 'images/hero/videohero-1080.mp4',
  backgroundVideoMobile: 'images/hero/videohero-720.mp4',
  title: 'Youth Empowerment',
  subtitle: "The future of Rwanda's employment",
  headline: ['Youth.', 'Ideas.', 'Opportunity.'],
  highlight: 'Opportunity.',
  subline: "The future of work isn't something we wait for. It's something we build.",
  // Hero visual. Set ONE of these: image ('images/hero/hero.jpg') or video (YouTube link or 'videos/hero.mp4').
  image: 'images/hero/placeholder-hero.svg',
  imageAlt: 'Add a description of the hero photo',
  video: '',
  themes: ['Skills', 'Mentorship', 'Innovation', 'Employers'],
}

export const marqueeThemes = ['Skills', 'Mentorship', 'Innovation', 'Employers', 'Opportunity']

export const identity = {
  whoWeAre:
    'NEXUS is a student-led think tank in Rwanda. We are a young team still shaping our identity, united by one question: how can young Rwandans move from learning to meaningful work?',
  nameMeaning: 'Add the story behind the name NEXUS.',
}

export const mission = {
  full: "We are a think tank that empowers Rwanda, where young people are not only preparing for the future of work but also actively helping to shape it. We bring Rwandan youth together to turn ambitious ideas into practical solutions, create real employment opportunities, create pathways into careers beyond agriculture, and build the skills needed to compete and succeed in the global economy. Through research-driven skills training, mentorship, and innovation labs, as well as partnerships with local employers, giving young people hands-on, project-based experience grounded in collaboration, creativity, steadfast integrity, we work to make Rwanda's young people a major force in achieving inclusive economic growth and building a better future for our communities.",
  paragraphs: [
    'We are a think tank that empowers Rwanda, where young people are not only preparing for the future of work but also actively helping to shape it.',
    'We bring Rwandan youth together to turn ambitious ideas into practical solutions, create real employment opportunities, create pathways into careers beyond agriculture, and build the skills needed to compete and succeed in the global economy.',
    "Through research-driven skills training, mentorship, and innovation labs, as well as partnerships with local employers, giving young people hands-on, project-based experience grounded in collaboration, creativity, steadfast integrity, we work to make Rwanda's young people a major force in achieving inclusive economic growth and building a better future for our communities.",
  ],
  short:
    'We bring Rwandan youth together to turn ambitious ideas into practical solutions, real employment opportunities and pathways into careers beyond agriculture.',
}

export const vision = 'Add your vision statement.'

// About page values: stacked cards that swipe away as you scroll, in this order.
// icon: any lucide-react icon name listed in src/lib/icons.js
export const values = [
  { title: 'Collaboration', icon: 'Handshake', text: 'Working together, sharing knowledge and building solutions through collective effort.' },
  { title: 'Creativity', icon: 'Lightbulb', text: 'Challenging conventional thinking and exploring new possibilities.' },
  { title: 'Integrity', icon: 'ShieldCheck', text: 'Acting with honesty, accountability and a commitment to doing what is right.' },
  { title: 'Growth', icon: 'Sprout', text: 'Embracing learning, resilience and continuous improvement.' },
  { title: 'Impact', icon: 'Heart', text: 'Turning ideas and intentions into meaningful change for our communities.' },
]

export const groupStatement = {
  title: 'What we hope to gain from E-Lab',
  text: 'Add your group statement: what you hope to gain from E-Lab as a team.',
}

export const problemStrip = {
  eyebrow: 'The challenge',
  statement: 'Too many young Rwandans are ready to work, but the path from learning to a job is unclear.',
  points: [
    { icon: 'Compass', title: 'Pathways beyond agriculture', text: 'Young people need visible routes into a wider range of careers.' },
    { icon: 'GraduationCap', title: 'Skills for a global economy', text: 'Practical, project-based skills that employers recognise.' },
    { icon: 'Briefcase', title: 'Real opportunities', text: 'Connections to employers, mentors and first work experiences.' },
  ],
}

// Home page: "The Challenge" section, directly below the hero.
// Stats count up from 0 to `value` when scrolled into view. `decimals` = digits after the point.
export const challenge = {
  title: 'The Challenge',
  subtitle: 'Understanding the Problem',
  paragraphs: [
    "Rwanda's young people have the ambition and potential to drive the country's economic transformation. Yet, many continue to face barriers to finding meaningful and sustainable work.",
    'In 2024, youth unemployment reached 18%, while youth labour underutilization stood at 56.2%. Skills mismatches, unequal access to quality education, limited opportunities beyond traditional sectors, and the prevalence of informal employment continue to widen the gap between what young people learn and what the labour market needs.',
  ],
  statsTitle: 'Numbers behind the challenge',
  // Order = top-left, top-right, bottom-left, bottom-right.
  stats: [
    { value: 18, decimals: 0, suffix: '%', label: 'Youth unemployment' },
    { value: 56.2, decimals: 1, suffix: '%', label: 'Youth labour underutilization' },
    { value: 90.4, decimals: 1, suffix: '%', label: 'Informal employment' },
    { value: 14.9, decimals: 1, suffix: '%', label: 'National unemployment' },
  ],
  source:
    'Source: National Institute of Statistics of Rwanda (NISR), Labour Force Survey 2024 and Q4 2024 report. Figures represent different indicators and populations.',
}

// Home page: "Our Mission" section, directly below "The Challenge".
export const missionHome = {
  title: 'Our Mission',
  paragraphs: [
    'NEXUS is a think tank bringing young Rwandans together to prepare for and actively shape the future of work. Through research-driven skills development, mentorship, innovation labs and partnerships with local employers, we help young people transform ambitious ideas into practical solutions, businesses and employment opportunities.',
    "We equip the next generation with the skills, experience and entrepreneurial mindset to access diverse career pathways, compete in the global economy and contribute to Rwanda's inclusive economic growth.",
  ],
  ambition: {
    eyebrow: 'Our long-term ambition · 2040',
    figure: 'Below 10%',
    label: 'Graduate unemployment target',
    text: 'Our ambition is to help build an economy where more young Rwandans can access meaningful and sustainable employment.',
  },
}

// Home page: "Our Approach" section + "Be part of the future" invitation, below "Our Mission".
// icon: any name listed in src/lib/icons.js. Order = top-left, top-right, bottom-left, bottom-right.
export const approach = {
  title: 'Our Approach',
  pillars: [
    { icon: 'GraduationCap', title: 'Skills development' },
    { icon: 'Users', title: 'Mentorship' },
    { icon: 'Lightbulb', title: 'Innovation Labs' },
    { icon: 'Handshake', title: 'Industry partnership' },
  ],
  invite: {
    title: 'Be part of the future',
    text: "You've worked hard for your degree. Now let's turn it into the career you deserve. NEXUS brings university graduates and young Rwandans together to sharpen in-demand skills, learn from mentors who've walked the path, build bold ideas in our innovation labs and connect directly with employers who are hiring. Don't wait for the future of work to happen to you. Join NEXUS and help build it.",
  },
}

// About page: "Why We Exist – Our Story" section (first section, under the navbar).
// `question` is highlighted wherever it appears in `text`.
export const story = {
  // Group photo shown on the left of the story (web-size copy of images/team/all.jpg).
  image: 'images/team/all-web.jpg',
  imageAlt: 'The NEXUS team standing together',
  title: 'Why We Exist',
  subtitle: 'Our Story',
  question: 'How can we help change this?',
  text: 'NEXUS was born at the African Leadership University, where we came together as students united by a shared concern: youth unemployment in Rwanda and the barriers that prevent young people from turning their potential into opportunity. Driven by one question, How can we help change this?, we began exploring sustainable solutions through research, dialogue and collaboration. This shared vision inspired us to create a think tank where young people can turn ideas into practical solutions, foster entrepreneurship and shape the future of work. Today, NEXUS is committed to building a future where young Rwandans are not just seeking opportunities, but creating them.',
}

// Contact Us page
export const contactPage = {
  title: 'Contact Us',
  text: "Want to know more about NEXUS, partner with us or join the team? Send us a message by email or WhatsApp and we'll get back to you with more details.",
}

// Our Services page.
// Services alternate automatically: 1st black (text on the right), 2nd white (text on the left), and so on.
// Add a service by copying a block; `text` can hold one or more paragraphs.
export const servicesPage = {
  eyebrow: 'Our Services',
  title: 'From potential to opportunity.',
  intro: [
    'We help young Rwandans build the skills, experience, connections and confidence to access meaningful work and create opportunities of their own.',
    'Through practical learning, mentorship, employer partnerships and enterprise support, we connect ambition with real-world opportunities.',
  ],
  services: [
    {
      title: 'Practical & Digital Skills Training',
      text: [
        "We provide practical, market-relevant training that prepares young people for today's workplace. Our programmes focus on digital literacy, computer applications, technical and vocational skills, and the tools needed to adapt to an evolving job market.",
      ],
    },
    {
      title: 'Communication & Workplace Readiness',
      text: [
        'Having technical skills is not enough; young people must also know how to present themselves professionally. We develop essential communication, interpersonal and workplace skills, including public speaking, teamwork, problem-solving, CV writing, interview preparation and professional conduct, helping participants become confident and competitive job seekers.',
      ],
    },
    {
      title: 'Mentorship & Career Guidance',
      text: [
        'We connect participants with experienced professionals and industry mentors who provide career guidance, share industry insights and help young people identify opportunities aligned with their strengths and ambitions. Through mentorship, participants gain the confidence, direction and professional networks needed to navigate their careers.',
      ],
    },
    {
      title: 'Employment & Internship Placement',
      text: [
        'We build partnerships with employers to connect trained and qualified participants with job and internship opportunities. By bridging the gap between young talent and businesses seeking skilled workers, we help participants transition from training into meaningful employment and gain valuable workplace experience.',
      ],
    },
    {
      title: 'Continuous Career Support & Re-employment',
      text: [
        'Our commitment does not end when someone secures their first job. If a participant leaves their position for reasonable and justifiable reasons, we continue supporting them in identifying and securing another suitable employment opportunity. We believe in long-term career growth and stand by the people we train as they navigate their professional journeys.',
      ],
    },
    {
      title: 'Skills Certification & Recognition',
      text: [
        'We recognize the skills and competencies participants develop through our programmes by awarding certificates that document their training and demonstrated abilities. These credentials give graduates a way to showcase their capabilities, strengthen their professional profiles and communicate their skills to prospective employers throughout their job searches.',
      ],
    },
  ],
}

// Our Proposal page: the pitch deck, shown as slides.
// Slide images were made from the PDF (public/docs/pitch/slide-01.jpg …, thumbnails in public/docs/pitch/thumbs/).
// If the deck changes, export a new PDF and ask for the slide images to be regenerated (or replace them by hand, same names).
export const proposalPage = {
  title: 'Our Proposal',
  text: 'Our pitch for the $10,000 grant: how NEXUS plans to turn the potential of Rwanda’s young people into skills, jobs and enterprises. Browse the slides below.',
  pdf: 'docs/Yellow Modern Investor Deck Presentation.pdf',
  slideCount: 11,
  slide: (n) => `docs/pitch/slide-${String(n).padStart(2, '0')}.jpg`,
  thumb: (n) => `docs/pitch/thumbs/slide-${String(n).padStart(2, '0')}.jpg`,
}
