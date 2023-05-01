import TempeLocation from "../Assets/TempeLocation.jpg";

const locations = [
  {
    location: "Tempe, AZ",
    state: "Arizona",
    region: "",
    address: "Address",
    hours: ["Mon-Fri: 6am-8pm", "Sat: 6am-midnight", "Sun: 6am-11pm"],
    isOpen: true,
    notOpenMessage: "",
    numCourts: 24,
    locationImg: TempeLocation,
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
