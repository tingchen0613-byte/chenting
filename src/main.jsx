import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css?v=sparkx-edge-cleanup-20260813'

const projects = [
  {
    no: '01', id: 'xnurta', type: 'FLAGSHIP / AI B2B PLATFORM',
    title: '亚马逊 AI 广告管理平台', en: 'Xnurta · Amazon Advertising Intelligence',
    desc: '把经营看板、广告管理、AI 诊断与自动优化整合进统一工作台，帮助跨境卖家从发现问题快速走向执行与验证。',
    tags: ['AI 经营看板', '广告活动管理', '智能诊断', '设计系统'],
  },
  {
    no: '02', id: 'sparkx', type: 'AI PRODUCT / 0—1',
    title: 'SparkX AI', en: '亚马逊广告智能助手',
    desc: '以“意图识别—方案生成—确认执行”重构广告优化流程，让专业广告操作变成可信、可控的自然对话。',
    tags: ['AI Agent', '对话式工作流', '0—1 产品'],
  },
  {
    no: '03', id: 'ats', type: 'ENTERPRISE SaaS / RECRUITING',
    title: '领猎云招聘系统', en: 'ATS · Recruitment Management System',
    desc: '围绕招聘顾问的日常任务重组信息架构，把人才、职位、客户与协作流程汇入连续工作台。',
    tags: ['复杂 B2B', '信息架构', '多角色协作'],
  },
  {
    no: '04', id: 'cpa3', type: 'SMART SELECTION / DATA PRODUCT',
    title: 'CPA 3.0 精装智选系统', en: 'Fine Decoration Decision Platform',
    desc: '用分层数据、方案对比与决策路径承载复杂精装业务，让高密度信息更易读、更易比较、更易执行。',
    tags: ['数据体验', '方案决策', '复杂流程'],
  },
]

const capabilities = [
  ['01', 'AI Native Design', '把模型能力转译为自然、可信、可执行的产品体验。'],
  ['02', 'Complex B2B', '拆解高密度信息与复杂业务，建立清晰决策路径。'],
  ['03', 'Design Systems', '用 Token、组件与规范建立可复用、可扩展的秩序。'],
  ['04', 'Brand & Visual', '连接产品体验与品牌表达，让价值被准确感知。'],
]

const timeline = [
  ['2022—NOW', 'SPARKX GLOBAL', 'Xnurta AI 广告管理平台、SparkX AI 广告智能助手'],
  ['2021—2022', '华永集团 · 猎查查', '交付中心、领猎云招聘系统与多端体验'],
  ['2019—2021', '易居中国 · 筑想科技', 'CPA 3.0 精装智选系统与复杂地产数据体验'],
]

