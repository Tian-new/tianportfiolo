const assets = {
  heroMap: "assets/visuals/hero-map-interface.png",
  avatar: "assets/visuals/avatar-lightbulb.png",
  logoTianjinWow: "assets/visuals/logo-tianjin-wow.jpg",
  logoStudyChina: "assets/visuals/logo-study-china.jpg",
  logoEmbassy: "assets/visuals/logo-chinese-embassy.jpg",
  logoHuanqiu: "assets/visuals/logo-huanqiu.jpg",
  tianjinLichun: "assets/visuals/tianjin-lichun.jpg",
  tianjinXiazhi: "assets/visuals/tianjin-xiazhi.jpg",
  tianjinEye: "assets/visuals/tianjin-eye.jpg",
  tianjinBridge: "assets/visuals/tianjin-jiefang-bridge.jpg",
  cnpcChunfen: "assets/visuals/cnpc-chunfen.jpg",
  cnpcGuyu: "assets/visuals/cnpc-guyu.jpg",
  cnpcCharity: "assets/visuals/cnpc-charity.jpg",
  aiSpring: "assets/visuals/ai-spring-festival.jpg",
  aiEve: "assets/visuals/ai-new-year-eve.jpg",
  studyBit: "assets/visuals/study-china-bit.jpg",
  studyCtg: "assets/visuals/study-china-ctg.jpg",
  studyTju: "assets/visuals/study-china-tju.jpg",
  writingAvatar: "assets/visuals/writing-avatar.png",
  contactQr: "assets/visuals/contact-qr.jpg",
};

const videoPosterCache = new Map();

const visualWorks = [
  { title: "天津文旅 立春", meta: "城市品牌传播", category: "品牌传播", image: assets.tianjinLichun },
  { title: "天津文旅 夏至", meta: "文旅推广视觉", category: "品牌传播", image: assets.tianjinXiazhi },
  { title: "海河之夜 天津之眼", meta: "城市形象视觉", category: "品牌传播", image: assets.tianjinEye },
  { title: "海河之夜 解放桥", meta: "城市形象视觉", category: "品牌传播", image: assets.tianjinBridge },
  { title: "中国石油乍得 春分", meta: "属地化传播", category: "国际传播", image: assets.cnpcChunfen },
  { title: "中国石油乍得 谷雨", meta: "责任传播视觉", category: "国际传播", image: assets.cnpcGuyu },
  { title: "智能剪纸春节", meta: "智能创意视觉", category: "智能创意", image: assets.aiSpring },
  { title: "留学中国 北理", meta: "教育传播视觉", category: "国际传播", image: assets.studyBit },
];

const solarTermPosters = [
  "立夏",
  "小满",
  "夏至",
  "立春",
  "雨水",
  "惊蛰",
  "春分",
  "清明节",
  "谷雨",
  "芒种",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至",
  "小寒",
  "大寒",
].map((name) => ({
  title: name,
  image: `assets/visuals/solar-terms/${name}.jpg`,
}));

const scoPosters = [
  { title: "第一期：天津之眼", image: "assets/visuals/sco-posters/第一期：天津之眼.jpg" },
  { title: "第二期：天津港", image: "assets/visuals/sco-posters/第二期：天津港.jpg" },
  { title: "第三期：古文化街", image: "assets/visuals/sco-posters/第三期：古文化街.jpg" },
  { title: "第四期：梅江国际会展中心", image: "assets/visuals/sco-posters/第四期：梅江国际会展中心.jpg" },
];

const haihePosters = [
  { title: "解放桥", image: "assets/visuals/haihe-night/解放桥.jpg" },
  { title: "津湾广场", image: "assets/visuals/haihe-night/津湾广场.jpg" },
  { title: "世纪钟", image: "assets/visuals/haihe-night/世纪钟.jpg" },
  { title: "天津之眼", image: "assets/visuals/haihe-night/天津之眼.jpg" },
  { title: "意大利风情区", image: "assets/visuals/haihe-night/意大利风情区.jpg" },
];

const aiPaperCutPosters = [
  "除夕",
  "春节",
  "正月初二",
  "正月初三",
  "正月初四",
  "正月初五",
  "正月初六",
  "正月初八",
  "正月初九",
  "正月初十",
  "正月十一",
  "正月十二",
  "正月十三",
  "正月十四",
  "正月十五",
  "正月十六",
].map((name) => ({
  title: name,
  image: `assets/visuals/ai-paper-cut-spring/${name}.jpg`,
}));

const studyCampaignPosters = [
  "北理",
  "北师大",
  "上海大学",
  "同济",
  "浙师大",
  "东航",
  "国家电投哈萨克斯坦",
  "华电",
  "铁建",
  "中建",
].map((name) => ({
  title: name,
  image: `assets/visuals/study-china-campaign/${name}.jpg`,
}));

const olympicPosters = Array.from({ length: 10 }, (_, index) => ({
  title: `奥运运动青年 ${index + 1}`,
  image: `assets/visuals/olympics/${index + 1}.jpg`,
}));

const videoWarmupItems = [
  {
    title: "“验证码”互动小游戏",
    src: "assets/videos/study-china-warmup/verification-game.mp4",
  },
  {
    title: "城市截图挑战",
    src: "assets/videos/study-china-warmup/city-screenshot-challenge.mp4",
  },
  {
    title: "校训",
    src: "assets/videos/study-china-warmup/school-motto.mp4",
  },
  {
    title: "一起来找茬",
    src: "assets/videos/study-china-warmup/spot-the-difference.mp4",
  },
];

const chineseYouthVideos = [
  { title: "传承", src: "assets/videos/chinese-youth/heritage.mp4" },
  { title: "爱国", src: "assets/videos/chinese-youth/patriotism.mp4" },
  { title: "绿色生态", src: "assets/videos/chinese-youth/green-ecology.mp4" },
  { title: "创新", src: "assets/videos/chinese-youth/innovation.mp4" },
  { title: "奋进", src: "assets/videos/chinese-youth/strive.mp4" },
];

const workflowSteps = [
  {
    number: "01",
    title: "理解项目需求",
    summary: "了解项目内容并明确传播方向",
    output: "传播目标 + 内容方向 + 市场调研",
    judge: "这个项目是为了品牌曝光、用户互动、产品转化，还是声量传播？",
    action: "梳理项目背景、核心信息、目标用户并做市场调研。",
  },
  {
    number: "02",
    title: "拆解传播目标",
    summary: "将目标结果倒推拆成内容任务和数据指标",
    output: "关键指标 + 执行优先级",
    judge: "需要通过哪些方式达成目标结果？",
    action: "把大目标拆成可执行的内容任务、平台动作和优先级。",
  },
  {
    number: "03",
    title: "明确目标受众",
    summary: "判断目标人群并了解其喜好",
    output: "本地化表达方式",
    judge: "受众是否能理解这个内容，传递的信息是否能打动用户？",
    action: "根据用户兴趣、文化语境和平台语言习惯调整表达方式。",
  },
  {
    number: "04",
    title: "制定平台策略",
    summary: "根据不同平台机制调整内容形式",
    output: "多平台分发方案",
    judge: "如何用同一套内容体系发布在不同的平台？",
    action: "根据不同平台机制调整内容形式、标题、封面、标签和发布节奏。",
  },
  {
    number: "05",
    title: "推进内容落地",
    summary: "推进选题、视觉、视频和发布物料",
    output: "可发布内容素材和发布周期",
    judge: "内容是否清楚、好看、易传播，并符合用户的阅读习惯？",
    action: "推进选题、文案、视觉、视频、字幕、标签和发布时间安排。",
  },
  {
    number: "06",
    title: "发布互动运营",
    summary: "跟进评论反馈和二次传播机会",
    output: "持续放大内容热度",
    judge: "内容发布后用户反馈是否符合预期，评论区有没有可以继续放大的互动点？",
    action: "跟进发布表现、评论反馈、互动引导和二次传播机会。",
  },
  {
    number: "07",
    title: "数据复盘优化",
    summary: "复盘播放、曝光、互动和用户反馈",
    output: "可复用的优化策略和方法论",
    judge: "哪些选题、标题、封面、视频节奏或平台表现更好？",
    action: "复盘播放量、曝光量、互动率、评论内容和用户反馈，提炼下一轮优化方向。",
  },
];

const videos = [
  { title: "驻美使馆青年主题系列：传承", category: "国际传播视频", meta: "青年叙事" },
  { title: "驻美使馆青年主题系列：创新", category: "国际传播视频", meta: "创新表达" },
  { title: "驻美使馆观点与立场系列：中美关系", category: "短视频剪辑", meta: "议题传播" },
  { title: "发球吧！三峡巴西智能视频", category: "智能视频", meta: "企业传播视频" },
];

