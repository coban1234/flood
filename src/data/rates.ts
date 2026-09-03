export const lastUpdated = "September 2026";

export const commitments = [
  {
    title: "No surprise line items.",
    body: "Every charge that can appear on your invoice is on this page. If it is not listed here, you will not be billed for it. No fuel surcharge. No contractor fee. No administrative add-on.",
  },
  {
    title: "Equipment billing capped at five days.",
    body: "Drying equipment is billed to the day your readings hit target, capped at five days. If your building needs longer, we show you the readings and you approve the extension before day six.",
  },
  {
    title: "A written scope before rebuild.",
    body: "Emergency mitigation proceeds immediately. Everything after it is authorised in writing before work starts. Rebuild is quoted per property after dry-out, not from this card.",
  },
] as const;

export const overnightNote =
  "Our overnight and weekend rates are not discounted. Someone has to be awake, insured, and equipped at 3am, and that costs what it costs. We would rather charge properly for nights than promise a cheap one we cannot staff.";

export const rateSameNote =
  "These are our rates across Metro Vancouver. A job in this area is priced the same as one downtown. What changes by area is how fast we get there.";

export type RateRow = { item: string; rate: string };

export const callouts: RateRow[] = [
  { item: "Emergency call-out, minimum", rate: "$400.00" },
  { item: "Non-emergency / inspection call-out, minimum", rate: "$200.00" },
];

export const equipment: RateRow[] = [
  { item: "Mini air mover", rate: "$39.60" },
  { item: "Air mover", rate: "$54.55" },
  { item: "Axial fan", rate: "$68.65" },
  { item: "Dehumidifier, standard", rate: "$158.40" },
  { item: "Dehumidifier, high capacity", rate: "$286.00" },
  { item: "Air scrubber", rate: "$73.05" },
  { item: "Air scrubber, commercial", rate: "$109.35" },
  { item: "Hardwood floor rescue mat system", rate: "$187.90" },
  { item: "Injected drying system", rate: "$146.10 / 90 LF" },
];

export const equipmentExample =
  "Worked example — six air movers and two dehumidifiers, five days: $3,220.50, capped there without written approval.";

export const labour: RateRow[] = [
  { item: "General labourer", rate: "$49.55 / hr" },
  { item: "Flood technician", rate: "$87.40 / hr" },
  { item: "Water extraction specialist", rate: "$90.15 / hr" },
  { item: "Supervisor / project manager", rate: "$92.00 / hr" },
  { item: "Hazmat technician", rate: "$100.30 / hr" },
  { item: "Skilled labourer", rate: "$120.50 / hr" },
  { item: "Contents / cleaning specialist", rate: "$52.60 / hr" },
];

export const afterHours: RateRow[] = [
  { item: "Weekend / statutory holiday", rate: "$80.79 – $196.50 / hr" },
  { item: "Overnight emergency dispatch", rate: "$142.50 – $225.00 / hr" },
  { item: "After-hours extraction specialist", rate: "$147.00 / hr" },
  { item: "After-hours supervisor / project manager", rate: "$150.00 / hr" },
];

export const category3: RateRow[] = [
  { item: "Category 3 response", rate: "$163.50 – $300.00 / hr" },
  { item: "Category 3 demolition", rate: "$250.00 – $300.00 / hr" },
  { item: "Bio wash", rate: "$2.00 / sq ft" },
];

export const treatments: RateRow[] = [
  { item: "Antimicrobial application", rate: "$0.23 / sq ft (min. $30 under 120 sq ft)" },
  { item: "Post-flood selective demolition", rate: "$207.00 / hr" },
  { item: "Emergency post-flood demolition", rate: "$207.00 – $276.00 / hr" },
  { item: "Demolition labourer", rate: "$59.80 / hr" },
  { item: "Debris removal", rate: "$138.00 / cu yd" },
  { item: "Dumpster, 20 / 30 / 40 yd", rate: "$414 / $506 / $598 per week" },
  { item: "Fuel surcharge", rate: "Not charged" },
  { item: "Contractor fee", rate: "Not charged" },
];

export const billingTerms = [
  "Labour rounded to the nearest half hour; drive time included.",
  "No fuel surcharge, no contractor fee, no administrative fee.",
  "Equipment billed to target, capped at five days without written approval.",
  "Rebuild quoted in writing after dry-out, not from this card.",
  "Insurance work billed on the insurer's programme rates, not this card.",
  "Payment terms and accepted methods [CLIENT per market].",
];

export const homeRatePreview: RateRow[] = [
  { item: "Call-out", rate: "$400" },
  { item: "Air mover / day", rate: "$54.55" },
  { item: "Equipment capped", rate: "5 days" },
];