const projectScreens = {
  xnurta: [
    ['dashboard.jpg', 'Executive Dashboard / AI 经营看板'],
    ['sponsored-ads.jpg', 'Sponsored Ads / 广告活动管理', {
      title: '全链路广告管理',
      text: '面向高频广告运营任务，将趋势分析、结构诊断、批量操作与活动明细整合在同一工作台，减少跨页面查找与重复操作，让用户从发现异常快速进入调整。',
      points: ['多层级广告管理', '趋势与结构联动', '批量运营提效'],
    }],
    ['diagnostic-center-full.png', 'Smart Diagnosis / 智能诊断中心', {
      title: '智能诊断与行动建议',
      text: '围绕 ASIN 健康度拆解关键指标的影响链路，对比类目基准并归纳结构问题，将复杂的诊断结果转化为可理解、可追溯、可立即执行的优化建议。',
      points: ['指标因果拆解', '类目基准对比', '诊断行动闭环'],
    }, null, { scrollPreview: true }],
    ['amc-subscribe-analysis.png', 'AMC Model 01 / 订阅省分析模型', {
      title: '订阅省分析模型',
      text: '围绕 Subscribe & Save 用户生命周期，将订阅与非订阅人群、复购漏斗和单 ASIN 表现集中呈现，帮助广告主识别留存价值并沉淀可复用的分析模型。',
      points: ['用户生命周期分层', '订阅转化漏斗', '模型保存与复用'],
    }],
    ['amc-audience-labels.png', 'AMC Model 02 / 受众标签分析', {
      title: '受众标签分析',
      text: '基于 Amazon DSP 受众标签，结合覆盖规模、广告销售与渗透表现定位高价值及高潜人群，为精细化广告投放和预算分配提供清晰依据。',
      points: ['高价值人群识别', '多指标气泡分析', '预算与投放优化'],
    }],
    ['brand-insight-full.png', 'Brand Insight / 品牌数据洞察', {
      title: '品牌数据洞察',
      text: '聚合品牌声量与广告占位数据，通过品牌 SOV 市场份额、竞品趋势对比和多维筛选，帮助广告主识别市场格局变化，持续校准品牌投放策略。',
      points: ['品牌 SOV 份额', '竞品趋势对比', '多维指标筛选'],
    }],
    ['keyword-insight-full.png', 'Keyword Insight / 关键词洞察', {
      title: '关键词与流量洞察',
      text: '以关键词 SOV 为核心，将流量来源、份额趋势与投放覆盖集中在同一分析视图中，帮助广告主发现高价值搜索机会，并持续优化自然流量与广告流量结构。',
      points: ['关键词 SOV', '流量来源分析', '搜索机会识别'],
    }],
    ['ai-notifications-full.png', 'AI Notifications / AI 智能通知', {
      title: '广告运营核心关注',
      text: '将优先级更新、快速优化、增长机会与目标调整统一聚合，通过风险等级和待办状态帮助运营人员快速定位异常，并从洞察直接进入处理动作。',
      points: ['运营风险聚合', '优先级与状态管理', '洞察到行动闭环'],
    }],
  ],
  sparkx: [
    ['home.jpg', 'SparkX AI / 智能助手首页'],
    ['intent-analysis.jpg', 'Step 01 / 意图分析', {
      title: '自然语言意图识别',
      text: '把用户目标、商品范围与预算约束拆解为结构化任务，通过逐步确认消除表达歧义，让 AI 在生成方案前先建立清晰、可信的执行边界。',
      points: ['自然语言理解', '任务边界确认', '渐进式信息收集'],
    }],
    ['advertising-solutions.jpg', 'Step 02 / 广告方案生成', {
      title: '可解释的方案生成',
      text: 'AI 综合商品特征、经营目标与历史表现生成广告方案，并将策略依据、结构和关键参数同步呈现，帮助用户理解推荐原因而非被动接受黑盒结果。',
      points: ['策略依据可见', '方案结构化生成', '关键参数透明'],
    }, null, { scrollPreview: true }],
    ['optimization-plans.jpg', 'Step 03 / AI 优化计划', {
      title: '优化计划确认执行',
      text: '在执行前展示待修改对象、预算分配与预期影响，允许用户逐项复核和调整，把 AI 建议转化为可控的执行计划，并保留人工决策权。',
      points: ['执行前预览', '人机协同决策', '风险可控'],
    }],
    ['campaign-creation.jpg', 'Campaign Creation / AI 广告创建', {
      title: '多商品广告创建',
      text: '将商品选择、目标理解、方案生成与活动创建串联为连续对话，支持多个 ASIN 的批量规划，在降低专业门槛的同时提升建组效率。',
      points: ['多 ASIN 批量创建', '对话式流程', '建组效率提升'],
    }],
    ['campaign-optimization.jpg', 'Campaign Optimization / AI 活动优化', {
      title: '存量活动智能优化',
      text: '扫描现有活动的结构与表现，识别低效配置并生成优化组合，通过分步确认呈现调整范围，让复杂的存量治理变得清晰且可回退。',
      points: ['存量活动扫描', '异常机会识别', '分步确认优化'],
    }],
    ['managed-group.jpg', 'Managed Group / AI 托管组优化', {
      title: 'AI 托管组管理',
      text: '以托管组为核心聚合目标、预算、当前表现与 AI 状态，通过一致的状态语言和批量控制，帮助运营人员同时管理大量自动优化任务。',
      points: ['托管状态可视化', '目标与预算联动', '规模化管理'],
    }],
    ['product-management.jpg', 'Product Management / AI 商品管理', {
      title: '商品资产与投放联动',
      text: '将商品信息、父子关系、目标指标与广告动作集中管理，支持从商品视角快速判断投放状态，为后续 AI 创建与优化提供统一数据入口。',
      points: ['商品关系管理', '投放状态聚合', '统一数据入口'],
    }],
  ],
  ats: [
    ['ats-overview', 'Recruitment System / 领猎云 ATS', null, 'overview'],
    ['ats-spacing', 'Space Design / 间距规范', null, 'spacing'],
    ['ats-icons', 'Icon Design / 图标规范', null, 'icons'],
    ['ats-process', 'Promoting Process / 推进流程', null, 'process'],
    ['ats-components', 'Reusable Components / 高频复用组件', null, 'components'],
    ['ats-data-viz', 'Data Visualization / 数据可视化', null, 'data-viz'],
    ['candidate-profile.jpg', 'Candidate Profile / 候选人档案', {
      title: '候选人全景档案',
      text: '把基础信息、简历材料、面试进度、沟通记录与 Offer 状态集中在同一工作区，让招聘顾问无需跨页面查找即可掌握候选人的完整上下文，并连续推进下一步协作。',
      points: ['候选人信息聚合', '招聘进程追踪', '多角色协作留痕'],
    }, null, { analysisSide: 'right' }],
    ['data-dashboard.jpg', 'Recruitment Analytics / 招聘数据分析', {
      title: '招聘经营数据分析',
      text: '围绕职位推进、候选人转化与顾问产出构建分析视图，通过统一指标口径和多维筛选，让管理者快速发现流程瓶颈并评估团队效能。',
      points: ['招聘漏斗分析', '顾问效能评估', '流程瓶颈识别'],
    }],
  ],
  cpa3: [
    ['home.jpg', 'Home / 精装智选首页'],
    ['project-map.jpg', 'Project Library / 项目地图', {
      title: '项目资产地图',
      text: '用地图与项目列表双视图承载跨区域项目资产，结合状态、区域和条件筛选，帮助用户快速定位目标项目并进入后续精装决策流程。',
      points: ['地图列表联动', '多条件筛选', '项目快速定位'],
    }],
    ['floor-plan.jpg', 'Floor Plan / 户型选择', {
      title: '户型信息对比决策',
      text: '将户型图、面积、空间构成和关键成本指标组织在统一卡片中，支持同项目内快速浏览与横向比较，降低前期方案筛选成本。',
      points: ['户型卡片化', '关键指标对比', '方案快速筛选'],
    }],
    ['solution.jpg', 'Solution Library / 方案库', {
      title: '标准化方案库',
      text: '按项目、户型与风格沉淀可复用精装方案，通过清晰的状态和版本信息连接设计资产与业务应用，提升方案复用与协同效率。',
      points: ['方案资产沉淀', '版本状态管理', '跨项目复用'],
    }],
    ['space-config.jpg', 'Space Configuration / 空间配置', {
      title: '空间级方案配置',
      text: '以客厅、卧室、厨卫等空间为单位拆解配置任务，将效果预览、材料选择与成本变化同步反馈，让复杂方案在可视化环境中逐步完成。',
      points: ['空间任务拆解', '效果实时预览', '成本同步反馈'],
    }],
    ['component-config.jpg', 'Component Configuration / 部品配置', {
      title: '部品与材料配置',
      text: '建立品类、品牌、规格与价格的层级选择关系，在高密度配置场景中突出已选状态和差异信息，帮助用户准确完成部品替换与组合。',
      points: ['层级选择关系', '差异信息突出', '配置状态清晰'],
    }],
    ['standard.jpg', 'Decoration Standard / 精装标准', {
      title: '精装标准数据化',
      text: '把分散的标准条目、适用空间与成本要求转化为结构化清单，支持查询、维护和复用，为方案配置和成本核算建立统一规则基础。',
      points: ['标准结构化', '规则统一维护', '配置核算支撑'],
    }],
  ],
}

