const hi: string = "/Task-4";
export type NavLink = {
    title: string;
    href: string;
};
export type HeroInfo = {
    icon?: string;
    h3: string;
    p: string;
};
export type CardInfo = {
    icon?: string;
    title: string;
    description: string;
};
export type TrendingCard = {
    price: string;
    title: string;
    address: string;
    image: string;
};
export type DealCard = {
    title: string;
    image: string;
    label: string;
    tag: string;
};
export type PropertySection = {
    name: string;
    deals: DealCard[];
};
export type DreamSection = {
    img: string;
    title: string;
    description: string;
};
export type BestDealsSection = {
    title: string;
    description: string;
    sections: PropertySection[];
};
export type FooterSection = {
    title: string;
    items: string[];
};
export type FooterData = {
    description: string;
    address: string;
    logo: string;
    sections: FooterSection[];
    socials: string[]; // أيقونات السوشال (مسارات الصور)
    copyright: string;
    terms: string;
    privacy: string;
};
export const navBar: NavLink[] = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Service", href: "#service" },
    { title: "New Property", href: "#new-property" },
    { title: "Contact", href: "#contact" },
];
export const heroInfo: HeroInfo[] = [
    { icon: `${hi}/icons/location.svg`, h3: "Location", p: "Ahmedabad, India" },
    {
        icon: `${hi}/icons/dollar-circle.svg`,
        h3: "Price",
        p: "$1000 - $10,000",
    },
    { icon: `${hi}/icons/house.svg`, h3: "Type of Property", p: "Apartment" },
];
export const howItWorksCards: CardInfo[] = [
    {
        icon: `${hi}/HowItWorkIcon/icon1.svg`,
        title: "Search Apartment",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
        icon: `${hi}/HowItWorkIcon/icon2.svg`,
        title: "Select Apartment",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
        icon: `${hi}/HowItWorkIcon/icon3.svg`,
        title: "Confirm Apartment",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
];
export const dreamSection: DreamSection = {
    img: `${hi}/DreamImg.png`,
    title: "Find Dream Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
};
export const trendingCards: TrendingCard[] = [
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img1.png`,
    },
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img2.png`,
    },
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img3.png`,
    },
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img4.png`,
    },
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img5.png`,
    },
    {
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        image: `${hi}/TrendingImgs/img6.png`,
    },
];
export const bestDeals: BestDealsSection = {
    title: "Best Real Estate Deals",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sections: [
        {
            name: "Residential Property",
            deals: [
                {
                    title: "Cottage House",
                    image: `${hi}/BestDeal/Image 01.jpg`,
                    label: "Featured",
                    tag: "1D",
                },
                {
                    title: "Modern Family Home",
                    image: `${hi}/BestDeal/Image 02.jpg`,
                    label: "Featured",
                    tag: "1D",
                },
                {
                    title: "Renovated Bungalow",
                    image: `${hi}/BestDeal/Image 03.jpg`,
                    label: "Featured",
                    tag: "1D",
                },
            ],
        },
        {
            name: "Commercial Property",
            deals: [
                {
                    title: "Cottage House",
                    image: `${hi}/BestDeal/Image 01.jpg`,
                    label: "Featured",
                    tag: "2D",
                },
                {
                    title: "Modern Family Home",
                    image: `${hi}/BestDeal/Image 02.jpg`,
                    label: "Featured",
                    tag: "2D",
                },
                {
                    title: "Renovated Bungalow",
                    image: `${hi}/BestDeal/Image 03.jpg`,
                    label: "Featured",
                    tag: "2D",
                },
            ],
        },
        {
            name: "Agriculture Property",
            deals: [
                {
                    title: "Cottage House",
                    image: `${hi}/BestDeal/Image 01.jpg`,
                    label: "Featured",
                    tag: "3D",
                },
                {
                    title: "Modern Family Home",
                    image: `${hi}/BestDeal/Image 02.jpg`,
                    label: "Featured",
                    tag: "3D",
                },
                {
                    title: "Renovated Bungalow",
                    image: `${hi}/BestDeal/Image 03.jpg`,
                    label: "Featured",
                    tag: "3D",
                },
            ],
        },
        {
            name: "Industrial Property",
            deals: [
                {
                    title: "Cottage House",
                    image: `${hi}/BestDeal/Image 01.jpg`,
                    label: "Featured",
                    tag: "4D",
                },
                {
                    title: "Modern Family Home",
                    image: `${hi}/BestDeal/Image 02.jpg`,
                    label: "Featured",
                    tag: "4D",
                },
                {
                    title: "Renovated Bungalow",
                    image: `${hi}/BestDeal/Image 03.jpg`,
                    label: "Featured",
                    tag: "4D",
                },
            ],
        },
    ],
};
export const footerData: FooterData = {
    logo: `${hi}/logo/logo.png`,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    sections: [
        {
            title: "Service",
            items: ["Payment & Tax", "Features", "View Booking", "Support"],
        },
        {
            title: "About",
            items: ["About us", "News", "Pricing", "New Property"],
        },
    ],
    socials: [
        `${hi}/socialmediaIcon/facebook-icon.svg`,
        `${hi}/socialmediaIcon/twitter-icon.svg`,
        `${hi}/socialmediaIcon/linkedin-icon.svg`,
    ],
    copyright: "Copyright © 2024 Flora. All Rights Reserved",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
};
