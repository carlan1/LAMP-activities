// export function Backgrounds():Array<any> {
//     return [Background01,
//         Background02,
//         Background03,
//         Background04,
//         Background05,
//         Background06,
//         Background07,
//         Background08,
//         Background09,
//         Background10,
//         Background11,
//         Background12,
//         Background13,
//         Background14,
//         Background15,
//         Background16,
//         Background17,
//         Background18,
//         Background19,
//         Background20,
//         Background21,
//         Background22,
//         Background23,
//         Background24,
//         Background25,
//         Background26,
//         Background27,
//         Background28,
//         Background29,
//         Background30,
//         Background31,
//         Background32,
//         Background33,
//         Background34,
//         Background35,
//         Background36]
// }

const background = () => {
  const images = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
  ];

  return images[Math.floor(Math.random() * images.length)];
};

export default background;
