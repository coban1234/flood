export const firstHourPages = [
  {
    slug: "burst-pipe",
    title: "Burst pipe",
    h1: "Burst pipe",
    serviceSlug: "burst-pipe",
    steps: [
      { n: "01", text: "Shut the main valve.", extra: "Where is it? Use the shutoff finder below." },
      { n: "02", text: "Kill power to the wet area." },
      { n: "03", text: "Photograph before you move anything." },
    ],
    dont: [
      "Do not use a household vacuum.",
      "Do not wait until morning if water is still moving.",
      "Do not assume the room below is dry.",
      "Do not leave the valve open to 'see if it stops.'",
    ],
    arrival: "We stop the source if it is still open, extract, and start the drying log.",
    claim:
      "A potable burst often starts as Category 1. Whether to claim is your call — deductible vs published rates. See without a claim.",
  },
  {
    slug: "flooded-basement",
    title: "Flooded basement",
    h1: "Flooded basement",
    serviceSlug: "basement-flooding",
    steps: [
      { n: "01", text: "Treat electrical as live. Do not enter standing water near outlets." },
      { n: "02", text: "Kill power from a dry location if you can do it safely." },
      { n: "03", text: "Keep people and pets out. Photograph from dry ground." },
    ],
    dont: [
      "Do not wade to save belongings if the panel is in the water.",
      "Do not run a household vac on groundwater or sewage.",
      "Do not assume a sump restart finishes the job.",
      "Do not stay if the water is rising.",
    ],
    arrival: "We make it safe, find the source, extract, and dry the suite and cavities.",
    claim: "Sump and groundwater may or may not be covered. We document. The insurer decides.",
  },
  {
    slug: "ceiling-leak",
    title: "Ceiling leak",
    h1: "Ceiling leak",
    serviceSlug: "burst-pipe",
    steps: [
      { n: "01", text: "Catch and contain. Move what you can from under the drip." },
      { n: "02", text: "Do not puncture a bulge unless you know it is safe." },
      { n: "03", text: "Tell the unit above and the board. Photograph first." },
    ],
    dont: [
      "Do not empty a bulging ceiling into a room full of people.",
      "Do not ignore the unit two rooms over — water travels.",
      "Do not paint over a wet stain.",
      "Do not wait for the board meeting if water is still coming.",
    ],
    arrival: "We find the source path, extract the cavity, and dry before mould takes the 24–48 hour window.",
    claim: "Stack leaks in strata are a who-pays question. See buildings. This page is not legal advice.",
  },
  {
    slug: "sewage-backup",
    title: "Sewage backup",
    h1: "Sewage backup",
    serviceSlug: "sewage-category-3",
    steps: [
      { n: "01", text: "Leave the area. This is Category 3." },
      { n: "02", text: "Keep people and pets out. Do not clean it yourself." },
      { n: "03", text: "Photograph from a dry, safe place. Then call." },
    ],
    dont: [
      "Do not mop sewage.",
      "Do not use a household vacuum.",
      "Do not throw porous goods in the kitchen bin without PPE.",
      "Do not let children 'help.'",
    ],
    arrival: "PPE, containment, removal, disinfection. We will show you what must be discarded.",
    claim: "Backup coverage in BC often needs an endorsement. We still come. See insurance.",
  },
  {
    slug: "appliance-flood",
    title: "Appliance flood",
    h1: "Appliance flood",
    serviceSlug: "water-extraction",
    steps: [
      { n: "01", text: "Shut the appliance valve, then the main if it will not stop." },
      { n: "02", text: "Kill power to the appliance and the wet cabinets." },
      { n: "03", text: "Photograph. Do not run the dishwasher or washer again." },
    ],
    dont: [
      "Do not assume the cabinet floor is the whole loss — check the subfloor.",
      "Do not pack wet goods back into swollen particle board.",
      "Do not delay if it ran overnight.",
      "Do not treat a fridge-line leak as 'just a puddle.'",
    ],
    arrival: "We pull kick plates, check the subfloor, extract, and dry cabinets from the inside if they can be saved.",
    claim: "Many appliance losses sit near a deductible. Published rates exist so you can choose.",
  },
] as const;

export function getFirstHour(slug: string) {
  return firstHourPages.find((p) => p.slug === slug);
}
