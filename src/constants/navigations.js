import { redirect } from "react-router-dom";

export const navUrls = [
    { id: 1, label: "Home", redirect: "/" },

    { id: 2, label: "Home", redirect: "/home" },
    { id: 3, label: "About", redirect: "/about" },
    { id: 4, label: "Services", redirect: "/services" },
    { id: 5, label: "Clients", redirect: "/clients" },
    { id: 6, label: "Awards", redirect: "/awards" },
    { id: 7, label: "Contact", redirect: "/contact" },
];

export const socialIcons = [
    {
        id: 1,
        img: "/Icons/facebook.png",
        redirect: "https://www.facebook.com/profile.php?id=61555286012162",
    },
    {
        id: 2,
        img: "/Icons/instagram.png",
        redirect: "https://www.instagram.com/healthfrogs/",
    },
    {
        id: 3,
        img: "/Icons/twitter.png",
        redirect: "https://twitter.com/Health_FROGS",
    },
    {
        id: 4,
        img: "/Icons/linkedin.png",
        redirect: "https://www.linkedin.com/company/healthfrogs/",
    },
];
