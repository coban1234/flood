import applianceFlood from "../assets/photos/first-hour/appliance-flood.png";
import burstPipe from "../assets/photos/first-hour/burst-pipe.png";
import ceilingLeak from "../assets/photos/first-hour/ceiling-leak.png";
import floodedBasement from "../assets/photos/first-hour/flooded-basement.png";
import sewageBackup from "../assets/photos/first-hour/sewage-backup.png";

export type FirstHourPhoto = { src: ImageMetadata; caption: string; alt: string };

export const firstHourPhotos: Record<string, FirstHourPhoto> = {
  "burst-pipe": {
    src: burstPipe,
    caption: "FIG. FH — THE DRYING LOG STARTS",
    alt: "Technician writing the first entry on a drying log while a moisture meter reads the wall beside him.",
  },
  "flooded-basement": {
    src: floodedBasement,
    caption: "FIG. FH — POWER OFF FIRST",
    alt: "Technician switching off the main breaker at the top of the basement stairs before anyone goes near the water below.",
  },
  "ceiling-leak": {
    src: ceilingLeak,
    caption: "FIG. FH — FINDING THE SOURCE",
    alt: "Technician on a stepladder shining a torch into an inspection hole cut in a water-stained ceiling to trace the leak.",
  },
  "sewage-backup": {
    src: sewageBackup,
    caption: "FIG. FH — WHAT HAS TO GO",
    alt: "Technician in protective equipment at a containment doorway showing a homeowner a piece of contaminated material that must be discarded.",
  },
  "appliance-flood": {
    src: applianceFlood,
    caption: "FIG. FH — UNDER THE CABINETS",
    alt: "Technician lighting the cavity under a kitchen cabinet run with the toe-kick removed and the dishwasher pulled out.",
  },
};

export function firstHourPhoto(slug: string) {
  return firstHourPhotos[slug];
}