function Arrow() {
  return <svg className="arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>
}

const defaultResponsiveWidths = [640, 1024, 1600]

function optimizedImagePath(src, width) {
  return `/assets/optimized/v1/${src.replace(/^\/assets\//, '').replace(/\.[^.]+$/, '')}-${width}.webp`
}

function ResponsiveImage({ src, alt, sizes = '(max-width: 640px) calc(100vw - 28px), (max-width: 1000px) calc(100vw - 40px), 64vw', widths = defaultResponsiveWidths, ...props }) {
  const availableWidths = src === '/assets/chen-ting-new.jpg' ? [480, 768, 960] : widths
  const largest = availableWidths.at(-1)
  return <img
    src={optimizedImagePath(src, largest)}
    srcSet={availableWidths.map((width) => `${optimizedImagePath(src, width)} ${width}w`).join(', ')}
    sizes={sizes}
    alt={alt}
    {...props}
  />
}

function AtsOverviewScreen() {
  return <div className="ats-html-screen ats-overview-image-screen">
    <ResponsiveImage src="/assets/originals/ats/macbook.png" alt="领猎云招聘系统工作台 MacBook 展示" loading="lazy" decoding="async" sizes="(max-width: 640px) calc(100vw - 28px), 1200px" />
  </div>
}

