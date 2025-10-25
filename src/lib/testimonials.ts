export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Reliable, creative, and fast under pressure. Vaneeza consistently delivers exceptional work that exceeds expectations.",
    author: "ITP Faculty",
    role: "Professor",
    company: "Aalto University"
  },
  {
    quote: "Built momentum and community like no one else. The ecosystem growth under Vaneeza's leadership was remarkable.",
    author: "Aaltoes Board Member",
    role: "Board Member",
    company: "Aaltoes"
  },
  {
    quote: "Exceptional attention to detail and user-centered approach. The designs were both beautiful and functional.",
    author: "Product Manager",
    role: "PM",
    company: "Tech Startup"
  }
];
