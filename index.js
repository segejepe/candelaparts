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
class GmpOpticsparts extends Part { }
class GmpConsumableparts extends Part { }
class GmpElectronicsparts extends Part { }
class GmpFluidsystem extends Part { }
class GmpHeadparts extends Part { }
class GmpHandpieceparts extends Part { }
class GmpControllerparts extends Part { }
class GmpSkinParts extends Part { }
class GmpCalportParts extends Part { }
class GmpServiceTool extends Part { }
class GmpUpgradeParts extends Part { }

// Gmax pro Plus
class GmppHandpieceparts extends Part { }

// Vbeam Perfecta
class VbeamHeadParts extends Part { } // Add VbeamHeadParts class
class VbeamConsumableParts extends Part { } // Add VbeamConsumableParts class
class VbeamFluidParts extends Part { }
class VbeamElectronicsParts extends Part { }
class VbeamMdyeParts extends Part{ }
class VbeamOpticsParts extends Part { }
class VbeamServiceToolParts extends Part { }

// Prima
class PrimaDyeHeadParts extends Part { } // Add PrimaDyeHeadParts class
class PrimaMDYEPart extends Part { } // Add PrimaMDYEPart class
class PrimaCalportParts extends Part { }
class PrimaHeadrailParts extends Part { }
class PrimaV14UpgardParts extends Part { }
class PrmiaElectronicParts extends Part { }
class PrimaCableParts extends Part { }
class PrimaSkinParts extends Part { }
class PrimaConsumableParts extends Part { }
class PrimaYagHeadParts extends Part { }
class PrimaHandpieceParts extends Part { }
class PrimaFluidsystemParts extends Part { }
class PrimaServicetoolsParts extends Part { }

//Picoway
class PicowayArmParts extends Part { }
class PicowayHandpiecePart extends Part { }
class PicowayElectronicspart extends Part { }
class PicowaySkinParts extends Part { }
class PicowayConsumableParts extends Part { }
class PicowayUpperRailParts extends Part { }
class PicowayLowerLevelParts extends Part { }
class PicowayHarnessParts extends Part { }
class PicowayFuidSystemParts extends Part { }


//Nordlys
class NordlysConsumableParts extends Part { }
class NordlysElectronicParts extends Part { }
class NordlysfluidParts extends Part { }

//Matrix Pro
class ProfoundMetrixProParts extends Part { }

// ******************************* 객체 생성 *********************************
// GmpOpticsparts 객체 생성
const opticsParts = [
  new GmpOpticsparts('7122-00-9432', 'AIMING BEAM, ASSY, SPECTRUM', '', 'https://i.ibb.co/m5PqB3Y/7122-00-9432.jpg', ''),
  new GmpOpticsparts('7122-00-9577', 'DHP TURNING MIRROR ASSY', '', '', ''),
  new GmpOpticsparts('8015-00-1220', 'TURNING', 'DHP TURNING MIRROR lens only', '', ''),
  new GmpOpticsparts('7122-00-9576', 'DHP BEAM COMBINER ASSY', '', '', ''),
  new GmpOpticsparts('8055-00-0304', 'DHP BEAM COMBINER', 'DHP BEAM COMBINER lens only', '', ''),
  new GmpOpticsparts('7122-00-9588', 'GMAX DHP INTERMEDIATE LENS ASSY', '', '', ''),
  new GmpOpticsparts('8050-00-9008', 'GMAX DHP INTERMEDIATE LENS', 'GMAX DHP INTERMEDIATE LENS only', '', ''),
  new GmpOpticsparts('7122-00-9458', 'BEAM SPLITTER, ASSY', '', '', 'https://i.ibb.co/Rph94GG/7122-00-9458.jpg'),
  new GmpOpticsparts('8055-00-0309', 'SPECTRUM HEAD DETECTOR BEAMSPLITTER', 'BEAM SPLITTER Lens only', '', ''),
  new GmpOpticsparts('7122-00-9575', 'DHP FIBER RECEPTACLE', '', 'https://i.ibb.co/58kTRpT/7122-00-9575.jpg', 'F15.1'),
  new GmpOpticsparts('8050-00-9003', 'Fiber foucs lens', 'Fiber foucs lens only', '', ''),
  new GmpOpticsparts('7122-00-9457', 'ASSY,HEAD DETECTOR, GMAX PRO', '', 'https://i.ibb.co/tBSSG5C/7122-00-9457.jpg', ''),
  new GmpOpticsparts('7122-00-9529', 'BEAM BLOCKER ASSY GMAX PRO', 'Shutter(GMAX PRO)', '', 'F3.1'),
  new GmpOpticsparts('7122-00-9410', 'BEAM BLOCKER ASSY', 'For Old system only', '', 'F3.1'),
  new GmpOpticsparts('7123-00-0202', 'Assy LC DHP Fiber Bundle Kit', '', '', 'Upgrade to Split IO'),
  new GmpOpticsparts('7122-00-9574', 'DHP FIBER RECEPTACLE ASSY', '', 'https://i.ibb.co/FY5K9p4/7122-00-9574.jpg', 'F15.1'),
  new GmpOpticsparts('8075-00-1018', 'Head Detector Fiber (Orange)', '5 Digits IO', '', 'Upgrade to Split IO')
];

// GmpConsumableparts 객체 생성
const consumableParts = [
  new GmpConsumableparts('7122-00-9552', '12/15/18 LENS CARTRIDGE', '', 'https://i.ibb.co/NNtX3Dm/7122-00-9552.jpg', 'F15.1'),
  new GmpConsumableparts('1301-00-9545', 'WINDOW HOLDER LENS BARREL', '', 'https://i.ibb.co/sKDZk6W/1301-00-9545.jpg', ''),
  new GmpConsumableparts('7122-00-9551', '6/8/10 LENS CARTRIDGE', '', 'https://i.ibb.co/C87N7kP/7122-00-9551.jpg', 'F15.1'),
  new GmpConsumableparts('7122-00-9560', '1.5MM SLIDER ATTACHMENT ASSY', '', 'https://i.ibb.co/zVMZfSb/7122-00-9560.jpg', 'F15.1'),
  new GmpConsumableparts('7122-00-9561', '3MM SLIDER ATTACHMENT ASSY', '', 'https://i.ibb.co/D5KbY9b/7122-00-9561.jpg', 'F15.1'),
  new GmpConsumableparts('7122-00-9753', 'Assy, 5mm Spot Slider Attachment', '5mm', 'https://i.ibb.co/vLCFDCh/7122-00-9753.jpg', 'F15.1'),
  new GmpConsumableparts('7122-00-9747', 'LARGE SPOT SLIDER ATTACHMENT ASSY', '20/22/24', 'https://i.ibb.co/JxmR7fq/7122-00-9747-1.jpg', 'F15.1'),
  new GmpConsumableparts('8901-00-9442', 'Preventative Maintenance Kit, Pro', 'PM kit', '', ''),
  new GmpConsumableparts('7122-00-9435', 'SWING ARM,FIBER POLE,ASSY', '', 'https://i.ibb.co/SwGr1rp/7122-00-9435.jpg', 'Only Fiber pole'),
  new GmpConsumableparts('7122-00-9436', 'GUIDE TUBE,FIBER POLE,ASSY,SPECTRUM', '', 'https://i.ibb.co/w0HrRSD/7122-00-9436-1.jpg', ''),
  new GmpConsumableparts('7122-00-9537', 'FIBER POLE ACCES KIT,ASSY,GL P', '', 'https://i.ibb.co/5202sm5/7122-00-9537.jpg', ''),
  new GmpConsumableparts('1301-00-9870', 'PRO SERIES CALPORT SW STRP', 'Inside calport', '', ''),
  new GmpConsumableparts('1301-00-9537', 'HOLDER,HAND PIECE,MOLDED, FRONT', '', 'https://i.ibb.co/HtV6Jjm/1301-00-9537.jpg', ''),
  new GmpConsumableparts('1301-00-9536', 'HOLDER,HAND PIECE,MOLDED, REAR', '', 'https://i.ibb.co/vhzs0xC/1301-00-9536.jpg', ''),
  new GmpConsumableparts('1301-00-9535', 'Upper holder', '', 'https://i.ibb.co/VC8xx5n/1301-00-9535.jpg', ''),
  new GmpConsumableparts('1414-00-0301', 'CASTER,SWVL,LOCK,4 WHL', 'Front Wheel', '', ''),
  new GmpConsumableparts('1414-00-0302', 'CASTER,RGD,4 WHL', 'Back wheel', '', ''),
  new GmpConsumableparts('7122-00-9587', 'ASSY,DHP FIBER BUNDLE KIT', '', '', ''),
  new GmpConsumableparts('3430-02-0010', 'CRYOGEN RELEASE VALVE', '', 'https://i.ibb.co/ZNhXfrK/3430-02-0010.jpg', ''),
  new GmpConsumableparts('7122-00-9655', 'Sapphire Window Kit Assy', '', 'https://i.ibb.co/DYbZ2m2/7122-00-9655.jpg', ''),
  new GmpConsumableparts('7122-00-9656', 'ASSY, WINDOW HOLDER, ULTEM', '', 'https://i.ibb.co/sjn8twc/7122-00-9656.jpg', ''),
  new GmpConsumableparts('7122-00-9657', 'ASSY, KIT, WINDOW HOLDER, ULTEM 5 PC', '', 'https://i.ibb.co/K91PYMN/7122-00-9657.jpg', ''),
  new GmpConsumableparts('7122-00-9436', 'GUIDE TUBE,FIBER POLE,ASSY,SPECTRUM', '', '', ''),
  new GmpConsumableparts('5501-00-1014', 'PRO HP 8 HEMOSTAT, NONLOCKING', 'Forcep', '', ''),
  new GmpConsumableparts('2157-40-8148', 'GMAX LASER RADIATION WALL SIGN', '', 'https://i.ibb.co/rk43shK/2157-40-8148.jpg', ''),
  new GmpConsumableparts('2157-40-5000', 'LASER RADIATION SYMBOL WALL SIGN', '', 'https://i.ibb.co/Cs12VL4/2157-40-5000.jpg', ''),
  new GmpConsumableparts('7123-00-0641', 'GMPP Laser Accessories', '', '', ''),
  new GmpConsumableparts('7123-00-0642', 'GMPP Accessory Kit Assembly', '', '', ''),
  new GmpConsumableparts('1600-00-0219', 'DCD Cryogen/15 Pack', '', 'https://i.ibb.co/bJXLR6H/1600-00-0219.jpg', ''),
  new GmpConsumableparts('5103-00-0030', 'FOOTSWITCH', '', 'https://i.ibb.co/svZ3WKJ/5103-00-0030.jpg', 'F13.2, F13.4'),
  new GmpConsumableparts('3450-00-0349', 'SIDE FILTER,GENTLELASE PRO', '', 'https://i.ibb.co/F08H7kx/3450-00-0349.jpg', ''),
  new GmpConsumableparts('7122-00-3762', 'BOXED CSTR WRMR & ACCESS ASSY', 'Cryogen Warmer (Whole box)', '', ''),
  new GmpConsumableparts('4001-00-2450', 'Pwr Sply,90-264VIN,15VDC,1A', 'Cryogen Warmer DC adapter', '', ''),
  new GmpConsumableparts('8901-00-9410', 'GentleYAG PRO U conversion to GMAX PRO using Option Kit', '', '', ''),
  new GmpConsumableparts('8901-00-9412', 'GentleLASE PRO U conversion to GMAX PRO using Option Kit', '', '', ''),
  new GmpConsumableparts('1303-00-0114', 'GAUGE, DISTANCE, 20MM LARGE SPOT', '', 'https://i.ibb.co/tqvXgyn/1303-00-0114.jpg', 'tip'),
  new GmpConsumableparts('7122-00-9758', 'Large Spot Distance Gauge Kit', '', '', 'tip'),
  new GmpConsumableparts('7122-00-9521', 'GL PRO 12mm DIST GAUGE KIT, ASSY', 'PRO Series 12mm Distance Gauge -5Pk', 'https://i.ibb.co/dkD2bLJ/7122-00-9521.jpg', 'tip'),
  new GmpConsumableparts('7122-00-9418', '15MM DISTANCE GAUGE KIT', 'PRO Series 15mm Distance Gauge -5Pk', 'https://i.ibb.co/RQGMDZq/7122-00-9418.jpg', 'tip'),
  new GmpConsumableparts('7122-00-9424', '18MM DISTANCE GAUGE KIT', 'PRO Series 18mm Distance Gauge -5Pk', 'https://i.ibb.co/2qM92Gm/7122-00-9424.jpg', 'tip'),
  new GmpConsumableparts('1630-00-0431', 'THERMOCHROMIC INK PAPER', '', 'https://i.ibb.co/ZG3kPwC/1630-00-0431.jpg', 'DCD'),
  new GmpConsumableparts('1301-00-9378', 'FRONT HANDLE SPECTRUM LASER', '', 'https://i.ibb.co/TYHtNW7/1301-00-9378.jpg', ''),
  new GmpConsumableparts('PU00952FR-NA', 'Gentle Patient Brochure Hair Removal', 'Brochure', '', ''),
  new GmpConsumableparts('PU00951EN-NA', 'Wrinkles Patient Brochure, Gentle Pro Series', 'Brochure', '', ''),
  new GmpConsumableparts('PU00953FR-NA', 'Gentle Patient Brochure Comprehensive', 'Brochure', '', ''),
  new GmpConsumableparts('PB93152EN-NA', 'Gentle Family Brochure', 'Brochure', '', ''),
  new GmpConsumableparts('7122-00-9564', 'DHP LASER ACCESSORIES', '', '', ''),
  new GmpConsumableparts('7122-00-9565', 'DHP ACCESSORY KIT ASSY', '', '', ''),
  new GmpConsumableparts('7122-00-9527', 'VELCRO STRAP KIT', '', '', ''),
  new GmpConsumableparts('8095-00-0476', 'PF1 EYEWEAR 755/1064 OD7 CE', 'Operator goggles', 'https://i.ibb.co/2P1q8g4/8095-00-0476.jpg', ''),
  new GmpConsumableparts('8095-00-0470', 'GOGGLES, PATIENT, LASER, SS, CE', '', 'https://i.ibb.co/W0TP0Zt/8095-00-0470.jpg', ''),
  new GmpConsumableparts('4050-05-0002', 'PLUG,2 POS,5.08MM,SCREW TERM', '', 'https://i.ibb.co/HY19Rb2/4050-05-0002.jpg', ''),
  new GmpConsumableparts('4050-05-0003', 'Jumper,2 POS,5.08mm', '', 'https://i.ibb.co/Mf3tyzD/4050-05-0003.jpg', ''),
];

