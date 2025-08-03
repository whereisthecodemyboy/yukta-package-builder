export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: {
    basic: string[];
    moderate: string[];
    advanced: string[];
  };
  adminCapabilities: {
    basic: string[];
    moderate: string[];
    advanced: string[];
  };
  bestFor: {
    basic: string[];
    moderate: string[];
    advanced: string[];
  };
  deliveryTime: {
    basic: string;
    moderate: string;
    advanced: string;
  };
}

export const websiteServices: Service[] = [
  {
    id: "school",
    title: "School/College Website",
    description: "Comprehensive educational website solutions for institutions of all sizes",
    icon: "GraduationCap",
    features: {
      basic: [
        "Homepage with photo/motto",
        "About page with history",
        "Contact page with map",
        "Notice board",
        "Simple gallery"
      ],
      moderate: [
        "Photo gallery",
        "Staff directory",
        "Academic calendar",
        "Admission forms",
        "Download section"
      ],
      advanced: [
        "Student/parent portal",
        "Online fee payment",
        "Assignment submission",
        "Result system",
        "Library access"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Upload event photos",
        "Update staff info",
        "Manage inquiries",
        "Add schedules",
        "Post resources"
      ],
      advanced: [
        "Manage user accounts",
        "Process payments",
        "Post exam results",
        "Approve assignments",
        "Library management"
      ]
    },
    bestFor: {
      basic: ["Small schools", "Basic information"],
      moderate: ["Medium institutions", "Regular updates"],
      advanced: ["Universities", "Online services"]
    },
    deliveryTime: {
      basic: "7-10 business days",
      moderate: "10-14 business days",
      advanced: "15-20 business days"
    }
  },
  {
    id: "ngo",
    title: "NGO Website",
    description: "Impactful websites for non-profit organizations and social causes",
    icon: "Heart",
    features: {
      basic: [
        "Homepage explaining cause",
        "Project descriptions",
        "Donation contacts",
        "Success stories",
        "Partners list"
      ],
      moderate: [
        "Volunteer registration",
        "Project timeline",
        "Donation tracking",
        "Event calendar",
        "Impact dashboard"
      ],
      advanced: [
        "Online donations",
        "Impact dashboard",
        "Multi-language",
        "Beneficiary stories",
        "Document repository"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Manage volunteers",
        "Update milestones",
        "Track donations",
        "Post event photos",
        "Update statistics"
      ],
      advanced: [
        "Process donations",
        "Generate reports",
        "Manage languages",
        "Approve stories",
        "Upload documents"
      ]
    },
    bestFor: {
      basic: ["New NGOs", "Establishing presence"],
      moderate: ["Growing NGOs", "Multiple projects"],
      advanced: ["Large NGOs", "International presence"]
    },
    deliveryTime: {
      basic: "7-10 business days",
      moderate: "10-14 business days",
      advanced: "15-20 business days"
    }
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description: "Complete online shopping solutions for businesses of all sizes",
    icon: "ShoppingCart",
    features: {
      basic: [
        "Product showcase",
        "Price lists",
        "Inquiry form",
        "Business contacts",
        "Product gallery"
      ],
      moderate: [
        "Shopping cart",
        "Order processing",
        "Payment options",
        "Customer reviews",
        "Inventory tracking"
      ],
      advanced: [
        "Secure payments",
        "Customer accounts",
        "Order tracking",
        "Inventory automation",
        "Recommendations"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Process orders",
        "Manage inventory",
        "Respond to reviews",
        "Create discounts",
        "Update stock"
      ],
      advanced: [
        "Manage payments",
        "Handle accounts",
        "Monitor stock",
        "Generate reports",
        "Create promotions"
      ]
    },
    bestFor: {
      basic: ["Small shops", "Starting online"],
      moderate: ["Established businesses", "Regular sales"],
      advanced: ["Full online stores", "Shopping experience"]
    },
    deliveryTime: {
      basic: "10-12 business days",
      moderate: "14-18 business days",
      advanced: "20-25 business days"
    }
  },
  {
    id: "business",
    title: "Local Business Website",
    description: "Professional websites for local service providers and businesses",
    icon: "Building",
    features: {
      basic: [
        "Services with prices",
        "Business hours",
        "Location info",
        "Work gallery",
        "Booking form"
      ],
      moderate: [
        "Online appointments",
        "Testimonials",
        "Special offers",
        "Service packages",
        "FAQ section"
      ],
      advanced: [
        "Loyalty program",
        "Automated reminders",
        "Staff management",
        "Service history",
        "Mobile notifications"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Manage appointments",
        "Post offers",
        "Respond to testimonials",
        "Update packages",
        "Add FAQs"
      ],
      advanced: [
        "Manage loyalty points",
        "Send reminders",
        "Track staff",
        "View history",
        "Send promotions"
      ]
    },
    bestFor: {
      basic: ["Basic business info", "New businesses"],
      moderate: ["Regular customers", "Service businesses"],
      advanced: ["Full CRM", "Customer management"]
    },
    deliveryTime: {
      basic: "7-9 business days",
      moderate: "10-13 business days",
      advanced: "15-18 business days"
    }
  },
  {
    id: "travel",
    title: "Travel Agency Website",
    description: "Comprehensive travel booking and management platforms",
    icon: "MapPin",
    features: {
      basic: [
        "Tour packages",
        "Price lists",
        "Itineraries",
        "Contact info",
        "Destination gallery"
      ],
      moderate: [
        "Online booking",
        "Availability calendar",
        "Customer reviews",
        "Photo/video gallery",
        "Download brochures"
      ],
      advanced: [
        "Online payments",
        "Customer portal",
        "Guide assignment",
        "Real-time availability",
        "Multi-language"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Manage bookings",
        "Update availability",
        "Respond to reviews",
        "Upload brochures",
        "Add videos"
      ],
      advanced: [
        "Process payments",
        "Assign guides",
        "Manage accounts",
        "Update availability",
        "Handle languages"
      ]
    },
    bestFor: {
      basic: ["Showcasing tours", "New agencies"],
      moderate: ["Regular bookings", "Established agencies"],
      advanced: ["Full management", "Large agencies"]
    },
    deliveryTime: {
      basic: "8-11 business days",
      moderate: "12-15 business days",
      advanced: "18-22 business days"
    }
  },
  {
    id: "healthcare",
    title: "Hospital/Clinic Website",
    description: "Professional healthcare websites with patient management features",
    icon: "Stethoscope",
    features: {
      basic: [
        "Services with prices",
        "Doctor profiles",
        "Location info",
        "Appointment form",
        "Health tips"
      ],
      moderate: [
        "Online booking",
        "Testimonials",
        "Health blog",
        "FAQ section",
        "Virtual tour"
      ],
      advanced: [
        "Patient portal",
        "Online consultation",
        "Medical records",
        "Prescription renewal",
        "Lab reports"
      ]
    },
    adminCapabilities: {
      basic: ["Content updates via developer"],
      moderate: [
        "Manage appointments",
        "Respond to testimonials",
        "Post blog articles",
        "Update FAQs",
        "Add tour content"
      ],
      advanced: [
        "Manage accounts",
        "Schedule consultations",
        "Upload records",
        "Process prescriptions",
        "Post lab results"
      ]
    },
    bestFor: {
      basic: ["Basic health info", "Clinics"],
      moderate: ["Regular patients", "Medium practices"],
      advanced: ["Full management", "Hospitals"]
    },
    deliveryTime: {
      basic: "9-12 business days",
      moderate: "13-16 business days",
      advanced: "20-25 business days"
    }
  }
];