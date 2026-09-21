import { MODULES, Module } from "./modules";

export interface LocalizedOption {
  value: string; // Canonical value for form state and backend
  label: string; // Localized label
  description: string; // Localized description
}

export interface LocalizedField {
  name: string;
  label: string;
  type: "radio" | "checkbox";
  options: LocalizedOption[];
}

export interface LocalizedModule {
  id: number;
  title: string;
  description: string;
  fields: LocalizedField[];
}

const HINDI_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "संरचना एवं सक्रिय घटक",
    description: "अपने उत्पाद के प्रमुख सक्रिय घटकों और फॉर्मूलेशन के मूल पारंपरिक ज्ञान स्रोत को परिभाषित करें।",
    fields: [
      {
        name: "ingredients",
        label: "प्रमुख सक्रिय घटक (सामग्री)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "अश्वगंधा (विथानिया सोम्निफेरा)",
            description: "सामान्य एडाप्टोजेन। मानक आयुष नियमों के तहत सामान्यतः सुरक्षित।",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "तुलसी (ऑसीमम सैंक्टम)",
            description: "पवित्र तुलसी। व्यापक रूप से खेती की जाने वाली, न्यूनतम नियामक जोखिम।",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "रक्त चंदन (टेरोकार्पस सैंटालिनस)",
            description: "अत्यधिक संकटग्रस्त। सीआईटीईएस (CITES) और राष्ट्रीय जैव विविधता प्राधिकरण (एनबीए) की कड़ी जांच लागू।",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "जटामांसी (नार्डोस्टैचिस जटामांसी)",
            description: "संकटग्रस्त हिमालयी जड़ी-बूटी। सख्त पहुंच एवं लाभ साझाकरण (एबीएस) अनुपालन अनिवार्य।",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "शुद्ध रासायनिक अर्क (उदा. करक्यूमिन 95%)",
            description: "संपूर्ण जड़ी-बूटी नहीं। फाइटोफार्मास्युटिकल नियम लागू हो सकते हैं।",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "नीम (अज़ाडिराक्टा इंडिका)",
            description: "शास्त्रीय रोगाणुरोधी जड़ी-बूटी। ऐतिहासिक ईपीओ पेटेंट निरस्तीकरण नज़ीर; टीकेडीएल पूर्व-कला संरक्षण।",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "हल्दी / हरिद्रा (करकुमा लोंगा)",
            description: "घाव भरने और सूजन-रोधी गुण। सीएसआईआर अमेरिकी पेटेंट निरस्तीकरण नज़ीर (टीकेडीएल)।",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "कश्मीरी केसर (क्रोकस सैटाइवस)",
            description: "संरक्षित भौगोलिक उपदर्शन (जीआई) युक्त मूल्यवान मसाला। सख्त प्रामाणिकता एवं शुद्धता मानक।",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "गुग्गुलु (कॉमिफोरा मुकुल)",
            description: "विनियमित ओलेयो-गम-रेज़िन। आयुर्वेदिक फार्माकोपिया (एपीआई) के तहत मानकीकृत गुग्गुलस्टेरोन के अधीन।",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "कुटकी (पिक्रोरिज़ा कुरोआ)",
            description: "सीआईटीईएस परिशिष्ट II और जैव विविधता अधिनियम की धारा 38 की संकटापन्न प्रजाति सूची में शामिल।",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "सर्पगंधा (राउवोल्फिया सर्पेंटीना)",
            description: "रेसरपाइन-युक्त पौधा। अनुसूची E(1) और धारा 38 जैव विविधता अधिनियम की प्रतिबंधित सूची में शामिल।",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "वत्सनाभ / मीठा विष (एकोनिटम फेरोक्स)",
            description: "अनुसूची E(1) विषैली वनस्पति। अनिवार्य शास्त्रीय शोधन और लाल लेबल चेतावनी आवश्यक।",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "भांग / विजया (कैनाबिस सैटिवा)",
            description: "अनुसूची E(1) मादक पौधा। एनडीपीएस अधिनियम, राज्य आबकारी लाइसेंस और आयुष अधिसूचनाओं के अधीन।",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "ब्राह्मी (बाकोपा मोनिएरी)",
            description: "शास्त्रीय मेध्य रसायन (स्मृतिवर्धक)। मानकीकृत बाकोसाइड परीक्षण और भारी धातु सीमाओं के अधीन।",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "त्रिफला (आमलकी, हरीतकी, विभीतकी)",
            description: "शास्त्रीय पॉलीहर्बल संयोजन। पेटेंट अधिनियम की धारा 3(p) के तहत पारंपरिक ज्ञान के रूप में संरक्षित।",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "स्वर्ण भस्म (संसाधित स्वर्ण भस्म)",
            description: "हर्बो-मैटेलिक रसौषधि। अनुसूची टी भाग I-F जीएमपी और तत्व अशुद्धता सीमाओं के अधीन।",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "फॉर्मूलेशन ज्ञान का स्रोत",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "शास्त्रीय ग्रंथ (उदा. चरक संहिता, सुश्रुत संहिता)",
            description: "नियम 158B(I)(A) के तहत नए सुरक्षा/प्रभावकारिता क्लिनिकल डेटा आवश्यकताओं से छूट प्राप्त।",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "स्वामित्व मिश्रण (पेटेंट एवं प्रोप्राइटरी - P&P)",
            description: "धारा 3(h) एवं नियम 158B(II) के तहत मानक पेटेंट और प्रोप्राइटरी दवा नियम लागू।",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "जनजातीय / पारंपरिक सामुदायिक ज्ञान",
            description: "स्थानीय समुदायों और जैव विविधता प्रबंधन समितियों (बीएमसी) के साथ अनिवार्य लाभ-साझाकरण अनुबंध।",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "भारतीय आयुर्वेदिक फार्माकोपिया (एपीआई) / एएफआई मानक",
            description: "ड्रग्स एंड कॉस्मेटिक्स एक्ट की दूसरी अनुसूची के तहत आधिकारिक मान्यता प्राप्त फार्माकोपियल मोनोग्राफ।",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "सिद्ध या यूनानी शास्त्रीय ग्रंथ",
            description: "सिद्ध या यूनानी तिब्ब प्रणालियों के तहत प्रथम अनुसूची में सूचीबद्ध आधिकारिक ग्रंथ।",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "नवीन इन-हाउस आरएंडडी / अभिनव फॉर्मूलेशन",
            description: "पूरी तरह से नवीन वनस्पति संयोजन; यदि धारा 3(p)/3(e) द्वारा वर्जित न हो तो पेटेंट योग्य।",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "असंहिताबद्ध नृवंशवानस्पतिक संग्रह (पीबीआर)",
            description: "जन जैव विविधता रजिस्टरों में प्रलेखित; अनिवार्य पहुंच और लाभ साझाकरण (एबीएस) समझौता।",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "विनिर्माण एवं प्रसंस्करण",
    description: "उत्पाद के विनिर्माण प्रसंस्करण तरीकों और अंतिम भौतिक स्वरूप का विवरण दें।",
    fields: [
      {
        name: "processingMethod",
        label: "विनिर्माण प्रक्रिया",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "कच्चा / चूर्णित / जल-क्वाथ (जलीय निष्कर्षण)",
            description: "मानक शास्त्रीय आयुर्वेदिक विनिर्माण (कषाय / क्वाथ प्रक्रिया)।",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "विलायक निष्कर्षण (अल्कोहल, हेक्सेन)",
            description: "अवशिष्ट विलायक प्रकटीकरण, टीएलसी फिंगरप्रिंटिंग और भारी धातु परीक्षण अनिवार्य।",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "उन्नत रासायनिक पृथक्करण (आइसोलेशन)",
            description: "फाइटोफार्मास्युटिकल के रूप में वर्गीकृत। सीडीएससीओ अनुमोदन और क्लिनिकल ट्रायल आवश्यक।",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "शास्त्रीय किण्वन (आसव एवं अरिष्ट)",
            description: "स्व-उत्पन्न अल्कोहल (<12% v/v); नियम 151 अल्कोहल आबकारी और मद्य तैयारी अधिनियम के अधीन।",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "सिद्ध घृत / तैल निर्माण (स्नेह कल्पना)",
            description: "शास्त्रीय लिपिड निष्कर्षण; विकृतगंधिता, पेरोक्साइड मान और एसिड मान परीक्षण आवश्यक।",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "शास्त्रीय भस्म निर्माण (शोधन एवं मारण)",
            description: "रसशास्त्र विषहरण और मारण; अनुसूची टी नैनोकण और भारी धातु सुरक्षा अनुपालन।",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "सुपरक्रिटिकल फ्लूइड CO2 निष्कर्षण (SCFE)",
            description: "हरित विलायक-मुक्त निष्कर्षण; पेटेंट अधिनियम की धारा 5 के तहत प्रक्रिया पेटेंट हेतु पात्र।",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "नैनो-लिपोसोमल / नवीन हर्बल ड्रग डिलीवरी (NDDS)",
            description: "जैव-उपलब्धता संवर्धन; सीडीएससीओ नवीन औषधि / फाइटोफार्मास्युटिकल नियमों को आकर्षित करता है।",
          },
        ],
      },
      {
        name: "finalForm",
        label: "अंतिम उत्पाद स्वरूप",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "मौखिक ठोस (गोलियां, कैप्सूल, वटी, गुटिका)",
            description: "आंतरिक औषधि भारी धातु मानकों, विघटन और सूक्ष्मजीव सीमाओं के अधीन।",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "मौखिक तरल (किण्वित आसव, अरिष्ट, सिरप)",
            description: "विशिष्ट गुरुत्व, अल्कोहल सीमा सत्यापन (<12%), और सूक्ष्मजीव परीक्षण के अधीन।",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "मौखिक चूर्ण / कणिकाएं (चूर्ण, क्वाथ चूर्ण)",
            description: "एपीआई के तहत कण आकार जाल मानक और नमी सामग्री सीमाएं।",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "शास्त्रीय अर्ध-ठोस (अवलेह, लेह्यम, च्यवनप्राश)",
            description: "शर्करा/शहद आधार; कुल ठोस पदार्थ, एचएमएफ और शर्करा सहिष्णुता परीक्षण के अधीन।",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "सिद्ध तैल / घृत (तैल, घृत)",
            description: "मौखिक या बाह्य अनुप्रयोग; विकृतगंधिता परीक्षण, आयोडीन मान और साबुनीकरण मानक।",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "सामयिक / बाह्य अर्ध-ठोस (क्रीम, जेल, लेप, बाम)",
            description: "अनुसूची M-II के तहत कॉस्मेटिक या एएसयू बाह्य अनुप्रयोग के रूप में सरल अनुपालन।",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "स्टेरिल ड्रॉप्स: नासिका / नेत्र (नस्य, नेत्र बिंदु)",
            description: "सख्त बंध्यता मानक, कण पदार्थ परीक्षण और परिरक्षक प्रकटीकरण अनिवार्य।",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "आयुर्वेद आहार / उपभोग हेतु तैयार हर्बल खाद्य",
            description: "खाद्य सुरक्षा और मानक (आयुर्वेद आहार) विनियम, 2022 के तहत विनियमित।",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "सोर्सिंग एवं कंपनी स्वामित्व",
    description: "जैविक संसाधनों की उत्पत्ति का क्षेत्र और कंपनी की स्वामित्व संरचना निर्दिष्ट करें।",
    fields: [
      {
        name: "sourcingRegion",
        label: "प्रमुख सोर्सिंग क्षेत्र",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "केरल (उदा. नवारा चावल, मालाबार काली मिर्च)",
            description: "भौगोलिक उपदर्शन (जीआई) संरक्षण की उच्च संभावना।",
          },
          {
            value: "Himalayan Belt",
            label: "हिमालयी क्षेत्र",
            description: "उच्च तुंगता वाली वनस्पतियां। राज्य वन विभाग की कड़ी निगरानी।",
          },
          {
            value: "Imported from outside India",
            label: "भारत के बाहर से आयातित",
            description: "भारत के जैव विविधता अधिनियम से मुक्त, परंतु पादप संगरोध और आयात परमिट के अधीन।",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "पश्चिमी घाट जैव विविधता हॉटस्पॉट",
            description: "स्थानिक प्रजातियां; राज्य जैव विविधता बोर्ड (एसबीबी) की सख्त जांच और धारा 7 पूर्व सूचना।",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "मध्य एवं पूर्वी जनजातीय क्षेत्र (बस्तर, छोटा नागपुर, ओडिशा)",
            description: "जनजातीय ज्ञान का सघन क्षेत्र; जैव विविधता प्रबंधन समितियों (बीएमसी) के साथ धारा 41 एबीएस।",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "प्रमाणित कृषि भूमि / कृषि-वानिकी",
            description: "जैव विविधता (संशोधन) अधिनियम 2023 के तहत कुछ एबीएस प्रावधानों से छूट प्राप्त प्रमाणित खेती।",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "सामान्य रूप से व्यापारित वस्तुएं (धारा 40 के तहत NTC)",
            description: "उदा. हल्दी, अदरक जो विशुद्ध रूप से व्यापारिक वस्तु हैं; कमोडिटी निर्यात पर एबीएस से छूट।",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "संस्था स्वामित्व संरचना",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "100% भारतीय नागरिक / भारतीय स्वामित्व वाली संस्था",
            description: "जैव विविधता अधिनियम की धारा 7 लागू (राज्य जैव विविधता बोर्ड को पूर्व सूचना)।",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "विदेशी इक्विटी / एफडीआई / एनआरआई शेयरधारिता युक्त",
            description: "जैव विविधता अधिनियम की धारा 3(2) लागू (फॉर्म 1 द्वारा एनबीए की अनिवार्य पूर्व स्वीकृति)।",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "विदेशी निगम / बहुराष्ट्रीय कंपनी (भारत से बाहर)",
            description: "धारा 3(1) के पूर्ण प्रतिबंध; एनबीए की पूर्व स्वीकृति और सख्त एबीएस समझौता आवश्यक।",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "पंजीकृत आयुष चिकित्सक (वैद्य / पारंपरिक चिकित्सक)",
            description: "संशोधित जैव विविधता अधिनियम 2023 के तहत व्यक्तिगत अभ्यास हेतु एसबीबी सूचना व एबीएस से छूट।",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "किसान उत्पादक संगठन (FPO) / स्थानीय ग्रामीण उत्पादक सहकारी",
            description: "संशोधित कानून की धारा 7 के परंतुक के तहत स्थानीय उत्पादक एबीएस से मुक्त।",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "भारतीय सरकार / सीएसआईआर / आईसीएमआर के साथ सहयोगी अनुसंधान",
            description: "केंद्र सरकार के अनुमोदन के अधीन धारा 5 सहयोगी अनुसंधान छूट के लिए पात्र।",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "लेबलिंग एवं स्वास्थ्य दावे",
    description: "उत्पाद के विपणन और लेबल पर प्रदर्शित किए जाने वाले दावों का चयन करें।",
    fields: [
      {
        name: "healthClaims",
        label: "लक्षित स्वास्थ्य दावे",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "रोग प्रतिरोधक क्षमता और सामान्य स्वास्थ्य संवर्धन",
            description: "सुरक्षित दावा। एएससीआई (ASCI) संहिता के अनुरूप।",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'त्वचा की चमक एवं कांति में सुधार ("वर्ण्य")',
            description: "त्वचा स्वास्थ्य और सामयिक फॉर्मूलेशन के लिए सुरक्षित कॉस्मेटिक दावा।",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "मधुमेह / कैंसर / अंधापन का पूर्ण इलाज",
            description: "सख्ती से प्रतिबंधित। औषधि एवं चमत्कारिक उपचार अधिनियम (DMR) और अनुसूची J का उल्लंघन।",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "क्लिनिकली प्रमाणित / सीटीआरआई पंजीकृत परीक्षण",
            description: "सीटीआरआई पंजीकृत मानव क्लिनिकल परीक्षण डेटा का रिकॉर्ड होना अनिवार्य।",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'शास्त्रीय कायाकल्प एवं बलवर्धन ("रसायन" / "बल्य")',
            description: "प्रथम अनुसूची ग्रंथों के तहत मान्यता प्राप्त शास्त्रीय चिकित्सीय संकेत; परीक्षण अनिवार्य नहीं।",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'पाचन एवं चयापचय स्वास्थ्य ("दीपन" / "पाचन")',
            description: "आयुष और आयुर्वेद आहार नियमों के तहत स्वीकार्य संरचना-कार्य दावा।",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "जोड़ों की गतिशीलता एवं दर्द से राहत (लक्षणात्मक राहत)",
            description: "स्वीकार्य लक्षणात्मक राहत दावा; गठिया के स्थायी इलाज का दावा करना डीएमआर एक्ट में प्रतिबंधित।",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'तनाव से राहत, स्मृति एवं निद्रा सहायता ("मेध्य")',
            description: "मोनोग्राफ द्वारा समर्थित होने पर एएससीआई दिशानिर्देशों के तहत स्वीकार्य दावा।",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"100% प्राकृतिक / शुद्ध आयुर्वेदिक / शून्य दुष्प्रभाव"',
            description: "एएससीआई जांच का विषय: किसी भी स्वास्थ्य उत्पाद के लिए 'शून्य दुष्प्रभाव' का दावा पूरी तरह निषिद्ध है।",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"मोटापे / उच्च रक्तचाप / हृदय रोग का स्थायी उपचार"',
            description: "औषधि एवं चमत्कारिक उपचार अधिनियम की अनुसूची (मद 18, 27, 41) के तहत सख्त निषिद्ध।",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "लक्षित वैश्विक बाज़ार",
    description: "उत्पाद वितरण और बौद्धिक संपदा सुरक्षा के लिए लक्षित वैश्विक बाज़ारों का चयन करें।",
    fields: [
      {
        name: "targetMarkets",
        label: "लक्षित बाज़ार एवं लाइसेंस",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "घरेलू भारत: शास्त्रीय आयुष औषधि (फॉर्म 25D लाइसेंस)",
            description: "नियम 158B(I) के तहत शास्त्रीय पाठ संदर्भ के साथ अनुसूची टी जीएमपी के तहत निर्माण।",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "घरेलू भारत: पेटेंट या प्रोप्राइटरी (P&P) दवा",
            description: "नियम 158B(II) द्वारा शासित; प्रकाशित साहित्य या पायलट क्लिनिकल डेटा आवश्यक।",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "घरेलू भारत: आयुर्वेद आहार / एफएसएसएआई न्यूट्रास्युटिकल",
            description: "खाद्य सुरक्षा और मानक विनियम 2022 के तहत विनियमित; बीमारी के इलाज का दावा नहीं कर सकते।",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "संयुक्त राज्य अमेरिका: यूएस एफडीए डाइटरी सप्लीमेंट",
            description: "21 CFR भाग 111 सीजीएमपी और अनिवार्य एफडीए अस्वीकरण कथन आवश्यक।",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "संयुक्त राज्य अमेरिका: MoCRA सामयिक कॉस्मेटिक",
            description: "MoCRA 2022 के तहत अनिवार्य एफडीए सुविधा पंजीकरण, उत्पाद सूची और सुरक्षा प्रमाणीकरण।",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "यूरोपीय संघ: पारंपरिक हर्बल औषधीय उत्पाद (THMPD)",
            description: "30 वर्षों के पारंपरिक औषधीय उपयोग का दस्तावेज़ीकरण आवश्यक (यूरोपीय संघ में 15 वर्षों सहित)।",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "यूरोपीय संघ: नोवेल फूड विनियमन",
            description: "मई 1997 से पहले यूरोपीय संघ में उपयोग के इतिहास के बिना वनस्पति प्रजातियों के लिए आवश्यक।",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "भारतीय पेटेंट (आईपीओ) के लिए आवेदन",
            description: "धारा 6 के तहत एनबीए से फॉर्म III पूर्व अनुमोदन आवश्यक; धारा 3(p) टीकेडीएल जांच के अधीन।",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "वैश्विक पेटेंट (पीसीटी / अंतर्राष्ट्रीय कार्यालय) फाइलिंग",
            description: "धारा 6 के तहत अनिवार्य पूर्व एनबीए अनुमोदन; आनुवंशिक स्रोत प्रकटीकरण पर विपो संधि का अनुपालन।",
          },
        ],
      },
    ],
  },
];

export function getLocalizedModules(lang: "en" | "hi"): LocalizedModule[] {
  if (lang === "hi") {
    return HINDI_MODULES;
  }

  // Map English MODULES into LocalizedModule structure
  return MODULES.map((m) => ({
    id: m.id,
    title: m.title,
    description: m.description,
    fields: m.fields.map((f) => ({
      name: f.name,
      label: f.label,
      type: f.type,
      options: f.options.map((opt) => ({
        value: opt.label,
        label: opt.label,
        description: opt.description,
      })),
    })),
  }));
}
