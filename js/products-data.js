/* ========================================
   DeepSight Product Data
   Categories: Industrial Control Products + Self-Developed Equipment
   ======================================== */

const PRODUCT_CATEGORIES = [
  // === Industrial Control Products ===
  { id: 'plc',          icon: '🔲', section: 'ic', i18nKey: 'cat.plc',          countKey: 'plc' },
  { id: 'hmi',          icon: '📺', section: 'ic', i18nKey: 'cat.hmi',          countKey: 'hmi' },
  { id: 'io-modules',   icon: '🔌', section: 'ic', i18nKey: 'cat.io-modules',   countKey: 'io-modules' },
  { id: 'relays',       icon: '⚡', section: 'ic', i18nKey: 'cat.relays',       countKey: 'relays' },
  { id: 'vfd',          icon: '🔄', section: 'ic', i18nKey: 'cat.vfd',          countKey: 'vfd' },
  { id: 'servo',        icon: '⚙️', section: 'ic', i18nKey: 'cat.servo',        countKey: 'servo' },
  { id: 'sensors',      icon: '📡', section: 'ic', i18nKey: 'cat.sensors',      countKey: 'sensors' },
  { id: 'vision',       icon: '📷', section: 'ic', i18nKey: 'cat.vision',       countKey: 'vision' },
  { id: 'other-ic',     icon: '🛠️', section: 'ic', i18nKey: 'cat.other-ic',     countKey: 'other-ic' },
  // === Self-Developed Equipment ===
  { id: 'spider-sorter',  icon: '🤖', section: 'selfdev', i18nKey: 'cat.spider-sorter',  countKey: 'spider-sorter' },
  { id: 'flash-test',     icon: '🔬', section: 'selfdev', i18nKey: 'cat.flash-test',     countKey: 'flash-test' },
  { id: 'vision-system',  icon: '🖥️', section: 'selfdev', i18nKey: 'cat.vision-system',  countKey: 'vision-system' },
  { id: 'servo-press',    icon: '🏭', section: 'selfdev', i18nKey: 'cat.servo-press',    countKey: 'servo-press' },
];

