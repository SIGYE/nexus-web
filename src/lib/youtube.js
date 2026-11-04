// Accepts a YouTube ID or any common YouTube URL and returns the 11-character video ID ('' if none).
export function getYouTubeId(input) {
  if (!input) return ''
  const value = input.trim()
  if (/^[\w-]{11}$/.test(value)) return value
  const match = value.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/)
  return match ? match[1] : ''
}
