import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css?v=complete-portfolio-41-20260813'

const projects = [
  {
    no: '01', id: 'xnurta', type: 'FLAGSHIP / AI B2B PLATFORM',
    title: '亚马逊 AI 广告管理平台', en: 'Xnurta · Amazon Advertising Intelligence',
    desc: '把经营看板、广告管理、AI 诊断与自动优化整合进统一工作台，帮助跨境卖家从发现问题快速走向执行与验证。',
    tags: ['AI 经营看板', '广告活动管理', '智能诊断', '设计系统'],
    pages: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    no: '02', id: 'sparkx', type: 'AI PRODUCT / 0—1',
    title: 'SparkX AI', en: '亚马逊广告智能助手',
    desc: '以“意图识别—方案生成—确认执行”重构广告优化流程，让专业广告操作变成可信、可控的自然对话。',
    tags: ['AI Agent', '对话式工作流', '0—1 产品'], image: '/assets/portfolio/sparkx-flow.jpg',
    pages: [16, 17, 18, 19, 20, 21],
  },
  {
    no: '03', id: 'ats', type: 'ENTERPRISE SaaS / RECRUITING',
    title: '领猎云招聘系统', en: 'ATS · Recruitment Management System',
    desc: '围绕招聘顾问的日常任务重组信息架构，把人才、职位、客户与协作流程汇入连续工作台。',
    tags: ['复杂 B2B', '信息架构', '多角色协作'], image: '/assets/portfolio/ats-28.jpg',
    pages: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  },
  {
    no: '04', id: 'cpa3', type: 'SMART SELECTION / DATA PRODUCT',
    title: 'CPA 3.0 精装智选系统', en: 'Fine Decoration Decision Platform',
    desc: '用分层数据、方案对比与决策路径承载复杂精装业务，让高密度信息更易读、更易比较、更易执行。',
    tags: ['数据体验', '方案决策', '复杂流程'], image: '/assets/portfolio/cpa3-33.jpg',
    pages: [32, 33, 34, 35, 36, 37, 38],
  },
  {
    no: '05', id: 'cpa2', type: 'PROJECT MANAGEMENT / B2B',
    title: 'CPA 2.0 筑道平台', en: 'Real Estate Project Management',
    desc: '梳理地产项目管理中的业务链路与核心指标，通过模块化界面提升协作效率和状态可见性。',
    tags: ['项目管理', '可视化看板', '流程重构'], image: '/assets/portfolio/cpa2-39.jpg',
    pages: [40],
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
  ['2019—2021', '易居中国 · 筑想科技', 'CPA 3.0 精装智选系统、CPA 2.0 筑道平台'],
]

function Arrow() {
  return <svg className="arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>
}

function ProjectVisual({ project }) {
  if (project.id === 'xnurta') return <div className="xnurta-gallery">
    <figure className="shot shot-a"><img src="/assets/xnurta-ai-dashboard.jpg" alt="Xnurta AI 经营看板" /></figure>
    <figure className="shot shot-b"><img src="/assets/xnurta-sponsored-ads.jpg" alt="Xnurta 广告活动管理界面" /></figure>
    <div className="module-card"><small>AI WORKFLOW</small><b>洞察 → 建议 → 执行</b><span>统一的智能优化闭环</span></div>
  </div>
  return <figure className="single-shot"><img src={project.image} alt={`${project.title} 项目设计页面`} /></figure>
}

function pageSrc(page) {
  return `/assets/portfolio/pages/page-${String(page).padStart(2, '0')}.jpg`
}

function PortfolioPages({ pages, title, eager = false }) {
  return <div className="portfolio-pages" aria-label={`${title} PDF 原稿页面`}>
    <div className="pages-heading"><p>ORIGINAL PORTFOLIO / COMPLETE PAGES</p><span>{String(pages[0]).padStart(2, '0')}—{String(pages.at(-1)).padStart(2, '0')} / 41</span></div>
    {pages.map((page, index) => <figure className="pdf-page" key={page}>
      <figcaption><span>PAGE {String(page).padStart(2, '0')}</span><b>{title}</b></figcaption>
      <img src={pageSrc(page)} alt={`${title}，作品集第 ${page} 页`} loading={eager && index === 0 ? 'eager' : 'lazy'} decoding="async" />
    </figure>)}
  </div>
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
      <PortfolioPages pages={[1, 2]} title="作品集封面与个人介绍" eager />
    </section>

    <section className="work" id="work">
      <div className="work-head shell"><div className="section-tag"><span>02</span><p>SELECTED / PROJECTS</p></div><h2>Selected<br /><i>Work.</i></h2><p>按照作品集项目顺序展开。<br />从 AI 产品到复杂企业系统。</p></div>
      <div className="project-list">
        {projects.map((project) => <article className={`project project-${project.id}`} key={project.id}>
          <div className="project-inner shell">
            <div className="project-meta"><span className="project-no">{project.no}</span><p>{project.type}</p></div>
            <div className="project-copy"><h3>{project.title}</h3><p className="project-en">{project.en}</p><p className="project-desc">{project.desc}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-visual">{project.id === 'cpa2'
              ? <figure className="single-shot"><img src="/assets/portfolio/cpa2-cover.png" alt="CPA 2.0 筑道平台项目首页" loading="lazy" decoding="async" /></figure>
              : <ProjectVisual project={project} />}</div>
          </div>
          {project.id === 'xnurta' && <div className="results shell"><span>PROJECT IMPACT</span><div><b>408%</b><small>广告相关销售额增长</small></div><div><b>63%</b><small>ROAS 增长</small></div><div><b>80–90%</b><small>自动优化任务</small></div><div><b>90%</b><small>报告时间缩短</small></div></div>}
          <div className="shell"><PortfolioPages pages={project.pages} title={project.title} /></div>
        </article>)}
      </div>
    </section>

    <section className="capabilities shell" id="capabilities">
      <div className="cap-head"><div className="section-tag"><span>03</span><p>CAPABILITIES / VALUE</p></div><h2>不止是好看。<br /><span>设计需要解决问题。</span></h2></div>
      <div className="cap-grid">{capabilities.map(([no, title, text]) => <article key={no}><span>{no}</span><i>✦</i><h3>{title}</h3><p>{text}</p></article>)}</div>
      <PortfolioPages pages={[41]} title="能力总结与自我评价" />
    </section>

    <footer className="contact" id="contact">
      <div className="contact-aurora" aria-hidden="true" />
      <div className="contact-inner shell"><div className="section-tag"><span>04</span><p>LET'S / CONNECT</p></div><p className="overline">HAVE A PROJECT IN MIND?</p><h2>让一个好想法，<br /><i>真正发生。</i></h2><div className="contact-actions"><a href="mailto:13120944613@163.com">13120944613@163.com <Arrow /></a><a href="tel:13120944613">+86 131 2094 4613 <Arrow /></a></div><div className="footer-bottom"><span>CHEN TING / PORTFOLIO</span><span>SHANGHAI · CHINA</span><a href="#top">BACK TO TOP ↑</a><span>© 2026</span></div></div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
