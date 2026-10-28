export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Manufacturers', href: '#manufacturers' },
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
  addressLine1: 'Plot No. 183/4, Kattigenahalli Gate',
  addressLine2: 'Ramanna Garden, Bagalur Main Road, IAF Post',
  addressLine3: 'Opposite IOC, Yelahanka, Bengaluru, Karnataka 560063',
  addressLine4: 'India',
  mapsQuery: 'Veera Solar Energy Pvt. Ltd., Plot No. 183/4, Kattigenahalli Gate, Ramanna Garden, Bagalur Main Road, IAF Post, opposite IOC, Yelahanka, Bengaluru, Karnataka 560063',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Veera+Solar+Energy+Pvt.+Ltd.%2C+Plot+No.+183%2F4%2C+Kattigenahalli+Gate%2C+Ramanna+Garden%2C+Bagalur+Main+Road%2C+Yelahanka%2C+Bengaluru%2C+Karnataka+560063',
  mapsEmbed: 'https://www.google.com/maps?q=Veera+Solar+Energy+Pvt.+Ltd.%2C+Plot+No.+183%2F4%2C+Kattigenahalli+Gate%2C+Ramanna+Garden%2C+Bagalur+Main+Road%2C+Yelahanka%2C+Bengaluru%2C+Karnataka+560063&output=embed',
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
  image?: string;
  pending?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: '5 kW project profile',
    category: 'Project profile to be completed',
    location: 'Location to be confirmed',
    capacity: '5 kW',
    desc: 'A dedicated place for the completed 5 kW project. Customer, location, photograph, date and commercial model will be added after approval.',
    pending: true,
  },
  {
    title: 'Commercial rooftop project',
    category: 'Rooftop solar',
    location: 'Location to be confirmed',
    capacity: 'Capacity to be confirmed',
    desc: 'Add the approved project photograph, customer or project name, installed capacity and verified description here.',
    pending: true,
  },
  {
    title: 'Ground-mounted project',
    category: 'Ground-mounted solar',
    location: 'Location to be confirmed',
    capacity: 'Capacity to be confirmed',
    desc: 'Add the approved project photograph, installed capacity and verified project information here.',
    pending: true,
  },
  {
    title: 'OPEX / RESCO project',
    category: 'Commercial solar',
    location: 'Location to be confirmed',
    capacity: 'Capacity to be confirmed',
    desc: 'Add an OPEX or RESCO example only after the project details and public presentation are approved.',
    pending: true,
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
  { name: 'Veera Solar', category: 'Structures' },
];

export type Client = { name: string; detail: string; leadership?: boolean };

export const CLIENTS: Client[] = [
  { name: 'Mr. Irayya B. H.', detail: 'Co-Founder & Managing Director, Veera Solar Energy Pvt. Ltd.', leadership: true },
  { name: 'Client Two', detail: '' },
  { name: 'Client Three', detail: '' },
  { name: 'Client Four', detail: '' },
  { name: 'Client Five', detail: '' },
  { name: 'Client Six', detail: '' },
];

export const WHY_VEERA = [
  { icon: 'Cog', title: 'Engineering-First', desc: 'Every system is designed by engineers \u2014 not sold off a shelf. Sizing, structure and electricals are modelled before a single panel is laid.' },
  { icon: 'Layers', title: 'End-to-End EPC', desc: 'One accountable partner from site survey to commissioning. Design, procurement, civil, electrical and testing under one roof.' },
  { icon: 'Award', title: 'Quality Execution', desc: 'Tier-1 materials, trained crews and documented quality checks deliver systems that perform for decades, not seasons.' },
  { icon: 'Users', title: 'Experienced Team', desc: 'A decade-plus of field experience across residential, commercial, industrial and ground-mounted solar projects.' },
  { icon: 'Handshake', title: 'Trusted Technology Partners', desc: 'We work with leading module, inverter, cable and structure brands to ensure reliability and long-term support.' },
  { icon: 'LineChart', title: 'Performance Focused', desc: 'Systems are engineered for real-world yield \u2014 optimised for generation, not just installed capacity.' },
  { icon: 'ShieldCheck', title: 'AMC & O&M', desc: 'Annual Maintenance Contracts and round-the-clock operations support keep every system performing at peak, with scheduled inspections, cleaning and rapid response.' },
  { icon: 'Factory', title: 'Manufacturing Facilities', desc: 'In-house manufacturing of mounting structures and BoS components ensures quality control, faster lead times and engineering tailored to each project.' },
  { icon: 'WalletCards', title: 'OPEX / RESCO Models', desc: 'Depending on the agreement, a provider may finance, install, operate or maintain a solar system while the customer pays under agreed commercial terms. Investment, tariffs, savings and responsibilities vary by contract.' },
];

