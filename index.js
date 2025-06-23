function superbowlWin(record) {
  const win = record.find(entry => entry.result === "W");
  return win ? win.year : undefined;
}
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" }
];

console.log(superbowlWin(record)); // Output: "2015"