function AtsSpacingScreen() {
  return <div className="ats-html-screen ats-spacing-screen">
    <div className="ats-slide-heading"><h4>间距</h4><span>SPACE DESIGN</span></div>
    <div className="ats-guideline-copy"><b>间距设计</b><p>间距每个部分应该是有意的，包含元素之间的空白区域。项目之间的空间量会创建关系链接，层次结构通过间距关系排列，可区分内容权重关系。</p><b>希克定律</b><p>随着选择数量增加，做出决定会越来越困难。为了提出简化决策的可预测系统，将数值数量保持在最低要求。</p></div>
    <ResponsiveImage className="ats-reference-art ats-spacing-art" src="/assets/originals/ats/spacing-diagram.png" alt="横向与纵向间距设计规范" loading="lazy" decoding="async" sizes="(max-width: 640px) calc(100vw - 28px), 1100px" />
  </div>
}

function AtsIconsScreen() {
  return <div className="ats-html-screen ats-icons-screen">
    <div className="ats-slide-heading"><h4>图标规范</h4><span>ICON DESIGN</span></div>
    <div className="ats-guideline-copy"><b>图标设计</b><p>图标能够直接表达操作含义，快速唤起用户认知，从而帮助用户更快地理解操作。</p><b>应用原则</b><p>高效识别—易读性、易识别、高对比；清晰有序—明确性、引导性、方正、概括、表达一致；美观前规范统一—基于几何造型的秩序感、韵律感、情感化。</p></div>
    <div className="ats-icon-spec"><div className="icon-template"><p>描边（S）：2px　端点（D）：圆角　圆角（R）：2px</p><ResponsiveImage src="/assets/originals/ats/icon-template.png" alt="图标描边、端点与圆角绘制模板" loading="lazy" decoding="async" widths={[504]} sizes="160px" /><small>图标绘制模版</small></div><ResponsiveImage className="ats-reference-art ats-icon-art" src="/assets/originals/ats/icon-grid.png" alt="领猎云系统完整图标规范" loading="lazy" decoding="async" sizes="(max-width: 640px) 55vw, 700px" /></div>
  </div>
}

function AtsProcessScreen() {
  return <div className="ats-html-screen ats-process-screen">
    <div className="ats-slide-heading"><h4>推进流程</h4><span>PROMOTING PROCESS</span></div>
    <ResponsiveImage className="ats-reference-art ats-process-art" src="/assets/originals/ats/process-diagram.png" alt="从发现问题到交付方案的推进流程" loading="lazy" decoding="async" sizes="(max-width: 640px) calc(100vw - 28px), 1100px" />
  </div>
}

function AtsImageScreen({ type }) {
  const isComponents = type === 'components'
  return <div className={`ats-html-screen ${isComponents ? 'ats-components-screen' : 'ats-data-screen'}`}>
    {!isComponents && <div className="ats-slide-heading"><h4>数据可视化</h4><span>DATA VISUALIZATION</span></div>}
    {!isComponents && <div className="ats-data-copy"><b>对常用图标拆解提炼通用可视化规范，从功能角度进行分类应用到丰富的业务场景中</b><p>图表帮助用户更好地看懂数据。根据数据选择合适的图表展现，把数据的信息传达给用户；并从数据出发，熟悉不同图表的定义、适用场景与优缺点。</p></div>}
    <ResponsiveImage className={`ats-reference-art ${isComponents ? 'ats-components-art' : 'ats-data-art'}`} src={`/assets/originals/ats/${isComponents ? 'reusable-components.png' : 'data-visualization.png'}`} alt={isComponents ? '领猎云高频复用组件总览' : '领猎云数据可视化图表规范'} loading="lazy" decoding="async" sizes="(max-width: 640px) calc(100vw - 28px), 1200px" />
  </div>
}

