import basementFlooding from "../assets/photos/services/basement-flooding.png";
import burstPipe from "../assets/photos/services/burst-pipe.png";
import contentsRecovery from "../assets/photos/services/contents-recovery.png";
import mouldRemediation from "../assets/photos/services/mould-remediation.png";
import rebuildAndRepairs from "../assets/photos/services/rebuild-and-repairs.png";
import sewageCategory3 from "../assets/photos/services/sewage-category-3.png";
import stormDamage from "../assets/photos/services/storm-damage.png";
import structuralDrying from "../assets/photos/services/structural-drying.png";
import waterExtraction from "../assets/photos/services/water-extraction.png";

export type ServicePhoto = { src: ImageMetadata; alt: string };

export const servicePhotos: Record<string, ServicePhoto> = {
  "water-extraction": {
    src: waterExtraction,
    alt: "Technician kneeling in standing water working an extraction wand, with a tide line up the wall, the soaked carpet rolled back and furniture propped on blocks.",
  },
  "structural-drying": {
    src: structuralDrying,
    alt: "Air movers ringing a stripped room with the baseboards off, and a dehumidifier draining into a bucket in the middle.",
  },
  "mould-remediation": {
    src: mouldRemediation,
    alt: "Technician in a Tyvek suit and respirator stepping through the zippered entry of a sealed containment, with a HEPA negative air machine ducted to a window.",
  },
  "sewage-category-3": {
    src: sewageCategory3,
    alt: "Technician in full protective equipment disinfecting a stripped Category 3 area.",
  },
  "basement-flooding": {
    src: basementFlooding,
    alt: "Technician in rubber boots checking a foundation wall by flashlight in a flooded basement, with a submersible pump running in the standing water.",
  },
  "burst-pipe": {
    src: burstPipe,
    alt: "Laundry-room wall opened to waist height around a leaking copper supply line, a tide line across the cavity, soaked insulation sagging onto the wet floor, and a technician taking a moisture reading off a stud.",
  },
  "storm-damage": {
    src: stormDamage,
    alt: "Technician crouched beside a basement window well flooded to the rim in heavy rain, running a submersible pump out to a discharge hose across the waterlogged lawn.",
  },
  "contents-recovery": {
    src: contentsRecovery,
    alt: "Damp books and photographs laid out to dry on paper-covered tables, with a technician logging labelled inventory boxes on a clipboard.",
  },
  "rebuild-and-repairs": {
    src: rebuildAndRepairs,
    alt: "Technician kneeling to screw a fresh sheet of drywall to the studs below a flood cut line, with offcuts and gypsum dust across the bare subfloor.",
  },
};

export function servicePhoto(slug: string) {
  return servicePhotos[slug];
}
