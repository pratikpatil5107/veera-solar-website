export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export const COMPANY = {
  name: 'Veera Solar Energy',
  tagline: 'Engineering Solar. Powering What\u2019s Next.',
  phone: '+91 63634 05699',
  phoneHref: 'tel:+916363405699',
  whatsapp: '916363405699',
  whatsappHref: 'https://wa.me/916363405699',
  email: 'info@veerasolar.com',
  emailHref: 'mailto:info@veerasolar.com',
  addressLine1: 'Prince Inn, Ramanna Garden',
  addressLine2: 'Bagaluru Main Road, Kattigenahalli',
  addressLine3: 'Bangalore, Karnataka 560063',
  addressLine4: 'India',
  mapsQuery: 'Veera Solar Energy, Prince Inn, Ramanna Garden, Bagaluru Main Road, Kattigenahalli, Bangalore, Karnataka 560063',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Veera+Solar+Energy%2C+Prince+Inn%2C+Ramanna+Garden%2C+Bagaluru+Main+Road%2C+Kattigenahalli%2C+Bangalore%2C+Karnataka+560063',
  mapsEmbed: 'https://www.google.com/maps?q=Veera+Solar+Energy%2C+Prince+Inn%2C+Ramanna+Garden%2C+Bagaluru+Main+Road%2C+Kattigenahalli%2C+Bangalore%2C+Karnataka+560063&output=embed',
  hours: 'Mon \u2013 Sat: 9:30 AM \u2013 6:30 PM',
};

export const STATS = [
  { value: 6000, suffix: '+', label: 'kW Installed Capacity', sub: 'Across commissioned projects' },
  { value: 20, suffix: '+', label: 'Projects Executed', sub: 'Residential, C&I and ground-mounted' },
  { value: 35, suffix: '+', label: 'Locations Served', sub: 'Across multiple states' },
  { value: 10, suffix: '+', label: 'Years of Experience', sub: 'In solar engineering & EPC' },
];

export const PROJECT_TYPES = [
  'Residential Solar',
  'Commercial & Industrial Solar',
  'Ground Mounted Solar',
  'Solar EPC',
  'Civil & Infrastructure Works',
  'Other',
];

export const SOLUTIONS = [
  {
    icon: 'Home',
    title: 'Residential Solar',
    desc: 'Custom rooftop systems engineered for homes \u2014 maximising generation, savings and energy independence with a clean, low-maintenance install.',
  },
  {
    icon: 'Factory',
    title: 'Commercial & Industrial Solar',
    desc: 'High-performance rooftop and captive systems for factories, warehouses and commercial buildings designed to cut energy costs and carbon.',
  },
  {
    icon: 'PanelTop',
    title: 'Ground Mounted Solar',
    desc: 'Large-scale ground-mounted solar farms with robust civil foundations, mounting structures and grid integration built for long-term yield.',
  },
  {
    icon: 'Wrench',
    title: 'Solar EPC',
    desc: 'Single-window engineering, procurement and construction \u2014 from design and supply to installation, testing and commissioning.',
  },
  {
    icon: 'HardHat',
    title: 'Civil & Infrastructure Works',
    desc: 'Foundations, cable trenches, control rooms and structural works executed to engineering standards as part of the EPC scope.',
  },
  {
    icon: 'ShieldCheck',
    title: 'O&M and Support',
    desc: 'Operations, monitoring and maintenance support to keep systems performing at peak efficiency across their lifetime.',
  },
];

export const PROCESS = [
  { no: '01', title: 'Site Assessment', desc: 'Detailed site survey, load study, shading analysis and feasibility evaluation.' },
  { no: '02', title: 'Engineering & Design', desc: 'System sizing, structural and electrical design, single-line diagrams and BoM.' },
  { no: '03', title: 'Procurement', desc: 'Sourcing of Tier-1 modules, inverters, structures, cables and BoS from trusted partners.' },
  { no: '04', title: 'Installation', desc: 'Civil works, mounting, module laying, cabling and electrical integration by trained crews.' },
  { no: '05', title: 'Commissioning', desc: 'Testing, grid synchronisation, performance verification and handover with documentation.' },
  { no: '06', title: 'Support', desc: 'Monitoring, preventive maintenance and responsive support for sustained performance.' },
];

