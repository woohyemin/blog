export function formatDate(dateString: string, separator: string = "-") {
  const [year, month, day] = dateString.split(separator);
  return `${year}년 ${month}월 ${day}일`;
}
