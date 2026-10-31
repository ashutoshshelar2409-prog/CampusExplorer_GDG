// All editable content for the Campus Explorer page lives here.
// Provided dataset for Google Developer Groups (GDG) campus showcase

export const NAV_LINKS = [
  { id: "nav-home", label: "Home", path: "home" },
  { id: "nav-clubs", label: "Clubs & Communities", path: "clubs-and-communities" },
  { id: "nav-events", label: "Events", path: "events" },
  { id: "nav-tracks", label: "Interests & Tracks", path: "interests-and-tracks" },
];

export const HERO_STATS = [
  { value: "80+", label: "Active Chapters & Labs", dot: "bg-secondary shadow-[0_0_10px_#54d8e8]" },
  { value: "100%", label: "Curated Peer Guilds", dot: "bg-primary-container shadow-[0_0_10px_#a78bfa]" },
  { value: "Open", label: "Decentralized Access", dot: "bg-tertiary-fixed shadow-[0_0_10px_#f8e454]" },
];

export const ORBIT_NODES = [
  {
    id: "orbit-gdg",
    title: "GDG on Campus",
    sub: "Dev & Mobile",
    badge: "Active",
    badgeClass: "text-secondary",
    icon: "code",
    position: "top-2 left-0 sm:left-4",
    border: "border-secondary/40",
    iconWrap: "bg-secondary/15 text-secondary",
  },
  {
    id: "orbit-velose",
    title: "VELOSE Racing",
    sub: "EV Formula",
    badge: "Tracks",
    badgeClass: "text-tertiary",
    icon: "electric_bolt",
    position: "top-6 right-0 sm:right-2",
    border: "border-tertiary/40",
    iconWrap: "bg-tertiary/15 text-tertiary",
  },
  {
    id: "orbit-ieee",
    title: "IEEE VIT Branch",
    sub: "Hardware & Signals",
    icon: "memory",
    position: "bottom-6 left-0 sm:left-2",
    border: "border-outline-variant/40 hover:border-primary/50",
    iconWrap: "bg-primary/15 text-primary",
  },
  {
    id: "orbit-mlsc",
    title: "MLSc VIT",
    sub: "Neural Nets & LLMs",
    icon: "neurology",
    position: "bottom-4 right-2 sm:right-6",
    border: "border-primary-container/40",
    iconWrap: "bg-primary-container/15 text-primary-container",
  },
];

