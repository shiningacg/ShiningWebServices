export default function (time) {
  let date
  if (time > 1588594890 * 1000) {
    date = new Date(time)
  } else {
    date = new Date(time*1000)
  }
  const seperator1 = "-";
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + seperator1 + month + seperator1 + strDate;
}