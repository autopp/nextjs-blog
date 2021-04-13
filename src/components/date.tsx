import { parseISO, format } from 'date-fns'
import { FC } from 'react'

interface DateProps { dateString: string }

const Date: FC<DateProps> = ({ dateString }: DateProps) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
