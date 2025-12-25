import { Activity, SkillLevel } from "@/types/activity";

const categories = [
  "Food and Kitchen Skills",
  "Sewing, Fiber and Textile Arts",
  "Jewelry, Leather and Small Goods",
  "Paper, Printing and Digital Crafts",
  "Art and Surface Design",
  "Body, Home and Cleaning Products",
  "Wood, Outdoor, and Practical Skills",
  "Sustainability, Gardening and Herbal Skills",
  "Life, DIY and Creative Living",
];

const subCategoriesMap: { [key: string]: string[] } = {
  "Food and Kitchen Skills": [
    "Cooking and kitchen skills",
    "Baking and desserts",
    "Meal prep and storage",
    "Fermentation and pickling",
    "Bread baking and sourdough",
    "Pasta and noodle making",
    "Cheese making",
    "Food preservation and dehydrating",
    "Canning and jarring",
    "Spice blending and seasoning",
    "Herbal teas and infusions",
  ],
  "Sewing, Fiber and Textile Arts": [
    "Sewing basics",
    "Hand stitching and mending",
    "Machine sewing",
    "Quilting basics",
    "Embroidery and hand embellishment",
    "Cross stitch",
    "Knitting",
    "Crochet",
    "Tunisian crochet",
    "Loom knitting",
    "Weaving hand loom",
    "Macrame",
    "Needle felting",
    "Fabric dyeing",
  ],
  "Jewelry, Leather and Small Goods": [
    "Beading and jewelry making",
    "Wire wrapping",
    "Resin jewelry",
    "Leather working",
    "Bookmaking and binding",
  ],
  "Paper, Printing and Digital Crafts": [
    "Cricut and cutting machines",
    "Vinyl and iron on projects",
    "Sublimation printing",
    "Screen printing",
    "Scrapbooking",
    "Paper crafts",
    "Stamping and ink techniques",
    "Planner and printable design",
    "Calligraphy and hand lettering",
  ],
  "Art and Surface Design": [
    "Acrylic painting",
    "Watercolor painting",
    "Clay and polymer clay",
    "Pottery hand building only",
    "Wood burning",
    "Glass painting",
    "Mosaic art",
  ],
  "Body, Home and Cleaning Products": [
    "Candle making",
    "Soap making",
    "Lotion and body care",
    "Makeup making",
    "Sugar scrubs and exfoliants",
    "Perfume and fragrance blending",
    "Natural deodorant",
    "DIY laundry detergent",
    "DIY household cleaners",
    "Room and linen sprays",
    "Beeswax wraps",
  ],
  "Wood, Outdoor, and Practical Skills": [
    "Wood working",
    "Bushcraft",
    "Fire starting",
    "Shelter basics",
    "Tool safety and care",
  ],
  "Sustainability, Gardening and Herbal Skills": [
    "Holistics and Herbology",
    "Gardening indoor and outdoor",
    "Container gardening",
    "Raised bed gardening",
    "Composting",
    "Seed saving",
    "Rainwater collection basics",
    "Self sustainability skills",
  ],
  "Life, DIY and Creative Living": [
    "Home organization",
    "Beginner DIY and life skills",
    "Craft room organization",
    "Budgeting for DIY",
    "Selling handmade basics",
    "Gift making and presentation",
    "Seasonal decorating",
  ],
};

const skillLevels = [SkillLevel.Beginner, SkillLevel.Intermediate, SkillLevel.Advanced];

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomActivity = (index: number): Activity => {
  const category = getRandomElement(categories);
  const subCategoryOptions = subCategoriesMap[category] || [];
  const subCategory = subCategoryOptions.length > 0 ? getRandomElement(subCategoryOptions) : undefined;
  const skillLevel = getRandomElement(skillLevels);
  const estimatedTime = `${getRandomNumber(20, 180)} minutes`;

  const titles = [
    `Mastering ${subCategory || category} Fundamentals`,
    `Introduction to ${subCategory || category} Techniques`,
    `Advanced ${subCategory || category} Strategies`,
    `DIY ${subCategory || category} Project: Build a Small Item`,
    `Quick Guide to ${subCategory || category} Basics`,
    `Exploring ${subCategory || category} for Beginners`,
    `Deep Dive into ${subCategory || category} Concepts`,
    `Hands-on ${subCategory || category} Workshop`,
    `The Art of ${subCategory || category}`,
    `Essential ${subCategory || category} Skills`,
  ];
  const title = getRandomElement(titles);

  const numSupplies = getRandomNumber(3, 8);
  const suppliesList = Array.from({ length: numSupplies }, (_, i) => `Required tool/material ${i + 1} for this activity.`);

  const numInstructions = getRandomNumber(6, 12);
  const instructions = Array.from({ length: numInstructions }, (_, i) => ({
    description: `Step ${i + 1}: Follow this detailed instruction to complete part of the task.`,
    isCompleted: false, // Mark all generated steps as incomplete
  }));

  const numTroubleshootingTips = getRandomNumber(0, 4);
  const troubleshootingTips = Array.from({ length: numTroubleshootingTips }, (_, i) => `Troubleshooting tip ${i + 1}: Common issue and its solution.`);

  const safetyNotesOptions = [
    `Always prioritize safety. Read all instructions before starting.`,
    `Ensure proper ventilation and use protective gear as needed.`,
    `Be mindful of sharp objects or electrical components.`,
    `Follow all local safety guidelines for this type of activity.`,
    `No specific safety notes for this activity, but always exercise caution.`,
  ];
  const safetyNotes = getRandomElement(safetyNotesOptions);

  return {
    id: `activity-${10 + index}`,
    title: `${title} (Activity ${10 + index})`,
    category,
    subCategory,
    skillLevel,
    estimatedTime,
    suppliesList,
    safetyNotes,
    instructions,
    troubleshootingTips: troubleshootingTips.length > 0 ? troubleshootingTips : undefined,
    notes: "",
    isCompleted: false, // Mark all generated activities as incomplete
    isFavorite: false,
  };
};

