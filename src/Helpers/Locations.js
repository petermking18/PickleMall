import tempe_courts_small from "../Assets/tempe_courts_small.png";


const locations = [
    {
        location: "Tempe, AZ",
        state: "Arizona",
        region: "Tempe, AZ",
        address: "5000 S Arizona Mills Cir, Suite 313, Tempe, AZ",
        hours: ["6:00 AM - 9:00 PM"],
        isOpen: true,
        subtitle: "Opening Autust 4th",
        numCourts: 16,
        locationImg: tempe_courts_small,
        // bookLink: 'http://Picklemall.podify.club/book/tempe-multi'
    },
    {
        location: "Texas",
        state: "Texas",
        region: "Texas",
        hours: [],
        isOpen: false,
        subtitle: "Opening winter 2024",
    },
    {
        location: "Chicago",
        state: "Illinois",
        region: "Chicagoland",
        hours: [],
        isOpen: false,
        subtitle: "Opening winter 2024",
    },
];

export default locations;
