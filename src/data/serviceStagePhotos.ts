import basementFloodingA from "../assets/photos/services/stages/basement-flooding-a.png";
import basementFloodingB from "../assets/photos/services/stages/basement-flooding-b.png";
import basementFloodingC from "../assets/photos/services/stages/basement-flooding-c.png";
import burstPipeA from "../assets/photos/services/stages/burst-pipe-a.png";
import burstPipeB from "../assets/photos/services/stages/burst-pipe-b.png";
import burstPipeC from "../assets/photos/services/stages/burst-pipe-c.png";
import contentsRecoveryA from "../assets/photos/services/stages/contents-recovery-a.png";
import contentsRecoveryB from "../assets/photos/services/stages/contents-recovery-b.png";
import contentsRecoveryC from "../assets/photos/services/stages/contents-recovery-c.png";
import mouldRemediationA from "../assets/photos/services/stages/mould-remediation-a.png";
import mouldRemediationB from "../assets/photos/services/stages/mould-remediation-b.png";
import mouldRemediationC from "../assets/photos/services/stages/mould-remediation-c.png";
import rebuildAndRepairsA from "../assets/photos/services/stages/rebuild-and-repairs-a.png";
import rebuildAndRepairsB from "../assets/photos/services/stages/rebuild-and-repairs-b.png";
import rebuildAndRepairsC from "../assets/photos/services/stages/rebuild-and-repairs-c.png";
import sewageA from "../assets/photos/services/stages/sewage-category-3-a.png";
import sewageB from "../assets/photos/services/stages/sewage-category-3-b.png";
import sewageC from "../assets/photos/services/stages/sewage-category-3-c.png";
import stormDamageA from "../assets/photos/services/stages/storm-damage-a.png";
import stormDamageB from "../assets/photos/services/stages/storm-damage-b.png";
import stormDamageC from "../assets/photos/services/stages/storm-damage-c.png";
import structuralDryingA from "../assets/photos/services/stages/structural-drying-a.png";
import structuralDryingB from "../assets/photos/services/stages/structural-drying-b.png";
import structuralDryingC from "../assets/photos/services/stages/structural-drying-c.png";
import waterExtractionA from "../assets/photos/services/stages/water-extraction-a.png";
import waterExtractionB from "../assets/photos/services/stages/water-extraction-b.png";
import waterExtractionC from "../assets/photos/services/stages/water-extraction-c.png";

export type StagePhoto = { src: ImageMetadata; caption: string; alt: string };