const newActivities: Activity[] = [];
for (let i = 0; i < 395; i++) { // Generate 395 new activities to reach 400 total (5 existing + 395 new)
  newActivities.push(generateRandomActivity(i));
}

export const initialActivities: Activity[] = [
  {
    id: "1",
    title: "Basic Sourdough Bread",
    category: "Food and Kitchen Skills",
    subCategory: "Bread baking and sourdough",
    skillLevel: SkillLevel.Intermediate,
    estimatedTime: "24 hours (including proofing)",
    suppliesList: [
      "Active sourdough starter",
      "Bread flour",
      "Water",
      "Salt",
      "Large mixing bowl",
      "Banneton or bowl with floured towel",
      "Dutch oven or baking stone",
    ],
    safetyNotes: "Handle hot dutch oven with care. Use oven mitts.",
    instructions: [
      { description: "Feed your sourdough starter 8-12 hours before baking.", isCompleted: false },
      { description: "Mix flour, water, and starter in a large bowl. Autolyse for 30 minutes.", isCompleted: false },
      { description: "Add salt and mix thoroughly. Perform stretch and folds every 30 minutes for 2-3 hours.", isCompleted: false },
      { description: "Bulk ferment at room temperature until doubled (4-8 hours depending on temperature).", isCompleted: false },
      { description: "Shape the dough into a round or oval and place in a floured banneton.", isCompleted: false },
      { description: "Cold proof in the refrigerator for 12-18 hours.", isCompleted: false },
      { description: "Preheat oven to 450°F (230°C) with dutch oven inside for 30 minutes.", isCompleted: false },
      { description: "Score the dough, transfer to hot dutch oven, bake covered for 20 minutes.", isCompleted: false },
      { description: "Remove lid, reduce temperature to 400°F (200°C), bake uncovered for 25-30 minutes until golden brown.", isCompleted: false },
      { description: "Cool on a wire rack for at least 1 hour before slicing.", isCompleted: false },
    ],
    troubleshootingTips: [
      "If dough is too sticky, reduce water slightly next time.",
      "If crust is not crispy, try baking longer uncovered.",
      "If starter isn't active, feed it more frequently or keep it in a warmer spot."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "2",
    title: "Beginner Hand Stitching",
    category: "Sewing, Fiber and Textile Arts",
    subCategory: "Hand stitching and mending",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "1 hour",
    suppliesList: [
      "Fabric scraps",
      "Needle",
      "Thread",
      "Scissors",
      "Pins",
      "Thimble (optional)",
    ],
    safetyNotes: "Be careful with sharp needles and scissors.",
    instructions: [
      { description: "Cut two small fabric squares (e.g., 4x4 inches).", isCompleted: false },
      { description: "Thread your needle and tie a knot at the end of the thread.", isCompleted: false },
      { description: "Practice the running stitch: push needle up from back, then down from front, creating small, even stitches.", isCompleted: false },
      { description: "Practice the backstitch: bring needle up, go back down a stitch length behind, then come up two stitch lengths ahead.", isCompleted: false },
      { description: "Practice the whipstitch: used for joining two edges, bring needle over the edge and through both layers.", isCompleted: false },
      { description: "Finish by tying a knot close to the fabric on the back side.", isCompleted: false },
    ],
    troubleshootingTips: [
      "If stitches are uneven, slow down and focus on consistent spacing.",
      "If thread tangles, use shorter lengths of thread.",
      "If needle is hard to push through fabric, use a thimble."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "3",
    title: "DIY All-Purpose Cleaner",
    category: "Body, Home and Cleaning Products",
    subCategory: "DIY household cleaners",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "10 minutes",
    suppliesList: [
      "Empty spray bottle",
      "White vinegar",
      "Water",
      "Essential oils (e.g., lemon, tea tree - optional)",
    ],
    safetyNotes: "Do not mix vinegar with bleach, as it can create toxic fumes. Test on an inconspicuous area before full use.",
    instructions: [
      { description: "Clean and sterilize your empty spray bottle.", isCompleted: false },
      { description: "Combine equal parts white vinegar and water in the spray bottle.", isCompleted: false },
      { description: "Add 10-20 drops of your favorite essential oils for scent and added cleaning power (optional).", isCompleted: false },
      { description: "Shake well before each use.", isCompleted: false },
      { description: "Label your bottle clearly.", isCompleted: false },
    ],
    troubleshootingTips: [
      "If the vinegar smell is too strong, add more essential oils or let it sit for a day.",
      "If it leaves streaks, try adjusting the vinegar-to-water ratio or using a microfiber cloth."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "4",
    title: "Basic Macrame Plant Hanger",
    category: "Sewing, Fiber and Textile Arts",
    subCategory: "Macrame",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "1.5 hours",
    suppliesList: [
      "Macrame cord (e.g., 4mm cotton, ~50-60 feet)",
      "Measuring tape",
      "Scissors",
      "Metal or wooden ring (for hanging)",
      "S-hook or dowel (to hold project while working)",
    ],
    safetyNotes: "Be careful with scissors. Ensure your working area is clear to avoid tangling cords.",
    instructions: [
      { description: "Cut 8 pieces of macrame cord, each 6-8 feet long.", isCompleted: false },
      { description: "Fold each cord in half and attach all 8 folded cords to the metal ring using a Larks Head Knot.", isCompleted: false },
      { description: "Divide the 16 hanging cords into 4 sections of 4 cords each.", isCompleted: false },
      { description: "In each section, tie a series of Square Knots. Start with 3-4 square knots, then leave a gap of 1-2 inches.", isCompleted: false },
      { description: "After the gap, tie another series of 3-4 square knots in each section.", isCompleted: false },
      { description: "Now, take two cords from one section and two cords from an adjacent section. Tie a Square Knot with these 4 cords, about 4-6 inches below your previous knots. Repeat around the hanger.", isCompleted: false },
      { description: "Gather all 16 cords together at the bottom, about 6-8 inches below the last set of knots.", isCompleted: false },
      { description: "Tie a Gathering Knot (or a simple overhand knot) to secure all cords together, forming the basket for your plant pot.", isCompleted: false },
      { description: "Trim the ends of the cords evenly below the gathering knot.", isCompleted: false },
    ],
    troubleshootingTips: [
      "If knots are uneven, untie and retie slowly, ensuring consistent tension.",
      "If cords get tangled, work in smaller sections and keep unused cords out of the way.",
      "If the hanger is too short/long, adjust the initial cord lengths or the spacing between knots."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "5",
    title: "Indoor Herb Garden Setup",
    category: "Sustainability, Gardening and Herbal Skills",
    subCategory: "Gardening indoor and outdoor",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "30 minutes",
    suppliesList: [
      "Small pots with drainage holes",
      "Potting mix",
      "Herb seeds or small herb plants (e.g., basil, mint, parsley)",
      "Small shovel or trowel",
      "Watering can",
      "Sunny windowsill or grow light",
    ],
    safetyNotes: "Ensure good ventilation when working with soil. Wash hands after handling soil and plants.",
    instructions: [
      { description: "Choose herbs suitable for indoor growing and your light conditions.", isCompleted: false },
      { description: "Fill pots with potting mix, leaving about an inch from the rim.", isCompleted: false },
      { description: "If using seeds, plant according to package directions. If using plants, gently remove from nursery pot and place in new pot.", isCompleted: false },
      { description: "Water thoroughly until water drains from the bottom.", isCompleted: false },
      { description: "Place pots in a sunny location (at least 6 hours of direct sunlight) or under a grow light.", isCompleted: false },
      { description: "Monitor soil moisture daily and water when the top inch of soil feels dry.", isCompleted: false },
    ],
    troubleshootingTips: [
      "If plants are leggy, they might not be getting enough light. Move to a brighter spot or add a grow light.",
      "If leaves are yellowing, it could be overwatering or nutrient deficiency. Check soil moisture and consider a light fertilizer.",
      "If pests appear, try a gentle insecticidal soap or neem oil spray."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false,
  },
  ...newActivities
];