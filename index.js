const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

class Part {
  constructor(partnumber, partname, description = '', imagelink = '', fault = '') {
    this['Part Number'] = partnumber;
    this['Part Name'] = partname;
    this['Description'] = description;
    this['Image Link'] = imagelink;
    this['Fault'] = fault;
    this['Object Name'] = this.constructor.name; // Add Object Name property
  }
}

// ******************************* Class *********************************
// Gmax pro
class GmpOpticsparts extends Part {}
class GmpConsumableparts extends Part {}
class GmpElectronicsparts extends Part {}
class GmpFluidsystem extends Part {}
class GmpHeadparts extends Part {}
class GmpHandpieceparts extends Part {}

// Gmax pro Plus
class GmppHandpieceparts extends Part {}

// Vbeam Perfecta
class VbeamOpticsParts extends Part {} // Add VbeamOpticsParts class
class VbeamConsumableParts extends Part {} // Add VbeamConsumableParts class

// Prima
class PrimaHeadParts extends Part {} // Add PrimaHeadParts class
class PrimaMDYEPart extends Part {} // Add PrimaMDYEPart class

//Picoway
class PicowayArmParts extends Part {}
class PicowayHandpiecePart extends Part {}
class PicowayElectronicspart extends Part {}

//Nordlys
class NordlysConsumableParts extends Part {}


// ******************************* 객체 생성 *********************************
// GmpOpticsparts 객체 생성
const opticsParts = [
  new GmpOpticsparts('7122-00-9432', 'AIMING BEAM, ASSY, SPECTRUM', '', 'https://i.ibb.co/m5PqB3Y/7122-00-9432.jpg', ''),
  new GmpOpticsparts('9908-17-0408', "FLASHLMP,REARTIP,700T,4''ARC,8", '', 'https://i.ibb.co/fXBdRH0/9908-17-0408.jpg', 'F5.2'),
  new GmpOpticsparts('7122-00-9577', 'DHP TURNING MIRROR ASSY', '', '', ''),
  new GmpOpticsparts('8015-00-1220', 'TURNING', 'DHP TURNING MIRROR lens only', '', ''),
  new GmpOpticsparts('7122-00-9576', 'DHP BEAM COMBINER ASSY', '', '', ''),
  new GmpOpticsparts('8055-00-0304', 'DHP BEAM COMBINER', 'DHP BEAM COMBINER lens only', '', ''),
];

// GmpConsumableparts 객체 생성
const consumableParts = [
  new GmpConsumableparts('7122-00-9552', '12/15/18 LENS CARTRIDGE','' ,'https://i.ibb.co/NNtX3Dm/7122-00-9552.jpg','F15.1'),
  new GmpConsumableparts('1301-00-9545', 'WINDOW HOLDER LENS BARREL','', 'https://i.ibb.co/sKDZk6W/1301-00-9545.jpg',''),
  new GmpConsumableparts('7122-00-9551', '6/8/10 LENS CARTRIDGE','','https://i.ibb.co/C87N7kP/7122-00-9551.jpg','F15.1'),
  new GmpConsumableparts('7122-00-9560', '1.5MM SLIDER ATTACHMENT ASSY','','https://i.ibb.co/zVMZfSb/7122-00-9560.jpg', 'F15.1'),
];

// GmpElectronicsparts 객체 생성
const electronicsParts = [
  new GmpElectronicsparts('7122-00-9216', 'SPECTRUM AC MODULE', 'Whole Assy from Power cable to AC Distribution Board and relay including cables.','https://i.ibb.co/mFdYbF6/7122-00-9216.jpg','Power off'),
  new GmpElectronicsparts('4816-01-1620', '1800V 270A DIODE MODULE', '','https://i.ibb.co/7VjLgMT/4816-01-1620.jpg',''),
];

// GmpFluidsystem 객체 생성
const fluidSystem = [
  new GmpFluidsystem('7122-00-9238', 'ASSY RESERVOIR SPECTRUM', 'water tank','https://i.ibb.co/P4cb9g8/7122-00-9238.jpg','water leaking'),
  new GmpFluidsystem('3460-00-0071', 'CAP VENT 2 1/4 BUTTRESS THRD', 'cap', 'https://i.ibb.co/rs4d6Nv/3460-00-0071.jpg',''),
];

// GmpHeadparts 객체 생성
const headParts = [
  new GmpHeadparts('3160-02-0013', 'Red Manifold O-rings', ''),
];