export type Project = {
  title: string;
  category: string;
  location: string;
  capacity: string;
  desc: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Industrial Rooftop Installation',
    category: 'Commercial & Industrial',
    location: 'Karnataka',
    capacity: 'Rooftop Solar',
    desc: 'A large industrial rooftop system engineered to offset heavy daytime load and deliver long-term energy savings.',
    image: 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Ground-Mounted Solar Farm',
    category: 'Ground Mounted',
    location: 'India',
    capacity: 'Utility Scale',
    desc: 'A ground-mounted solar installation with engineered foundations and mounting structures for sustained generation.',
    image: 'https://images.pexels.com/photos/15751134/pexels-photo-15751134.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Commercial Rooftop Deployment',
    category: 'Commercial',
    location: 'Karnataka',
    capacity: 'Rooftop Solar',
    desc: 'A commercial rooftop deployment designed to maximise generation while keeping the roof structure and operations intact.',
    image: 'https://images.pexels.com/photos/29923348/pexels-photo-29923348.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Residential Rooftop System',
    category: 'Residential',
    location: 'India',
    capacity: 'Rooftop Solar',
    desc: 'A custom residential rooftop system sized for household consumption with net-metering and clean aesthetics.',
    image: 'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
];

export const PARTNERS = [
  { name: 'Waaree', category: 'Solar Modules' },
  { name: 'Adani Solar', category: 'Solar Modules' },
  { name: 'Vikram Solar', category: 'Solar Modules' },
  { name: 'Growatt', category: 'Inverters' },
  { name: 'Sungrow', category: 'Inverters' },
  { name: 'SolarEdge', category: 'Inverters' },
  { name: 'Polycab', category: 'Cables' },
  { name: 'Havells', category: 'Cables' },
  { name: 'Gautam Solar', category: 'Structures' },
  { name: 'Patanjali', category: 'Structures' },
];

export const CLIENTS = [
  'Client One',
  'Client Two',
  'Client Three',
  'Client Four',
  'Client Five',
  'Client Six',
];

export const WHY_VEERA = [
  { icon: 'Cog', title: 'Engineering-First', desc: 'Every system is designed by engineers \u2014 not sold off a shelf. Sizing, structure and electricals are modelled before a single panel is laid.' },
  { icon: 'Layers', title: 'End-to-End EPC', desc: 'One accountable partner from site survey to commissioning. Design, procurement, civil, electrical and testing under one roof.' },
  { icon: 'Award', title: 'Quality Execution', desc: 'Tier-1 materials, trained crews and documented quality checks deliver systems that perform for decades, not seasons.' },
  { icon: 'Users', title: 'Experienced Team', desc: 'A decade-plus of field experience across residential, commercial, industrial and ground-mounted solar projects.' },
  { icon: 'Handshake', title: 'Trusted Technology Partners', desc: 'We work with leading module, inverter, cable and structure brands to ensure reliability and long-term support.' },
  { icon: 'LineChart', title: 'Performance Focused', desc: 'Systems are engineered for real-world yield \u2014 optimised for generation, not just installed capacity.' },
];

export const FOUNDER = {
  name: 'Irayya BH',
  designation: 'Founder & Managing Director',
  intro: 'Built by engineers. Driven by execution.',
  bio: [
    'Veera Solar Energy was founded with a clear belief \u2014 that solar should be engineered, not just installed. With over a decade of hands-on experience across rooftop and ground-mounted projects, our founder has built a team that treats every installation as an engineering project first.',
    'From site assessment and structural design to procurement, commissioning and long-term support, the focus has always been on quality execution and honest, accountable delivery for every customer.',
  ],
  image: '/images/Screenshot_2026-08-30_032435.png',
};

export const HERO_IMAGE = 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const ABOUT_IMAGE = 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const CTA_IMAGE = 'https://images.pexels.com/photos/15751131/pexels-photo-15751131.jpeg?auto=compress&cs=tinysrgb&w=1600';
