import { Activity, SkillLevel } from "@/types/activity";

export const initialActivities: Activity[] = [
  // ... existing activities ...
  {
    id: "201",
    title: "How to Make Sourdough Starter",
    category: "Food and Kitchen Skills",
    subCategory: "Bread Baking and Sourdough",
    skillLevel: SkillLevel.Beginner,
    estimatedTime: "5-7 days",
    suppliesList: [
      "All-purpose or bread flour",
      "Filtered water (chlorine-free)",
      "Non-reactive container (glass or plastic)",
      "Loose-fitting lid or cloth cover",
      "Rubber band",
      "Kitchen scale (optional but recommended)"
    ],
    safetyNotes: "Use clean utensils to prevent contamination. Keep starter in a safe place away from extreme temperatures.",
    instructions: [
      { description: "Day 1: Mix 1/2 cup flour with 1/4 cup water in a clean container. Stir until no dry flour remains. Cover loosely with lid or cloth.", isCompleted: false },
      { description: "Day 2: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 3: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 4: Discard half of the starter. Add 1/2 cup flour and 1/4 cup water. Mix well. Cover loosely.", isCompleted: false },
      { description: "Day 5: Check for bubbles and a slightly sour smell. If active, begin feeding twice daily. Discard half and feed with 1/2 cup flour and 1/4 cup water.", isCompleted: false },
      { description: "Day 6: Continue twice daily feedings if starter is active. Discard half and feed with 1/2 cup flour and 1/4 cup water.", isCompleted: false },
      { description: "Day 7: Starter should be bubbly, active, and doubling in size 4-8 hours after feeding. Ready to use for baking!", isCompleted: false }
    ],
    troubleshootingTips: [
      "If starter isn't bubbling, try moving it to a warmer location (70-75°F).",
      "If starter develops a pink or orange tint, mold, or foul odor, discard and start over.",
      "If a layer of liquid (hooch) forms, stir it back in or pour it off before feeding.",
      "If starter seems sluggish, try feeding with whole wheat flour for a few days to boost activity."
    ],
    notes: "",
    isCompleted: false,
    isFavorite: false
  },
  // ... existing activities (ids 1-200) ...
];