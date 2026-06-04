// Map Photos
import map01 from "@images/locations/Map01-davie.png";
import map02 from "@images/locations/Map02-eastvancouver.png";
import map03 from "@images/locations/Map03-mountpleasant.png";

// Numbered Icons
import LocationIcon01 from "@images/location1.svg?raw";
import LocationIcon02 from "@images/location2.svg?raw";
import LocationIcon03 from "@images/location3.svg?raw";

export const locations = [
  {
    cityArea: "West End Vancouver",
    address: "1674 Davie St.",
    storeHours: [
      { days: "Mon-Wed", hours: "11am-7pm" },
      { days: "Thu-Sat", hours: "10am-11pm" },
      { days: "Sun", hours: "11am-6pm" },
    ],
    image: map01,
    locationIcon: LocationIcon01,
    href: "https://maps.app.goo.gl/ZWsd2aXFoNPHkgMFA",
  },
  {
    cityArea: "East Vancouver",
    address: "651 East Hastings",
    storeHours: [
      { days: "Mon-Thu", hours: "10am-10pm" },
      { days: "Fri-Sat", hours: "10am-11pm" },
      { days: "Sun", hours: "11am-6pm" },
    ],
    image: map02,
    locationIcon: LocationIcon02,
    href: "https://maps.app.goo.gl/fSV8WLYfYqDHX6oY8",
  },
  {
    cityArea: "Mount Pleasant",
    address: "247 West Broadway",
    storeHours: [
      { days: "Mon-Wed", hours: "11am-7pm" },
      { days: "Thu-Sat", hours: "10am-10pm" },
      { days: "Sun", hours: "11am-6pm" },
    ],
    image: map03,
    locationIcon: LocationIcon03,
    href: "https://maps.app.goo.gl/obv896WAwTtwXzNX7",
  },
];
