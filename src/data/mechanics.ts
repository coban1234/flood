import { brand } from "./site";

export const clockBands = [
  {
    id: "0-6",
    label: "Hour 6",
    range: "0–6 hours",
    body: "Water is still spreading through subfloor and wall cavities.",
    salvageable: ["Hardwood", "Drywall", "Insulation", "Cabinetry", "Carpet + underlay"],
    risk: [] as string[],
    lost: [] as string[],
    category: "1 — clean",
    close: "Most of this is still recoverable. That changes tomorrow.",
  },
  {
    id: "6-24",
    label: "Hour 24",
    range: "6–24 hours",
    body: "Absorption into subfloor and cavities. Carpet underlay at risk.",
    salvageable: ["Hardwood", "Drywall", "Insulation", "Cabinetry"],
    risk: ["Carpet + underlay"],
    lost: [],
    category: "1 — degrading",
    close: "The underlay is the first material we usually lose. Call while the rest is still a drying job.",
  },
  {
    id: "24-48",
    label: "Hour 48",
    range: "24–48 hours",
    body: "Mould growth begins in this window. Drywall and insulation at risk. Category 1 becomes Category 2.",
    salvageable: ["Hardwood", "Cabinetry"],
    risk: ["Drywall", "Insulation", "Carpet + underlay"],
    lost: [],
    category: "2",
    close: "This is now a remediation job, not a drying job. Call.",
  },
  {
    id: "48-72",
    label: "Hour 72",
    range: "48–72 hours",
    body: "Insulation typically lost. Hardwood cupping. Cabinetry swelling.",
    salvageable: [],
    risk: ["Hardwood", "Cabinetry", "Drywall"],
    lost: ["Insulation", "Carpet + underlay"],
    category: "2",
    close: "We can still dry the structure. Some finishes will not return to what they were.",
  },
  {
    id: "72",
    label: "Hour 72+",
    range: "72 hours and after",
    body: "Structural drying takes materially longer. Mould remediation likely required. Category 3 possible.",
    salvageable: [],
    risk: ["Hardwood", "Cabinetry"],
    lost: ["Insulation", "Carpet + underlay", "Drywall"],
    category: "2–3 possible",
    close: "Call anyway. The log still has to close. Waiting does not make the invoice smaller.",
  },
] as const;

export const dryingDays = [
  { day: 0, reading: "24.1%", caption: "Extraction complete, equipment set, first readings logged" },
  { day: 1, reading: "21.8%", caption: "Readings at marked points, plan adjusted" },
  { day: 2, reading: "18.4%", caption: "Surfaces read dry. Cavities do not." },
  { day: 3, reading: "15.2%", caption: "Cavity readings approaching target" },
  { day: 4, reading: "12.9%", caption: "One point still above target — equipment stays" },
  { day: 5, reading: "11.6%", caption: "Target met at every point. Equipment out, log closed." },
] as const;

export const day2Note =
  "Surfaces read dry days before cavities do. Stopping here is where callbacks, odour, and mould come from.";

export const shutoffTypes = [
  {
    id: "house",
    name: "Detached house",
    where: [
      "Front wall, often in a closet or behind an access panel near where the municipal line enters.",
      "Mechanical room, laundry, or crawl-space entry on older stock.",
      "Meter box at the street — last resort, and not always yours to operate.",
    ],
    valve: "Ball valves close with a quarter turn, handle across the pipe. Gate valves close clockwise several turns. If it will not move, stop. Forcing a seized gate can snap it.",
    building: "You can usually operate a domestic main in a house you own. If you rent, tell the owner and still shut it if water is moving and you can do so safely.",
  },
  {
    id: "townhouse",
    name: "Townhouse",
    where: [
      "Unit mechanical closet, often at the front or in the garage.",
      "Shared chase — do not assume the valve in your laundry is the building main.",
      "End-unit meter or a locked common room.",
    ],
    valve: "Same ball vs gate rule. Labelled 'domestic water' is the one you want. A heating loop valve is not it.",
    building: "Many townhouse strata have a shared main. If your valve does not stop the leak, call the building and us. Do not open someone else's closet.",
  },
  {
    id: "lowrise",
    name: "Low-rise condo",
    where: [
      "In-suite shutoff under a sink or behind the washing machine — this stops your fixture, not the stack.",
      "Parkade or ground-floor service room — usually keyed.",
      "Riser closet in the corridor — not yours to force.",
    ],
    valve: "If the leak is a stack or a neighbour's line, your in-suite valve will not finish it.",
    building: "Call the building. Then call us. For most condo residents, not touching the riser is the correct answer.",
  },
  {
    id: "highrise",
    name: "High-rise condo",
    where: [
      "In-suite fixture valves only.",
      "Floor shutoff in a locked service room.",
      "Building main — operations or overnight security.",
    ],
    valve: "Do not enter a riser closet. Do not operate a floor valve you were not shown.",
    building: `Call the concierge or after-hours number, then ${brand.shortName}. We will work with whoever has keys.`,
  },
] as const;

export const traces = [
  {
    id: "bath",
    name: "Upstairs bathroom",
    path: ["Source at the fixture or supply", "Down through the ceiling cavity", "Along joists", "Wall base two rooms away", "Subfloor under flooring that still looks fine"],
    hidden: ["Ceiling two rooms over", "Wall base below the source", "Subfloor under intact flooring"],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    path: ["Dishwasher, fridge line, or sink supply", "Into the kick space and cabinet floor", "Through the subfloor", "Into the ceiling of the room below if stacked"],
    hidden: ["Cabinet backs that look dry", "Adjacent pantry toe-kick", "Ceiling below"],
  },
  {
    id: "roof",
    name: "Roof",
    path: ["Penetration or valley", "Attic insulation", "Ceiling drywall", "Exterior wall cavity on the downhill side"],
    hidden: ["Insulation that holds water out of sight", "Top plates", "Windows below the leak"],
  },
  {
    id: "basement",
    name: "Basement floor",
    path: ["Slab or crawl", "Up the bottom plate", "Into the first wall cavity", "Under finished flooring at the edge"],
    hidden: ["Bottom plates", "Carpet tack strip", "The 'dry' corner on the other side of the room"],
  },
] as const;
