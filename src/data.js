import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id:1,
    image:tour1,
    date:'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'lorem random text',
    location: 'china',
    duration: '6',
    cost: 2100,
  },
  {
    id:2,
    image:tour2,
    date:'October 1st, 2020',
    title: 'Best of Java',
    info: 'lorem random text',
    location: 'Indonesia',
    duration: '6',
    cost: 2100,
  },
  {
    id:3,
    image:tour3,
    date:'august 26th, 2020',
    title: 'Explore HongKong',
    info: 'lorem random text',
    location: 'HongKong',
    duration: '8',
    cost: 5000,
  },
  {
    id:3,
    image:tour4,
    date:'august 26th, 2020',
    title: 'Kenya Highlights',
    info: 'lorem random text',
    location: 'Kenya',
    duration: '20',
    cost: 3300,
  },
]