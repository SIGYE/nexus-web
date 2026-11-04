// Resolves a path inside /public so it works on any host (including GitHub Pages sub-paths).
// 'images/team/a.jpg' -> './images/team/a.jpg'. Full URLs are returned unchanged.
export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\.?\//, '')
}

export const isExternal = (href) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