// GmpHandpieceparts 객체 생성
const gmphd = [
  new GmpHandpieceparts('7122-00-9401', 'PRO SERIES DCD HP W/O FIBER', 'GMP Only','https://i.ibb.co/F74pWyr/7122-00-9401.jpg','Consumable'),
];

// GmppHandpieceparts 객체 생성
const gmpphd = [
  new GmppHandpieceparts('7123-CE-0658', 'ASSY, FIBER, STANDARD, HC, GMPP','GMPP only','','F15.1, consumable'),
  new GmppHandpieceparts('7123-CE-0635', 'ASSY, FIBER, LARGE SPOT, GC, GMPP','GMPP only','','F15.1, consumable'),
  new GmppHandpieceparts('7123-CE-0631', 'ASSY, DCD HAND PIECE, LARGE SPOT, GMPP','GMPP only','','consumable'),
  new GmppHandpieceparts('7123-CE-0629', 'ASSY, ACC HAND PIECE, MEDIUM SPOT, GMPP','GMPP only','','consumable'),
  new GmppHandpieceparts('7123-CE-0632', 'ASSY, DCD HAND PIECE, MEDIUM SPOT, GMPP','GMPP only','','consumable'),
  new GmppHandpieceparts('7123-00-0609', 'ASSY, SLIDER ATTACHMENT, 26MM, GMPP','GMPP only','','consumable'),
];

// VbeamOpticsParts 객체 생성
const vbeamOpticsParts = [
  new VbeamOpticsParts('8001-00-0002', 'PR,70%R@580-600nm,0.375\'\'Dia', 'OC lens', 'https://i.ibb.co/gd36Lmq/8001-00-0002.jpg', 'F12.4'),
  new VbeamOpticsParts('8005-00-2013', 'HR,580-600nm,0.375\'\'Dia', 'HR lens', 'https://i.ibb.co/pvjxwTY/8005-00-2013.jpg', 'F12.4'),
  new VbeamOpticsParts('1301-00-7396', 'Reflector,6.05\'\'', 'Reflector', 'https://i.ibb.co/5sCw8nj/1301-00-7396.jpg', 'F12.4'),
  new VbeamOpticsParts('9908-04-1220', 'FLASHLAMP,7.15mm,ENDS', 'Flash lamp', '', 'F12.4'),
  new VbeamOpticsParts('1301-00-7395', 'Dye Cell,4mmx8mm Cleaned', 'Dye Cell', 'https://i.ibb.co/4tyh2YG/1301-00-7395.jpg', 'F12.4'),
  new VbeamOpticsParts('1301-00-7408', 'Water Jacket,Pyrex,Sclero-LP', 'Water Jacket', 'https://i.ibb.co/n7qhM8V/1301-00-7408.jpg', 'F12.4'),
];

// VbeamConsumableParts 객체 생성
const vbeamConsumableParts = [
  new VbeamConsumableParts('7122-00-3592', 'HANDPIECE CARTRIDGE WINDOW', 'HP window','https://i.ibb.co/n3xSvSb/7122-00-3592.jpg','F15.1'),
  new VbeamConsumableParts('7122-00-3761', 'HANDPIECE CARTRIDGE WINDOW extractor tool', 'Tool','https://i.ibb.co/2WfkRz3/7122-00-3761.jpg'),
  new VbeamConsumableParts('8010-00-0016', 'WDO DUST CALPORT', 'Calport window','https://i.ibb.co/N17qYDm/8010-00-0016.jpg'),
  new VbeamConsumableParts('7122-00-3692', 'VBEAM PERFECTA DELIVERY SYSTEM', 'Handpiece with fiber','https://i.ibb.co/mbf6m4z/7122-00-3692.jpg','F15.1'),
 
];

