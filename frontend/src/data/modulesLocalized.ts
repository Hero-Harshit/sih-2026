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

const TELUGU_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "కూర్పు మరియు క్రియాశీల పదార్థాలు",
    description: "మీ ఉత్పత్తి యొక్క ముఖ్యమైన క్రియాశీల పదార్థాలు మరియు ఫార్ములేషన్ యొక్క సాంప్రదాయ విజ్ఞాన మూలాన్ని నిర్వచించండి.",
    fields: [
      {
        name: "ingredients",
        label: "ముఖ్య క్రియాశీల పదార్థాలు (పదార్థాలు)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "అశ్వగంధ (విథానియా సోమ్నిఫెరా)",
            description: "సాధారణ అడాప్టోజెన్. ప్రామాణిక ఆయుష్ నిబంధనల ప్రకారం సాధారణంగా సురక్షితం.",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "తులసి (ఆసిమమ్ సాంక్టమ్)",
            description: "పవిత్ర తులసి. విస్తృతంగా సాగు చేయబడుతుంది, తక్కువ నియంత్రణ ప్రమాదం.",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "ఎర్ర చందనం (టెరోకార్పస్ శాంటాలినస్)",
            description: "తీవ్ర ప్రమాదంలో ఉన్న జాతి. CITES మరియు జాతీయ జీవ వైవిధ్య అథారిటీ (NBA) కఠిన నిఘా వర్తిస్తుంది.",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "జటామాంసి (నార్డోస్టాచిస్ జటామాంసి)",
            description: "అంతరించిపోతున్న హిమాలయ మూలిక. కఠినమైన యాక్సెస్ మరియు బెనిఫిట్ షేరింగ్ (ABS) సమ్మతి తప్పనిసరి.",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "శుద్ధి చేసిన రసాయన సారం (ఉదా. కర్కుమిన్ 95%)",
            description: "పూర్తి మూలిక కాదు. ఫైటోఫార్మాస్యూటికల్ నిబంధనలు వర్తించవచ్చు.",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "వేప (అజాడిరచ్టా ఇండికా)",
            description: "శాస్త్రీయ యాంటీమైక్రోబియల్ మూలిక. చారిత్రక EPO పేటెంట్ రద్దు పూర్వాపరాలు; TKDL ముందస్తు కళ రక్షణ.",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "పసుపు / హరిద్ర (కర్కుమా లోంగా)",
            description: "గాయాలను నయం చేసే మరియు యాంటీ ఇన్‌ఫ్లమేటరీ లక్షణాలు. CSIR యుఎస్ పేటెంట్ రద్దు నిదర్శనం (TKDL).",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "కాశ్మీరీ కుంకుమపువ్వు (క్రోకస్ సటైవస్)",
            description: "రక్షిత భౌగోళిక సూచిక (GI) కలిగిన విలువైన మసాలా. కఠినమైన ప్రామాణికత మరియు స్వచ్ఛత ప్రమాణాలు.",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "గుగ్గులు (కమ్మిఫోరా ముకుల్)",
            description: "నియంత్రిత రెసిన్. ఆయుర్వేద ఫార్మకోపోయియా (API) ప్రకారం ప్రామాణిక గుగ్గుల్‌స్టెరోన్‌లకు లోబడి ఉంటుంది.",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "కుట్కి (పిక్రోరైజా కుర్రోవా)",
            description: "CITES అపెండిక్స్ II మరియు జీవ వైవిధ్య చట్టం సెక్షన్ 38 కింద అంతరించిపోతున్న జాతుల జాబితాలో చేర్చబడింది.",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "సర్పగంధ (రౌవోల్ఫియా సర్పెంటినా)",
            description: "రెసెర్పైన్ కలిగిన మొక్క. షెడ్యూల్ E(1) మరియు సెక్షన్ 38 జీవ వైవిధ్య చట్టం నిషేధిత జాబితాలో ఉంది.",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "వత్సనాభ / నాభి (అకోనిటమ్ ఫెరాక్స్)",
            description: "షెడ్యూల్ E(1) విషపూరిత మూలిక. తప్పనిసరి సాంప్రదాయ శోధన మరియు ఎరుపు హెచ్చరిక లేబుల్ అవసరం.",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "భాంగ్ / విజయ (కన్నాబిస్ సటైవా)",
            description: "షెడ్యూల్ E(1) మాదకద్రవ్య మొక్క. NDPS చట్టం, రాష్ట్ర ఎక్సైజ్ లైసెన్స్ మరియు ఆయుష్ నోటిఫికేషన్‌లకు లోబడి ఉంటుంది.",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "బ్రాహ్మి / సరస్వతి ఆకు (బాకోపా మోన్నియేరి)",
            description: "శాస్త్రీయ మేధ్య రసాయనం (జ్ఞాపకశక్తిని పెంచేది). ప్రామాణిక బాకోసైడ్ పరీక్ష మరియు భారీ లోహాల పరిమితులకు లోబడి ఉంటుంది.",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "త్రిఫల (ఉసిరి, కరక్కాయ, తానికాయ)",
            description: "శాస్త్రీయ పాలీహెర్బల్ మిశ్రమం. పేటెంట్ చట్టం సెక్షన్ 3(p) కింద సాంప్రదాయ విజ్ఞానంగా రక్షించబడింది.",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "స్వర్ణ భస్మం (శుద్ధి చేసిన బంగారు భస్మం)",
            description: "హెర్బో-మెటాలిక్ రసౌషధం. షెడ్యూల్ T పార్ట్ I-F GMP మరియు మలినాల పరిమితులకు లోబడి ఉంటుంది.",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "ఫార్ములేషన్ విజ్ఞాన మూలం",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "శాస్త్రీయ గ్రంథాలు (ఉదా. చరక సంహిత, సుశ్రుత సంహిత)",
            description: "రూల్ 158B(I)(A) ప్రకారం కొత్త భద్రత/సమర్థత క్లినికల్ డేటా అవసరాల నుండి మినహాయింపు లభించింది.",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "యాజమాన్య మిశ్రమం (Patent & Proprietary - P&P)",
            description: "సెక్షన్ 3(h) మరియు రూల్ 158B(II) ప్రకారం ప్రామాణిక పేటెంట్ మరియు యాజమాన్య ఔషధ నిబంధనలు వర్తిస్తాయి.",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "గిరిజన / సాంప్రదాయ సమాజ విజ్ఞానం",
            description: "స్థానిక సమాజాలు మరియు జీవ వైవిధ్య నిర్వహణ కమిటీలతో (BMC) తప్పనిసరి ప్రయోజన భాగస్వామ్య ఒప్పందం.",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "భారతీయ ఆయుర్వేద ఫార్మకోపోయియా (API) / AFI ప్రమాణాలు",
            description: "డ్రగ్స్ & కాస్మెటిక్స్ చట్టం రెండవ షెడ్యూల్ కింద అధికారికంగా గుర్తించబడిన ఫార్మకోపోయిల్ మోనోగ్రాఫ్‌లు.",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "సిద్ధ లేదా యునాని శాస్త్రీయ గ్రంథాలు",
            description: "సిద్ధ లేదా యునాని వైద్య విధానాల మొదటి షెడ్యూల్‌లో జాబితా చేయబడిన అధికారిక గ్రంథాలు.",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "కొత్త ఇన్‌-హౌస్ R&D / వినూత్న ఫార్ములేషన్",
            description: "పూర్తిగా నవల వృక్షసంబంధ మిశ్రమం; సెక్షన్ 3(p)/3(e) ద్వారా నిషేధించబడకపోతే పేటెంట్‌కు అర్హత.",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "కోడ్ చేయని ఎథ్నోబొటానికల్ సేకరణలు (PBR)",
            description: "పీపుల్స్ బయోడైవర్సిటీ రిజిస్టర్‌లలో నమోదు చేయబడింది; తప్పనిసరి యాక్సెస్ మరియు బెనిఫిట్ షేరింగ్ (ABS) ఒప్పందం.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "తయారీ మరియు ప్రాసెసింగ్",
    description: "ఉత్పత్తి తయారీ ప్రాసెసింగ్ పద్ధతులు మరియు తుది భౌతిక రూపాన్ని వివరించండి.",
    fields: [
      {
        name: "processingMethod",
        label: "ఉత్పత్తి తయారీ ప్రక్రియ",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "ముడి / చూర్ణం చేసిన / నీటిలో ఉడకబెట్టిన (జల సారం)",
            description: "ప్రామాణిక శాస్త్రీయ ఆయుర్వేద తయారీ (కషాయం / క్వాథ ప్రక్రియ).",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "సాల్వెంట్ ఎక్స్‌ట్రాక్షన్ (ఆల్కహాల్, హెక్సేన్)",
            description: "మిగిలిన ద్రావకం వెల్లడి, TLC ఫింగర్‌ప్రింటింగ్ మరియు భారీ లోహాల పరీక్ష తప్పనిసరి.",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "అధునాతన రసాయన విభజన (ఐసోలేషన్)",
            description: "ఫైటోఫార్మాస్యూటికల్‌గా వర్గీకరించబడింది. CDSCO ఆమోదం మరియు క్లినికల్ ట్రయల్స్ అవసరం.",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "శాస్త్రీయ కిణ్వ ప్రక్రియ (ఆసవ & అరిష్ట)",
            description: "స్వయంచాలకంగా ఉత్పత్తి అయ్యే ఆల్కహాల్ (<12% v/v); రూల్ 151 ఆల్కహాల్ ఎక్సైజ్ మరియు ఔషధ తయారీల చట్టం కిందకు వస్తుంది.",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "సిద్ధ ఘృతం / తైల నిర్మాణం (స్నేహ కల్పన)",
            description: "శాస్త్రీయ లిపిడ్ సంగ్రహణ; పెరాక్సైడ్ విలువ మరియు యాసిడ్ విలువ పరీక్షలు అవసరం.",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "శాస్త్రీయ భస్మ నిర్మాణం (శోధన & మారణ)",
            description: "రసశాస్త్ర విష నిర్మూలన; షెడ్యూల్ T నానో కణాలు మరియు భారీ లోహాల భద్రతా సమ్మతి.",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "సూపర్‌క్రిటికల్ ఫ్లూయిడ్ CO2 సంగ్రహణ (SCFE)",
            description: "హరిత ద్రావకం లేని సంగ్రహణ; పేటెంట్ చట్టం సెక్షన్ 5 కింద ప్రాసెస్ పేటెంట్‌కు అర్హత.",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "నానో-లిపోసోమల్ / నవల హెర్బల్ డ్రగ్ డెలివరీ (NDDS)",
            description: "జీవ లభ్యతను పెంచడం; CDSCO కొత్త ఔషధ / ఫైటోఫార్మాస్యూటికల్ నిబంధనలను ఆకర్షిస్తుంది.",
          },
        ],
      },
      {
        name: "finalForm",
        label: "తుది ఉత్పత్తి రూపం",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "నోటి ద్వారా ఘనరూపం (మాత్రలు, క్యాప్సూల్స్, వటి, గుళికలు)",
            description: "అంతర్గత ఔషధం భారీ లోహాల ప్రమాణాలు, కరిగిపోయే గుణం మరియు సూక్ష్మజీవుల పరిమితులకు లోబడి ఉంటుంది.",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "నోటి ద్వారా ద్రవరూపం (కిణ్వ ప్రక్రియ ఆసవం, అరిష్టం, సిరప్)",
            description: "నిర్దిష్ట గురుత్వాకర్షణ, ఆల్కహాల్ పరిమితి ధృవీకరణ (<12%) మరియు సూక్ష్మజీవుల పరీక్షకు లోబడి ఉంటుంది.",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "నోటి ద్వారా పొడి / రేణువులు (చూర్ణం, క్వాథ చూర్ణం)",
            description: "API ప్రకారం కణ పరిమాణం మరియు తేమ శాత పరిమితులు.",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "శాస్త్రీయ సెమీ-సాలిడ్ (అవలేహం, లేహ్యం, చ్యవన్‌ప్రాశ్)",
            description: "చక్కెర/తేనె బేస్; మొత్తం ఘనపదార్థాలు, HMF మరియు చక్కెర సహన పరీక్షలు అవసరం.",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "సిద్ధ తైలం / ఘృతం (తైలం, ఘృతం)",
            description: "నోటి ద్వారా లేదా బాహ్య వినియోగం; అయోడిన్ విలువ మరియు సపోనిఫికేషన్ ప్రమాణాలు.",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "బాహ్య సెమీ-సాలిడ్ (క్రీమ్, జెల్, లేపనం, బామ్)",
            description: "షెడ్యూల్ M-II కింద కాస్మెటిక్ లేదా ASU బాహ్య అనువర్తనంగా సాధారణ సమ్మతి.",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "స్టెరైల్ చుక్కలు: నాసికా / కంటి (నస్యం, నేత్ర బిందు)",
            description: "కఠినమైన స్టెరిలిటీ ప్రమాణాలు, కణ పరీక్ష మరియు సంరక్షణకారి వెల్లడి తప్పనిసరి.",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "ఆయుర్వేద ఆహార్ / తినడానికి సిద్ధంగా ఉన్న హెర్బల్ ఆహారం",
            description: "ఆహార భద్రత మరియు ప్రమాణాల (ఆయుర్వేద ఆహార్) నిబంధనలు, 2022 కింద నియంత్రించబడుతుంది.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "వనరుల మూలం మరియు కంపెనీ యాజమాన్యం",
    description: "జీవ వనరుల మూలం ఉన్న ప్రాంతం మరియు కంపెనీ యాజమాన్య నిర్మాణాన్ని పేర్కొనండి.",
    fields: [
      {
        name: "sourcingRegion",
        label: "ప్రధాన వనరుల సేకరణ ప్రాంతం",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "కేరళ (ఉదా. నవర బియ్యం, మలబార్ మిరియాలు)",
            description: "భౌగోళిక సూచిక (GI) రక్షణకు అధిక అవకాశం.",
          },
          {
            value: "Himalayan Belt",
            label: "హిమాలయ ప్రాంతం",
            description: "ఎత్తైన ప్రాంతాల వృక్షసంపద. రాష్ట్ర అటవీ శాఖ కఠిన పర్యవేక్షణ.",
          },
          {
            value: "Imported from outside India",
            label: "భారతదేశం వెలుపలి నుండి దిగుమతి చేయబడింది",
            description: "భారతీయ జీవ వైవిధ్య చట్టం నుండి మినహాయింపు, కానీ దిగుమతి పర్మిట్లకు లోబడి ఉంటుంది.",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "పశ్చిమ కనుమల జీవ వైవిధ్య కేంద్రం",
            description: "స్థానిక జాతులు; రాష్ట్ర జీవ వైవిధ్య బోర్డు (SBB) కఠిన పరిశీలన మరియు సెక్షన్ 7 ముందస్తు సమాచారం.",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "మధ్య & తూర్పు గిరిజన ప్రాంతాలు (బస్తర్, చోటా నాగ్‌పూర్, ఒడిశా)",
            description: "గిరిజన విజ్ఞాన సాంద్రత కలిగిన ప్రాంతం; బయోడైవర్సిటీ మేనేజ్‌మెంట్ కమిటీలతో (BMC) సెక్షన్ 41 ABS.",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "ధృవీకరించబడిన సాగు భూమి / వ్యవసాయ-అటవీ",
            description: "జీవ వైవిధ్య (సవరణ) చట్టం 2023 కింద కొన్ని ABS నిబంధనల నుండి మినహాయింపు పొందిన సాగు.",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "సాధారణంగా వ్యాపారం చేసే వస్తువులు (సెక్షన్ 40 కింద NTC)",
            description: "ఉదా. కేవలం వ్యాపార వస్తువుగా ఉన్న పసుపు, అల్లం; వస్తువుల ఎగుమతికి ABS నుండి మినహాయింపు.",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "సంస్థ యాజమాన్య నిర్మాణం",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "100% భారతీయ పౌరులు / భారతీయుల యాజమాన్యంలోని సంస్థ",
            description: "జీవ వైవిధ్య చట్టం సెక్షన్ 7 వర్తిస్తుంది (రాష్ట్ర జీవ వైవిధ్య బోర్డుకు ముందస్తు సమాచారం).",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "విదేశీ ఈక్విటీ / FDI / NRI వాటాలు కలిగినది",
            description: "జీవ వైవిధ్య చట్టం సెక్షన్ 3(2) వర్తిస్తుంది (ఫారం 1 ద్వారా NBA తప్పనిసరి ముందస్తు అనుమతి).",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "విదేశీ కార్పొరేషన్ / బహుళజాతి కంపెనీ (భారతదేశం వెలుపల)",
            description: "సెక్షన్ 3(1) పూర్తి పరిమితులు; NBA ముందస్తు ఆమోదం మరియు కఠినమైన ABS ఒప్పందం అవసరం.",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "నమోదిత ఆయుష్ వైద్యుడు (వైద్యుడు / సంప్రదాయ చికిత్సకుడు)",
            description: "సవరించిన జీవ వైవిధ్య చట్టం 2023 కింద వ్యక్తిగత ప్రాక్టీస్ కోసం SBB నోటీసు మరియు ABS నుండి మినహాయింపు.",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "రైతు ఉత్పత్తి సంస్థ (FPO) / స్థానిక గ్రామ సహకార సంఘం",
            description: "సవరించిన చట్టం సెక్షన్ 7 ప్రకారం స్థానిక సాగుదారులు ABS నుండి మినహాయించబడ్డారు.",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "భారత ప్రభుత్వం / CSIR / ICMR తో ఉమ్మడి పరిశోధన",
            description: "కేంద్ర ప్రభుత్వ ఆమోదానికి లోబడి సెక్షన్ 5 ఉమ్మడి పరిశోధన మినహాయింపుకు అర్హత.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "లేబులింగ్ మరియు ఆరోగ్య క్లెయిమ్‌లు",
    description: "ఉత్పత్తి మార్కెటింగ్ మరియు లేబుల్‌పై ప్రదర్శించబడే క్లెయిమ్‌లను ఎంచుకోండి.",
    fields: [
      {
        name: "healthClaims",
        label: "లక్ష్య ఆరోగ్య క్లెయిమ్‌లు",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "రోగనిరోధక శక్తి మరియు సాధారణ ఆరోగ్యాన్ని పెంచుతుంది",
            description: "సురక్షితమైన క్లెయిమ్. ASCI కోడ్‌కు అనుగుణంగా ఉంటుంది.",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'చర్మ కాంతి మరియు మెరుపును మెరుగుపరుస్తుంది ("వర్ణ్య")',
            description: "చర్మ ఆరోగ్యం మరియు బాహ్య ఫార్ములేషన్ల కోసం సురక్షితమైన సౌందర్య క్లెయిమ్.",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "మధుమేహం / క్యాన్సర్ / అంధత్వాన్ని శాశ్వతంగా నయం చేస్తుంది",
            description: "ఖచ్చితంగా నిషేధించబడింది. డ్రగ్స్ & మ్యాజిక్ రెమెడీస్ చట్టం (DMR) మరియు షెడ్యూల్ J ఉల్లంఘన.",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "క్లినికల్‌గా నిరూపించబడింది / CTRI నమోదిత ట్రయల్",
            description: "CTRI నమోదిత మానవ క్లినికల్ ట్రయల్ డేటా రికార్డులు తప్పనిసరిగా ఉండాలి.",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'శాస్త్రీయ పునరుజ్జీవనం మరియు బలం ("రసాయనం" / "బాల్యం")',
            description: "మొదటి షెడ్యూల్ గ్రంథాల కింద గుర్తించబడిన శాస్త్రీయ చికిత్సా సూచనలు; ట్రయల్ తప్పనిసరి కాదు.",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'జీర్ణక్రియ మరియు జీవక్రియ ఆరోగ్యం ("దీపన" / "పాచన")',
            description: "ఆయుష్ మరియు ఆయుర్వేద ఆహార్ నిబంధనల కింద ఆమోదయోగ్యమైన నిర్మాణం-పనితీరు క్లెయిమ్.",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "కీళ్ల కదలిక మరియు నొప్పి నివారణ (లక్షణ ఉపశమనం)",
            description: "ఆమోదయోగ్యమైన లక్షణ ఉపశమన క్లెయిమ్; ఆర్థరైటిస్‌ను శాశ్వతంగా నయం చేస్తామని క్లెయిమ్ చేయడం DMR చట్టంలో నిషేధం.",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'ఒత్తిడి ఉపశమనం, జ్ఞాపకశక్తి మరియు నిద్ర మద్దతు ("మేధ్య")',
            description: "మోనోగ్రాఫ్‌ల మద్దతు ఉన్నప్పుడు ASCI మార్గదర్శకాల కింద ఆమోదయోగ్యమైన క్లెయిమ్.",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"100% సహజమైనది / స్వచ్ఛమైన ఆయుర్వేదం / ఎటువంటి దుష్ప్రభావాలు లేవు"',
            description: "ASCI పరిశీలనకు లోబడి ఉంటుంది: ఏదైనా ఆరోగ్య ఉత్పత్తికి 'ఎటువంటి దుష్ప్రభావాలు లేవు' అని క్లెయిమ్ చేయడం ఖచ్చితంగా నిషేధించబడింది.",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"ఊబకాయం / రక్తపోటు / గుండె జబ్బులకు శాశ్వత నివారణ"',
            description: "డ్రగ్స్ & మ్యాజిక్ రెమెడీస్ చట్టం షెడ్యూల్ (ఎంట్రీ 18, 27, 41) కింద ఖచ్చితంగా నిషేధించబడింది.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "లక్ష్య గ్లోబల్ మార్కెట్లు",
    description: "ఉత్పత్తి పంపిణీ మరియు మేధో సంపత్తి రక్షణ కోసం లక్ష్య మార్కెట్లను ఎంచుకోండి.",
    fields: [
      {
        name: "targetMarkets",
        label: "లక్ష్య మార్కెట్లు మరియు లైసెన్సులు",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "దేశీయ భారతదేశం: శాస్త్రీయ ఆయుష్ ఔషధం (ఫారం 25D లైసెన్స్)",
            description: "రూల్ 158B(I) ప్రకారం శాస్త్రీయ గ్రంథ సూచనతో షెడ్యూల్ T GMP కింద తయారీ.",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "దేశీయ భారతదేశం: పేటెంట్ లేదా యాజమాన్య (P&P) ఔషధం",
            description: "రూల్ 158B(II) ద్వారా నియంత్రించబడుతుంది; ప్రచురించబడిన సాహిత్యం లేదా పైలట్ క్లినికల్ డేటా అవసరం.",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "దేశీయ భారతదేశం: ఆయుర్వేద ఆహార్ / FSSAI న్యూట్రాస్యూటికల్",
            description: "ఆహార భద్రత మరియు ప్రమాణాల నిబంధనలు 2022 కింద నియంత్రించబడుతుంది; వ్యాధిని నయం చేస్తామని క్లెయిమ్ చేయలేరు.",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "యునైటెడ్ స్టేట్స్: యుఎస్ FDA డైటరీ సప్లిమెంట్ (DSHEA 1994)",
            description: "21 CFR పార్ట్ 111 cGMP మరియు తప్పనిసరి FDA నిరాకరణ ప్రకటన అవసరం.",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "యునైటెడ్ స్టేట్స్: MoCRA బాహ్య సౌందర్య సాధనం",
            description: "MoCRA 2022 కింద తప్పనిసరి FDA సదుపాయ నమోదు, ఉత్పత్తి జాబితా మరియు భద్రతా ధృవీకరణ.",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "యూరోపియన్ యూనియన్: సాంప్రదాయ మూలికా ఔషధ ఉత్పత్తులు (THMPD)",
            description: "30 సంవత్సరాల సాంప్రదాయ ఔషధ వినియోగ పత్రాలు అవసరం (EU లో 15 సంవత్సరాలతో సహా).",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "యూరోపియన్ యూనియన్: నోవెల్ ఫుడ్ నియంత్రణ",
            description: "మే 1997 కి ముందు EU లో వినియోగ చరిత్ర లేని వృక్ష జాతుల కోసం అవసరం.",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "భారతీయ పేటెంట్ (IPO) కోసం దరఖాస్తు",
            description: "సెక్షన్ 6 కింద NBA నుండి ఫారం III ముందస్తు అనుమతి అవసరం; సెక్షన్ 3(p) TKDL పరిశీలనకు లోబడి ఉంటుంది.",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "గ్లోబల్ పేటెంట్లు (PCT / అంతర్జాతీయ కార్యాలయాలు) ఫైలింగ్",
            description: "సెక్షన్ 6 కింద తప్పనిసరి ముందస్తు NBA ఆమోదం; జన్యు మూల వెల్లడిపై WIPO ఒప్పంద సమ్మతి.",
          },
        ],
      },
    ],
  },
];

export const BENGALI_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "উপাদান এবং সক্রিয় উপাদান",
    description: "আপনার পণ্যের প্রধান সক্রিয় উপাদান এবং ফর্মুলেশনের ঐতিহ্যবাহী জ্ঞানের উৎস সংজ্ঞায়িত করুন।",
    fields: [
      {
        name: "ingredients",
        label: "প্রধান সক্রিয় উপাদান (উপাদানসমূহ)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "অশ্বগন্ধা (উইথানিয়া সোমনিফেরা)",
            description: "সাধারণ অ্যাডাপ্টোজেন। আদর্শ আয়ুষ নীতিমালার অধীনে সাধারণত নিরাপদ।",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "তুলসী (ওসিমাম স্যাঙ্কটাম)",
            description: "পবিত্র তুলসী। ব্যাপকভাবে চাষকৃত, কম নিয়ন্ত্রক ঝুঁকি।",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "রক্তচন্দন (টেরোকার্পাস স্যান্টালিনাস)",
            description: "গুরুতর বিপন্ন প্রজাতি। CITES এবং জাতীয় জৈব বৈচিত্র্য কর্তৃপক্ষের (NBA) কঠোর নজরদারি প্রযোজ্য।",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "জটামাংসী (নার্ডোস্ট্যাচিস জটামাংসী)",
            description: "বিপন্ন হিমালয় ভেষজ। কঠোর অ্যাক্সেস অ্যান্ড বেনিফিট শেয়ারিং (ABS) সম্মতি বাধ্যতামূলক।",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "পরিশোধিত রাসায়নিক নির্যাস (যেমন কারকিউমিন ৯৫%)",
            description: "সম্পূর্ণ ভেষজ নয়। ফাইটোফার্মাসিউটিক্যাল নীতিমালা প্রযোজ্য হতে পারে।",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "নিম (আজাদিরাচটা ইন্ডিকা)",
            description: "শাস্ত্রীয় অ্যান্টিমাইক্রোবিয়াল ভেষজ। ঐতিহাসিক EPO পেটেন্ট বাতিলের পূর্ব নজির; TKDL ঐতিহ্যগত জ্ঞান সুরক্ষা।",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "হলুদ / হরিদ্রা (কারকিউমা লঙ্গা)",
            description: "ক্ষত নিরাময় ও প্রদাহনাশক বৈশিষ্ট্য। CSIR মার্কিন পেটেন্ট বাতিলের দৃষ্টান্ত (TKDL)।",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "কাশ্মীরি জাফরান (ক্রোকাস স্যাটিভাস)",
            description: "সুরক্ষিত ভৌগোলিক নির্দেশক (GI) প্রাপ্ত মূল্যবান মসলা। কঠোর সত্যতা এবং বিশুদ্ধতার মানদণ্ড।",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "গুগগুলু (কম্মিফোরা মুকুল)",
            description: "নিয়ন্ত্রিত রজন। আয়ুর্বেদিক ফার্মাকোপিয়া (API) মানদণ্ড অনুসারে প্রমিত গুগগুলস্টেরোনের সাপেক্ষ।",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "কুটকি (পিক্রোরহিজা কুররোয়া)",
            description: "CITES পরিশিষ্ট II এবং জৈব বৈচিত্র্য আইন ধারা ৩৮ এর অধীনে বিপন্ন প্রজাতির তালিকায় অন্তর্ভুক্ত।",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "সর্পগন্ধা (রাউভলফিয়া সার্পেন্টিনা)",
            description: "রিসার্পিন সমৃদ্ধ উদ্ভিদ। তপশিল E(1) এবং ধারা ৩৮ জৈব বৈচিত্র্য আইনের নিয়ন্ত্রিত তালিকাভুক্ত।",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "বৎ্সনাভ / কাঠবিষ (অ্যাকোনিটাম ফেরোক্স)",
            description: "তপশিল E(1) বিষাক্ত ভেষজ। বাধ্যতামূলক ঐতিহ্যবাহী শোধন এবং লাল সতর্কীকরণ লেবেল প্রয়োজন।",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "ভাং / বিজয়া (ক্যানাবিস স্যাটিভা)",
            description: "তপশিল E(1) নিয়ন্ত্রিত উদ্ভিদ। NDPS আইন, রাজ্য আবগারি লাইসেন্স এবং আয়ুষ বিজ্ঞপ্তির সাপেক্ষ।",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "ব্রাহ্মী (বাকোপা মনিয়েরি)",
            description: "শাস্ত্রীয় মেধ্য রসায়ন (স্মৃতিশক্তি বর্ধক)। প্রমিত ব্যাকোসাইড পরীক্ষা ও ভারী ধাতু সীমার সাপেক্ষ।",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "ত্রিফলা (আমলকী, হরিতকী, বিভীতকী)",
            description: "শাস্ত্রীয় পলিহার্বাল ফর্মুলা। পেটেন্ট আইন ধারা ৩(p) এর অধীনে ঐতিহ্যবাহী জ্ঞান হিসেবে সুরক্ষিত।",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "স্বর্ণ ভস্ম (শোধনকৃত স্বর্ণ ভস্ম)",
            description: "হার্বো-মেটালিক রসৌষধ। তপশিল T অংশ I-F জিএমপি এবং উপাদান বিশুদ্ধতা সীমার সাপেক্ষ।",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "ফর্মুলেশন জ্ঞানের উৎস",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "শাস্ত্রীয় গ্রন্থ (যেমন চরক সংহিতা, সুশ্রুত সংহিতা)",
            description: "নিয়ম ১৫৮B(I)(A) এর অধীনে নতুন নিরাপত্তা/কার্যকারিতা ক্লিনিকাল ডেটার বাধ্যবাধকতা থেকে ছাড়প্রাপ্ত।",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "মালিকানাধীন মিশ্রণ (Patent & Proprietary - P&P)",
            description: "ধারা ৩(h) এবং নিয়ম ১৫৮B(II) এর অধীনে পেটেন্ট ও প্রোপ্রাইটারি ঔষধের প্রবিধান প্রযোজ্য।",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "উপজাতীয় / ঐতিহ্যবাহী সম্প্রদায়ের জ্ঞান",
            description: "স্থানীয় সম্প্রদায় এবং জীববৈচিত্র্য ব্যবস্থাপনা কমিটির (BMC) সাথে বাধ্যতামূলক সুবিধা-ভাগাভাগি চুক্তি।",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "আয়ুর্বেদিক ফার্মাকোপিয়া অফ ইন্ডিয়া (API) / AFI মানদণ্ড",
            description: "ঔষধ ও প্রসাধন সামগ্রী আইনের দ্বিতীয় তপশিলের অধীনে সরকারি স্বীকৃত ফার্মাকোপিয়াল মনোগ্রাফ।",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "সিদ্ধ বা ইউনানি শাস্ত্রীয় গ্রন্থাবলী",
            description: "সিদ্ধ বা ইউনানি তিব্ব পদ্ধতির প্রথম তপশিলে তালিকাভুক্ত স্বীকৃত গ্রন্থাবলী।",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "অভ্যন্তরীণ উদ্ভাবনী গবেষণা ও উন্নয়ন (R&D) / নতুন ফর্মুলেশন",
            description: "সম্পূর্ণ নতুন উদ্ভিজ্জ সংমিশ্রণ; ধারা ৩(p)/৩(e) দ্বারা নিষিদ্ধ না হলে পেটেন্টের যোগ্য।",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "অসংহিতাবদ্ধ লোক-উদ্ভিজ্জ ক্ষেত্র সংগ্রহ (PBR)",
            description: "জনসাধারণের জীববৈচিত্র্য রেজিস্টার (PBR) যাচাই এবং জৈব বৈচিত্র্য আইন ধারা ৪১ বাধ্যতামূলক ABS চুক্তি।",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "উৎপাদন পদ্ধতি এবং গুণমান নিয়ন্ত্রণ",
    description: "প্রক্রিয়াকরণ পদ্ধতি, চূড়ান্ত ডোজ ফর্ম এবং উৎপাদন সুবিধার সার্টিফিকেশন স্তর নির্দিষ্ট করুন।",
    fields: [
      {
        name: "manufacturingMethod",
        label: "উৎপাদন / নিষ্কাশন পদ্ধতি",
        type: "radio",
        options: [
          {
            value: "Raw Crushed / Boiled in Water (Aqueous Decoction)",
            label: "কাঁচা / চূর্ণ / জলে সিদ্ধ (জলীয় ক্বাথ)",
            description: "আদর্শ শাস্ত্রীয় আয়ুর্বেদিক প্রস্তুতি (ক্বাথ / কশায় প্রক্রিয়া)।",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "দ্রাবক নিষ্কাশন (অ্যালকোহল, হেক্সেন)",
            description: "অবশিষ্ট দ্রাবক প্রকাশ, TLC ফিঙ্গারপ্রিন্টিং এবং ভারী ধাতু পরীক্ষা বাধ্যতামূলক।",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "উন্নত রাসায়নিক পৃথকীকরণ (আইসোলেশন)",
            description: "ফাইটোফার্মাসিউটিক্যাল হিসাবে শ্রেণীবদ্ধ। CDSCO অনুমোদন এবং ক্লিনিকাল ট্রায়াল আবশ্যক।",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "শাস্ত্রীয় গাঁজন প্রক্রিয়া (আসব ও অরিষ্ট)",
            description: "প্রাকৃতিকভাবে উৎপাদিত অ্যালকোহল (<১২% v/v); নিয়ম ১৫১ আবগারি ও ঔষধ প্রস্তুতি আইন প্রযোজ্য।",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "ঔষধি ঘৃত / তৈল প্রক্রিয়াকরণ (স্নেহ কল্পনা)",
            description: "শাস্ত্রীয় লিপিড নিষ্কাশন; পারক্সাইড মান এবং অ্যাসিড মান পরীক্ষা প্রয়োজন।",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "শাস্ত্রীয় ভস্ম প্রস্তুতি (শোধন ও মারণ)",
            description: "রসশাস্ত্রীয় শোধন; তপশিল T ন্যানোকণা এবং ভারী ধাতু সুরক্ষা সম্মতি সাপেক্ষ।",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "সুপারক্রিটিক্যাল ফ্লুইড CO2 নিষ্কাশন (SCFE)",
            description: "পরিবেশবান্ধব দ্রাবকহীন নিষ্কাশন; পেটেন্ট আইন ধারা ৫ এর অধীনে প্রক্রিয়া পেটেন্টের যোগ্য।",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "ন্যানো-লাইপোসোমাল / আধুনিক ভেষজ ড্রাগ ডেলিভারি (NDDS)",
            description: "জৈব প্রাপ্যতা বৃদ্ধি করে; CDSCO নতুন ড্রাগ / ফাইটোফার্মাসিউটিক্যাল নিয়মাবলীর আওতাধীন।",
          },
        ],
      },
      {
        name: "finalForm",
        label: "চূড়ান্ত পণ্যের রূপ",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "মুখের শক্ত রূপ (ট্যাবলেট, ক্যাপসুল, বটী, গুটিকা)",
            description: "অভ্যন্তরীণ ঔষধ ভারী ধাতু মান, দ্রবণীয়তা এবং মাইক্রোবিয়াল সীমার সাপেক্ষ।",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "মুখের তরল রূপ (গাঁজনকৃত আসব, অরিষ্ট, সিরাপ)",
            description: "নির্দিষ্ট মাধ্যাকর্ষণ, অ্যালকোহল সীমা যাচাই (<১২%) এবং মাইক্রোবিয়াল পরীক্ষার সাপেক্ষ।",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "মুখের গুঁড়া / দানা (চূর্ণ, ক্বাথ চূর্ণ)",
            description: "API অনুসারে কণা আকার এবং আর্দ্রতার শতাংশ সীমা সাপেক্ষ।",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "শাস্ত্রীয় আধা-কঠিন (অবলেহ, লেহ্যম, চ্যবনপ্রাশ)",
            description: "চিনি/মধু ভিত্তিক; মোট কঠিন পদার্থ, HMF এবং চিনি সহনশীলতা পরীক্ষা প্রয়োজন।",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "ঔষধি তেল / ঘি (তৈল, ঘৃত)",
            description: "মুখের মাধ্যমে সেবন বা বাহ্যিক ব্যবহার; আয়োডিন মান এবং স্যাপোনিফিকেশন মানদণ্ড।",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "বাহ্যিক আধা-কঠিন (ক্রিম, জেল, প্রলেপ, বাম)",
            description: "তপশিল M-II এর অধীনে প্রসাধন সামগ্রী বা ASU বাহ্যিক প্রয়োগ হিসাবে সম্মতি সাপেক্ষ।",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "জীবাণুমুক্ত ড্রপ: নাসিকা / চক্ষু (নস্য, নেত্রবিন্দু)",
            description: "কঠোর নির্বীজন মান, কণা পরীক্ষা এবং প্রিজারভেটিভ প্রকাশ বাধ্যতামূলক।",
          },
          {
            value: "Transdermal Patch / Hydrogel Device",
            label: "ট্রান্সডার্মাল প্যাচ / হাইড্রোজেল ডিভাইস",
            description: "উন্নত ড্রাগ ডেলিভারি ডিভাইস; মেডিকেল ডিভাইস নিয়মাবলী ২০১৭ পর্যালোচনা আকর্ষণ করতে পারে।",
          },
        ],
      },
      {
        name: "gmpCertification",
        label: "উৎপাদন সুবিধা সার্টিফিকেশন স্তর",
        type: "radio",
        options: [
          {
            value: "State AYUSH Schedule T GMP Certified",
            label: "রাজ্য আয়ুষ তপশিল T জিএমপি প্রত্যয়িত",
            description: "ভারতে বাণিজ্যিক ASU উৎপাদনের জন্য সংবিধিবদ্ধ ন্যূনতম শর্তাবলী পূরণ করে।",
          },
          {
            value: "WHO-GMP for Herbal / Phytomedicines Certificate (CoPP)",
            label: "ভেষজ ওষুধের জন্য WHO-GMP সার্টিফিকেট (CoPP)",
            description: "উচ্চমূল্যের বৈশ্বিক রপ্তানি এবং আন্তর্জাতিক নিয়ন্ত্রক ফাইলিংয়ের জন্য প্রয়োজনীয়।",
          },
          {
            value: "US-FDA 21 CFR Part 111 cGMP Compliant (Dietary Supplements)",
            label: "US-FDA 21 CFR Part 111 cGMP অনুবর্তী (ডায়েটারি সাপ্লিমেন্ট)",
            description: "মার্কিন বাজারে খাদ্য সম্পূরক হিসাবে রপ্তানির জন্য বাধ্যতামূলক পূর্বশর্ত।",
          },
          {
            value: "Third-Party Loan License / Contract Manufacturer Facility",
            label: "তৃতীয় পক্ষের লোন লাইসেন্স / চুক্তিভিত্তিক উৎপাদন সুবিধা",
            description: "ফর্ম ২৫E এর অধীনে অন্য প্রত্যয়িত সুবিধায় উৎপাদন; নিয়ন্ত্রিত নিয়ন্ত্রক দায়বদ্ধতা।",
          },
          {
            value: "Uncertified / Informal Cottage Unit (Non-GMP)",
            label: "অপ্রত্যয়িত / অনানুষ্ঠানিক কুটির শিল্প (নন-জিএমপি)",
            description: "বাণিজ্যিক বিক্রয়ের অনুমতি নেই; তাত্ক্ষণিক পরিকাঠামো রূপান্তর এবং তপশিল T সার্টিফিকেশন প্রয়োজন।",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "কাঁচামালের উৎস এবং জৈব বৈচিত্র্য সম্মতি",
    description: "কাঁচামালের ভৌগোলিক উৎস এবং আপনার এন্টারপ্রাইজের মালিকানা কাঠামো নির্দেশ করুন।",
    fields: [
      {
        name: "sourcingOrigin",
        label: "কাঁচামাল সংগ্রহের ভৌগোলিক উৎস",
        type: "radio",
        options: [
          {
            value: "Wild Harvesting in Protected Indian Forests",
            label: "ভারতের সংরক্ষিত বন থেকে বন্য সংগ্রহ",
            description: "সর্বোচ্চ আইনি ঝুঁকি। রাজ্য বন বিভাগ অনুমতি এবং জৈব বৈচিত্র্য আইন ধারা ৩/৪/৭ সম্মতি প্রয়োজন।",
          },
          {
            value: "Sourced Outside India (Imported from Nepal, Bhutan, Africa)",
            label: "ভারতের বাইরে থেকে সংগৃহীত (নেপাল, ভুটান, আফ্রিকা থেকে আমদানি)",
            description: "ভারতীয় জৈব বৈচিত্র্য আইন ধারা ৩(২) প্রযোজ্য নয়; তবে DGFT আমদানি লাইসেন্স এবং উদ্ভিদ কোয়ারেন্টাইন ছাড়পত্র প্রয়োজন।",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "মধ্য ও পূর্ব উপজাতীয় অঞ্চল (বস্তার, ছোটনাগপুর, ওড়িশা)",
            description: "উপজাতীয় জ্ঞান সমৃদ্ধ অঞ্চল; বায়োডাইভারসিটি ম্যানেজমেন্ট কমিটির (BMC) সাথে ধারা ৪১ ABS প্রযোজ্য।",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "প্রত্যয়িত চাষকৃত জমি / কৃষি-বনায়ন",
            description: "জৈব বৈচিত্র্য (সংশোধনী) আইন ২০২৩ এর অধীনে কিছু ABS নিয়ম থেকে ছাড়প্রাপ্ত চাষাবাদ।",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "সাধারণ বাণিজ্য পণ্য (ধারা ৪০ এর অধীনে NTC)",
            description: "যেমন শুধুমাত্র বাণিজ্যিক পণ্য হিসেবে ব্যবহৃত হলুদ, আদা; পণ্য রপ্তানির জন্য ABS থেকে ছাড়প্রাপ্ত।",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "কোম্পানির মালিকানা কাঠামো",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "১০০% ভারতীয় নাগরিক / ভারতীয় মালিকানাধীন সংস্থা",
            description: "জৈব বৈচিত্র্য আইন ধারা ৭ প্রযোজ্য (রাজ্য জৈব বৈচিত্র্য বোর্ডকে পূর্ব নোটিশ প্রদান)।",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "বিদেশী ইক্যুইটি / FDI / NRI শেয়ারহোল্ডিং যুক্ত",
            description: "জৈব বৈচিত্র্য আইন ধারা ৩(২) প্রযোজ্য (ফর্ম ১ এর মাধ্যমে NBA থেকে বাধ্যতামূলক পূর্বানুমোদন)।",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "বিদেশী কর্পোরেশন / বহুজাতিক কোম্পানি (ভারতের বাইরে)",
            description: "ধারা ৩(১) এর পূর্ণ সীমাবদ্ধতা; NBA পূর্বানুমোদন এবং কঠোর ABS চুক্তি প্রয়োজন।",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "নিবন্ধিত আয়ুষ চিকিৎসক (কবিরাজ / ঐতিহ্যবাহী নিরাময়কারী)",
            description: "সংশোধিত জৈব বৈচিত্র্য আইন ২০২৩ এর অধীনে ব্যক্তিগত অনুশীলনের জন্য SBB নোটিশ ও ABS থেকে ছাড়প্রাপ্ত।",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "কৃষক উৎপাদক সংস্থা (FPO) / স্থানীয় সমবায় সমিতি",
            description: "সংশোধিত আইন ধারা ৭ অনুসারে স্থানীয় চাষীরা ABS থেকে অব্যাহতিপ্রাপ্ত।",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "ভারত সরকার / CSIR / ICMR এর সাথে যৌথ গবেষণা",
            description: "কেন্দ্রীয় সরকারের অনুমোদন সাপেক্ষে ধারা ৫ যৌথ গবেষণা ছাড়ের যোগ্য।",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "লেবেলিং এবং স্বাস্থ্য সংক্রান্ত দাবি",
    description: "পণ্যের বিপণন এবং লেবেলে প্রদর্শিত দাবিসমূহ নির্বাচন করুন।",
    fields: [
      {
        name: "healthClaims",
        label: "উদ্দিষ্ট স্বাস্থ্য দাবি",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "রোগ প্রতিরোধ ক্ষমতা ও সাধারণ সুস্থতা বৃদ্ধি করে",
            description: "নিরাপদ দাবি। ASCI কোড ও আয়ুষ নিয়মের সাথে সামঞ্জস্যপূর্ণ।",
          },
          {
            value: "Classical Therapeutic Indication (Jwara, Kasa, Prameha)",
            label: "শাস্ত্রীয় থেরাপিউটিক ইঙ্গিত (জ্বর, কাস, প্রমেহ)",
            description: "প্রথম তপশিলের শাস্ত্রীয় গ্রন্থে উল্লেখিত প্রামাণ্য ইঙ্গিত; ফর্ম ২৫D লাইসেন্সিংয়ের জন্য নিরাপদ।",
          },
          {
            value: "Support for Joint Pain / Flexibility",
            label: "জয়েন্টের ব্যথা উপশম / নমনীয়তা সমর্থন",
            description: "উপশমকারী সহায়তা দাবি; কোনো স্থায়ী নিরাময়ের দাবি করা যাবে না।",
          },
          {
            value: '"Permanent Cure for Diabetes" (Madhumeha Nirmuulan)',
            label: '"ডায়াবেটিস স্থায়ী নিরাময়" (মধুমহ নির্মূলন)',
            description: "ঔষধ ও ম্যাজিক প্রতিকার আইন (DMRCA) ১৯৫৪ এর অধীনে কঠোরভাবে নিষিদ্ধ অপরাধ; কারাদণ্ডের বিধান রয়েছে।",
          },
          {
            value: '"Reversal of Gray Hair" / "Permanent Baldness Cure"',
            label: '"পাকা চুল কালো করা" / "স্থায়ী চুল পড়ার নিরাময়"',
            description: "DMRCA তপশিল এবং নিয়ম ১০৬ এর অধীনে বিভ্রান্তিকর দাবি হিসেবে নিষিদ্ধ।",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"স্থূলতা / উচ্চ রক্তচাপ / হৃদরোগের স্থায়ী নিরাময়"',
            description: "ড্রাগস অ্যান্ড ম্যাজিক রেমেডিজ আইন তপশিল (এন্ট্রি ১৮, ২৭, ৪১) এর অধীনে কঠোরভাবে নিষিদ্ধ।",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "লক্ষ্য বৈশ্বিক বাজার",
    description: "পণ্য বিতরণ এবং বুদ্ধিবৃত্তিক সম্পত্তি সুরক্ষার জন্য লক্ষ্য বাজার নির্বাচন করুন।",
    fields: [
      {
        name: "targetMarkets",
        label: "লক্ষ্য বাজার এবং লাইসেন্সিং পথ",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "দেশীয় ভারত: শাস্ত্রীয় আয়ুষ ঔষধ (ফর্ম ২৫D লাইসেন্স)",
            description: "নিয়ম ১৫৮B(I) অনুসারে শাস্ত্রীয় গ্রন্থ উল্লেখ সহ তপশিল T জিএমপি এর অধীনে উৎপাদন।",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "দেশীয় ভারত: পেটেন্ট বা মালিকানাধীন (P&P) ঔষধ",
            description: "নিয়ম ১৫৮B(II) দ্বারা নিয়ন্ত্রিত; প্রকাশিত সাহিত্য বা পাইলট ক্লিনিকাল ডেটা আবশ্যক।",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "দেশীয় ভারত: আয়ুর্বেদ আহার / FSSAI নিউট্রাসিউটিক্যাল",
            description: "খাদ্য সুরক্ষা ও মানদণ্ড প্রবিধান ২০২২ এর অধীনে নিয়ন্ত্রিত; রোগ নিরাময়ের দাবি করা যাবে না।",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "মার্কিন যুক্তরাষ্ট্র: ইউএস FDA ডায়েটারি সাপ্লিমেন্ট (DSHEA ১৯৯৪)",
            description: "21 CFR পার্ট 111 cGMP এবং বাধ্যতামূলক FDA দাবিত্যাগ বিবৃতি প্রয়োজন।",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "মার্কিন যুক্তরাষ্ট্র: MoCRA বাহ্যিক প্রসাধন সামগ্রী",
            description: "MoCRA ২০২২ এর অধীনে বাধ্যতামূলক FDA সুবিধা নিবন্ধন, পণ্য তালিকা এবং সুরক্ষা যাচাইকরণ।",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "ইউরোপীয় ইউনিয়ন: ঐতিহ্যবাহী ভেষজ ঔষধ পণ্য (THMPD)",
            description: "৩০ বছরের ঐতিহ্যবাহী ঔষধ ব্যবহারের নথি আবশ্যক (ইইউতে ১৫ বছর সহ)।",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "ইউরোপীয় ইউনিয়ন: নভেল ফুড রেগুলেশন",
            description: "মে ১৯৯৭ এর পূর্বে ইইউতে ব্যবহারের ইতিহাস না থাকা উদ্ভিদের জন্য প্রযোজ্য।",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "ভারতীয় পেটেন্ট (IPO) এর জন্য আবেদন",
            description: "ধারা ৬ এর অধীনে NBA থেকে ফর্ম III পূর্বানুমোদন আবশ্যক; ধারা ৩(p) TKDL যাচাই সাপেক্ষ।",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "গ্লোবাল পেটেন্ট (PCT / আন্তর্জাতিক অফিস) ফাইলিং",
            description: "ধারা ৬ এর অধীনে বাধ্যতামূলক পূর্ব NBA অনুমোদন; জেনেটিক উৎস প্রকাশের আন্তর্জাতিক চুক্তি সাপেক্ষ।",
          },
        ],
      },
    ],
  },
];

export const KANNADA_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "ಘಟಕಾಂಶಗಳು ಮತ್ತು ಸಕ್ರಿಯ ವಸ್ತುಗಳು",
    description:
      "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಪ್ರಮುಖ ಸಕ್ರಿಯ ಪದಾರ್ಥಗಳು ಮತ್ತು ಸೂತ್ರೀಕರಣದ ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನದ ಮೂಲವನ್ನು ವಿವರಿಸಿ.",
    fields: [
      {
        name: "ingredients",
        label: "ಪ್ರಮುಖ ಸಕ್ರಿಯ ಘಟಕಾಂಶಗಳು (ಪದಾರ್ಥಗಳು)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "ಅಶ್ವಗಂಧ (ವಿತಾನಿಯಾ ಸೊಮ್ನಿಫೆರಾ)",
            description: "ಸಾಮಾನ್ಯ ಅಡಾಪ್ಟೋಜೆನ್. ಪ್ರಮಾಣಿತ ಆಯುಷ್ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿದೆ.",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "ತುಳಸಿ (ಓಸಿಮಮ್ ಸ್ಯಾಂಕ್ಟಮ್)",
            description: "ಪವಿತ್ರ ತುಳಸಿ. ವ್ಯಾಪಕವಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ, ಕಡಿಮೆ ನಿಯಂತ್ರಕ ಅಪಾಯ.",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "ರಕ್ತಚಂದನ (ಟೆರೋಕಾರ್ಪಸ್ ಸ್ಯಾಂಟಲಿನಸ್)",
            description: "ತೀವ್ರ ಅಳಿವಿನಂಚಿನಲ್ಲಿರುವ ಪ್ರಭೇದ. CITES ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಜೈವಿಕ ವೈವಿಧ್ಯ ಪ್ರಾಧಿಕಾರದ (NBA) ಕಟ್ಟುನಿಟ್ಟಿನ ಪರಿಶೀಲನೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "ಜಟಾಮಾಂಸಿ (ನಾರ್ಡೋಸ್ಟಾಚಿಸ್ ಜಟಾಮಾನ್ಸಿ)",
            description: "ಅಳಿವಿನಂಚಿನಲ್ಲಿರುವ ಹಿಮಾಲಯನ್ ಮೂಲಿಕೆ. ಕಡ್ಡಾಯ ಪ್ರವೇಶ ಮತ್ತು ಪ್ರಯೋಜನ ಹಂಚಿಕೆ (ABS) ನಿಯಮಗಳ ಅನುಸರಣೆ ಅಗತ್ಯ.",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "ಶುದ್ಧೀಕರಿಸಿದ ರಾಸಾಯನಿಕ ಸಾರ (ಉದಾ. ಕರ್ಕ್ಯುಮಿನ್ 95%)",
            description: "ಸಂಪೂರ್ಣ ಸಸ್ಯಜನ್ಯವಲ್ಲ. ಫೈಟೊಫಾರ್ಮಾಸ್ಯುಟಿಕಲ್ ನಿಯಮಗಳು ಅನ್ವಯಿಸಬಹುದು.",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "ಬೇವು (ಅಜಾದಿರಾಕ್ಟಾ ಇಂಡಿಕಾ)",
            description: "ಶಾಸ್ತ್ರೀಯ ಆಂಟಿಮೈಕ್ರೊಬಿಯಲ್ ಮೂಲಿಕೆ. ಐತಿಹಾಸಿಕ EPO ಪೇಟೆಂಟ್ ರದ್ದತಿಯ ಮುನ್ನಿದರ್ಶನ; TKDL ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ರಕ್ಷಣೆ.",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "ಅರಿಶಿನ / ಹರಿದ್ರಾ (ಕರ್ಕ್ಯುಮಾ ಲಾಂಗಾ)",
            description: "ಗಾಯ ವಾಸಿಮಾಡುವ ಮತ್ತು ಉರಿಯೂತ ನಿವಾರಕ ಗುಣಗಳು. CSIR ಯುಎಸ್ ಪೇಟೆಂಟ್ ರದ್ದತಿ ಮುನ್ನಿದರ್ಶನ (TKDL).",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "ಕಾಶ್ಮೀರಿ ಕೇಸರಿ (ಕ್ರೋಕಸ್ ಸಟೈವಸ್)",
            description: "ರಕ್ಷಿತ ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI) ಹೊಂದಿರುವ ಮೌಲ್ಯಯುತ ಮಸಾಲೆ. ಕಟ್ಟುನಿಟ್ಟಾದ ಶುದ್ಧತೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳು.",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "ಗುಗ್ಗುಳು (ಕಾಮ್ಮಿಫೋರಾ ಮುಕುಲ್)",
            description: "ನಿಯಂತ್ರಿತ ಸಸ್ಯ ಅಂಟು. ಆಯುರ್ವೇದ ಫಾರ್ಮಾಕೋಪಿಯಾ (API) ಮಾನದಂಡಗಳ ಪ್ರಕಾರ ಪ್ರಮಾಣೀಕೃತ ಗುಗ್ಗುಲ್‌ಸ್ಟೆರಾನ್‌ಗಳ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "ಕುಟ್ಕಿ (ಪಿಕ್ರೋರೈಜಾ ಕುರ್ರೋವಾ)",
            description: "CITES ಅನುಬಂಧ II ಮತ್ತು ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 38 ರ ಅಡಿಯಲ್ಲಿ ಅಳಿವಿನಂಚಿನಲ್ಲಿರುವ ಪ್ರಭೇದಗಳ ಪಟ್ಟಿಯಲ್ಲಿದೆ.",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "ಸರ್ಪಗಂಧ (ರೌವೋಲ್ಫಿಯಾ ಸರ್ಪೆಂಟಿನಾ)",
            description: "ರಿಸರ್ಪಿನ್ ಸಮೃದ್ಧ ಸಸ್ಯ. ಶೆಡ್ಯೂಲ್ E(1) ಮತ್ತು ಸೆಕ್ಷನ್ 38 ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆಯ ನಿಯಂತ್ರಿತ ಪಟ್ಟಿಯಲ್ಲಿದೆ.",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "ವತ್ಸನಾಭ / ವತ್ಸನಾಭಿ (ಅಕೋನಿಟಮ್ ಫೆರಾಕ್ಸ್)",
            description: "ಶೆಡ್ಯೂಲ್ E(1) ವಿಷಕಾರಿ ಸಸ್ಯ. ಕಡ್ಡಾಯ ಸಾಂಪ್ರದಾಯಿಕ ಶುದ್ಧೀಕರಣ (ಶೋಧನ) ಮತ್ತು ಕೆಂಪು ಎಚ್ಚರಿಕೆ ಲೇಬಲ್ ಅಗತ್ಯ.",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "ಭಾಂಗ್ / ವಿಜಯಾ (ಕ್ಯಾನಬಿಸ್ ಸಟೈವಾ)",
            description: "ಶೆಡ್ಯೂಲ್ E(1) ನಿಯಂತ್ರಿತ ಮಾದಕ ಸಸ್ಯ. NDPS ಕಾಯ್ದೆ, ರಾಜ್ಯ ಅಬಕಾರಿ ಪರವಾನಗಿ ಮತ್ತು ಆಯುಷ್ ಅಧಿಸೂಚನೆಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "ಬ್ರಾಹ್ಮಿ (ಬಕೋಪಾ ಮೊನ್ನಿಯೇರಿ)",
            description: "ಶಾಸ್ತ್ರೀಯ ಮೇಧ್ಯ ರಸಾಯನ (ನೆನಪಿನ ಶಕ್ತಿ ವರ್ಧಕ). ಪ್ರಮಾಣೀಕೃತ ಬ್ಯಾಕೋಸೈಡ್ ಪರೀಕ್ಷೆ ಮತ್ತು ಭಾರಲೋಹಗಳ ಮಿತಿ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
          },
          {
            value: "Amla / Amalaki (Phyllanthus emblica)",
            label: "ನೆಲ್ಲಿಕಾಯಿ / ಆಮಲಕಿ (ಫಿಲಾಂಥಸ್ ಎಂಬ್ಲಿಕಾ)",
            description: "ನೈಸರ್ಗಿಕ ವಿಟಮಿನ್ ಸಿ ಮತ್ತು ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್. ಕಡಿಮೆ ನಿಯಂತ್ರಕ ಅಪಾಯ, ಸಾಮಾನ್ಯ ಆಯುಷ್ ಉತ್ಪನ್ನ.",
          },
          {
            value: "Shatavari (Asparagus racemosus)",
            label: "ಶತಾವರಿ (ಅಸ್ಪ್ಯಾರಗಸ್ ರೇಸ್ಮೋಸಸ್)",
            description: "ಶಾಸ್ತ್ರೀಯ ಮಹಿಳಾ ಆರೋಗ್ಯ ರಸಾಯನ. ಕೃಷಿ ಮೂಲದ ದೃಢೀಕರಣ ಮತ್ತು ಸುಸ್ಥಿರ ಕೊಯ್ಲು ಪ್ರಮಾಣೀಕರಣ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
          },
          {
            value: "Guduchi / Giloy (Tinospora cordifolia)",
            label: "ಅಮೃತಬಳ್ಳಿ / ಗುಡೂಚಿ (ಟಿನೋಸ್ಪೊರಾ ಕಾರ್ಡಿಫೋಲಿಯಾ)",
            description: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ವರ್ಧಕ. ಸರಿಯಾದ ಸಸ್ಯ ಪ್ರಭೇದ ದೃಢೀಕರಣ (ಟಿನೋಸ್ಪೊರಾ ಕ್ರಿಸ್ಪಾ ಜೊತೆ ಕಲಬೆರಕೆ ತಪ್ಪಿಸಲು) ಕಡ್ಡಾಯ.",
          },
          {
            value: "Haritaki (Terminalia chebula)",
            label: "ಅಳಲೆಕಾಯಿ / ಹರೀತಕಿ (ಟರ್ಮಿನಾಲಿಯಾ ಚೆಬುಲಾ)",
            description: "ತ್ರಿಫಲಾದ ಪ್ರಮುಖ ಘಟಕ. ಜೀರ್ಣಕ್ರಿಯೆ ಮತ್ತು ಡಿಟಾಕ್ಸ್ ಸೂತ್ರೀಕರಣಗಳಲ್ಲಿ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",
          },
          {
            value: "Bibhitaki (Terminalia bellirica)",
            label: "ತಾರೆಕಾಯಿ / ಬಿಭೀತಕಿ (ಟರ್ಮಿನಾಲಿಯಾ ಬೆಲ್ಲೆರಿಕಾ)",
            description: "ತ್ರಿಫಲಾ ಘಟಕ. ನಿಯಮಿತ ಗುಣಮಟ್ಟದ ನಿಯಂತ್ರಣ ಮತ್ತು ಶೇಖರಣಾ ತಪಾಸಣೆ ಅಗತ್ಯ.",
          },
          {
            value: "Yashtimadhu / Mulethi (Glycyrrhiza glabra)",
            label: "ಜ್ಯೇಷ್ಠಮಧು (ಗ್ಲೈಸಿರೈಜಾ ಗ್ಲಾಬ್ರಾ)",
            description: "ಶಾಸ್ತ್ರೀಯ ಕಂಠ ಶುದ್ಧಿಕಾರಕ. ಗ್ಲೈಸಿರೈಜಿನ್ ಅಂಶದ ಮಿತಿ ಮತ್ತು ರಕ್ತದೊತ್ತಡದ ಎಚ್ಚರಿಕೆ ಲೇಬಲಿಂಗ್ ನಿಯಂತ್ರಣಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
          {
            value: "Shilajit (Asphaltum punjabianum)",
            label: "ಶಿಲಾಜಿತ್ (ಆಸ್ಫಾಲ್ಟಮ್ ಪಂಜಾಬಿಯಾನಮ್)",
            description: "ಖನಿಜ ಪಿಚ್ ಸಾರ. ಕಟ್ಟುನಿಟ್ಟಾದ ಶುದ್ಧೀಕರಣ (ಶೋಧನ), ಭಾರಲೋಹ ಪರೀಕ್ಷೆ ಮತ್ತು ಫುಲ್ವಿಕ್ ಆಮ್ಲ ಪ್ರಮಾಣೀಕರಣ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Shankhpushpi (Convolvulus pluricaulis)",
            label: "ಶಂಖಪುಷ್ಪಿ (ಕಾನ್ವೋಲ್ವುಲಸ್ ಪ್ಲುರಿಕಾಲಿಸ್)",
            description: "ನರಗಳ ಟಾನಿಕ್. ಕಲಬೆರಕೆ ತಡೆಗಟ್ಟಲು ಬೊಟಾನಿಕಲ್ ಐಡೆಂಟಿಟಿ ಪರೀಕ್ಷೆ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "ಸ್ವರ್ಣ ಭಸ್ಮ (ಸಂಸ್ಕರಿಸಿದ ಚಿನ್ನದ ಭಸ್ಮ)",
            description: "ಸೂಕ್ಷ್ಮ ಚಿನ್ನದ ಭಸ್ಮ. ಕಠಿಣ ಶೆಡ್ಯೂಲ್ E(1) ಮತ್ತು ಆಯುರ್ವೇದ ಫಾರ್ಮಾಕೋಪಿಯಾ ನ್ಯಾನೊ-ಕಣ ಸುರಕ್ಷತಾ ಪರೀಕ್ಷೆ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Rajata Bhasma (Incinerated Silver Ash)",
            label: "ರಜತ ಭಸ್ಮ (ಸಂಸ್ಕರಿಸಿದ ಬೆಳ್ಳಿಯ ಭಸ್ಮ)",
            description: "ಶುದ್ಧೀಕರಿಸಿದ ಬೆಳ್ಳಿಯ ಭಸ್ಮ. ಕಡ್ಡಾಯ ಶೋಧನ, ಮಾರಣ ಪ್ರಕ್ರಿಯೆ ದಾಖಲೆಗಳು ಮತ್ತು ಭಾರಲೋಹ ವಿಶ್ಲೇಷಣೆ ಅಗತ್ಯ.",
          },
          {
            value: "Tamra Bhasma (Incinerated Copper Ash)",
            label: "ತಾಮ್ರ ಭಸ್ಮ (ಸಂಸ್ಕರಿಸಿದ ತಾಮ್ರದ ಭಸ್ಮ)",
            description: "ಸಂಸ್ಕರಿಸಿದ ತಾಮ್ರದ ಭಸ್ಮ. ವಿಷತ್ವ ಪರೀಕ್ಷೆ ಮತ್ತು ನಿಯಮಿತ ಪ್ರಯೋಗಾಲಯ ಅನುಮೋದನೆ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Bhasma Preparation (Incinerated Metals/Minerals - General)",
            label: "ಭಸ್ಮ ಸಿದ್ಧತೆ (ಸಾಮಾನ್ಯ ಲೋಹ/ಖನಿಜ ಭಸ್ಮಗಳು)",
            description: "ಲೋಹ/ಖನಿಜ ಭಸ್ಮಗಳು. ಕಡ್ಡಾಯ ಶೆಡ್ಯೂಲ್ T (GMP) ನಿಯಮಗಳು, ಶೋಧನ ದೃಢೀಕರಣ ಮತ್ತು ಮುನ್ನೆಚ್ಚರಿಕೆ ಲೇಬಲಿಂಗ್ ಅಗತ್ಯ.",
          },
        ],
      },
      {
        name: "source_origin",
        label: "ಕಚ್ಚಾ ವಸ್ತುಗಳ ಮೂಲ ಮತ್ತು ಪ್ರಾಪ್ತಿ",
        type: "radio",
        options: [
          {
            value: "Wild-Harvested from Indian Forests",
            label: "ಭಾರತೀಯ ಅರಣ್ಯಗಳಿಂದ ಕಾಡು-ಸಂಗ್ರಹಿಸಲಾಗಿದೆ",
            description: "ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆಯಡಿ ರಾಜ್ಯ ಜೈವಿಕ ವೈವಿಧ್ಯ ಮಂಡಳಿ (SBB) ಗೆ ಮುನ್ಸೂಚನೆ ಮತ್ತು ಅನುಮೋದನೆ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Cultivated / Contract Farming on Private Lands",
            label: "ಖಾಸಗಿ ಭೂಮಿಗಳಲ್ಲಿ ಕೃಷಿ / ಒಪ್ಪಂದದ ಬೇಸಾಯ",
            description: "ಕಡಿಮೆ ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಅಪಾಯ; ಕೃಷಿ ಮೂಲದ ದಾಖಲೆಗಳು ಮತ್ತು ಉತ್ತಮ ಕೃಷಿ ಪದ್ಧತಿಗಳು (GACP) ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
          },
          {
            value: "Imported from Outside India",
            label: "ಭಾರತದ ಹೊರಗಿನಿಂದ ಆಮದು ಮಾಡಿಕೊಳ್ಳಲಾಗಿದೆ",
            description: "ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್, ಸಸ್ಯ ನೈರ್ಮಲ್ಯ ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ವಿದೇಶಿ ವಾಣಿಜ್ಯ ಮಹಾನಿರ್ದೇಶನಾಲಯದ (DGFT) ನಿಯಮಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.",
          },
          {
            value: "Exclusively from Local Mandis (Trader Channel)",
            label: "ಕೇವಲ ಸ್ಥಳೀಯ ಮಂಡಿಗಳಿಂದ (ವ್ಯಾಪಾರಿಗಳ ಮೂಲಕ)",
            description: "ಮೂಲದ ಪತ್ತೆಹಚ್ಚುವಿಕೆ ಕಡ್ಡಾಯ; ಜೈವಿಕ ವೈವಿಧ್ಯ ಮಂಡಳಿಯ ಅನುಸರಣೆಗಾಗಿ ಸರಬರಾಜುದಾರರ ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು ಅಗತ್ಯ.",
          },
        ],
      },
      {
        name: "formulation_type",
        label: "ಸೂತ್ರೀಕರಣ ವರ್ಗೀಕರಣ",
        type: "radio",
        options: [
          {
            value: "Classical Formulation (As cited in Schedule 1 authoritative texts)",
            label: "ಶಾಸ್ತ್ರೀಯ ಸೂತ್ರೀಕರಣ (ಅನುಸೂಚಿ 1 ರ ಅಧಿಕೃತ ಗ್ರಂಥಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದಂತೆ)",
            description: "ಔಷಧಿಗಳು ಮತ್ತು ಸೌಂದರ್ಯವರ್ಧಕಗಳ ನಿಯಮ 158B ಅಡಿಯಲ್ಲಿ ಕನಿಷ್ಠ ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗಗಳ ವಿನಾಯಿತಿ ಲಭ್ಯವಿದೆ.",
          },
          {
            value: "Proprietary / Patent Ayurvedic Formulation (New combination or novel excipient)",
            label: "ಸ್ವಾಮ್ಯದ / ಪೇಟೆಂಟ್ ಆಯುರ್ವೇದ ಸೂತ್ರೀಕರಣ (ಹೊಸ ಸಂಯೋಜನೆ)",
            description: "ನಿಯಮ 158B(iv) ಅಡಿಯಲ್ಲಿ ಸುರಕ್ಷತಾ ಅಧ್ಯಯನಗಳು, ಸ್ಥಿರತೆ ಡೇಟಾ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಪುರಾವೆಗಳು ಕಡ್ಡಾಯ.",
          },
          {
            value: "Pure Plant Extract / Isolated Phytochemical Molecule",
            label: "ಶುದ್ಧ ಸಸ್ಯ ಸಾರ / ಪ್ರತ್ಯೇಕಿಸಲ್ಪಟ್ಟ ಫೈಟೊಕೆಮಿಕಲ್ ಅಣು",
            description: "ಹೊಸ ಔಷಧ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗ ನಿಯಮಗಳು 2019 ರ ಅಡಿಯಲ್ಲಿ ಫೈಟೊಫಾರ್ಮಾಸ್ಯುಟಿಕಲ್ ಅನುಮೋದನೆ ಅಗತ್ಯವಿರಬಹುದು.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "ಉತ್ಪಾದನೆ ಮತ್ತು ಸೌಲಭ್ಯಗಳ ಸಿದ್ಧತೆ",
    description: "ನಿಮ್ಮ ಉತ್ಪಾದನಾ ಮೂಲಸೌಕರ್ಯ, ಜಿಎಂಪಿ (GMP) ಪ್ರಮಾಣೀಕರಣ ಮತ್ತು ಉದ್ದೇಶಿತ ಔಷಧ ರೂಪಗಳನ್ನು ನಿರ್ಧರಿಸಿ.",
    fields: [
      {
        name: "facility_status",
        label: "ಉತ್ಪಾದನಾ ಸೌಲಭ್ಯದ ಸ್ಥಿತಿ",
        type: "radio",
        options: [
          {
            value: "Dedicated Ayurvedic Facility with GMP (Schedule T) Compliance",
            label: "ಶೆಡ್ಯೂಲ್ T (GMP) ಅನುಸರಣೆಯೊಂದಿಗೆ ಮೀಸಲಾದ ಆಯುರ್ವೇದ ಘಟಕ",
            description: "ರಾಜ್ಯ ಆಯುಷ್ ಪ್ರಾಧಿಕಾರದಿಂದ ಫಾರ್ಮ್ 25D ಅಡಿಯಲ್ಲಿ ಪೂರ್ಣ ಉತ್ಪಾದನಾ ಪರವಾನಗಿಗೆ ಅರ್ಹವಾಗಿದೆ.",
          },
          {
            value: "Existing Cosmetic / Food Facility Adding AYUSH Line",
            label: "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸೌಂದರ್ಯವರ್ಧಕ/ಆಹಾರ ಘಟಕಕ್ಕೆ ಆಯುಷ್ ವಿಭಾಗ ಸೇರ್ಪಡೆ",
            description: "ಆಯುಷ್ ತಯಾರಿಕೆಗಾಗಿ ಪ್ರತ್ಯೇಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ತಪಾಸಣೆಯೊಂದಿಗೆ ಶೆಡ್ಯೂಲ್ T ಪ್ರಮಾಣೀಕರಣ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "Contract Manufacturing (Loan License on Third-Party GMP Facility)",
            label: "ಗುತ್ತಿಗೆ ಉತ್ಪಾದನೆ (ಮೂರನೇ ವ್ಯಕ್ತಿಯ GMP ಘಟಕದಲ್ಲಿ ಲೋನ್ ಲೈಸೆನ್ಸ್)",
            description: "ಫಾರ್ಮ್ 25E ಲೋನ್ ಲೈಸೆನ್ಸ್ ಅಡಿಯಲ್ಲಿ ಪರವಾನಗಿ ಪಡೆದ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಘಟಕವನ್ನು ಬಳಸಿಕೊಳ್ಳುವುದು.",
          },
          {
            value: "Early Stage / R&D Pilot Laboratory Only",
            label: "ಆರಂಭಿಕ ಹಂತ / ಕೇವಲ ಆರ್ & ಡಿ ಪೈಲಟ್ ಪ್ರಯೋಗಾಲಯ",
            description: "ವಾಣಿಜ್ಯ ಮಾರಾಟಕ್ಕೆ ಅನುಮತಿಯಿಲ್ಲ; ಕೇವಲ ಸಂಶೋಧನೆ ಮತ್ತು ಪರೀಕ್ಷೆಗೆ ಸೀಮಿತ.",
          },
        ],
      },
      {
        name: "intended_dosage_form",
        label: "ಉದ್ದೇಶಿತ ಔಷಧ ರೂಪಗಳು",
        type: "checkbox",
        options: [
          {
            value: "Solid (Tablets / Vati / Gutika / Capsules)",
            label: "ಘನ ರೂಪ (ಮಾತ್ರೆಗಳು / ವಟಿ / ಗುಟಿಕಾ / ಕ್ಯಾಪ್ಸುಲ್‌ಗಳು)",
            description: "ವಿಘಟನೆ ಪರೀಕ್ಷೆ, ತೂಕ ವ್ಯತ್ಯಾಸ ಮತ್ತು ತೇವಾಂಶ ಮಿತಿಗಳ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
          },
          {
            value: "Liquid (Asava / Arishta / Kwath / Syrups)",
            label: "ದ್ರವ ರೂಪ (ಆಸವ / ಅರಿಷ್ಟ / ಕ್ವಾಥ / ಸಿರಪ್‌ಗಳು)",
            description: "ಸ್ವಯಂ-ಉತ್ಪನ್ನ ಆಲ್ಕೋಹಾಲ್ ಮಿತಿಗಳು (ಗರಿಷ್ಠ 12% v/v) ಮತ್ತು ಕಟ್ಟುನಿಟ್ಟಾದ ನಿರ್ದಿಷ್ಟ ಸಾಂದ್ರತೆಯ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
          },
          {
            value: "Semisolid (Avaleha / Lepa / Creams / Ointments)",
            label: "ಅರೆಘನ ರೂಪ (ಅವಲೇಹ / ಲೇಪ / ಕ್ರೀಮ್‌ಗಳು / ಮುಲಾಮುಗಳು)",
            description: "ಸ್ನಿಗ್ಧತೆ, pH ಮೌಲ್ಯ ಮತ್ತು ಕಣಗಳ ಸೂಕ್ಷ್ಮತೆ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
          },
          {
            value: "Medicated Oils (Taila / Ghrita)",
            label: "ಔಷಧೀಯ ತೈಲಗಳು (ತೈಲ / ಘೃತ)",
            description: "ಆಮ್ಲ ಮೌಲ್ಯ, ಅಯೋಡಿನ್ ಮೌಲ್ಯ ಮತ್ತು ಸಪೋನಿಫಿಕೇಶನ್ ಮೌಲ್ಯ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
          },
          {
            value: "Powder (Churna / Kwath Churna)",
            label: "ಪುಡಿ ರೂಪ (ಚೂರ್ಣ / ಕ್ವಾಥ ಚೂರ್ಣ)",
            description: "ಜರಡಿ ಪರೀಕ್ಷೆ, ತೇವಾಂಶ ಮತ್ತು ಬೂದಿ ಮೌಲ್ಯಗಳ ಮಾನದಂಡ ಪಾಲನೆ ಕಡ್ಡಾಯ.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "ಕ್ಲಿನಿಕಲ್ ಡೇಟಾ ಮತ್ತು ಸುರಕ್ಷತಾ ಮೌಲ್ಯಮಾಪನ",
    description: "ನಿಮ್ಮ ಸೂತ್ರೀಕರಣದ ಸುರಕ್ಷತಾ ಅಧ್ಯಯನಗಳು, ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಪುರಾವೆಗಳನ್ನು ತಿಳಿಸಿ.",
    fields: [
      {
        name: "safety_study_status",
        label: "ಸುರಕ್ಷತಾ ಅಧ್ಯಯನಗಳ ಸ್ಥಿತಿ",
        type: "radio",
        options: [
          {
            value: "Published Clinical Trial in Peer-Reviewed Journal",
            label: "ಪರಿಶೀಲಿತ ಜರ್ನಲ್‌ನಲ್ಲಿ ಪ್ರಕಟವಾದ ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗ",
            description: "ಉನ್ನತ ಮಟ್ಟದ ಪುರಾವೆ; ಆಯುಷ್ ಸಚಿವಾಲಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ನಿಯಂತ್ರಕ ಅನುಮೋದನೆಗಳಿಗೆ ಅತ್ಯುತ್ತಮ.",
          },
          {
            value: "In-House Pilot Safety & Toxicity Data (Pre-Clinical)",
            label: "ಆಂತರಿಕ ಪೈಲಟ್ ಸುರಕ್ಷತೆ ಮತ್ತು ವಿಷತ್ವ ಡೇಟಾ (ಪೂರ್ವ-ಕ್ಲಿನಿಕಲ್)",
            description: "ತೀವ್ರ ಮತ್ತು ಉಪ-ತೀವ್ರ ವಿಷತ್ವ ಡೇಟಾ ಲಭ್ಯವಿದೆ; ರಾಜ್ಯ ಪರವಾನಗಿಗಾಗಿ ಸ್ವೀಕಾರಾರ್ಹ.",
          },
          {
            value: "Relying Exclusively on Classical Textual Citation (Rule 158B)",
            label: "ಕೇವಲ ಶಾಸ್ತ್ರೀಯ ಗ್ರಂಥಗಳ ಉಲ್ಲೇಖಗಳ ಮೇಲೆ ಅವಲಂಬಿತ (ನಿಯಮ 158B)",
            description: "ಶಾಸ್ತ್ರೀಯ ಔಷಧಿಗಳಿಗೆ ಮಾನ್ಯವಾಗಿದೆ; ಆದರೆ ಹೊಸ ಸ್ವಾಮ್ಯದ ಸಂಯೋಜನೆಗಳಿಗೆ ಹೆಚ್ಚುವರಿ ಪುರಾವೆ ಅಗತ್ಯ.",
          },
          {
            value: "No Formal Safety or Toxicity Studies Conducted",
            label: "ಯಾವುದೇ ಔಪಚಾರಿಕ ಸುರಕ್ಷತೆ ಅಥವಾ ವಿಷತ್ವ ಅಧ್ಯಯನಗಳು ನಡೆದಿಲ್ಲ",
            description: "ಹೆಚ್ಚಿನ ನಿಯಂತ್ರಕ ಅಪಾಯ; ಸ್ವಾಮ್ಯದ ಪರವಾನಗಿ ಪಡೆಯಲು ಆರಂಭಿಕ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಕಡ್ಡಾಯ.",
          },
        ],
      },
      {
        name: "heavy_metal_testing",
        label: "ಭಾರಲೋಹಗಳು ಮತ್ತು ಸೂಕ್ಷ್ಮಜೀವಿ ಪರೀಕ್ಷೆ",
        type: "radio",
        options: [
          {
            value: "Batch-wise Heavy Metal Testing Implemented (Lead, Cadmium, Arsenic, Mercury)",
            label: "ಬ್ಯಾಚ್-ವಾರು ಭಾರಲೋಹ ಪರೀಕ್ಷೆ ಅಳವಡಿಸಲಾಗಿದೆ (ಸೀಸ, ಕ್ಯಾಡ್ಮಿಯಮ್, ಆರ್ಸೆನಿಕ್, ಪಾದರಸ)",
            description: "ಆಯುಷ್ ಗೆಜೆಟ್ ಅಧಿಸೂಚನೆಗಳ ಅಡಿಯಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಅನುಗುಣವಾಗಿದೆ.",
          },
          {
            value: "Testing Planned but Not Yet Operational",
            label: "ಪರೀಕ್ಷೆ ಯೋಜಿಸಲಾಗಿದೆ ಆದರೆ ಇನ್ನೂ ಕಾರ್ಯರೂಪಕ್ಕೆ ಬಂದಿಲ್ಲ",
            description: "ವಾಣಿಜ್ಯ ಉತ್ಪಾದನೆ ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲು NABL ಮಾನ್ಯತೆ ಪಡೆದ ಪ್ರಯೋಗಾಲಯದೊಂದಿಗೆ ಒಪ್ಪಂದ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "No Testing Mechanism in Place",
            label: "ಯಾವುದೇ ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆ ಜಾರಿಯಲ್ಲಿಲ್ಲ",
            description: "ತೀವ್ರ ನಿಯಂತ್ರಕ ಉಲ್ಲಂಘನೆ; ಮಾರುಕಟ್ಟೆ ತಡೆ ಮತ್ತು ದಂಡದ ಅಪಾಯವಿದೆ.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "ಲೇಬಲಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಹಕ್ಕುಗಳು",
    description: "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಕ್ಲೈಮ್‌ಗಳು, ಜಾಹೀರಾತುಗಳು ಮತ್ತು ಲೇಬಲಿಂಗ್ ಸಿದ್ಧತೆಯನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.",
    fields: [
      {
        name: "therapeutic_claims",
        label: "ಉದ್ದೇಶಿತ ಚಿಕಿತ್ಸಕ ಮತ್ತು ಆರೋಗ್ಯ ಹಕ್ಕುಗಳು",
        type: "checkbox",
        options: [
          {
            value: "General Wellness / Immunity Booster / Rasayana",
            label: "ಸಾಮಾನ್ಯ ಯೋಗಕ್ಷೇಮ / ರೋಗನಿರೋಧಕ ಶಕ್ತಿ / ರಸಾಯನ",
            description: "ಕಡಿಮೆ ನಿಯಂತ್ರಕ ಅಪಾಯ; ನಿಯಮಾವಳಿಗಳ ಪ್ರಕಾರ ಸುಲಭವಾಗಿ ಅನುಮೋದನೆ ಪಡೆಯಬಹುದು.",
          },
          {
            value: "Direct Disease Cure Claim (e.g., Diabetes, Hypertension, Cancer)",
            label: "ನೇರ ರೋಗ ನಿವಾರಣೆ ಹಕ್ಕು (ಉದಾ. ಮಧುಮೇಹ, ಅಧಿಕ ರಕ್ತದೊತ್ತಡ, ಕ್ಯಾನ್ಸರ್)",
            description: "ಔಷಧಿಗಳು ಮತ್ತು ಮ್ಯಾಜಿಕ್ ಪರಿಹಾರಗಳ (ಆಕ್ಷೇಪಾರ್ಹ ಜಾಹೀರಾತುಗಳು) ಕಾಯ್ದೆ 1954 ರ ಅಡಿಯಲ್ಲಿ ನಿಷೇಧಿತ ಅಥವಾ ಕಟ್ಟುನಿಟ್ಟಾದ ತನಿಖೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
          {
            value: "Symptomatic Relief (e.g., Pain relief, Cough, Digestive support)",
            label: "ರೋಗಲಕ್ಷಣದ ಉಪಶಮನ (ಉದಾ. ನೋವು ನಿವಾರಣೆ, ಕೆಮ್ಮು, ಜೀರ್ಣಕಾರಿ ಬೆಂಬಲ)",
            description: "ಶಾಸ್ತ್ರೀಯ ಗ್ರಂಥದ ಪುರಾವೆ ಅಥವಾ ಕ್ಲಿನಿಕಲ್ ಡೇಟಾದೊಂದಿಗೆ ಮಾನ್ಯವಾಗಿದೆ.",
          },
          {
            value: "Cosmetic Enhancement (e.g., Skin whitening, Anti-aging)",
            label: "ಸೌಂದರ್ಯವರ್ಧಕ ಸುಧಾರಣೆ (ಉದಾ. ತ್ವಚೆಯ ಕಾಂತಿ, ವಯಸ್ಸಾಗುವಿಕೆ ತಡೆ)",
            description: "ಸೌಂದರ್ಯವರ್ಧಕ ಮಾನದಂಡಗಳು ಮತ್ತು ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆಯ ತಪ್ಪುದಾರಿಗೆಳೆಯುವ ಜಾಹೀರಾತು ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
        ],
      },
      {
        name: "labeling_readiness",
        label: "ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಲೇಬಲ್ ಅನುಸರಣೆ",
        type: "radio",
        options: [
          {
            value: "Bilingual Label with Complete Ingredients, Batch No, Expiry, and Warning Statements",
            label: "ಸಂಪೂರ್ಣ ಪದಾರ್ಥಗಳು, ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ, ಮುಕ್ತಾಯ ದಿನಾಂಕ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಹೇಳಿಕೆಗಳೊಂದಿಗೆ ದ್ವಿಭಾಷಾ ಲೇಬಲ್",
            description: "ಔಷಧಿಗಳು ಮತ್ತು ಸೌಂದರ್ಯವರ್ಧಕಗಳ ನಿಯಮಗಳ ರೂಲ್ 161 ರ ಅಡಿಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಅನುಗುಣವಾಗಿದೆ.",
          },
          {
            value: "English-Only Label without Classical Text Reference",
            label: "ಶಾಸ್ತ್ರೀಯ ಗ್ರಂಥದ ಉಲ್ಲೇಖವಿಲ್ಲದೆ ಕೇವಲ ಇಂಗ್ಲಿಷ್ ಲೇಬಲ್",
            description: "ಸ್ಥಳೀಯ ಭಾಷೆಯ ನಿಯಮಗಳು ಮತ್ತು ಆಯುರ್ವೇದ ಗ್ರಂಥಗಳ ಉಲ್ಲೇಖದ ಕೊರತೆಯಿಂದಾಗಿ ತಿದ್ದುಪಡಿ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "Preliminary Packaging Mockup Only",
            label: "ಕೇವಲ ಪ್ರಾಥಮಿಕ ಪ್ಯಾಕೇಜಿಂಗ್ ಮಾದರಿ ಮಾತ್ರ",
            description: "ಅಧಿಕೃತ ಸಲ್ಲಿಕೆಗೆ ಮೊದಲು ನಿಯಂತ್ರಕ ತಜ್ಞರಿಂದ ಸಂಪೂರ್ಣ ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "ಮಾರುಕಟ್ಟೆ ವಿಸ್ತರಣೆ ಮತ್ತು ರಫ್ತು ಚಟುವಟಿಕೆಗಳು",
    description: "ನಿಮ್ಮ ಉದ್ದೇಶಿತ ಮಾರಾಟ ಮಾರ್ಗಗಳು, ರಫ್ತು ನಿಯಮಗಳು ಮತ್ತು ಜಾಗತಿಕ ಪೇಟೆಂಟ್ ತಂತ್ರವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    fields: [
      {
        name: "commercial_intent",
        label: "ವಾಣಿಜ್ಯೀಕರಣ ಮತ್ತು ವಿತರಣಾ ಮಾರ್ಗಗಳು",
        type: "checkbox",
        options: [
          {
            value: "Domestic Sale in India via Pharmacies & Clinics",
            label: "ಔಷಧಾಲಯಗಳು ಮತ್ತು ಚಿಕಿತ್ಸಾಲಯಗಳ ಮೂಲಕ ಭಾರತದಲ್ಲಿ ದೇಶೀಯ ಮಾರಾಟ",
            description: "ಪ್ರಮಾಣಿತ ರಾಜ್ಯ ಆಯುಷ್ ಪರವಾನಗಿ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ನೋಂದಣಿ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "E-Commerce / Direct-to-Consumer (D2C) Across India",
            label: "ಭಾರತದಾದ್ಯಂತ ಇ-ಕಾಮರ್ಸ್ / ಡಿ2ಸಿ (D2C) ನೇರ ಮಾರಾಟ",
            description: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ (ಇ-ಕಾಮರ್ಸ್) ನಿಯಮಗಳು 2020 ಮತ್ತು ಸರಿಯಾದ ಲೇಬಲ್ ಪ್ರದರ್ಶನ ಕಡ್ಡಾಯ.",
          },
          {
            value: "Export to Stringent Regulatory Markets (US FDA, EU EMA)",
            label: "ಕಠಿಣ ನಿಯಂತ್ರಕ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ರಫ್ತು (US FDA, EU EMA)",
            description: "ಕಡ್ಡಾಯ CoPP ಪ್ರಮಾಣಪತ್ರ, WHO-GMP ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಭಾರಲೋಹ ಮಿತಿಗಳ ಪಾಲನೆ ಅಗತ್ಯ.",
          },
          {
            value: "Export to Southeast Asia, Middle East, or Africa",
            label: "ಆಗ್ನೇಯ ಏಷ್ಯಾ, ಮಧ್ಯಪ್ರಾಚ್ಯ ಅಥವಾ ಆಫ್ರಿಕಾಕ್ಕೆ ರಫ್ತು",
            description: "ಆಯುಷ್ ರಫ್ತು ಪ್ರಚಾರ ಮಂಡಳಿ (AYUEXCIL) ನೋಂದಣಿ ಮತ್ತು ಆಯಾ ದೇಶಗಳ ನೋಂದಣಿ ಅಗತ್ಯ.",
          },
          {
            value: "Third-Party Institutional Supply (Government / Hospital Tenders)",
            label: "ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಸಾಂಸ್ಥಿಕ ಪೂರೈಕೆ (ಸರ್ಕಾರಿ / ಆಸ್ಪತ್ರೆ ಟೆಂಡರ್‌ಗಳು)",
            description: "ಕಟ್ಟುನಿಟ್ಟಾದ ಗುಣಮಟ್ಟದ ಆಡಿಟ್‌ಗಳು, NABL ಪರೀಕ್ಷಾ ವರದಿಗಳು ಮತ್ತು ಸ್ಥಿರತೆಯ ಡೇಟಾ ಅಗತ್ಯ.",
          },
        ],
      },
      {
        name: "cross_border_compliance",
        label: "ಗಡಿಯಾಚೆಗಿನ ನಿಯಂತ್ರಕ ಮತ್ತು ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಅನುಸರಣೆ",
        type: "checkbox",
        options: [
          {
            value: "WHO-GMP Certification Completed",
            label: "WHO-GMP ಪ್ರಮಾಣೀಕರಣ ಪೂರ್ಣಗೊಂಡಿದೆ",
            description: "ಅಧಿಕೃತ ಆಯುಷ್ CoPP ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ರಫ್ತು ಅರ್ಹತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.",
          },
          {
            value: "US FDA Dietary Supplement cGMP (21 CFR Part 111) Audited",
            label: "US FDA ಆಹಾರ ಪೂರಕ cGMP (21 CFR ಭಾಗ 111) ಆಡಿಟ್ ಮಾಡಲಾಗಿದೆ",
            description: "ಯುಎಸ್ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ವಿತರಣೆಗೆ ಅಗತ್ಯವಾದ ಅನುಸರಣೆ.",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "ಯುರೋಪಿಯನ್ ಯೂನಿಯನ್: ನಾವೆಲ್ ಫುಡ್ ನಿಯಂತ್ರಣ (EU 2015/2283)",
            description: "ಮೇ 1997 ಕ್ಕಿಂತ ಮೊದಲು ಇಯುನಲ್ಲಿ ಬಳಕೆಯ ಇತಿಹಾಸವಿಲ್ಲದ ಸಸ್ಯ ಪ್ರಭೇದಗಳಿಗೆ ಅಗತ್ಯವಿದೆ.",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "ಭಾರತೀಯ ಪೇಟೆಂಟ್ (IPO) ಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ",
            description: "ಸೆಕ್ಷನ್ 6 ರ ಅಡಿಯಲ್ಲಿ NBA ಯಿಂದ ಫಾರ್ಮ್ III ಮುನ್ನನುಮೋದನೆ ಕಡ್ಡಾಯ; ಸೆಕ್ಷನ್ 3(p) TKDL ಪರಿಶೀಲನೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "ಜಾಗತಿಕ ಪೇಟೆಂಟ್‌ಗಳ (PCT / ಅಂತರರಾಷ್ಟ್ರೀಯ ಕಚೇರಿಗಳು) ಫೈಲಿಂಗ್",
            description: "ಸೆಕ್ಷನ್ 6 ರ ಅಡಿಯಲ್ಲಿ ಕಡ್ಡಾಯ ಪೂರ್ವ NBA ಅನುಮೋದನೆ; ಜೈವಿಕ ಮೂಲದ ಬಹಿರಂಗಪಡಿಸುವಿಕೆ ಅಂತರರಾಷ್ಟ್ರೀಯ ಒಪ್ಪಂದಗಳ ಅನುಸರಣೆ.",
          },
        ],
      },
    ],
  },
];

const SANSKRIT_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "संरचना सक्रियाङ्गाश्च",
    description: "स्वोत्पादस्य मुख्यानां सक्रियाङ्गानां पारम्परिकज्ञानस्रोतानां च परिभाषां कुर्वन्तु।",
    fields: [
      {
        name: "ingredients",
        label: "मुख्याः सक्रियाङ्गाः (द्रव्याणि)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "अश्वगन्धा (विथानिया सोम्निफेरा)",
            description: "सामान्य-रसायनम्। आयुष-मानक-नियमानाम् अन्तः प्रायः सुरक्षितम्।",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "तुलसी (ओसीमम् सैंक्टम्)",
            description: "पवित्रा तुलसी। व्यापकरूपेण उत्पादिता, न्यूनतम-नियामक-जोखिमः।",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "रक्तचन्दनम् (टेरोकार्पस् सैन्टालिनस्)",
            description: "अतिसंकटापन्नम्। सीआईटीईएस (CITES) तथा राष्ट्रिय-जैवविविधताप्राधिकरणस्य (NBA) कठोर-निरीक्षणम्।",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "जटामांसी (नार्डोस्टैचिस् जटामांसी)",
            description: "संकटापन्ना हिमालया वनस्पतिः। कठोर-प्रवेश-लाभ-वितरणस्य (ABS) अनुपालनम् अनिवार्यम्।",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "शुद्ध-रासायनिक-सारः (यथा कुर्कुमिन् ९५%)",
            description: "न तु समग्र-वनस्पतिः। फाइटोफार्मास्युटिकल-नियमाः प्रवर्तन्ते।",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "निम्बः (अज़ाडिराक्टा इण्डिका)",
            description: "शास्त्रीयं कृमिघ्नं द्रव्यम्। ईपीओ-पेटेण्ट-निरसन-निदर्शनम्; टीकेडीएल-संरक्षणम्।",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "हरिद्रा (कुर्कुमा लोङ्गा)",
            description: "व्रणरोपण-शोथहर-गुणाः। सीएसआईआर अमेरिकन-पेटेण्ट-निरसन-निदर्शनम् (TKDL)।",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "काश्मीर-केसरम् (क्रोकस् सैटाइवस्)",
            description: "भौगोलिक-उपदर्शन (GI) संरक्षितं मूल्यवत् द्रव्यम्। कठोर-शुद्धता-मानकाः।",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "गुग्गुलुः (कॉमिफोरा मुकुल्)",
            description: "विनियमितः निर्यासः। आयुर्वेदिक-फार्माकोपिया (API) गुग्गुलस्टेरोन्-मानकानुसारी।",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "कटुकी (पिक्रोरिज़ा कुरोआ)",
            description: "सीआईटीईएस परिशिष्ट II तथा जैवविविधता-अधिनियमस्य धारा ३८ संकटापन्न-सूचौ अन्तर्भूता।",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "सर्पगन्धा (राउवोल्फिया सर्पेण्टीना)",
            description: "रेसर्पिन्-युक्ता वनस्पतिः। अनुसूची E(1) तथा धारा ३८ जैवविविधता-प्रतिबन्ध-सूचौ अन्तर्भूता।",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "वत्सनाभः / मीठविषम् (एकोनिटम् फेराक्स)",
            description: "अनुसूची E(1) विषद्रव्यम्। अनिवार्यं शास्त्रीय-शोधनम् रक्त-लेबल-चेतावनी च आवश्यकी।",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "विजया / भाङ्गा (कैनबिस सैटाइवा)",
            description: "अनुसूची E(1) मादकद्रव्यम्। एनडीपीएस-अधिनियमः तथा राज्य-आबकारी-अनुज्ञापत्राधीनम्।",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "ब्राह्मी (बाकोपा मोन्निएरी)",
            description: "शास्त्रीयं मेध्य-रसायनम्। बाकोसाइड-परीक्षणं तथा गुरुधातु-मर्यादाधीना।",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "त्रिफला (आमलकी, हरीतकी, विभीतकी)",
            description: "शास्त्रीय-बहुमूलिका-योगः। पेटेण्ट-अधिनियमस्य धारा ३(p) पारम्परिक-ज्ञानरूपेण संरक्षिता।",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "स्वर्णभस्म (संस्करित-स्वर्ण-भस्म)",
            description: "हर्बो-मैटालिक रसौषधिः। अनुसूची T भाग I-F जीएमपी तथा अशुद्धि-मर्यादाधीना।",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "योगज्ञानस्य स्रोतः",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "शास्त्रीयग्रन्थाः (यथा चरकसंहिता, सुश्रुतसंहिता)",
            description: "नियम १५८B(I)(A) अनुसृत्य नूतन-सुरक्षा-क्लिनिकल-दत्तांशात् विमुक्तिः।",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "स्वामित्व-मिश्रणम् (पेटेण्ट एवं प्रोप्राइटरी - P&P)",
            description: "धारा ३(h) तथा नियम १५८B(II) अनुसृत्य मानक-पेटेण्ट-नियमाः प्रवर्तन्ते।",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "जनजातीयं / पारम्परिक-सामुदायिकं ज्ञानम्",
            description: "स्थानिक-समुदायैः जैवविविधता-प्रबन्धन-समितिभिः (BMC) च सह अनिवार्य-लाभ-साझाकरण-अनुबन्धः।",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "भारतीय-आयुर्वेदिक-फार्माकोपिया (API) / AFI मानकाः",
            description: "औषध-प्रसाधन-अधिनियमस्य द्वितीय-अनुसूची-अन्तर्गताः आधिकारिक-मानक-ग्रन्थाः।",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "सिद्ध- अथवा यूनानी-शास्त्रीयग्रन्थाः",
            description: "सिद्ध- अथवा यूनानी-पद्धत्योः प्रथम-अनुसूची-अन्तर्गताः मान्याः ग्रन्थाः।",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "नवीनम् आन्तरिक-अनुसन्धानम् / अभिनव-योगः",
            description: "सम्पूर्णतया नवीना वानस्पतिक-रचना; यदि धारा ३(p)/३(e) वर्जिता न स्यात् तर्हि पेटेण्ट-योग्या।",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "असंहिताबद्ध-नृवंशवानस्पतिक-सङ्ग्रहः (PBR)",
            description: "लोक-जैवविविधता-पञ्जिकासु प्रलेखीकृता; अनिवार्य-ABS-स्वीकृतिः।",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "उत्पादनं प्रसंस्करणं च",
    description: "उत्पादस्य निर्माण-प्रक्रियायाः अन्तिम-भौतिक-स्वरूपस्य च विवरणं प्रदर्शयन्तु।",
    fields: [
      {
        name: "processingMethod",
        label: "विनिर्माण-प्रक्रिया",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "आर्द्रम् / चूर्णितम् / क्वाथितम् (जलीय-निष्कर्षणम्)",
            description: "मानक-शास्त्रीय-आयुर्वेदिक-निर्माणम् (कषाय / क्वाथ प्रक्रिया)।",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "द्रावक-निष्कर्षणम् (अल्कोहल्, हेक्सेन्)",
            description: "अवशिष्ट-द्रावक-प्रकटनम्, टीएलसी-फिङ्गरप्रिण्टिङ्गं तथा गुरुधातु-परीक्षणम् अनिवार्यम्।",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "उन्नत-रासायनिक-पृथक्करणम् (आइसोलेशन)",
            description: "फाइटोफार्मास्युटिकल-वर्गीकरणम्। सीडीएससीओ-अनुमोदनं क्लिनिकल-परीक्षणं च आवश्यकम्।",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "शास्त्रीयं सन्धानम् (आसवाः अरिष्टाश्च)",
            description: "स्वयं-जातः मद्यसारः (<१२%); नियम १५१ मद्य-आबकारी-नियमाधीना।",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "सिद्ध-घृत-तैल-निर्माणम् (स्नेह-कल्पना)",
            description: "शास्त्रीयं स्नेह-निष्कर्षणम्; विकृतगन्धता, पेरोक्साइड-मान-परीक्षणम् आवश्यकम्।",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "शास्त्रीय-भस्म-निर्माणम् (शोधनं मारणं च)",
            description: "रसशास्त्र-विषापहारः मारणं च; अनुसूची T सुरक्षा-मानकानुपालनम्।",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "सुपरक्रिटिकल-द्रव-CO2-निष्कर्षणम् (SCFE)",
            description: "हरित-द्रावक-मुक्त-निष्कर्षणम्; पेटेण्ट-अधिनियमस्य धारा ५ प्रक्रिया-पेटेण्ट-योग्या।",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "नैनो-लिपोसोमल् / नवीन-हर्बल-ड्रग-डिलिवरी (NDDS)",
            description: "जैव-उपलब्धता-वर्धनम्; सीडीएससीओ नूतनौषध-नियमान् आकर्षति।",
          },
        ],
      },
      {
        name: "finalForm",
        label: "अन्तिम-उत्पाद-स्वरूपम्",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "मौखिकं ठोसम् (गुलिकाः, कैप्सूल, वटी, गुटिका)",
            description: "आभ्यन्तरौषधयः गुरुधातु-मानक-विघटन-सूक्ष्मजीव-मर्यादाधीनाः।",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "मौखिकं द्रवम् (सन्धान-आसव-अरिष्ट-सिरप)",
            description: "विशिष्ट-गुरुत्व-मद्यसार-मर्यादा-सत्यापनं (<१२%) सूक्ष्मजीव-परीक्षणं च।",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "मौखिकं चूर्णम् / कणिकाः (चूर्णम्, क्वाथ-चूर्णम्)",
            description: "एपीआई-अन्तर्गतानि कण-परिमाण-जाल-मानकानि आर्द्रता-मर्यादाश्च।",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "शास्त्रीयम् अर्ध-ठोसम् (अवलेहः, लेह्यम्, च्यवनप्राशः)",
            description: "शर्करा/मधु-आधारितम्; कुल-ठोस-पदार्थाः शर्करा-सहिष्णुता-परीक्षणम्।",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "सिद्धं तैलम् / घृतम् (तैलम्, घृतम्)",
            description: "मौखिकम् अथवा बाह्यम् उपयोजनम्; विकृतगन्धता-परीक्षणं साबुनीकरण-मानकाश्च।",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "स्थानिकम् / बाह्यम् अर्ध-ठोसम् (क्रीम, जेल, लेपः, बाम)",
            description: "अनुसूची M-II सौन्दर्यप्रसाधनम् अथवा एएसयू बाह्योपयोजनरूपेण सरलं विधानम्।",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "निर्जन्तुकाः बिन्दवः: नासिका / नेत्रम् (नस्यम्, नेत्रबिन्दुः)",
            description: "कठोर-निर्जन्तुकता-मानकाः सूक्ष्मकण-परीक्षणं संरक्षकाविष्करणं च अनिवार्यम्।",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "आयुर्वेद-आहारः / उपयोगाय सज्जम् आहारद्रव्यम्",
            description: "खाद्य-सुरक्षा-मानक (आयुर्वेद-आहार) विनियम २०२२ अनुसृत्य विनियमितम्।",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "स्रोतांसि संस्था-स्वामित्वं च",
    description: "जैविक-संसाधनानाम् उत्पत्ति-क्षेत्रं संस्थायाः स्वामित्व-संरचनां च निर्दिशन्तु।",
    fields: [
      {
        name: "sourcingRegion",
        label: "मुख्य-स्रोतः-क्षेत्रम्",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "केरलम् (यथा नवारा-तण्डुलः, मलबार-मरीचम्)",
            description: "भौगोलिक-उपदर्शनस्य (GI) संरक्षणस्य उच्च-सम्भावना।",
          },
          {
            value: "Himalayan Belt",
            label: "हिमालय-मण्डलम्",
            description: "उच्च-तुङ्गतायाः वनस्पतयः। राज्य-वन-विभागस्य कठोर-निरीक्षणम्।",
          },
          {
            value: "Imported from outside India",
            label: "भारतस्य बहिः आयातीतम्",
            description: "भारत-जैवविविधता-अधिनियमात् मुक्तम्, किन्तु पादप-सङ्गरोध-अनुज्ञापत्राधीनम्।",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "पश्चिम-घट्ट-जैवविविधता-हॉटस्पॉट्",
            description: "स्थानिक-जातयः; राज्य-जैवविविधता-मण्डलस्य (SBB) कठोर-जाँचः धारा ७ पूर्व-सूचना च।",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "मध्य-पूर्व-जनजातीय-मण्डलम् (बस्तर, छोटानागपुर, ओडिशा)",
            description: "जनजातीय-ज्ञान-बहुलम्; जैवविविधता-प्रबन्धन-समितिभिः सह धारा ४१ ABS।",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "प्रमाणीकृता कृषि-भूमिः / कृषि-वानिकी",
            description: "जैवविविधता (संशोधन) अधिनियम २०२३ अनुसृत्य ABS-नियमेभ्यः मुक्ता प्रमाणीकृता कृषिः।",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "सामान्यतया व्यापृतानि वस्तूनि (धारा ४० अन्तर्गतानि NTC)",
            description: "यथा हरिद्रा, शुण्ठी; विशुद्ध-वाणिज्यिक-वस्तूनां निर्याते ABS-विमुक्तिः।",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "संस्था-स्वामित्व-संरचना",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "१००% भारतीय-नागरिकाः / भारतीय-स्वामित्व-युक्ता संस्था",
            description: "जैवविविधता-अधिनियमस्य धारा ७ प्रवर्तते (राज्य-मण्डलाय पूर्व-सूचना)।",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "वैदेशिक-इक्विटी / FDI / NRI भागधारिता-युक्ता",
            description: "जैवविविधता-अधिनियमस्य धारा ३(२) प्रवर्तते (प्रपत्र-१ द्वारा NBA अनिवार्य-स्वीकृतिः)।",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "वैदेशिक-निगमः / बहुराष्ट्रीया संस्था (भारतस्य बहिः)",
            description: "धारा ३(१) पूर्ण-प्रतिबन्धाः; NBA पूर्व-स्वीकृतिः कठोर-ABS-अनुबन्धश्च आवश्यकः।",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "पञ्जीकृतः आयुष-चिकित्सकः (वैद्यः / पारम्परिक-उपचारकः)",
            description: "संशोधित-जैवविविधता-अधिनियम २०२३ अनुसृत्य वैयक्तिक-अभ्यासाय SBB-सूचनातः विमुक्तिः।",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "कृषक-उत्पादक-सङ्घटनम् (FPO) / ग्राम्य-सहकारी-समितिः",
            description: "संशोधित-विधेः धारा ७ परन्तुकानुसृत्य स्थानिक-उत्पादकाः ABS-मुक्ताः।",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "भारत-सर्वकारेण / CSIR / ICMR सह सहयोगी-अनुसन्धानम्",
            description: "केन्द्रीय-सर्वकारस्यानुमोदनाधीनम् धारा ५ सहयोगी-अनुसन्धान-विमुक्तये योग्यम्।",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "नामाङ्कनं स्वास्थ्य-प्रतिपादनानि च",
    description: "उत्पादस्य विपणन-पत्रे नामाङ्कन-फलके च प्रदर्शितानि प्रतिपादनानि चिनुत।",
    fields: [
      {
        name: "healthClaims",
        label: "लक्षितानि स्वास्थ्य-प्रतिपादनानि",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "रोगप्रतिरोधक-क्षमतायाः सामान्य-स्वास्थ्यस्य च संवर्धनम्",
            description: "सुरक्षितं प्रतिपादनम्। एएससीआई (ASCI) संहिता-अनुरूपम्।",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'त्वचः दीप्तेः कान्तेश्च वर्धनम् ("वर्ण्यम्")',
            description: "त्वक्-स्वास्थ्यस्य सामयिक-योगानां च कृते सुरक्षितं सौन्दर्य-प्रतिपादनम्।",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "प्रमेहस्य / कर्कटस्य / अन्धतायाः पूर्ण-उपचारः",
            description: "कठोरतया निषिद्धम्। औषधि-चमत्कारिक-उपचार-अधिनियमस्य (DMR) अनुसूची-J उल्लङ्घनम्।",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "क्लिनिकली प्रमाणितम् / सीटीआरआई पञ्जीकृत-परीक्षणम्",
            description: "सीटीआरआई पञ्जीकृत-मानव-चिकित्सीय-परीक्षणस्य अभिलेखः अनिवार्यः।",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'शास्त्रीयं कायाकल्पं बलवर्धनं च ("रसायनम्" / "बल्यम्")',
            description: "प्रथम-अनुसूची-ग्रन्थैः मान्यानि शास्त्रीयाणि औषध-लक्षणानि; परीक्षणं न अनिवार्यम्।",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'पाचनं चयापचय-स्वास्थ्यं च ("दीपनम्" / "पाचनम्")',
            description: "आयुष तथा आयुर्वेद-आहार-नियमान्तर्गतं ग्राह्यं संरचना-कार्य-प्रतिपादनम्।",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "सन्धि-सञ्चालनं शूल-निवारणं च (लक्षणात्मक-शान्तिः)",
            description: "ग्राह्यं लक्षणात्मकं प्रतिपादनम्; सन्धिशूलस्य स्थायी-उपचार-कथनं DMR-अधिनियमे निषिद्धम्।",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'तनाव-मुक्तिः, स्मृति-निद्रा-साहाय्यं च ("मेध्यम्")',
            description: "ग्रन्थोक्त-प्रमाणेन पुष्टं चेत् एएससीआई-मार्गदर्शिकानुसृत्य ग्राह्यम्।",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"१००% प्राकृतिकम् / शुद्ध-आयुर्वेदिकम् / शून्य-दुष्प्रभावम्"',
            description: "एएससीआई-जाँच-विषयः: कस्मैचित् अपि स्वास्थ्योत्पादाय 'शून्य-दुष्प्रभावम्' इति पूर्णतया निषिद्धम्।",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"स्थौल्यस्य / उच्चरक्तचापस्य / हृद्रोगस्य स्थायी-उपचारः"',
            description: "औषधि-चमत्कारिक-उपचार-अधिनियमस्य अनुसूची-अन्तर्गतं कठोरतया निषिद्धम्।",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "लक्षिताः वैश्विक-विपणि-क्षेत्राणि",
    description: "उत्पाद-वितरणाय बौद्धिक-सम्पदा-संरक्षणाय च लक्षिताः विपणीः चिनुत।",
    fields: [
      {
        name: "targetMarkets",
        label: "लक्षिताः विपणयः अनुज्ञापत्राणि च",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "घरेलु-भारतम्: शास्त्रीय-आयुष-औषधम् (प्रपत्र 25D अनुज्ञापत्रम्)",
            description: "नियम १५८B(I) अनुसृत्य शास्त्रीय-ग्रन्थ-सन्दर्भेण अनुसूची T जीएमपी अन्तर्गतं निर्माणम्।",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "घरेलु-भारतम्: पेटेण्ट अथवा प्रोप्राइटरी (P&P) औषधम्",
            description: "नियम १५८B(II) अनुशासितम्; प्रकाशित-साहित्यं लघु-क्लिनिकल-दत्तांशो वा आवश्यकः।",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "घरेलु-भारतम्: आयुर्वेद-आहारः / FSSAI न्यूट्रास्युटिकल्",
            description: "खाद्य-सुरक्षा-मानक विनियम २०२२ अनुसारं विनियमितम्; रोगनिवारण-दावा न शक्यते।",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "संयुक्त-राज्य-अमेरिका: यूएस FDA आहारीय-परिपूरकम् (DSHEA)",
            description: "21 CFR भाग 111 cGMP तथा अनिवार्य-FDA-अस्वीकरण-कथनम् आवश्यकम्।",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "संयुक्त-राज्य-अमेरिका: MoCRA सामयिक-प्रसाधनम्",
            description: "MoCRA 2022 अन्तर्गतम् अनिवार्य-FDA-पञ्जीकरणम्, उत्पाद-सूची, सुरक्षा-प्रमाणीकरणं च।",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "यूरोपीय-सङ्घः: पारम्परिक-हर्बल-औषधयः (THMPD)",
            description: "३० वर्षाणां पारम्परिकौषधोपयोगस्य प्रलेखनम् आवश्यकम् (EU मध्ये १५ वर्षसहितम्)।",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "यूरोपीय-सङ्घः: नोवेल्-फूद्-विनियमनम् (EU 2015/2283)",
            description: "मई १९९७ पूर्वात् पूर्वम् उपयोगस्य इतिहास-विहीनाभ्यः वनस्पतिभ्यः आवश्यकम्।",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "भारतीय-पेटेण्ट् (IPO) कृते आवेदनम्",
            description: "धारा ६ अनुसृत्य NBA-तः प्रपत्र-III पूर्व-अनुमोदनम् आवश्यकम्; धारा ३(p) TKDL परीक्षाधीना।",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "वैश्विक-पेटेण्ट् (PCT / अन्ताराष्ट्रिय-कार्यालयाः) आवेदनम्",
            description: "धारा ६ अनुसृत्य अनिवार्यं पूर्व-NBA-अनुमोदनम्; आनुवंशिक-स्रोताविष्कार-WIPO-सन्ध्यानुपालनम्।",
          },
        ],
      },
    ],
  },
];

const GUJARATI_MODULES: LocalizedModule[] = [
  {
    id: 1,
    title: "રચના અને સક્રિય ઘટકો",
    description: "તમારા ઉત્પાદનના મુખ્ય સક્રિય ઘટકો અને ફોર્મ્યુલેશનના મૂળ પરંપરાગત જ્ઞાન સ્ત્રોતને વ્યાખ્યાયિત કરો.",
    fields: [
      {
        name: "ingredients",
        label: "મુખ્ય સક્રિય ઘટકો (સામગ્રી)",
        type: "checkbox",
        options: [
          {
            value: "Ashwagandha (Withania somnifera)",
            label: "અશ્વગંધા (વિથાનિયા સોમ્નિફેરા)",
            description: "સામાન્ય એડેપ્ટોજેન. માનક આયુષ નિયમો હેઠળ સામાન્ય રીતે સુરક્ષિત.",
          },
          {
            value: "Tulsi (Ocimum sanctum)",
            label: "તુલસી (ઓસીમમ સેંક્ટમ)",
            description: "પવિત્ર તુલસી. વ્યાપકપણે ખેતી કરવામાં આવતી, ન્યૂનતમ નિયમનકારી જોખમ.",
          },
          {
            value: "Red Sanders (Pterocarpus santalinus)",
            label: "રક્ત ચંદન (ટેરોકાર્પસ સેન્ટાલિનસ)",
            description: "અત્યંત સંકટગ્રસ્ત. સીઆઈટીઈએસ (CITES) અને રાષ્ટ્રીય જૈવ વિવિધતા સત્તામંડળ (NBA) ની કડક તપાસ.",
          },
          {
            value: "Jatamansi (Nardostachys jatamansi)",
            label: "જટામાસી (નાર્ડોસ્ટેચિસ જટામાસી)",
            description: "સંકટગ્રસ્ત હિમાલયન ઔષધિ. કડક એક્સેસ એન્ડ બેનિફિટ શેરિંગ (ABS) અનુપાલન ફરજિયાત.",
          },
          {
            value: "Purified Chemical Extract (e.g., Curcumin 95%)",
            label: "શુદ્ધ રાસાયણિક અર્ક (દા.ત., કરક્યુમિન 95%)",
            description: "સંપૂર્ણ વનસ્પતિ નથી. ફાઇટોફાર્માસ્યુટિકલ નિયમો લાગુ થઈ શકે છે.",
          },
          {
            value: "Neem (Azadirachta indica)",
            label: "લીમડો (અઝાદિરાક્ટા ઈન્ડિકા)",
            description: "શાસ્ત્રીય જીવાણુનાશક વનસ્પતિ. ઐતિહાસિક EPO પેટન્ટ રદ્દીકરણ નઝીર; TKDL પૂર્વ-કલા સંરક્ષણ.",
          },
          {
            value: "Turmeric / Haridra (Curcuma longa)",
            label: "હળદર / હરિદ્રા (કરક્યુમા લોંગા)",
            description: "ઘા રૂઝવવા અને સોજા વિરોધી ગુણો. CSIR અમેરિકન પેટન્ટ રદ્દીકરણ ઉદાહરણ (TKDL).",
          },
          {
            value: "Kashmiri Saffron (Crocus sativus)",
            label: "કાશ્મીરી કેસર (ક્રોકસ સેટાઇવસ)",
            description: "સંરક્ષિત ભૌગોલિક સંકેત (GI) ધરાવતો કિંમતી મસાલો. કડક શુદ્ધતા ધોરણો.",
          },
          {
            value: "Guggulu (Commiphora mukul)",
            label: "ગૂગળ (કોમિફોરા મુકુલ)",
            description: "નિયંત્રિત રેઝિન. આયુર્વેદિક ફાર્માકોપિયા (API) ગુગ્ગુલસ્ટેરોન ધોરણોને આધીન.",
          },
          {
            value: "Kutki (Picrorhiza kurroa)",
            label: "કુટકી (પિક્રોરહિઝા કુરોઆ)",
            description: "CITES પરિશિષ્ટ II અને જૈવ વિવિધતા અધિનિયમની કલમ 38 સંકટગ્રસ્ત પ્રજાતિ સૂચિમાં સામેલ.",
          },
          {
            value: "Sarpgandha (Rauvolfia serpentina)",
            label: "સર્પગંધા (રાઉવોલ્ફિયા સર્પેન્ટિના)",
            description: "રેસરપાઈન ધરાવતી વનસ્પતિ. પરિશિષ્ટ E(1) અને કલમ 38 પ્રતિબંધિત સૂચિમાં સામેલ.",
          },
          {
            value: "Vatsanabha / Indian Aconite (Aconitum ferox)",
            label: "વત્સનાભ / મીઠું ઝેર (એકોનિટમ ફેરોક્સ)",
            description: "પરિશિષ્ટ E(1) ઝેરી વનસ્પતિ. ફરજિયાત શાસ્ત્રીય શુદ્ધિકરણ અને લાલ લેબલ ચેતવણી જરૂરી.",
          },
          {
            value: "Bhang / Vijaya (Cannabis sativa)",
            label: "ભાંગ / વિજયા (કેનાબીસ સેટાઇવા)",
            description: "પરિશિષ્ટ E(1) માદક વનસ્પતિ. NDPS એક્ટ અને રાજ્ય આબકારી લાયસન્સને આધીન.",
          },
          {
            value: "Brahmi (Bacopa monnieri)",
            label: "બ્રાહ્મી (બાકોપા મોનિરી)",
            description: "શાસ્ત્રીય મેધ્ય રસાયણ (યાદશક્તિ વર્ધક). પ્રમાણિત બેકોસાઇડ પરીક્ષણને આધીન.",
          },
          {
            value: "Triphala (Amalaki, Haritaki, Bibhitaki)",
            label: "ત્રિફળા (આમળા, હરડે, બહેડા)",
            description: "શાસ્ત્રીય પોલીહર્બલ સંયોજન. પેટન્ટ કાયદાની કલમ 3(p) હેઠળ પરંપરાગત જ્ઞાન તરીકે સંરક્ષિત.",
          },
          {
            value: "Swarna Bhasma (Incinerated Gold Ash)",
            label: "સુવર્ણ ભસ્મ (શુદ્ધ સુવર્ણ ભસ્મ)",
            description: "રસૌષધિ. પરિશિષ્ટ T ભાગ I-F જીએમપી અને ભારે ધાતુ અશુદ્ધિ મર્યાદાઓને આધીન.",
          },
        ],
      },
      {
        name: "knowledgeSource",
        label: "ફોર્મ્યુલેશન જ્ઞાનનો સ્ત્રોત",
        type: "radio",
        options: [
          {
            value: "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
            label: "શાસ્ત્રીય ગ્રંથો (દા.ત., ચરક સંહિતા, સુશ્રુત સંહિતા)",
            description: "નિયમ 158B(I)(A) હેઠળ નવા સુરક્ષા/ક્લિનિકલ ડેટામાંથી મુક્તિ.",
          },
          {
            value: "Proprietary Mix (Patent & Proprietary - P&P)",
            label: "માલિકીનું મિશ્રણ (પેટન્ટ અને પ્રોપ્રાઇટરી - P&P)",
            description: "કલમ 3(h) અને નિયમ 158B(II) હેઠળ માનક પેટન્ટ અને પ્રોપ્રાઇટરી નિયમો લાગુ.",
          },
          {
            value: "Tribal / Traditional Community Knowledge",
            label: "આદિવાસી / પરંપરાગત સામુદાયિક જ્ઞાન",
            description: "સ્થાનિક સમુદાયો અને જૈવ વિવિધતા વ્યવસ્થાપન સમિતિઓ (BMC) સાથે ફરજિયાત લાભ-ભાગીદારી કરાર.",
          },
          {
            value: "Ayurvedic Pharmacopoeia of India (API) / AFI Standards",
            label: "ભારતીય આયુર્વેદિક ફાર્માકોપિયા (API) / AFI ધોરણો",
            description: "ડ્રગ્સ એન્ડ કોસ્મેટિક્સ એક્ટની બીજી અનુસૂચિ હેઠળ સત્તાવાર માન્ય ફાર્માકોપિયલ મોનોગ્રાફ.",
          },
          {
            value: "Siddha or Unani Classical Treatises",
            label: "સિદ્ધ અથવા યુનાની શાસ્ત્રીય ગ્રંથો",
            description: "સિદ્ધ અથવા યુનાની તિબ પદ્ધતિઓ હેઠળ પ્રથમ અનુસૂચિમાં સૂચિબદ્ધ અધિકૃત ગ્રંથો.",
          },
          {
            value: "Novel In-House R&D / Innovative Formulation",
            label: "નવીન ઇન-હાઉસ આરએન્ડડી / નવું ફોર્મ્યુલેશન",
            description: "સંપૂર્ણપણે નવીન હર્બલ સંયોજન; જો કલમ 3(p)/3(e) દ્વારા વર્જિત ન હોય તો પેટન્ટ યોગ્ય.",
          },
          {
            value: "Uncodified Ethnobotanical Field Collections (PBR)",
            label: "અસંહિતાબદ્ધ એથ્નોબોટનિકલ સંગ્રહ (PBR)",
            description: "પીપલ્સ બાયોડાયવર્સિટી રજિસ્ટરમાં નોંધાયેલ; ફરજિયાત ABS મંજૂરી.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "ઉત્પાદન અને પ્રક્રિયા",
    description: "ઉત્પાદનની ઉત્પાદન પ્રક્રિયા પદ્ધતિઓ અને અંતિમ ભૌતિક સ્વરૂપની વિગતો આપો.",
    fields: [
      {
        name: "processingMethod",
        label: "ઉત્પાદન પ્રક્રિયા",
        type: "radio",
        options: [
          {
            value: "Raw / Crushed / Water-Boiled (Aqueous)",
            label: "કાચું / ચૂર્ણ / ઉકાળેલું પાણી (જલીય નિષ્કર્ષણ)",
            description: "માનક શાસ્ત્રીય આયુર્વેદિક ઉત્પાદન (ક્વાથ પ્રક્રિયા).",
          },
          {
            value: "Solvent Extraction (Alcohol, Hexane)",
            label: "દ્રાવક નિષ્કર્ષણ (આલ્કોહોલ, હેક્ઝેન)",
            description: "અવશેષ દ્રાવક જાહેરાત, TLC ફિંગરપ્રિન્ટિંગ અને ભારે ધાતુ પરીક્ષણ ફરજિયાત.",
          },
          {
            value: "Advanced Chemical Isolation",
            label: "અદ્યતન રાસાયણિક અલગતા (આઇસોલેશન)",
            description: "ફાઇટોફાર્માસ્યુટિકલ તરીકે વર્ગીકૃત. CDSCO મંજૂરી અને ક્લિનિકલ ટ્રાયલ જરૂરી.",
          },
          {
            value: "Classical Fermentation (Asava & Arishta)",
            label: "શાસ્ત્રીય આથો (આસવ અને અરિષ્ટ)",
            description: "સ્વયં-ઉત્પન્ન આલ્કોહોલ (<12% v/v); નિયમ 151 આબકારી કાયદાને આધીન.",
          },
          {
            value: "Medicated Ghee / Oil Processing (Sneha Kalpana)",
            label: "સિદ્ધ ઘી / તેલ પ્રક્રિયા (સ્નેહ કલ્પના)",
            description: "શાસ્ત્રીય સ્નેહ પ્રક્રિયા; પેરોક્સાઇડ અને એસિડ મૂલ્ય પરીક્ષણ જરૂરી.",
          },
          {
            value: "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
            label: "શાસ્ત્રીય ભસ્મ ઉત્પાદન (શોધન અને મારણ)",
            description: "રસશાસ્ત્ર વિષહરણ અને મારણ; પરિશિષ્ટ T સુરક્ષા ધોરણોનું પાલન.",
          },
          {
            value: "Supercritical Fluid CO2 Extraction (SCFE)",
            label: "સુપરક્રિટિકલ ફ્લુઇડ CO2 નિષ્કર્ષણ (SCFE)",
            description: "ગ્રીન સોલ્વન્ટ-મુક્ત નિષ્કર્ષણ; પેટન્ટ એક્ટની કલમ 5 હેઠળ પ્રક્રિયા પેટન્ટ માટે પાત્ર.",
          },
          {
            value: "Nano-Liposomal / Novel Herbal Drug Delivery (NDDS)",
            label: "નેનો-લિપોસોમલ / નોવેલ હર્બલ ડ્રગ ડિલિવરી (NDDS)",
            description: "બાયો-ઉપલબ્ધતા વૃદ્ધિ; CDSCO નવી દવા/ફાઇટોફાર્માસ્યુટિકલ નિયમો આકર્ષે છે.",
          },
        ],
      },
      {
        name: "finalForm",
        label: "અંતિમ ઉત્પાદન સ્વરૂપ",
        type: "radio",
        options: [
          {
            value: "Oral Solid (Tablets, Capsules, Vati, Gutika)",
            label: "મૌખિક ઘન (ગોળીઓ, કેપ્સ્યુલ્સ, વટી, ગુટિકા)",
            description: "ભારે ધાતુ ધોરણો, વિસર્જન અને સુક્ષ્મજીવાણુ મર્યાદાઓને આધીન.",
          },
          {
            value: "Oral Liquid (Fermented Asava, Arishta, Syrup)",
            label: "મૌખિક પ્રવાહી (આસવ, અરિષ્ટ, સીરપ)",
            description: "આલ્કોહોલ મર્યાદા ચકાસણી (<12%) અને સુક્ષ્મજીવાણુ પરીક્ષણ જરૂરી.",
          },
          {
            value: "Oral Powder / Granules (Churna, Kwatha Churna)",
            label: "મૌખિક પાવડર / ગ્રાન્યુલ્સ (ચૂર્ણ, ક્વાથ ચૂર્ણ)",
            description: "API હેઠળ કણ કદ અને ભેજ સામગ્રી મર્યાદાઓ.",
          },
          {
            value: "Classical Semi-Solid (Avaleha, Lehyam, Chyawanprash)",
            label: "શાસ્ત્રીય અર્ધ-ઘન (અવલેહ, લેહ્યમ, ચ્યવનપ્રાશ)",
            description: "ખાંડ/મધ આધારિત; કુલ ઘન પદાર્થો અને શર્કરા પરીક્ષણને આધીન.",
          },
          {
            value: "Medicated Oil / Ghee (Taila, Ghrita)",
            label: "સિદ્ધ તેલ / ઘી (તૈલ, ઘૃત)",
            description: "મૌખિક અથવા બાહ્ય ઉપયોગ; એસિડ મૂલ્ય અને સાબુનીકરણ ધોરણો.",
          },
          {
            value: "Topical / External Semi-Solid (Cream, Gel, Lepa, Balm)",
            label: "સ્થાનિક / બાહ્ય અર્ધ-ઘન (ક્રીમ, જેલ, લેપ, બામ)",
            description: "પરિશિષ્ટ M-II કોસ્મેટિક અથવા ASU બાહ્ય ઉપયોગ તરીકે સરળ પાલન.",
          },
          {
            value: "Sterile Drops: Nasal / Ophthalmic (Nasya, Netra Bindu)",
            label: "સ્ટેરાઇલ ડ્રોપ્સ: નાસિકા / આંખ (નસ્ય, નેત્ર બિંદુ)",
            description: "કડક વંધ્યત્વ ધોરણો, કણો પરીક્ષણ અને પ્રિઝર્વેટિવ જાહેરાત ફરજિયાત.",
          },
          {
            value: "Ayurveda Aahar / Ready-to-Consume Herbal Food",
            label: "આયુર્વેદ આહાર / ઉપયોગ માટે તૈયાર હર્બલ ખોરાક",
            description: "ખાદ્ય સુરક્ષા અને ધોરણો (આયુર્વેદ આહાર) વિનિયમન 2022 હેઠળ નિયંત્રિત.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "સોર્સિંગ અને કંપની માલિકી",
    description: "જૈવિક સંસાધનોનો મૂળ વિસ્તાર અને કંપનીનું માલિકી માળખું સ્પષ્ટ કરો.",
    fields: [
      {
        name: "sourcingRegion",
        label: "મુખ્ય સોર્સિંગ પ્રદેશ",
        type: "radio",
        options: [
          {
            value: "Kerala (e.g., Navara Rice, Malabar Pepper)",
            label: "કેરળ (દા.ત., નવરા ચોખા, મલબાર કાળા મરી)",
            description: "ભૌગોલિક સંકેત (GI) સંરક્ષણની ઉચ્ચ સંભાવના.",
          },
          {
            value: "Himalayan Belt",
            label: "હિમાલયન પટ્ટો",
            description: "ઉચ્ચ ઊંચાઈ ધરાવતી ઔષધિઓ. રાજ્ય વન વિભાગનું કડક નિયંત્રણ.",
          },
          {
            value: "Imported from outside India",
            label: "ભારત બહારથી આયાત કરેલ",
            description: "ભારતના જૈવ વિવિધતા અધિનિયમમાંથી મુક્ત, પરંતુ પ્લાન્ટ ક્વોરેન્ટાઇન પરમિટને આધીન.",
          },
          {
            value: "Western Ghats Biodiversity Hotspot",
            label: "પશ્ચિમ ઘાટ જૈવ વિવિધતા હોટસ્પોટ",
            description: "સ્થાનિક પ્રજાતિઓ; રાજ્ય જૈવ વિવિધતા બોર્ડ (SBB) ની કડક તપાસ અને કલમ 7 પૂર્વ નોટિસ.",
          },
          {
            value: "Central & Eastern Tribal Belts (Bastar, Chota Nagpur, Odisha)",
            label: "મધ્ય અને પૂર્વીય આદિવાસી પ્રદેશો (બસ્તર, છોટા નાગપુર, ઓડિશા)",
            description: "આદિવાસી જ્ઞાન ક્ષેત્ર; બાયોડાયવર્સિટી મેનેજમેન્ટ કમિટીઓ સાથે કલમ 41 ABS.",
          },
          {
            value: "Certified Cultivated Farmland / Agro-Forestry",
            label: "પ્રમાણિત ખેતીલાયક જમીન / કૃષિ-વનવિસ્તાર",
            description: "જૈવ વિવિધતા (સુધારા) અધિનિયમ 2023 હેઠળ ચોક્કસ ABS જોગવાઈઓમાંથી મુક્તિ.",
          },
          {
            value: "Normally Traded Commodities (NTC under Section 40)",
            label: "સામાન્ય રીતે વેપાર થતી ચીજવસ્તુઓ (કલમ 40 હેઠળ NTC)",
            description: "દા.ત., હળદર, આદુ; શુદ્ધ વેપારી નિકાસ પર ABS માંથી મુક્તિ.",
          },
        ],
      },
      {
        name: "companyStructure",
        label: "સંસ્થા માલિકીનું માળખું",
        type: "radio",
        options: [
          {
            value: "100% Indian Citizens / Indian-Owned Entity",
            label: "100% ભારતીય નાગરિકો / ભારતીય માલિકીની સંસ્થા",
            description: "જૈવ વિવિધતા કાયદાની કલમ 7 લાગુ (રાજ્ય જૈવ વિવિધતા બોર્ડને પૂર્વ સૂચના).",
          },
          {
            value: "Contains Foreign Equity / FDI / NRI Shareholding",
            label: "વિદેશી ઇક્વિટી / FDI / NRI શેરહોલ્ડિંગ ધરાવતી",
            description: "કલમ 3(2) લાગુ (ફોર્મ 1 દ્વારા NBA ની ફરજિયાત પૂર્વ મંજૂરી).",
          },
          {
            value: "Foreign Corporation / Multinational Company (Outside India)",
            label: "વિદેશી કોર્પોરેશન / બહુરાષ્ટ્રીય કંપની (ભારત બહાર)",
            description: "કલમ 3(1) હેઠળ સંપૂર્ણ પ્રતિબંધો; NBA ની પૂર્વ મંજૂરી અને કડક ABS કરાર જરૂરી.",
          },
          {
            value: "Registered AYUSH Practitioner (Vaidya / Traditional Healer)",
            label: "નોંધાયેલ આયુષ પ્રેક્ટિશનર (વૈદ્ય / પરંપરાગત ઉપચારક)",
            description: "સુધારેલા જૈવ વિવિધતા કાયદા 2023 હેઠળ વ્યક્તિગત પ્રેક્ટિસ માટે SBB સૂચનામાંથી મુક્તિ.",
          },
          {
            value: "Farmer Producer Organization (FPO) / Local Village Grower Co-op",
            label: "ખેડૂત ઉત્પાદક સંસ્થા (FPO) / સ્થાનિક ગ્રામ્ય સહકારી",
            description: "સુધારેલા કાયદાની કલમ 7 ની જોગવાઈ હેઠળ સ્થાનિક ઉત્પાદકો ABS મુક્ત.",
          },
          {
            value: "Collaborative Research with Indian Government / CSIR / ICMR",
            label: "ભારતીય સરકાર / CSIR / ICMR સાથે સંયુક્ત સંશોધન",
            description: "કેન્દ્ર સરકારની મંજૂરીને આધીન કલમ 5 સંયુક્ત સંશોધન મુક્તિ માટે પાત્ર.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "લેબલિંગ અને આરોગ્ય દાવાઓ",
    description: "ઉત્પાદન માર્કેટિંગ અને લેબલ પર દર્શાવવાના દાવાઓ પસંદ કરો.",
    fields: [
      {
        name: "healthClaims",
        label: "લક્ષિત આરોગ્ય દાવાઓ",
        type: "checkbox",
        options: [
          {
            value: "Boosts Immunity & General Wellness",
            label: "રોગપ્રતિકારક શક્તિ અને સામાન્ય સુખાકારી વધારવી",
            description: "સુરક્ષિત દાવો. ASCI સંહિતાને અનુરૂપ.",
          },
          {
            value: 'Improves Skin Glow / Radiance ("Varnya")',
            label: 'ત્વચાની ચમક અને કાંતિમાં સુધારો ("વર્ણ્ય")',
            description: "ત્વચા આરોગ્ય માટે સુરક્ષિત કોસ્મેટિક દાવો.",
          },
          {
            value: "Cures Diabetes / Cancer / Blindness",
            label: "ડાયાબિટીસ / કેન્સર / અંધાપો સંપૂર્ણ મટાડવો",
            description: "સખત પ્રતિબંધિત. ડ્રગ્સ એન્ડ મેજિક રેમેડીઝ એક્ટ (DMR) અને પરિશિષ્ટ J નું ઉલ્લંઘન.",
          },
          {
            value: "Clinically Proven / CTRI Registered Trial",
            label: "ક્લિનિકલી સાબિત / CTRI નોંધાયેલ ટ્રાયલ",
            description: "CTRI નોંધાયેલ માનવ ક્લિનિકલ ટ્રાયલ ડેટા હોવો ફરજિયાત.",
          },
          {
            value: 'Classical Rejuvenation & Vitality ("Rasayana" / "Balya")',
            label: 'શાસ્ત્રીય કાયાકલ્પ અને શક્તિવર્ધન ("રસાયન" / "બલ્ય")',
            description: "પ્રથમ અનુસૂચિ ગ્રંથો દ્વારા માન્ય શાસ્ત્રીય ઉપચારાત્મક સંકેતો; ટ્રાયલ ફરજિયાત નથી.",
          },
          {
            value: 'Digestive & Metabolic Health ("Deepana" / "Pachana")',
            label: 'પાચન અને ચયાપચય આરોગ્ય ("દીપન" / "પાચન")',
            description: "આયુષ અને આયુર્વેદ આહાર નિયમો હેઠળ સ્વીકાર્ય દાવો.",
          },
          {
            value: "Joint Mobility & Pain Relief (Symptomatic Relief)",
            label: "સાંધાની ગતિશીલતા અને દુખાવામાં રાહત (લક્ષણિક રાહત)",
            description: "સ્વીકાર્ય લક્ષણિક રાહત દાવો; સંધિવાના કાયમી ઇલાજનો દાવો DMR માં પ્રતિબંધિત.",
          },
          {
            value: 'Stress Relief, Memory & Sleep Support ("Medhya")',
            label: 'તણાવ મુક્તિ, યાદશક્તિ અને ઊંઘ સહાય ("મેધ્ય")',
            description: "મોનોગ્રાફ દ્વારા સમર્થિત હોય તો ASCI માર્ગદર્શિકા હેઠળ સ્વીકાર્ય.",
          },
          {
            value: '"100% Natural / Pure Ayurvedic / Zero Side Effects"',
            label: '"100% કુદરતી / શુદ્ધ આયુર્વેદિક / શૂન્ય આડઅસર"',
            description: "ASCI તપાસનો વિષય: કોઈપણ ઉત્પાદન માટે 'શૂન્ય આડઅસર' દાવો સખત મનાઈ છે.",
          },
          {
            value: '"Permanent Cure for Obesity / Hypertension / Heart Disease"',
            label: '"મેદસ્વીતા / હાઈ બ્લડ પ્રેશર / હૃદયરોગનો કાયમી ઉપચાર"',
            description: "ડ્રગ્સ એન્ડ મેજિક રેમેડીઝ એક્ટ હેઠળ સખત પ્રતિબંધિત.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "લક્ષિત વૈશ્વિક બજારો",
    description: "ઉત્પાદન વિતરણ અને બૌદ્ધિક સંપત્તિ સંરક્ષણ માટે લક્ષિત વૈશ્વિક બજારો પસંદ કરો.",
    fields: [
      {
        name: "targetMarkets",
        label: "લક્ષિત બજારો અને લાયસન્સ",
        type: "checkbox",
        options: [
          {
            value: "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            label: "સ્થાનિક ભારત: શાસ્ત્રીય આયુષ દવા (ફોર્મ 25D લાયસન્સ)",
            description: "નિયમ 158B(I) હેઠળ શાસ્ત્રીય સંદર્ભ સાથે પરિશિષ્ટ T GMP હેઠળ ઉત્પાદન.",
          },
          {
            value: "Domestic India: Patent or Proprietary (P&P) Medicine",
            label: "સ્થાનિક ભારત: પેટન્ટ અથવા પ્રોપ્રાઇટરી (P&P) દવા",
            description: "નિયમ 158B(II) દ્વારા સંચાલિત; પ્રકાશિત સાહિત્ય અથવા પાયલોટ ક્લિનિકલ ડેટા જરૂરી.",
          },
          {
            value: "Domestic India: Ayurveda Aahar / FSSAI Nutraceutical",
            label: "સ્થાનિક ભારત: આયુર્વેદ આહાર / FSSAI ન્યુટ્રાસ્યુટિકલ",
            description: "ખાદ્ય સુરક્ષા નિયમન 2022 હેઠળ નિયંત્રિત; રોગ મટાડવાનો દાવો કરી શકાતો નથી.",
          },
          {
            value: "United States: FDA Dietary Supplement (DSHEA 1994)",
            label: "યુનાઈટેડ સ્ટેટ્સ: US FDA ડાયેટરી સપ્લિમેન્ટ (DSHEA)",
            description: "21 CFR ભાગ 111 cGMP અને ફરજિયાત FDA ડિસ્ક્લેમર નિવેદન જરૂરી.",
          },
          {
            value: "United States: MoCRA Topical Cosmetic",
            label: "યુનાઈટેડ સ્ટેટ્સ: MoCRA સ્થાનિક કોસ્મેટિક",
            description: "MoCRA 2022 હેઠળ ફરજિયાત FDA નોંધણી, ઉત્પાદન સૂચિ અને સલામતી પ્રમાણીકરણ.",
          },
          {
            value: "European Union: Traditional Herbal Medicinal Products (THMPD 2004/24/EC)",
            label: "યુરોપિયન યુનિયન: પરંપરાગત હર્બલ ઔષધીય ઉત્પાદનો (THMPD)",
            description: "30 વર્ષના પરંપરાગત ઔષધીય ઉપયોગનું દસ્તાવેજીકરણ જરૂરી (EU માં 15 વર્ષ સહિત).",
          },
          {
            value: "European Union: Novel Food Regulation (EU 2015/2283)",
            label: "યુરોપિયન યુનિયન: નોવેલ ફૂડ રેગ્યુલેશન (EU 2015/2283)",
            description: "મે 1997 પહેલાં EU માં ઉપયોગના ઇતિહાસ વગરની વનસ્પતિ પ્રજાતિઓ માટે જરૂરી.",
          },
          {
            value: "Filing for Indian Patent (IPO)",
            label: "ભારતીય પેટન્ટ (IPO) માટે ફાઇલિંગ",
            description: "કલમ 6 હેઠળ NBA પાસેથી ફોર્મ III પૂર્વ મંજૂરી જરૂરી; કલમ 3(p) TKDL તપાસને આધીન.",
          },
          {
            value: "Filing for Global Patents (PCT / International Offices)",
            label: "વૈશ્વિક પેટન્ટ (PCT / આંતરરાષ્ટ્રીય કચેરીઓ) ફાઇલિંગ",
            description: "કલમ 6 હેઠળ ફરજિયાત પૂર્વ NBA મંજૂરી; WIPO સંધિનું પાલન જરૂરી.",
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
  if (lang === "te") {
    return TELUGU_MODULES;
  }
  if (lang === "bn") {
    return BENGALI_MODULES;
  }
  if (lang === "kn") {
    return KANNADA_MODULES;
  }
  if (lang === "sa") {
    return SANSKRIT_MODULES;
  }
  if (lang === "gu") {
    return GUJARATI_MODULES;
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