export const serviceStagePhotos: Record<string, StagePhoto[]> = {
  "water-extraction": [
    {
      src: waterExtractionA,
      caption: "FIG. A — ARRIVAL",
      alt: "Technician hauling an extraction hose in through the front door of a house with standing water across the hallway floor.",
    },
    {
      src: waterExtractionB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Technician walking an extraction wand across soaked carpet in an emptied room, the sofa propped on blocks and the baseboards already off.",
    },
    {
      src: waterExtractionC,
      caption: "FIG. C — RECOVERED WATER",
      alt: "The clear tank of a portable extractor half full of dirty recovered water, standing on the floor of a stripped room.",
    },
  ],
  "structural-drying": [
    {
      src: structuralDryingA,
      caption: "FIG. A — ARRIVAL",
      alt: "Technician carrying an air mover into a stripped room, more fans and an extension lead stacked by the door.",
    },
    {
      src: structuralDryingB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Air movers ringing a stripped bedroom with a dehumidifier draining into a bucket in the middle of the floor.",
    },
    {
      src: structuralDryingC,
      caption: "FIG. C — READING",
      alt: "Technician holding a thermo-hygrometer up to take an ambient reading, clipboard under his arm and a dehumidifier running behind.",
    },
  ],
  "mould-remediation": [
    {
      src: mouldRemediationA,
      caption: "FIG. A — CONTAINMENT",
      alt: "Technician on a step stool taping polythene sheeting across a doorway to build a containment barrier.",
    },
    {
      src: mouldRemediationB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Technician in a Tyvek suit and respirator HEPA-vacuuming a stud inside a sealed containment.",
    },
    {
      src: mouldRemediationC,
      caption: "FIG. C — NEGATIVE PRESSURE",
      alt: "HEPA negative air machine ducted out through a window, the containment sheeting drawn inward under negative pressure.",
    },
  ],
  "sewage-category-3": [
    {
      src: sewageA,
      caption: "FIG. A — ARRIVAL",
      alt: "Two technicians in full protective equipment gearing up at the open door of a basement before going in.",
    },
    {
      src: sewageB,
      caption: "FIG. B — REMOVAL",
      alt: "Technician in protective equipment bagging cut-out contaminated carpet in a stripped basement room.",
    },
    {
      src: sewageC,
      caption: "FIG. C — DISINFECTION",
      alt: "Technician applying antimicrobial across a stripped concrete floor with a pump sprayer.",
    },
  ],
  "basement-flooding": [
    {
      src: basementFloodingA,
      caption: "FIG. A — ARRIVAL",
      alt: "Technician carrying a submersible pump down the basement stairs toward standing water.",
    },
    {
      src: basementFloodingB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Submersible pump running in a flooded basement, discharge hose run out and a technician watching the water level.",
    },
    {
      src: basementFloodingC,
      caption: "FIG. C — TIDE LINE",
      alt: "Tape measure held against a basement block wall to record the height of the tide line left by the flood water.",
    },
  ],
  "burst-pipe": [
    {
      src: burstPipeA,
      caption: "FIG. A — SOURCE STOPPED",
      alt: "Technician closing the main water shut-off valve in a utility cupboard, the floor around him already wet.",
    },
    {
      src: burstPipeB,
      caption: "FIG. B — FLOOD CUT",
      alt: "Technician cutting the wet lower band of drywall away along a chalk line, a soaked section already pulled off beside him.",
    },
    {
      src: burstPipeC,
      caption: "FIG. C — THE FAILURE",
      alt: "Cut-out offcut of copper supply line held up to show the freeze split along its side.",
    },
  ],
  "storm-damage": [
    {
      src: stormDamageA,
      caption: "FIG. A — MADE WATERTIGHT",
      alt: "Two technicians tarping a damaged roof section in steady rain, battening the edge down with timber.",
    },
    {
      src: stormDamageB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Technician squeegeeing muddy rainwater out through an open patio door, a soaked rug rolled up against the wall.",
    },
    {
      src: stormDamageC,
      caption: "FIG. C — READING",
      alt: "Moisture meter pressed into carpet where rainwater tracked in under a door threshold, the sediment line still visible.",
    },
  ],
  "contents-recovery": [
    {
      src: contentsRecoveryA,
      caption: "FIG. A — INVENTORY",
      alt: "Technician packing books and framed photographs from a soaked shelf into labelled crates in a water-damaged room.",
    },
    {
      src: contentsRecoveryB,
      caption: "FIG. B — DRYING",
      alt: "Damp books stood open to dry and documents laid out flat on paper-covered tables, an air mover running down the row.",
    },
    {
      src: contentsRecoveryC,
      caption: "FIG. C — LOGGED",
      alt: "Gloved hands ticking an inventory sheet on a clipboard beside a tagged damp book and the camera used for condition shots.",
    },
  ],
  "rebuild-and-repairs": [
    {
      src: rebuildAndRepairsA,
      caption: "FIG. A — SET OUT",
      alt: "Technician marking a cut line on a sheet of drywall on the floor, the flood cut in the wall behind him showing dry studs.",
    },
    {
      src: rebuildAndRepairsB,
      caption: "FIG. B — IN PROGRESS",
      alt: "Technician taping and mudding the joint between the new lower board and the original wall above it.",
    },
    {
      src: rebuildAndRepairsC,
      caption: "FIG. C — HANDOVER",
      alt: "Finished wall and freshly painted skirting board reinstated, with a nail gun and an offcut left on the dust sheet.",
    },
  ],
};

export function serviceStages(slug: string) {
  return serviceStagePhotos[slug] ?? [];
}
