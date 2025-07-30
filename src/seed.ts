import { getPayload } from "payload";
import config from "@payload-config";

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Digital Coupons",
    color: "#FF6F61",
    slug: "digital-coupons",
    subcategories: [
      { name: "Retail Discounts", slug: "retail-discounts" },
      { name: "Subscription Offers", slug: "subscription-offers" },
      { name: "Event Tickets", slug: "event-tickets" },
      { name: "Travel Vouchers", slug: "travel-vouchers" },
    ],
  },
  {
    name: "Software Licenses",
    color: "#4A90E2",
    slug: "software-licenses",
    subcategories: [
      { name: "Productivity Tools", slug: "productivity-tools" },
      { name: "Creative Software", slug: "creative-software" },
      { name: "Development Tools", slug: "development-tools" },
      { name: "Security Software", slug: "security-software" },
    ],
  },
  {
    name: "E-Books & Guides",
    color: "#50C878",
    slug: "ebooks-guides",
    subcategories: [
      { name: "Tutorials", slug: "tutorials" },
      { name: "Self-Help Guides", slug: "self-help-guides" },
      { name: "Technical Manuals", slug: "technical-manuals" },
      { name: "Educational Resources", slug: "educational-resources" },
    ],
  },
  {
    name: "Online Courses",
    color: "#FFD700",
    slug: "online-courses",
    subcategories: [
      { name: "Skill Development", slug: "skill-development" },
      { name: "Professional Certifications", slug: "professional-certifications" },
      { name: "Hobby Courses", slug: "hobby-courses" },
      { name: "Language Learning", slug: "language-learning" },
    ],
  },
  {
    name: "Digital Templates",
    color: "#9B59B6",
    slug: "digital-templates",
    subcategories: [
      { name: "Website Templates", slug: "website-templates" },
      { name: "Document Templates", slug: "document-templates" },
      { name: "Presentation Templates", slug: "presentation-templates" },
      { name: "Social Media Kits", slug: "social-media-kits" },
    ],
  },
  {
    name: "Links & Access Codes",
    color: "#E67E22",
    slug: "links-access-codes",
    subcategories: [
      { name: "Premium Content Access", slug: "premium-content-access" },
      { name: "Membership Links", slug: "membership-links" },
      { name: "Webinar Access", slug: "webinar-access" },
      { name: "Exclusive Downloads", slug: "exclusive-downloads" },
    ],
  },
  {
    name: "Digital Art & Graphics",
    color: "#1ABC9C",
    slug: "digital-art-graphics",
    subcategories: [
      { name: "Icons & Illustrations", slug: "icons-illustrations" },
      { name: "Stock Photos", slug: "stock-photos" },
      { name: "Vector Graphics", slug: "vector-graphics" },
      { name: "Backgrounds & Textures", slug: "backgrounds-textures" },
    ],
  },
  {
    name: "Fonts & Typography",
    color: "#6C5CE7",
    slug: "fonts-typography",
    subcategories: [
      { name: "Serif Fonts", slug: "serif-fonts" },
      { name: "Sans-Serif Fonts", slug: "sans-serif-fonts" },
      { name: "Script Fonts", slug: "script-fonts" },
      { name: "Display Fonts", slug: "display-fonts" },
    ],
  },
  {
    name: "Audio & Video Clips",
    color: "#E74C3C",
    slug: "audio-video-clips",
    subcategories: [
      { name: "Sound Effects", slug: "sound-effects" },
      { name: "Background Music", slug: "background-music" },
      { name: "Stock Footage", slug: "stock-footage" },
      { name: "Motion Graphics", slug: "motion-graphics" },
    ],
  },
  {
    name: "Other Digital Goods",
    color: "#7F8C8D",
    slug: "other-digital-goods",
  },
];

const seed = async () => {
  const payload = await getPayload({ config });
  
  console.log("Starting seed process...");
  
  // Clear existing categories first (optional)
  const existingCategories = await payload.find({
    collection: 'categories',
    limit: 0,
  });
  
  if (existingCategories.totalDocs > 0) {
    console.log(`Found ${existingCategories.totalDocs} existing categories. Clearing...`);
    for (const category of existingCategories.docs) {
      await payload.delete({
        collection: 'categories',
        id: category.id,
      });
    }
  }
  
  for (const category of categories) {
    console.log(`Creating category: ${category.name}`);
    
    const parentCategory = await payload.create({
      collection: 'categories',
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    if (category.subcategories) {
      console.log(`Creating ${category.subcategories.length} subcategories for ${category.name}`);
      
      for (const subcategory of category.subcategories) {
        await payload.create({
          collection: 'categories',
          data: {
            name: subcategory.name,
            slug: subcategory.slug,
            parent: parentCategory.id,
          },
        });
      }
    }
  }
};

try {
  await seed();
  console.log("Seeding completed successfully.");
  process.exit(0);
} catch (error) {
  console.error("Error seeding data:", error);
  process.exit(1);
}