// GmpElectronicsparts 객체 생성
const electronicsParts = [
  new GmpElectronicsparts('7122-00-9216', 'SPECTRUM AC MODULE', 'Whole Assy from Power cable to AC Distribution Board and relay including cables.', 'https://i.ibb.co/mFdYbF6/7122-00-9216.jpg', 'Power off'),
  new GmpElectronicsparts('4816-01-1620', '1800V 270A DIODE MODULE', '', 'https://i.ibb.co/7VjLgMT/4816-01-1620.jpg', 'F19.3'),
  new GmpElectronicsparts('4001-01-0091', 'HVPS', 'High Voltage Power Supply', '', 'F5.1, F5.2, F5.3, F4.2, F14.1, F14.2, F30'),
  new GmpElectronicsparts('4001-67-0091', 'HVPS', 'FSE Part', '', 'F5.1, F5.2, F5.3, F4.2, F14.1, F14.2, F30'),
  new GmpElectronicsparts('7122-00-9597', 'Assy, Harness 1-wire Gmax Pros', '', '', ''),
  new GmpElectronicsparts('8901-00-9404', 'GL PRO FIELD REPLACEMENT DISPLAY ASSY', 'Display for 4 Digits SN (Old)', '', ''),
  new GmpElectronicsparts('7122-00-9596', 'ASSY SIGNAL HARNESS GMAX PRO', '4 Digits SN Part', 'https://i.ibb.co/10M5cKg/7122-00-9596.jpg', ''),
  new GmpElectronicsparts('7111-07-2793', 'AC DIST ROHS PCB ASSY SPECTRUM', '', '', ''),
  new GmpElectronicsparts('7122-00-3330', 'Assy,Linecord,MGL', '', 'https://i.ibb.co/xDqZQH3/7122-00-3330.jpg', ''),
  new GmpElectronicsparts('7122-00-9235', 'ASSY DCD MODULE SPECTRUM', '', 'https://i.ibb.co/BZDVkjJ/7122-00-9235.jpg', 'F8.2, F8.4, F9.2'),
  new GmpElectronicsparts('7111-07-2520', 'Assy,BOM,RoHS PCB,DCD Canister', '', 'https://i.ibb.co/1Ts66Zq/7111-07-2520.jpg', ''),
  new GmpElectronicsparts('3409-02-0200', 'FERRULE,SET,1/8T,NYLON', '', 'https://i.ibb.co/VmnJ7SC/3409-02-0200.jpg', 'DCD'),
  new GmpElectronicsparts('1301-00-8462', 'CLIP SPR DCD', '', 'https://i.ibb.co/jW4H8MZ/1301-00-8462.jpg', ''),
  new GmpElectronicsparts('3412-26-0220', 'CONN,QC,RCPT,BR,BLKHD,1/8T', '', '', ''),
  new GmpElectronicsparts('7111-20-2803', 'PRGRM PRO 1-WIRE ALEX HEAD PCB', '', '', 'F26.1, F23'),
  new GmpElectronicsparts('7111-21-2803', 'PRGRM PRO 1-WIRE YAG HEAD PCB', '', '', 'F26.1, F23'),
  new GmpElectronicsparts('7111-23-2803', 'PRGRM UNIVERSAL LIN PCB', 'LIN PCB', '', 'F26.1, F23'),
  new GmpElectronicsparts('7122-00-9597', 'Assy, Harness 1-wire Gmax Pros', '', '', 'F26.1, F23'),
  new GmpElectronicsparts('4820-00-0081', 'IGBT MODULE, 1.7kV, 1200A ICRM @ 3ms', '', '', 'F19.1'),
  new GmpElectronicsparts('7111-07-2510', 'ASSY, PCB, HP BULKHEAD ROHS', '', '', 'W10.2'),
  new GmpElectronicsparts('1510-00-7225', 'CAP 9000UF,1.4V,1125/7875 RND', '', '', ''),
  new GmpElectronicsparts('8075-00-1014', 'Head Detector Fiber (Orange)', '4 Digits IO', '', ''),
  new GmpElectronicsparts('8075-00-1018', 'Head Detector Fiber (Orange)', '5 Digits IO', '', ''),
  new GmpElectronicsparts('7111-07-2807', 'ASSY, ROHS, HV DUMP ASSY, GMAX PRO', '', 'https://i.ibb.co/MVL209R/7111-07-2807.jpg', 'F5.3, F19.5'),
  new GmpElectronicsparts('1510-00-7225', 'CAP 9000UF,1.4KV,1125/7875 RND', '', '', ''),
  new GmpElectronicsparts('7122-00-3803', 'ASSY,THYR,VBEAM2', '', 'https://i.ibb.co/P4q3jjS/7122-00-3803.jpg', 'F5.2'),
  new GmpElectronicsparts('7122-00-3329', 'Assy,Axial Fan,80MM SQ,28.2CFM', '', 'https://i.ibb.co/7Ghgb0X/7122-00-3329.jpg', '')
];


// GmpFluidsystem 객체 생성
const fluidSystem = [
  new GmpFluidsystem('7122-00-9238', 'ASSY RESERVOIR SPECTRUM', 'water tank', 'https://i.ibb.co/P4cb9g8/7122-00-9238.jpg', 'water leaking, F7.5'),
  new GmpFluidsystem('3460-00-0071', 'CAP VENT 2 1/4 BUTTRESS THRD', 'cap', 'https://i.ibb.co/rs4d6Nv/3460-00-0071.jpg', ''),
  new GmpFluidsystem('1301-00-9390', 'TUBING, RESEVOIR TO PUMP', 'Noise', 'https://i.ibb.co/3cYj4YY/1301-00-9390.jpg', 'water leaking, F7.5'),
  new GmpFluidsystem('7122-00-9592', 'ASSY, FLOW SWITCH 0.50 GPM, FS Cooling system with Heater', '', 'https://i.ibb.co/KXXBFvK/7122-00-9592.jpg', 'F7.3'),
  new GmpFluidsystem('4508-00-4023', 'CONTRACTOR DP 40A 230VAC COIL', '', 'https://i.ibb.co/5KgLBjq/4508-00-4023.jpg', ''),
  new GmpFluidsystem('7111-07-2799', 'PCB ASSY ROHS HV SPLIT CAP SPECTRUM', '', 'https://i.ibb.co/GdPsTrh/7111-07-2799.jpg', 'F19.3'),
  new GmpFluidsystem('3450-00-0355', 'PRO SERIES DI CARTRIDGE/ FILTER', '', 'https://i.ibb.co/NTr79XF/3450-00-0355.jpg', ''),
  new GmpFluidsystem('7122-00-9234', 'ASSY FLUID TUBING KIT SPECTRUM', '', '', ''),
  new GmpFluidsystem('7122-00-9571', 'DHP TUBING KIT', '', '', ''),
  new GmpFluidsystem('3412-14-0605', 'PLUG,QC,EL,DLRN/EPR,3/8BRB,VLV', '', 'https://i.ibb.co/S5cggDP/3412-14-0605.jpg', ''),
  new GmpFluidsystem('3414-00-0246', 'PUMP, 6.2 GPM 24VDC 3.2A CRD WITH NEW CASE ORIENTATION', '', 'https://i.ibb.co/zXC0sKJ/3414-00-0246.jpg', 'F7.3'),
  new GmpFluidsystem('7122-00-9228', 'ASSY TWO ROW HX EXCHANGER PWM FANS', 'Old version(?)\nWO-00351021', 'https://i.ibb.co/DWcYdk2/7122-00-9228.jpg', ''),
  new GmpFluidsystem('3455-00-0154', 'PRO SERIES 2 ROW HT EXCHNGR', '', '', ''),
  new GmpFluidsystem('8120-00-0001', 'PRO FLUID MODULE, NO HEATER', '', 'https://i.ibb.co/qYPzRXp/8120-00-0001.jpg', 'Water leaking'),
  new GmpFluidsystem('5108-06-0175', 'THERMO,NC,OPEN@175F,CLOSE@145F', 'F7.2', 'https://i.ibb.co/gj2fvPz/5108-06-0175.jpg', ''),
  new GmpFluidsystem('3414-00-0248 ', 'Pump, 5.3 GPM, 24VDC, 45W, Mod', '','https://i.ibb.co/MR0WT8r/3414-00-0248.jpg', ''),
];

// GmpHeadparts 객체 생성
const headParts = [
  new GmpHeadparts('3160-02-0013', 'Red Manifold O-rings', '', '', ''),
  new GmpHeadparts('9908-17-0408', "FLASHLMP,REARTIP,700T,4''ARC,8", '2EA for each Laser Head', 'https://i.ibb.co/fXBdRH0/9908-17-0408.jpg', 'F5.2, F14.1, F14.2, F12.1, F12.4, F12.3'),
  new GmpHeadparts('7122-00-9578', 'DHP YAG HEAD ASSY', '', 'https://i.ibb.co/bKxnMYv/7122-00-9578.jpg', 'F12.6, F14.2, F12.1, F19.3, F12.3'),
  new GmpHeadparts('1301-00-9584', 'HEAD MANIFOLD,YAG,DHP', 'Yag Head', 'https://i.ibb.co/cw7D7F9/1301-00-9584.jpg', ''),
  new GmpHeadparts('1301-00-9444', 'HEAD MANIFOLD, SPECTRUM', 'Yag Head', 'https://i.ibb.co/yP9Bm2q/1301-00-9444.jpg', ''),
  new GmpHeadparts('1301-00-9583', 'HEAD MANIFOLD,ALEX,DHP', 'For Alex Head: 2EA', 'https://i.ibb.co/sgppYts/1301-00-9583.jpg', ''),
  new GmpHeadparts('3406-41-0804', 'ELBOW,MALE, 45 DEGREE, 1/2x1/4 NPT,SS', 'Yag Head', 'https://i.ibb.co/bBsG4Cw/3406-41-0804.jpg', ''),
  new GmpHeadparts('3406-10-0804', 'CONN,MALE 1/2T x1/4MPT SS', 'Yag Head', 'https://i.ibb.co/m8zWxVN/3406-10-0804.jpg', ''),
  new GmpHeadparts('7122-00-9572', 'GMAX DHP ALEX HEAD', '', '', 'F14.1, F12.1, F19.3, F12.3'),
  new GmpHeadparts('7122-57-9572', 'FSE, GMAX DHP ALEX HEAD (Service parts: Republished)', 'Service parts: Republished', '', ''),
  new GmpHeadparts('2849-04-0854', 'Head Screw', 'Long Screw', '4EA for each Laser Head', ''),
  new GmpHeadparts('3160-02-0013', 'Red Manifold O-rings', '4EA for each Laser Head', '', ''),
  new GmpHeadparts('3160-01-0012', 'White O-rings', '6EA for each Laser Head', '', ''),
  new GmpHeadparts('7122-00-9207', 'Pump Cavity', '', '', 'F12, F6.1, F19.3, F12.1, F12.4, F12.3'),
  new GmpHeadparts('1301-00-7763', 'Yag ROD', '', '', 'F19.3'),
  new GmpHeadparts('1301-00-7014', 'Alex ROD', '', '', 'F19.3'),
];

// GmpHandpieceparts 객체 생성
const gmphd = [
  new GmpHandpieceparts('7122-00-9401', 'PRO SERIES DCD HP W/O FIBER', 'GMP Only', 'https://i.ibb.co/F74pWyr/7122-00-9401.jpg', 'Consumable, F1.1, F8.3, F13.1, F13.3'),
  new GmpHandpieceparts('FIN100985', 'PRO SERIES DCD HP W/O FIBER, Refurbished', 'Refurbished', 'https://i.ibb.co/F74pWyr/7122-00-9401.jpg', 'Consumable, F1.1, F8.3, F13.1, F13.3'),
  new GmpHandpieceparts('7122-00-9404', 'PRO SERIES ACC HP W/O AIR CLIP', 'ACC Handpiece', 'https://i.ibb.co/8r63zvG/7122-00-9404.jpg', ''),
  new GmpHandpieceparts('7122-00-9752', 'ACC LARGE SPOT DELIVERY SYSTEM ASSY', 'ACC Handpiece(Large Spot)', '', ''),
  new GmpHandpieceparts('7122-00-9420', 'PRO SERIES AIR CLIP', 'ACC Handpiece AIR CLIP', 'https://i.ibb.co/kJpwThx/7122-00-9420.jpg', ''),
  new GmpHandpieceparts('7122-00-9527', 'VELCRO STRAP KIT', '', '', ''),
  new GmpHandpieceparts('7122-00-9585', 'PRO SERIES ACC HP W AIR CLIP W/O FIBER', '', 'https://i.ibb.co/8gJH7XJ/7122-00-9585.jpg', 'F13.1, F13.3'),
  new GmpHandpieceparts('7122-00-9419', 'PRO SERIES FIBER', '', 'https://i.ibb.co/nz8q336/7122-00-9419.jpg', 'F15.1'),
  new GmpHandpieceparts('3160-00-1150', 'O-RING, 13/16ID, 3/32W, BUNA-N', 'Inside of Handpiece', 'https://i.ibb.co/dQ5hPWn/3160-00-1150.jpg', 'F12.2, F12.1, F12.4, F12.6'),
  new GmpHandpieceparts('1301-00-9457', 'FOAM,PRE-CUT,SPECTRUM FAN', '', '', ''),
  new GmpHandpieceparts('7122-00-9746', 'LARGE SPOT FIBER ASSY', 'Green Fiber', '', 'F15.1'),
  new GmpHandpieceparts('7122-00-9748', 'DCD LARGE SPOT DELIVERY SYSTEM ASSY', 'Large Spot Delivery System\nLarge DCD handpiece\n20/22/24', 'https://i.ibb.co/CsHZSdL/7122-00-9748.jpg', 'F1.1, F8.3, F13.1, F13.3'),
  new GmpHandpieceparts('7122-00-9602', 'ASSY,SPECIALIZED PRO DCD HP W/O FIBER', 'Specialty HP\n1.5/3/5/3x10\nvascular vein', '', ''),
  new GmpHandpieceparts('7122-00-9616', 'SPECIALTY DELIVERY SYSTEM KIT ASSY', '', '', ''),
  new GmpHandpieceparts('1303-00-0220', 'FINGER SWITCH, H/P, PRO,ROHS', '', 'https://i.ibb.co/ZXTnV5D/1303-00-0220.jpg', 'F13.1, F13.3'),
  new GmpHandpieceparts('1301-00-9401', 'LEFT SHELL DCD H/P SPECTRUM', '', 'https://i.ibb.co/93BqFdp/1301-00-9401.jpg', ''),
  new GmpHandpieceparts('1301-00-9405', 'RIGHT SHELL DCD H/P SPECTRUM', '', 'https://i.ibb.co/Z2DTHWQ/1301-00-9405.jpg', ''),
  new GmpHandpieceparts('1301-00-9403', 'TRIGGER BUTTON H/P SPECTRUM', '', '', '')
];

// Gmpcontrollerparts 객체 생성
const gmpController =[
  new GmpControllerparts('7123-07-0014', 'Split IO', '', 'https://i.ibb.co/XZHsLD0/7123-07-0014.jpg', 'F26.1,Upgrade to Split IO, F7.1, F7.2, F18.1, F18.2, F18.3, F8.4, F9.2'),
  new GmpControllerparts('7123-67-0014', 'Split IO', 'FSE Part', 'https://i.ibb.co/XZHsLD0/7123-07-0014.jpg', 'F26.1, F7.1, F7.2, F18.1, F18.2, F18.3, F8.4'),
  new GmpControllerparts('7123-00-0588', 'ASSY, Q7 LCD DISPLAY', 'New Display for 5digts', 'https://i.ibb.co/PZzs2P8/7123-00-0588.jpg', 'F26.1,Upgrade to Split IO, F24'),
  new GmpControllerparts('7123-00-0201', 'GUI Display Cable Set Pro Series', 'New Display for 5digts', '', 'Upgrade to Split IO')
];

