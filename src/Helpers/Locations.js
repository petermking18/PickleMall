import TempeLocation from "../Assets/TempeLocation.jpg";
import Stock8 from '../Assets/Stock8.png';


const locations = [
    {
        location: "Tempe, AZ",
        state: "Arizona",
        region: "Tempe, AZ",
        address: "Arizona Mills",
        hours: ["6am-9pm M-F",
            "7am-9pm S-S"],
        isOpen: true,
        notOpenMessage: "Opening July 2023",
        numCourts: 16,
        locationImg: Stock8,
        // bookLink: 'http://Picklemall.podify.club/book/tempe-multi'
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
