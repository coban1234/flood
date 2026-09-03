export const reviews = [
  {
    id: "1",
    area: "Burnaby",
    quote: "They arrived after midnight, left a drying log on the counter every day, and the fans were gone when the last point hit target. That is all I wanted.",
    name: "A.K.",
    detail: "Townhouse, supply line · Burnaby",
  },
  {
    id: "2",
    area: "Vancouver",
    quote: "The board got photos, readings, and a written rebuild scope. No performance. No mystery fees.",
    name: "Strata council member",
    detail: "Low-rise, stack leak · Vancouver",
  },
  {
    id: "3",
    area: "Richmond",
    quote: "We paid out of pocket on purpose. The card on the site matched the invoice. I had not seen that before.",
    name: "Shop owner",
    detail: "Ground-floor seepage · Richmond",
  },
  {
    id: "4",
    area: "North Vancouver",
    quote: "They told us the living room was the wrong room to worry about. The crawl space was. They were right.",
    name: "Homeowner",
    detail: "Storm, crawl space · North Vancouver",
  },
] as const;

export const processSteps = [
  { n: "01", title: "Answer", text: "A person picks up." },
  { n: "02", title: "Stop", text: "Shut the source." },
  { n: "03", title: "Extract", text: "Pull the water." },
  { n: "04", title: "Dry", text: "Run to target." },
  { n: "05", title: "Verify", text: "Close the log." },
  { n: "06", title: "Rebuild", text: "Finish the walls." },
] as const;

export const emergencySteps = [
  "Shut the main valve",
  "Kill power to wet areas",
  "Keep people and pets out",
  "Photograph everything",
  "Do not touch sewage",
] as const;
