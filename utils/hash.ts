import hash from 'object-hash'

export function linkToShortHash(link: string, length = 6) {
  const salt = Date.now().toString() + Math.random().toString()
  const linkId = hash(link + salt).slice(0, length)
  return linkId
}
