const ticketDetailList = [
  {
    title: 'BTC',
    timestamp: 1514814731876,
    last: "18654000",
    bid: "18654000",
    ask: "18670000",
    low: "18500000",
    high: "19300000",
    volume: "1785.065104458610552089",
    change: "143000",
    changePercent: "0.77"
  },
  {
    title: 'ETC',
    timestamp: 1514817992453,
    last: "41100",
    bid: "41100",
    ask: "41240",
    low: "35300",
    high: "45460",
    volume: "864458.047369048472873231",
    change: "5630",
    changePercent: "15.87"
  },
  {
    title: 'ETH',
    timestamp: 1514818020471,
    last: "1046050",
    bid: "1046050",
    ask: "1049600",
    low: "1006000",
    high: "1077950",
    volume: "16602.738643349825675784",
    change: "35000",
    changePercent: "3.46"
  },
  {
    title: 'XRP',
    timestamp: 1514818039356,
    last: "2699",
    bid: "2693",
    ask: "2699",
    low: "2542",
    high: "2847",
    volume: "24932280.317906481031012405",
    change: "-104",
    changePercent: "-3.71"
  },
  {
    title: 'BCH',
    timestamp: 1514818032152,
    last: "3267500",
    bid: "3255000",
    ask: "3267000",
    low: "3200000",
    high: "3480000",
    volume: "4904.756988365577893641",
    change: "-42000",
    changePercent: "-1.27"
  }
];

export default function (state = null, action) {
  switch (action.type) {
    case 'TICKET_SELECTED':
      return ticketDetailList.find((t) => t.title === action.payload.title);
  }
  return state;
}