export const FOUNDER = {
  name: 'Mr. Irayya B. H.',
  designation: 'Co-Founder & Managing Director',
  intro: 'Engineering leadership grounded in execution.',
  bio: [
    'Mr. Irayya B. H. holds a degree in Mechanical Engineering and brings over 16 years of experience in the photovoltaic solar energy industry.',
    'His experience includes more than 500 MW of ground-mounted and rooftop solar design, BESCOM liaisoning, and solar power plant execution. He also has two years of experience in earth-moving equipment design and fabrication.',
  ],
  image: '/images/WhatsApp_Image_2026-09-11_at_1.56.35_AM.jpeg',
  expertise: [
    'Solar photovoltaic systems',
    'Ground-mounted and rooftop solar design',
    'BESCOM liaisoning',
    'Solar power plant execution',
    'Earth-moving equipment design and fabrication',
    'Engineering leadership and project execution',
  ],
};

export const HERO_IMAGE = 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const ABOUT_IMAGE = 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const CTA_IMAGE = 'https://images.pexels.com/photos/15751131/pexels-photo-15751131.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const ON_GRID_PHOTO: string | undefined = undefined; // set to '/images/on-grid-system.jpg' when supplied
export const HYBRID_PHOTO: string | undefined = undefined; // set to '/images/hybrid-system.jpg' when supplied

export const MANUFACTURER_ITEMS = [
  { title: 'Solar Modules', detail: 'Product photography and approved module details can be added here.', icon: 'PanelsTopLeft' },
  { title: 'Inverters & Controls', detail: 'Showcase approved inverter and control equipment details here.', icon: 'Activity' },
  { title: 'Structures & Balance of System', detail: 'Add genuine structure and balance-of-system photographs here.', icon: 'Building2' },
];

export const ON_GRID_STAGES = [
  { title: 'Sunlight', short: 'Solar energy starts with sunlight.', detail: 'Sunlight reaches the system area and provides the energy source for photovoltaic generation.', node: 'sun' },
  { title: 'Solar Panels', short: 'Panels convert sunlight into DC electricity.', detail: 'Photovoltaic modules absorb sunlight and produce direct-current electricity.', node: 'panels' },
  { title: 'Grid-Tied Inverter', short: 'The inverter converts DC into usable AC.', detail: 'A grid-tied inverter converts the panels’ DC electricity into AC electricity for compatible building systems.', node: 'inverter' },
  { title: 'Powering the Building', short: 'Solar power supplies active electrical loads.', detail: 'While the system is generating, solar electricity can supply compatible appliances, equipment and building loads.', node: 'building' },
  { title: 'Grid Connection', short: 'The grid balances supply when configured.', detail: 'The grid may supply additional electricity when solar generation is insufficient, and surplus may be exported where approvals and applicable rules allow. Standard grid-tied systems generally shut down during an outage unless backup capability is specifically designed.', node: 'grid' },
];

export const HYBRID_STAGES = [
  { title: 'Sunlight', short: 'Solar energy begins with the sun.', detail: 'Sunlight reaches the photovoltaic array and starts the energy journey.', node: 'sun' },
  { title: 'Solar Panels Generate Electricity', short: 'Panels produce DC electricity.', detail: 'Photovoltaic modules convert available sunlight into direct-current electricity.', node: 'panels' },
  { title: 'Hybrid Inverter Manages Power', short: 'Controls coordinate energy conversion and distribution.', detail: 'The hybrid inverter and associated controls manage conversion and decide where available energy can flow.', node: 'inverter' },
  { title: 'Battery Storage', short: 'Energy can be stored for later use.', detail: 'When charging is appropriate, energy can flow into the battery, subject to capacity, charge level, system configuration and operating settings.', node: 'battery' },
  { title: 'Powering the Building', short: 'Solar and stored energy can supply loads.', detail: 'Solar power and, where configured, stored battery energy may supply selected building loads.', node: 'building' },
  { title: 'Grid Support and Backup', short: 'The grid can supplement the system when required.', detail: 'Where suitable backup hardware and configuration exist, stored energy and/or available solar may support designated loads during an outage. Not every hybrid system provides backup, and priorities vary by equipment and settings.', node: 'grid' },
];