const PRODUCTS = [
  // ========== PLC ==========
  {
    id: 'plc-001', cat: 'plc', icon: '🔲', badge: 'hot',
    name: { zh: '西门子 S7-1200 PLC', en: 'Siemens S7-1200 PLC' },
    desc: { zh: '紧凑型CPU，集成数字量I/O，支持Profinet通信，适用于中小型自动化系统', en: 'Compact CPU with integrated digital I/O, supports Profinet communication, suitable for small to medium automation systems' },
    specs: [
      { zh: 'CPU型号', en: 'CPU Model', val: { zh: 'CPU 1214C DC/DC/DC', en: 'CPU 1214C DC/DC/DC' } },
      { zh: '数字量输入', en: 'Digital Inputs', val: { zh: '14路', en: '14 points' } },
      { zh: '数字量输出', en: 'Digital Outputs', val: { zh: '10路', en: '10 points' } },
      { zh: '模拟量输入', en: 'Analog Inputs', val: { zh: '2路', en: '2 points' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'Profinet (RJ45)', en: 'Profinet (RJ45)' } },
      { zh: '工作存储器', en: 'Work Memory', val: { zh: '100KB', en: '100KB' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'plc-002', cat: 'plc', icon: '🔲',
    name: { zh: '西门子 S7-1500 PLC', en: 'Siemens S7-1500 PLC' },
    desc: { zh: '高性能CPU，大容量存储器，支持高速背板总线，适用于复杂自动化系统', en: 'High-performance CPU with large memory, supports high-speed backplane bus, for complex automation systems' },
    specs: [
      { zh: 'CPU型号', en: 'CPU Model', val: { zh: 'CPU 1516-3 PN/DP', en: 'CPU 1516-3 PN/DP' } },
      { zh: '工作存储器', en: 'Work Memory', val: { zh: '1MB', en: '1MB' } },
      { zh: '通信接口', en: 'Communication', val: { zh: '2× Profinet + 1× Profibus', en: '2× Profinet + 1× Profibus' } },
      { zh: '执行速度', en: 'Execution Speed', val: { zh: '10ns/指令', en: '10ns/instruction' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'plc-003', cat: 'plc', icon: '🔲',
    name: { zh: '三菱 FX5U PLC', en: 'Mitsubishi FX5U PLC' },
    desc: { zh: '高性能微型PLC，内置Ethernet/RS-485，高速计数定位功能', en: 'High-performance micro PLC with built-in Ethernet/RS-485, high-speed counting and positioning' },
    specs: [
      { zh: 'CPU型号', en: 'CPU Model', val: { zh: 'FX5U-32MT/ES', en: 'FX5U-32MT/ES' } },
      { zh: '数字量I/O', en: 'Digital I/O', val: { zh: '16入/16出', en: '16 in / 16 out' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'Ethernet + RS-485', en: 'Ethernet + RS-485' } },
      { zh: '品牌', en: 'Brand', val: { zh: '三菱 Mitsubishi', en: 'Mitsubishi' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'plc-004', cat: 'plc', icon: '🔲',
    name: { zh: '汇川 H5U PLC', en: 'Inovance H5U PLC' },
    desc: { zh: '国产高性能小型PLC，支持EtherCAT总线，性价比高', en: 'High-performance compact PLC with EtherCAT bus support, excellent value' },
    specs: [
      { zh: 'CPU型号', en: 'CPU Model', val: { zh: 'H5U-1614MT', en: 'H5U-1614MT' } },
      { zh: '数字量I/O', en: 'Digital I/O', val: { zh: '16入/14出', en: '16 in / 14 out' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'EtherCAT + Ethernet', en: 'EtherCAT + Ethernet' } },
      { zh: '品牌', en: 'Brand', val: { zh: '汇川 Inovance', en: 'Inovance' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国深圳', en: 'Shenzhen, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '18个月', en: '18 months' } },
    ]
  },

  // ========== HMI ==========
  {
    id: 'hmi-001', cat: 'hmi', icon: '📺', badge: 'hot',
    name: { zh: '西门子 KTP700 触摸屏', en: 'Siemens KTP700 HMI' },
    desc: { zh: '7寸触摸屏，800×480分辨率，支持Profinet通信，与S7系列PLC完美配合', en: '7" touchscreen, 800×480 resolution, Profinet communication, perfectly compatible with S7 series PLCs' },
    specs: [
      { zh: '显示屏', en: 'Display', val: { zh: '7" TFT 触摸屏', en: '7" TFT touchscreen' } },
      { zh: '分辨率', en: 'Resolution', val: { zh: '800×480', en: '800×480' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'Profinet (RJ45)', en: 'Profinet (RJ45)' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'hmi-002', cat: 'hmi', icon: '📺',
    name: { zh: '西门子 KTP1200 触摸屏', en: 'Siemens KTP1200 HMI' },
    desc: { zh: '12寸触摸屏，1280×800分辨率，功能丰富，支持配方管理', en: '12" touchscreen, 1280×800 resolution, rich features, supports recipe management' },
    specs: [
      { zh: '显示屏', en: 'Display', val: { zh: '12.1" TFT 触摸屏', en: '12.1" TFT touchscreen' } },
      { zh: '分辨率', en: 'Resolution', val: { zh: '1280×800', en: '1280×800' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'Profinet + RS-485', en: 'Profinet + RS-485' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'hmi-003', cat: 'hmi', icon: '📺',
    name: { zh: '昆仑通态 TPC7062Ti 触摸屏', en: 'MCGS TPC7062Ti HMI' },
    desc: { zh: '7寸经济型触摸屏，支持多种PLC协议，性价比高', en: '7" economical touchscreen, supports multiple PLC protocols, great value' },
    specs: [
      { zh: '显示屏', en: 'Display', val: { zh: '7" TFT', en: '7" TFT' } },
      { zh: '分辨率', en: 'Resolution', val: { zh: '800×480', en: '800×480' } },
      { zh: '通信接口', en: 'Communication', val: { zh: 'RS-485 × 2, Ethernet', en: 'RS-485 × 2, Ethernet' } },
      { zh: '品牌', en: 'Brand', val: { zh: '昆仑通态 MCGS', en: 'MCGS' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国北京', en: 'Beijing, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== I/O Modules ==========
  {
    id: 'io-001', cat: 'io-modules', icon: '🔌',
    name: { zh: '西门子 SM1223 数字量I/O模块', en: 'Siemens SM1223 Digital I/O Module' },
    desc: { zh: '8路数字量输入/8路数字量输出继电器型，用于S7-1200扩展', en: '8 digital inputs / 8 digital outputs relay type, for S7-1200 expansion' },
    specs: [
      { zh: '输入', en: 'Inputs', val: { zh: '8× 24V DC', en: '8× 24V DC' } },
      { zh: '输出', en: 'Outputs', val: { zh: '8× 继电器 2A', en: '8× Relay 2A' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'io-002', cat: 'io-modules', icon: '🔌',
    name: { zh: '西门子 ET200SP 分布式I/O', en: 'Siemens ET200SP Distributed I/O' },
    desc: { zh: '模块化分布式I/O站，支持Profinet，灵活配置', en: 'Modular distributed I/O station, supports Profinet, flexible configuration' },
    specs: [
      { zh: '接口', en: 'Interface', val: { zh: 'Profinet', en: 'Profinet' } },
      { zh: '模块数', en: 'Modules', val: { zh: '最多32个', en: 'Up to 32' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'io-003', cat: 'io-modules', icon: '🔌',
    name: { zh: '倍福 EL系列 EtherCAT端子模块', en: 'Beckhoff EL Series EtherCAT Terminal' },
    desc: { zh: '总线端子模块，种类丰富，支持各种信号类型', en: 'Bus terminal modules, wide variety, supports various signal types' },
    specs: [
      { zh: '总线', en: 'Bus', val: { zh: 'EtherCAT', en: 'EtherCAT' } },
      { zh: '信号类型', en: 'Signal Types', val: { zh: 'DI/DO/AI/AO/PT100等', en: 'DI/DO/AI/AO/PT100 etc.' } },
      { zh: '品牌', en: 'Brand', val: { zh: '倍福 Beckhoff', en: 'Beckhoff' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Relays ==========
  {
    id: 'relay-001', cat: 'relays', icon: '⚡',
    name: { zh: '欧姆龙 MY2NJ 通用继电器', en: 'Omron MY2NJ General Relay' },
    desc: { zh: '通用型中间继电器，2极，线圈电压24V DC', en: 'General-purpose intermediate relay, 2-pole, coil voltage 24V DC' },
    specs: [
      { zh: '触点数', en: 'Contacts', val: { zh: '2极 DPDT', en: '2-pole DPDT' } },
      { zh: '线圈电压', en: 'Coil Voltage', val: { zh: '24V DC', en: '24V DC' } },
      { zh: '触点容量', en: 'Contact Rating', val: { zh: '5A / 250V AC', en: '5A / 250V AC' } },
      { zh: '品牌', en: 'Brand', val: { zh: '欧姆龙 Omron', en: 'Omron' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'relay-002', cat: 'relays', icon: '⚡',
    name: { zh: '施耐德 RXM2 小型继电器', en: 'Schneider RXM2 Relay' },
    desc: { zh: '插拔式小型继电器，2极，带LED指示灯', en: 'Plug-in compact relay, 2-pole, with LED indicator' },
    specs: [
      { zh: '触点数', en: 'Contacts', val: { zh: '2极', en: '2-pole' } },
      { zh: '线圈电压', en: 'Coil Voltage', val: { zh: '24V DC', en: '24V DC' } },
      { zh: '触点容量', en: 'Contact Rating', val: { zh: '5A / 250V AC', en: '5A / 250V AC' } },
      { zh: '品牌', en: 'Brand', val: { zh: '施耐德 Schneider', en: 'Schneider' } },
      { zh: '产地', en: 'Origin', val: { zh: '法国', en: 'France' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'relay-003', cat: 'relays', icon: '⚡',
    name: { zh: '欧姆龙 G3NA 固态继电器', en: 'Omron G3NA Solid State Relay' },
    desc: { zh: '固态继电器，适用于加热器控制，无机械触点磨损', en: 'Solid state relay for heater control, no mechanical contact wear' },
    specs: [
      { zh: '负载电流', en: 'Load Current', val: { zh: '25A', en: '25A' } },
      { zh: '负载电压', en: 'Load Voltage', val: { zh: '24-240V AC', en: '24-240V AC' } },
      { zh: '输入电压', en: 'Input Voltage', val: { zh: '12-24V DC', en: '12-24V DC' } },
      { zh: '品牌', en: 'Brand', val: { zh: '欧姆龙 Omron', en: 'Omron' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== VFD (Frequency Converters) ==========
  {
    id: 'vfd-001', cat: 'vfd', icon: '🔄', badge: 'hot',
    name: { zh: '西门子 SINAMICS G120 变频器', en: 'Siemens SINAMICS G120 VFD' },
    desc: { zh: '模块化变频器，支持Profinet通信，内置安全功能', en: 'Modular VFD with Profinet communication, built-in safety functions' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.55-250kW', en: '0.55-250kW' } },
      { zh: '电压', en: 'Voltage', val: { zh: '380-480V 3相', en: '380-480V 3-phase' } },
      { zh: '通信', en: 'Communication', val: { zh: 'Profinet / Profibus', en: 'Profinet / Profibus' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '18个月', en: '18 months' } },
    ]
  },
  {
    id: 'vfd-002', cat: 'vfd', icon: '🔄',
    name: { zh: '汇川 MD500 通用变频器', en: 'Inovance MD500 General VFD' },
    desc: { zh: '高性能通用变频器，矢量控制，支持多种通信协议', en: 'High-performance general VFD, vector control, supports multiple protocols' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.75-110kW', en: '0.75-110kW' } },
      { zh: '电压', en: 'Voltage', val: { zh: '380V 3相', en: '380V 3-phase' } },
      { zh: '控制方式', en: 'Control', val: { zh: 'V/F + 矢量控制', en: 'V/F + Vector control' } },
      { zh: '品牌', en: 'Brand', val: { zh: '汇川 Inovance', en: 'Inovance' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国深圳', en: 'Shenzhen, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '18个月', en: '18 months' } },
    ]
  },
  {
    id: 'vfd-003', cat: 'vfd', icon: '🔄',
    name: { zh: '三菱 FR-E800 变频器', en: 'Mitsubishi FR-E800 VFD' },
    desc: { zh: '紧凑型变频器，内置Ethernet，支持安全功能', en: 'Compact VFD with built-in Ethernet, supports safety functions' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.4-15kW', en: '0.4-15kW' } },
      { zh: '电压', en: 'Voltage', val: { zh: '380V 3相', en: '380V 3-phase' } },
      { zh: '通信', en: 'Communication', val: { zh: 'Ethernet / RS-485', en: 'Ethernet / RS-485' } },
      { zh: '品牌', en: 'Brand', val: { zh: '三菱 Mitsubishi', en: 'Mitsubishi' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Servo Motors & Drives ==========
  {
    id: 'servo-001', cat: 'servo', icon: '⚙️', badge: 'hot',
    name: { zh: '西门子 V90 伺服系统', en: 'Siemens V90 Servo System' },
    desc: { zh: '紧凑型伺服系统，配合S7-1200/1500使用，支持PTO/EtherCAT', en: 'Compact servo system, works with S7-1200/1500, supports PTO/EtherCAT' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.1-7kW', en: '0.1-7kW' } },
      { zh: '控制模式', en: 'Control Mode', val: { zh: '位置/速度/转矩', en: 'Position/Speed/Torque' } },
      { zh: '编码器', en: 'Encoder', val: { zh: '绝对值 22位', en: 'Absolute 22-bit' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '18个月', en: '18 months' } },
    ]
  },
  {
    id: 'servo-002', cat: 'servo', icon: '⚙️',
    name: { zh: '安川 Σ-7 伺服系统', en: 'Yaskawa Σ-7 Servo System' },
    desc: { zh: '高性能伺服系统，响应频率高，振动抑制功能强', en: 'High-performance servo system, high response frequency, strong vibration suppression' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.05-15kW', en: '0.05-15kW' } },
      { zh: '响应频率', en: 'Response Frequency', val: { zh: '3.1kHz', en: '3.1kHz' } },
      { zh: '编码器', en: 'Encoder', val: { zh: '绝对值 24位', en: 'Absolute 24-bit' } },
      { zh: '品牌', en: 'Brand', val: { zh: '安川 Yaskawa', en: 'Yaskawa' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'servo-003', cat: 'servo', icon: '⚙️',
    name: { zh: '汇川 IS620P 伺服系统', en: 'Inovance IS620P Servo System' },
    desc: { zh: '高性能伺服驱动器+电机，支持EtherCAT通信，性价比高', en: 'High-performance servo drive + motor, supports EtherCAT, excellent value' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.1-7.5kW', en: '0.1-7.5kW' } },
      { zh: '通信', en: 'Communication', val: { zh: 'EtherCAT / 脉冲', en: 'EtherCAT / Pulse' } },
      { zh: '编码器', en: 'Encoder', val: { zh: '绝对值 23位', en: 'Absolute 23-bit' } },
      { zh: '品牌', en: 'Brand', val: { zh: '汇川 Inovance', en: 'Inovance' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国深圳', en: 'Shenzhen, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '18个月', en: '18 months' } },
    ]
  },
  {
    id: 'servo-004', cat: 'servo', icon: '⚙️',
    name: { zh: '松下 MINAS A6 伺服系统', en: 'Panasonic MINAS A6 Servo System' },
    desc: { zh: '超小型伺服，高精度控制，节能免调整功能', en: 'Ultra-compact servo, high-precision control, energy-saving auto-tuning' },
    specs: [
      { zh: '功率', en: 'Power', val: { zh: '0.05-5kW', en: '0.05-5kW' } },
      { zh: '响应频率', en: 'Response Frequency', val: { zh: '2.0kHz', en: '2.0kHz' } },
      { zh: '编码器', en: 'Encoder', val: { zh: '绝对值 23位', en: 'Absolute 23-bit' } },
      { zh: '品牌', en: 'Brand', val: { zh: '松下 Panasonic', en: 'Panasonic' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Sensors ==========
  {
    id: 'sensor-001', cat: 'sensors', icon: '📡', badge: 'new',
    name: { zh: '基恩士 FS-N 系列光纤传感器', en: 'Keyence FS-N Series Fiber Sensor' },
    desc: { zh: '高精度光纤传感器放大器，响应速度快，双数字显示', en: 'High-precision fiber sensor amplifier, fast response, dual digital display' },
    specs: [
      { zh: '响应时间', en: 'Response Time', val: { zh: '20μs', en: '20μs' } },
      { zh: '检测方式', en: 'Detection', val: { zh: '透过型/反射型', en: 'Through-beam / Reflective' } },
      { zh: '品牌', en: 'Brand', val: { zh: '基恩士 Keyence', en: 'Keyence' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'sensor-002', cat: 'sensors', icon: '📡',
    name: { zh: '倍加福 电感式接近传感器', en: 'Pepperl+Fuchs Inductive Proximity Sensor' },
    desc: { zh: 'M8/M12/M18电感式接近开关，检测金属物体', en: 'M8/M12/M18 inductive proximity switch for metal detection' },
    specs: [
      { zh: '检测距离', en: 'Sensing Range', val: { zh: '1-15mm', en: '1-15mm' } },
      { zh: '外壳规格', en: 'Housing', val: { zh: 'M8/M12/M18', en: 'M8/M12/M18' } },
      { zh: '输出类型', en: 'Output Type', val: { zh: 'PNP/NPN', en: 'PNP/NPN' } },
      { zh: '品牌', en: 'Brand', val: { zh: '倍加福 P+F', en: 'Pepperl+Fuchs' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'sensor-003', cat: 'sensors', icon: '📡',
    name: { zh: '欧姆龙 E3Z 光电传感器', en: 'Omron E3Z Photoelectric Sensor' },
    desc: { zh: '通用型光电传感器，透过型/反射型可选，防护等级IP67', en: 'General photoelectric sensor, through-beam/reflective, IP67' },
    specs: [
      { zh: '检测距离', en: 'Sensing Range', val: { zh: '1-15m', en: '1-15m' } },
      { zh: '检测方式', en: 'Detection', val: { zh: '透过型/漫反射型', en: 'Through-beam / Diffuse' } },
      { zh: '防护等级', en: 'IP Rating', val: { zh: 'IP67', en: 'IP67' } },
      { zh: '品牌', en: 'Brand', val: { zh: '欧姆龙 Omron', en: 'Omron' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'sensor-004', cat: 'sensors', icon: '📡',
    name: { zh: '基恩士 LR-Z 激光位移传感器', en: 'Keyence LR-Z Laser Displacement Sensor' },
    desc: { zh: '高精度激光位移测量，适用于精密尺寸检测', en: 'High-precision laser displacement measurement for precision inspection' },
    specs: [
      { zh: '测量范围', en: 'Range', val: { zh: '±5mm', en: '±5mm' } },
      { zh: '分辨率', en: 'Resolution', val: { zh: '0.5μm', en: '0.5μm' } },
      { zh: '品牌', en: 'Brand', val: { zh: '基恩士 Keyence', en: 'Keyence' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Vision Components ==========
  {
    id: 'vision-001', cat: 'vision', icon: '📷', badge: 'hot',
    name: { zh: '海康威视 MV-CA050 面阵相机', en: 'Hikvision MV-CA050 Area Scan Camera' },
    desc: { zh: '500万像素工业面阵相机，GigE Vision接口，全局快门', en: '5MP industrial area scan camera, GigE Vision, global shutter' },
    specs: [
      { zh: '分辨率', en: 'Resolution', val: { zh: '500万 (2592×1944)', en: '5MP (2592×1944)' } },
      { zh: '接口', en: 'Interface', val: { zh: 'GigE Vision', en: 'GigE Vision' } },
      { zh: '快门类型', en: 'Shutter', val: { zh: '全局快门', en: 'Global shutter' } },
      { zh: '帧率', en: 'Frame Rate', val: { zh: '14fps', en: '14fps' } },
      { zh: '品牌', en: 'Brand', val: { zh: '海康威视 Hikvision', en: 'Hikvision' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国杭州', en: 'Hangzhou, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'vision-002', cat: 'vision', icon: '📷',
    name: { zh: '海康威视 MV-CL 线扫相机', en: 'Hikvision MV-CL Line Scan Camera' },
    desc: { zh: '4K线阵工业相机，适用于连续生产线高速检测', en: '4K line scan industrial camera for high-speed continuous production inspection' },
    specs: [
      { zh: '分辨率', en: 'Resolution', val: { zh: '4096×2 (线阵)', en: '4096×2 (line scan)' } },
      { zh: '接口', en: 'Interface', val: { zh: 'CameraLink', en: 'CameraLink' } },
      { zh: '行频', en: 'Line Rate', val: { zh: '40kHz', en: '40kHz' } },
      { zh: '品牌', en: 'Brand', val: { zh: '海康威视 Hikvision', en: 'Hikvision' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'vision-003', cat: 'vision', icon: '🔍',
    name: { zh: '远心镜头 0.5x 双侧远心', en: 'Telecentric Lens 0.5x Bilateral' },
    desc: { zh: '双侧远心镜头，低畸变，适用于精密尺寸测量', en: 'Bilateral telecentric lens, low distortion, for precision measurement' },
    specs: [
      { zh: '倍率', en: 'Magnification', val: { zh: '0.5x', en: '0.5x' } },
      { zh: '畸变', en: 'Distortion', val: { zh: '<0.1%', en: '<0.1%' } },
      { zh: '景深', en: 'Depth of Field', val: { zh: '±3mm', en: '±3mm' } },
      { zh: '接口', en: 'Mount', val: { zh: 'C-mount', en: 'C-mount' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'vision-004', cat: 'vision', icon: '💡',
    name: { zh: 'CCS 环形光源 HLV2-22', en: 'CCS Ring Light HLV2-22' },
    desc: { zh: '高亮度LED环形光源，适用于表面缺陷检测', en: 'High-brightness LED ring light for surface defect inspection' },
    specs: [
      { zh: '外径', en: 'Outer Dia.', val: { zh: '22mm', en: '22mm' } },
      { zh: '颜色', en: 'Color', val: { zh: '红/白/蓝/绿可选', en: 'Red/White/Blue/Green' } },
      { zh: '品牌', en: 'Brand', val: { zh: 'CCS', en: 'CCS' } },
      { zh: '产地', en: 'Origin', val: { zh: '日本', en: 'Japan' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'vision-005', cat: 'vision', icon: '📊',
    name: { zh: '海康威视 MV-IDR 固定式读码器', en: 'Hikvision MV-IDR Fixed Code Reader' },
    desc: { zh: '工业级固定式条码/二维码读码器，支持DPM码', en: 'Industrial fixed barcode/QR code reader, supports DPM codes' },
    specs: [
      { zh: '读取码制', en: 'Code Types', val: { zh: '1D/2D/DPM', en: '1D/2D/DPM' } },
      { zh: '分辨率', en: 'Resolution', val: { zh: '130万', en: '1.3MP' } },
      { zh: '接口', en: 'Interface', val: { zh: 'Ethernet', en: 'Ethernet' } },
      { zh: '品牌', en: 'Brand', val: { zh: '海康威视 Hikvision', en: 'Hikvision' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Other IC Products ==========
  {
    id: 'other-001', cat: 'other-ic', icon: '🛠️',
    name: { zh: '西门子 SCALANCE 工业交换机', en: 'Siemens SCALANCE Industrial Switch' },
    desc: { zh: '工业以太网交换机，支持Profinet，冗余环网', en: 'Industrial Ethernet switch, supports Profinet, redundant ring' },
    specs: [
      { zh: '端口', en: 'Ports', val: { zh: '8× RJ45', en: '8× RJ45' } },
      { zh: '通信速率', en: 'Speed', val: { zh: '10/100 Mbps', en: '10/100 Mbps' } },
      { zh: '品牌', en: 'Brand', val: { zh: '西门子 Siemens', en: 'Siemens' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'other-002', cat: 'other-ic', icon: '🛠️',
    name: { zh: '菲尼克斯 交换机 FL SWITCH', en: 'Phoenix Contact FL SWITCH' },
    desc: { zh: '工业级以太网交换机，紧凑型设计，导轨安装', en: 'Industrial Ethernet switch, compact design, DIN rail mount' },
    specs: [
      { zh: '端口', en: 'Ports', val: { zh: '5× RJ45', en: '5× RJ45' } },
      { zh: '供电', en: 'Power', val: { zh: '24V DC', en: '24V DC' } },
      { zh: '品牌', en: 'Brand', val: { zh: '菲尼克斯 Phoenix', en: 'Phoenix Contact' } },
      { zh: '产地', en: 'Origin', val: { zh: '德国', en: 'Germany' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
  {
    id: 'other-003', cat: 'other-ic', icon: '🛠️',
    name: { zh: '工业连接器 M12 4芯', en: 'Industrial Connector M12 4-pin' },
    desc: { zh: 'M12圆形连接器，IP67防护，适用于传感器连接', en: 'M12 circular connector, IP67, for sensor connections' },
    specs: [
      { zh: '芯数', en: 'Pins', val: { zh: '4芯', en: '4-pin' } },
      { zh: '防护等级', en: 'IP Rating', val: { zh: 'IP67', en: 'IP67' } },
      { zh: '类型', en: 'Type', val: { zh: '直头/弯头', en: 'Straight/Angled' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Self-Developed: Spider Sorter ==========
  {
    id: 'spider-001', cat: 'spider-sorter', icon: '🤖', badge: 'new',
    name: { zh: '深谋 DS-Spider 蜘蛛手分拣系统', en: 'DeepSight DS-Spider Sorting System' },
    desc: { zh: '自主研发并联机器人分拣系统，视觉引导，高速抓取，适用于食品、医药、物流行业', en: 'Self-developed parallel robot sorting system, vision-guided, high-speed picking, for food, pharma, logistics' },
    specs: [
      { zh: '负载', en: 'Payload', val: { zh: '3kg', en: '3kg' } },
      { zh: '工作半径', en: 'Work Radius', val: { zh: '800mm', en: '800mm' } },
      { zh: '最高节拍', en: 'Max Cycle', val: { zh: '120次/分钟', en: '120 cycles/min' } },
      { zh: '重复精度', en: 'Repeatability', val: { zh: '±0.05mm', en: '±0.05mm' } },
      { zh: '视觉系统', en: 'Vision', val: { zh: '集成3D视觉定位', en: 'Integrated 3D vision' } },
      { zh: '品牌', en: 'Brand', val: { zh: '深谋 DeepSight (自研)', en: 'DeepSight (Self-developed)' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国广州', en: 'Guangzhou, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Self-Developed: Flash Test ==========
  {
    id: 'flash-001', cat: 'flash-test', icon: '🔬', badge: 'new',
    name: { zh: '深谋 DS-Flash 闪测仪器', en: 'DeepSight DS-Flash Testing Instrument' },
    desc: { zh: '自主研发一键式快速测量仪器，双远心光路，精密尺寸测量与缺陷检测一体化', en: 'Self-developed one-click rapid measurement instrument, dual telecentric optics, integrated precision measurement and defect detection' },
    specs: [
      { zh: '测量范围', en: 'Measurement Range', val: { zh: '50×50mm', en: '50×50mm' } },
      { zh: '测量精度', en: 'Accuracy', val: { zh: '±2μm', en: '±2μm' } },
      { zh: '测量时间', en: 'Cycle Time', val: { zh: '<1秒', en: '<1s' } },
      { zh: '相机', en: 'Camera', val: { zh: '2000万像素', en: '20MP' } },
      { zh: '品牌', en: 'Brand', val: { zh: '深谋 DeepSight (自研)', en: 'DeepSight (Self-developed)' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国广州', en: 'Guangzhou, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Self-Developed: Vision System Kit ==========
  {
    id: 'vsys-001', cat: 'vision-system', icon: '🖥️', badge: 'new',
    name: { zh: '深谋 DS-Vision 标准视觉系统套装', en: 'DeepSight DS-Vision Standard System Kit' },
    desc: { zh: '软硬件一体化视觉检测方案，含相机+镜头+光源+软件平台，即插即用', en: 'Integrated hardware+software vision inspection solution, camera+lens+light+software, plug and play' },
    specs: [
      { zh: '相机', en: 'Camera', val: { zh: '500万/2000万可选', en: '5MP/20MP optional' } },
      { zh: '软件平台', en: 'Software', val: { zh: 'DS-Vision 标准平台', en: 'DS-Vision Standard Platform' } },
      { zh: '检测工具', en: 'Tools', val: { zh: '150+种视觉工具', en: '150+ vision tools' } },
      { zh: '通信', en: 'Communication', val: { zh: 'TCP/IP + Modbus + Profinet', en: 'TCP/IP + Modbus + Profinet' } },
      { zh: '品牌', en: 'Brand', val: { zh: '深谋 DeepSight (自研)', en: 'DeepSight (Self-developed)' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国广州', en: 'Guangzhou, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },

  // ========== Self-Developed: Servo Press ==========
  {
    id: 'press-001', cat: 'servo-press', icon: '🏭', badge: 'new',
    name: { zh: '深谋 DS-Press 伺服电压机', en: 'DeepSight DS-Press Servo Press Machine' },
    desc: { zh: '自主研发精密伺服控制压装设备，力位双控，数据追溯', en: 'Self-developed precision servo-controlled press equipment, force-position dual control, data traceability' },
    specs: [
      { zh: '额定压力', en: 'Rated Force', val: { zh: '20kN', en: '20kN' } },
      { zh: '行程', en: 'Stroke', val: { zh: '100mm', en: '100mm' } },
      { zh: '位置精度', en: 'Position Accuracy', val: { zh: '±0.01mm', en: '±0.01mm' } },
      { zh: '力精度', en: 'Force Accuracy', val: { zh: '±0.5%F.S.', en: '±0.5% F.S.' } },
      { zh: '品牌', en: 'Brand', val: { zh: '深谋 DeepSight (自研)', en: 'DeepSight (Self-developed)' } },
      { zh: '产地', en: 'Origin', val: { zh: '中国广州', en: 'Guangzhou, China' } },
      { zh: '质保', en: 'Warranty', val: { zh: '12个月', en: '12 months' } },
    ]
  },
];

/* ---------- Helper Functions ---------- */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(catId) {
  if (!catId || catId === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === catId);
}

function getCategoryById(catId) {
  return PRODUCT_CATEGORIES.find(c => c.id === catId);
}

function getCategoryCount(catId) {
  return PRODUCTS.filter(p => p.cat === catId).length;
}

function getRelatedProducts(catId, currentId, limit) {
  limit = limit || 4;
  return PRODUCTS.filter(p => p.cat === catId && p.id !== currentId).slice(0, limit);
}

function t(key) {
  var lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('ds-lang') || 'zh');
  if (I18N[lang] && I18N[lang][key]) return I18N[lang][key];
  return key;
}

function productName(p) {
  var lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('ds-lang') || 'zh');
  return p.name[lang] || p.name.zh;
}

function productDesc(p) {
  var lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('ds-lang') || 'zh');
  return p.desc[lang] || p.desc.zh;
}