const writings = [
  {
    "id": "sports",
    "title": "技术解码体育精神，数字重塑青春叙事",
    "source": "发布于《中国网信》期刊 2025年6月刊",
    "tag": "AI正能量传播",
    "paragraphs": [
      "“奥运会是团结和友谊的象征，是文明互鉴的结晶。”24年5月，习近平主席访问法国期间的讲话，道出相互理解、友谊、团结等奥林匹克精神的真谛。",
      "在巴黎奥运会上，中国体育健儿奋勇拼搏、勇攀高峰，展现了新时代中国青年积极向上的精神风貌。为抓住这一国际传播热点，传播中国精神、凝聚青春力量，环球网海外社媒运维团队推出了“奥运赛场的运动青年们”AI创意系列。该系列主要依托生成式人工智能技术，立体呈现中国青年运动员在国际赛场上的高光时刻，探索科技赋能主流价值表达的新路径，讲好中国奥运青年的时代故事。",
      "一、用AI让体育精神“看得见”“传得出”",
      "在奥运赛场上，中国青年运动员用实际行动诠释着“拼搏”“超越”“永不言弃”的体育精神。他们的每一次冲刺、每一个眼神，都是这份精神最真实的注脚。为更好呈现这份力量，项目借助“即梦AI”的文生图功能，结合Z世代熟悉的二次元风格，创作出10位中国青年运动员的3D手办形象，并标注姓名与奖项信息，以年轻人喜闻乐见的方式，进一步放大他们身上的精神光芒。",
      "郑钦文冷静沉稳，是“冷面ACE”；潘展乐自信张扬，是“行走的阳光BUFF”；樊振东则自带“平稳输出机器”气场……这些AI生成的形象，不是替代现场，而是在尊重真实基础上的一次视觉延伸。在制作过程中，团队选取具有代表性的奥运赛场运动员风采图作为AI的参考素材，并辅以关键词，如“中国运动员”“潘展乐”“双手举过头顶”“眼神坚定”“蓝色背景游泳池”等。这些图像与词语把青年运动员身上的精神特质转译成具象、鲜活的数字语言，也让体育精神的情绪张力在屏幕之上得以继续传递。",
      "通过“视觉—技术—文化”的融合表达方式，体育精神不仅保留了来自赛场的真实温度，也找到了新的传播路径。从竞技瞬间到跨文化语境，从真实人物到数字形象，AI让体育精神的表达更丰富，也让更多人以新的方式感受到中国青年身上的奋斗力量。",
      "二、用Z世代的方式讲“有意义”的话题",
      "在奥运这样相对严肃的主流议题中，创作团队希望让“拼搏”“不放弃”这些词语，从官方报道的语境里走出来，真正出现在Z世代刷到的视频、评论和主动转发的内容里。为此，项目通过AI文生图技术，打造10位中国奥运青年运动员的3D手办形象，并围绕Z世代熟悉的二次元领域、拟人化表达方式进行视觉设计，让运动员不再只是“新闻中的强者”，而是可以被昵称、玩梗、共情的“线上同龄人”。对Z世代来说，真正“有意义”的话题，并不是一定要很重、很正，而是能被自己认同的方式讲出来，愿意点进来、刷下去、甚至分享出去。用这样的视觉语言+社交方式讲奥运，是一次更轻盈但不失分量的主流价值落地。",
      "三、轻松互动中沉淀“情境体验型”正能量",
      "在当前的社交媒体环境下，单向讲述已难满足受众对互动和情感连接的需求。在奥运宣传期间，创作团队同步推出“emoji猜中国传统体育项目”“中国奥运健儿行李箱”、“中国代表团最小参赛选手”等趣味互动内容。简洁趣味的图形化游戏设计，降低文化理解门槛；运动员们被赋予抽象昵称、表情包式再创作，成为社交语境中真实可感的情绪锚点。体育精神也在点赞、评论、二创视频的流动中，被自然传递。",
      "整体来看，这种将文化内涵和互动趣味相融合的传播方式，不仅提升了正能量内容的亲和力和传播力，更在国际社交平台上打造了沉浸式的情境体验，促进了不同文化背景用户对体育精神及其积极价值的共鸣和认同。",
      "四、全球共鸣与矩阵协同，推动正能量实现长效传播",
      "正能量是一种大家都能共鸣的情感。通过体育精神与青春表达的有机结合，本次策划激发了跨文化情绪共振，推动展现青年风貌、弘扬拼搏精神的正向价值观在全球社交语境中加速传播。策划上线后迅速在社交平台引发热烈反响，累计阅读量突破300万，互动量近1500次，进一步助推#ChinaInsight、#TeamChina等相关话题热度提升。内容吸引来自英国、巴西、越南、南苏丹、肯尼亚等十余国家网友积极留言，“No pain, no gain”“Well done, China”等评论层出不穷，彰显全球用户对中国体育精神的认同与共鸣。特别是在18至35岁的青年用户群体中，策划内容通过青春化呈现与轻互动设计，引发情绪共鸣和文化认同，提升了中国故事在国际传播中的感染力。",
      "传播中，平台协同发挥关键作用。依托环球网海外社媒和中文网站，形成内外联动的传播格局。TikTok垂类账号@GlamourChina专注于短视频内容制作，针对海外Z世代的兴趣和习惯，运用创新的视觉和互动形式，持续塑造充满活力且具有亲和力的青春中国形象。该账号凭借百万粉丝基础和高活跃度社群，成为连接中国故事与海外年轻受众的重要桥梁。与此同时，环球网中文网站同步推出权威报道，增强内容的深度和权威性，推动热点内容在国内外实现互动传播和长效影响。",
      "借助这一平台联动与内容协同机制，奥运等重大国际事件也被赋予了更多元的表达方式与传播路径，它不仅是一场全球关注的体育盛会，更是展示国家形象、传递文化价值的重要传播场域。Z世代作为当前国际传播格局中的活跃力量，其媒介偏好、文化习惯与表达方式，深刻影响着中国形象的呈现逻辑与认知路径。在全媒体语境下，推动奥运精神与Z世代文化同频共振，借助技术手段丰富内容表达形式，通过互动机制增强情感连接，正逐步构建起适应全球受众、富有时代气质的传播结构。以奥运为契机对话世界、以青年语言讲述中国，正成为当前国际传播中实现情感认同与价值传导的重要支点，也为塑造可信、可感、可持续的国家叙事体系提供了实践样本和理论启示。"
    ]
  },
  {
    "id": "cnpc",
    "title": "亲诚共建，@CNPC Tchad打造乍得可持续发展名片",
    "source": "2025中国企业国际形象建设案例征集活动图文类优秀案例",
    "tag": "责任传播与属地化",
    "paragraphs": [
      "一、摘要",
      "中国石油乍得公司以绿色发展和ESG责任为战略核心，积极探索“走出去”企业的可持续路径。本案例全面梳理了公司在生态修复、清洁能源替代、废弃物治理与社区建设等方面的务实实践，以及依托@CNPC Tchad社交媒体平台所形成的属地化传播经验。通过将全球议题与本地故事结合、以数据提升透明度、以文化元素增强温度，公司逐步塑造出“绿色、负责、可信赖”的企业形象，不仅赢得了乍得民众的情感共鸣，也获得国际机构与媒体的权威认同，成为中资企业海外绿色叙事的典型案例。",
      "关键词：绿色实践、社会责任、可持续发展、清洁能源",
      "二、国际形象建设背景",
      "2025年是中非合作论坛北京峰会成果落实的开局之年。立足中乍关系新定位、中非关系新篇章。中国石油乍得公司扎根非洲多年，始终秉持“真、实、亲、诚”的对非理念，以实践诠释“中非命运共同体”的价值理念，把绿色发展和履行责任作为企业发展的核心要义。在全球能源转型与可持续发展目标不断深化的背景下，中国石油乍得公司主动将绿色发展与ESG实践纳入战略布局，力求以务实行动回应气候变化挑战，推动人与自然和谐共生。",
      "作为责任叙事的重要阵地，中国石油乍得公司Facebook账号@CNPC Tchad 自建立以来就承担起对外传播的重要使命，围绕环境保护、社会责任和项目进展等展开持续发声，系统呈现企业在清洁生产、生态修复、社区共建等方面的实践探索。账号坚持以“小而美”精品账号定位，撬动属地广泛信任口碑，紧扣属地语境与受众需求，运用在地化叙事与多元化表达方式，将抽象的责任理念转化为易于理解、可感知的传播内容，打造法语区中资企业传播的属地标杆。在持续运维中，@CNPC Tchad 逐步形成了“真实可信、贴近民生、富有温度”的传播风格，既回应全球绿色议题，又传递社区故事的细腻关怀。其内容影响力已延伸至乍得及非洲多国，成为当地民众和国际社会认识中国能源企业绿色实践的重要窗口。",
      "三、以绿色议题为核心，塑造可感知的责任表达",
      "中国石油乍得公司始终把绿色发展作为企业在非洲履责的核心方向。围绕生态修复、清洁能源利用与废弃物治理，围绕“绿色发展与ESG实践”，@CNPC Tchad 的运维形成了具有前瞻性的策划思路，既对接全球绿色议题，保证传播的高度；又通过社区化叙事，赋予内容温度；同时以数据和图表强化透明度，增加公信力。三条路径相互支撑，构建起“有主线、有场景、有依据”的绿色传播框架。",
      "（一）以绿色发展为主线，彰显真实行动",
      "@CNPC Tchad 始终把生态修复和可持续发展放在社媒传播的核心位置，逐步形成长期、系统化的绿色传播策略。过去一年，账号围绕“全球可持续发展”议题，策划推出了一组聚焦环保国际纪念日的系列内容，涵盖“国际清洁能源日”“世界水日”“世界环境日”“非洲环境保护日”以及“防治荒漠化和干旱世界日”等多个重要节点。以“纪念日为锚点、环保实践为支点”，系统展现了中国石油乍得公司在清洁能源转型、生态保护和绿色发展方面的常态化努力与阶段性成果，让企业的责任担当更具可见性和传播力。",
      "在内容设计上，策划采用“议题共鸣+案例支撑”的思路，将环保问题与企业行动紧密对应，增强叙事逻辑与专业信任感。围绕环保设施建设、生物多样性保护、绿色低碳生产和节能减排等重点方向，账号持续选取具有代表性的在地案例，使受众既能理解议题的重要性，也能看到企业的具体行动与解决方案。例如，“世界地球日——守护地球色卡”视频以工厂与自然场景中的典型色彩为线索，营造人和自然共生的视觉意象，直观传递绿色发展理念；“我的上班Plog”系列则通过员工第一视角记录日常环保实践，让企业形象更生动、更可信；“数说乍得”系列利用数据可视化手法量化环保成果，以轻科普方式提升了信息的密度与传播效率。",
      "通过将全球议题与在地实践结合，并辅以多样化的内容表达，企业的绿色行动实现了从地方实践到国际话语的转化，不仅让乍得公众切身感受到绿色发展的成效，也让国际受众在共同语境下理解中国企业对生态保护的坚持。这一传播路径有效提升了企业海外品牌的可持续形象，也为中国企业在国际社交媒体平台的绿色传播探索出可借鉴的经验。",
      "（二）以社区故事为载体，传递亲诚温度",
      "@CNPC Tchad 在运营中注重把宏观的责任行动转化为与民众日常息息相关的生活场景，用鲜活的故事增强责任叙事的温度和共鸣。围绕能源生产，账号不仅呈现了首站加热炉用能替代、外输温度下调、降凝剂优化等绿色改造实践，更通过Baobab油田30套太阳能注水系统、4套高杆灯和2套CCTV系统的应用，让“清洁能源”以直观画面走进公众视野。透过照片，受众看到的不只是技术突破，而是夜晚被点亮的村落、清泉涌流的社区，以及居民生活安全感的提升。这些场景式的叙事，让能源转型的宏大命题转化为可以触摸和感受的真实日常。",
      "在此基础上，账号还将责任实践与文化表达结合，推出“四季交响·乍得的节气故事”系列策划。以中国传统二十四节气为创意框架，叙事分为“守护的冬季”“希望的春季”“繁盛的夏季”等篇章，用节气意象串联企业在基础设施升级、生态修复、社区清洁水项目中的真实行动。视觉包装上，节气元素与中国石油LOGO宝石花结合，打造出既有辨识度又具文化温度的传播符号；叙事层面，则通过“极端天气下的能源守护”“原生植被恢复的新绿”“清泉流淌的社区欢笑”等细节镜头，展现中国石油对人与自然和谐共生的理解与实践。",
      "这一系列内容既具节点性又有延续性，不仅实现了对全球可持续发展议题的积极回应，也进一步拓展了中国石油乍得公司在本地乃至非洲语境中的品牌影响力。通过社区化叙事与文化化表达的结合，账号成功把“亲诚”理念落在民众可感可见的日常中，让责任故事兼具专业厚度与温情底色。",
      "四、汇聚公众共鸣与权威认同，塑造多维度传播价值",
      "@CNPC Tchad 围绕绿色发展的持续发布，逐渐汇聚成多层次、多维度的成效。从属地到区域，从数据到社会舆论，从普通公众到权威机构，绿色行动的影响力不断延展和深化。账号既以扎实的数据展现生态修复与民生改善的实际成果，也赢得了社会情感层面的广泛共鸣，并在乍得主流媒体与公共机构的参与下形成了权威认同。在这种多方互动和共同见证中，企业责任实践的价值被放大，逐步凝聚成推动属地发展与区域合作的重要力量。",
      "（一）绿色传播形成鲜明印记",
      "过去一年，@CNPC Tchad 已成长为乍得最具影响力的企业社交媒体账号之一。从“共鸣力”到“破圈力”，账号通过真挚故事和鲜活影像记录中非携手共建的“绿色发展引擎”。运维团队针对乍得属地持续输出高质量内容，多条推文突破十万阅读量。无论是社区清泉涌流的喜悦、非洲青年巴度的成长故事，还是点亮希望的上中下游一体化石油工业体系，这些具体而生动的故事，都通过海外社媒的窗口，真实展现了乍得民众在现代化进程中的获得感与幸福感。",
      "其中，生态修复、清洁能源和社区供水等内容在乍得备受关注。账号评论区和转发中频繁出现“可持续”“绿色发展”“环境保护”“责任”等关键词，显示出账号在国际可持续发展议题中的强大带动力。更值得关注的是，这些内容不仅在乍得本地引发热议，还带动#DéveloppementDurable（可持续发展）等话题在法语语境下的活跃传播，并进一步扩散至刚果共和国、喀麦隆、尼日利亚等周边国家，显著提升了中国石油乍得公司的区域影响力与国际议题话语权。",
      "（二）社区共建内容获得高度认同",
      "绿色议题的持续输出不仅带来了声量，更在属地社会引发了情感共鸣。公众的留言从“油田废物处理中心有效保障了环境保护”，到“环保团队值得真挚祝贺”，再到“这是中乍合作的典范”，展现出从工程治理到合作发展层层递进的认同逻辑。在生态修复、清洁替代、供水改善等项目内容的呈现中，网民自发表达了对环境修复和技术创新的肯定，不仅认可了企业在改善生态环境上的专业行动，也将其视为推动中乍合作、守护公共福祉的重要力量。这些声音从“技术突破”的赞许，到“民生改善”的肯定，最终凝聚为对企业“绿色、负责、可信赖”形象的集体认知，体现了责任叙事在属地舆论场中的有效落地与深度认同。",
      "更值得关注的是，这种认同感正在转化为主动守护。25年8月，乍得6.5万粉丝的人权记者Makaila N'guebla高举“绿色环保”旗帜，拍摄并发布信息不清楚的短视频，在Facebook平台发声指责公司“随意丢弃污染物”，大量乍得网友在评论区自发回应，明确指出这些桶内并非危险废物，而是电缆、铜线等可回收固体材料，已纳入《环境与社会管理计划》(PGES)进行规范回收与利用。这一理性澄清，不仅纠正了舆论场中的误解，也体现出属地公众对企业责任实践的理解与信任正在不断加深。",
      "（三）责任治理话题吸引全球伙伴关注",
      "@CNPC Tchad账号获得了高含金量主体的持续互动，为企业传播注入了权威性和社会认同。乍得公司账号吸引了来自联合国机构、政府部门、新闻媒体、知名企业和行业组织等多个维度的关注。账号朋友圈包括：联合国难民署顾问@Tapiyenan Richard、新乍得工匠协会行政秘书@Mahamat Saleh Gounoli Godi、美国驻乍得大使馆工作人员@Ali Seitchi Djiddi Adam、恩贾梅纳政府秘书处社会事务处处长@Aimé Allatessem Dingaoreda、乍得广播电视台@MRTV、乍得环境部@Ministère de l'environnement、乍得主流媒体@Alwihda Info、@Le Ndjam Times、综合性门户网站@Portail de la Renaissance等机构账号持续互动，进一步提升了账号的本地权威性与社会认同。此外，还有来自财政、石油、建筑、农业等多个行业的专业人士，如乍得税务总局官员@Blaise Alladoumbaye、几内亚农业企业家联合会会长@Mamadou Saliou Mali Diallo、Lammas国际首席执行官@LammasInternation、Benusoft公司CEO@Benard Benusoft、非洲全球性别学院（AGGA）创始人@Kassoum Coulibaly等表示关注与支持，展现了企业在乍得各个领域的广泛号召力。",
      "五、从属地到国际话语，走向“长效化”的责任表达",
      "@CNPC Tchad 立足乍得项目的实际行动，把绿色发展与ESG理念系统转化为可见、可信、可感的成果，实现了从“线下履责”到“线上表达”的有机统一。通过系统化的议题布局、贴近属地的叙事方式与直观透明的数据呈现，企业不仅展示了植树造林、取土坑修复、清洁能源替代、废弃物治理、供水改善等实质性成绩，也逐步塑造出“绿色、负责、可信赖”的中资企业形象。这些探索证明了，绿色实践与数字化传播的深度结合，不仅提升了企业的国际表达力，也为中国企业在海外开展ESG叙事提供了可资借鉴的经验范式。",
      "展望未来，中石油乍得公司将继续坚守“真、实、亲、诚”的对非理念，把绿色发展作为长期战略主线，把ESG责任作为内容创新核心之一。一方面，持续强化生态修复、清洁能源替代和民生改善等领域的责任行动；另一方面，进一步拓展跨平台、多语种的传播矩阵，提升互动机制与公众参与度。通过不断深化“真实行动”的内涵与“共同发展”的价值指向，@CNPC Tchad 将进一步拓展绿色叙事的影响力，让责任声音更清晰可感。"
    ]
  },
  {
    "id": "tianjin",
    "title": "权威发布！天津跻身海外影响力年度城市Top10",
    "source": "发布于“天津文旅”官方公众号",
    "tag": "城市品牌传播",
    "paragraphs": [
      "近日，2025年度《中国城市国际传播影响力报告》在北京发布，天津成功入选“海外影响力年度城市”Top10。这是对天津不断拓展国际表达、讲好城市故事的充分肯定。",
      "报告指出，2024年，天津围绕“智慧强港、津通四海”的定位，在“人工智能”“高端制造”“港口开放”等领域持续发力，不仅成为中国工业转型的示范样板，也为海外观察中国式现代化提供了天津视角。天津港开通中国–尼加拉瓜首条海上商业航线，新加坡国家发展部长访问天津，世界智能产业博览会、中国（天津）国际装备与制造业博览会等系列国际展会成功举办等等，海外媒体纷纷聚焦，一座兼具产业厚度与全球连通力的国际港口城市，正加速走向世界舞台中央。",
      "一、@WowTianjin：让世界看见有温度的天津",
      "为进一步拓展城市海外传播路径，天津市文化和旅游局设立海外社交媒体账号 @WowTianjin，致力于通过图文、海报、短视频等形式，向全球用户呈现真实、生动、多元的天津形象。账号聚焦文化旅游、城市生活、国际交流等板块，用可感知、有温度的方式讲述天津故事，持续提升城市的国际吸引力与认同感。目前，@WowTianjin 已覆盖 Facebook、Instagram、X、TikTok、YouTube 等主流海外平台，累计粉丝量突破 14 万，覆盖美国、法国、印度、巴西、菲律宾等 80 多个国家和地区，粉丝以18–34 岁的 Z 世代用户为主。其中，Facebook注重图文资讯，TikTok突出短视频传播，成为账号国际传播的主要阵地。",
      "账号“海外朋友圈”也在不断扩大，世界城地组织亚太旅游委员会、中国驻美国大使馆、国家民族事务委员会、法国吉美博物馆等权威账号纷纷关注互动，真实反映出天津在国际视野中的关注度与好感度持续上扬。",
      "二、亮点策划层层推进，让城市故事更“出圈”",
      "为增强天津的国际表达力，@WowTianjin 持续打磨优质内容策划，围绕热点议题与重大活动讲好城市故事。从多元文化交流到本地生活气息，通过一系列更具温度与话题性的栏目设计，让天津在海外社交平台“可见、可感、可亲近”。",
      "1. 借主场活动之势，强化国际传播窗口属性",
      "@WowTianjin借助天津承办国际少儿艺术节、“汉语桥”中文比赛、中国文化旅游产业博览会等主场活动的契机，打造#TianjinKidFest专栏、“当天津遇上汉语桥”系列海报、《CITE看天津》栏目等，展现多元文化交流场景与国际青年视角下的城市魅力。通过活动现场直击、官方资源联动和高质量视觉输出，多维塑造天津“开放包容、友好可亲”的国际城市形象，有效扩大海外话语权。系列内容总阅读量超80万次，成为天津“借势出圈”的传播范例。",
      "2. 对接“China Travel”热潮，拓展文化影响半径",
      "@WowTianjin顺应“China Travel”热潮，以“生活感”“文化味”为切口，深度呈现天津烟火日常与非遗魅力。从街头美食（糖墩儿、锅巴菜、煎饼果子）到古镇人文（蓟州古建、宁河村落、杨柳青古镇），以视觉语言唤起海外年轻群体的情感共鸣，推动城市文化“走出去”。相关内容总阅读量超30万次，并引发大量用户评论分享，成为“文化天津”走进海外社交圈的关键突破口。",
      "3. 推出实用型策划，塑造“友好型”国际城市形象",
      "@WowTianjin围绕国际会议与政策利好等重要传播节点，持续推进实用型策划，推出内容清晰、表达友好的指南海报，为来津外籍人士提供精准的信息支持。夏季达沃斯论坛期间，账号策划发布“津‘友’小贴士”系列海报，从天气、交通、美食等多个维度，贴近国际嘉宾需求，展现天津开放包容、细致周到的接待氛围；同期推出的夜景短视频与城市氛围图文，也以丰富的视觉表达营造出迎接全球盛会的城市风貌。",
      "与此同时，账号围绕“240小时过境免签”“离境退税，即买即退”等政策，推出天津入境游“外Fun指南”系列海报，通过图解方式清晰呈现办理流程与实用信息，助力海外游客丝滑入境。系列内容阅读量近96万次，在提升传播实用性与亲和力的同时，进一步丰富了天津“友好型”国际城市形象的表达层次。",
      "三、海外热评不断，这些内容最“圈粉”",
      "@WowTianjin 围绕城市文化与生活风貌持续推出高质量内容，多个图文与短视频内容在海外社交平台实现高频曝光与情感共鸣，吸引海内外用户持续关注。",
      "图文内容中，围绕天津城市空间更新与文化氛围打造的内容表现亮眼。其中，“百年小洋楼安里甘艺术中心”帖文以历史建筑焕新为艺术空间为视角切入，展现城市在文化传承与时代活化中的探索，阅读量达15万次；“天津天后宫”帖文以导游词视角切入，用通俗、生动的语言介绍这座中国北方现存最早的妈祖庙，讲述妈祖文化的历史渊源与文化内涵，阅读量达6万多。",
      "视频内容方面，围绕“世界海洋日”推出的“拼出天津海洋生命力”短视频借助互动截图玩法，将生态理念与城市形象创意融合，收获超 30万次浏览，在轻松氛围中有效传播绿色理念；“夜幕下的天津”系列则通过镜头语言呈现城市灯光与生活节奏，捕捉城市夜色中交织的文化气息与活力脉动，累计播放量超过 25 万次。这些内容以真实温暖的视角，勾勒出天津的文化魅力与生活质感，也让更多海外用户感受到一座城市的亲和力与自信。",
      "凭借真实、多元、有温度的内容表达，天津正以更加立体和可亲的城市形象，跨越语言文化壁垒，走进全球用户的视野与情感共鸣中。@WowTianjin 凭借对国际传播趋势的敏锐把握和本地文化资源的深度挖掘，不断拓宽海外传播广度、丰富城市叙事维度。从贴近国际关切的实用信息策划，到兼具美学质感与文化厚度的创意内容，账号持续提升天津在海外平台的话题度、影响力与好感度。面向未来，@WowTianjin 将坚持内容创意驱动与传播场景优化并重，讲好天津故事，释放文化势能，让更多海外用户看见天津、理解天津、爱上天津。"
    ]
  }
];

