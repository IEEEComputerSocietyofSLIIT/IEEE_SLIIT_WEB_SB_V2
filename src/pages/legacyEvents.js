import cellspellCard from '../assets/images/Events/cellspell-card.png';
const cellspellOriginal = cellspellCard;
const eventImages = { cellspell: cellspellCard };
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
export const legacyEvents = previousUpcoming.map((event, index) => ({
  id: 'v2-' + event.id, name: event.eventName, tag: event.category,
  image: event.image, detailImage: index === 0 ? joybotsDetails.mainImage : event.id === 3 ? cellspellOriginal : event.image,
  description: event.description, details: index === 0 ? joybotsDetails.description : event.description,
  date: event.startDate, endDate: event.endDate, status: 'past', preview: true,
  gallery: index === 0 ? joybotsDetails.gallery : [],
  time: index === 0 ? joybotsDetails.startTime + ' - ' + joybotsDetails.endTime : '',
  location: index === 0 ? joybotsDetails.location : '', venue: index === 0 ? joybotsDetails.venue : ''
}));
