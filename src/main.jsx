import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css?v=xnurta-expansion-20260813'

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
    ['sponsored-ads.jpg', 'Sponsored Ads / 广告活动管理'],
    ['diagnostic-center.jpg', 'Smart Diagnosis / 智能诊断中心'],
    ['amc-models.jpg', 'AMC Model Gallery / 营销模型模板'],
    ['brand-insight.jpg', 'Brand Insight / 品牌数据洞察'],
    ['keyword-insight.jpg', 'Keyword Insight / 关键词洞察'],
    ['ai-notifications.jpg', 'AI Notifications / AI 智能通知'],
  ],
  sparkx: [
    ['home.jpg', 'SparkX AI / 智能助手首页'],
    ['intent-analysis.jpg', 'Step 01 / 意图分析'],
    ['advertising-solutions.jpg', 'Step 02 / 广告方案生成'],
    ['optimization-plans.jpg', 'Step 03 / AI 优化计划'],
    ['campaign-creation.jpg', 'Campaign Creation / AI 广告创建'],
    ['campaign-optimization.jpg', 'Campaign Optimization / AI 活动优化'],
    ['managed-group.jpg', 'Managed Group / AI 托管组优化'],
    ['product-management.jpg', 'Product Management / AI 商品管理'],
  ],
  ats: [
    ['candidate-profile.jpg', 'Candidate Profile / 候选人档案'],
    ['data-dashboard.jpg', 'Recruitment Analytics / 招聘数据分析'],
  ],
  cpa3: [
    ['home.jpg', 'Home / 精装智选首页'],
    ['project-map.jpg', 'Project Library / 项目地图'],
    ['floor-plan.jpg', 'Floor Plan / 户型选择'],
    ['solution.jpg', 'Solution Library / 方案库'],
    ['space-config.jpg', 'Space Configuration / 空间配置'],
    ['component-config.jpg', 'Component Configuration / 部品配置'],
    ['standard.jpg', 'Decoration Standard / 精装标准'],
  ],
}

function Arrow() {
  return <svg className="arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>
}

function ProjectGallery({ project, detail = false }) {
  const screens = projectScreens[project.id]
  if (screens) {
    const visibleScreens = detail ? screens.slice(1) : screens.slice(0, 1)
    return <div className={`screen-gallery gallery-${project.id}`}>
    {visibleScreens.map(([file, label], index) => <figure className={!detail ? 'screen-card featured' : 'screen-card'} key={file}>
      <figcaption><span>{String(index + (detail ? 2 : 1)).padStart(2, '0')}</span><b>{label}</b></figcaption>
      <a className="zoomable" href={`/assets/originals/${project.id}/${file}`} target="_blank" rel="noreferrer" aria-label={`查看高清大图：${label}`}><img src={`/assets/originals/${project.id}/${file}`} alt={`${project.title} - ${label}`} loading="lazy" decoding="async" /><span>查看高清大图 ↗</span></a>
    </figure>)}
    </div>
  }
  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main>
    <header className="nav-wrap">
      <div className="nav shell">
        <a className="logo" href="#top"><b>CT</b><span>CHEN TING<br />PORTFOLIO 2026</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>能力</a>
        </nav>
        <a className="contact-pill" href="#contact">联系我 <Arrow /></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换导航">{menuOpen ? '×' : '＋'}</button>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-inner shell">
        <div className="status"><span>AVAILABLE FOR SELECTED PROJECTS</span><b>SHANGHAI · CN</b></div>
        <h1><span>DESIGNING</span><br /><em>INTELLIGENCE</em><br /><span>WITH CLARITY.</span></h1>
        <div className="hero-foot">
          <p>陈婷 — UI / UX 与 AI 产品设计师<br /><span>9 年经验，专注 AI Native、复杂 B2B 与设计系统。</span></p>
          <a className="round-link" href="#work"><span>VIEW<br />SELECTED WORK</span><Arrow /></a>
        </div>
      </div>
    </section>

    <section className="about shell" id="about">
      <div className="section-tag"><span>01</span><p>PROFILE / ABOUT</p></div>
      <div className="about-grid">
        <figure className="portrait"><img src="/assets/chen-ting.png" alt="设计师陈婷彩色个人照片" /><figcaption>NATURAL COLOR PORTRAIT / 2026</figcaption></figure>
        <div className="about-copy">
          <h2>在技术、商业与人之间，<br />寻找<span>清晰而有温度</span>的设计答案。</h2>
          <div className="bio"><p>我擅长独立负责复杂业务线，从用户洞察、交互策略到视觉系统与落地协作，让复杂能力变得可理解、可操作。近年聚焦 AI Native 与 Agent 产品体验。</p><a href="mailto:13120944613@163.com">13120944613@163.com <Arrow /></a></div>
          <div className="stats"><div><b>09<sup>Y</sup></b><span>设计经验</span></div><div><b>100<sup>+</sup></b><span>系统组件</span></div><div><b>60<sup>%</sup></b><span>效率提升</span></div><div><b>95<sup>%</sup></b><span>界面一致性</span></div></div>
        </div>
      </div>
      <div className="timeline">{timeline.map(([year, company, text], index) => <article key={company}><span>0{index + 1}</span><time>{year}</time><h3>{company}</h3><b>UI / UX DESIGNER</b><p>{text}</p></article>)}</div>
    </section>

    <section className="work" id="work">
      <div className="work-head shell"><div className="section-tag"><span>02</span><p>SELECTED / PROJECTS</p></div><h2>Selected<br /><i>Work.</i></h2><p>按照作品集项目顺序展开。<br />从 AI 产品到复杂企业系统。</p></div>
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
      <div className="contact-inner shell"><div className="section-tag"><span>04</span><p>LET'S / CONNECT</p></div><p className="overline">HAVE A PROJECT IN MIND?</p><h2>让一个好想法，<br /><i>真正发生。</i></h2><div className="contact-actions"><a href="mailto:13120944613@163.com">13120944613@163.com <Arrow /></a><a href="tel:13120944613">+86 131 2094 4613 <Arrow /></a></div><div className="footer-bottom"><span>CHEN TING / PORTFOLIO</span><span>SHANGHAI · CHINA</span><a href="#top">BACK TO TOP ↑</a><span>© 2026</span></div></div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