const projects = {
  study: {
    title: "留学中国",
    subtitle: "国际教育传播",
    cover: assets.studyCtg,
    intro: "面向高校、城市与企业资源，形成线上预热与多主体联动的国际教育传播项目。",
    background: "项目需要把留学中国、城市体验、企业实践与高校交流转译为海外受众容易理解的视觉内容，并在社媒语境中保持系列识别度。",
    role: ["内容策划与视觉方向梳理", "多主体海报系统设计", "线上互动内容与传播节奏规划"],
    results: "形成高校、企业、城市三条内容线，共 50 件视觉与互动素材，适合作为国际教育传播项目案例展示。",
    gallery: [assets.studyBit, assets.studyTju, assets.studyCtg],
  },
  tianjin: {
    title: "天津文旅",
    subtitle: "城市品牌与文旅推广",
    cover: assets.tianjinEye,
    intro: "围绕天津城市文化、文旅场景和国际活动节点，建立面向海外用户的城市视觉叙事。",
    background: "城市国际传播需要兼顾识别度、生活感与文化厚度，让海外用户快速感知天津的城市气质。",
    role: ["城市文旅视觉系列策划", "24节气与海河之夜主题设计", "国际活动传播素材创意"],
    results: "形成 34 件城市传播视觉，覆盖 24 节气、海河之夜主题、上合峰会策划海报等内容。",
    gallery: [assets.tianjinLichun, assets.tianjinXiazhi, assets.tianjinBridge],
  },
  cnpc: {
    title: "中国石油乍得",
    subtitle: "责任传播与属地化叙事",
    cover: assets.cnpcChunfen,
    intro: "以责任传播、社区共建和本地化叙事为核心，探索中资企业在海外社媒中的责任表达。",
    background: "企业海外传播既要回应全球绿色议题，也要让属地公众看到真实、具体、可感的行动。",
    role: ["责任议题内容策划", "24节气跨文化视觉转译", "法语区属地传播案例复盘"],
    results: "形成 24 节气系列与 7 件本地化策划视觉，并沉淀为完整的企业传播案例文章。",
    gallery: [assets.cnpcChunfen, assets.cnpcGuyu, assets.cnpcCharity],
  },
};

