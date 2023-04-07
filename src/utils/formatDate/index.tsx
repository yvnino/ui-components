import { DateTime } from 'luxon'

const formatDate = (date: number | string | Date, format?: string) => {
  if (format) {
    return DateTime.fromJSDate(new Date(date)).toFormat(format)
  }

  return DateTime.fromJSDate(new Date(date))
}

export default formatDate