// PrimaHeadParts 객체 생성
const primaHeadParts = [
  new PrimaHeadParts('1303-00-0734', 'DUAL LAMP REFLECTOR END RAIL', 'Ceramic', '', 'F6.1, F12.4'),
  new PrimaHeadParts('1303-00-0737', 'DUAL LAMP REFLECTOR BODY RAIL', 'Ceramic', '', 'F6.1, F12.4'),
  new PrimaHeadParts('9908-17-0411', 'FLASH LAMP, 7.15 ENDS, RAIL VE', 'Flash lamp', '', 'F6.1, F12.4'),
  new PrimaHeadParts('1303-00-0735', 'DUAL FLASHLAMP FLOW TUBE, RAIL', 'NA', '', 'F6.1, F12.4'),
  new PrimaHeadParts('1303-00-0736', 'DUAL LAMP DYE CELL, RAIL VELOS', 'NA', '', 'F6.1, F12.4'),
  new PrimaHeadParts('8005-00-2017', 'Mirror HR @ 585-605 nm 10.8 m', 'NA', '', 'F6.1, F12.4'),
  new PrimaHeadParts('8001-00-0004', 'Mirror PR 87% @ 585-605 nm 10', 'NA', '', 'F6.1, F12.4'),
  new PrimaHeadParts('3160-01-0010', 'O-RNG WHTSIL 1/4\'\'ID 3/8\'\'OD', 'DYE Flash lamp Oring', '', 'F6.1, F12.4'),
  new PrimaHeadParts('3160-02-9026', 'O-Ring,Clear Silicon 0.315x 0.049 S70', 'Under PR or HR', '', 'F6.1, F12.4'),
];

// PrimaMDYEPart 객체 생성
const primaMDYEPart = [
  new PrimaMDYEPart('7122-00-9517', 'GROUND VBEAM DYE HAZMAT RETURN', 'HAZMAT RETURN', '', 'F6.1, F12.4'),
  new PrimaMDYEPart('7121-00-2270', 'COT INJECTOR', 'COT', '', 'F6.1, F12.4'),
  new PrimaMDYEPart('7123-00-0559', 'PRIMA DYE CRTG REPLACEMENT KIT', 'CRTG', '', 'F6.1, F12.4'),
];

// PicowayArmParts 객체 생성
const picowayArmParts = [
  new PicowayArmParts('8015-00-1245', 'Arm PP Mirror FS 20 mm dia 1/8 in thk 532/650/1064 nm', 'small', '', 'Low energy'),
  new PicowayArmParts('8015-00-1246', 'Arm PP Mirror FS 1.0 in dia 1/8 in thk 532/650/1064 nm', 'Large', '', 'Low energy'),
  new PicowayArmParts('8015-00-1247', 'MIRROR PP 1064/650/532nm 1 DIA X .25 45 DEGREE', 'launch 8E', '', 'Low energy'),
];

// PicowayHandpiecePart 객체 생성
const picowayHandpieceParts = [
  new PicowayHandpiecePart('7122-00-4052', 'ASSY PICO ZOOM H/P', 'Zoom HP', '', ''),
  new PicowayHandpiecePart('7122-00-9862', 'ZOOM HP Distance Gauge kit', 'Zoom HP', '', ''),
  new PicowayHandpiecePart('7123-00-0059', 'ASSY HANDPIECE RESOLVE 1064', 'RESOLVE 1064', '', ''),
  new PicowayHandpiecePart('8055-00-0323', '10x10 Fractional Beam splitter 1064nm', 'RESOLVE 1064', '', ''),
  new PicowayHandpiecePart('8050-00-9045', 'Dia.0.15mm f40mm 532/1064', 'RESOLVE 1064 & 532', '', ''),
  new PicowayHandpiecePart('7123-00-0209', 'ASSY 532 Resolve Handpiece High Energy', 'RESOLVE 532', '', ''),
  new PicowayHandpiecePart('8055-00-0324', '10x10 Fractional Beam splitter 532nm', 'RESOLVE 532', '', ''),
  new PicowayHandpiecePart('7123-00-0536', 'ASSY Handpiece Fusion 532', 'Fusion 532', '', ''),
  new PicowayHandpiecePart('7123-00-0497', '730nm Handpiece Assembly', 'New', '', ''),
  new PicowayHandpiecePart('7123-57-0497', '730nm Handpiece Assembly Refurbished', 'Refurbished', '', ''),
  new PicowayHandpiecePart('7123-00-0191', '785 Handpiece Assembly', 'New', '', ''),
  new PicowayHandpiecePart('7123-57-0191', '785 Handpiece Assembly Refurbished', 'Refurbished', '', ''),
];

// PicowayElectronicsparts 객체 생성
const picowayElectronicsparts = [
  new PicowayElectronicspart('4001-01-0091', 'HVPS', 'Power supply', '', 'F5.2'),
  new PicowayElectronicspart('7123-07-0013', 'IO board', 'IO', '', 'F26.1'),
];


