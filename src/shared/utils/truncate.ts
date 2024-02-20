export function truncateAfterWords(str: string, numWords: number) {
  const words = str.split(' ')
  if (words.length <= numWords) {
    return str
  }
  const truncatedWords = words.slice(0, numWords)

  return truncatedWords.join(' ') + '...'
}