function AtsHtmlScreen({ type }) {
  if (type === 'overview') return <AtsOverviewScreen />
  if (type === 'spacing') return <AtsSpacingScreen />
  if (type === 'icons') return <AtsIconsScreen />
  if (type === 'process') return <AtsProcessScreen />
  return <AtsImageScreen type={type} />
}

function ProjectGallery({ project, detail = false }) {
  const screens = projectScreens[project.id]
  if (screens) {
    const visibleScreens = detail ? screens.slice(1) : screens.slice(0, 1)
    return <div className={`screen-gallery gallery-${project.id}`}>
    {visibleScreens.map(([file, label, analysis, htmlScreen, options = {}], index) => {
      const analysisIndex = visibleScreens.slice(0, index).filter(([, , itemAnalysis]) => itemAnalysis).length
      const analysisSide = options.analysisSide || (analysisIndex % 2 === 0 ? 'left' : 'right')
      const media = htmlScreen
        ? <AtsHtmlScreen type={htmlScreen} />
        : <a className={`zoomable${options.scrollPreview ? ' scroll-preview' : ''}`} href={`/assets/originals/${project.id}/${file}`} target="_blank" rel="noreferrer" aria-label={`查看高清大图：${label}`}><ResponsiveImage src={`/assets/originals/${project.id}/${file}`} alt={`${project.title} - ${label}`} loading="lazy" decoding="async" fetchPriority="auto" sizes={!detail ? '(max-width: 640px) calc(100vw - 28px), 1200px' : undefined} /><span>{options.scrollPreview ? '移入自动浏览 · 点击看大图 ↗' : '查看高清大图 ↗'}</span></a>
      const analysisPanel = analysis && <div className="screen-analysis"><div><small>PRODUCT ANALYSIS</small><h4>{analysis.title}</h4></div><p>{analysis.text}</p><div className="analysis-points">{analysis.points.map(point => <span key={point}>{point}</span>)}</div></div>

      return <figure className={!detail ? 'screen-card featured' : `screen-card${analysis ? ` has-analysis analysis-text-${analysisSide}` : ''}${options.scrollPreview ? ' has-scroll-preview' : ''}${htmlScreen ? ' html-screen-card' : ''}`} key={file}>
        <figcaption><span>{String(index + (detail ? 2 : 1)).padStart(2, '0')}</span><b>{label}</b></figcaption>
        {analysis ? <div className="screen-layout">{analysisPanel}{media}</div> : media}
      </figure>
    })}
    </div>
  }
  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const goToCapabilities = (event) => {
    event.preventDefault()
    setMenuOpen(false)
    window.history.replaceState(null, '', '#capabilities')
    const align = (behavior = 'auto') => {
      const target = document.getElementById('capabilities')
      if (!target) return
      window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - 82, behavior })
    }
    align('smooth')
    ;[250, 700, 1400].forEach(delay => window.setTimeout(() => align(), delay))
  }
  return <main>
    <header className="nav-wrap">
      <div className="nav shell">
        <a className="logo" href="#top"><b>CT</b><span>CHEN TING<br />PORTFOLIO 2026</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#capabilities" onClick={goToCapabilities}>能力</a>
        </nav>
        <a className="contact-pill" href="#contact">联系我 <Arrow /></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换导航">{menuOpen ? '×' : '＋'}</button>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-inner shell">
        <div className="status"><span>AVAILABLE FOR SELECTED PROJECTS</span><b>SHANGHAI · CN</b></div>
        <h1><span>DESIGNING</span><br /><em>INTELLIGENT</em><br /><span>EXPERIENCES.</span></h1>
        <div className="hero-foot">
          <p>陈婷 — UI / UX 与 AI 产品设计师<br /><span>9 年产品设计经验，专注 AI Native、B2B SaaS 与设计系统</span></p>
          <a className="round-link" href="#work"><span>VIEW<br />SELECTED WORK</span><Arrow /></a>
        </div>
      </div>
    </section>

    <section className="about shell" id="about">
      <div className="section-tag"><span>01</span><p>PROFILE / ABOUT</p></div>
      <div className="about-grid">
        <figure className="portrait"><ResponsiveImage src="/assets/chen-ting-new.jpg" alt="设计师陈婷彩色个人照片" widths={[480, 768, 960]} sizes="(max-width: 640px) calc(100vw - 28px), 470px" loading="lazy" decoding="async" /><figcaption>NATURAL COLOR PORTRAIT / 2026</figcaption></figure>
        <div className="about-copy">
          <h2>在技术、商业与人之间，<br />寻找<span>清晰而有温度</span>的设计答案。</h2>
          <div className="bio"><p>我擅长独立负责复杂业务线，从用户洞察、交互策略到视觉系统与落地协作，让复杂能力变得可理解、可操作。近年聚焦 AI Native 与 Agent 产品体验。</p><a href="mailto:13120944613@163.com?subject=%E4%BD%9C%E5%93%81%E9%9B%86%E9%A1%B9%E7%9B%AE%E5%90%88%E4%BD%9C%E5%92%A8%E8%AF%A2" aria-label="发送邮件给陈婷">13120944613@163.com <Arrow /></a></div>
          <div className="stats"><div><b>09<sup>Y</sup></b><span>设计经验</span></div><div><b>100<sup>+</sup></b><span>系统组件</span></div><div><b>60<sup>%</sup></b><span>效率提升</span></div><div><b>95<sup>%</sup></b><span>界面一致性</span></div></div>
        </div>
      </div>
      <div className="timeline">{timeline.map(([year, company, text], index) => <article key={company}><span>0{index + 1}</span><time>{year}</time><h3>{company}</h3><b>UI / UX DESIGNER</b><p>{text}</p></article>)}</div>
    </section>

    <section className="work" id="work">
      <div className="work-head shell"><div className="section-tag"><span>02</span><p>SELECTED / PROJECTS</p></div><h2>Selected<br /><i>Work.</i></h2><p>从 AI 产品到复杂企业系统。</p></div>
      <div className="project-list">
        {projects.map((project) => <article className={`project project-${project.id}`} key={project.id}>
          <div className="project-inner shell">
            <div className="project-meta"><span className="project-no">{project.no}</span><p>{project.type}</p></div>
            <div className="project-copy"><h3>{project.title}</h3><p className="project-en">{project.en}</p><p className="project-desc">{project.desc}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-visual"><ProjectGallery project={project} /></div>
          </div>
          {project.id === 'xnurta' && <div className="results shell"><span>PROJECT IMPACT</span><div><b>408%</b><small>广告相关销售额增长</small></div><div><b>63%</b><small>ROAS 增长</small></div><div><b>80–90%</b><small>自动优化任务</small></div><div><b>90%</b><small>报告时间缩短</small></div></div>}
          {projectScreens[project.id] && <div className="shell project-gallery-wrap"><ProjectGallery project={project} detail /></div>}
        </article>)}
      </div>
    </section>

    <section className="capabilities shell" id="capabilities">
      <div className="cap-head"><div className="section-tag"><span>03</span><p>CAPABILITIES / VALUE</p></div><h2>不止是好看。<br /><span>设计需要解决问题。</span></h2></div>
      <div className="cap-grid">{capabilities.map(([no, title, text]) => <article key={no}><span>{no}</span><i>✦</i><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <footer className="contact" id="contact">
      <div className="contact-aurora" aria-hidden="true" />
      <div className="contact-inner shell"><div className="section-tag"><span>04</span><p>LET'S / CONNECT</p></div><p className="overline">HAVE A PROJECT IN MIND?</p><h2>让一个好想法，<br /><i>真正发生。</i></h2><div className="contact-actions"><a href="mailto:13120944613@163.com?subject=%E4%BD%9C%E5%93%81%E9%9B%86%E9%A1%B9%E7%9B%AE%E5%90%88%E4%BD%9C%E5%92%A8%E8%AF%A2" aria-label="发送邮件给陈婷">13120944613@163.com <Arrow /></a><a href="tel:13120944613">+86 131 2094 4613 <Arrow /></a></div><div className="footer-bottom"><span>CHEN TING / PORTFOLIO</span><span>SHANGHAI · CHINA</span><a href="#top">BACK TO TOP ↑</a><span>© 2026</span></div></div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