function sectionHead(label, title, intro) {
  return `
    <div class="section-head">
      <div>
        <p class="section-label">${label}</p>
        <h2 class="section-title">${title}</h2>
      </div>
      <p class="section-intro">${intro}</p>
    </div>
  `;
}

function visualGrid(items = visualWorks) {
  return `
    <div class="visual-grid">
      ${items
        .map(
          (item) => `
            <article class="visual-card" data-category="${item.category}">
              <img src="${item.image}" alt="${item.title}" />
              <div>
                <p class="card-title">${item.title}</p>
                <p class="card-meta">${item.meta}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function videoGrid(items = videos) {
  return `
    <div class="video-grid">
      ${items
        .map(
          (item) => `
            <article class="video-card" data-category="${item.category}">
              <div class="video-poster"><span class="play-mark">▶</span></div>
              <div>
                <p class="card-title">${item.title}</p>
                <p class="card-meta">${item.meta}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function writingList() {
  return `
    <div class="writing-list">
      ${writings
        .map(
          (item) => `
            <a class="article-row" href="#article/${item.id}">
              <h3>${item.title}</h3>
              <p>${item.paragraphs[0]}</p>
              <span class="arrow">${item.tag}</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function contactBlock() {
  return `
    <section class="section contact-band" id="contact-section">
      <h2 class="contact-title">联系<br />方式</h2>
      <div class="contact-info">
        <p class="section-label">联系方式</p>
        <a href="mailto:your-email@example.com">邮箱待补充</a>
        <div class="qr-placeholder">微信二维码</div>
        <p>适合国际传播、品牌叙事、海外社媒和智能创意相关岗位。</p>
      </div>
    </section>
  `;
}

function visualClientBlock(image = assets.logoTianjinWow, label = "天津文旅@Wow Tianjin", alt = "天津文旅 logo") {
  return `
    <div class="visual-client">
      <img src="${image}" alt="${alt}" />
      <span>${label}</span>
    </div>
  `;
}

function posterCards(items, label) {
  return items
    .map(
      (item) => `
        <div class="poster-card" aria-label="${item.title}">
          <img src="${item.image}" alt="${item.title}${label}" />
        </div>
      `
    )
    .join("");
}

function arcPosterCards(items, label) {
  return items
    .map(
      (item, index) => `
        <div class="arc-card" aria-label="${item.title}" style="--arc-index: ${index};">
          <img src="${item.image}" alt="${item.title}${label}" />
        </div>
      `
    )
    .join("");
}

function inertiaPosterCards(items, label) {
  return items
    .map(
      (item, index) => `
        <button class="inertia-card" type="button" data-inertia-card aria-label="${item.title}" style="--inertia-index: ${index};">
          <img src="${item.image}" alt="${item.title}${label}" />
        </button>
      `
    )
    .join("");
}

function videoSlideCards(items) {
  return items
    .map(
      (item, index) => `
        <article class="video-slide" id="study-video-${index + 1}">
          <video class="feature-video" controls preload="auto" playsinline data-video-autoposter src="${item.src}"></video>
          <h4>${item.title}</h4>
        </article>
      `
    )
    .join("");
}

function youthVideoCards(items) {
  return items
    .map(
      (item, index) => `
        <article class="youth-video-card" data-youth-card>
          <video class="youth-video" controls preload="auto" playsinline data-video-autoposter src="${item.src}"></video>
          <h4>${item.title}</h4>
        </article>
      `
    )
    .join("");
}

function workflowSection() {
  return `
    <section class="workflow-section" id="workflow" aria-label="从需求到上线">
      <div class="workflow-grid">
        ${workflowSteps
          .map(
            (step) => `
              <article class="workflow-card workflow-tone-${step.number}" data-workflow-item>
                <button class="workflow-card-toggle" type="button" data-workflow-card aria-expanded="false">
                  <span class="workflow-number">${step.number}</span>
                  <span class="workflow-title">${step.title}</span>
                  <span class="workflow-summary">${step.summary}</span>
                  <span class="workflow-output">${step.output}</span>
                  <span class="workflow-more" aria-hidden="true">＋</span>
                </button>
                <div class="workflow-detail" hidden>
                  <p>${step.judge}</p>
                  <p>${step.action}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function homePage() {
  return `
    <div class="page home-page">
      <section class="offgrid-hero" aria-label="田家荣首页">
        <figure class="poster-hero">
          <img src="${assets.heroMap}" alt="抽象地图界面背景" />
          <figcaption>
            <span>传播策略</span>
            <span>视觉叙事</span>
          </figcaption>
          <div class="poster-bottom-labels" aria-hidden="true">
            <span>AI创意</span>
            <span>热点策划</span>
          </div>
        </figure>
        <h2 class="hero-metal-title" data-title="PORTFOLIO">PORTFOLIO</h2>
      </section>

      <section class="profile-summary-section" id="profile" aria-label="个人信息">
        <aside class="profile-stats-panel" aria-label="关键成果">
          <div><strong>1960万+</strong><span>单条视频播放量</span></div>
          <div><strong>20万+</strong><span>年度涨粉</span></div>
          <div><strong>6000万+</strong><span>项目传播量</span></div>
          <div><strong>53%</strong><span>推广成本降低</span></div>
        </aside>
        <div class="profile-copy">
          <div class="profile-heading-row">
            <h2>把内容、视觉与技术转译成有效传播。</h2>
            <img class="profile-avatar" src="${assets.avatar}" alt="田家荣头像" />
          </div>
          <div class="profile-detail-grid">
            <div class="profile-body">
              <p>
                关注海外社交媒体、品牌表达与AI创意实践，拥有国际传播、企业出海、城市文旅及活动赛事项目经验。长期从事内容策划、视觉创意、短视频制作与海外社媒运营工作，擅长结合内容、视觉与技术手段，将复杂信息转化为更具吸引力和跨文化理解力的表达方式。
              </p>
              <p>
                在传播实践中，我越来越意识到，视觉、视频、AI工具都只是表达的载体。真正决定传播效果的，往往是内容是否准确、真诚且符合受众语境。好的形式让人停留，而好的内容让人愿意继续看下去。
              </p>
            </div>
            <dl class="profile-tools">
              <div><dt>AI工具</dt><dd>Codex、Gemini、ChatGPT、Runway、即梦、可灵</dd></div>
              <div><dt>运营平台</dt><dd>TikTok、Facebook、X、YouTube、Instagram、小红书、抖音、公众号</dd></div>
              <div><dt>Office工具</dt><dd>Word、Excel</dd></div>
              <div><dt>设计及剪辑工具</dt><dd>Photoshop、Adobe Illustrator、Canva、剪映</dd></div>
            </dl>
          </div>
        </div>
      </section>

      ${workflowSection()}

      <section class="project-index" id="projects" aria-label="精选项目">
        <div class="project-kicker">
          <h2>精选<br />项目</h2>
          <time datetime="2024-07/2026-04">202407-202604</time>
        </div>
        <div class="project-stack">
          <a class="index-project" href="#visual-feature">
            <span>天津文旅@Wow Tianjin</span>
            <em>城市品牌与文旅IP打造</em>
            <img src="${assets.logoTianjinWow}" alt="天津文旅 logo" />
          </a>
          <a class="index-project" href="#olympic-feature">
            <span>环球网@Huanqiu.com</span>
            <em>AIGC叙事重点策划</em>
            <img src="${assets.logoHuanqiu}" alt="环球网 logo" />
          </a>
          <a class="index-project" href="#study-feature">
            <span>留学中国@Study in China</span>
            <em>留学生短视频&征文大赛赛事传播</em>
            <img src="${assets.logoStudyChina}" alt="留学中国 logo" />
          </a>
          <a class="index-project" href="#youth-video-feature">
            <span>中国驻美使馆@Chinese Embassy in US</span>
            <em>青年主题短视频与议题传播</em>
            <img src="${assets.logoEmbassy}" alt="中国驻美使馆 logo" />
          </a>
        </div>
      </section>

      <section class="visual-strip" id="visual-feature" aria-label="视觉作品精选">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock()}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>24节气AI海报：“一期一桥，阅尽四时”</h3>
            <p>
              天津因桥而美，全市拥有数百座风格各异的桥梁，它们不仅是城市交通的重要节点，也承载着独特的历史记忆与人文气息。
              以“24节气×天津桥梁”为创意切入点，推出“一期一桥”系列节气主题海报，借助节令的自然韵律与城市景观的文化气质，打造具有天津特色的节气视觉内容。
            </p>
            <p>工具：即梦AI、ChatGPT image、Photoshop</p>
          </div>
          <div class="poster-rail" aria-label="24节气海报横向滑动">
            ${posterCards(solarTermPosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip poster-series" id="sco-feature" aria-label="上合峰会海报策划">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock()}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>上合峰会海报策划：“相约天津，共赴未来”</h3>
            <p>
              以“天津发出来自东道主的国际邀请”为核心创意，海报模拟一张城市邀请函，视觉上融合请柬元素与城市地标，突出“历史文化”“城市生活”“会场风貌”“国际开放”四大主题，形成统一视觉风格的城市形象展示，为SCO峰会营造国际氛围，讲好“天津故事”。
            </p>
            <p>工具：Photoshop</p>
          </div>
          <div class="poster-rail poster-rail-four" aria-label="上合峰会海报横向展示">
            ${posterCards(scoPosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip poster-series" id="haihe-feature" aria-label="海河之夜海报策划">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock()}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>“海河之夜”海报策划：“夜嘛？Come to Tianjin”</h3>
            <p>
              以天津地标建筑与城市夜景为线索，打造“海河之夜”系列国际传播内容。通过时尚化视觉表达，展现天津历史底蕴与现代活力交融的城市气质。项目以“夜嘛？来天津”为灵感，延展出英文传播口号“Come to Tianjin!”，向全球受众发出一场关于城市、夜色与探索的邀请。
            </p>
            <p>工具：Photoshop</p>
          </div>
          <div class="poster-rail poster-rail-five" aria-label="海河之夜海报横向展示">
            ${posterCards(haihePosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip poster-series olympic-series" id="olympic-feature" aria-label="奥运赛场的运动青年们 AI策划">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock(assets.logoHuanqiu, "环球网@Huanqiu.com", "环球网 logo")}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>“奥运赛场的运动青年们” AI策划</h3>
            <p>
              在2024年巴黎奥运会闭幕式与国际青年节交汇的全球性文化场域中，以“技术解码体育精神，数字重塑青春叙事”为核心理念，推出《奥运赛场的运动青年们》系列AI作品，通过即梦AI文生图技术，运用Z世代熟悉的二次元表达语系，塑造兼具时代精神与青春特质的10位运动员3D手办，展现荣耀时刻。Facebook平台观看量达2.4万次，收获1426次互动，成功引发全球网友对中国奥运青年的广泛关注与热议。
            </p>
            <p>工具：即梦AI</p>
          </div>
          <div class="poster-rail poster-rail-study" aria-label="奥运AI海报横向滑动">
            ${posterCards(olympicPosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip poster-series spring-series" id="spring-feature" aria-label="AI剪纸春节海报策划">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock(assets.logoHuanqiu, "环球网@Huanqiu.com", "环球网 logo")}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>“春节韵·福运同行” AI剪纸系列策划海报</h3>
            <p>
              2025年作为申遗成功后的首个春节，为环球网账号策划了16期AI剪纸风系列海报，展现除夕到元宵节的中国春节习俗文化。
            </p>
            <p>工具：堆友AI、即梦AI、Canva</p>
          </div>
          <div class="poster-rail poster-rail-four" aria-label="AI剪纸春节海报横向展示">
            ${posterCards(aiPaperCutPosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip study-series" id="study-feature" aria-label="留学中国三线联动海外社媒策划">
        <div class="visual-kicker">
          <h2>视觉<br />作品</h2>
          ${visualClientBlock(assets.logoStudyChina, "留学中国@Study in China", "留学中国 logo")}
        </div>
        <div class="visual-showcase">
          <div class="visual-copy">
            <h3>“声动中国·全球接力” 三线联动海外社媒策划</h3>
            <p>
              教育部留学服务中心2025“我与中国的美丽邂逅”短视频暨征文大赛传播联动策划：“声动中国·全球接力”旨在通过海外社交媒体平台，搭建一个由全球高校、驻外使馆及文化机构、国际企业共同参与的内容共创行动，以#MyBeautifulEncounterwithChina话题为主轴，鼓励来自不同文化背景的青年以真实的经历、友好的视角、轻快的表达，分享他们与中国的美好邂逅。累计推动50次官方账号联动传播，带动赛事传播声量持续提升。
            </p>
          </div>
          <div class="poster-rail poster-rail-study" aria-label="留学中国海报横向滑动">
            ${posterCards(studyCampaignPosters, "海报")}
          </div>
        </div>
      </section>

      <section class="visual-strip video-feature" id="video-feature" aria-label="一句话形容你眼中的中国视频展示">
        <div class="visual-kicker">
          <h2>视频<br />作品</h2>
          ${visualClientBlock(assets.logoStudyChina, "留学中国@Study in China", "留学中国 logo")}
        </div>
        <div class="video-feature-main">
          <h3>“一句话形容你眼中的中国” 海外社媒策划</h3>
          <div class="video-feature-layout">
            <div class="video-feature-grid" aria-label="留学中国互动视频展示">
              ${videoSlideCards(videoWarmupItems)}
            </div>
            <div class="video-feature-text">
              <p>
                教育部留学服务中心2025“我与中国的美丽邂逅”短视频暨征文大赛传播策划：策划“留学中国”海外社媒互动活动“一句话形容你眼中的中国”，以“传统、求知、创新、共生”四个维度引导海外用户参与表达。结合“截图挑战”“找茬”“抽签互动”等社交媒体流行玩法，将文化传播转化为轻量化互动体验，让受众在参与中自然感知中国的文化与当代形象。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="visual-strip youth-video-section" id="youth-video-feature" aria-label="五四青年节中国青年专题系列视频">
        <div class="visual-kicker">
          <h2>视频<br />作品</h2>
          ${visualClientBlock(assets.logoEmbassy, "中国驻美使馆@Chinese Embassy in US", "中国驻美使馆 logo")}
        </div>
        <div class="youth-video-main">
          <h3>五四青年节“中国青年”专题系列视频</h3>
          <div class="youth-video-carousel" data-youth-carousel aria-label="中国青年专题系列视频横向滑动">
            <button class="youth-video-arrow youth-video-arrow-prev" type="button" data-youth-prev aria-label="上一个视频">←</button>
            <div class="youth-video-track" data-youth-track>
              ${youthVideoCards(chineseYouthVideos)}
            </div>
            <button class="youth-video-arrow youth-video-arrow-next" type="button" data-youth-next aria-label="下一个视频">→</button>
          </div>
        </div>
      </section>

      <section class="writing-index writing-feature" id="writing-feature" aria-label="稿件作品精选">
        <div class="writing-feature-head">
          <h2>稿件<br />作品</h2>
          <img src="${assets.writingAvatar}" alt="稿件作品头像" />
        </div>
        <div class="writing-feature-cards">
          ${writings
            .map(
              (item) => `
                <a href="#article/${item.id}" class="writing-feature-card">
                  <strong>${item.title}</strong>
                  <span>${item.source}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="home-contact" id="contact" aria-label="联系方式">
        <h2>联系<br />方式</h2>
        <div class="contact-card">
          <div class="contact-lines">
            <a href="mailto:1098543226@qq.com"><span>📮</span>1098543226@qq.com</a>
            <a href="tel:15535411579"><span>📞</span>15535411579</a>
          </div>
          <img src="${assets.contactQr}" alt="微信二维码" />
        </div>
      </section>
    </div>
  `;
}

function profilePage() {
  return homePage();
}

function listingPage(type) {
  const map = {
    visual: {
      label: "视觉作品",
      title: "视觉<br />作品",
      intro: "筛选围绕国际传播、品牌传播、智能创意与节庆专题展开。",
      filters: ["全部", "国际传播", "品牌传播", "智能创意", "节庆专题"],
      content: visualGrid([...visualWorks, { title: "智能剪纸除夕", meta: "节庆传播视觉", category: "节庆专题", image: assets.aiEve }]),
    },
    video: {
      label: "视频作品",
      title: "视频<br />作品",
      intro: "视频保持16:9比例，覆盖国际传播视频、智能视频与短视频剪辑。",
      filters: ["全部", "国际传播视频", "智能视频", "短视频剪辑"],
      content: videoGrid(),
    },
    writing: {
      label: "稿件作品",
      title: "稿件<br />作品",
      intro: "保持极简文章列表，不做博客风，只展示传播案例与内容复盘。",
      filters: [],
      content: writingList(),
    },
  };
  const page = map[type];
  return `
    <div class="page">
      <section class="section page-hero">
        <p class="section-label">${page.label}</p>
        <h1 class="page-title">${page.title}</h1>
        <p class="section-intro">${page.intro}</p>
      </section>
      <section class="section compact">
        ${
          page.filters.length
            ? `<div class="filter-tabs">${page.filters.map((filter, index) => `<button class="${index === 0 ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div>`
            : ""
        }
        ${page.content}
      </section>
    </div>
  `;
}

function contactPage() {
  return `<div class="page">${contactBlock()}</div>`;
}

function projectPage(id) {
  const project = projects[id] || projects.study;
  return `
    <div class="page">
      <section class="section detail-hero">
        <div>
          <p class="section-label">项目详情</p>
          <h1 class="detail-title">${project.title}</h1>
          <p class="detail-subtitle">${project.subtitle}</p>
          <p class="section-intro">${project.intro}</p>
        </div>
        <img src="${project.cover}" alt="${project.title}" />
      </section>
      <section class="section compact">
        <div class="detail-section">
          <h2>项目背景</h2>
          <p>${project.background}</p>
        </div>
        <div class="detail-section">
          <h2>我的职责</h2>
          <ul>${project.role.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="detail-section">
          <h2>代表作品</h2>
          <div class="mini-gallery">${project.gallery.map((image) => `<img src="${image}" alt="${project.title}代表作品" />`).join("")}</div>
        </div>
        <div class="detail-section">
          <h2>传播成果</h2>
          <p>${project.results}</p>
        </div>
        <div class="detail-section">
          <h2>相关作品推荐</h2>
          <p><a href="#visual-feature">查看视觉作品</a> / <a href="#video-feature">查看视频作品</a> / <a href="#writing-feature">查看稿件作品</a></p>
        </div>
      </section>
    </div>
  `;
}

function articlePage(id) {
  const article = writings.find((item) => item.id === id) || writings[0];
  return `
    <div class="page article-page">
      <section class="article-hero">
        <a class="article-back" href="#writing-feature" aria-label="返回稿件作品">←</a>
        <h1>${article.title}</h1>
      </section>
      <article class="article-body">
        ${article.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </article>
    </div>
  `;
}

function applyFilters() {
  document.querySelectorAll(".filter-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      button.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      document.querySelectorAll("[data-category]").forEach((card) => {
        card.style.display = filter === "全部" || card.dataset.category === filter ? "" : "none";
      });
    });
  });
}

function initWorkflowCards() {
  document.querySelectorAll("[data-workflow-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-workflow-item]");
      const detail = card?.querySelector(".workflow-detail");
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll("[data-workflow-item]").forEach((item) => {
        item.classList.remove("is-open");
        const itemButton = item.querySelector("[data-workflow-card]");
        itemButton?.setAttribute("aria-expanded", "false");
        const icon = item.querySelector(".workflow-more");
        if (icon) icon.textContent = "＋";
        const itemDetail = item.querySelector(".workflow-detail");
        if (itemDetail) itemDetail.hidden = true;
      });
      if (wasOpen) return;
      button.setAttribute("aria-expanded", "true");
      button.querySelector(".workflow-more").textContent = "×";
      card?.classList.add("is-open");
      if (detail) detail.hidden = false;
    });
  });
}

function initPosterRail() {
  document.querySelectorAll(".poster-rail, .video-slider-track").forEach((rail) => {
    rail.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        if (maxScroll <= 0) return;
        const next = Math.min(Math.max(rail.scrollLeft + event.deltaY, 0), maxScroll);
        if (next !== rail.scrollLeft) {
          event.preventDefault();
          rail.scrollLeft = next;
        }
      },
      { passive: false }
    );
  });
}

function initInertiaCarousel() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-inertia-carousel]").forEach((carousel) => {
    const cards = Array.from(carousel.querySelectorAll("[data-inertia-card]"));
    if (!cards.length) return;

    let progress = 0;
    let targetProgress = 0;
    let isPointerDown = false;
    let lastX = 0;
    let frame = 0;

    const wrapOffset = (value, count) => {
      return ((((value + count / 2) % count) + count) % count) - count / 2;
    };

    const renderCards = () => {
      const count = cards.length;
      const cardWidth = cards[0]?.offsetWidth || 260;
      const spacing = Math.min(Math.max(cardWidth * 0.86, 168), 286);
      progress = ((progress % count) + count) % count;
      targetProgress = ((targetProgress % count) + count) % count;

      cards.forEach((card, index) => {
        const offset = wrapOffset(index - progress, count);
        const distance = Math.abs(offset);
        const visible = distance <= 2.8;
        const arcY = Math.pow(distance, 2) * 18;
        const scale = Math.max(0.74, 1 - distance * 0.075);
        const opacity = visible ? Math.max(0.34, 1 - distance * 0.2) : 0;
        const tilt = offset * -2.8;

        card.style.setProperty("--tx", `${offset * spacing}px`);
        card.style.setProperty("--ty", `${arcY}px`);
        card.style.setProperty("--rz", `${tilt}deg`);
        card.style.setProperty("--scale", scale.toFixed(3));
        card.style.setProperty("--opacity", opacity.toFixed(3));
        card.style.zIndex = `${100 - Math.round(distance * 10)}`;
        card.classList.toggle("is-active", distance < 0.56);
        card.setAttribute("aria-hidden", visible ? "false" : "true");
      });
    };

    const animate = () => {
      if (!document.body.contains(carousel)) return;
      if (!prefersReducedMotion) progress += wrapOffset(targetProgress - progress, cards.length) * 0.105;
      else progress = targetProgress;
      renderCards();
      frame = window.requestAnimationFrame(animate);
    };

    carousel.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        event.preventDefault();
        targetProgress += event.deltaY * 0.0024;
      },
      { passive: false }
    );

    carousel.addEventListener("pointerdown", (event) => {
      isPointerDown = true;
      lastX = event.clientX;
      carousel.setPointerCapture?.(event.pointerId);
      carousel.classList.add("is-dragging");
    });

    carousel.addEventListener("pointermove", (event) => {
      if (!isPointerDown) return;
      const delta = event.clientX - lastX;
      const spacing = Math.min(Math.max((carousel.clientWidth || 960) * 0.19, 126), 238);
      targetProgress -= delta / spacing;
      progress = targetProgress;
      lastX = event.clientX;
      renderCards();
    });

    const release = (event) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      carousel.releasePointerCapture?.(event.pointerId);
      carousel.classList.remove("is-dragging");
    };

    carousel.addEventListener("pointerup", release);
    carousel.addEventListener("pointercancel", release);
    window.addEventListener("resize", renderCards, { passive: true });
    renderCards();
    if (frame) window.cancelAnimationFrame(frame);
    animate();
  });
}

function initVideoCarousel() {
  document.querySelectorAll(".video-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".video-slider-track");
    const slides = Array.from(carousel.querySelectorAll(".video-slide"));
    const dots = Array.from(carousel.querySelectorAll("[data-video-dot]"));
    const previous = carousel.querySelector("[data-video-prev]");
    const next = carousel.querySelector("[data-video-next]");
    const counter = carousel.querySelector("[data-video-counter]");
    const players = Array.from(carousel.querySelectorAll("video"));
    let ticking = false;

    if (!track || !slides.length) return;

    const pauseInactiveVideos = (activeVideo = null) => {
      players.forEach((video) => {
        if (video !== activeVideo) video.pause();
      });
    };

    const activeIndex = () => {
      const centers = slides.map((slide) => Math.abs(slide.offsetLeft - track.scrollLeft));
      return centers.indexOf(Math.min(...centers));
    };

    const setActiveDot = () => {
      const current = activeIndex();
      dots.forEach((dot, index) => dot.classList.toggle("is-active", index === current));
      dots.forEach((dot, index) => dot.setAttribute("aria-current", index === current ? "true" : "false"));
      if (counter) counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    const goTo = (index) => {
      const safeIndex = (index + slides.length) % slides.length;
      pauseInactiveVideos();
      track.scrollTo({ left: slides[safeIndex].offsetLeft, behavior: "smooth" });
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === safeIndex));
      dots.forEach((dot, dotIndex) => dot.setAttribute("aria-current", dotIndex === safeIndex ? "true" : "false"));
      if (counter) counter.textContent = `${String(safeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    previous?.addEventListener("click", () => goTo(activeIndex() - 1));
    next?.addEventListener("click", () => goTo(activeIndex() + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => goTo(index)));
    players.forEach((video) => video.addEventListener("play", () => pauseInactiveVideos(video)));
    track.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setActiveDot();
        ticking = false;
      });
    });
    setActiveDot();
  });
}

function initYouthVideoCarousel() {
  document.querySelectorAll("[data-youth-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-youth-track]");
    const cards = Array.from(carousel.querySelectorAll("[data-youth-card]"));
    const previous = carousel.querySelector("[data-youth-prev]");
    const next = carousel.querySelector("[data-youth-next]");
    const players = Array.from(carousel.querySelectorAll("video"));
    let activeIndex = Math.min(1, cards.length - 1);

    if (!track || !cards.length) return;

    const renderCards = () => {
      cards.forEach((card, index) => {
        const offset = ((((index - activeIndex) % cards.length) + cards.length + Math.floor(cards.length / 2)) % cards.length) - Math.floor(cards.length / 2);
        const distance = Math.abs(offset);
        card.style.setProperty("--youth-offset", offset);
        card.style.setProperty("--youth-scale", distance === 0 ? 1.08 : 0.82);
        card.style.setProperty("--youth-opacity", distance > 1 ? 0 : Math.max(0.58, 1 - distance * 0.24));
        card.style.zIndex = `${20 - distance}`;
        card.classList.toggle("is-active", index === activeIndex);
        card.setAttribute("aria-hidden", distance > 1 ? "true" : "false");
      });
    };

    const goTo = (index) => {
      players.forEach((video) => video.pause());
      activeIndex = (index + cards.length) % cards.length;
      renderCards();
    };

    previous?.addEventListener("click", () => goTo(activeIndex - 1));
    next?.addEventListener("click", () => goTo(activeIndex + 1));
    cards.forEach((card, index) => card.addEventListener("click", () => goTo(index)));
    players.forEach((video) => video.addEventListener("play", () => players.forEach((item) => item !== video && item.pause())));
    renderCards();
  });
}

