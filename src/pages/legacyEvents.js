// Original V2 event content, retained in the new event-card and dialog design.
import merch from '../assets/images/Events/merch.jpg';
import cellspellCard from '../assets/images/Events/cellspell-card.png';
import cellspellOriginal from '../assets/images/Events/cellspell.png';
const eventImages = { merch, cellspell: cellspellCard };
const previousUpcoming = [
    {
      id: 1,
      eventName: "JOYBOTS 2.0",
      category: "JOYBOTS 2.0",
      description: "Joybots 2.0 - We bring you the joy and happiness in robotic and knowledge learning and automation activity sessions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-11-15",
      endDate: "2024-11-15"
    },
    {
      id: 2,
      eventName: "Get your merchandise",
      category: "Get your merchandise",
      description: "Elevate your style with the official IEEE SLIIT merchandise! From trendy t-shirts and hoodies to practical tote bags and exclusive accessories.",
      image: eventImages.merch,
      registerLink: "#",
      startDate: "2024-11-20",
      endDate: "2024-11-20"
    },
    {
      id: 3,
      eventName: "CellSpell",
      category: "CellSpell",
      description: "CellSpell is the perfect confluence of biology and technology. It educates the students with knowledge on cells while enhancing their memory and understanding.",
      image: eventImages.cellspell,
      registerLink: "#",
      startDate: "2024-12-01",
      endDate: "2024-12-01"
    }
  ];
const previousPast = [
    {
      id: 1,
      eventName: "Synergy Springs",
      category: "Synergy Springs",
      description: "A full day leadership and soft skills training program organized for IEEE Members to Unfold.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-08-15",
      endDate: "2024-08-15"
    },
    {
      id: 2,
      eventName: "Venturify 2024",
      category: "Venturify 2024",
      description: "Venturify 2024 was a hybrid entrepreneurial boot camp, offering startup development, funding, and mentorship through online and onsite meetings.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-07-10",
      endDate: "2024-07-12"
    },
    {
      id: 3,
      eventName: "Launchpad '24",
      category: "Launchpad '24",
      description: "A webinar series focused on content creation, featuring two leading Sri Lankan content creators and influencers.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-06-20",
      endDate: "2024-06-20"
    },
    {
      id: 4,
      eventName: "TechTalk 2024",
      category: "TechTalk 2024",
      description: "An insightful discussion on emerging technologies and their impact on the industry.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-05-15",
      endDate: "2024-05-15"
    }
  ];
const joybotsDetails = {
    id: 1,
    eventName: "JOYBOTS 2.0 - Robotics Workshop",
    category: "JOYBOTS 2.0",
    mainImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?w=400&h=300&fit=crop"
    ],
    description: `Welcome to JOYBOTS 2.0, an exciting robotics workshop designed to bring joy and innovation to students passionate about technology and automation!

This comprehensive workshop series will introduce participants to the fundamentals of robotics, including:

• Robot design and construction principles
• Programming and automation techniques
• Sensor integration and control systems
• Real-world applications of robotics in various industries
• Hands-on project building and team collaboration

Whether you're a beginner or have some experience with robotics, this workshop offers something for everyone. Our experienced instructors will guide you through interactive sessions, providing personalized attention and support throughout your learning journey.

Participants will have the opportunity to work on exciting projects, collaborate with fellow enthusiasts, and showcase their creations at the end of the workshop. This is more than just a learning experience – it's a chance to be part of a vibrant community of innovators and makers.

Don't miss this opportunity to dive into the fascinating world of robotics and automation. Register now to secure your spot and embark on an unforgettable journey of discovery and innovation!`,
    startDate: "2024-11-15",
    endDate: "2024-11-15",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    location: "SLIIT Main Campus, Malabe",
    venue: "Tech Innovation Lab, Building A - Level 3",
    registerLink: "#"
  };
export const legacyEvents = [...previousUpcoming, ...previousPast].map((event, index) => ({
  id: 'v2-' + (index + 1), name: event.eventName, tag: event.category,
  image: event.image, detailImage: index === 0 ? joybotsDetails.mainImage : index === 2 ? cellspellOriginal : event.image,
  description: event.description, details: index === 0 ? joybotsDetails.description : event.description,
  date: event.startDate, endDate: event.endDate, status: 'past', preview: true,
  gallery: index === 0 ? joybotsDetails.gallery : [],
  time: index === 0 ? joybotsDetails.startTime + ' - ' + joybotsDetails.endTime : '',
  location: index === 0 ? joybotsDetails.location : '', venue: index === 0 ? joybotsDetails.venue : ''
}));
