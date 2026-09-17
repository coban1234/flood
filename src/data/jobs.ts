export const jobs = [
  {
    slug: "kitsilano-supply-line",
    title: "Kitsilano supply line",
    areaSlug: "vancouver",
    serviceSlug: "burst-pipe",
    type: "residential" as const,
    heroCaption: "FIG. 12 — 00:28 · KITSILANO TOWNHOUSE",
    loss: "Supply line, second floor",
    property: "1974 townhouse",
    category: "1 (clean water)",
    affected: "3 rooms, 620 sq ft",
    callReceived: "23:41",
    onSite: "00:28",
    equipment: "6 air movers, 2 dehumidifiers",
    dryBy: "Day 4",
    summary:
      "A potable line failed in an upstairs bath. Water followed the joists into the living room below. Extraction the same night. Log closed on day 4 when every marked point met target.",
    meta: "Kitsilano supply-line loss: same-night extraction, cavities two rooms over, log closed on day 4. Call (604) 968-5835.",
    narrative: [
      "The loss was a supply line, not groundwater. Category 1 on arrival. We shut the valve, extracted standing water, and opened a small inspection hole in the ceiling below — the cavity was wet two rooms from the bath.",
      "Equipment: six air movers and two dehumidifiers. Readings logged daily at marked points. Surfaces looked dry on day 2. Cavities were not. Equipment stayed.",
      "Rebuild of the opened ceiling and paint was a written scope after the log closed. Neighbourhood only. Photographs are published with permission.",
    ],
    readings: [
      { day: 0, value: "24.1%", note: "Extraction complete, first readings logged" },
      { day: 1, value: "21.8%", note: "Plan adjusted at marked points" },
      { day: 2, value: "18.4%", note: "Surfaces read dry. Cavities do not." },
      { day: 3, value: "15.2%", note: "Cavity readings approaching target" },
      { day: 4, value: "12.1%", note: "Target met. Equipment out, log closed." },
    ],
  },
  {
    slug: "burnaby-townhouse",
    title: "Burnaby stack leak",
    areaSlug: "burnaby",
    serviceSlug: "water-extraction",
    type: "multi-unit" as const,
    heroCaption: "FIG. 14 — DAY 1 · BURNABY LOW-RISE, 3 UNITS",
    loss: "Stack leak, third floor",
    property: "1981 three-storey strata",
    category: "1 degrading to 2",
    affected: "3 units, corridor, 1,140 sq ft",
    callReceived: "02:04",
    onSite: "02:51",
    equipment: "10 air movers, 3 dehumidifiers, 1 air scrubber",
    dryBy: "Day 5",
    summary:
      "A third-floor stack wet two units below and the corridor. Board access at 2am. Daily log until day 5. Same crew through the drywall.",
    narrative: [
      "Multi-unit losses are sequencing, not just pumps. We mapped wet units, contained the corridor, and extracted before the morning peak in the elevator.",
      "The drying log is what the board and the adjuster both get. Surfaces misled on day 2. We kept equipment until cavities met target.",
      "Who pays inside a strata is a legal question. We document. We do not give legal advice. See buildings / who pays.",
    ],
    readings: [
      { day: 0, value: "26.0%", note: "Three units opened, equipment set" },
      { day: 2, value: "19.1%", note: "Corridor dry to touch, cavities not" },
      { day: 5, value: "11.8%", note: "Target met at every point" },
    ],
  },
  {
    slug: "richmond-commercial",
    title: "Richmond ground floor",
    areaSlug: "richmond",
    serviceSlug: "basement-flooding",
    type: "commercial" as const,
    heroCaption: "FIG. 16 — 03:10 · RICHMOND RETAIL SLAB",
    loss: "Sump failure, ground floor",
    property: "Retail bay, slab-on-grade",
    category: "2",
    affected: "Sales floor and stock room, 1,800 sq ft",
    callReceived: "01:12",
    onSite: "02:01",
    equipment: "8 air movers, 2 high-capacity dehumidifiers",
    dryBy: "Day 5",
    summary:
      "A failed sump put groundwater across a Richmond slab overnight. After-hours extraction so the space could trade. Rebuild of damaged millwork quoted after the log.",
    meta: "Richmond slab seepage: overnight extraction after a failed sump so the shop could trade. Call (604) 968-5835.",
    narrative: [
      "Downtime was the cost. We worked the night. Water category was not a clean supply line. Selective contents came out. Stock that could be saved went to climate storage.",
      "Slab-on-grade drying is slower than a framed basement. We said so on hour one. Equipment cap still five days unless they approved an extension.",
      "Insurance vs out-of-pocket was their call. Rates are published either way.",
    ],
    readings: [
      { day: 0, value: "28.4%", note: "Standing water pulled, first grid logged" },
      { day: 3, value: "16.6%", note: "Stock room at target, sales floor not" },
      { day: 5, value: "12.0%", note: "Target met. Written rebuild scope issued." },
    ],
  },
  {
    slug: "north-van-creek",
    title: "North Vancouver crawl space",
    areaSlug: "north-vancouver",
    serviceSlug: "storm-damage",
    type: "residential" as const,
    heroCaption: "FIG. 18 — 04:02 · NORTH VANCOUVER CREEK LOT",
    loss: "Storm, crawl-space intrusion",
    property: "1968 split-level",
    category: "2",
    affected: "Crawl space and lower rooms, 480 sq ft",
    callReceived: "22:18",
    onSite: "23:09",
    equipment: "4 air movers, 2 dehumidifiers",
    dryBy: "Day 5",
    summary:
      "Hillside runoff into a crawl space during an atmospheric river. Extraction that night. Rim joist readings closed on day 5.",
    narrative: [
      "The living room was dry to the hand. The crawl space was not. That is the job on the North Shore after a soaker storm.",
      "We did not sell a retaining wall on the emergency ticket. Mitigation first. Rebuild of drainage if they want it is a separate quote.",
    ],
    readings: [
      { day: 0, value: "25.7%", note: "Crawl extracted, rim joist marked" },
      { day: 5, value: "11.9%", note: "Target met at every point" },
    ],
  },
] as const;

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

export const launchJobs = jobs.filter((j) =>
  ["kitsilano-supply-line", "burnaby-townhouse", "richmond-commercial"].includes(j.slug),
);