function pauseAllVideos() {
  document.querySelectorAll("video").forEach((video) => video.pause());
}

function initAutoPauseVideos() {
  const videos = Array.from(document.querySelectorAll("video"));
  if (!videos.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.35) entry.target.pause();
        });
      },
      { threshold: [0, 0.35] }
    );
    videos.forEach((video) => observer.observe(video));
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseAllVideos();
  });
}

function initVideoPosters() {
  const videos = Array.from(document.querySelectorAll("video[data-video-autoposter]"));
  if (!videos.length) return;

  const applyPoster = (src, poster) => {
    document.querySelectorAll(`video[data-video-autoposter][src="${src}"]`).forEach((video) => {
      if (!video.getAttribute("poster")) video.setAttribute("poster", poster);
    });
  };

  const capturePoster = (src) => {
    if (videoPosterCache.has(src)) {
      applyPoster(src, videoPosterCache.get(src));
      return;
    }

    const preview = document.createElement("video");
    preview.muted = true;
    preview.playsInline = true;
    preview.preload = "auto";
    preview.src = src;

    const drawFrame = () => {
      if (!preview.videoWidth || !preview.videoHeight) return;
      const canvas = document.createElement("canvas");
      canvas.width = preview.videoWidth;
      canvas.height = preview.videoHeight;
      const context = canvas.getContext("2d");
      if (!context) return;
      try {
        context.drawImage(preview, 0, 0, canvas.width, canvas.height);
        const poster = canvas.toDataURL("image/jpeg", 0.82);
        videoPosterCache.set(src, poster);
        applyPoster(src, poster);
      } catch {
        // Some browsers block frame capture for specific media; keep native video preview in that case.
      } finally {
        preview.removeAttribute("src");
        preview.load();
      }
    };

    preview.addEventListener("loadedmetadata", () => {
      const targetTime = Math.min(0.24, Math.max(0, (preview.duration || 1) - 0.05));
      try {
        if (targetTime > 0) preview.currentTime = targetTime;
        else drawFrame();
      } catch {
        drawFrame();
      }
    }, { once: true });
    preview.addEventListener("seeked", drawFrame, { once: true });
    preview.addEventListener("loadeddata", () => {
      if (!preview.currentTime) drawFrame();
    }, { once: true });
    preview.load();
  };

  [...new Set(videos.map((video) => video.getAttribute("src")).filter(Boolean))].forEach(capturePoster);
}

function initGsapAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    gsap.set("[data-motion], .hero-metal-title", { clearProps: "all" });
    return;
  }

  gsap.defaults({ ease: "expo.out", duration: 0.9 });

  const heroTitle = document.querySelector(".hero-metal-title");
  if (heroTitle) {
    gsap.timeline({ defaults: { ease: "expo.out" } })
      .fromTo(
        ".poster-hero",
        { autoAlpha: 0, y: 36, rotation: -1.2, scale: 0.985 },
        { autoAlpha: 1, y: 0, rotation: -2.5, scale: 1, duration: 1.15 },
        0
      )
      .fromTo(
        heroTitle,
        {
          autoAlpha: 0,
          xPercent: -50,
          yPercent: -50,
          rotationY: -360,
          scaleX: 1.06,
          scaleY: 1,
          transformPerspective: 900,
          transformOrigin: "50% 50%",
        },
        {
          autoAlpha: 1,
          xPercent: -50,
          yPercent: -50,
          rotationY: 0,
          scaleX: 1.06,
          scaleY: 1,
          transformPerspective: 900,
          duration: 1.35,
        },
        0.16
      )
      .fromTo(
        ".poster-hero figcaption span, .poster-bottom-labels span",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 },
        0.58
      );
  }

  const animateBatch = (selector, vars = {}) => {
    const elements = gsap.utils.toArray(selector);
    if (!elements.length) return;
    gsap.set(elements, {
      autoAlpha: 0,
      y: vars.y ?? 34,
      scale: vars.scale ?? 1,
      transformOrigin: "50% 70%",
      willChange: "transform, opacity",
    });
    ScrollTrigger.batch(elements, {
      start: vars.start || "top 84%",
      once: true,
      interval: 0.08,
      batchMax: vars.batchMax || 6,
      onEnter: (batch) => {
        gsap.fromTo(batch, {
          autoAlpha: 0,
          y: vars.y ?? 34,
          scale: vars.scale ?? 1,
        }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: vars.duration || 0.9,
          stagger: vars.stagger || 0.075,
          ease: vars.ease || "expo.out",
          overwrite: "auto",
          clearProps: "visibility,willChange",
        });
      },
    });
  };

  animateBatch(
    [
      ".project-kicker h2",
      ".visual-kicker h2",
      ".writing-feature-head h2",
      ".home-contact h2",
      ".article-hero h1",
      ".page-title",
      ".detail-title",
    ].join(", "),
    { y: 76, scale: 0.985, duration: 1.18, stagger: 0.045, ease: "expo.out", batchMax: 3 }
  );

  animateBatch(
    [
      ".profile-heading-row h2",
      ".workflow-title",
      ".visual-copy h3",
      ".video-feature-main h3",
      ".youth-video-main h3",
      ".writing-feature-card strong",
      ".article-row h3",
      ".detail-section h2",
    ].join(", "),
    { y: 42, scale: 0.99, duration: 0.96, stagger: 0.055, ease: "power4.out", batchMax: 4 }
  );

  animateBatch(
    [
      ".profile-body p",
      ".workflow-summary",
      ".workflow-output",
      ".workflow-detail p",
      ".visual-copy p",
      ".video-feature-text p",
      ".writing-feature-card span",
      ".article-body p",
      ".contact-lines a",
      ".section-intro",
      ".detail-section p",
      ".detail-section li",
    ].join(", "),
    { y: 24, duration: 0.78, stagger: 0.035, start: "top 90%", ease: "power3.out", batchMax: 8 }
  );

  animateBatch(
    [
      ".profile-stats-panel div",
      ".index-project span",
      ".index-project em",
      ".visual-client span",
    ].join(", "),
    { y: 30, duration: 0.82, stagger: 0.055, start: "top 88%", ease: "power3.out", batchMax: 5 }
  );

  ScrollTrigger.refresh();
}

