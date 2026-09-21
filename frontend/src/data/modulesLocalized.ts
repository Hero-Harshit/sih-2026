import { MODULES, Module } from "./modules";
import { Language } from "../i18n/translations";

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

const MARATHI_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "रचना आणि सक्रिय घटक",
    description: "आपल्या उत्पादनातील मुख्य सक्रिय घटक आणि फॉर्म्युलेशनच्या मूळ पारंपारिक ज्ञान स्रोताची माहिती द्या.",
    fields: [
      {
        name: "ingredients",
        label: "प्रमुख सक्रिय घटक (सामग्री)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "अश्वगंधा (विथानिया सोम्निफेरा)",
            description: "सामान्य अडॅप्टोजेन. मानक आयुष नियमांनुसार सामान्यतः सुरक्षित.",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "तुळस (ऑसिमम सँक्टम)",
            description: "पवित्र तुळस. मोठ्या प्रमाणावर लागवड होणारी, किमान नियामक जोखीम.",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "रक्तचंदन (टेरोकार्पस सँटालिनस)",
            description: "अतिसंकटग्रस्त प्रजाती. CITES आणि राष्ट्रीय जैव विविधता प्राधिकरण (NBA) ची कडक तपासणी लागू.",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "जटामांसी (नार्डोस्टॅचिस जटामांसी)",
            description: "संकटग्रस्त हिमालयातील वनस्पती. कडक प्रवेश आणि लाभ वाटप (ABS) अनुपालन अनिवार्य.",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "शुद्ध रासायनिक अर्क (उदा. करक्युमिन ९५%)",
            description: "संपूर्ण वनस्पती नाही. फायटोफार्मास्युटिकल नियम लागू होऊ शकतात.",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "कडुनिंब (अझाडिराक्टा इंडिका)",
            description: "शास्त्रीय सूक्ष्मजीवविरोधी वनस्पती. ऐतिहासिक ईपीओ पेटंट रद्दबातल नमुना; टीकेडीएल पूर्व-कला संरक्षण.",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "हळद / हरिद्रा (करकुमा लोंगा)",
            description: "जखम भरणारे आणि दाहकविरोधी गुणधर्म. सीएसआयआर यूएस पेटंट रद्दबातल नमुना (टीकेडीएल).",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "काश्मिरी केशर (क्रोकस सॅटिव्हस)",
            description: "संरक्षित भौगोलिक संकेत (GI) असलेला मौल्यवान मसाला. कडक सत्यता व शुद्धता मानके.",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "गुग्गुळ (कॉमिफोरा मुकुल)",
            description: "नियमन केलेले ओलिओ-गम-रेझिन. आयुर्वेदिक फार्माकोपिया (API) मानकीकृत गुग्गुळस्टेरोनच्या अधीन.",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "कुटकी (पिक्रोरिझा कुरोआ)",
            description: "CITES परिशिष्ट II आणि जैव विविधता कायद्याच्या कलम ३८ अंतर्गत संकटग्रस्त यादीत समाविष्ट.",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "सर्पगंधा (राउव्होल्फिया सर्पेंटिना)",
            description: "रिसरपिन-युक्त वनस्पती. अनुसूची E(1) आणि कलम ३८ जैव विविधता कायद्याच्या प्रतिबंधित यादीत समाविष्ट.",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "वत्सनाभ / गोड विष (एकोनिटम फेरॉक्स)",
            description: "अनुसूची E(1) विषारी वनस्पती. अनिवार्य शास्त्रीय शोधन आणि लाल लेबल इशारा आवश्यक.",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "भांग / विजया (कॅनॅबिस सॅटिव्हा)",
            description: "अनुसूची E(1) अंमली वनस्पती. एनडीपीएस कायदा, राज्य उत्पादन शुल्क परवाना आणि आयुष अधिसूचनांच्या अधीन.",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "ब्राह्मी (बाकोपा मोनियरी)",
            description: "शास्त्रीय मेध्य रसायन (स्मरणशक्तीवर्धक). मानकीकृत बाकोसाइड चाचणी आणि जड धातू मर्यादांच्या अधीन.",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "त्रिफळा (आमलकी, हरीतकी, बिभीतकी)",
            description: "शास्त्रीय पॉलीहर्बल फॉर्म्युला. पेटंट कायदा कलम ३(p) अंतर्गत पारंपारिक ज्ञान म्हणून संरक्षित.",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "सुवर्ण भस्म (प्रक्रिया केलेली सुवर्ण भस्म)",
            description: "हर्बो-मेटॅलिक रसौषधी. अनुसूची T भाग I-F जीएमपी आणि घटक अशुद्धता मर्यादांच्या अधीन.",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "फॉर्म्युलेशन ज्ञानाचा मूळ स्रोत",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "शास्त्रीय ग्रंथ (उदा. चरक संहिता, सुश्रुत संहिता)",
            description: "नियम १५८B(I)(A) अंतर्गत नवीन सुरक्षितता/परिणामकारकता क्लिनिकल डेटाच्या गरजेतून सूट.",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "मालकीचे मिश्रण (पेटंट आणि प्रोप्रायटरी - P&P)",
            description: "कलम ३(h) आणि नियम १५८B(II) अंतर्गत मानक पेटंट आणि प्रोप्रायटरी औषध नियम लागू.",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "आदिवासी / पारंपारिक समुदाय ज्ञान",
            description: "स्थानिक समुदाय आणि जैव विविधता व्यवस्थापन समित्यांसोबत (BMC) अनिवार्य लाभ-वाटप करार.",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "भारतीय आयुर्वेदिक फार्माकोपिया (API) / AFI मानके",
            description: "ड्रग्ज अँड कॉस्मेटिक्स कायद्याच्या दुसऱ्या अनुसूची अंतर्गत अधिकृत मान्यताप्राप्त फार्माकोपियल मोनोग्राफ.",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "सिद्ध किंवा युनानी शास्त्रीय ग्रंथ",
            description: "सिद्ध किंवा युनानी तिब्ब पद्धतींनुसार प्रथम अनुसूचीमध्ये नमूद अधिकृत ग्रंथ.",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "नवीन इन-हाउस संशोधन व विकास (R&D) / नाविन्यपूर्ण फॉर्म्युलेशन",
            description: "पूर्णपणे नवीन वनस्पती मिश्रण; कलम ३(p)/३(e) द्वारे प्रतिबंधित नसल्यास पेटंटसाठी पात्र.",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "अलिखित वांशिक-वनस्पती शास्त्रीय संकलन (PBR)",
            description: "पीपल्स बायोडायव्हर्सिटी रजिस्टरमध्ये नोंदवलेले; अनिवार्य प्रवेश आणि लाभ वाटप (ABS) करार.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "उत्पादन आणि प्रक्रिया",
    description: "उत्पादनाच्या उत्पादन पद्धती आणि अंतिम प्रत्यक्ष स्वरूपाचा तपशील द्या.",
    fields: [
      {
        name: "processingMethod",
        label: "उत्पादन प्रक्रिया पद्धत",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "कच्चा / चूर्ण / पाण्यात उकळलेले (जलीय अर्क)",
            description: "मानक शास्त्रीय आयुर्वेदिक उत्पादन (कषाय / काढा पद्धत).",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "द्रावक अर्क (अल्कोहोल, हेक्सेन)",
            description: "उर्वरित द्रावक प्रकटीकरण, टीएलसी फिंगरप्रिंटिंग आणि जड धातू चाचणी अनिवार्य.",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "प्रगत रासायनिक विलगीकरण (आयसोलेशन)",
            description: "फायटोफार्मास्युटिकल म्हणून वर्गीकृत. सीडीएससीओ मंजुरी आणि क्लिनिकल चाचण्या आवश्यक.",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "शास्त्रीय किण्वन (आसव आणि अरिष्ट)",
            description: "स्वनिर्मित अल्कोहोल (<१२% v/v); नियम १५१ अल्कोहोल अबकारी आणि औषधी तयारी कायद्याच्या अधीन.",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "सिद्ध तूप / तेल प्रक्रिया (स्नेह कल्पना)",
            description: "शास्त्रीय लिपिड अर्क; खवटपणा, पेरॉक्साइड मूल्य आणि आम्ल मूल्य चाचण्या आवश्यक.",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "शास्त्रीय भस्म निर्मिती (शोधन आणि मारण)",
            description: "रसशास्त्र विषमुक्ती आणि मारण; अनुसूची T नॅनोपार्टिकल आणि जड धातू सुरक्षा मानके लागू.",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "सुपरक्रिटिकल फ्लुइड CO2 अर्क (SCFE)",
            description: "पर्यावरणपूरक द्रावक-मुक्त अर्क; पेटंट कायदा कलम ५ अंतर्गत प्रक्रिया पेटंटसाठी पात्र.",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "नॅनो-लिपोसोमल / नवीन हर्बल औषध वितरण (NDDS)",
            description: "जैव-उपलब्धता वाढवणारी प्रणाली; सीडीएससीओ नवीन औषध / फायटोफार्मास्युटिकल नियमावली लागू.",
          },
        ],
      },
      {
        name: "finalForm",
        label: "अंतिम उत्पादन स्वरूप",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "तोंडी घन औषध (गोळ्या, कॅप्सूल, वटी, गुटिका)",
            description: "अंतर्गत औषध जड धातू मानके, विघटन आणि सूक्ष्मजीव मर्यादांच्या अधीन.",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "तोंडी द्रव (किण्वित आसव, अरिष्ट, सिरप)",
            description: "विशिष्ट गुरुत्व, अल्कोहोल मर्यादा पडताळणी (<१२%), आणि सूक्ष्मजीव चाचणीच्या अधीन.",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "तोंडी चूर्ण / ग्रॅन्युल्स (चूर्ण, क्वाथ चूर्ण)",
            description: "एपीआय मानकांनुसार कण आकार जाळी मानके आणि ओलावा मर्यादा.",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "शास्त्रीय अर्ध-घन (अवलेह, लेह्यम, च्यवनप्राश)",
            description: "साखर/मध आधार; एकूण घन घटक, एचएमएफ आणि साखर सहनशीलता चाचणीच्या अधीन.",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "सिद्ध तेल / तूप (तैल, घृत)",
            description: "तोंडी किंवा बाह्य वापरासाठी; खवटपणा चाचणी, आयोडीन मूल्य आणि साबुनीकरण मानके.",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "स्थानिक / बाह्य अर्ध-घन (क्रीम, जेल, लेप, बाम)",
            description: "अनुसूची M-II अंतर्गत कॉस्मेटिक किंवा एएसयू बाह्य अनुप्रयोगासाठी सुलभ अनुपालन.",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "स्टेरिल थेंब: नासिका / नेत्र (नस्य, नेत्र बिंदू)",
            description: "कडक निर्जंतुकीकरण मानके, कण घटक चाचणी आणि संरक्षक प्रकटीकरण अनिवार्य.",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "आयुर्वेद आहार / वापरण्यास तयार हर्बल अन्न",
            description: "अन्न सुरक्षा आणि मानके (आयुर्वेद आहार) नियम, २०२२ अंतर्गत नियमन.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "कच्च्या मालाचा स्रोत आणि संस्था रचना",
    description: "जैविक संसाधनांचे मूळ क्षेत्र आणि कंपनीची मालकी रचना स्पष्ट करा.",
    fields: [
      {
        name: "sourcingRegion",
        label: "प्रमुख स्रोत क्षेत्र",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "केरळ (उदा. नवारा तांदूळ, मलबार मिरी)",
            description: "भौगोलिक संकेत (GI) संरक्षणाची उच्च शक्यता.",
          },
          {
            value: "Himalayan Belt",
            label: "हिमालयीन पट्टा",
            description: "उच्च उंचीवरील दुर्मिळ वनस्पती. राज्य वन विभागाची कडक देखरेख.",
          },
          {
            value: "Imported from outside India",
            label: "भारताबाहेरून आयात केलेले",
            description: "भारताच्या जैविक विविधता कायद्यातून सूट, परंतु वनस्पती विलगीकरण आणि आयात परवान्यांच्या अधीन.",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "पश्चिम घाट जैव विविधता हॉटस्पॉट",
            description: "स्थानिक दुर्मिळ प्रजाती; राज्य जैव विविधता मंडळाची (SBB) कडक तपासणी व कलम ७ पूर्व-सूचना.",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "मध्य आणि पूर्व आदिवासी पट्टा (बस्तर, छोटा नागपूर, ओडिशा)",
            description: "आदिवासी ज्ञानाचे समृद्ध क्षेत्र; जैव विविधता व्यवस्थापन समित्यांसोबत (BMC) कलम ४१ ABS.",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "प्रमाणित शेतजमीन / कृषी-वानिकी",
            description: "जैव विविधता (सुधारणा) कायदा २०२३ अंतर्गत काही एबीएस तरतुदींतून सूट मिळालेली प्रमाणित शेती.",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "सामान्य व्यापार वस्तू (कलम ४० अंतर्गत NTC)",
            description: "उदा. हळद, आले जे शुद्ध व्यावसायिक वस्तू आहेत; कमोडिटी निर्यातीवर एबीएसमधून सूट.",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "संस्थेची मालकी रचना",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "१००% भारतीय नागरिक / भारतीय मालकीची संस्था",
            description: "जैव विविधता कायदा कलम ७ लागू (राज्य जैव विविधता मंडळाला पूर्व-सूचना).",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "विदेशी इक्विटी / एफडीआय / एनआरआय भागभांडवल असलेली संस्था",
            description: "जैव विविधता कायदा कलम ३(२) लागू (फॉर्म १ द्वारे एनबीए ची अनिवार्य पूर्व-परवानगी).",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "विदेशी कॉर्पोरेशन / बहुराष्ट्रीय कंपनी (भारताबाहेरील)",
            description: "कलम ३(१) चे पूर्ण निर्बंध; एनबीए ची पूर्व-मंजुरी आणि कडक एबीएस करार आवश्यक.",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "नोंदणीकृत आयुष चिकित्सक (वैद्य / पारंपारिक उपचारक)",
            description: "सुधारित जैव विविधता कायदा २०२३ नुसार वैयक्तिक सरावासाठी एसबीबी सूचना व एबीएस मधून सूट.",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "शेतकरी उत्पादक संस्था (FPO) / स्थानिक ग्रामीण उत्पादक सहकारी संस्था",
            description: "सुधारित कायद्याच्या कलम ७ च्या तरतुदीनुसार स्थानिक उत्पादक एबीएसमधून मुक्त.",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "भारत सरकार / CSIR / ICMR सोबत सहयोगी संशोधन",
            description: "केंद्र सरकारच्या मंजुरीच्या अधीन राहून कलम ५ सहयोगी संशोधन सवलतीसाठी पात्र.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "लेबलिंग आणि आरोग्य दावे",
    description: "उत्पादनाच्या विपणनासाठी आणि लेबलवर केल्या जाणाऱ्या दाव्यांची निवड करा.",
    fields: [
      {
        name: "healthClaims",
        label: "लक्षित आरोग्य दावे",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "रोगप्रतिकारक शक्ती आणि सामान्य आरोग्य संवर्धन",
            description: "सुरक्षित दावा. एएससीआय (ASCI) संहितेनुसार अनुज्ञेय.",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'त्वचेची चमक आणि कांती सुधारणे ("वर्ण्य")',
            description: "त्वचा आरोग्य आणि स्थानिक उपयोगासाठी सुरक्षित कॉस्मेटिक दावा.",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "मधुमेह / कर्करोग / अंधत्व पूर्ण बरे करणे",
            description: "कडक बंदी. औषधे आणि चमत्कारिक उपाय कायदा (DMR) आणि अनुसूची J चे थेट उल्लंघन.",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "क्लिनिकली सिद्ध / सीटीआरआय नोंदणीकृत चाचणी",
            description: "सीटीआरआय नोंदणीकृत मानवी क्लिनिकल चाचणी डेटाची अधिकृत नोंद असणे आवश्यक.",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'शास्त्रीय पुनरुज्जीवन आणि शक्तीवर्धन ("रसायन" / "बल्य")',
            description: "प्रथम अनुसूची ग्रंथांनुसार मान्यताप्राप्त शास्त्रीय संकेत; चाचणी अनिवार्य नाही.",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'पचन आणि चयापचय आरोग्य ("दीपन" / "पाचन")',
            description: "आयुष आणि आयुर्वेद आहार नियमांनुसार स्वीकार्य रचना-कार्य दावा.",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "सांध्यांची हालचाल आणि वेदनामुक्ती (लक्षणमुक्ती)",
            description: "स्वीकार्य लक्षणमुक्ती दावा; संधिवात कायमचा बरा करण्याचा दावा करणे डीएमआर कायद्यात प्रतिबंधित.",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'तणावमुक्ती, स्मरणशक्ती आणि शांत झोप सहाय्य ("मेध्य")',
            description: "मोनोग्राफद्वारे समर्थित असल्यास एएससीआय मार्गदर्शक तत्त्वांनुसार स्वीकार्य दावा.",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"१००% नैसर्गिक / शुद्ध आयुर्वेदिक / शून्य दुष्परिणाम"',
            description: "एएससीआय चौकशीचा विषय: कोणत्याही आरोग्य उत्पादनासाठी 'शून्य दुष्परिणाम' दावा करणे पूर्णपणे निषिद्ध आहे.",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"लठ्ठपणा / उच्च रक्तदाब / हृदयरोग यावर कायमस्वरूपी उपचार"',
            description: "औषधे आणि चमत्कारिक उपाय कायद्याच्या अनुसूची (बाब १८, २७, ४१) अंतर्गत कडक प्रतिबंधित.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "लक्ष्य बाजारपेठ आणि परवाना",
    description: "उत्पादन वितरण आणि बौद्धिक संपदा संरक्षणासाठी लक्ष्य बाजारपेठांची निवड करा.",
    fields: [
      {
        name: "targetMarkets",
        label: "लक्ष्य बाजारपेठ आणि परवाना",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "स्थानिक भारत: शास्त्रीय आयुष औषध (फॉर्म २५D परवाना)",
            description: "नियम १५८B(I) अंतर्गत शास्त्रीय संदर्भ ग्रंथासह अनुसूची T जीएमपी मानकांनुसार उत्पादन.",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "स्थानिक भारत: पेटंट किंवा प्रोप्रायटरी (P&P) औषध",
            description: "नियम १५८B(II) द्वारे नियंत्रित; प्रकाशित साहित्य किंवा प्रायोगिक क्लिनिकल डेटा आवश्यक.",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "स्थानिक भारत: आयुर्वेद आहार / एफएसएसएआय न्यूट्रास्युटिकल",
            description: "अन्न सुरक्षा आणि मानके नियम २०२२ अंतर्गत नियमन; आजार बरा करण्याचा दावा करता येत नाही.",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "अमेरिका: यूएस एफडीए आहारातील पूरक (DSHEA १९९४)",
            description: "21 CFR भाग १११ सीजीएमपी आणि अनिवार्य एफडीए अस्वीकरण विधान आवश्यक.",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "अमेरिका: MoCRA स्थानिक सौंदर्यप्रसाधन",
            description: "MoCRA २०२२ अंतर्गत अनिवार्य एफडीए सुविधा नोंदणी, उत्पादन यादी आणि सुरक्षा प्रमाणीकरण.",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "युरोपीय युनियन: पारंपारिक हर्बल औषधी उत्पादने (THMPD)",
            description: "३० वर्षांच्या पारंपारिक औषधी वापराचे दस्तऐवजीकरण आवश्यक (ईयू मध्ये १५ वर्षांसह).",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "युरोपीय युनियन: नोव्हेल फूड नियमन",
            description: "मे १९९७ पूर्वी युरोपमध्ये वापराचा इतिहास नसलेल्या वनस्पती प्रजातींसाठी आवश्यक.",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "भारतीय पेटंट (IPO) साठी अर्ज",
            description: "कलम ६ अंतर्गत एनबीएकडून फॉर्म III पूर्व-मंजुरी आवश्यक; कलम ३(p) टीकेडीएल तपासणीच्या अधीन.",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "जागतिक पेटंट (PCT / आंतरराष्ट्रीय कार्यालये) फाइलिंग",
            description: "कलम ६ अंतर्गत अनिवार्य पूर्व एनबीए मंजुरी; अनुवांशिक स्रोत प्रकटीकरणावर WIPO कराराचे अनुपालन.",
          },
        ],
      },
    ],
  },
];

const TAMIL_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "கலவை மற்றும் செயல்படு மூலப்பொருட்கள்",
    description: "உங்கள் தயாரிப்பின் முக்கிய மூலப்பொருட்கள் மற்றும் சூத்திரத்தின் பாரம்பரிய அறிவு மூலத்தை வரையறுக்கவும்.",
    fields: [
      {
        name: "ingredients",
        label: "முக்கிய செயல்படு மூலப்பொருட்கள் (பொருட்கள்)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "அஸ்வகந்தா (விதானியா சோம்னிஃபெரா)",
            description: "பொதுவான அடாப்டோஜென். நிலையான ஆயுஷ் விதிகளின் கீழ் பொதுவாக பாதுகாப்பானது.",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "துளசி (ஓசிமம் சாங்டம்)",
            description: "புனித துளசி. பரவலாக பயிரிடப்படுகிறது, குறைந்த ஒழுங்குமுறை ஆபத்து.",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "செஞ்சந்தனம் (டெரோகார்பஸ் சாண்டலினஸ்)",
            description: "அதிக அச்சுறுத்தலுக்கு உள்ளானது. CITES மற்றும் தேசிய பல்லுயிர் ஆணையத்தின் (NBA) கடுமையான ஆய்வுக்கு உட்பட்டது.",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "ஜடாமாஞ்சில் (நார்டோஸ்டாச்சிஸ் ஜடாமாஞ்சி)",
            description: "அழிந்துவரும் இமயமலை மூலிகை. கடுமையான அணுகல் மற்றும் பயன் பகிர்வு (ABS) இணக்கம் கட்டாயம்.",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "சுத்திகரிக்கப்பட்ட இரசாயன சாறு (எ.கா. குர்குமின் 95%)",
            description: "முழு மூலிகை அல்ல. பைட்டோபார்மாசூட்டிகல் விதிமுறைகள் பொருந்தக்கூடும்.",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "வேம்பு (அசாடிராக்டா இண்டிகா)",
            description: "செம்மொழி நுண்ணுயிர் எதிர்ப்பு மூலிகை. வரலாற்று சிறப்புமிக்க EPO காப்புரிமை ரத்து முன்னுதாரணம்; TKDL முந்தைய கலை பாதுகாப்பு.",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "மஞ்சள் / ஹரித்ரா (குர்குமா லோங்கா)",
            description: "காயம் குணப்படுத்தும் மற்றும் அழற்சி எதிர்ப்பு பண்புகள். CSIR அமெரிக்க காப்புரிமை ரத்து முன்னுதாரணம் (TKDL).",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "காஷ்மீரி குங்குமப்பூ (குரோக்கஸ் சட்டைவஸ்)",
            description: "பாதுகாக்கப்பட்ட புவிசார் குறியீடு (GI) கொண்ட மதிப்புமிக்க மசாலா. கடுமையான நம்பகத்தன்மை மற்றும் தூய்மை தரநிலைகள்.",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "குக்குலு (கொம்மிஃபோரா முகுல்)",
            description: "ஒழுங்குபடுத்தப்பட்ட பிசின். ஆயுர்வேத பார்மகோபியா (API) கீழ் தரப்படுத்தப்பட்ட குக்குல்ஸ்டிரோன்களுக்கு உட்பட்டது.",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "கட்கி (பிக்ரோரைசா குரோவா)",
            description: "CITES இணைப்பு II மற்றும் பல்லுயிர் சட்டத்தின் பிரிவு 38-ன் ஆபத்தான உயிரினங்கள் பட்டியலில் சேர்க்கப்பட்டுள்ளது.",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "சர்ப்பகந்தி (ராவோல்ஃபியா சர்பென்டினா)",
            description: "ரெசர்பைன் கொண்ட தாவரம். அட்டவணை E(1) மற்றும் பிரிவு 38 பல்லுயிர் சட்டத்தின் தடைசெய்யப்பட்ட பட்டியலில் உள்ளது.",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "வத்ஸநாபி / வசநாபி (அகோனிட்டம் ஃபெராக்ஸ்)",
            description: "அட்டவணை E(1) விஷ மூலிகை. கட்டாய பாரம்பரிய சுத்திகரிப்பு (சோதனை) மற்றும் சிவப்பு எச்சரிக்கை லேபிள் தேவை.",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "கஞ்சா / விஜயா (கன்னாபிஸ் சட்டைவா)",
            description: "அட்டவணை E(1) போதைப்பொருள் தாவரம். NDPS சட்டம், மாநில கலால் உரிமம் மற்றும் ஆயுஷ் அறிவிப்புகளுக்கு உட்பட்டது.",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "பிராமி / வல்லாரை வகை (பாகோபா மோனியேரி)",
            description: "செம்மொழி மேத்ய ரசாயனம் (நினைவாற்றல் ஊக்கி). தரப்படுத்தப்பட்ட பாகோசைடு சோதனை மற்றும் கனரக உலோக வரம்புகளுக்கு உட்பட்டது.",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "திரிபலா (நெல்லிக்காய், கடுக்காய், தான்றிக்காய்)",
            description: "பாரம்பரிய பாலிஹெர்பல் கலவை. காப்புரிமைச் சட்டம் பிரிவு 3(p)-ன் கீழ் பாரம்பரிய அறிவாக பாதுகாக்கப்படுகிறது.",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "சுவர்ண பஸ்மம் (சுத்திகரிக்கப்பட்ட தங்க பஸ்மம்)",
            description: "மூலிகை-உலோக ரசௌஷதம். அட்டவணை T பகுதி I-F GMP மற்றும் தனிம தூய்மையின்மை வரம்புகளுக்கு உட்பட்டது.",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "சூத்திர அறிவின் மூலம்",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "செம்மொழி நூல்கள் (எ.கா. சரக சம்ஹிதை, சுஸ்ருத சம்ஹிதை)",
            description: "விதி 158B(I)(A) கீழ் புதிய பாதுகாப்பு/செயல்திறன் மருத்துவத் தரவுத் தேவைகளிலிருந்து விலக்கு அளிக்கப்பட்டுள்ளது.",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "உரிமக் கலவை (Patent & Proprietary - P&P)",
            description: "பிரிவு 3(h) மற்றும் விதி 158B(II) கீழ் நிலையான காப்புரிமை மற்றும் தனியுரிம மருந்து விதிகள் பொருந்தும்.",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "பழங்குடியினர் / பாரம்பரிய சமூக அறிவு",
            description: "உள்ளூர் சமூகங்கள் மற்றும் பல்லுயிர் மேலாண்மைக் குழுக்களுடன் (BMC) கட்டாய பயன் பகிர்வு ஒப்பந்தம்.",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "இந்திய ஆயுர்வேத பார்மகோபியா (API) / AFI தரநிலைகள்",
            description: "மருந்துகள் மற்றும் அழகுசாதனப் பொருட்கள் சட்டத்தின் இரண்டாவது அட்டவணையின் கீழ் அங்கீகரிக்கப்பட்ட பார்மகோபியல் மோனோகிராஃப்கள்.",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "சித்த அல்லது யுனானி செம்மொழி நூல்கள்",
            description: "சித்த அல்லது யுனானி மருத்துவ முறைகளின் முதல் அட்டவணையில் பட்டியலிடப்பட்டுள்ள அதிகாரப்பூர்வ நூல்கள்.",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "புதிய உள்நாட்டு R&D / புதுமையான உருவாக்கம்",
            description: "முற்றிலும் புதிய தாவரவியல் கலவை; பிரிவு 3(p)/3(e) மூலம் தடைசெய்யப்படாவிட்டால் காப்புரிமை பெற தகுதியுடையது.",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "குறியீடு செய்யப்படாத இனத்தாவரவியல் சேகரிப்புகள் (PBR)",
            description: "மக்கள் பல்லுயிர் பதிவேடுகளில் ஆவணப்படுத்தப்பட்டுள்ளது; கட்டாய அணுகல் மற்றும் பயன் பகிர்வு (ABS) ஒப்பந்தம்.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "உற்பத்தி மற்றும் செயலாக்கம்",
    description: "தயாரிப்பின் உற்பத்தி செயலாக்க முறைகள் மற்றும் இறுதி உடல் வடிவத்தை விவரிக்கவும்.",
    fields: [
      {
        name: "processingMethod",
        label: "உற்பத்தி செயல்முறை",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "மூல / நொறுக்கப்பட்ட / நீரில் கொதிக்கவைத்த (நீர்மக் கரைசல்)",
            description: "நிலையான பாரம்பரிய ஆயுர்வேத உற்பத்தி (கஷாயம் / குடிநீர் செயல்முறை).",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "கரைப்பான் பிரித்தெடுத்தல் (ஆல்கஹால், ஹெக்ஸேன்)",
            description: "மீதமுள்ள கரைப்பான் வெளிப்பாடு, TLC கைரேகை மற்றும் கனரக உலோக சோதனை கட்டாயம்.",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "மேம்பட்ட இரசாயனப் பிரித்தெடுத்தல் (ஐசோலேஷன்)",
            description: "பைட்டோபார்மாசூட்டிகல் என வகைப்படுத்தப்படுகிறது. CDSCO ஒப்புதல் மற்றும் மருத்துவ பரிசோதனைகள் தேவை.",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "பாரம்பரிய நொதித்தல் (ஆசவம் & அரிஷ்டம்)",
            description: "சுயமாக உருவாகும் ஆல்கஹால் (<12% v/v); விதி 151 ஆல்கஹால் கலால் மற்றும் மருத்துவ தயாரிப்புகள் சட்டத்தின் கீழ் வருகிறது.",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "மருந்து நெய் / எண்ணெய் செயலாக்கம் (சினேக கல்பனை)",
            description: "பாரம்பரிய கொழுப்புப் பிரித்தெடுத்தல்; பெராக்சைடு மதிப்பு மற்றும் அமில மதிப்பு சோதனைகள் தேவை.",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "பாரம்பரிய பஸ்மம் / சாம்பல் (சோதனை & மாரணம்)",
            description: "ரசசாஸ்திர நச்சுநீக்கம்; அட்டவணை T நானோ துகள்கள் மற்றும் கனரக உலோக பாதுகாப்பு இணக்கம்.",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "சூப்பர்கிரிட்டிகல் ஃப்ளூயிட் CO2 பிரித்தெடுத்தல் (SCFE)",
            description: "பசுமை கரைப்பான் இல்லாத பிரித்தெடுத்தல்; காப்புரிமைச் சட்டம் பிரிவு 5-ன் கீழ் செயல்முறை காப்புரிமைக்கு தகுதியானது.",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "நானோ-லிபோசோமால் / புதிய மூலிகை மருந்து வழங்கல் (NDDS)",
            description: "உயிரியல் கிடைக்கும் தன்மையை மேம்படுத்துதல்; CDSCO புதிய மருந்து / பைட்டோபார்மாசூட்டிகல் விதிகளை ஈர்க்கிறது.",
          },
        ],
      },
      {
        name: "finalForm",
        label: "இறுதி தயாரிப்பு வடிவம்",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "வாய்வழி திடப்பொருள் (மாத்திரைகள், காப்ஸ்யூல்கள், வதி, குளிகைகள்)",
            description: "உள்நாட்டு மருந்து கனரக உலோக தரநிலைகள், கரைதல் மற்றும் நுண்ணுயிர் வரம்புகளுக்கு உட்பட்டது.",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "வாய்வழி திரவம் (நொதித்த ஆசவம், அரிஷ்டம், சிரப்)",
            description: "குறிப்பிட்ட அடர்த்தி, ஆல்கஹால் வரம்பு சரிபார்ப்பு (<12%), மற்றும் நுண்ணுயிர் சோதனைக்கு உட்பட்டது.",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "வாய்வழி தூள் / துகள்கள் (சூர்ணம், கஷாய சூர்ணம்)",
            description: "API கீழ் துகள் அளவு மற்றும் ஈரப்பத வரம்புகள்.",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "பாரம்பரிய அரை-திடப்பொருள் (அவலேகம், லேகியம், சியவன்பிரஷ்)",
            description: "சர்க்கரை/தேன் அடிப்படை; மொத்த திடப்பொருட்கள், HMF மற்றும் சர்க்கரை சகிப்புத்தன்மை சோதனை.",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "மருந்து எண்ணெய் / நெய் (தைலம், கிருதம்)",
            description: "வாய்வழி அல்லது வெளிப்புற பயன்பாடு; அயோடின் மதிப்பு மற்றும் சோப்பாக்கத் தரநிலைகள்.",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "வெளிப்புற அரை-திடப்பொருள் (கிரீம், ஜெல், லேபம், பாம்)",
            description: "அட்டவணை M-II கீழ் அழகுசாதனம் அல்லது ASU வெளிப்புற பயன்பாடாக எளிய இணக்கம்.",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "மலட்டு சொட்டு மருந்துகள்: மூக்கு / கண் (நசியம், நேத்ர பிந்து)",
            description: "கடுமையான மலட்டுத்தன்மை தரநிலைகள், துகள் பொருள் சோதனை மற்றும் பாதுகாப்பாளர் வெளிப்பாடு கட்டாயம்.",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "ஆயுர்வேத ஆஹார் / நுகரக்கூடிய மூலிகை உணவு",
            description: "உணவுப் பாதுகாப்பு மற்றும் தரநிலைகள் (ஆயுர்வேத ஆஹார்) விதிமுறைகள், 2022-ன் கீழ் ஒழுங்குபடுத்தப்படுகிறது.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "மூலப்பொருள் ஆதாரம் மற்றும் நிறுவன உரிமை",
    description: "உயிரியல் வளங்களின் தோற்றப் பகுதி மற்றும் நிறுவனத்தின் உரிமை கட்டமைப்பைக் குறிப்பிடவும்.",
    fields: [
      {
        name: "sourcingRegion",
        label: "முக்கிய மூலப்பொருள் ஆதாரம் பெறும் பகுதி",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "கேரளா (எ.கா. ஞவர அரிசி, மலபார் மிளகு)",
            description: "புவிசார் குறியீடு (GI) பாதுகாப்பிற்கான அதிக வாய்ப்பு.",
          },
          {
            value: "Himalayan Belt",
            label: "இமயமலைப் பகுதி",
            description: "உயர் உயர தாவரங்கள். மாநில வனத்துறையின் கடுமையான கண்காணிப்பு.",
          },
          {
            value: "Imported from outside India",
            label: "இந்தியாவிற்கு வெளியிலிருந்து இறக்குமதி செய்யப்பட்டது",
            description: "இந்திய பல்லுயிர் சட்டத்திலிருந்து விலக்கு பெற்றது, ஆனால் தாவர தனிமைப்படுத்தல் மற்றும் இறக்குமதி அனுமதிக்கு உட்பட்டது.",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "மேற்குத் தொடர்ச்சி மலை பல்லுயிர் மையம்",
            description: "பிராந்தியத்திற்கே உரிய சிறப்பு இனங்கள்; மாநில பல்லுயிர் வாரியத்தின் (SBB) கடுமையான ஆய்வு மற்றும் பிரிவு 7 முன் அறிவிப்பு.",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "மத்திய மற்றும் கிழக்கு பழங்குடியினர் பகுதிகள் (பஸ்தர், சோட்டா நாக்பூர், ஒடிசா)",
            description: "பழங்குடியினர் அறிவு நிறைந்த பகுதி; பல்லுயிர் மேலாண்மைக் குழுக்களுடன் (BMC) பிரிவு 41 ABS.",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "சான்றளிக்கப்பட்ட விவசாய நிலம் / வேளாண் காடுகள்",
            description: "பல்லுயிர் (திருத்த) சட்டம் 2023-ன் கீழ் சில ABS விதிகளிலிருந்து விலக்கு அளிக்கப்பட்ட சான்றளிக்கப்பட்ட விவசாயம்.",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "பொதுவாக வர்த்தகம் செய்யப்படும் பொருட்கள் (பிரிவு 40 கீழ் NTC)",
            description: "எ.கா. வணிகப் பொருளாக மட்டுமே உள்ள மஞ்சள், இஞ்சி; பொருட்கள் ஏற்றுமதிக்கு ABS-லிருந்து விலக்கு.",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "நிறுவன உரிமை கட்டமைப்பு",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "100% இந்திய குடிமக்கள் / இந்தியருக்குச் சொந்தமான நிறுவனம்",
            description: "பல்லுயிர் சட்டம் பிரிவு 7 பொருந்தும் (மாநில பல்லுயிர் வாரியத்திற்கு முன் தகவல் அளித்தல்).",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "வெளிநாட்டு பங்குகள் / FDI / NRI பங்குகளைக் கொண்டது",
            description: "பல்லுயிர் சட்டம் பிரிவு 3(2) பொருந்தும் (படிவம் 1 மூலம் NBA-ன் கட்டாய முன் அனுமதி).",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "வெளிநாட்டு நிறுவனம் / பன்னாட்டு நிறுவனம் (இந்தியாவிற்கு வெளியே)",
            description: "பிரிவு 3(1)-ன் முழுமையான கட்டுப்பாடுகள்; NBA முன் அனுமதியும் கடுமையான ABS ஒப்பந்தமும் தேவை.",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "பதிவுசெய்த ஆயுஷ் மருத்துவர் (வைத்தியர் / பாரம்பரிய மருத்துவர்)",
            description: "திருத்தப்பட்ட பல்லுயிர் சட்டம் 2023-ன் கீழ் தனிப்பட்ட நடைமுறைக்கு SBB தகவல் மற்றும் ABS-லிருந்து விலக்கு.",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "விவசாய உற்பத்தியாளர் அமைப்பு (FPO) / கிராம கூட்டுறவு சங்கம்",
            description: "திருத்தப்பட்ட சட்டத்தின் பிரிவு 7-ன் கீழ் உள்ளூர் விவசாயிகள் ABS-லிருந்து விலக்கு பெற்றுள்ளனர்.",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "இந்திய அரசு / CSIR / ICMR உடன் கூட்டு ஆராய்ச்சி",
            description: "மத்திய அரசின் ஒப்புதலுக்கு உட்பட்டு பிரிவு 5 கூட்டு ஆராய்ச்சி விலக்குக்கு தகுதியுடையது.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "லேபிளிங் மற்றும் சுகாதார உரிமைகோரல்கள்",
    description: "தயாரிப்பு சந்தைப்படுத்தல் மற்றும் லேபிளில் குறிப்பிடப்படும் உரிமைகோரல்களைத் தேர்ந்தெடுக்கவும்.",
    fields: [
      {
        name: "healthClaims",
        label: "இலக்கு சுகாதார உரிமைகோரல்கள்",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "நோய் எதிர்ப்பு சக்தி மற்றும் பொது ஆரோக்கியத்தை மேம்படுத்துகிறது",
            description: "பாதுகாப்பான உரிமைகோரல். ASCI விதிகளுக்கு உட்பட்டது.",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'சரும பொலிவு மற்றும் பிரகாசத்தை மேம்படுத்துகிறது ("வர்ண்யம்")',
            description: "தோல் ஆரோக்கியம் மற்றும் வெளிப்புற தயாரிப்புகளுக்கான பாதுகாப்பான அழகுசாதன உரிமைகோரல்.",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "நீரிழிவு / புற்றுநோய் / பார்வை இழப்பை முழுமையாகக் குணப்படுத்துகிறது",
            description: "கடுமையாக தடைசெய்யப்பட்டுள்ளது. மருந்துகள் மற்றும் மாய தீர்வுகள் சட்டம் (DMR) மற்றும் அட்டவணை J மீறல்.",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "மருத்துவ ரீதியாக நிரூபிக்கப்பட்டது / CTRI பதிவுசெய்த சோதனை",
            description: "CTRI பதிவுசெய்யப்பட்ட மனித மருத்துவ பரிசோதனைத் தரவு ஆவணங்கள் கட்டாயம் இருக்க வேண்டும்.",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'செம்மொழி புத்துணர்ச்சி மற்றும் வலிமை ("ரசாயனம்" / "பல்யம்")',
            description: "முதல் அட்டவணை நூல்களின் கீழ் அங்கீகரிக்கப்பட்ட பாரம்பரிய மருத்துவக் குறியீடுகள்; சோதனை கட்டாயமில்லை.",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'செரிமானம் மற்றும் வளர்சிதை மாற்ற ஆரோக்கியம் ("தீபனம்" / "பாசனம்")',
            description: "ஆயுஷ் மற்றும் ஆயுர்வேத ஆஹார் விதிகளின் கீழ் ஏற்றுக்கொள்ளக்கூடிய கட்டமைப்பு-செயல்பாட்டு உரிமைகோரல்.",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "மூட்டு இயக்கம் மற்றும் வலி நிவாரணம் (அறிகுறி நிவாரணம்)",
            description: "ஏற்றுக்கொள்ளக்கூடிய அறிகுறி நிவாரண உரிமைகோரல்; மூட்டுவலியை நிரந்தரமாகக் குணப்படுத்துவதாகக் கூறுவது DMR சட்டத்தில் தடைசெய்யப்பட்டுள்ளது.",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'மன அழுத்த நிவாரணம், நினைவாற்றல் மற்றும் தூக்க ஆதரவு ("மேத்யம்")',
            description: "மோனோகிராஃப்களால் ஆதரிக்கப்படும் போது ASCI வழிகாட்டுதல்களின் கீழ் ஏற்றுக்கொள்ளக்கூடிய உரிமைகோரல்.",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"100% இயற்கையானது / தூய ஆயுர்வேதம் / பக்கவிளைவுகள் இல்லை"',
            description: "ASCI ஆய்வுக்கு உட்பட்டது: எந்தவொரு சுகாதார தயாரிப்புக்கும் 'பக்கவிளைவுகள் இல்லை' எனக் கூறுவது முற்றிலும் தடைசெய்யப்பட்டுள்ளது.",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"உடல் பருமன் / உயர் இரத்த அழுத்தம் / இதய நோய்க்கு நிரந்தர தீர்வு"',
            description: "மருந்துகள் மற்றும் மாய தீர்வுகள் சட்டத்தின் அட்டவணை (வரிசை 18, 27, 41) கீழ் கடுமையாக தடைசெய்யப்பட்டுள்ளது.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "இலக்கு உலகளாவிய சந்தைகள்",
    description: "தயாரிப்பு விநியோகம் மற்றும் அறிவுசார் சொத்துரிமை பாதுகாப்பிற்கான இலக்கு சந்தைகளைத் தேர்ந்தெடுக்கவும்.",
    fields: [
      {
        name: "targetMarkets",
        label: "இலக்கு சந்தைகள் மற்றும் உரிமங்கள்",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "உள்நாட்டு இந்தியா: பாரம்பரிய ஆயுஷ் மருந்து (படிவம் 25D உரிமம்)",
            description: "விதி 158B(I) கீழ் பாரம்பரிய உரை குறிப்புடன் அட்டவணை T GMP கீழ் உற்பத்தி செய்யப்படுகிறது.",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "உள்நாட்டு இந்தியா: காப்புரிமை அல்லது தனியுரிம (P&P) மருந்து",
            description: "விதி 158B(II) ஆல் நிர்வகிக்கப்படுகிறது; வெளியிடப்பட்ட இலக்கியம் அல்லது ஆரம்ப மருத்துவத் தரவு தேவை.",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "உள்நாட்டு இந்தியா: ஆயுர்வேத ஆஹார் / FSSAI நியூட்ராசூட்டிகல்",
            description: "உணவுப் பாதுகாப்பு மற்றும் தரநிலைகள் ஒழுங்குமுறை 2022 கீழ் கட்டுப்படுத்தப்படுகிறது; நோயைக் குணப்படுத்துவதாகக் கூற முடியாது.",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "அமெரிக்கா: US FDA உணவு துணைப்பொருள் (DSHEA 1994)",
            description: "21 CFR பகுதி 111 cGMP மற்றும் கட்டாய FDA மறுப்பு அறிக்கை தேவை.",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "அமெரிக்கா: MoCRA வெளிப்புற அழகுசாதனப் பொருள்",
            description: "MoCRA 2022 கீழ் கட்டாய FDA வசதி பதிவு, தயாரிப்பு பட்டியல் மற்றும் பாதுகாப்பு சான்றளிப்பு.",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "ஐரோப்பிய ஒன்றியம்: பாரம்பரிய மூலிகை மருத்துவப் பொருட்கள் (THMPD)",
            description: "30 வருட பாரம்பரிய மருத்துவ பயன்பாட்டு ஆவணங்கள் தேவை (ஐரோப்பிய ஒன்றியத்தில் 15 ஆண்டுகள் உட்பட).",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "ஐரோப்பிய ஒன்றியம்: நாவல் உணவு ஒழுங்குமுறை",
            description: "மே 1997-க்கு முன் ஐரோப்பிய ஒன்றியத்தில் பயன்பாட்டு வரலாறு இல்லாத தாவர இனங்களுக்கு தேவை.",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "இந்திய காப்புரிமைக்கு (IPO) விண்ணப்பித்தல்",
            description: "பிரிவு 6-ன் கீழ் NBA-விடமிருந்து படிவம் III முன் ஒப்புதல் தேவை; பிரிவு 3(p) TKDL ஆய்வுக்கு உட்பட்டது.",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "உலகளாவிய காப்புரிமை (PCT / சர்வதேச அலுவலகங்கள்) விண்ணப்பம்",
            description: "பிரிவு 6-ன் கீழ் கட்டாய முன் NBA ஒப்புதல்; மரபணு மூல வெளிப்படுத்தல் மீதான WIPO ஒப்பந்த இணக்கம்.",
          },
        ],
      },
    ],
  },
];

export function getLocalizedModules(lang: Language): LocalizedModule[] {
  if (lang === "hi") {
    return HINDI_MODULES;
  }
  if (lang === "mr") {
    return MARATHI_MODULES;
  }
  if (lang === "ta") {
    return TAMIL_MODULES;
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
