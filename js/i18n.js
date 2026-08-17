/* ========================================
   DeepSight i18n - Multi-language System
   Supports: Chinese (zh), English (en)
   ======================================== */

const I18N = {
  zh: {
    // Top bar
    'top.welcome': '欢迎来到 DeepSight 工控产品贸易平台',
    'top.phone': '+86 138-0000-0000',
    'top.email': 'sales@deepsight-tech.com',
    'top.address': '广州市天河区灵山东路3号201室（部位：5、6）HG281号',

    // Nav
    'nav.home': '首页',
    'nav.products': '产品中心',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.inquiry': '立即询盘',

    // Nav dropdown - 工控产品
    'nav.plc': 'PLC 可编程控制器',
    'nav.hmi': 'HMI 人机界面',
    'nav.io-modules': 'I/O 模块',
    'nav.relays': '继电器',
    'nav.vfd': '变频器',
    'nav.servo': '伺服电机与驱动器',
    'nav.sensors': '传感器',
    'nav.vision': '视觉配件',
    'nav.other-ic': '其他工控产品',
    'nav.self-dev': '自研标机',
    'nav.spider-sorter': '蜘蛛手分拣系统',
    'nav.flash-test': '闪测仪器',
    'nav.vision-system': '标准视觉系统套装',
    'nav.servo-press': '伺服电压机',

    // Hero
    'hero.badge': 'AI研发 + 设备制造 + 工控贸易',
    'hero.title1': 'AI驱动的工业',
    'hero.title2': '自动化全链路平台',
    'hero.desc': '集AI视觉研发、标准设备制造、工控产品贸易于一体的工业自动化企业。从核心算法到整机交付，从配件到全球贸易，为您提供一站式解决方案。',
    'hero.btn.products': '浏览全部产品',
    'hero.btn.quote': '获取报价',
    'hero.stat1': '10+',
    'hero.stat1.label': '年行业经验',
    'hero.stat2': '1500+',
    'hero.stat2.label': '平米仓储',
    'hero.stat3': '8+',
    'hero.stat3.label': '产品品类',
    'hero.stat4': '24h',
    'hero.stat4.label': '快速响应',

    // Hero visual icons
    'hero.ic.plc': 'PLC',
    'hero.ic.hmi': 'HMI',
    'hero.ic.vfd': '变频器',
    'hero.ic.servo': '伺服电机',
    'hero.ic.sensor': '传感器',
    'hero.ic.vision': '视觉配件',

    // Capability Loop
    'loop.tag': 'Core Capabilities',
    'loop.title': '核心能力闭环',
    'loop.subtitle': 'AI研发 · 设备制造 · 工控贸易 · 应用落地 — 形成完整的产业闭环',
    'loop.ai.title': 'AI研发',
    'loop.ai.desc': '视觉算法、AI检测模型、深度学习平台',
    'loop.ai.tag1': '视觉算法',
    'loop.ai.tag2': '深度学习',
    'loop.mfg.title': '设备制造',
    'loop.mfg.desc': '蜘蛛手分拣、闪测仪器、视觉系统、伺服电压机',
    'loop.mfg.tag1': '标准设备',
    'loop.mfg.tag2': '自主研发',
    'loop.trade.title': '工控贸易',
    'loop.trade.desc': 'PLC/HMI/变频器/伺服/传感器全品类工控产品',
    'loop.trade.tag1': '全品类',
    'loop.trade.tag2': '全球发货',
    'loop.app.title': '应用落地',
    'loop.app.desc': '3C/新能源/医疗/汽车等行业解决方案交付',
    'loop.app.tag1': '行业方案',
    'loop.app.tag2': '技术支持',

    // Equipment Showcase
    'equip.tag': 'Self-Developed Equipment',
    'equip.title': '自研标准设备',
    'equip.subtitle': 'AI驱动 · 自主研发 · 标准化交付',
    'equip.selfdev': '自研 R&D',
    'equip.spider.title': '蜘蛛手分拣系统',
    'equip.spider.desc': '视觉引导高速并联机器人分拣系统，适用于食品、医药、物流行业，最高节拍120次/分钟',
    'equip.spider.spec1': '负载 3kg',
    'equip.spider.spec2': '精度 ±0.05mm',
    'equip.spider.spec3': '3D视觉引导',
    'equip.flash.title': '闪测仪器',
    'equip.flash.desc': '一键式精密尺寸测量与缺陷检测',
    'equip.vision.title': '标准视觉系统套装',
    'equip.vision.desc': '软硬件一体化视觉检测方案，即插即用',
    'equip.press.title': '伺服电压机',
    'equip.press.desc': '精密伺服控制压装设备，力位双控',

    // Product categories
    'cat.title': '产品分类',
    'cat.subtitle': '涵盖工业自动化控制全品类产品，从核心控制器件到自研标准设备',
    'cat.section': '工控产品',
    'cat.section.selfdev': '自研标机',

    'cat.plc': 'PLC 可编程控制器',
    'cat.plc.desc': '数字控制器，自动化工业过程与机械设备的精确控制',
    'cat.hmi': 'HMI 人机界面',
    'cat.hmi.desc': '操作员监控和控制自动化系统的直观界面',
    'cat.io-modules': 'I/O 模块',
    'cat.io-modules.desc': '连接传感器和执行器到控制系统的数据交换设备',
    'cat.relays': '继电器',
    'cat.relays.desc': '管理电路并防止过载或故障的电气开关',
    'cat.vfd': '变频器',
    'cat.vfd.desc': '通过调节电源频率控制电机速度和转矩，提升效率',
    'cat.servo': '伺服电机与驱动器',
    'cat.servo.desc': '动态应用中控制位置、速度和转矩的高精度电机',
    'cat.sensors': '传感器',
    'cat.sensors.desc': '测量物理变量并转换为数据用于过程控制',
    'cat.vision': '视觉配件',
    'cat.vision.desc': '工业相机、镜头、光源、读码器等视觉检测组件',
    'cat.other-ic': '其他工控产品',
    'cat.other-ic.desc': '通信设备、网络设备、MES系统等，优化生产系统',
    'cat.spider-sorter': '蜘蛛手分拣系统',
    'cat.spider-sorter.desc': '高速并联机器人分拣，适用于物流、食品、医药行业',
    'cat.flash-test': '闪测仪器',
    'cat.flash-test.desc': '一键式快速测量，精密尺寸检测与缺陷分析',
    'cat.vision-system': '标准视觉系统套装',
    'cat.vision-system.desc': '软硬件一体化视觉检测方案，即插即用',
    'cat.servo-press': '伺服电压机',
    'cat.servo-press.desc': '精密伺服控制压装设备，力位双控',

    // About section
    'about.tag': 'About DeepSight',
    'about.title': '关于深谋',
    'about.p1': '广州深谋科技有限公司是一家专业的工业自动化控制产品销售与贸易企业，主营PLC、HMI、变频器、伺服电机、传感器等全品类工控产品。公司依托强大的供应链整合能力，为客户提供品质可靠、价格 competitive 的自动化产品。',
    'about.p2': '同时，公司拥有自主研发团队，具备标准检测设备的研发与交付能力，可为客户提供视觉检测系统、分拣设备等自研标机产品。我们以"快速响应、品质保障、价格优势"为核心服务理念，服务全球客户。',
    'about.f1': '10+年行业经验',
    'about.f2': '1500+平米仓储',
    'about.f3': '全球发货',
    'about.f4': 'AI研发能力',
    'about.f5': '品质保障',
    'about.f6': '快速发货',
    'about.f1.desc': '深耕工业自动化领域',
    'about.f2.desc': '充足库存保障供应',
    'about.f3.desc': '支持国际物流配送',
    'about.f4.desc': '视觉算法与AI检测',
    'about.card.title': 'AI + 制造 + 贸易',
    'about.card.desc': '三位一体能力闭环',
    'about.btn': '了解更多 →',

    'about.stat1': '2025',
    'about.stat1.label': '成立年份',
    'about.stat2': '1500+',
    'about.stat2.label': '平米仓储',
    'about.stat3': '8+',
    'about.stat3.label': '产品品类',
    'about.stat4': '6+',
    'about.stat4.label': '覆盖行业',

    // Advantages
    'adv.tag': 'Our Advantages',
    'adv.title': '核心优势',
    'adv.subtitle': '为什么选择深谋？我们为每一位客户提供专业、高效、可靠的工控产品贸易服务',
    'adv.fast.title': '快速响应',
    'adv.fast.desc': '专业团队24小时内响应询盘，提供产品选型建议与技术方案支持，确保客户需求得到及时处理。',
    'adv.price.title': '竞争优势价格',
    'adv.price.desc': '依托强大的采购和供应能力，我们能够提供市场上有竞争力的价格，让客户以更优成本获取高品质产品。',
    'adv.stock.title': '库存充足 快速发货',
    'adv.stock.desc': '维持充足的产品库存，确保各类产品随时可用，保证快速发货，让客户无需等待即可使用。',
    'adv.supply.title': '稳定可靠供应链',
    'adv.supply.desc': '通过长期合作供应商建立稳定高效的供应链体系，确保产品质量一致性和交付可靠性。',

    // Reviews
    'rev.tag': 'WHAT ARE REVIEWS',
    'rev.title': '客户评价',
    'rev.1.name': 'Alice Customer',
    'rev.1.title': '采购工程师',
    'rev.1.text': '作为自动化采购方，质量和可靠性是我们的首要考虑。该公司提供的自动化设备非常稳定，长期使用没有任何问题，大大提升了我们的生产效率。非常满意！',
    'rev.2.name': 'Tom Customer',
    'rev.2.title': '采购经理',
    'rev.2.text': '我们对交期要求很高，尤其是加急订单。每次下单都能快速处理并确保及时发货。询盘响应也非常迅速，效率很高，值得信赖。',
    'rev.3.name': 'Alexo Customer',
    'rev.3.title': '工程师',
    'rev.3.text': '这家公司不仅价格非常有竞争力，而且产品质量过硬。性价比非常出色。我们选择他们而非其他供应商，正是因为他们在不牺牲质量的前提下提供了更优的价格。',

    // Industries
    'ind.tag': 'Industries We Serve',
    'ind.title': '服务行业覆盖',
    'ind.1': '3C电子',
    'ind.2': '新能源',
    'ind.3': '医疗',
    'ind.4': 'PCB',
    'ind.5': '汽车制造',
    'ind.6': '物流/仓储',
    'ind.7': '印刷/涂布',

    // CTA
    'cta.title': '需要产品报价或技术方案？',
    'cta.desc': '我们的专业团队随时为您提供服务，从产品选型到技术支持，一站式解决您的工控产品需求',
    'cta.btn1': '立即询盘',
    'cta.btn2': '浏览产品',

    // Footer
    'footer.desc': '广州深谋科技有限公司 — 专业工业自动化控制产品销售与贸易企业，同时拥有自主研发标准设备能力。Fast Response · Competitive Price · Stable Supply',
    'footer.products': '产品中心',
    'footer.links': '快速链接',
    'footer.industries': '服务行业',
    'footer.contact': '联系方式',
    'footer.hours': '周一至周五 9:00-18:00',
    'footer.copyright': '© 2025 广州深谋科技有限公司 (Guangzhou DeepSight Technologies Co., Ltd) 版权所有 | 粤ICP备XXXXXXXX号',

    // Products page
    'products.title': '产品中心',
    'products.breadcrumb': '首页',
    'products.all': '全部产品',
    'products.search.placeholder': '搜索产品...',
    'products.sort': '排序',
    'products.sort.default': '默认排序',
    'products.sort.name': '按名称',
    'products.sort.category': '按分类',
    'products.result': '共找到',
    'products.result.unit': '款产品',
    'products.inquiry': '询盘',
    'products.sidebar.contact': '需要帮助？',
    'products.sidebar.contact.desc': '联系我们获取专业产品选型建议',
    'products.sidebar.contact.btn': '在线咨询',

    // Product detail
    'detail.specs': '规格参数',
    'detail.description': '产品描述',
    'detail.inquiry': '在线询盘',
    'detail.related': '相关产品',
    'detail.brand': '品牌',
    'detail.model': '型号',
    'detail.category': '分类',
    'detail.origin': '产地',
    'detail.warranty': '质保',
    'detail.lead': '交期',
    'detail.moq': '起订量',
    'detail.trust1': '品质保证',
    'detail.trust2': '快速发货',
    'detail.trust3': '技术支持',
    'detail.form.name': '您的姓名',
    'detail.form.email': '邮箱地址',
    'detail.form.phone': '电话号码',
    'detail.form.message': '留言内容',
    'detail.form.submit': '发送询盘',
    'detail.form.success': '询盘已发送，我们将尽快与您联系！',

    // About page
    'about.page.tag': 'About Us',
    'about.page.title': '关于深谋',
    'about.page.p1': '广州深谋科技有限公司成立于2025年6月10日，注册地址位于广州市天河区灵山东路3号201室（部位：5、6）HG281号，法定代表人为陈森，注册资本100万元。公司是一家专业的工业自动化控制产品销售与贸易企业，经营范围涵盖技术进出口、信息技术咨询服务、软件开发、工业工程设计服务、工业自动控制系统装置制造、互联网销售、国内贸易代理、机械设备销售与安装服务、工程技术研究和试验发展等领域。主营PLC、HMI、变频器、伺服电机、传感器、视觉配件等全品类工控产品，依托强大的供应链整合能力，为全球客户提供品质可靠、价格 competitive 的自动化产品。',
    'about.page.p2': '同时，公司拥有自主研发团队，在工业视觉和自动化检测领域具备深厚技术积累。我们自主研发了蜘蛛手分拣系统、闪测仪器、标准视觉系统套装、伺服电压机等标准设备，可为客户提供从配件到整机的完整解决方案。',
    'about.page.p3': '我们以"快速响应、品质保障、价格优势"为核心服务理念，致力于成为全球客户信赖的工业自动化产品供应商。',
    'about.capabilities': '核心能力',
    'about.cap1.title': '供应链整合',
    'about.cap1.desc': '与多家知名品牌建立长期合作关系，供应链稳定可靠，产品品类齐全，满足一站式采购需求。',
    'about.cap2.title': '自主研发',
    'about.cap2.desc': '拥有视觉算法和自动化设备研发团队，可提供标准检测设备和定制化解决方案。',
    'about.cap3.title': '全球贸易',
    'about.cap3.desc': '面向全球客户，提供多语言服务，支持国际物流配送，经验丰富的贸易团队。',
    'about.cap4.title': '技术支持',
    'about.cap4.desc': '专业的技术支持团队，提供产品选型、方案设计、安装调试等全流程技术服务。',

    'about.milestones': '发展历程',
    'about.m1.year': '2025-06',
    'about.m1.title': '公司成立',
    'about.m1.desc': '广州深谋科技有限公司在广州天河正式成立，注册资本100万元，定位工业自动化控制产品贸易与技术服务。',
    'about.m2.year': '2025 Q3',
    'about.m2.title': '供应链搭建',
    'about.m2.desc': '与多家知名工控品牌建立合作关系，完成核心产品线布局，覆盖PLC/HMI/变频器/伺服/传感器等全品类。',
    'about.m3.year': '2025 Q4',
    'about.m3.title': '自研标机发布',
    'about.m3.desc': '发布自研蜘蛛手分拣系统、闪测仪器等标准设备，拓展产品线至自研标机领域。',
    'about.m4.year': '2026',
    'about.m4.title': '线上平台上线',
    'about.m4.desc': '推出线上贸易平台，面向全球客户销售工控产品，提供多语言服务与技术支持。',
    'about.m5.year': '2026+',
    'about.m5.title': '持续扩展',
    'about.m5.desc': '持续扩展产品品类与服务范围，深化全球市场布局，打造AI驱动的工业自动化全链路平台。',

    // Contact page
    'contact.title': '联系我们',
    'contact.subtitle': '如果您有任何产品咨询或合作意向，请随时与我们联系',
    'contact.info.title': '联系方式',
    'contact.address.title': '公司地址',
    'contact.address.desc': '广州市天河区灵山东路3号201室',
    'contact.phone.title': '联系电话',
    'contact.phone.desc': '+86 138-0000-0000',
    'contact.email.title': '电子邮箱',
    'contact.email.desc': 'sales@deepsight-tech.com',
    'contact.hours.title': '工作时间',
    'contact.hours.desc': '周一至周五 9:00-18:00 (GMT+8)',
    'contact.form.title': '发送询盘',
    'contact.form.subtitle': '填写以下表单，我们将尽快与您联系',
    'contact.form.company': '公司名称',
    'contact.form.product': '感兴趣的产品',
    'contact.faq.title': '常见问题',
    'contact.faq1.q': '你们的交期一般是多久？',
    'contact.faq1.a': '常规产品有库存，3-7个工作日内发货。定制产品根据具体情况协商交期。',
    'contact.faq2.q': '是否支持国际物流？',
    'contact.faq2.a': '是的，我们支持全球物流配送，可根据客户需求选择合适的物流方案。',
    'contact.faq3.q': '产品有质保吗？',
    'contact.faq3.a': '所有产品均提供质保服务，具体质保期根据产品类型而定，一般为12个月。',
    'contact.faq4.q': '可以提供技术支持吗？',
    'contact.faq4.a': '可以，我们拥有专业的技术支持团队，提供产品选型、方案设计、安装调试等全流程技术支持。',

    // Float buttons
    'float.inquiry': '在线询盘',
    'float.top': '返回顶部',

    // Language
    'lang.switch': 'English',
    'lang.current': '中文',
  },

  en: {
    // Top bar
    'top.welcome': 'Welcome to DeepSight Industrial Automation Trading Platform',
    'top.phone': '+86 138-0000-0000',
    'top.email': 'sales@deepsight-tech.com',
    'top.address': 'Room 201, No. 3 Lingshan East Road, Tianhe District, Guangzhou (Units 5, 6) HG281',

    // Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.inquiry': 'Get Quote',

    // Nav dropdown
    'nav.plc': 'PLC',
    'nav.hmi': 'HMI',
    'nav.io-modules': 'I/O Modules',
    'nav.relays': 'Relays',
    'nav.vfd': 'Frequency Converters',
    'nav.servo': 'Servo Motors & Drives',
    'nav.sensors': 'Sensors',
    'nav.vision': 'Vision Components',
    'nav.other-ic': 'Other Products',
    'nav.self-dev': 'Self-Developed Equipment',
    'nav.spider-sorter': 'Spider Sorting System',
    'nav.flash-test': 'Flash Testing Instrument',
    'nav.vision-system': 'Standard Vision System Kit',
    'nav.servo-press': 'Servo Press Machine',

    // Hero
    'hero.badge': 'AI R&D + Equipment Mfg + Industrial Trade',
    'hero.title1': 'AI-Driven Industrial',
    'hero.title2': 'Automation Platform',
    'hero.desc': 'An industrial automation enterprise integrating AI vision R&D, standard equipment manufacturing, and industrial control product trade. From core algorithms to complete machine delivery, from components to global trade.',
    'hero.btn.products': 'Browse All Products',
    'hero.btn.quote': 'Get a Quote',
    'hero.stat1': '10+',
    'hero.stat1.label': 'Years Experience',
    'hero.stat2': '1500+',
    'hero.stat2.label': 'sqm Warehouse',
    'hero.stat3': '8+',
    'hero.stat3.label': 'Product Categories',
    'hero.stat4': '24h',
    'hero.stat4.label': 'Fast Response',

    // Hero visual icons
    'hero.ic.plc': 'PLC',
    'hero.ic.hmi': 'HMI',
    'hero.ic.vfd': 'VFD',
    'hero.ic.servo': 'Servo',
    'hero.ic.sensor': 'Sensor',
    'hero.ic.vision': 'Vision',

    // Capability Loop
    'loop.tag': 'Core Capabilities',
    'loop.title': 'Capability Closed Loop',
    'loop.subtitle': 'AI R&D · Equipment Mfg · Industrial Trade · Application — A Complete Closed Loop',
    'loop.ai.title': 'AI R&D',
    'loop.ai.desc': 'Vision algorithms, AI inspection models, deep learning platform',
    'loop.ai.tag1': 'Vision Algorithm',
    'loop.ai.tag2': 'Deep Learning',
    'loop.mfg.title': 'Equipment Mfg',
    'loop.mfg.desc': 'Spider sorter, flash tester, vision system, servo press',
    'loop.mfg.tag1': 'Standard Equipment',
    'loop.mfg.tag2': 'Self-Developed',
    'loop.trade.title': 'Industrial Trade',
    'loop.trade.desc': 'PLC/HMI/VFD/servo/sensors full-category industrial products',
    'loop.trade.tag1': 'Full Category',
    'loop.trade.tag2': 'Global Shipping',
    'loop.app.title': 'Application',
    'loop.app.desc': '3C/new energy/medical/automotive industry solutions',
    'loop.app.tag1': 'Industry Solutions',
    'loop.app.tag2': 'Tech Support',

    // Equipment Showcase
    'equip.tag': 'Self-Developed Equipment',
    'equip.title': 'Self-Developed Standard Equipment',
    'equip.subtitle': 'AI-Driven · Self-Developed · Standardized Delivery',
    'equip.selfdev': 'R&D',
    'equip.spider.title': 'Spider Sorting System',
    'equip.spider.desc': 'Vision-guided high-speed parallel robot sorting system for food, pharma, logistics, up to 120 cycles/min',
    'equip.spider.spec1': 'Payload 3kg',
    'equip.spider.spec2': 'Accuracy ±0.05mm',
    'equip.spider.spec3': '3D Vision Guided',
    'equip.flash.title': 'Flash Testing Instrument',
    'equip.flash.desc': 'One-click precision dimensional measurement and defect detection',
    'equip.vision.title': 'Standard Vision System Kit',
    'equip.vision.desc': 'Integrated hardware+software vision inspection, plug and play',
    'equip.press.title': 'Servo Press Machine',
    'equip.press.desc': 'Precision servo-controlled press, force-position dual control',

    // Product categories
    'cat.title': 'Product Categories',
    'cat.subtitle': 'Covering the full range of industrial automation control products, from core control devices to self-developed standard equipment',
    'cat.section': 'Industrial Automation Products',
    'cat.section.selfdev': 'Self-Developed Equipment',

    'cat.plc': 'PLC',
    'cat.plc.desc': 'Digital controllers automating industrial processes and machinery for precise control.',
    'cat.hmi': 'HMI',
    'cat.hmi.desc': 'Interfaces that allow operators to monitor and control automated systems intuitively.',
    'cat.io-modules': 'I/O Modules',
    'cat.io-modules.desc': 'Devices that connect sensors and actuators to control systems for data exchange.',
    'cat.relays': 'Relays',
    'cat.relays.desc': 'Electrical switches that manage circuits and protect against overloads or faults.',
    'cat.vfd': 'Frequency Converters (VFDs)',
    'cat.vfd.desc': 'Control motor speed and torque by adjusting power frequency for efficiency.',
    'cat.servo': 'Servo Motors & Drives',
    'cat.servo.desc': 'High-precision motors for controlling position, speed, and torque in dynamic applications.',
    'cat.sensors': 'Sensors',
    'cat.sensors.desc': 'Devices that measure physical variables and convert them into data for process control.',
    'cat.vision': 'Vision Components',
    'cat.vision.desc': 'Industrial cameras, lenses, lighting, code readers and other vision inspection parts.',
    'cat.other-ic': 'Other Products',
    'cat.other-ic.desc': 'Communication devices, networking, and MES to optimize production systems.',
    'cat.spider-sorter': 'Spider Sorting System',
    'cat.spider-sorter.desc': 'High-speed parallel robot sorting for logistics, food, and pharmaceutical industries.',
    'cat.flash-test': 'Flash Testing Instrument',
    'cat.flash-test.desc': 'One-click rapid measurement, precision dimension inspection and defect analysis.',
    'cat.vision-system': 'Standard Vision System Kit',
    'cat.vision-system.desc': 'Integrated hardware and software vision inspection solution, plug and play.',
    'cat.servo-press': 'Servo Press Machine',
    'cat.servo-press.desc': 'Precision servo-controlled press equipment with force-position dual control.',

    // About section
    'about.tag': 'About DeepSight',
    'about.title': 'About DeepSight',
    'about.p1': 'Guangzhou DeepSight Technology Co., Ltd. is a professional industrial automation control products sales and trading company. We specialize in PLCs, HMIs, VFDs, servo motors, sensors, and other full-category industrial control products. With strong supply chain integration capabilities, we provide customers with reliable quality and competitive pricing.',
    'about.p2': 'Meanwhile, our company has an in-house R&D team with deep technical expertise in industrial vision and automation testing. We have independently developed standard equipment including spider sorting systems, flash testing instruments, standard vision system kits, and servo press machines, providing customers with complete solutions from components to machines.',
    'about.f1': '10+ Years Experience',
    'about.f2': '1500+ sqm Warehouse',
    'about.f3': 'Global Shipping',
    'about.f4': 'AI R&D Capability',
    'about.f5': 'Quality Guaranteed',
    'about.f6': 'Fast Shipping',
    'about.f1.desc': 'Deep expertise in industrial automation',
    'about.f2.desc': 'Sufficient inventory for supply',
    'about.f3.desc': 'International logistics support',
    'about.f4.desc': 'Vision algorithms & AI inspection',
    'about.card.title': 'AI + Mfg + Trade',
    'about.card.desc': 'Trinity capability loop',
    'about.btn': 'Learn More →',

    'about.stat1': '2025',
    'about.stat1.label': 'Founded',
    'about.stat2': '1500+',
    'about.stat2.label': 'sqm Warehouse',
    'about.stat3': '8+',
    'about.stat3.label': 'Categories',
    'about.stat4': '6+',
    'about.stat4.label': 'Industries',

    // Advantages
    'adv.tag': 'Our Advantages',
    'adv.title': 'Why Choose Us',
    'adv.subtitle': 'We provide every customer with professional, efficient, and reliable industrial automation trading services',
    'adv.fast.title': 'Fast Response',
    'adv.fast.desc': 'Our professional team responds to inquiries within 24 hours, providing product selection advice and technical solution support to ensure timely handling of customer needs.',
    'adv.price.title': 'Competitive Pricing',
    'adv.price.desc': 'With our strong purchasing and supply capabilities, we are able to offer competitive prices in the market, allowing customers to enjoy high-quality products while minimizing costs.',
    'adv.stock.title': 'Large Stock, Fast Shipping',
    'adv.stock.desc': 'We maintain a substantial inventory to ensure a wide range of products is always available, and we guarantee quick shipping, enabling customers to start using the products without delay.',
    'adv.supply.title': 'Stable Supply Chain',
    'adv.supply.desc': 'Through long-term partnerships with reliable suppliers, we have built a stable and efficient supply chain, ensuring consistent product quality and reliable delivery timelines.',

    // Reviews
    'rev.tag': 'WHAT ARE REVIEWS',
    'rev.title': 'What Our Clients Say',
    'rev.1.name': 'Alice Customer',
    'rev.1.title': 'Engineer',
    'rev.1.text': 'As an automation buyer, quality and reliability are our top priorities. The automation equipment provided by this company has been very stable, with no issues during long-term use, greatly improving our production efficiency. Very satisfied!',
    'rev.2.name': 'Tom Customer',
    'rev.2.title': 'Purchasing Manager',
    'rev.2.text': 'We have high demands for delivery times, especially for urgent orders. Every time we place an order, they handle it quickly and ensure timely shipping. They also respond to our inquiries very quickly, which is incredibly efficient and trustworthy.',
    'rev.3.name': 'Alexo Customer',
    'rev.3.title': 'Engineer',
    'rev.3.text': 'This company offers not only very competitive prices but also high-quality products. The value for money is excellent. We chose them over other suppliers because they offer better prices without compromising on product quality.',

    // Industries
    'ind.tag': 'Industries We Serve',
    'ind.title': 'Industries We Serve',
    'ind.1': '3C Electronics',
    'ind.2': 'New Energy',
    'ind.3': 'Medical',
    'ind.4': 'PCB',
    'ind.5': 'Automotive',
    'ind.6': 'Logistics',
    'ind.7': 'Printing',

    // CTA
    'cta.title': 'Need a Quote or Technical Solution?',
    'cta.desc': 'Our professional team is ready to serve you, from product selection to technical support, one-stop solution for your industrial automation needs',
    'cta.btn1': 'Get Quote Now',
    'cta.btn2': 'Browse Products',

    // Footer
    'footer.desc': 'Guangzhou DeepSight Technology Co., Ltd. — Professional industrial automation control products sales and trading company with self-developed standard equipment capability. Fast Response · Competitive Price · Stable Supply',
    'footer.products': 'Products',
    'footer.links': 'Quick Links',
    'footer.industries': 'Industries',
    'footer.contact': 'Contact',
    'footer.hours': 'Mon-Fri 9:00-18:00',
    'footer.copyright': '© 2025 Guangzhou DeepSight Technology Co., Ltd. All Rights Reserved | ICP No. XXXXXXXX',

    // Products page
    'products.title': 'Products',
    'products.breadcrumb': 'Home',
    'products.all': 'All Products',
    'products.search.placeholder': 'Search products...',
    'products.sort': 'Sort',
    'products.sort.default': 'Default',
    'products.sort.name': 'By Name',
    'products.sort.category': 'By Category',
    'products.result': 'Found',
    'products.result.unit': 'products',
    'products.inquiry': 'Inquiry',
    'products.sidebar.contact': 'Need Help?',
    'products.sidebar.contact.desc': 'Contact us for professional product selection advice',
    'products.sidebar.contact.btn': 'Contact Us',

    // Product detail
    'detail.specs': 'Specifications',
    'detail.description': 'Description',
    'detail.inquiry': 'Online Inquiry',
    'detail.related': 'Related Products',
    'detail.brand': 'Brand',
    'detail.model': 'Model',
    'detail.category': 'Category',
    'detail.origin': 'Origin',
    'detail.warranty': 'Warranty',
    'detail.lead': 'Lead Time',
    'detail.moq': 'MOQ',
    'detail.trust1': 'Quality Guaranteed',
    'detail.trust2': 'Fast Shipping',
    'detail.trust3': 'Tech Support',
    'detail.form.name': 'Your Name',
    'detail.form.email': 'Email Address',
    'detail.form.phone': 'Phone Number',
    'detail.form.message': 'Message',
    'detail.form.submit': 'Send Inquiry',
    'detail.form.success': 'Inquiry sent! We will contact you soon!',

    // About page
    'about.page.tag': 'About Us',
    'about.page.title': 'About DeepSight',
    'about.page.p1': 'Guangzhou DeepSight Technology Co., Ltd. was established on June 10, 2025, registered at Room 201, No. 3 Lingshan East Road, Tianhe District, Guangzhou (Units 5, 6) HG281, with legal representative Chen Sen and registered capital of RMB 1 million. The company is a professional industrial automation control products sales and trading enterprise. Our business scope covers technology import and export, information technology consulting, software development, industrial engineering design, industrial automatic control system equipment manufacturing, internet sales, domestic trade agency, machinery equipment sales and installation services, engineering and technology research and development, etc. We specialize in PLCs, HMIs, VFDs, servo motors, sensors, vision components, and other full-category industrial control products.',
    'about.page.p2': 'Meanwhile, our company has an in-house R&D team with deep technical expertise in industrial vision and automation testing. We have independently developed standard equipment including spider sorting systems, flash testing instruments, standard vision system kits, and servo press machines, providing customers with complete solutions from components to machines.',
    'about.page.p3': 'We are committed to becoming a trusted industrial automation products supplier for global customers, with "fast response, quality assurance, and competitive pricing" as our core service philosophy.',
    'about.capabilities': 'Core Capabilities',
    'about.cap1.title': 'Supply Chain Integration',
    'about.cap1.desc': 'Established long-term partnerships with multiple well-known brands, with stable and reliable supply chain, comprehensive product categories, meeting one-stop procurement needs.',
    'about.cap2.title': 'Independent R&D',
    'about.cap2.desc': 'With a vision algorithm and automation equipment R&D team, capable of providing standard testing equipment and customized solutions.',
    'about.cap3.title': 'Global Trade',
    'about.cap3.desc': 'Serving global customers, providing multilingual support, international logistics, and experienced trading team.',
    'about.cap4.title': 'Technical Support',
    'about.cap4.desc': 'Professional technical support team, providing product selection, solution design, installation and commissioning throughout the process.',

    'about.milestones': 'Milestones',
    'about.m1.year': '2025-06',
    'about.m1.title': 'Company Founded',
    'about.m1.desc': 'Guangzhou DeepSight Technology Co., Ltd. was officially established in Tianhe, Guangzhou, with a registered capital of 1 million RMB, positioned as an industrial automation control products trader and technical service provider.',
    'about.m2.year': '2025 Q3',
    'about.m2.title': 'Supply Chain Setup',
    'about.m2.desc': 'Established partnerships with multiple well-known industrial control brands, completed core product line layout covering PLC/HMI/VFD/servo/sensors.',
    'about.m3.year': '2025 Q4',
    'about.m3.title': 'Self-Developed Equipment Released',
    'about.m3.desc': 'Released self-developed spider sorting system, flash testing instrument and other standard equipment, expanding into self-developed machinery.',
    'about.m4.year': '2026',
    'about.m4.title': 'Online Platform Launched',
    'about.m4.desc': 'Launched online trading platform, selling industrial control products to global customers with multilingual service and technical support.',
    'about.m5.year': '2026+',
    'about.m5.title': 'Continuous Expansion',
    'about.m5.desc': 'Continuously expanding product categories and service scope, deepening global market presence, building an AI-driven industrial automation full-chain platform.',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'If you have any product inquiries or cooperation intentions, please feel free to contact us',
    'contact.info.title': 'Contact Information',
    'contact.address.title': 'Address',
    'contact.address.desc': 'Room 201, No. 3 Lingshan East Road, Tianhe District, Guangzhou, China',
    'contact.phone.title': 'Phone',
    'contact.phone.desc': '+86 138-0000-0000',
    'contact.email.title': 'Email',
    'contact.email.desc': 'sales@deepsight-tech.com',
    'contact.hours.title': 'Working Hours',
    'contact.hours.desc': 'Mon-Fri 9:00-18:00 (GMT+8)',
    'contact.form.title': 'Send Inquiry',
    'contact.form.subtitle': 'Fill out the form below and we will contact you soon',
    'contact.form.company': 'Company Name',
    'contact.form.product': 'Product of Interest',
    'contact.faq.title': 'FAQ',
    'contact.faq1.q': 'What is your typical lead time?',
    'contact.faq1.a': 'Products in stock ship within 3-7 business days. Custom products have negotiable lead times depending on specific requirements.',
    'contact.faq2.q': 'Do you support international shipping?',
    'contact.faq2.a': 'Yes, we support global logistics and can choose appropriate shipping solutions based on customer needs.',
    'contact.faq3.q': 'Do products come with warranty?',
    'contact.faq3.a': 'All products come with warranty service. The warranty period varies by product type, typically 12 months.',
    'contact.faq4.q': 'Can you provide technical support?',
    'contact.faq4.a': 'Yes, we have a professional technical support team providing product selection, solution design, installation and commissioning throughout the process.',

    // Float buttons
    'float.inquiry': 'Online Inquiry',
    'float.top': 'Back to Top',

    // Language
    'lang.switch': '中文',
    'lang.current': 'EN',
  }
};

/* ---------- Language Management ---------- */
let currentLang = localStorage.getItem('ds-lang') || 'zh';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('ds-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Apply text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang] && I18N[lang][key]) {
      el.placeholder = I18N[lang][key];
    }
  });

  // Update language switcher button text
  const switchBtn = document.getElementById('lang-switch');
  if (switchBtn) {
    switchBtn.textContent = I18N[lang]['lang.switch'];
  }

  // Re-render products if on products page
  if (typeof renderProducts === 'function') {
    renderProducts();
  }
  // Re-render product detail if on detail page
  if (typeof renderProductDetail === 'function') {
    renderProductDetail();
  }

  // Dispatch event for custom handlers
  window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
}

function toggleLanguage() {
  applyTranslations(currentLang === 'zh' ? 'en' : 'zh');
}

// Auto-apply on load
document.addEventListener('DOMContentLoaded', function() {
  applyTranslations(currentLang);
});
