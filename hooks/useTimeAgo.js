const SECONDS_DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getTimeAgo = timestamp => {
  const now = Date.now()
  const elapsed = (now - timestamp) / 1000 // In seconds

  for (const [unit, unitInSeconds] of SECONDS_DATE_UNITS) {
    if (elapsed > unitInSeconds || unit === 'second') {
      const value = (Math.floor(elapsed / unitInSeconds)) * -1
      return { value, unit }
    }
  }

}

export default function useTimeAgo(timestamp) {
  const { value, unit } = getTimeAgo(timestamp)
  // const localeLanguage = navigator.language
  const rtf = new Intl.RelativeTimeFormat('us', { style: 'long' })
  const timeAgo = rtf.format(value, unit)
  return timeAgo
}