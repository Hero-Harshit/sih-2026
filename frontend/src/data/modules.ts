export interface ModuleFieldOption {
  label: string;
  description: string;
}

export interface ModuleField {
  name: string;
  label: string;
  type: "radio" | "checkbox";
  options: ModuleFieldOption[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  fields: ModuleField[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Composition & Ingredients",
    description: "Define the core active ingredients and the foundational knowledge source for your formulation.",
    fields: [
      {
        name: "ingredients",
        label: "Primary Active Ingredients",
        type: "checkbox",
        options: [
          {
            label: "Ashwagandha (Withania somnifera)",
            description: "Common adaptogen. Generally safe under standard AYUSH rules.",
          },
          {
            label: "Tulsi (Ocimum sanctum)",
            description: "Holy Basil. Widely cultivated, minimal compliance risk.",
          },
          {
            label: "Red Sanders (Pterocarpus santalinus)",
            description: "Highly Endangered. Triggers strict CITES and National Biodiversity Authority (NBA) scrutiny.",
          },
          {
            label: "Jatamansi (Nardostachys jatamansi)",
            description: "Endangered Himalayan herb. Requires stringent Access and Benefit Sharing (ABS) compliance.",
          },
          {
            label: "Purified Chemical Extract (e.g., Curcumin 95%)",
            description: "Not a whole herb. May trigger Phytopharmaceutical regulations.",
          },
          {
            label: "Neem (Azadirachta indica)",
            description: "Classical antimicrobial herb. Landmark EPO patent revocation precedent; TKDL prior-art protection.",
          },
          {
            label: "Turmeric / Haridra (Curcuma longa)",
            description: "Wound-healing and anti-inflammatory. Landmark CSIR US patent revocation precedent (TKDL).",
          },
          {
            label: "Kashmiri Saffron (Crocus sativus)",
            description: "High-value spice with protected Geographical Indication (GI). Strict authenticity and purity standards.",
          },
          {
            label: "Guggulu (Commiphora mukul)",
            description: "Regulated oleo-gum-resin. Subject to standardized guggulsterones under Ayurvedic Pharmacopoeia (API).",
          },
          {
            label: "Kutki (Picrorhiza kurroa)",
            description: "High-altitude Himalayan herb listed in CITES Appendix II & Section 38 BD Act threatened species list.",
          },
          {
            label: "Sarpgandha (Rauvolfia serpentina)",
            description: "Reserpine-bearing plant. Listed in Schedule E(1) and Section 38 BD Act strictly restricted list.",
          },
          {
            label: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            description: "Schedule E(1) poisonous herb. Requires mandatory classical detoxification (Shodhana) and red label warning.",
          },
          {
            label: "Bhang / Vijaya (Cannabis sativa)",
            description: "Schedule E(1) narcotic plant. Subject to NDPS Act state excise licensing and AYUSH notifications.",
          },
          {
            label: "Brahmi (Bacopa monnieri)",
            description: "Classical Medhya Rasayana (nootropic). Subject to standardized bacoside testing and heavy metal limits.",
          },
          {
            label: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            description: "Classical polyherbal combination. Traditional knowledge protected under Section 3(p) of Patents Act.",
          },
          {
            label: "Swarna Bhasma (Incinerated Gold Ash)",
            description: "Herbo-metallic Rasaushadhi. Subject to Schedule T Part I-F GMP and elemental impurity limits.",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "Source of Formulation Knowledge",
        type: "radio",
        options: [
          {
            label: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            description: "Exempt from new safety/efficacy clinical data requirements under Rule 158B(I)(A).",
          },
          {
            label: "Proprietary Mix (Patent & Proprietary - P&P)",
            description: "Standard patent and proprietary medicine regulations apply under Section 3(h) & Rule 158B(II).",
          },
          {
            label: "Tribal / Traditional Community Knowledge",
            description: "Triggers mandatory Benefit Sharing agreements with indigenous communities and BMCs.",
          },
          {
            label: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            description: "Recognized official pharmacopoeial monograph under Second Schedule of Drugs & Cosmetics Act.",
          },
          {
            label: "Siddha or Unani Classical Treatises",
            description: "Authoritative texts listed in the First Schedule under Siddha or Unani Tibb systems.",
          },
          {
            label: "Novel In-House R&D / Innovative Formulation",
            description: "Completely novel botanical combination; potentially patentable if non-obvious and not barred by Section 3(p)/3(e).",
          },
          {
            label: "Uncodified Ethnobotanical Field Collections (PBR)",
            description: "Documented in People's Biodiversity Registers; mandatory Access & Benefit Sharing (ABS) agreement.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Manufacturing & Processing",
    description: "Detail the intended manufacturing processes and the final physical form of the product.",
    fields: [
      {
        name: "processingMethod",
        label: "Manufacturing Process",
        type: "radio",
        options: [
          {
            label: "Raw / Crushed / Water-Boiled (Aqueous)",
            description: "Standard classical Ayurvedic manufacturing (Kashaya / Kwatha decoctions).",
          },
          {
            label: "Solvent Extraction (Alcohol, Hexane)",
            description: "Requires residual solvent disclosures, TLC fingerprinting, and heavy metal testing.",
          },
          {
            label: "Advanced Chemical Isolation",
            description: "Classified as a Phytopharmaceutical. Requires CDSCO approval and clinical trial phases.",
          },
          {
            label: "Classical Fermentation (Asava & Arishta)",
            description: "Self-generated alcohol (<12% v/v); subject to Rule 151 alcohol excise and Spirituous Preparations Act.",
          },
          {
            label: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            description: "Classical lipid extraction; requires rancidity, peroxide value, and acid value testing.",
          },
          {
            label: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            description: "Rasashastra detox and incineration; strict Schedule T nanoparticle and heavy metal compliance.",
          },
          {
            label: "Supercritical Fluid CO2 Extraction (SCFE)",
            description: "Green solvent-free extraction; potentially eligible for process patent under Section 5 of Patents Act.",
          },
          {
            label: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            description: "Bioavailability enhancement; triggers CDSCO New Drug / Phytopharmaceutical regulations.",
          },
        ],
      },
      {
        name: "finalForm",
        label: "Final Product Form",
        type: "radio",
        options: [
          {
            label: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            description: "Subject to internal medicine heavy metal standards, disintegration, and microbial limits.",
          },
          {
            label: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            description: "Subject to specific gravity, alcohol limit verification (<12%), and microbial testing.",
          },
          {
            label: "Oral Powder / Granules (Churna, Kwatha Churna)",
            description: "Particle size mesh standards under API and moisture content limits.",
          },
          {
            label: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            description: "Sugar/honey base subject to total solids, HMF, and sugar tolerance testing.",
          },
          {
            label: "Medicated Oil / Ghee (Taila, Ghrita)",
            description: "Oral or external application; subject to rancidity testing, iodine value, and saponification standards.",
          },
          {
            label: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            description: "Easier compliance pathway as a Cosmetic or ASU external application under Schedule M-II.",
          },
          {
            label: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            description: "Requires strict sterility standards, particulate matter testing, and preservative disclosure.",
          },
          {
            label: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            description: "Governed under Food Safety and Standards (Ayurveda Aahar) Regulations, 2022.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Sourcing & Ownership",
    description: "Specify the origin of biological resources and the corporate structure of the entity.",
    fields: [
      {
        name: "sourcingRegion",
        label: "Primary Sourcing Region",
        type: "radio",
        options: [
          {
            label: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            description: "High potential for Geographical Indication (GI) protection.",
          },
          {
            label: "Himalayan Belt",
            description: "High altitude flora. Strict state forest department oversight.",
          },
          {
            label: "Imported from outside India",
            description: "Exempt from India's Biodiversity Act, but subject to Plant Quarantine and Import Permit.",
          },
          {
            label: "Western Ghats Biodiversity Hotspot",
            description: "Endemic species; strict State Biodiversity Board (SBB) scrutiny and prior intimation under Section 7.",
          },
          {
            label: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            description: "High density of tribal knowledge; Section 41 ABS with Biodiversity Management Committees (BMCs).",
          },
          {
            label: "Certified Cultivated Farmland / Agro-Forestry",
            description: "Certified cultivated species exempt from certain ABS provisions under Biological Diversity (Amendment) Act 2023.",
          },
          {
            label: "Normally Traded Commodities (NTC under Section 40)",
            description: "E.g., Turmeric, Ginger traded purely as commodities; exempt from BD Act benefit sharing when exported as commodity.",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "Entity Ownership",
        type: "radio",
        options: [
          {
            label: "100% Indian Citizens / Indian-Owned Entity",
            description: "Section 7 of BD Act applies (State Biodiversity Board intimation; Divya Pharmacy benefit sharing).",
          },
          {
            label: "Contains Foreign Equity / FDI / NRI Shareholding",
            description: "Section 3(2) BD Act applies (Mandatory prior National Biodiversity Authority approval via Form I).",
          },
          {
            label: "Foreign Corporation / Multinational Company (Outside India)",
            description: "Full Section 3(1) BD Act restrictions; prior NBA approval, Form I, and strict ABS agreement required.",
          },
          {
            label: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            description: "Exempt from SBB prior intimation and ABS for personal practice under BD (Amendment) Act 2023.",
          },
          {
            label: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            description: "Cultivators and local growers exempt from ABS under Section 7 proviso of the amended BD Act.",
          },
          {
            label: "Collaborative Research with Indian Government / CSIR / ICMR",
            description: "Eligible for Section 5 BD Act collaborative research exemption subject to Central Government approval.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Labeling & Claims",
    description: "Select the specific claims to be featured on the product's marketing and labeling.",
    fields: [
      {
        name: "healthClaims",
        label: "Target Claims",
        type: "checkbox",
        options: [
          {
            label: "Boosts Immunity & General Wellness",
            description: "Safe claim. ASCI compliant.",
          },
          {
            label: "Improves Skin Glow / Radiance (\"Varnya\")",
            description: "Safe cosmetic claim for topical and skin health formulations.",
          },
          {
            label: "Cures Diabetes / Cancer / Blindness",
            description: "PROHIBITED. Violates the Drugs & Magic Remedies Act and Schedule J.",
          },
          {
            label: "Clinically Proven / CTRI Registered Trial",
            description: "Requires CTRI registered human clinical trial data on file.",
          },
          {
            label: "Classical Rejuvenation & Vitality (\"Rasayana\" / \"Balya\")",
            description: "Recognized classical therapeutic indications under First Schedule texts; no clinical trials needed for classical formulations.",
          },
          {
            label: "Digestive & Metabolic Health (\"Deepana\" / \"Pachana\")",
            description: "Permissible structure-function claim under AYUSH and Ayurveda Aahar regulations.",
          },
          {
            label: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            description: "Permissible symptomatic relief claim; prohibited from claiming permanent cure for arthritis under DMR Act.",
          },
          {
            label: "Stress Relief, Memory & Sleep Support (\"Medhya\")",
            description: "Permissible cognitive wellness claim under ASCI guidelines when substantiated by herb monographs.",
          },
          {
            label: "\"100% Natural / Pure Ayurvedic / Zero Side Effects\"",
            description: "Trigger for ASCI scrutiny: \"Zero side effects\" is strictly prohibited by ASCI Code for any health product.",
          },
          {
            label: "\"Permanent Cure for Obesity / Hypertension / Heart Disease\"",
            description: "Strictly prohibited under the Schedule to the Drugs & Magic Remedies Act (Items 18, 27, 41).",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Target Markets",
    description: "Indicate the intended global markets for product distribution.",
    fields: [
      {
        name: "targetMarkets",
        label: "Global Markets",
        type: "checkbox",
        options: [
          {
            label: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            description: "Manufacture under Schedule T GMP with classical text citation under Rule 158B(I).",
          },
          {
            label: "Domestic India: Patent or Proprietary (P&P) Medicine",
            description: "Governed by Rule 158B(II); requires safety/efficacy published literature or pilot clinical trial data.",
          },
          {
            label: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            description: "Regulated under Food Safety and Standards (Ayurveda Aahar) Regulations 2022; cannot carry disease claims.",
          },
          {
            label: "United States: FDA Dietary Supplement (DSHEA 1994)",
            description: "Requires 21 CFR Part 111 cGMP and mandatory FDA structure/function disclaimer.",
          },
          {
            label: "United States: MoCRA Topical Cosmetic",
            description: "Subject to mandatory FDA facility registration, product listing, and safety substantiation under MoCRA 2022.",
          },
          {
            label: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            description: "Requires 30 years of traditional medicinal use documentation (including 15 years in EU).",
          },
          {
            label: "European Union: Novel Food Regulation (EU 2015/2283)",
            description: "Required for botanical species without history of consumption in the EU prior to May 1997.",
          },
          {
            label: "Filing for Indian Patent (IPO)",
            description: "Requires Form III prior approval from National Biodiversity Authority (NBA) under Section 6; subject to Section 3(p) TKDL scrutiny.",
          },
          {
            label: "Filing for Global Patents (PCT / International Offices)",
            description: "Mandatory prior NBA approval under Section 6; compliance with WIPO GRATK Treaty on genetic resource origin disclosure.",
          },
        ],
      },
    ],
  },
];
