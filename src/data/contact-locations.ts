import { ContactLocation } from "@/types/contact-dt";

export const contactLocations: ContactLocation[] = [
  {
    id:1,
    city: "San Francisco",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    image: "/assets/img/contact/contact-us/contact-us-thumb-1.jpg",
    mapLink: "https://www.google.com/maps",
    speed: "1",
  },
  {
    id:2,
    city: "Germany",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    image: "/assets/img/contact/contact-location-2.jpg",
    mapLink: "https://www.google.com/maps",
    speed: ".9",
    isActive: true,
    extraClass: "mt-60",
  },
  {
    id:3,
    city: "New Zealand",
    email: "sydney@contact.com",
    phone: "(+91) 76001726",
    image: "/assets/img/contact/contact-location-3.jpg",
    mapLink: "https://www.google.com/maps",
    speed: "1",
  },
];