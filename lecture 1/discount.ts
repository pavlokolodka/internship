export default function discount(price: number) {
  const currentDate = new Date(Date.now());
  const currentDay = currentDate.getDay()
  let newPrice = price;
  const someSpecialDays = new Set(Array.from(new Array(16).keys()));

  if (someSpecialDays.has(currentDay)) {
    newPrice = price * 0.8; // 20% discount 
  }

  return newPrice;
}
  



