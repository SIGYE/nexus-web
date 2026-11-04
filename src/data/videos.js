/**
 * VIDEO LIBRARY (Media & Stories page)
 * ------------------------------------
 * video:     a YouTube link/ID (e.g. https://youtu.be/abc123XYZ00) OR a video file in /public
 *            (e.g. 'videos/pitch.mp4'). '' shows a "coming soon" frame.
 * poster:    optional cover image for video files, e.g. 'images/hero/poster.jpg'
 * category:  must be one of the `id`s in videoCategories below.
 */

import { site } from './site'
import { PLACEHOLDER_POSTER, PLACEHOLDER_VIDEO } from './placeholders'

export const videoCategories = [
  { id: 'team', label: 'Meet the team' },
  { id: 'community', label: 'Community story' },
  { id: 'help-lab', label: 'HELP-LAB' },
  { id: 'interview', label: 'Interview' },
  { id: 'pitch', label: 'Grant pitch' },
  { id: 'reflections', label: 'Reflections' },
]

// The big film at the top of the Media page.
export const journeyFilm = {
  title: 'Our E-Lab journey',
  description: 'Add a one-line description of your journey film.',
  video: PLACEHOLDER_VIDEO,
  poster: PLACEHOLDER_POSTER,
}

export const videos = [
  { title: 'Meet NEXUS', description: 'Add description', category: 'team', video: PLACEHOLDER_VIDEO, poster: PLACEHOLDER_POSTER },
  { title: 'Our community, beyond the headlines', description: 'Add description', category: 'community', video: PLACEHOLDER_VIDEO, poster: PLACEHOLDER_POSTER },
  { title: 'HELP-LAB reflection', description: 'Add description', category: 'help-lab', video: PLACEHOLDER_VIDEO, poster: PLACEHOLDER_POSTER },
  { title: 'Learning from those on the ground', description: 'Add description', category: 'interview', video: PLACEHOLDER_VIDEO, poster: PLACEHOLDER_POSTER },
  {
    title: 'Our $10,000 grant pitch',
    description: 'Add description',
    category: 'pitch',
    video: site.links.pitchVideo || PLACEHOLDER_VIDEO,
    poster: PLACEHOLDER_POSTER,
  },
  { title: 'Team reflections', description: 'Add description', category: 'reflections', video: PLACEHOLDER_VIDEO, poster: PLACEHOLDER_POSTER },
]
