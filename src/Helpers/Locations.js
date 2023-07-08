import TempeLocation from "../Assets/TempeLocation.jpg";
import Stock8 from '../Assets/Stock8.png';


const locations = [
  {
    location: "Tempe, AZ",
    state: "Arizona",
    region: "Tempe, AZ",
    address: "Address",
    hours: ["6am-10pm"],
    isOpen: false,
    notOpenMessage: "Opening July 2023",
    numCourts: 16,
    locationImg: Stock8,
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
