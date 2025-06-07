import { Project, Service, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TechFlow SaaS Platform',
    description: 'Complete SaaS platform for project management with real-time collaboration, analytics dashboard, and team management features.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    liveUrl: 'https://techflow-saas.vercel.app',
    githubUrl: 'https://github.com/AmanSaini03/techflow-saas'
  },
  {
    id: '2',
    title: 'EcoMart E-commerce Store',
    description: 'Modern e-commerce platform for sustainable products with advanced filtering, payment integration, and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://ecomart-store.netlify.app',
    githubUrl: 'https://github.com/AmanSaini03/ecomart-ecommerce'
  },
  {
    id: '3',
    title: 'FinanceTracker Pro',
    description: 'Personal finance management app with expense tracking, budget planning, and financial goal setting with beautiful charts.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Express.js', 'MySQL', 'Chart.js', 'JWT'],
    liveUrl: 'https://financetracker-pro.herokuapp.com',
    githubUrl: 'https://github.com/AmanSaini03/finance-tracker-pro'
  },
  {
    id: '4',
    title: 'RestaurantHub Management',
    description: 'Complete restaurant management system with online ordering, table reservations, menu management, and staff dashboard.',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'PayPal API'],
    liveUrl: 'https://restauranthub-management.firebase.app',
    githubUrl: 'https://github.com/AmanSaini03/restaurant-management'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Website Design',
    description: 'Unique, modern designs tailored to your brand and business goals.',
    icon: 'Palette',
    features: ['UI/UX Design', 'Brand Integration', 'Mobile-First Design', 'Interactive Elements']
  },
  {
    id: '2',
    title: 'Responsive Development',
    description: 'Fast, scalable websites that work perfectly on all devices.',
    icon: 'Code',
    features: ['React/Vue.js', 'Performance Optimization', 'SEO-Friendly', 'Cross-Browser Compatible']
  },
  {
    id: '3',
    title: 'Website Redesign',
    description: 'Transform your existing website with modern design and functionality.',
    icon: 'RefreshCw',
    features: ['UX Audit', 'Performance Boost', 'Modern Aesthetics', 'Content Migration']
  },
  {
    id: '4',
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to maximize your business goals.',
    icon: 'Target',
    features: ['Conversion Optimization', 'A/B Testing Ready', 'Fast Loading', 'Analytics Integration']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'TechStart Solutions',
    content: 'Aman delivered exactly what we needed - a modern, fast website that perfectly represents our brand. His attention to detail is exceptional.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthCorp',
    content: 'Professional, responsive, and delivered on time. The website Aman built has significantly improved our online presence and conversions.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Small Business Owner',
    company: 'Bloom Boutique',
    content: 'Amazing work! Aman transformed our outdated website into something beautiful and functional. Highly recommend his services.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  }
];