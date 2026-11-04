/**
 * TEAM MEMBERS
 * ------------
 * One object per member. Copy a block to add a member, delete a block to remove one.
 *
 * photo:         path inside /public, e.g. 'images/team/aline.jpg'  (portrait ~4:5 works best)
 * pitchVideo:    YouTube link or ID of the member's elevator pitch (optional, '' hides it)
 * reflection:    answers shown on the Media & Stories page
 */

const placeholderReflection = {
  surprised: 'Add answer: what surprised you?',
  learned: 'Add answer: what did you learn?',
  challenge: 'Add answer: what was your biggest challenge?',
  differently: 'Add answer: what would you do differently?',
  proud: 'Add answer: what are you proud of?',
}

export const members = [
  {
    id: 'member-1',
    name: 'Bonheur Turikumwenayo',
    //role: 'Add role',
    community: 'Rwanda',
    photo: 'images/team/member1.jpeg',
    interests: ['Add interest', 'Add interest'],
    funFact: 'Add a fun fact',
    brings: 'Helps in team organisation',
    //pitchVideo: '',
    //reflection: placeholderReflection,
  },
  {
    id: 'member-2',
    name: 'Kevine Ineza',
    //role: 'Add role',
    community: 'Rwanda',
    photo: 'images/team/member2.jpeg',
    interests: ['Add interest', 'Add interest'],
    funFact: 'Add a fun fact',
    brings: 'Add what this member brings to the team',
    //pitchVideo: '',
    //reflection: placeholderReflection,
  },
  {
    id: 'member-3',
    name: 'Linda Teta Mwesigye',
    //role: 'Add role',
    community: 'Rwanda',
    photo: 'images/team/member3.jpeg',
    interests: ['Add interest', 'Add interest'],
    funFact: 'Add a fun fact',
    brings: 'Add what this member brings to the team',
    //pitchVideo: '',
    //reflection: placeholderReflection,
  },
  {
    id: 'member-4',
    name: 'Abdulkamil Kemal Dibaba',
    role: 'Add role',
    community: 'Ethiopia',
    photo: 'images/team/member5.jpg',
    interests: ['Add interest', 'Add interest'],
    funFact: 'Add a fun fact',
    brings: 'Add what this member brings to the team',
    // pitchVideo: '',
    // reflection: placeholderReflection,
  },
  {
    id: 'member-5',
    name: 'Olisa Shimwa',
    // role: 'Add role',
    community: 'Rwanda',
    photo: 'images/team/member4.PNG',
    interests: ['Add interest', 'Add interest'],
    funFact: 'Add a fun fact',
    brings: 'Add what this member brings to the team',
    // pitchVideo: '',
    // reflection: placeholderReflection,
  },
]
