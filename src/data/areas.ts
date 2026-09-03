export type AreaTier = 1 | 2 | 3;

export type Area = {
  slug: string;
  name: string;
  tier: AreaTier;
  minutes: number;
  built: boolean;
  local: string[];
  jobSlug?: string;
};

export const areas: Area[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "kitsilano-supply-line",
    local: [
      "Vancouver's water losses split along the building stock, not a single flood story. West Side character homes and Kitsilano infill still carry original supply lines, galvanised leftovers, and bathrooms stacked over living rooms. When a line fails at night, water does not stay in the room that leaked. It follows joists into the suite below and the wall cavity two rooms over.",
      "East Vancouver and the Drive mix 1920s–50s houses with secondary suites. Those suites sit below grade or at garden level, which is where a washing-machine line or a failed PRV shows up first. Parkades under 1970s–90s low-rise concrete are a different job: slab, drains, and vehicle access for a truck-mount. We say which one you have on arrival rather than pretending every Vancouver flood is a finished basement.",
      "Downtown and the West End are vertical. A stack leak on one floor is a three-unit night. Access is the elevator, the parkade gate, and whoever has keys. Strata corporations here are used to after-hours vendors; they still need a named person, a drying log, and a file the adjuster can read. Response for Vancouver itself is Tier 1: 60 minutes worst case from dispatch, not a slogan.",
      "Atmospheric rivers load the same housing twice — roof and window leaks into cavities, and overland water into below-grade suites. King tides matter less in Vancouver proper than in Richmond, but False Creek and some shoreline parkades still take seepage. We classify the water on site. Rain in a ceiling is not river water in a parkade.",
      "What we do not do is decorate the page with a stock living room. The photograph that belongs here is a real Vancouver job: crew, equipment, a neighbourhood, a reading. Until that frame is shot and released, this slot stays a labelled caption. The rates on this page are the Metro Vancouver card. A job in Kitsilano is priced the same as one in Burnaby. What changes is the drive.",
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "burnaby-townhouse",
    local: [
      "Burnaby's restoration volume lives in 1970s–80s low-rise strata: wood-frame, three storeys, parkade below, stacked plumbing. A washing-machine standpipe or a tub overflow on the third floor is a corridor job by morning. The building stock is old enough that supply lines and waste stacks fail as a class, not as one-off accidents.",
      "Metrotown towers and the newer Brentwood stock fail differently — high-rise risers, parkade membranes, and access controlled by a concierge. We still need the same three things: a shutoff we are allowed to use, a drying plan that includes cavities, and a log the board can put in the depreciation report conversation. We are not legal counsel. We are the crew that was in the wall.",
      "North Burnaby hillside and South Slope houses add crawl spaces and original lines. Freeze is milder than the Interior, but unheated garages and poorly insulated rim joists still split. Groundwater shows up more in some pockets than others; we do not guess from a map. We look at where it entered.",
      "Burnaby is Tier 1. Worst-case response is 60 minutes. The documented job we attach to this page is a townhouse supply-line loss with a closed drying log — neighbourhood, not a street address. Rates do not change because the job is in Burnaby. Equipment still caps at five days without written approval.",
      "Local searchers often type cost next to the city name. That is why the full rate card sits on this page rather than behind a link. If a line item is not on the card, it will not be on the invoice.",
    ],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "burnaby-townhouse",
    local: [
      "New Westminster sits on a slope to the river. Older houses, converted suites, and brick walk-ups mean water travels downhill through the building, not only through the floor. A burst on the uphill side of a character home often presents as a basement problem that started two rooms away.",
      "The city's mix of heritage and 1960s–80s apartments is hard on stacks. Cast iron and aging poly-b in some vintage of renovations still appear. We do not diagnose pipe type from the sidewalk. We shut the water, extract, and tell you what we found in the cavity.",
      "River-adjacent and Queensborough pockets have a water-table story closer to Richmond than to the North Shore. Sump dependency and overland flow during atmospheric rivers are real. Category of water is decided on site — a clean supply line and a silted crawl space are not the same job.",
      "Access on steep streets and tight parking is an operational fact, not a surcharge. There is no area upcharge on the published card. New Westminster is Tier 1, 60 minutes worst case.",
      "Strata and rental suites are common. Photograph, keep people out of standing water, and call. We will coordinate with the building if you are not the one with keys. The rate card below is the Metro Vancouver card in full.",
    ],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "north-van-creek",
    local: [
      "The North Shore fails on creeks, hillside runoff, and houses built into the slope. A soaker storm does not have to overtop a bank to put water through a below-grade wall. Perimeter drains clog. Crawl spaces take the first hit. The living room above can look dry while the rim joist is not.",
      "District and City of North Vancouver both sit in Tier 1. Creek-adjacent streets and some 1950s–70s split-levels are the repeat customers of atmospheric rivers. We extract and dry. Creek remediation and retaining walls are rebuild, quoted after, if they are in scope at all.",
      "Lonsdale corridors add concrete low-rise and newer towers. Stack leaks and parkade seepage look like Vancouver's, with hillside access and winter parking as the local flavour. High-rise residents should not hunt a domestic riser. Call the building, then call us.",
      "Wood-frame homes with original supply lines still burst. Unheated crawl spaces on the slope are a freeze path even when the city itself is mild. We treat those as Category 1 until time or contamination says otherwise.",
      "Response is 60 minutes worst case. The job photograph for this page is a North Shore crawl-space extraction with a dated readout. Rates are the same card as downtown Vancouver. Drive time is in the labour, not a fuel line.",
    ],
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "north-van-creek",
    local: [
      "West Vancouver's losses are high-value houses on slopes, guest suites below grade, and mechanical rooms that sit under living space. A failed water heater or a supply line in a crawl space can run for hours before anyone is home. The ticket is larger because the finishes are. The physics are the same.",
      "Access can mean steep drives, gates, and long hoses. We still do not add a fuel surcharge. Equipment still caps at five days. Rebuild of millwork and stone is a written scope after the log closes, not a guess from this card.",
      "Creek and runoff exposure is shared with the District of North Vancouver. Some properties sit close enough to drainage courses that a storm presents as groundwater. We classify water and photograph before we pull finishes.",
      "This is Tier 1: 60 minutes worst case. Overnight labour is published because someone has to be awake on the North Shore at 3am, insured and equipped. We would rather charge that honestly than staff a cheap night we cannot cover.",
      "If you are a property manager for several houses, use the buildings contact path. The 24/7 line is still the right number when water is moving.",
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    tier: 1,
    minutes: 60,
    built: true,
    jobSlug: "richmond-commercial",
    local: [
      "Richmond is a water-table market. The city sits on islands in the Fraser delta. King tides, poor lot drainage, and failed sump pumps put water into crawl spaces and ground-floor slabs even when the river is not in the news. That is not the same loss as a burst pipe on the second floor, and the drying plan is not the same.",
      "A large share of the housing is 1970s–2000s wood-frame with basement-less slabs or shallow crawl spaces. Water under a slab is a different extraction problem than a Kitsilano basement. We will tell you what we can pull and what needs injected drying or selective demolition.",
      "Steveston, the West Cambie towers, and industrial East Richmond add parkades, loading docks, and commercial interruption. Downtime is the real cost for a shop. We work after hours. Overnight rates are on the card for that reason.",
      "Agricultural edge and some East Richmond lots have drainage stories closer to Delta. We do not pretend a single Richmond paragraph covers every block. The 400 words here are about the stock we actually dry: delta water table, king tides, sump dependency, and slab-on-grade living space.",
      "Richmond is Tier 1, 60 minutes worst case. The documented commercial loss attached to this page is a ground-floor extraction with equipment in place overnight. The rate card is the Metro Vancouver card. No area premium.",
    ],
  },
  { slug: "surrey", name: "Surrey", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "coquitlam", name: "Coquitlam", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "port-coquitlam", name: "Port Coquitlam", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "port-moody", name: "Port Moody", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "delta", name: "Delta", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "white-rock", name: "White Rock", tier: 2, minutes: 90, built: false, local: [] },
  { slug: "langley", name: "Langley", tier: 3, minutes: 120, built: false, local: [] },
  { slug: "maple-ridge", name: "Maple Ridge", tier: 3, minutes: 120, built: false, local: [] },
  { slug: "pitt-meadows", name: "Pitt Meadows", tier: 3, minutes: 120, built: false, local: [] },
  { slug: "abbotsford", name: "Abbotsford", tier: 3, minutes: 120, built: false, local: [] },
];

export const builtAreas = areas.filter((a) => a.built);

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