// NordlysConsumableParts 객체 생성
const NordlysConsumable = [
  new NordlysConsumableParts('9APP7745', 'Applicator HRL 600 600 - 950 nm', 'Handpiece', '', ''),
  new NordlysConsumableParts('9APP7748-CNDL', 'Applicator PR 530 530 - 750 nm', 'Handpiece', '', ''),
];


app.get('/part/:info', (req, res) => {
  const info = req.params.info;
  const partType = req.query.partType; // Get the selected part type from the query parameter

  let results = [];

  let parts;
  if (partType === 'gmp') { // Check the selected part type
    parts = [...opticsParts, ...consumableParts, ...electronicsParts, ...fluidSystem, ...headParts,, ...gmphd];
  } else if (partType === 'gmpp') {
    parts = [...gmpphd,...opticsParts, ...consumableParts, ...electronicsParts, ...fluidSystem, ...headParts];
  } else if (partType === 'vbeam') {
    parts = [...vbeamOpticsParts, ...vbeamConsumableParts];
  } else if (partType === 'prima') {
    parts = [...primaHeadParts, ...primaMDYEPart];
  } else if (partType === 'picoway') {
    parts = [...picowayArmParts, ...picowayHandpieceParts, ...picowayElectronicsparts];
  } else if (partType === 'nordlys') {
    parts = [...NordlysConsumable];

  } else {
    parts = [
      ...opticsParts,
      ...consumableParts,
      ...electronicsParts,
      ...fluidSystem,
      ...headParts,
      ...gmphd,
      ...gmpphd,
      ...vbeamOpticsParts,
      ...vbeamConsumableParts,
      ...primaHeadParts,
      ...primaMDYEPart,
      ...picowayArmParts,
      ...picowayHandpieceParts,
      ...picowayElectronicsparts,
      ...NordlysConsumable,
    ];
  }


  for (const part of parts) {
    let objectName = part['Object Name']
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camel case to separate words
      .toUpperCase() // Convert to uppercase
      .replace(/PARTS?$/, 'Parts') // Remove 'S' from 'PARTS'
      .replace(/CONSUMABLES?$/, 'Consumable Parts') // Remove 'S' from 'CONSUMABLES'
      .replace(/ELECTRONICSP?$/, 'Electrical Parts') // Remove 'S' from 'ELECTRONICS'
      .replace(/FLUIDSYSTEM$/, 'Fluid System Parts') // Replace 'FLUIDSYSTEM' with 'Fluid System Parts'
      .replace(/HEADPARTS$/, 'Head Parts'); // Replace 'HEADPARTS' with 'Head Parts'

    if (part['Object Name'].startsWith('VBEAM')) {
      objectName = objectName.replace('VBEAM', 'VBeam'); // Replace 'VBEAM' with 'VBeam'
    } else if (part['Object Name'].startsWith('PRIMA')) {
      objectName = objectName.replace('PRIMA', 'Prima'); // Replace 'PRIMA' with 'Prima'
    } else if (part['Object Name'].startsWith('PICOWAY')) {
      objectName = objectName.replace('PICOWAY', 'Picoway'); // Replace 'PICOWAY' with 'Picoway'
    } else if (part['Object Name'].startsWith('NORDLYS')) {
      objectName = objectName.replace('NORDLYS', 'Nordlys'); // Replace 'PICOWAY' with 'Picoway'
    } else if (part['Object Name'].startsWith('GMAXPROPLUS')) {
      objectName = objectName.replace('GMAXPROPLUS', 'GmaxProPlus'); // Replace 'PICOWAY' with 'Picoway'
    }


    

    if (
      part['Part Number'].toLowerCase().startsWith(info) || // 검색어와 데이터를 소문자로 변환하여 비교
      part['Part Number'].toLowerCase().endsWith(info) ||
      part['Part Name'].toLowerCase().includes(info) ||
      part['Description'].toLowerCase().startsWith(info) ||
      objectName.toLowerCase().includes(info) ||
      part['Description'].toLowerCase().includes(info) ||
      part['Fault'].toLowerCase().includes(info)

    ) {
      const result = {
        'Part Number': part['Part Number'],
        'Part Name': part['Part Name'],
        'Description': part['Description'],
        'Image Link': part['Image Link'],
        'Fault': part['Fault'],
        'Object Name': objectName,
      };
      results.push(result);
    }
  }

  res.json(results);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