// Gmpskinparts 객체 생성
const gmpskin = [
  new GmpSkinParts('7122-00-9448', 'TOP PANEL ASSY, GL PRO, ASSY', '', 'https://i.ibb.co/2hp5mB8/7122-00-9448.jpg', 'cover'),
  new GmpSkinParts('7122-00-9429', 'RIGHT PANEL ASSY, SPECTRUM', '', 'https://i.ibb.co/ZGCdcQM/7122-00-9429.jpg', 'cover'),
  new GmpSkinParts('7122-00-9430', 'LEFT PANEL ASSY, SPECTRUM', '', 'https://i.ibb.co/h9JsHws/7122-00-9430.jpg', 'cover'),
  new GmpSkinParts('7122-00-9449', 'FRONT PANEL, ASSY, GL PRO, ASSY', '', 'https://i.ibb.co/W6tFSW6/7122-00-9449.jpg', 'cover'),
  new GmpSkinParts('7122-00-9441', 'DISPLAY BEZEL ASSY,GENTLE LASE PRO', '', 'https://i.ibb.co/k25B44W/7122-00-9441.jpg', 'cover'),
  new GmpSkinParts('7122-00-9460', 'DISPLAY BEZEL,REAR ASSY, GL PRO', '', 'https://i.ibb.co/zmDcCxq/7122-00-9460.jpg', 'cover'),
  new GmpSkinParts('2846-30-0808', 'SCR,SEMS,EXT TH,PHLPS,8-32x1/2', '', 'https://i.ibb.co/YRkkRXW/2846-30-0808.jpg', 'Screw'),
  new GmpSkinParts('2846-30-0806', 'SCR,SEMS,EXT,PAN,PHLPS,8-32x3/8,SS', '', 'https://i.ibb.co/pn9pVm8/2846-30-0806.jpg','Screw'),
  new GmpSkinParts('2846-31-1006', 'SCR,SEMS,EXTH,PHILPS,10-32X3/8', '', 'https://i.ibb.co/fGMSpcG/2846-31-1006.jpg', 'Screw'),
  new GmpSkinParts('2846-30-0806', 'SCR,SEMS,EXT,PAN,PHLPS,8-32x3/8,SS', '', 'https://i.ibb.co/sqDFcZd/2846-30-0806-1.jpg', 'Screw'),
  new GmpSkinParts('1301-00-9409', 'DCD COVER, SPECTRUM', '', 'https://i.ibb.co/r76ygCx/1301-00-9409.jpg', '')
];

// GmpCalportParts 객체 생성
const gmpcalport = [
  new GmpCalportParts('8075-00-1015', 'Calport Detector Fiber (Black)', '4 Digits IO', '', 'F15.1'),
  new GmpCalportParts('8075-00-1019', 'Calport Detector Fiber (Black)', '5 Digits IO', '', 'F15.1, Upgrade to Split IO'),
  new GmpCalportParts('7122-00-9608', 'ASSY,GMAX PRO CALPORT', '', '', 'F6.5'),
  new GmpCalportParts('1301-00-9430', 'WINDOW, SPECTRUM CALPORT', 'Calport window', 'https://i.ibb.co/Xkq0k1b/1301-00-9430.jpg', 'F15.1, consumable'),
  new GmpCalportParts('7122-00-9525', '4 PIN SWITCH ASSY', 'Inside calport', '', 'F6.5'),
  new GmpCalportParts('7122-00-9524', '5 PIN SWITCH ASSY', 'Inside calport', '', 'F6.5')
];

// GmpServiceTool 객체 생성
const gmptool = [
  new GmpServiceTool('7122-00-3363', 'ASSY,TOOL,ALIGN,CROSSHAIR,MGL', '', 'https://i.ibb.co/FsyjdSt/7122-00-3363.jpg', 'brun plug'),
  new GmpServiceTool('7122-00-3362', 'ASSY,ALIGN VER TOOL,MGL', '', 'https://i.ibb.co/YhBvzVX/7122-00-3362.jpg', 'fiber burn')

];

// GmpUpgradeParts 객체 생성
const GmpUpgrade = [
  new GmpUpgradeParts('FIN100065', 'Gentle Split I/O Upgrade Kit', '', '', 'Upgrade')

];


// GmppHandpieceparts 객체 생성
const gmpphd = [
  new GmppHandpieceparts('7123-CE-0658', 'ASSY, FIBER, STANDARD, HC, GMPP', 'GMPP only', '', 'F15.1, consumable'),
  new GmppHandpieceparts('7123-CE-0635', 'ASSY, FIBER, LARGE SPOT, GC, GMPP', 'GMPP only', '', 'F15.1, consumable'),
  new GmppHandpieceparts('7123-CE-0631', 'ASSY, DCD HAND PIECE, LARGE SPOT, GMPP', 'GMPP only', '', 'consumable'),
  new GmppHandpieceparts('7123-CE-0629', 'ASSY, ACC HAND PIECE, MEDIUM SPOT, GMPP', 'GMPP only', '', 'consumable'),
  new GmppHandpieceparts('7123-CE-0632', 'ASSY, DCD HAND PIECE, MEDIUM SPOT, GMPP', 'GMPP only', '', 'consumable'),
  new GmppHandpieceparts('7123-00-0609', 'ASSY, SLIDER ATTACHMENT, 26MM, GMPP', 'GMPP only', '', 'consumable'),
];

