import TempeLocation from "../Assets/TempeLocation.jpg";

const locations = [
  {
    location: "Tempe, AZ",
    state: "Arizona",
    region: "",
    address: "Address",
    hours: ["6am-10pm"],
    isOpen: true,
    notOpenMessage: "",
    numCourts: 24,
    locationImg: TempeLocation,
    bookLink: 'https://book.thepicklemall.com/book/Picklemall'
  },
  {
    location: "Texas",
    state: "Texas",
    region: "Central",
    address: "Address",
    hours: [],
    isOpen: false,
    notOpenMessage: "Opening late summer 2023",
  },
  {
    location: "Minnesota",
    state: "Minnesota",
    region: "Midwest",
    address: "Address",
    hours: [],
    isOpen: false,
    notOpenMessage: "Opening late summer 2023",
  },
];

export default locations;
