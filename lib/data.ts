// This file contains mock data for the site
// In a real application, this would likely come from an API

export const featuredDesigns = [
  {
    id: "1",
    title: "Modern Minimalist Shampoo",
    designer: "Lisa Wong",
    category: "minimal",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    likes: 342,
    views: 1456
  },
  {
    id: "2",
    title: "Botanical Essence Conditioner",
    designer: "Olivia Parker",
    category: "botanical",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    likes: 245,
    views: 1243
  },
  {
    id: "3",
    title: "Luxe Gold Hair Serum",
    designer: "James Rivers",
    category: "luxury",
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    likes: 457,
    views: 2213
  },
  {
    id: "4",
    title: "Modern Gradient Collection",
    designer: "Mei Zhang",
    category: "modern",
    image: "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
    likes: 389,
    views: 1870
  },
  {
    id: "5",
    title: "Natural Herb Oil Therapy",
    designer: "Thomas Hill",
    category: "botanical",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
    likes: 278,
    views: 1564
  },
  {
    id: "6",
    title: "Black Opulence Hair Mask",
    designer: "Victoria Williams",
    category: "luxury",
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
    likes: 421,
    views: 1932
  }
];

export const categories = [
  {
    id: "shampoo",
    title: "Shampoo Labels",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    count: 142
  },
  {
    id: "conditioner",
    title: "Conditioner Labels",
    image: "https://images.pexels.com/photos/6621333/pexels-photo-6621333.jpeg",
    count: 98
  },
  {
    id: "treatments",
    title: "Hair Treatments",
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    count: 73
  },
  {
    id: "styling",
    title: "Styling Products",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    count: 105
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Thompson",
    role: "Founder, Luminous Hair",
    content: "The designs from Elixir completely transformed our brand identity. Our sales have increased by 40% since the redesign!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Marketing Director, Pure Essence",
    content: "Working with Elixir's designers was seamless. They understood our vision perfectly and delivered beyond our expectations.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: "3",
    name: "Jennifer Wu",
    role: "CEO, NatureLock Beauty",
    content: "The premium feel of our packaging has elevated our brand positioning. We're now stocked in luxury retailers thanks to our new look.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

export const designers = [
  {
    id: "1",
    name: "Emma Chen",
    specialty: "Minimalist Luxury",
    projects: 47,
    image: "https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg",
    bio: "Award-winning designer specializing in upscale beauty packaging with a minimalist approach."
  },
  {
    id: "2",
    name: "Marcus Johnson",
    specialty: "Botanical Illustrations",
    projects: 36,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Combining traditional illustration techniques with modern design principles for natural beauty brands."
  },
  {
    id: "3",
    name: "Sophie Laurent",
    specialty: "Typographic Excellence",
    projects: 58,
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg",
    bio: "Typography expert creating distinctive identities through custom lettering and thoughtful font selection."
  }
];

export const designProcess = [
  {
    step: 1,
    title: "Discovery",
    description: "We begin by understanding your brand, target audience, and design preferences.",
    icon: "Search"
  },
  {
    step: 2,
    title: "Concept Development",
    description: "Our designers create multiple concepts aligned with your brand identity.",
    icon: "Palette"
  },
  {
    step: 3,
    title: "Refinement",
    description: "We refine the selected concept based on your feedback and requirements.",
    icon: "Settings"
  },
  {
    step: 4,
    title: "Final Delivery",
    description: "You receive production-ready designs in all necessary formats.",
    icon: "CheckSquare"
  }
];