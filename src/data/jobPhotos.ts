import burnabyTownhouse from "../assets/photos/jobs/burnaby-townhouse.png";
import kitsilanoSupplyLine from "../assets/photos/jobs/kitsilano-supply-line.png";
import richmondCommercial from "../assets/photos/jobs/richmond-commercial.png";

export type JobPhoto = { src: ImageMetadata; alt: string };

export const jobPhotos: Record<string, JobPhoto> = {
  "kitsilano-supply-line": {
    src: kitsilanoSupplyLine,
    alt: "Technician inspecting an opened ceiling cavity above a pooled hardwood floor in a Kitsilano townhouse at night.",
  },
  "burnaby-townhouse": {
    src: burnabyTownhouse,
    alt: "Air movers, a dehumidifier, and an air scrubber running along the soaked corridor of a Burnaby low-rise.",
  },
  "richmond-commercial": {
    src: richmondCommercial,
    alt: "Technician extracting groundwater from the concrete slab of an empty Richmond retail unit overnight.",
  },
};
