/**
 * THE SIX E-LAB CHALLENGES (Our Journey page)
 * -------------------------------------------
 * Each chapter shows: number, status, title, objective, what we did, and a video.
 *
 * status:     'completed' shows a "Completed" badge; '' shows no badge
 * whatWeDid:  { intro?: 'optional sentence above the list', ordered?: true for a numbered list, points: [...] }
 * video:      YouTube link/ID or a file like 'videos/c1.mp4' in /public
 *             ''   = shows a "Video coming soon" box
 *             null = no video for this challenge
 * icon:       lucide-react icon name listed in src/lib/icons.js
 * short:      line shown next to the big number on wide screens
 */

export const challenges = [
  {
    number: 1,
    slug: 'people-behind-the-mission',
    title: 'The People Behind the Mission',
    short: 'Who we are, where we come from and what each of us brings.',
    icon: 'Users',
    status: 'completed',
    objective: 'Introduce the team behind NEXUS: our backgrounds, communities, interests and the roles we play.',
    whatWeDid: {
      points: ['We introduced ourselves to one another.', 'We talked about the things we each like.', 'We shared fun facts about ourselves.'],
    },
    video: 'https://www.youtube.com/watch?v=X-nUZubvmzg',
  },
  {
    number: 2,
    slug: 'stories-beyond-the-headlines',
    title: 'Stories Beyond the Headlines',
    short: 'Listening to a community in Nkombo.',
    icon: 'BookOpen',
    status: 'completed',
    objective: 'Tell the real story of our community beyond the headlines, and define how we work together as a team.',
    whatWeDid: {
      intro: 'We spoke with members of a community in Nkombo about the problems affecting them. They shared with us:',
      ordered: true,
      points: [
        'The problems they face in their daily lives.',
        'What they like about life in Nkombo.',
        'What they would like to see change in Nkombo.',
      ],
    },
    video: 'https://www.youtube.com/watch?v=QSbGHYFAM6I',
  },
  {
    number: 3,
    slug: 'help-lab',
    title: 'HELP-LAB',
    short: 'A cause we stood behind, the actions we took and what we reflected on.',
    icon: 'Heart',
    status: 'completed',
    objective: 'Choose a cause, take action on it as a team and reflect on the experience in a 3-minute video.',
    whatWeDid: {
      points: [
        'We visited a family in Masoro.',
        'We helped them plant vegetables in their garden.',
        'We bought them household supplies to help them in their everyday lives.',
      ],
    },
    video: 'https://www.youtube.com/watch?v=vzbaoAZN8X8',
  },
  {
    number: 4,
    slug: 'learning-from-those-on-the-ground',
    title: 'Learning From Those on the Ground',
    short: 'A visit to an organisation already working on the problem.',
    icon: 'MessageSquare',
    status: 'completed',
    objective: 'Interview an organisation working on youth employment to learn how they operate and what they have learned.',
    whatWeDid: {
      points: [
        'We visited Harambe, an organisation that trains young people in skills that help them land jobs.',
        'We learned from what they do and how far their work has come.',
        'We heard their success stories and the challenges they face.',
      ],
    },
    video: 'https://www.youtube.com/watch?v=leCt4AobVto',
  },
  {
    number: 5,
    slug: 'our-solution-our-proposal',
    title: 'Our Solution, Our Proposal',
    short: 'Our $10,000 grant proposal and pitch.',
    icon: 'Rocket',
    status: 'completed',
    objective: 'Design a solution to youth unemployment and present it as a $10,000 grant proposal with a 3-minute pitch video.',
    whatWeDid: {
      points: ['We worked on our pitch presentation.', 'We pitched our idea to compete for the $10,000 grant.'],
    },
    video: 'https://www.youtube.com/watch?v=QYQfd5O4Z9g',
  },
  {
    number: 6,
    slug: 'our-digital-footprint',
    title: 'Our Digital Footprint',
    short: 'Why we built this website.',
    icon: 'Globe',
    status: '',
    objective: 'Bring the whole E-Lab journey together in one website that tells our story and shares our proposal.',
    whatWeDid: {
      points: ['We made this website to talk about NEXUS and bring everything we do to life visually.'],
    },
    video: null,
  },
]