// VbeamHeadParts 객체 생성
const VbeamHead = [
  new VbeamHeadParts('8001-00-0002', 'PR,70%R@580-600nm,0.375\'\'Dia', 'OC lens', 'https://i.ibb.co/gd36Lmq/8001-00-0002.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamHeadParts('8005-00-2013', 'HR,580-600nm,0.375\'\'Dia', 'HR lens', 'https://i.ibb.co/pvjxwTY/8005-00-2013.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamHeadParts('1301-00-7396', 'Reflector,6.05\'\'', 'Reflector, 2EA', 'https://i.ibb.co/5sCw8nj/1301-00-7396.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamHeadParts('9908-04-1220', 'FLASHLAMP,7.15mm,ENDS', 'Flash lamp', '', 'F12.4, F12.1, Low energy, F14'),
  new VbeamHeadParts('1301-00-7395', 'Dye Cell,4mmx8mm Cleaned', 'Dye Cell', 'https://i.ibb.co/4tyh2YG/1301-00-7395.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamHeadParts('1301-00-7408', 'Water Jacket,Pyrex,Sclero-LP', 'Water Jacket', 'https://i.ibb.co/n7qhM8V/1301-00-7408.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamHeadParts('3160-02-0010', 'O-RING,SLCONE,1/4" ID 3/8"', 'Flash lamp O-ring(Red): 2ea', '', 'F12.4, F12.1'),
  new VbeamHeadParts('3160-01-0012', 'O-RNG,WHTSIL,3/8"ID,1/2"OD', 'Water jacket O-ring: 2ea', '', 'F12.1, F12.4'),
  new VbeamHeadParts('3160-01-0011', 'O-RNG,WHTSIL,5/16id7/16od1/16w', 'Dye cell oring : 2ea', '', 'F12.1, F12.4'),
  new VbeamHeadParts('3160-02-0024', 'O-Ring,Wht,Silicon,.276IDx.047', 'O-ring for PR and HR : 2ea', '', 'F12.1, F12.4'),
  new VbeamHeadParts('7122-00-7528', 'ASSY,LSR HD,VBEAM2', 'Laser Head Assy', '', 'F12.1, F12.4, Low energy'),
];

// VbeamOpticsParts 객체 생성
const VbeamOptics = [
  new VbeamOpticsParts('7122-00-3597', 'ASSY,HSG,LENS,FBR,RCPT', 'Fiber focus lens', 'https://i.ibb.co/y8X004P/7122-00-3597.jpg', 'F15.1'),
  new VbeamOpticsParts('8050-00-2552', 'LENS,PL/CX,25.4D,50.8FL,BBAR', 'ASSY,HSG,LENS,FBR,RCPT Lens only', '', ''),
  new VbeamOpticsParts('8050-00-2563', 'LENS,PL/CX,25.4D,63.5FL,BBAR', 'ASSY,HSG,LENS,FBR,RCPT Lens only', '', ''),
  new VbeamOpticsParts('8010-00-0016', 'WDO,DUST,CALPORT', 'Calport window lens', 'https://i.ibb.co/N17qYDm/8010-00-0016.jpg', 'F15.1'),
  new VbeamOpticsParts('1301-00-7496', 'Cer Disk,Calport,Sclero-LP', '', 'https://i.ibb.co/f8VmCFm/1301-00-7496.jpg', 'F12.5'),
  new VbeamOpticsParts('8055-00-0290', 'Beamsplitter,Dual Coated', '', '', 'PM kit'),
  new VbeamOpticsParts('8055-00-0303', 'BMSPLTR,DICHR,530/595,25.4DIA', '', '', 'PM kit'),
  new VbeamOpticsParts('8075-00-1014', 'FIBER CBL 200UM ST/ST .37NA 24', '', 'https://i.ibb.co/X2Njc1y/8075-00-1014.jpg', 'fiber'),
  new VbeamOpticsParts('7122-00-3747', 'ASSY,FBR CBLS,ST,VBEAM2', 'fiber wire bundle set for the CP WL HD1 HD2', '', 'F12.5'),
  new VbeamOpticsParts('7122-00-7530', 'Assy, Head Detector', '', '', 'F11, F12.5'),
];

// VbeamConsumableParts 객체 생성
const vbeamConsumableParts = [
  new VbeamConsumableParts('7122-00-3592', 'HANDPIECE CARTRIDGE WINDOW', 'HP window', 'https://i.ibb.co/n3xSvSb/7122-00-3592.jpg', 'F15.1'),
  new VbeamConsumableParts('7122-00-3761', 'HANDPIECE CARTRIDGE WINDOW extractor tool', 'Tool', 'https://i.ibb.co/2WfkRz3/7122-00-3761.jpg'),
  new VbeamConsumableParts('7122-00-3692', 'VBEAM PERFECTA DELIVERY SYSTEM', 'Handpiece with fiber', 'https://i.ibb.co/mbf6m4z/7122-00-3692.jpg', 'F15.1, F1.1, F10.1, F10.2, F10.3, F10.4'),
  new VbeamConsumableParts('FIN100984', 'VBEAM PERFECTA DELIVERY SYSTEM', 'Refurbished', 'https://i.ibb.co/mbf6m4z/7122-00-3692.jpg', 'F15.1, F1.1, F10.1, F10.2, F10.3, F10.4'),
  new VbeamConsumableParts('8901-00-9335', 'BOM,KIT,PM,VBEAM2', 'PM', 'https://i.ibb.co/zhRw1ZD/8901-00-9335.jpg', 'PM kit'),
  new VbeamConsumableParts('7122-00-3579', 'VBEAM 10mm DISTANCE GAUGE', '', 'https://i.ibb.co/C1gs5TP/7122-00-3579.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-3582', 'VBEAM 3mm DISTANCE GAUGE', '', 'https://i.ibb.co/2P9QYmw/7122-00-3582.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-3589', 'VBEAM 3x10mm DISTANCE GAUGE', '', 'https://i.ibb.co/4WSf366/7122-00-3589.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-3580', 'VBEAM 7mm DISTANCE GAUGE', '', 'https://i.ibb.co/sWcXvqN/7122-00-3580.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-3581', 'VBEAM 5mm DISTANCE GAUGE', '', 'https://i.ibb.co/tckpm6b/7122-00-3581.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-3578', 'VBEAM 12mm DISTANCE GAUGE', '', 'https://i.ibb.co/qRKvhkB/7122-00-3578.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('7122-00-7557', 'VBEAM2,7MM,COMP.DIST GAUGE', 'PL', 'https://i.ibb.co/hmdyBsW/7122-00-7557.jpg', 'F15.1, Tip'),
  new VbeamConsumableParts('2845-00-0814', 'SCR,BTNHD,SKT,8-32X7/8,BLK', 'Top cover , black , wranch Screw', '', 'Screw'),
  new VbeamConsumableParts('2845-00-0808', 'SCR,BTNHD,SKT,8-32x1/2,BLK', 'Top cover , black , wranch Screw', '', 'Screw'),
  new VbeamConsumableParts('7122-00-3770', 'WINDOW KIT,VBEAM2,25PK', '', 'https://i.ibb.co/XZjm7Gm/7122-00-3770.jpg', 'Window Lens'),
  new VbeamConsumableParts('7122-00-3001', 'Assy,Keyswitch,Diode', '', 'https://i.ibb.co/gm7kVCS/7122-00-3001.jpg', ''),
  new VbeamConsumableParts('1414-00-0301', 'CASTER,SWVL,LOCK,4 WHL', 'Front Wheel', '', ''),
  new VbeamConsumableParts('1414-00-0302', 'CASTER,RGD,4 WHL', 'Rear Wheel', '', ''),
  new VbeamConsumableParts('8095-00-0470', 'GOGGLES, PATIENT, LASER, SS, CE', '', 'https://i.ibb.co/W0TP0Zt/8095-00-0470.jpg', ''),
  new VbeamConsumableParts('8095-00-0475', 'LASER EYEWEAR 5.2@592-597', '', 'https://i.ibb.co/9GCWQw7/8095-00-0475.jpg', 'operator goggles'),
  new VbeamConsumableParts('7122-00-3643', 'VBEAM2 LASER ACCESSORIES', '', '', ''),
  new VbeamConsumableParts('7122-00-7491', 'VBEAM ACCESSORY KIT', '', '', ''),
];

// VbeamFluidParts 객체 생성
const VbeamFluid = [
  new VbeamFluidParts('7122-00-3165', 'Assy,DI Filter', 'DI water filter', 'https://i.ibb.co/wwhBCGX/7122-00-3165.jpg', 'PM kit'),
  new VbeamFluidParts('7122-00-7497', 'ASSY,DI TUBING KIT VBEAM2', '', '', 'Dye Leak, Water leak'),
  new VbeamFluidParts('1301-00-8491', 'WTR RSVR,ROTO-MOLDED,RECT', '', 'https://i.ibb.co/6tW6SbC/1301-00-8491.jpg', 'Water tank, Water leak'),
  new VbeamFluidParts('7122-00-9181', 'ASSY,HEAT EXCHANGER W/PWM FAN', '', '', ''),
  new VbeamFluidParts('3412-14-0605', 'PLUG,QC,EL,DLRN/EPR,3/8BRB,VLV', '', 'https://i.ibb.co/S5cggDP/3412-14-0605.jpg', 'L shape Plug, Water leak, Dye leak'),
  new VbeamFluidParts('3412-25-0120', 'PLUG,QC,DLRN,TWIN,1/8 BARB,EPR', '', 'https://i.ibb.co/K5H5SVX/3412-25-0120.jpg', 'Dye Leak'),
  new VbeamFluidParts('7122-00-3723', 'ASSY TFLN TBG HTR MANF LIQ HE', '', 'https://i.ibb.co/8zn333v/7122-00-3723.jpg', 'Drain water'),
  new VbeamFluidParts('7122-00-3725', 'ASSY,PUMP PRESS SW', 'DI water Pump press', 'https://i.ibb.co/xsFgtXw/7122-00-3725.jpg','Pressure, F7.3'),
  new VbeamFluidParts('7122-00-3745', 'ASSY,WTR HTR TEMP PROBE,VBM2', 'Temperature sensor', 'https://i.ibb.co/bFwPSCT/7122-00-3745.jpg','F9.1'),
  new VbeamFluidParts('3460-00-0071', 'CAP VENT 2 1/4 BUTTRESS THRD', 'cap', 'https://i.ibb.co/rs4d6Nv/3460-00-0071.jpg', ''),
];

//VbeamElectronicsParts 객체 생성
const VbeamElectronic = [
  new VbeamElectronicsParts('7122-00-7520', 'ASSY,CALPORT', '', 'https://i.ibb.co/gy32bh5/7122-00-7520.jpg', 'F15.1'),
  new VbeamElectronicsParts('7122-00-0110', 'Assy Pump,Dye,Vbeam', '', '', 'F20.1'),
  new VbeamElectronicsParts('7111-07-2696', 'ASSY, AC BOARD,VBEAM 2 ROHS', '', 'https://i.ibb.co/2sf4yXp/7111-07-2696.jpg', 'Power off, F20.1'),
  new VbeamElectronicsParts('7111-00-2696', 'ASSY, AC BOARD,VBEAM 2 ROHS', '', 'https://i.ibb.co/2sf4yXp/7111-07-2696.jpg', 'Power off, F20.1'),
  new VbeamElectronicsParts('7122-07-7498', 'ASSY, CPU/LSR I/O W/FW, VBEAM2','', 'https://i.ibb.co/HnzQb4p/7122-07-7498.jpg', 'F18 io'),
  new VbeamElectronicsParts('7122-00-7498', 'ASSY, CPU/LSR I/O W/FW, VBEAM2','', 'https://i.ibb.co/HnzQb4p/7122-07-7498.jpg', 'F18 io'),
  new VbeamElectronicsParts('7122-57-7498', 'ASSY, CPU/LSR I/O W/FW, VBEAM2','', 'https://i.ibb.co/HnzQb4p/7122-07-7498.jpg', 'F18 io'),
  new VbeamElectronicsParts('7122-00-3803', 'ASSY,THYR,VBEAM2', 'THYRISTOR', 'https://i.ibb.co/P4q3jjS/7122-00-3803.jpg', 'F5.2'),
  new VbeamElectronicsParts('8901-00-9421', 'VB2 THYRISTOR REPAIR KIT', 'THYRISTOR','','F5.2'),
  new VbeamElectronicsParts('7122-00-3674', 'ASSY,IGBT', '','https://i.ibb.co/QdqZmWt/7122-00-3674.jpg','F19.1'),
  new VbeamElectronicsParts('7122-07-3674', 'ASSY,VBEAM2, IGBT ROHS', '', 'https://i.ibb.co/QdqZmWt/7122-00-3674.jpg', 'F19.1'),
  new VbeamElectronicsParts('7122-00-3660', 'AASSY,MANF DI,5/8 OD CRTG HTR', 'Water Heater','https://i.ibb.co/HnCPT7c/7122-00-3660.jpg','F9.1, F7.1, F7.4'),
  new VbeamElectronicsParts('4816-01-2200', 'Diode,HV,2200V,120A,DUAL MOD', 'Set HV to zero… go into ready. Does the HVSample go up to 2875??  If so.. bad diode', 'https://i.ibb.co/hcK81DZ/4816-01-2200.jpg', 'F5.2'),
  new VbeamElectronicsParts('7111-07-2813', 'ASSY, VB2 HV DUMP 0.7 OHM PCB ROHS', '', '', 'F19.5'),
  new VbeamElectronicsParts('4001-01-0086', 'HVPS, 3.3KV, 3KJ/S, TRIG, SIM', '', '','F4.2, F5.1, F5.2, F14'),
  new VbeamElectronicsParts('7122-00-3640', 'ASSY, DCD', '', 'https://i.ibb.co/Tr61032/7122-00-3640.jpg','F8.1'),
  new VbeamElectronicsParts('7122-00-3006', 'Assy,DCD Valve,Diode', '', 'https://i.ibb.co/5RDy24X/7122-00-3006.jpg', ''),
  new VbeamElectronicsParts('3414-00-0248 ', 'Pump, 5.3 GPM, 24VDC, 45W, Mod', '','https://i.ibb.co/MR0WT8r/3414-00-0248.jpg', ''),
  new VbeamElectronicsParts('7122-00-9712', 'VBM2 ETX ASSY W/FW', 'LCD Display, SD5', 'https://i.ibb.co/x6G8t4q/7122-00-9712.jpg', 'Black screen'),
  new VbeamElectronicsParts('7111-07-2701', 'ASSY,BOM,DYE CRTG ID BD,VB2 RoHS', '', 'https://i.ibb.co/DWrWrmX/7111-07-2701.png', ''),
  new VbeamElectronicsParts('7122-00-7526', 'ASSY,HARN,SIG,VBEAM2', '', '', 'cable'),
  new VbeamElectronicsParts('7122-00-7533', 'ASSY,HARNESS,HV', '', '', 'cable'),
  new VbeamElectronicsParts('7111-07-2510', 'ASSY, PCB, HP BULKHEAD ROHS', '', 'https://i.ibb.co/fXk6Txh/7111-07-2510.jpg', 'F10.1, F10.3, F10.2'),
  new VbeamElectronicsParts('5609-00-0200', 'XFMR,STPDN,115/230P,28V,250VA', '', 'https://i.ibb.co/p3d5GKw/5609-00-0200.jpg', ''),
  new VbeamElectronicsParts('1510-00-0110', 'CAP,PFN,1500uF,3.2KV', 'Capacitor', '', ''),
];

//VbeamMdyeParts 객체 생성
const VbeamMdye = [
  new VbeamMdyeParts('7122-00-0080', 'Assy,Rsvr,Dye,Vbeam', '', 'https://i.ibb.co/JcqxwGC/7122-00-0080.jpg', 'Jar, Water leaking'),
  new VbeamMdyeParts('7122-00-3777', 'VBM2 FIELD SERV MDYE CRTG REPL', 'Mdye Cartridge', 'https://i.ibb.co/G04VkwJ/7122-00-3777.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamMdyeParts('7122-00-9517', 'GROUND VBEAM DYE HAZMAT RETURN', '', '', 'F12.4, F12.1, Low energy'),
  new VbeamMdyeParts('7122-00-1010', 'Assy,Box n Box,HZRD,Ship,Empty', '', 'https://i.ibb.co/RDBgCsB/7122-00-1010.jpg', 'Removal'),
  new VbeamMdyeParts('7121-00-2270', 'BOM,BTL ASSY,COT INJECTOR', '', 'https://i.ibb.co/L6rWkS4/7121-00-2270.jpg', 'F12.4, F12.1, Low energy'),
  new VbeamMdyeParts('7122-00-9516', 'AIR VBEAM DYE HAZMAT RETURN KIT', 'Air, FSE needs to drop the box off to Fedex Hub ', '', 'Air'),
  new VbeamMdyeParts('7121-00-2860', 'BOM,SOLVENT ASSY,2.01,SPTL-1b', '', 'https://i.ibb.co/vPb6jV1/7121-00-2860.jpg', 'F12.4'),
  new VbeamMdyeParts('3412-28-0003', 'CPL,BLK HD,QC,PLYSLFN,3/8 BARB', 'Dye Cartridge Bulk Head', 'https://i.ibb.co/LZDd5xG/3412-28-0003.jpg', 'Dye Leak'),
  new VbeamMdyeParts('7122-00-3722', 'ASSY,TFLN TBG DYE RSVR TO PUMP', '', 'https://i.ibb.co/PcJvK8j/7122-00-3722.jpg', 'Dye Leak'),
  new VbeamMdyeParts('3414-00-0190', 'BELLOWS PUMP,3/4\'\'MTR,24VDC/\nVBEAM2', '', 'https://i.ibb.co/gJnjYPy/3414-00-0190.jpg', 'F24.3'),
  new VbeamMdyeParts('3450-00-0280', 'DYE RESERVOIR CARBON FILTER', '', 'https://i.ibb.co/Mk8SW5h/3450-00-0280.jpg', 'Dye Smell'),
  new VbeamMdyeParts('3410-64-0806', 'Tee,M BR,White PP,1/2x3/8 Barb', 't fitting', 'https://i.ibb.co/7bgXmQD/3410-64-0806.jpg', 'Dye Leak'),
  new VbeamMdyeParts('3408-13-0606', 'Hose,Barb,SS,3/8NPTx3/8 Barb', '', 'https://i.ibb.co/VxS5qsD/3408-13-0606.jpg', 'Dye Leak'),
  new VbeamMdyeParts('1301-08-8573', 'COVER,DYE CRTG,ASSY,COOL GREY', '', '', 'F20.2'),
  new VbeamMdyeParts('7122-00-3701', 'ASSY,CBL DYE CRTG TO CHASSIS', '', 'https://i.ibb.co/6tT5Xfh/7122-00-3701.jpg', ''),
  new VbeamMdyeParts('1301-00-8585', 'HDW KIT,HIGH DRBLTY DRWR CONN', '', 'https://i.ibb.co/pJBP3QG/1301-00-8585.jpg', ''),
  new VbeamMdyeParts('7123-00-0523', 'Assy Reservoir Dye, Velos', '', 'https://i.ibb.co/7kLr5tm/7123-00-0523.png', 'Dye Leak'),
];

const VbeamServiceTool = [
  new VbeamServiceToolParts('7122-00-3779', 'VBEAM2 VERIFICATION TOOL', 'Fiber alignment tool', 'https://i.ibb.co/ZmcchrT/7122-00-3779.png', ''),
  new VbeamServiceToolParts('7122-00-3363', 'ASSY,TOOL,ALIGN,CROSSHAIR,MGL', '', 'https://i.ibb.co/nn0snD3/7122-00-3363.jpg', ''),
  new VbeamServiceToolParts('7122-00-3840', 'ASSY, HOYA V-10, WL MEASURE', 'Wavelength cal tool', 'https://i.ibb.co/3kgkbLr/7122-00-3840.jpg', ''),
  new VbeamServiceToolParts('1301-00-5923', 'WRENCH,MIRROR', '', 'https://i.ibb.co/fDvNWx5/1301-00-5923.jpg', ''),
];

// Prima Dye HeadParts 객체 생성
const PrimaDyeHead = [
  // new PrimaDyeHeadParts('', '', '', '', ''),
  new PrimaDyeHeadParts('1303-00-0734', 'DUAL LAMP REFLECTOR END RAIL', 'Ceramic, Need 2ea', 'https://i.ibb.co/TT1cCg4/1303-00-0734.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('1303-00-0737', 'DUAL LAMP REFLECTOR BODY RAIL', 'Ceramic, Need 1ea', 'https://i.ibb.co/1nN6g6V/1303-00-0737.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('9908-17-0411', 'FLASH LAMP, 7.15 ENDS, RAIL VE', 'Flash lamp, Need 2ea', 'https://i.ibb.co/c15HXwv/9908-17-0411.png', 'F6.1, F12.4, F12.1, F14.1'),
  new PrimaDyeHeadParts('1303-00-0735', 'DUAL FLASHLAMP FLOW TUBE, RAIL', 'Need 2ea', '', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('1303-00-0736', 'DUAL LAMP DYE CELL, RAIL VELOS', 'Need 1ea', 'https://i.ibb.co/L6GdwYP/1303-00-0736.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('8005-00-2017', 'Mirror HR @ 585-605 nm 10.8 m', 'Need 1ea', 'https://i.ibb.co/1sRmz6L/8005-00-2017.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('8001-00-0004', 'Mirror PR 87% @ 585-605 nm 10', 'Need 1ea', 'https://i.ibb.co/dbbKDCb/8001-00-0004.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('3160-01-0010', 'O-RNG WHTSIL 1/4\'\'ID 3/8\'\'OD', 'DYE Flash lamp Oring Need 4ea', 'https://i.ibb.co/pZXSwhx/3160-01-0010.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('3160-02-9026', 'O-Ring,Clear Silicon 0.315x 0.049 S70', 'Under PR or HR Need 2ea', 'https://i.ibb.co/jTvY7PF/3160-02-9026.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('3160-01-1171', 'O-ring, white, 1.5” ID, 1 3/4” OD', 'Dye head rebuild part White o-ring for reflector end Need 2ea', 'https://i.ibb.co/Gt8mzpM/3160-01-1171.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('3160-01-0011', 'O-ring, white, 5/16” ID, 7/16” OD', 'Dye head rebuild part White o-ring for dye cell Need 2ea', 'https://i.ibb.co/SXDyZjg/3160-01-0011.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('3160-01-0012', 'O-ring, white, 3/8” ID, 1/2” OD', 'Dye head rebuild part White o-ring for flash lamps Need 4ea', 'https://i.ibb.co/rfXGPRQ/3160-01-0012.png', 'F6.1, F12.4, F12.1'),
  new PrimaDyeHeadParts('2832-OC-0820', 'SCR,CAP,SOC HD 8-32 x 1-14', '', 'https://i.ibb.co/k2q7GYh/2832-OC-0820.png', ''),
  new PrimaDyeHeadParts('1303-00-0733', 'DUAL LAMP OUTER BODY, RAIL VELOS', '', 'https://i.ibb.co/M9cjDz5/1303-00-0733.png', ''),
  new PrimaDyeHeadParts('1303-00-0662', 'Dual Lamp End Block, Left, Vel', '', 'https://i.ibb.co/TvSqsyc/1303-00-0662.png', ''),
  new PrimaDyeHeadParts('1303-00-1128', 'DUAL LAMP MIRROR CUP REF. RAIL', '', 'https://i.ibb.co/mCrVV5W/1303-00-1128.png', ''),
  new PrimaDyeHeadParts('1303-00-0726', 'MIRROR CUP LOCK PLATE, RAIL VE', '', 'https://i.ibb.co/hKjqW9x/1303-00-0726.png', ''),
  new PrimaDyeHeadParts('2832-00-0203', 'SCR,CAP,SOC HD 2-56 X 316', '', 'https://i.ibb.co/60Xg4Jg/2832-00-0203.png', ''),
  new PrimaDyeHeadParts('1303-00-0732', 'DUAL LAMP END CAP, RAIL VELOS', '', 'https://i.ibb.co/kmNPtb7/1303-00-0732.png', ''),
  new PrimaDyeHeadParts('3406-89-0806', 'Adptr,12"ID Barb x38Tube End', '', 'https://i.ibb.co/SJ50q5S/3406-89-0806.png', ''),
  new PrimaDyeHeadParts('3406-89-0808', 'ADPTR,1/2ID BARB x 1/2TUBE END', '', 'https://i.ibb.co/qCvWk9S/3406-89-0808.png', ''),
  new PrimaDyeHeadParts('3406-40-0602', 'ELBOW,MALE 3/8T x 1/8MPT SS', '', 'https://i.ibb.co/wNk5HF7/3406-40-0602.png', ''),
  new PrimaDyeHeadParts('3406-41-0804', 'ELBOW,MALE, 45 DEGREE, 1/2x1/4 NPT,SS', '', 'https://i.ibb.co/bBsG4Cw/3406-41-0804.jpg', ''),
  new PrimaDyeHeadParts('1303-00-0728', 'DUAL LAMP FLOW BLOCK, LEFT, RAIL VELOS', '', 'https://i.ibb.co/xggZ8Cq/1303-00-0728.png', ''),
  new PrimaDyeHeadParts('1303-00-0730', 'DUAL LAMP FLOW BLOCK, RIGHT, RAIL VELOS', '', 'https://i.ibb.co/mh76p7s/1303-00-0730.png', ''),
  new PrimaDyeHeadParts('1303-00-0749', 'DUAL LAMP HV SHIELD, LEFT', '', 'https://i.ibb.co/H2h58t3/1303-00-0749.png', ''),
  new PrimaDyeHeadParts('1303-00-0748', 'DUAL LAMP HV SHIELD, RIGHT', '', 'https://i.ibb.co/0r0PtDm/1303-00-0748.png', ''),
  new PrimaDyeHeadParts('7123-00-0215', 'ASSY, LASER HEAD DYE, PRIMA', '', 'https://i.ibb.co/k9MhmRQ/7123-00-0215.png', ''),

];

// PrimaMDYEPart 객체 생성
const PrimaMDYE = [
  new PrimaMDYEPart('7122-00-9517', 'GROUND VBEAM DYE HAZMAT RETURN', 'HAZMAT RETURN', '', 'F6.1, F12.4, F12.1'),
  new PrimaMDYEPart('7121-00-2270', 'COT INJECTOR', 'COT', 'https://i.ibb.co/2NS1TV4/7121-00-2270.png', 'F6.1, F12.4, F12.1'),
  new PrimaMDYEPart('7123-00-0559', 'PRIMA DYE CRTG REPLACEMENT KIT', 'CRTG', 'https://i.ibb.co/M7Fxg4Y/7123-00-0488.png', 'F6.1, F12.4, F12.1'),
  new PrimaMDYEPart('7123-00-0276', 'Assembly, Velos, Cot Tubing Kit', '', 'https://i.ibb.co/XF4xbz7/7123-00-0276.png', 'Dye leaking'),
];

const PrimaCalport = [
  new PrimaCalportParts('8010-00-0015', 'WINDOW,CALPORT,MGL', '', 'https://i.ibb.co/VVZJMbb/8010-00-0015.png', ''),
  new PrimaCalportParts('7123-00-0529', 'Assy, Calport, Prima', '', 'https://i.ibb.co/m59mBDX/7123-00-0529.png', ''),
  new PrimaCalportParts('7123-00-0528', 'Assy, CalPort Receiver', '', 'https://i.ibb.co/BL01KQz/7123-00-0528.png', ''),
];

const PrimaHeadrail = [
  new PrimaHeadrailParts('7123-00-0186', 'Assy, Beam Blocker, Velos', 'Shutter', 'https://i.ibb.co/nwsDrBy/7123-00-0186.png', 'F3.1'),
  new PrimaHeadrailParts('8015-00-1252', 'Mirror Shutter, Velos', '', '', ''),
  new PrimaHeadrailParts('7123-00-0380', 'Imaging Lens Fixture Assembly', '595 Head PR&HR 12mm brun jib', 'https://i.ibb.co/NWhxHGt/7123-00-0380.png', ''),
  new PrimaHeadrailParts('8050-00-2552', 'LENS,PL/CX,25.4D,50.8FL,BBAR', '', '', ''),
  new PrimaHeadrailParts('7123-00-0505', 'Dye Beam-Expanding Lens Tool', '', '', ''),
  new PrimaHeadrailParts('7123-00-0187', 'Assy, Second Detector, Velos', 'Head Detector', 'https://i.ibb.co/wN1t3t8/7123-00-0187.png', 'F12.7, F12.6'),
  new PrimaHeadrailParts('7123-00-0183', 'Assy,Head Detector, PRIMA', 'Head Detector', 'https://i.ibb.co/ByG1F0Z/7123-00-0183.png', 'F12.7, F12.6'),
  new PrimaHeadrailParts('7123-00-0185', 'Assy, Mirror Holder, Fiber Rec', 'Launch mirror Assy', 'https://i.ibb.co/1qj0d25/7123-00-0185.png', ''),
  new PrimaHeadrailParts('8015-00-1256', 'Mirror, 31 mm dia HR 595 1064', 'Lens Only', 'https://i.ibb.co/NY8pVXr/8015-00-1256.png', ''),
  new PrimaHeadrailParts('7123-00-0184', 'Assy, Lens Housing, Fiber Rece', '', 'https://i.ibb.co/Xt57vvB/7123-00-0184.png', ''),
  new PrimaHeadrailParts('7123-00-0676', 'Assembly, Turning Mirror Dyle', 'Ver 1.4', '', ''),
  new PrimaHeadrailParts('7123-00-0675', 'Assembly, Adapter, Beam Compen', 'Ver 1.4', '', 'F12.7'),
  new PrimaHeadrailParts('8050-00-9095', 'Lens, PL/CX D25.4 F200.0 AR585-605', 'Lens for 7123-00-0675', '', 'F12.7'),
  new PrimaHeadrailParts('7123-00-0551', 'ASSY , FIBER RECEPTACLE, VELOS', '', 'https://i.ibb.co/Q6FtrF5/7123-00-0551.png', ''),
  new PrimaHeadrailParts('7123-00-0101', 'ASSY, GREEN DIODE', '', 'https://i.ibb.co/CtsQrRS/7123-00-0101.png', 'aiming beam'),
];

const PrimaV14Upgrade = [
  new PrimaV14UpgardParts('2981-05-0120', 'SPR,CANTED COIL,..880ID,.181H', '', '', ''),
  new PrimaV14UpgardParts('8901-00-9953', 'Kit, Vbeam Prima, Wiring Updates', '', '', ''),
  new PrimaV14UpgardParts('8901-00-9952', 'Kit_Service_PRIMA_ V 1.4', '', '', ''),
];

const PrimaElectronic = [
  // new PrmiaElectronicParts('', '', '', '', ''),
  new PrmiaElectronicParts('7122-00-3803', 'ASSY,THYR,VBEAM2', '', 'https://i.ibb.co/P4q3jjS/7122-00-3803.jpg', ''),
  new PrmiaElectronicParts('7123-00-0233', 'ASSY, IGBT HEATSINK, VELOS', '', 'https://i.ibb.co/hyYqDHz/7123-00-0233.png', 'F5.3, F19.1'),
  new PrmiaElectronicParts('4001-01-0097', 'HVPS, 2.9KV, 3KJ/s, DUAL SIMM', 'VBEAM Prima HVPS', 'https://i.ibb.co/rmkpPy1/4001-01-0097.png', 'F4.2, F5.1, F5.2, F14.1'),
  new PrmiaElectronicParts('7123-00-0427', 'Choke Assy', '', 'https://i.ibb.co/t8NgKqr/7123-00-0427.png', ''),
  new PrmiaElectronicParts('7123-00-0533', 'ASSY, PCB, CPU I/O w/FW VELOS', 'IO Board (Software include?)', 'https://i.ibb.co/wLxJDNZ/7123-00-0533.png', 'F7.4, F18.1, F18.2, F21.1, F26.1, F26.2, F26.3, F27.1'),
  new PrmiaElectronicParts('7123-00-0487', 'ASSY, DISPLAY,Vbeam PRIMA', '', 'https://i.ibb.co/34PMq84/7123-00-0487.png', ''),
  new PrmiaElectronicParts('7111-07-2802', 'ASSY, FIBER RECEPTACLE PCB, RO', '', 'https://i.ibb.co/sQY3ygc/7111-07-2802.png', ''),
  new PrmiaElectronicParts('7111-23-2803', 'PRGRM UNIVERSAL LIN PCB', '', '', ''),
  new PrmiaElectronicParts('7123-00-0442', 'ASSY, DCD MODULE', '', 'https://i.ibb.co/WD7qXs5/7123-00-0442.png', 'F1.2, F8.2, F9.2'),
  new PrmiaElectronicParts('7123-00-0045', 'ASSY, STOP SWITCH', '', 'https://i.ibb.co/fn63C56/7123-00-0045.png', ''),
  new PrmiaElectronicParts('7111-07-2873', 'ASSY, VELOS AC CONTROL PCB', '', 'https://i.ibb.co/dW2QH7P/7111-07-2873.png', 'F9.1'),
  new PrmiaElectronicParts('7111-07-2882', 'ASSY, VELOS DUMP PCB', '', 'https://i.ibb.co/2nrvhmP/7111-07-2882.png', 'F5.3'),
];

const PrimaCable = [
  new PrimaCableParts('7123-00-0292', 'ASSY VBEAM Prima SIGNAL HARNESS', '', 'https://i.ibb.co/zP3j63K/7123-00-0292.png', 'cable, F12.6'),
  new PrimaCableParts('7123-00-0418', 'ASSY POF HARNESS BUNDLE VELOS', '', 'https://i.ibb.co/ZMpJ8Fs/7123-00-0418.png', 'cable'),
  new PrimaCableParts('7123-00-0438', 'ASSY VELOS HV SECTION 24V HARN', '', 'https://i.ibb.co/ncctKpr/7123-00-0438.png', 'cable'),
  new PrimaCableParts('7123-00-0294', 'ASSY VELOS HV HARNESS', '', 'https://i.ibb.co/y8fS80y/7123-00-0294.png', 'cable'),
  new PrimaCableParts('7123-00-0293', 'ASSY VELOS AC HARNESS', '', 'https://i.ibb.co/4JPVjf9/7123-00-0293.png', 'cable'),
];

const PrimaSkin = [
  // new PrimaSkinParts('', '', '', '', ''),
  new PrimaSkinParts('1414-00-0313', 'CASTER, W/ BEARING SWVL, 4 in DIA, LOCK, WHITE W/GRAY WHEEL', 'Front wheel', 'https://i.ibb.co/2qhtkYm/1414-00-0313.png', ''),
  new PrimaSkinParts('7123-00-0468', 'Top Cover', '', 'https://i.ibb.co/1KrBSvw/7123-00-0468.png', ''),
  new PrimaSkinParts('7123-00-0508', 'ASSY ,SHORT ARM SUPPORT ,VELOS', '', 'https://i.ibb.co/KL5q3vX/7123-00-0508.png', ''),
  new PrimaSkinParts('7123-00-0073', 'ASSY, BEARING BLOCK, ARM, HELO', '', '', ''),
  new PrimaSkinParts('1303-00-0806', 'PLUG,RAIL DUST COVER, VELOS', '', 'https://i.ibb.co/6PqdTn7/1303-00-0806.png', ''),
  new PrimaSkinParts('1303-00-1008', 'FRONT COVER, VBEAM PRIMA', '', 'https://i.ibb.co/X83XZRy/1303-00-1008.png', ''),
  new PrimaSkinParts('1303-00-1009', 'LEFT SIDE COVER, VBEAM PRIMA', '', 'https://i.ibb.co/xJ6zM40/1303-00-1009.png', ''),
  new PrimaSkinParts('1303-00-1010', 'RIGHT SIDE COVER, VBEAM PRIMA', '', 'https://i.ibb.co/yPXsgFZ/1303-00-1010.png', ''),
];

const PrimaConsumable = [
  // new PrimaConsumableParts('', '', '', '', ''),
  new PrimaConsumableParts('8901-00-9949', 'PM KIT, VBEAM PRIMA', '', '', ''),
  new PrimaConsumableParts('7123-00-0402', 'ASSY, REMOVABLE WINDOW HOLDER', '', 'https://i.ibb.co/wCKRm3Z/7123-00-0402.png', ''),
  new PrimaConsumableParts('7123-00-0521', 'ASSY, DCD DISTANCE GAUGE KIT', '', 'https://i.ibb.co/XpJnf6t/7123-00-0521.png', ''),
  new PrimaConsumableParts('7123-00-0522', 'ASSY, WINDOW KIT, PRIMA', 'Window lens for Distance gauge', '', ''),
  new PrimaConsumableParts('2157-40-8716', 'LABEL, WALL SIGN, PRIMA', '', 'https://i.ibb.co/nQPsKGF/2157-40-8716.png', ''),
  new PrimaConsumableParts('3430-02-0010', 'CRYOGEN RELEASE VALVE', '', 'https://i.ibb.co/ZNhXfrK/3430-02-0010.jpg', ''),
  new PrimaConsumableParts('5103-00-0030', 'FOOTSWITCH', '', 'https://i.ibb.co/t3JwqRs/5103-00-0030.png', 'F13.2, F13.4'),
  new PrimaConsumableParts('7123-00-0374', 'ASSY, DISTANCE GAUGE, 3-7mm,', '', 'https://i.ibb.co/LzVzK3P/7123-00-0374.png', 'tip'),
  new PrimaConsumableParts('7123-00-0375', 'ASSY, DISTANCE GAUGE, 7-11mm,', '', 'https://i.ibb.co/dtJ4L8L/7123-00-0375.png', 'tip'),
  new PrimaConsumableParts('7123-00-0403', 'ASSY, 11-15mm DISTANCE GAUGE,', '', 'https://i.ibb.co/xL3pf2Z/7123-00-0403.png', 'tip'),
  new PrimaConsumableParts('7123-00-0478', 'ASSY, DISTANCE GAUGE, 3 X 10MM', '', 'https://i.ibb.co/zVw54R8/7123-00-0478.png', 'tip'),
  new PrimaConsumableParts('7123-00-0567', 'ASSY, DISTANCE GAUGE, 1.5MM, DCD HP, PRIMA', 'Yag Only', 'https://i.ibb.co/hmGd0Pv/7123-00-0567.png', 'tip'),
  new PrimaConsumableParts('7123-00-0494', 'ASSY, TOOL, WINDOW EXTRACTOR,', '', 'https://i.ibb.co/Jp6pJn8/7123-00-0494.png', ''),
  new PrimaConsumableParts('7123-00-0524', 'ASSY, HOLSTER KIT, VELOS', '', 'https://i.ibb.co/SJ0MqFY/7123-00-0524.png', ''),
  new PrimaConsumableParts('8095-00-0470', 'GOGGLES, PATIENT', '', 'https://i.ibb.co/9Zdtdtj/8095-00-0470.png', 'goggles'),
  new PrimaConsumableParts('8095-00-0489', 'Eye Wear,Laser', 'Operator Goggles', 'https://i.ibb.co/16QRSvp/8095-00-0489.png', 'goggles'),
  new PrimaConsumableParts('MT70360', 'Ultrasound Gel, 1/4 liter bott', '', 'https://i.ibb.co/cyZsnvn/MT70360.png', ''),  
  new PrimaConsumableParts('7123-00-0311', 'ASSY, PROTECTIVE WINDOW, RECEP', '', 'https://i.ibb.co/ts1s72F/7123-00-0311.png', ''),
  new PrimaConsumableParts('8010-00-7492', 'Window, 15.75 mm dia, 1 mm thk', 'lens for PROTECTIVE WINDOW RECEP', '', ''),
];

const PrimaYagHead = [
  new PrimaYagHeadParts('3406-10-0804', 'CONN,MALE 1/2T x1/4MPT SS', 'Yag Head', 'https://i.ibb.co/3yGy1vx/3406-10-0804.png', ''),
  new PrimaYagHeadParts('3426-00-0002', 'SOCKET HEAD PIPE PLUG 1/8" NPT', 'Yag Head', 'https://i.ibb.co/cyz8T1t/3426-00-0002.png', ''),
  new PrimaYagHeadParts('3406-89-0808', 'ADPTR,1/2ID BARB x 1/2TUBE END', '', 'https://i.ibb.co/qCvWk9S/3406-89-0808.png', ''),
  new PrimaYagHeadParts('3406-89-0806', 'Adptr,1/2"ID Barb x3/8Tube End', '', 'https://i.ibb.co/SJ50q5S/3406-89-0806.png', ''),
  new PrimaYagHeadParts('2902-00-0050', 'CLAMP,HOSE,WRM,SS,LINE7/16-3/4', '', 'https://i.ibb.co/718FKW0/2902-00-0050.png', ''),
  new PrimaYagHeadParts('7123-00-0428', 'ASSY, VB3 YAG HEAD', '', 'https://i.ibb.co/5F8wkcH/7123-00-0428.png', ''),
];

const PrimaHandpiece = [
  new PrimaHandpieceParts('7123-00-0433', 'ASSY, DELIVERY SYS, DCD HP, VE', 'Fiber with Handpiece Assy', 'https://i.ibb.co/2t3ktK6/7123-00-0433.png', 'F1.1, F8.3, F13.1, F13.3, F17'),
  new PrimaHandpieceParts('7123-57-0433', 'ASSY, DELIVERY SYS, DCD HP, PRIMA REFURBISHED', 'REFURBISHED, Fiber with Handpiece Assy', 'https://i.ibb.co/2t3ktK6/7123-00-0433.png', 'F1.1, F8.3, F13.1, F13.3, F17'),
  new PrimaHandpieceParts('7123-00-0431', 'ASSY, DELIVERY SYS, CC HP, VEL', 'Fiber with Handpiece Assy', 'https://i.ibb.co/2NVMqFZ/7123-00-0431.png', 'F13.1, F13.3')
];

const PrimaServicetool = [
  new PrimaServicetoolsParts('7123-00-0400', 'Assy, Align Ver Tool, Velos', '', 'https://i.ibb.co/y42q2qd/7123-00-0400.png', 'fiber focus alignment tool')
];


const PrimaFluidsystem = [
  // new PrimaFluidsystemParts('', '', '', '', ''),
  new PrimaFluidsystemParts('7123-00-0481', 'ASSEMBLY, BYPASS FLOW SWITCH, VELOS', '', 'https://i.ibb.co/vPvSSXt/7123-00-0481.png', 'water leaking, F7.3'),
  new PrimaFluidsystemParts('7123-00-0312', 'ASSY, CHILLER PUMP, VELOS', '', 'https://i.ibb.co/wdyCshb/7123-00-0312.png', 'F31.3'),
  new PrimaFluidsystemParts('7123-00-0238', 'Assembly, Velos, Chiller', '', 'https://i.ibb.co/Zmk3YZ6/7123-00-0238.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0274', 'Assembly, Velos, Chiller Section Tubing Kit', '', 'https://i.ibb.co/8M4FjMj/7123-00-0274.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0552', 'ASSEMBLY, BYPASS FLOW SWITCH', '', 'https://i.ibb.co/3yY1CbL/7123-00-0552.png', 'water leaking, F7.3'),
  new PrimaFluidsystemParts('7123-00-0273', 'Assembly, Velos, Fluid Section Tubing kit', '', 'https://i.ibb.co/5FHvGv9/7123-00-0273.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0479', 'ASSEMBLY, DI FILTER, VELOS', '', 'https://i.ibb.co/n8LXNJW/7123-00-0479.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0096', 'ASSY, Filter, DI/ Particle, 1/4IN OD Tube, JG', '', 'https://i.ibb.co/6ZGD4pm/7123-00-0096.png', 'water leaking'),
  new PrimaFluidsystemParts('3412-14-0605', 'PLUG,QC,EL,DLRN/EPR,3/8BRB,VLV', '', 'https://i.ibb.co/S5cggDP/3412-14-0605.jpg', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0460', 'ASSY, HEAT EXCHANGER W/FAN', '', 'https://i.ibb.co/dkQM1kM/7123-00-0460.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0409', 'ASSY, SPOUT REMOTE FILLER', '', 'https://i.ibb.co/9w9f7Xq/7123-00-0409.png', 'water leaking'),
  new PrimaFluidsystemParts('7123-00-0275', 'Assembly, Velos, Dye Tubing Kit', '', 'https://i.ibb.co/YNTB4yD/7123-00-0275.png', 'Dye leaking'),
  new PrimaFluidsystemParts('7123-00-0199', 'Assy, Velos, DYE Pump', '', 'https://i.ibb.co/HhnXgV3/7123-00-0199.png', ''),
  new PrimaFluidsystemParts('7123-00-0197', 'Assy, Velos, Reservoir', '', 'https://i.ibb.co/9Hmjg6X/7123-00-0197.png', ''),
  new PrimaFluidsystemParts('7123-00-0196', 'Assy, Chiller Reservoir, Velos', '', 'https://i.ibb.co/VM1Jq31/7123-00-0196.png', ''),
  new PrimaFluidsystemParts('7122-00-9262', 'DI LEVEL SWITCH ASSY SPECTRUM', '', 'https://i.ibb.co/bHfV6gc/7122-00-9262.png', 'F7.5'),
  new PrimaFluidsystemParts('7122-00-3745', 'ASSY,WTR HTR TEMP PROBE,VBM2', 'Temperature sensor', 'https://i.ibb.co/bFwPSCT/7122-00-3745.jpg','F7.1, F7.2, F7.4'),
  new PrimaFluidsystemParts('3414-00-0246', 'PUMP, 6.2 GPM 24VDC 3.2A CRD WITH NEW CASE ORIENTATION', '', 'https://i.ibb.co/zXC0sKJ/3414-00-0246.jpg', 'F7.3'),
  new PrimaFluidsystemParts('3414-00-0190', 'BELLOWS PUMP,3/4\'\'MTR,24VDC/\nVBEAM2', '', 'https://i.ibb.co/gJnjYPy/3414-00-0190.jpg', 'F24.3, DYE'),
  new PrimaFluidsystemParts('3455-00-0005', 'Ht Exchanger Liquid to Liquid', '', 'https://i.ibb.co/9VDDHTW/3455-00-0005.png', 'F9.1'),
  new PrimaFluidsystemParts('7122-00-3660', 'AASSY,MANF DI,5/8 OD CRTG HTR', 'Water Heater','https://i.ibb.co/HnCPT7c/7122-00-3660.jpg','F9.1'),
];




// PicowayArmParts 객체 생성
const picowayArmParts = [
  new PicowayArmParts('8015-00-1245', 'Arm PP Mirror FS 20 mm dia 1/8 in thk 532/650/1064 nm', 'small 3ea', '', 'Low energy, Alignment'),
  new PicowayArmParts('8015-00-1246', 'Arm PP Mirror FS 1.0 in dia 1/8 in thk 532/650/1064 nm', 'Large 4ea', '', 'Low energy, Alignment'),
  new PicowayArmParts('MH73310', 'Spring, gas cylinder, 10/26[stroke/L]cm, 100N+-15N extent', 'Arm support spring', '', ''),
  new PicowayArmParts('7123-00-0027', 'Arm Assy', '', '', 'Alignment, Clipping'),
  new PicowayArmParts('7123-57-0027', 'Arm Assy', '', '', 'Alignment, Clipping'),
  new PicowayArmParts('2832-00-0203', 'SCR,CAP,SOC HD 2-56 X 3/16', 'Screw, Used on the arm mirrors 1-4', '', ''),
  new PicowayArmParts('2832-OC-0202', 'SCREW, CAP, SOCKET HEAD, #2-56 X 1/8 LONG STAINLESS STEEL', 'Screw, Used on arm mirrors 5-7', '', ''),
  new PicowayArmParts('MP96831', 'Foam Mirror support ARM, CO2RE New Style Arm, 9mm Diameter Recess', 'Foam(New Arm mirror mount)', 'https://i.ibb.co/xDgLx6G/MP96831.png', ''),
  new PicowayArmParts('MP97161', 'Foam Mirror support, Arm, Candela Thick, 6mm diameter Recess', 'Foam(Old Arm mirror mount, Black)', 'https://i.ibb.co/XzfDHtf/MP97161.png', ''),
  new PicowayArmParts('2820-00-0600', 'WASHER,LOCK,INT TH #6 ID', 'Metal Spring Washer Old Style (Large Arm mirrors)', '', ''),
  new PicowayArmParts('1303-00-0159', 'BRACKET, ROTATION STOP, ARM, PICOWAY', '', 'https://i.ibb.co/cTb24qX/1303-00-0159.png', ''),
  new PicowayArmParts('FIN101024', 'Articulated Arm Service Kit, PicoWay', 'OXID Arm Upgrade', '', ''),
  new PicowayArmParts('7123-00-0678', 'OXID Arm, PicoWay, Inspected', 'OXID Arm Upgrade', 'https://i.ibb.co/cJ2NLq4/7123-00-0678.png', 'Low energy')
];

// PicowayHandpiecePart 객체 생성
const picowayHandpieceParts = [
  new PicowayHandpiecePart('7122-00-4052', 'ASSY PICO ZOOM H/P', 'Zoom HP', '', 'Consumable'),
  new PicowayHandpiecePart('7122-57-4052', 'ASSY PICO ZOOM H/P', 'Refurbished Zoom HP', '', ''),
  new PicowayHandpiecePart('7122-00-9862', 'ZOOM HP Distance Gauge kit', 'Zoom HP', 'https://i.ibb.co/GFq4FFh/7122-00-9862.png', 'Consumable'),
  new PicowayHandpiecePart('7123-00-0059', 'ASSY HANDPIECE RESOLVE 1064', 'RESOLVE 1064', '', 'cloudy, Consumable'),
  new PicowayHandpiecePart('8055-00-0323', '10x10 Fractional Beam splitter 1064nm', 'RESOLVE 1064', '', 'cloudy'),
  new PicowayHandpiecePart('8050-00-9045', 'Dia.0.15mm f40mm 532/1064', 'RESOLVE 1064 & 532', '', 'cloudy'),
  new PicowayHandpiecePart('7123-00-0209', 'ASSY 532 Resolve Handpiece High Energy', 'RESOLVE 532', '', 'cloudy, Consumable'),
  new PicowayHandpiecePart('8055-00-0324', '10x10 Fractional Beam splitter 532nm', 'RESOLVE 532', '', 'cloudy'),
  new PicowayHandpiecePart('7123-00-0536', 'ASSY Handpiece Fusion 532', 'Fusion 532', 'https://i.ibb.co/DL9J0Q6/7123-00-0536.png', 'Consumable'),
  new PicowayHandpiecePart('7123-00-0497', '730nm Handpiece Assembly', '', '', 'F10.3, Consumable'),
  new PicowayHandpiecePart('7123-57-0497', '730nm Handpiece Assembly Refurbished', 'Refurbished', '', ''),
  new PicowayHandpiecePart('7123-00-0191', '785 Handpiece Assembly', '', '', 'F10.3, Consumable'),
  new PicowayHandpiecePart('7123-57-0191', '785 Handpiece Assembly Refurbished', 'Refurbished', '', ''),
  new PicowayHandpiecePart('2851-TX-0002', 'Scr, MA, FLHD, Torx, SS 0-80 x1/8L 100 DEG', 'Zoom HP Lower screws', '', 'Zoom Handpiece'),
  new PicowayHandpiecePart('2851-TX-0003', 'Scr, MA, FLHD, Torx, SS 0-80 x3/16L 100 DEG', 'Zoom HP Upper screws', '', 'Zoom Handpiece'),
  new PicowayHandpiecePart('3160-00-1150', 'O-RING, 13/16ID, 3/32W, BUNA-N', 'Zoom HP black O-ring', 'https://i.ibb.co/c6td9c7/3160-00-1150.png', 'Zoom Handpiece'),
  new PicowayHandpiecePart('2851-PC-0002', 'SCR, MA, FLHD, Phillips Type II, SS 0-80 X 1/8 L 100 DEG', '', 'https://i.ibb.co/gDVnMpD/2851-PC-0002.png', 'Zoom Handpiece'),
  new PicowayHandpiecePart('2869-07-0060', 'CAP,.750\'\'ID,1/2\'\'L,VINYL,BLK', 'Small Black cap (Back)', 'https://i.ibb.co/X21RtZm/2869-07-0060.png', ''),
  new PicowayHandpiecePart('2869-07-0120', 'CAP, VINYL, 1.06 in ID X 0.50 in LONG, BLACK', 'Black cap', 'https://i.ibb.co/XDWzfMF/2869-07-0120.png', ''),
  new PicowayHandpiecePart('7123-00-0596', 'Kit, Resolve Distance Gauge', '1064 and 532 Resolve HP', '', ''),
  new PicowayHandpiecePart('7123-00-0526', 'Kit, Pico 785 Distance Gaug', '', '', ''),
  new PicowayHandpiecePart('7123-00-0597', 'Kit, Pico 730 Distance Gauge', '', '', ''),
  new PicowayHandpiecePart('7123-00-0594', 'Kit, Pico 1064 Fusion HP', '', '', ''),
  new PicowayHandpiecePart('7123-00-0595', 'Kit, Pico 532 Fusion HP', '', '', ''),
  new PicowayHandpiecePart('7123-00-0536', 'Assy, Handpiece, Fusion, 532', '', '', ''),
  new PicowayHandpiecePart('7123-00-0535', 'Assy, Handpiece, Fusion, 1064', '', '', ''),
  new PicowayHandpiecePart('3160-01-0015', 'O-RNG,WHTSIL,9/16\'\'ID,11/16\'\'OD', 'Resolve HP oring', 'https://i.ibb.co/1sHK8v8/3160-01-0015.png', ''),
];

// PicowayElectronicsparts 객체 생성
const picowayElectronicsparts = [
  new PicowayElectronicspart('4001-01-0091', 'HVPS', 'Power supply', '', 'F4.2, F5.1, F5.2, F14.1, F19.3, F30'),
  new PicowayElectronicspart('7123-07-0013', 'IO board', 'IO', '', 'F18.1, F18.2, F19.1, F21, F23, F26.1, F26.2, F26.3, F26.4, F27, F30'),
  new PicowayElectronicspart('7122-00-9792', 'ASSY, LENS/RECEP, AMP FIBER, PICOWAY', 'Lower level AMP fiber receptacle', '', ''),
  new PicowayElectronicspart('7123-67-0013', 'IO board', 'IO', '', 'F18.1, F18.2, F19.1, F21, F23, F26.1, F26.2, F26.3, F26.4, F27, F30'),
  new PicowayElectronicspart('6032-00-0408', 'CBL USB A-F PNL MNT 36 INCH', '', 'https://i.ibb.co/JzxKM9g/6032-00-0408.png', ''),
  new PicowayElectronicspart('8901-00-9404', 'GL PRO FIELD REPLACEMENT DISPLAY ASSY', '', '', ''),
  new PicowayElectronicspart('7111-00-2793', 'AC DIST PCB ASSY SPECTRUM', '', '', ''),
  new PicowayElectronicspart('7111-07-2841', 'ASSY PCB, HV TRIG PCB ROHS', '', '', ''),
  new PicowayElectronicspart('7122-00-3803', 'ASSY,THYR,VBEAM2', '', '', 'F5.2, F19.1, F19.4'),
  new PicowayElectronicspart('7111-07-2799', 'PCB ASSY ROHS HV SPLIT CAP SPECTRUM', '', 'https://i.ibb.co/GdPsTrh/7111-07-2799.jpg', 'F19.1, F19.3'),
  new PicowayElectronicspart('7111-07-2793', 'AC DIST ROHS PCB ASSY SPECTRUM', '', '', 'F19.1, F19.4, F19.5'),
  new PicowayElectronicspart('7111-07-2807', 'ASSY, ROHS, HV DUMP ASSY, GMAX PRO', '', 'https://i.ibb.co/MVL209R/7111-07-2807.jpg', 'F5.3, F19.5'),
];


const PicowaySkin = [
new PicowaySkinParts('1303-00-0143', 'COVER, TOP SKIN, PICOWAY', '', 'https://i.ibb.co/j88RqH6/1303-00-0143.png', ''),
new PicowaySkinParts('1303-00-0144', 'CLAMP, LAUNCH SPACER, SKIN, PICOWAY', 'Arm post skin', '', ''),
new PicowaySkinParts('7122-00-9844', 'ASSY, RIGHT PANEL, PICOWAY', '', 'https://i.ibb.co/7RrGv5F/7122-00-9844.png', ''),
new PicowaySkinParts('7122-00-9848', 'ASSEMBLY, PANEL, LEFT, PICOWAY', '', 'https://i.ibb.co/HzSPJLY/7122-00-9848.png', ''),
new PicowaySkinParts('7122-00-9847', 'ASSEMBLY, PANEL, FRONT LOWER, PICOWAY', '', 'https://i.ibb.co/HH5czmW/7122-00-9847.png', ''),
];


const PicowayConsumable = [
new PicowayConsumableParts('8095-00-0488', '1064/532 Operator Goggles', '1064/532/730/785', 'https://i.ibb.co/Pz2tWPC/8095-00-0488.png', ''),
new PicowayConsumableParts('8095-00-0470', 'Patient Goggles', '', '', ''),
new PicowayConsumableParts('5103-00-0030', 'FOOTSWITCH', '', '', ''),
new PicowayConsumableParts('8901-00-9950', 'PM KIT, PICO', '', '', 'PM'),
new PicowayConsumableParts('1630-00-0101', 'Burn paper', '', '', ''),
new PicowayConsumableParts('1303-00-0203', 'COVER, ARM SPACER, PICOWAY', '', 'https://i.ibb.co/s3hpQF0/1303-00-0203.png', 'End of Arm'),
];


const PicowayUpperRail =[
new PicowayUpperRailParts('7122-00-9833', 'ASSY, MOUNTED SEED, PICOWAY', '', 'https://i.ibb.co/YdMyyTC/7122-00-9833.png', ''),
new PicowayUpperRailParts('7122-57-9833', 'FSE, MOUNTED SEED, PICO', '', '', ''),
new PicowayUpperRailParts('8015-00-1247', 'MIRROR PP 1064/650/532nm 1 DIA X .25 45 DEGREE', 'launch 8E', '', 'Low energy, Alignment'),
new PicowayUpperRailParts('7123-00-0227', 'Assy,Beam Combiner,Gimbal', 'item #14', '', ''),
new PicowayUpperRailParts('8055-00-0314', 'BEAM COMBINER R1064 T532 PICO', 'Only Lens inside item #14', '', ''),
new PicowayUpperRailParts('7122-00-9888', 'ASSY,COOL CHAMB,12 X 71MM,11 D', '1064 AMP Chamber', 'https://i.ibb.co/gVTCttw/7122-00-9888.png', ''),
new PicowayUpperRailParts('8085-18-0430', 'Faraday Isolator, 8 mm dia.', 'FR', 'https://i.ibb.co/Dkq8xm2/8085-18-0430.png', ''),
new PicowayUpperRailParts('7123-00-0036', 'ASSY, SINGLE1064 COLL LENS, 120 MM FL', 'Item #13', 'https://i.ibb.co/y8bkNVf/7123-00-0036.png', ''),
new PicowayUpperRailParts('8050-00-9026', 'LENS, PL/CX, 25.4mmDIA, 120mmF', 'Only Lens inside Item #13, 7123-00-0036', '', ''),
new PicowayUpperRailParts('7123-00-0077', 'ASSY MIRROR GIMBAL MOUNT PIC', 'Item #8', '', 'Alignment'),
new PicowayUpperRailParts('7123-00-0225', 'Assy,Dual Band,Gimbal', 'Item #3', '', 'Alignment'),
new PicowayUpperRailParts('8055-00-0316', 'BEAM COMBINER R1064/532 T650 P', 'Only Lens inside Item #3', '', ''),
new PicowayUpperRailParts('7123-00-0226', 'Assy,Aiming Beam Mirror,Gimbal', 'Item #21', '', ''),
new PicowayUpperRailParts('8015-00-1241', 'MIRROR, PROTECTED ALUMINUM, 1IN DIA, 1/4IN THK', 'Only Lens inside Item #21', '', ''),
new PicowayUpperRailParts('1630-00-0101', 'PAPER,LASER ALIGN,4\'\'x8\'\'SHEET', '', '', ''),
new PicowayUpperRailParts('7123-00-0010', 'Assy, ND:YAG Seed, Rotating, P', 'Nd-Yag Crystal Assy', '', 'F6.1, F12.1, F29.1, F29.2'),
new PicowayUpperRailParts('8020-00-1007', 'ND:YAG ROD, 8 MM DIA., 4 MM TH', 'Only Lens inside 7123-00-0010', '', ''),
new PicowayUpperRailParts('7123-00-0009', 'ASSY, CR4:YAG SEED, ROTATING,', 'Cr4 Assy', '', 'F6.1, F12.1, F29.1, F29.2'),
new PicowayUpperRailParts('8050-00-9028', 'LENS, PL/CX, 25.4mmDIA, 50mmFL', 'Only Lens inside Item #9', '', ''),
new PicowayUpperRailParts('7122-00-9818', 'ASSY, SEED FOCUS LENS, PICOWAY', 'ASSY, SEED FOCUS LENS Item #9', 'https://i.ibb.co/8MMLGDM/7122-00-9818.png', ''),
new PicowayUpperRailParts('7123-00-0205', 'ASSY, QW Base', 'Item #50', 'https://i.ibb.co/TThbYNz/7123-00-0205.png', ''),
new PicowayUpperRailParts('7123-00-0127', 'ASSY, HEAD DET, POLAR INSENSIT', 'Head Dector', 'https://i.ibb.co/NrLJrPr/7123-00-0127.png', ''),
new PicowayUpperRailParts('8055-00-0322', 'HD BEAMSPLITTER, NOPOL, WEDGED', 'Only Lens inside Head Dector(7123-00-0127)', '', 'F6.1, F12.1, F12.4'),
new PicowayUpperRailParts('7122-00-9804', 'ASSY, BEAMSPLITTER, T755, R1064, FIXED, PICOWAY', 'Item #26', 'https://i.ibb.co/rfD7WQW/7122-00-9804.png', ''),
new PicowayUpperRailParts('8055-00-0325', 'BEAMSPLITTER R1064 T755 PICO', 'Only Lens inside Item #26', '', ''),
new PicowayUpperRailParts('7123-00-0012', 'ASSY, AMP PUMP FOCUSING LENS', 'Item #16', 'https://i.ibb.co/zXRWYMt/7123-00-0012.png', ''),
new PicowayUpperRailParts('8050-00-9042', 'LENS, PL/CX, 25.4DIA, 75FL, AR', 'Only Lens inside Item #16', '', ''),
new PicowayUpperRailParts('7122-00-9803', 'ASSY, BEAMSPLITTER, T755, R1064, ADJUSTABLE PICOWAY', 'Item #12', '', ''),
new PicowayUpperRailParts('8055-00-0325', 'BEAMSPLITTER R1064 T755 PICO', 'Only Lens inside Item #12', '', ''),
new PicowayUpperRailParts('7123-00-0004', 'Assy, X-Y Pump Fiber Lens', 'Item #27', 'https://i.ibb.co/TRkrk1m/7123-00-0004.png', ''),
new PicowayUpperRailParts('8050-00-9041', 'LENS, PL/CX, 25.4DIA, 25.4FL,', 'Only Lens inside Item #27', '', ''),
new PicowayUpperRailParts('7123-00-0244', 'Assy, PP Launch Tower', '', '', ''),
new PicowayUpperRailParts('7123-00-0248', 'ASSY, MIRROR MOUNT,LAUNCH,3-WAVE', '', '', 'Alignment'),
new PicowayUpperRailParts('7111-22-2803', 'PRGRM PICO 1-WIRE ALEX HEAD PCB', 'Picoway only, Programed', '', 'F23'),
new PicowayUpperRailParts('7111-23-2803', 'PRGRM UNIVERSAL LIN PCB', 'For any LIN PCB', '', 'F23'),
new PicowayUpperRailParts('8901-00-9404', 'GL PRO FIELD REPLACEMENT DISPLAY ASSY', 'LCD Screen', '', ''),
new PicowayUpperRailParts('7122-00-9883', 'ASSY, HOMOGENIZER, 1064nm, PICOWAY', '', 'https://i.ibb.co/Byk7SNG/7122-00-9883.png', '1064'),
new PicowayUpperRailParts('7122-00-9884', 'ASSY, HOMOGENIZER LENS, 532nm, PICOWAY', '', 'https://i.ibb.co/68Y57Bw/7122-00-9884.png', '532'),
new PicowayUpperRailParts('7122-00-9809', 'KTP Assy', '', '', 'F9.3, F28.1, F28.2, F28.4'),
new PicowayUpperRailParts('8020-00-2001', 'KTP 13 x 13 x 3 MM', '', '', '532'),
new PicowayUpperRailParts('8053-00-3022', 'HOMOGENIZER, 532 nm', 'HOMOGENIZER lens, Inside KTP Assy', '', ''),
new PicowayUpperRailParts('4812-01-0125', 'AIMING BEAM DIODE', '', '', ''),
new PicowayUpperRailParts('7122-00-9832', 'ASSY, BEAM BLOCKER', 'Shutter', '', 'F3.1'),
new PicowayUpperRailParts('7123-00-0254', 'PP Mirror Flipper', '', '', 'F3.2, 532')
];

const PicowayLowerLevel =[
new PicowayLowerLevelParts('7122-00-9792', 'ASSY, LENS/RECEP, AMP FIBER, PICOWAY', 'Lower level AMP fiber receptacle', '', ''),
new PicowayLowerLevelParts('7122-00-9906', 'ASSY, SEED FIBER LENS, PICOWAY', 'Lower level Seed fiber receptacle', '', ''),
new PicowayLowerLevelParts('7122-00-9786', 'Assy, Laser Head, Alex, Picoway', 'Lower level', '', ''),
new PicowayLowerLevelParts('7122-00-4050', 'ASSY AMP PUMP FIBER PICO', 'Lower level Fiber', '', ''),
new PicowayLowerLevelParts('7122-00-4049', 'SEED PUMP FIBER PICO', 'Lower level Fiber', '', ''),
new PicowayLowerLevelParts('7123-00-0039', 'ASSY, CUBE BEAMSPLITTER, HIGH LDT , 755NM', 'Cube', 'https://i.ibb.co/gWZ31Km/7123-00-0039.png', 'F29.1, F29.2'),
new PicowayLowerLevelParts('1303-00-0045', 'SPACER, LASER HEAD, PICOWAY', '', 'https://i.ibb.co/PrBjppQ/1303-00-0045.png', ''),
new PicowayLowerLevelParts('3190-00-0105', 'RFI, STP, 16\'\' L, WITH TAPE', '', 'https://i.ibb.co/1Mp10Pr/3190-00-0105.png', ''),
new PicowayLowerLevelParts('1301-00-9449', 'FINGERS HV TAB, SPECTRUM', '', 'https://i.ibb.co/GxB6kyw/1301-00-9449.png', ''),
new PicowayLowerLevelParts('2818-00-0600', 'WASHER,LOCK,SPLIT #6 ID', '', 'https://i.ibb.co/VmxwxHd/2820-00-0600.png', ''),
new PicowayLowerLevelParts('2832-OC-0606', 'SCR,CAP,SOC HD 6-32 X 3/8', '', '', ''),
new PicowayLowerLevelParts('3160-02-0013', 'Red Manifold O-rings', '', '', ''),
new PicowayLowerLevelParts('3160-01-0012', 'White O-rings', '', '', ''),
new PicowayLowerLevelParts('2849-04-0854', 'Head Screws', '', '', ''),
new PicowayLowerLevelParts('9908-17-0408', 'Flashlamp', '2EA for each Laser Head', 'https://i.ibb.co/mBbFxtp/9908-17-0408.png', 'F12.1, F14.1'),
new PicowayLowerLevelParts('7122-00-9207', 'Pump Cavity', '', '', ''),
new PicowayLowerLevelParts('1301-00-7763', 'Yag ROD', '', '', ''),
new PicowayLowerLevelParts('1301-00-7014', 'Alex ROD', '', '', ''),
];

const PicowayHarness =[
new PicowayHarnessParts('6032-00-0411', 'CABLE, LASER RECEPTACLE TO LASER HARNESS, PICOWAY', '', 'https://i.ibb.co/wgn5ZpB/6032-00-0411.png', 'F10.2'),
new PicowayHarnessParts('7122-00-9853', 'ASSY UPPER RAIL HARNESS PICOWAY', '', 'https://i.ibb.co/Wx58h0c/7122-00-9853.png', ''),
new PicowayHarnessParts('7122-00-9854', 'ASSY SIGNAL HARNESS PICOWAY', '', 'https://i.ibb.co/jzqnwzm/7122-00-9854.png', ''),
new PicowayHarnessParts('7122-00-9860', 'Handpiece Cable', '', '', ''),
new PicowayHarnessParts('6032-00-0410', 'CABLE, HP PLUG TO LASER PLUG, PICOWAY', 'Arm cable', 'https://i.ibb.co/df0SqXL/6032-00-0410.png', 'F10.2'),
];


const PicowayFuidSystem = [
new PicowayFuidSystemParts('7122-00-9238', 'ASSY RESERVOIR SPECTRUM', 'Water Tank', 'https://i.ibb.co/fSfqP6v/7122-00-9238.png', 'F7.5'),
new PicowayFuidSystemParts('7122-00-9234', 'ASSY FLUID TUBING KIT SPECTRUM', '', '', 'F7.1, Water Leak'),
new PicowayFuidSystemParts('1301-00-9390', 'TUBING, RESEVOIR TO PUMP', '', '', ''),
new PicowayFuidSystemParts('7122-00-9592', 'ASSY, FLOW SW, 0.5GPM, COMP FITTINGS', '', '', 'F7.3'),
new PicowayFuidSystemParts('3450-00-0355', 'PRO SERIES DI CARTRIDGE/ FILTER', '', 'https://i.ibb.co/JvczyLV/3450-00-0355.png', ''),
new PicowayFuidSystemParts('3412-14-0605', 'PLUG,QC,EL,DLRN/EPR,3/8BRB,VLV', '', '', 'Water Leak'),
new PicowayFuidSystemParts('7122-00-9598', 'ASSY, FLUID MODULE GMAX PRO', '', '', 'Water Leak, Heat Exchanger, '),
new PicowayFuidSystemParts('7122-00-9228', 'ASSY TWO ROW HX EXCHANGER PWM FANS', '', 'https://i.ibb.co/2KG5LDv/7122-00-9228.png', ''),
new PicowayFuidSystemParts('3414-00-0248 ', 'Pump, 5.3 GPM, 24VDC, 45W, Mod', '','https://i.ibb.co/MR0WT8r/3414-00-0248.jpg', 'F7.3'),
new PicowayFuidSystemParts('7122-00-9262', 'DI LEVEL SWITCH ASSY SPECTRUM', '', 'https://i.ibb.co/bHfV6gc/7122-00-9262.png', 'F7.5'),
new PicowayFuidSystemParts('3412-14-0607', 'QC connector', '', '', 'F7.5'),
];

// NordlysConsumableParts 객체 생성
const NordlysConsumable = [
  new NordlysConsumableParts('9APP7745', 'Applicator HRL 600 600 - 950 nm', 'Handpiece', '', ''),
  new NordlysConsumableParts('9APP7748-CNDL', 'Applicator PR 530 530 - 750 nm', 'Handpiece', '', ''),
  new NordlysConsumableParts('9APP7747', 'Applicator VL 555 555 - 950 nm', 'Handpiece', '', ''),
  new NordlysConsumableParts('9APP7829-CNDL', 'Applicator Frax 1550 1550 nm', 'Handpiece', '', ''),
  new NordlysConsumableParts('3WFA7151', 'WiFi Adaptor', '', '', ''),
  new NordlysConsumableParts('9WAT7407', 'Demineralized Water - 5 Liters', '', '', ''),
  new NordlysConsumableParts('9WAT7786', 'Water Fill Tube - Nordlys/Sirius/Ydun', '', '', ''),
  new NordlysConsumableParts('9PAC8023', 'Package of 10 rollers', 'New type, Long', '', ''),
  new NordlysConsumableParts('9PAC8014', 'Package of 10 rollers', 'Frax 1940/ Frax 1550 Rollers - Package of 10, individually wrapped rollers in metal case', '', ''),
  new NordlysConsumableParts('9SAP7711', 'Sapphire Tip', 'Nd-Yag HP Tip', '', ''),
  new NordlysConsumableParts('4APL7377', 'Semi-circular Tip', 'Nd-Yag HP Tip', '', ''),
  new NordlysConsumableParts('4APL7376', 'Circular tip:', 'Nd-Yag HP Tip', '', ''),
  new NordlysConsumableParts('2LAB7543-A01', ' laser warning sign', '', '', ''),
  new NordlysConsumableParts('2SWI7548', 'Key Switch', '', '', ''),
  new NordlysConsumableParts('9KIT7834', 'Foot Switch', '', '', 'F13.2, F13.4'),
  new NordlysConsumableParts('9APH7302', 'Wall-Mount Rack for 4 Ellipse IPL/Nd:YAG Applicators', 'Applicator rack. Hold up to 4 Ellipse IPL/Nd:YAG applicators. Wall mounted', '', ''),
  new NordlysConsumableParts('9APH7839', 'Wall-Mount Rack for 1 Frax + 3 Ellipse IPL/Nd:YAG Applicators', 'Applicator rack. Hold up to 3 Ellipse IPL/Nd:YAG applicators and 1 Frax applicator. Wall mounted', '', ''),
  new NordlysConsumableParts('PU00531EN-NA', 'Nordlys Product Brochure, Ellipse, US', 'Brochure', '', ''),
  new NordlysConsumableParts('PU02781EN-NA', 'Skin Resurfacing Patient Pamphlet, Nordlys (US)', 'Brochure', '', ''),
  new NordlysConsumableParts('PU02591EN-NA', 'Skin Rejuvenation Patient Pamphlet, Nordlys (US)', 'Brochure', '', ''),
  new NordlysConsumableParts('PU02771EN-NA', 'Ellipse IPL Acne Treatment Patient Pamphlet (US)', 'Brochure', '', ''),
  new NordlysConsumableParts('PU02761EN-NA', 'Ellipse IPL Hair Removal Patient Pamphlet (US)', 'Brochure', '', ''),
  new NordlysConsumableParts('PU01335EN-NA', 'Patient Pamphlet, Ellipse, US', 'Brochure', '', ''),
  new NordlysConsumableParts('PU00801EN-NA', 'Light & Bright Pull-up Banner', '', '', ''),
  new NordlysConsumableParts('PU00800EN-NA', 'Light & Bright Poster', '', '', ''),
  new NordlysConsumableParts('9DNG7649', 'Green 25,000 PPS', 'Nordlys, ', '', ''),
  new NordlysConsumableParts('2EYE7140', 'Patient Safety Glasses - Steel', '', '', ''),
  new NordlysConsumableParts('4DER7059', 'Light Guide Protector for Ellipse IPL applicators', 'HR600, HRD645, PL400, PR530, VL555', '', ''),
];


// NordlysElectronicParts 객체 생성
const NordlysElectronic = [
  new NordlysElectronicParts('S4COM7453', 'Computer Module', 'Computer Module, low version (specify system type and s/n when ordering)', '', ''),
  new NordlysElectronicParts('S4COM7553', 'Computer Module', 'Computer Module, high version (specify system type and s/n when ordering)', '', ''),
  new NordlysElectronicParts('S4COM7764', 'Computer Module, Nordlys, Sirius and Frax PRO version 12.6', '', '', ''),
  new NordlysElectronicParts('S9PCB7719', 'HW Interface Board', '', '', ''),
  new NordlysElectronicParts('S9MEC7735', 'Display Module', 'nordlys', '', ''),
  new NordlysElectronicParts('S9IOM7769', 'I/O Board', '', '', ''),
  new NordlysElectronicParts('S9MEC7735', 'Display Module', 'nordlys', '', ''),
  new NordlysElectronicParts('S9FSH7742', 'Flash Module', 'nordlys', '', ''),
  new NordlysElectronicParts('S3BAT7137', 'Backup battery for computer module.', 'CR2032 with leads and connector. UL listed.', '', ''),
  new NordlysElectronicParts('S4CBL7446', 'Lan cable', '', '', ''),
  new NordlysElectronicParts('S4CBL7428', 'HDMI cabel', '', '', ''),
];

// NordlysElectronicParts 객체 생성
const Nordlysfluid = [
  new NordlysfluidParts('S9MEC7736', 'Pump Module (water pump module)', '', '', ''),
  new NordlysfluidParts('S2FLO7206', 'Flow Sensor, w/o cable', '', '', ''),
  new NordlysfluidParts('S2FIT7536', 'Water connector for output panel (connector only)', '', '', ''),
  new NordlysfluidParts('S9MEC7730', 'Cooling Module', '', '', ''),
  new NordlysfluidParts('S4MEC7422', 'Water tank', '', '', ''),
  new NordlysfluidParts('S2FIT7536', 'Water connector for output panel (connector only)', '', '', ''),
];

//Matrix Pro Parts 객체 생성
const profoundmatrixprop = [
  // new MetrixProParts('','','','',''),
  new ProfoundMetrixProParts('FG71851', 'Applicator Assy, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('AS79444', 'PCBA, RF Module, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS09614', 'SBC, Pico-ITX, INTEL CPU. Profound Matrix', '', '', ''),
  new ProfoundMetrixProParts('AS95121', 'PCBA, Splitter Base, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS78481', 'PCBA, Splitter Distributor, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS9571A', 'RF Module Assymbly', '', '', ''),
  new ProfoundMetrixProParts('AS9573A', 'Computer Module Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9576A', 'Lower Tray Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9580A', 'Power Supply Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9596A', 'Loud Speaker with Harness, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR07868', 'Harness,CPU TO LCD (LVDS), Profound Matrix', '', '', ''),
  new ProfoundMetrixProParts('HR07869', 'Harness,IO to Display, Profound Matrix', '', '', ''),
  new ProfoundMetrixProParts('HR7845A', 'Harness, CPU I/O Board Audio, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR7846A', 'Harness, CPU to I/O, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR7849A', 'Harness, Splitter to Applicator, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR78551', 'SubRF/Matrix Pro Appl. Connector Harness, Console, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('AS86571', 'PCBA, PWM Driver to Display, eTwo / eMatrix / eSpa', '', '', ''),
  new ProfoundMetrixProParts('HR73251', 'Harness, P.S. 12V, eTwo', '', '', ''),
  new ProfoundMetrixProParts('HR73493', 'Harness I/O to Display, eTwo', '', '', ''),
  new ProfoundMetrixProParts('HR07868', 'CPU TO LCD (LVDS) , Adeline Star', '', '', ''),
  new ProfoundMetrixProParts('PC73971', 'PCB, Air Switch, matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('AS9592A', 'Applicator Support Assy', '', '', ''),
  new ProfoundMetrixProParts('AS9597A', 'Fan with Connector. Assy, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('SBA100248', 'Controller card, touch screen', '', '', ''),
  new ProfoundMetrixProParts('HR07870', 'Harness, Power Supply 12V, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR7848A', 'PWR Switch Harness, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('HR7856', 'Harness, IO to RF Control, Console', '', '', ''),
  new ProfoundMetrixProParts('HR7857', 'Harness, Power Supply to IO, Console', '', '', ''),
  new ProfoundMetrixProParts('HR7858', 'Harness, Splitter to PI filter, Console', '', '', ''),
  new ProfoundMetrixProParts('HR7859', 'Harness, RF to Splitter, Console', '', '', ''),
  new ProfoundMetrixProParts('HR7860', 'Harness, IO-J1 to Splitter-J8, Console', '', '', ''),
  new ProfoundMetrixProParts('MC0895A', 'Air filter', '', '', ''),
  new ProfoundMetrixProParts('MC09761', 'PS, LOWER CABLE CLAMP', '', '', ''),
  new ProfoundMetrixProParts('AS72402', 'PCBA, PWR Switch, eMatrix', '', '', ''),
  new ProfoundMetrixProParts('SBA100246', 'Touch Screen Adhered to LCD Sub-Assy, eMatrix', '', '', ''),
  new ProfoundMetrixProParts('AS9590A', 'Display Bezel Assembly', '', '', ''),
  new ProfoundMetrixProParts('HR72500', 'Harness, LED back light cable, L=200mm', '', '', ''),
  new ProfoundMetrixProParts('HR73211', 'Harness,1wire Sig.forST Appl.-I/O to Splitter,e2', '', '', ''),
  new ProfoundMetrixProParts('HR73971', '38V RF Card Power Harness, eTwo', '', '', ''),
  new ProfoundMetrixProParts('1303-00-1480', 'CLAMP, APPLICATOR HOLSTER', '', '', ''),
  new ProfoundMetrixProParts('FG71851', 'Applicator Assy, Matrix Pro', '', '', ''),
  new ProfoundMetrixProParts('AS9575A', 'Upper Tray Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9578A', 'Front Panel Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9579A', 'Rear Panel Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9581A', 'AC Inlet Assembly', '', '', ''),
  new ProfoundMetrixProParts('AS9582A', 'USB & Speaker Assembly', '', '', ''),
  new ProfoundMetrixProParts('HR07871', 'Harness,GND to Display, Profound Matrix', '', '', ''),
  new ProfoundMetrixProParts('HR77830', 'Cable, USB A panel mount female to USB A male L=12in.', '', '', ''),
  new ProfoundMetrixProParts('MC0881A', 'Left Handle Bracket', '', '', ''),
  new ProfoundMetrixProParts('MC0882A', 'Right Handle Bracket', '', '', ''),
  new ProfoundMetrixProParts('MC0888A', 'Left Handle Extender', '', '', ''),
  new ProfoundMetrixProParts('MC0889A', 'Right Handle Extender', '', '', ''),
  new ProfoundMetrixProParts('MC0890A', 'Handle Rod', '', '', ''),
  new ProfoundMetrixProParts('MC0920A', 'Bracket, DISPLAY BEZEL', '', '', ''),
  new ProfoundMetrixProParts('2610-00-0073', 'FAN GUARD METAL, 120MM', '', '', ''),
  new ProfoundMetrixProParts('AN00050', 'Antenna, WiFi, 2.4GHz and 5GHz dipole', '', '', ''),
  new ProfoundMetrixProParts('AS79541', 'Fan with Conn. Assy, RF Cage, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS95091', 'PCBAs Assy Splitter & Distributer, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS95071', 'PCBA, I/O, eTwo', '', '', ''),
  new ProfoundMetrixProParts('AS9586A', 'Assembly, Display Back Cover', '', '', ''),
  new ProfoundMetrixProParts('HR71271', 'GND Wire, RF Cage, eMatrix', '', '', ''),
  new ProfoundMetrixProParts('MC0987A', 'FootSwitch, air, 2m tube (black), 3mm I/D & 6mm O/D.', '', '', ''),
  new ProfoundMetrixProParts('TL70791', 'Tool, Appl. Conn. Nut Fastener', '', '', ''),
];


app.get('/part/:info', (req, res) => {
  const info = req.params.info.toLowerCase(); // Convert the search term to lowercase
  const partType = req.query.partType; // Get the selected part type from the query parameter

  let results = [];

  let parts;
  if (partType === 'gmp') { // Check the selected part type
    parts = [...opticsParts, ...consumableParts, ...electronicsParts, ...fluidSystem, ...headParts, ...gmphd, ...gmpController, ...gmpskin,  ...gmpcalport, ...gmptool, ...GmpUpgrade];
  } else if (partType === 'gmpp') {
    parts = [...gmpphd, ...opticsParts, ...consumableParts, ...electronicsParts, ...fluidSystem, ...headParts,  ...gmpcalport, ...gmptool];
  } else if (partType === 'vbeam') {
    parts = [...VbeamHead, ...vbeamConsumableParts, ...VbeamFluid, ...VbeamElectronic, ...VbeamMdye, ...VbeamOptics, ...VbeamServiceTool];
  } else if (partType === 'prima') {
    parts = [...PrimaDyeHead, ...PrimaMDYE, ...PrimaCalport, ...PrimaHeadrail, ...PrimaV14Upgrade, ...PrimaElectronic, ...PrimaCable, ...PrimaSkin, ...PrimaConsumable, ...PrimaYagHead, ...PrimaHandpiece, ...PrimaFluidsystem, ...PrimaServicetool];
  } else if (partType === 'picoway') {
    parts = [...picowayArmParts, ...picowayHandpieceParts, ...picowayElectronicsparts, ...PicowaySkin, ...PicowayConsumable, ...PicowayUpperRail, ...PicowayLowerLevel, ...PicowayHarness, ...PicowayFuidSystem];
  } else if (partType === 'nordlys') {
    parts = [...NordlysConsumable, ...NordlysElectronic, ...Nordlysfluid];

  } else if (partType === 'profoundmatrixpro') {
    parts = [...profoundmatrixprop];

  } else {
    parts = [
      ...opticsParts,
      ...consumableParts,
      ...electronicsParts,
      ...fluidSystem,
      ...headParts,
      ...gmphd,
      ...gmpController,
      ...gmpskin,
      ...gmpcalport,
      ...gmptool,
      ...GmpUpgrade,
      ...gmpphd,
      ...VbeamHead,
      ...vbeamConsumableParts,
      ...VbeamFluid,
      ...VbeamElectronic,
      ...VbeamMdye,
      ...VbeamOptics,
      ...VbeamServiceTool,
      ...PrimaDyeHead,
      ...PrimaMDYE,
      ...PrimaCalport,
      ...PrimaHeadrail, 
      ...PrimaV14Upgrade,
      ...PrimaElectronic,
      ...PrimaCable,
      ...PrimaSkin,
      ...PrimaConsumable,
      ...PrimaYagHead,
      ...PrimaHandpiece,
      ...PrimaFluidsystem,
      ...PrimaServicetool,
      ...picowayArmParts,
      ...picowayHandpieceParts,
      ...picowayElectronicsparts,
      ...PicowaySkin,
      ...PicowayConsumable,
      ...PicowayUpperRail,
      ...PicowayLowerLevel, 
      ...PicowayHarness,
      ...PicowayFuidSystem,
      ...NordlysConsumable,
      ...NordlysElectronic,
      ...Nordlysfluid,
      ...profoundmatrixprop,
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

    const partNumber = part['Part Number'].toLowerCase(); // Convert the part number to lowercase
    const partName = part['Part Name'].toLowerCase(); // Convert the part name to lowercase
    const description = part['Description'].toLowerCase(); // Convert the description to lowercase
    const fault = part['Fault'].toLowerCase(); // Convert the fault to lowercase

    // Check if any of the lowercase properties contains the search term
    if (
      partNumber.includes(info) ||
      partName.includes(info) ||
      description.includes(info) ||
      objectName.toLowerCase().includes(info) ||
      fault.includes(info)
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