export const CLUBS = [
  {
    id: "club-gdg",
    name: "GDG on Campus VIT",
    meta: "Google Developer Groups · Est. 2018",
    desc: "The flagship Google Developer Student Chapter at VIT Pune. Spearheading end-to-end full-stack web architectures, production Android systems, Flutter sprints, and Google Cloud labs solving real-world campus and enterprise challenges.",
    tags: ["Flutter", "WebDev", "Firebase", "Cloud"],
    hoverBorder: "hover:border-secondary/50",
    bar: "from-secondary",
    hoverText: "group-hover:text-secondary",
    link: "text-secondary",
    lead: "Aarav Sharma & Priya Patel",
    members: "520+ Members",
    schedule: "Thursdays at 5:30 PM",
    location: "Innovation Lab 302, Tech Wing",
    category: "Technology",
    featured: true,
    email: "gdg.campus@vit.edu",
    image: "", // Ready for manual local image (e.g. /clubs/gdg.png)
    icon: "bi-google",
    gradient: "linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #4285f4 100%)",
    initials: "GDG"
  },
  {
    id: "club-ieee",
    name: "IEEE Student Branch",
    meta: "IEEE Region 10 · Chapter 64121",
    desc: "VIT Pune's premier engineering and research society affiliated with IEEE Region 10. Driving peer-reviewed research publications, embedded IoT prototyping testbeds, hardware sprint chambers, and delegations to international technical congresses.",
    tags: ["Robotics", "IoT", "Embedded", "Signals"],
    hoverBorder: "hover:border-primary/50",
    bar: "from-primary",
    hoverText: "group-hover:text-primary",
    link: "text-primary",
    lead: "Dr. K. Raman & Neha Singhania",
    members: "380+ Members",
    schedule: "Wednesdays at 4:30 PM",
    location: "Signals & Systems Lab, Block B",
    category: "Engineering",
    featured: false,
    email: "ieee.branch@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-cpu",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
    initials: "IEEE"
  },
  {
    id: "club-aws",
    name: "AWS Cloud Club",
    meta: "AWS Academic Partner Community",
    desc: "The official Amazon Web Services Academic Community at VIT Pune. Conducting deep-dive clinics into serverless microservices, Terraform infrastructure-as-code, multi-region CI/CD pipelines, and AWS Certified Solutions Architect coaching circles.",
    tags: ["AWS", "DevOps", "Kubernetes", "Terraform"],
    hoverBorder: "hover:border-tertiary/50",
    bar: "from-tertiary",
    hoverText: "group-hover:text-tertiary",
    link: "text-tertiary",
    lead: "Devon Walker & Sanjeev Rao",
    members: "290+ Members",
    schedule: "Tuesdays at 6:00 PM",
    location: "Cloud Sandbox Atrium",
    category: "Cloud & DevOps",
    featured: false,
    email: "aws.cloud@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-cloud-check",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #f59e0b 100%)",
    initials: "AWS"
  },
  {
    id: "club-velose",
    name: "VELOSE Racing",
    meta: "Formula Student Electric Division",
    desc: "VIT Pune's elite Formula Student Electric (FSE) racing division. Designing, simulating, and fabricating full-scale high-voltage electric formula racecars from scratch, competing at Formula Bharat with custom BMS, motor controllers, and real-time telemetry.",
    tags: ["Powertrain", "SolidWorks", "Telemetry", "EV"],
    hoverBorder: "hover:border-secondary/50",
    bar: "from-secondary-container",
    hoverText: "group-hover:text-secondary",
    link: "text-secondary",
    lead: "Carlos Mendez & Vikram Deshmukh",
    members: "140+ Members",
    schedule: "Saturdays at 10:00 AM",
    location: "Motorsport & Mechanical Bay 4",
    category: "Automotive & EV",
    featured: false,
    email: "velose.racing@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-lightning-charge",
    gradient: "linear-gradient(135deg, #450a0a 0%, #dc2626 50%, #f97316 100%)",
    initials: "VEL"
  },
  {
    id: "club-mlsc",
    name: "MLSc (ML Chapter)",
    meta: "Machine Learning Student Chapter",
    desc: "VIT Pune's dedicated artificial intelligence and machine learning powerhouse. Accelerating student research through transformer fine-tuning sandboxes, computer vision pipelines, Kaggle Grandmaster squads, and production-grade Generative AI applications.",
    tags: ["PyTorch", "Transformers", "LLMs", "Kaggle"],
    hoverBorder: "hover:border-primary-container/50",
    bar: "from-primary-container",
    hoverText: "group-hover:text-primary-container",
    link: "text-primary-container",
    lead: "Ananya Iyer & Maya Lin",
    members: "440+ Members",
    schedule: "Mondays at 5:00 PM",
    location: "Turing AI Lab, Room 401",
    category: "Artificial Intelligence",
    featured: false,
    email: "mlsc.chapter@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-cpu-fill",
    gradient: "linear-gradient(135deg, #2e1065 0%, #7c3aed 50%, #c084fc 100%)",
    initials: "MLSc"
  },
  {
    id: "club-trf",
    name: "The Robotics Forum (TRF)",
    meta: "Interdisciplinary Robotics Lab",
    desc: "National ABU Robocon contenders and the legendary robotics forum of VIT Pune. Engineering autonomous industrial rovers, sub-millimeter precision kinematics, ROS2 SLAM navigation, and high-speed FPGA-driven motion controllers for national robotics arenas.",
    tags: ["ROS2", "Robocon", "EmbeddedC", "Kinematics"],
    hoverBorder: "hover:border-secondary-fixed/50",
    bar: "from-secondary-fixed",
    hoverText: "group-hover:text-secondary-fixed",
    link: "text-secondary-fixed",
    lead: "Rohan Kulkarni & Samira Hassan",
    members: "215+ Members",
    schedule: "Fridays at 4:00 PM",
    location: "Robotics Arena & Fabrication Floor",
    category: "Robotics",
    featured: false,
    email: "trf.robotics@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-robot",
    gradient: "linear-gradient(135deg, #022c22 0%, #059669 50%, #10b981 100%)",
    initials: "TRF"
  },
  {
    id: "club-gfg",
    name: "GeeksforGeeks Student Chapter",
    meta: "Official GFG Student Chapter · Est. 2021",
    desc: "VIT Pune's official GeeksforGeeks student chapter dedicated to mastering Data Structures, Algorithms, Competitive Programming, and end-to-end technical interview prep through coding bootcamps and Geek Fiesta.",
    tags: ["DSA", "Algorithms", "CompetitiveCoding", "InterviewPrep"],
    hoverBorder: "hover:border-success/50",
    bar: "from-success",
    hoverText: "group-hover:text-success",
    link: "text-success",
    lead: "Kunal Jain & Shreya Joshi",
    members: "460+ Members",
    schedule: "Tuesdays at 5:00 PM",
    location: "Coding Lab 204, Tech Wing",
    category: "Technology",
    featured: false,
    email: "gfg.chapter@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-code-square",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
    initials: "GFG"
  },
  {
    id: "community-sc",
    name: "Student Council (VIT Pune)",
    meta: "Apex Student Governance & Welfare Body",
    desc: "The premier representative body of Vishwakarma Institute of Technology. Championing student welfare, orchestrating flagship college gatherings including Vishwakarandak and Melange, and bridging student innovation with institute leadership.",
    tags: ["StudentWelfare", "Vishwakarandak", "Leadership", "Governance"],
    hoverBorder: "hover:border-primary/50",
    bar: "from-primary",
    hoverText: "group-hover:text-primary",
    link: "text-primary",
    lead: "President & Council General Secretaries",
    members: "All Students · 60+ Council Delegates",
    schedule: "Council Senate Thursdays",
    location: "Student Council Boardroom, Admin Wing",
    category: "Community",
    isCommunity: true,
    featured: true,
    email: "student.council@vit.edu",
    image: "", // Ready for manual local image
    icon: "bi-award-fill",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
    initials: "SC"
  },
];