function render() {
  pauseAllVideos();
  const app = document.querySelector("#app");
  const hash = window.location.hash.replace("#", "") || "home";
  let scrollTarget = null;
  if (hash === "home") app.innerHTML = homePage();
  else if (hash === "profile") {
    app.innerHTML = homePage();
    scrollTarget = "profile";
  }
  else if (hash === "projects") {
    app.innerHTML = homePage();
    scrollTarget = "projects";
  }
  else if (hash === "workflow") {
    app.innerHTML = homePage();
    scrollTarget = "workflow";
  }
  else if (hash === "visual-feature") {
    app.innerHTML = homePage();
    scrollTarget = "visual-feature";
  }
  else if (hash === "sco-feature") {
    app.innerHTML = homePage();
    scrollTarget = "sco-feature";
  }
  else if (hash === "haihe-feature") {
    app.innerHTML = homePage();
    scrollTarget = "haihe-feature";
  }
  else if (hash === "spring-feature") {
    app.innerHTML = homePage();
    scrollTarget = "spring-feature";
  }
  else if (hash === "olympic-feature") {
    app.innerHTML = homePage();
    scrollTarget = "olympic-feature";
  }
  else if (hash === "study-feature") {
    app.innerHTML = homePage();
    scrollTarget = "study-feature";
  }
  else if (hash === "video-feature") {
    app.innerHTML = homePage();
    scrollTarget = "video-feature";
  }
  else if (hash === "youth-video-feature") {
    app.innerHTML = homePage();
    scrollTarget = "youth-video-feature";
  }
  else if (hash === "writing-feature") {
    app.innerHTML = homePage();
    scrollTarget = "writing-feature";
  }
  else if (hash === "visual") {
    app.innerHTML = homePage();
    scrollTarget = "visual-feature";
  }
  else if (hash === "video") {
    app.innerHTML = homePage();
    scrollTarget = "video-feature";
  }
  else if (hash === "writing") {
    app.innerHTML = homePage();
    scrollTarget = "writing-feature";
  }
  else if (hash === "contact") {
    app.innerHTML = homePage();
    scrollTarget = "contact";
  }
  else if (hash.startsWith("project/")) app.innerHTML = projectPage(hash.split("/")[1]);
  else if (hash.startsWith("article/")) app.innerHTML = articlePage(hash.split("/")[1]);
  else app.innerHTML = homePage();
  applyFilters();
  initWorkflowCards();
  initPosterRail();
  initInertiaCarousel();
  initVideoPosters();
  initVideoCarousel();
  initYouthVideoCarousel();
  initAutoPauseVideos();
  initGsapAnimations();
  const applyScroll = () => {
    if (scrollTarget) {
      const target = document.getElementById(scrollTarget);
      if (target) window.scrollTo({ top: target.offsetTop, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };
  requestAnimationFrame(applyScroll);
  window.setTimeout(applyScroll, 80);
  window.setTimeout(applyScroll, 360);
  document.querySelectorAll("img").forEach((image) => {
    if (!image.complete) {
      image.addEventListener("load", applyScroll, { once: true });
      image.addEventListener("load", () => window.ScrollTrigger?.refresh(), { once: true });
    }
  });
}

function settleHashScroll() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (target) window.scrollTo({ top: target.offsetTop, behavior: "auto" });
}

if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
if (window.location.hash) {
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.addEventListener("hashchange", render);
window.addEventListener("load", () => {
  requestAnimationFrame(settleHashScroll);
  window.setTimeout(settleHashScroll, 120);
  window.setTimeout(settleHashScroll, 700);
});
render();