// `category` drives the filter buttons: Workshops | Hackathons | College Events
export const EVENTS = [
  {
    id: "evt-gdgverse",
    category: "Workshops",
    typeLabel: "Induction & Orientation",
    typeClass: "text-primary border-primary/20",
    status: "RSVP Open",
    statusClass: "text-primary",
    pulse: true,
    featured: true,
    title: "GDGVerse Induction",
    desc: "The grand flagship induction and orientation session for GDG on Campus VIT. Discover cutting-edge tech tracks, open-source projects, and membership onboarding.",
    dateIcon: "schedule",
    date: "Oct 28, 2026 · 5:00 PM IST",
    placeIcon: "apartment",
    place: "Sharad Arena / Auditorium 2",
    spotsLeft: 42,
    organizer: "GDG on Campus VIT",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-geekfiesta-ai",
    category: "Workshops",
    typeLabel: "Hands-on AI Lab",
    typeClass: "text-success border-success/20",
    status: "Registrations Open",
    statusClass: "text-success",
    featured: true,
    title: "Geek Fiesta: AI Workshop",
    desc: "Hands-on generative AI and transformer sprint as part of Geek Fiesta. Learn to fine-tune local models, orchestrate LangGraph agents, and build enterprise GenAI applications.",
    dateIcon: "schedule",
    date: "Oct 29, 2026 · 4:00 PM IST",
    placeIcon: "lan",
    place: "Central Computer Lab (400 Seats)",
    spotsLeft: 60,
    organizer: "GeeksforGeeks VIT Student Chapter",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-geekfiesta-ideathon",
    category: "Hackathons",
    typeLabel: "National Ideathon",
    typeClass: "text-primary-container border-primary-container/20",
    status: "Registrations Open",
    statusClass: "text-primary-container mr-16",
    featured: true,
    title: "Geek Fiesta: Ideathon 2026",
    desc: "The premier innovation and startup ideathon of Geek Fiesta at VIT Pune. Form cross-disciplinary squads, solve critical industry problem statements, and pitch before enterprise juries.",
    dateIcon: "event",
    date: "Oct 30, 2026 · 9:00 AM IST",
    placeIcon: "lightbulb",
    place: "Campus Innovation Gallery & Virtual",
    spotsLeft: 75,
    organizer: "GeeksforGeeks VIT & Tech Council",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-vishwakarandak",
    category: "College Events",
    typeLabel: "Flagship Gathering",
    typeClass: "text-warning border-warning/20",
    status: "All VIT Welcomed",
    statusClass: "text-warning",
    pulse: true,
    featured: true,
    title: "Vishwakarandak (Annual College Gathering)",
    desc: "The legendary intra-college cultural, sports, and technical extravaganza of Vishwakarma Institute of Technology. 4 exhilarating days of fierce departmental competitions, drama, dance, band showdowns, art, and celebrity concerts.",
    dateIcon: "celebration",
    date: "Nov 01 - 04, 2026",
    placeIcon: "stadium",
    place: "VIT Main Grounds & Auditoriums",
    spotsLeft: 1200,
    organizer: "Student Council (VIT Pune)",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
];

export const EVENT_FILTERS = ["All Events", "Workshops", "Hackathons", "College Events"];

export const TOOLKIT = [
  {
    id: "toolkit-roadmap",
    icon: "map",
    iconColor: "text-primary",
    title: "First-Year Roadmap",
    desc: "Unfiltered guidance on balancing GPA, departmental credits, attendance norms, and club recruitment timelines.",
    cta: "Read Strategy Guide",
    ctaClass: "text-primary hover:text-primary-container",
  },
  {
    id: "toolkit-matchmaker",
    icon: "group_work",
    iconColor: "text-secondary",
    title: "Project Matchmaker",
    desc: "Find complementary teammates across CS, Mech, and Electronics for upcoming national hackathons and capstones.",
    cta: "Find Teammates",
    ctaClass: "text-secondary hover:underline",
  },
  {
    id: "toolkit-room-finder",
    icon: "near_me",
    iconColor: "text-tertiary",
    title: "Campus Room Finder",
    desc: "Visual locator for student activity rooms, server rooms, electronics workbenches, and open study auditoriums.",
    cta: "Open Spatial Map",
    ctaClass: "text-tertiary hover:underline",
  },
  {
    id: "toolkit-opensource",
    icon: "deployed_code",
    iconColor: "text-primary-container",
    title: "Campus Open Source",
    desc: "Documentation on committing to student-built software infrastructure, timetable bots, and college dev repositories.",
    cta: "View GitHub Guild",
    ctaClass: "text-primary-container hover:underline",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product & Discover",
    hover: "hover:text-primary",
    links: [
      { label: "Clubs & Chapters", path: "clubs-and-communities" },
      { label: "Campus Events", path: "events" },
      { label: "Hackathons & Sprints", path: "hackathons" },
      { label: "Project Hub", path: "project-hub" },
    ],
  },
  {
    title: "Campus Communities",
    hover: "hover:text-secondary",
    links: [
      { label: "GDG VIT Pune", path: "gdg-vit" },
      { label: "IEEE Student Branch", path: "ieee-vit" },
      { label: "AWS Cloud Club", path: "aws-cloud-club" },
      { label: "VELOSE Racing", path: "velose-club" },
      { label: "MLSc VIT", path: "mlsc-vit" },
    ],
  },
  {
    title: "Resources",
    hover: "hover:text-primary",
    links: [
      { label: "First-year Roadmap", path: "first-year-roadmap" },
      { label: "Dev Guidelines", path: "dev-guidelines" },
      { label: "Campus Room Finder", path: "room-finder" },
      { label: "Sample Question Archives", path: "sample-archives" },
    ],
  },
];

export const campusLocations = [
  {
    id: "loc-1",
    title: "Engineering & Sciences Complex",
    category: "Academic Buildings",
    shortDesc: "State-of-the-art lecture theatres, high-performance computing clusters, and collaborative student study pods.",
    location: "Main Campus Academic Block",
    hours: "Mon - Sat: 7:30 AM - 9:30 PM",
    badge: "Wi-Fi 6 Enabled",
    icon: "bi-building",
    image: "/campus-hero.jpg",
    highlights: ["Smart Lecture Pods", "450-seat Auditorium", "Hardware Electronics Bench", "Study Lounges"]
  },
  {
    id: "loc-2",
    title: "Central Library",
    category: "Libraries & Archives",
    shortDesc: "Five floors of quiet research zones, private group discussion rooms, digital archive access, and 24/7 exam-week reading access.",
    location: "Central Campus Quad",
    hours: "24/7 during exam weeks (Normal: 8 AM - 11 PM)",
    badge: "Quiet Zone & 24/7 Access",
    icon: "bi-book",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    highlights: ["120,000+ Volumes", "Central Library Digital Catalog", "32 Study Rooms", "Scanner Hubs & Ground Floor Café"]
  },
  {
    id: "loc-3",
    title: "Gymnasium & Apex Sports Pavilion",
    category: "Gym & Sports Facilities",
    shortDesc: "Olympic-grade indoor basketball courts, Olympic swimming pool, fully equipped modern gym & gymnasium, and athletic running track.",
    location: "West Campus Sports Grounds",
    hours: "Daily: 6:00 AM - 10:00 PM",
    badge: "Modern Fitness Gym",
    icon: "bi-trophy",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    highlights: ["Fully Equipped Gymnasium", "Olympic Swimming Pool", "Indoor Badminton & Basketball", "Cardio Suites & Lockers"]
  },
  {
    id: "loc-4",
    title: "Campus Canteen & Dining Hall",
    category: "Campus Canteen & Dining",
    shortDesc: "Vibrant campus canteen and dining hall offering diverse multi-cuisine food stations, healthy options, artisan coffee shop, and open-air patio seating.",
    location: "Student Quad, Ground Level",
    hours: "Mon - Sun: 7:00 AM - 10:00 PM",
    badge: "Campus Canteen",
    icon: "bi-cup-hot",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    highlights: ["Campus Canteen Counters", "Farm-to-table Hot Meals", "Specialty Espresso Bar", "Open Garden Terrace"]
  },
  {
    id: "loc-5",
    title: "Boot Club & Student Cultural Center",
    category: "Boot Club & Student Hub",
    shortDesc: "The heartbeat of campus student life, legendary Boot Club (Boat Club) pavilion, club headquarters, recreation lounge, and amphitheater stage.",
    location: "East Plaza, Building 4",
    hours: "Mon - Sun: 8:00 AM - Midnight",
    badge: "Boot Club & Hub",
    icon: "bi-people",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    highlights: ["Boot Club Pavilion", "Club & Guild Meeting Rooms", "Music & Sound Recording Room", "Open-air Stage"]
  },
  {
    id: "loc-6",
    title: "Reading Halls & Innovation Labs",
    category: "Reading Halls & Labs",
    shortDesc: "Quiet air-conditioned reading halls, collaborative study spaces, modern startup incubator with 3D printers, and high-performance GPU workstations.",
    location: "Tech Annex, 3rd Floor",
    hours: "Mon - Fri: 8:30 AM - 9:00 PM",
    badge: "Reading Halls & Tech",
    icon: "bi-cpu",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    highlights: ["Dedicated Quiet Reading Halls", "Rapid 3D Prototyping", "GPU Compute Clusters", "Venture Pitch Room"]
  }
];

export const campusStats = [
  { label: "Active Chapters & Labs", value: "80+", icon: "bi-mortarboard" },
  { label: "Curated Peer Guilds", value: "100%", icon: "bi-people" },
  { label: "Mapped Campus Facilities", value: "100+", icon: "bi-geo-alt" },
  { label: "Annual Events & Workshops", value: "150+", icon: "bi-calendar-event" }
];

// Backwards-compatibility aliases
export const studentClubs = CLUBS;
export const upcomingEvents = EVENTS;
