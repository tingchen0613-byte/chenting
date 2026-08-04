import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    no: '01',
    eyebrow: 'AI PRODUCT / 0—1',
    title: 'SparkX AI',
    cn: '亚马逊广告智能助手',
    desc: '以「意图分析 — 方案生成 — 确认执行」重构广告优化流程，让复杂专业操作变成自然对话。',
    metrics: ['效率 +60%', '门槛 -40%'],
    kind: 'agent',
  },
  {
    no: '02',
    eyebrow: 'DESIGN SYSTEM / B2B',
    title: 'Xnurta',
    cn: '亚马逊 AI 广告管理平台',
    desc: '重构 Executive Dashboard，将销售、广告花费、TACOS / ACOS 等关键经营指标集中呈现，并通过 AI Notifications 串联异常发现、机会识别与一键优化动作。',
    metrics: ['100+ 组件', '效率 +30%'],
    kind: 'dashboard',
  },
  {
    no: '03',
    eyebrow: 'DATA EXPERIENCE / B2B',
    title: 'CPA 2.0',
    cn: '地产项目管理平台',
    desc: '梳理高密度后台系统的信息结构与业务路径，让功能更轻、决策更快、数据更易读。',
    metrics: ['使用率 +20%', '流程重构'],
    kind: 'data',
  },
]

const strengths = [
  ['01', 'AI Native Design', '将大模型能力转译为自然、可信、可执行的产品体验。', 'INTENT → ACTION'],
  ['02', 'Design Systems', '用 Token、组件与规范建立可复用、可扩展的设计秩序。', 'SYSTEM → SCALE'],
  ['03', 'Complex B2B', '拆解复杂业务与高密度信息，建立清晰的决策路径。', 'COMPLEX → CLEAR'],
  ['04', 'Brand & Visual', '连接产品体验与品牌表达，让商业价值被准确感知。', 'VALUE → IMPACT'],
]

const timeline = [
  { year: '2022—NOW', company: 'SPARKX GLOBAL', role: 'UI / UX DESIGNER', text: 'Xnurta 亚马逊 AI 广告管理平台、SparkX AI 广告智能助手' },
  { year: '2021—2022', company: '华永集团 · 猎查查', role: 'UI DESIGNER', text: '交付中心、领猎云招聘系统与多端产品体验' },
  { year: '2019—2021', company: '易居中国 · 筑想科技', role: 'UI DESIGNER', text: 'CPA 2.0 项目管理平台、CPA 3.0 精装智选系统' },
]

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>
}

function App() {
  const heroRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => document.body.style.setProperty('--scroll-y', `${window.scrollY}px`)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const moveGlow = (event) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    heroRef.current.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    heroRef.current.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return <main>
    <section className="hero" id="top" ref={heroRef} onPointerMove={moveGlow}>
      <div className="hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-light-reflections-on-a-wall-1577/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-fallback"><i /><i /><i /></div>
      </div>
      <header className="nav shell">
        <a className="logo" href="#top" aria-label="陈婷个人作品集首页"><b>CT</b><span>CHEN TING<br />PORTFOLIO 2026</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#strengths" onClick={() => setMenuOpen(false)}>能力</a>
        </nav>
        <a className="nav-contact" href="#contact">联系我 <Arrow /></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换导航">{menuOpen ? '×' : '＋'}</button>
      </header>

      <div className="hero-copy shell">
        <p className="hero-kicker"><span>AVAILABLE FOR SELECTED PROJECTS</span><b>SHANGHAI · CN</b></p>
        <h1><span>DESIGNING</span><br /><em>INTELLIGENCE</em><br /><span>WITH CLARITY.</span></h1>
        <div className="hero-bottom">
          <p>陈婷 — 视觉设计师 / AI 设计师 / 品牌设计师<br /><span>9 年 UI/UX 经验，专注 AI Native、复杂产品与设计系统。</span></p>
          <a href="#work" className="round-link"><span>VIEW<br />SELECTED WORK</span><Arrow /></a>
        </div>
      </div>
      <div className="hero-side">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="about shell" id="about">
      <div className="section-label"><span>01</span><p>PROFILE / ABOUT</p></div>
      <div className="about-grid">
        <div className="portrait">
          <img src="/assets/chen-ting.png" alt="视觉设计师陈婷" />
          <span className="portrait-code">PORTRAIT / 2026</span>
        </div>
        <div className="about-copy">
          <p className="lead">我在<span>技术、商业与人</span>之间，<br />寻找清晰而有温度的设计答案。</p>
          <div className="bio-row">
            <p>9 年 UI/UX 设计经验，深耕 AI Native 与 Agent 智能产品。擅长独立负责业务线，从用户洞察、交互策略到视觉系统与落地协作，让复杂能力变得可理解、可操作。</p>
            <a href="mailto:13120944613@163.com">13120944613@163.com <Arrow /></a>
          </div>
          <div className="stats">
            <div><b>09<sup>Y</sup></b><span>设计经验</span></div>
            <div><b>100<sup>+</sup></b><span>复用组件</span></div>
            <div><b>60<sup>%</sup></b><span>效率提升</span></div>
            <div><b>95<sup>%</sup></b><span>界面一致性</span></div>
          </div>
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => <article key={item.company}>
          <span>0{index + 1}</span><time>{item.year}</time><h3>{item.company}</h3><b>{item.role}</b><p>{item.text}</p>
        </article>)}
      </div>
    </section>

    <section className="work" id="work">
      <div className="shell">
        <div className="work-head">
          <div className="section-label"><span>02</span><p>SELECTED / PROJECTS</p></div>
          <h2>Selected<br /><i>Work.</i></h2>
          <p>从策略到体验，从系统到细节。<br />以下为部分核心设计实践。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <article className={`project ${project.kind}`} key={project.no}>
            <div className="project-visual">
              {project.kind === 'dashboard' && <img src="/assets/xnurta-executive-dashboard.png" alt="Xnurta Executive Dashboard 销售与广告数据看板，包含 AI 通知和优化动作" />}
              {project.kind === 'agent' && <div className="agent-ui"><div className="agent-orb" /><div className="agent-panel"><small>SPARKX AI / COPILOT</small><p>我已分析当前广告表现，发现<br /><b>3 个可以立即优化的机会。</b></p><div><span>降低无效花费</span><span>提升高潜关键词</span></div></div><div className="agent-chat">Ask SparkX AI anything <b>↗</b></div></div>}
              {project.kind === 'data' && <div className="data-ui"><div className="data-top"><span>PROJECT / PERFORMANCE</span><b>CPA 2.0</b></div><div className="data-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="data-metric"><span>完成进度</span><b>82.4%</b><em>+12.8 ↗</em></div></div>}
              <span className="project-no">{project.no}</span>
            </div>
            <div className="project-info">
              <p className="eyebrow">{project.eyebrow}</p>
              <div><h3>{project.title}</h3><p>{project.cn}</p></div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-foot"><div>{project.metrics.map(m => <span key={m}>{m}</span>)}</div><button aria-label={`查看 ${project.title} 项目`}><Arrow /></button></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="strengths shell" id="strengths">
      <div className="strength-head">
        <div className="section-label"><span>03</span><p>CAPABILITIES / VALUE</p></div>
        <h2>不止是好看。<br /><span>设计需要解决问题。</span></h2>
      </div>
      <div className="strength-grid">
        {strengths.map(([no, title, text, code]) => <article key={no}>
          <span className="strength-no">{no}</span><div className="spark">✦</div><h3>{title}</h3><p>{text}</p><small>{code}</small>
        </article>)}
      </div>
    </section>

    <footer className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true"><i/><i/><i/></div>
      <div className="contact-inner shell">
        <div className="section-label"><span>04</span><p>LET'S / CONNECT</p></div>
        <p className="contact-overline">HAVE A PROJECT IN MIND?</p>
        <h2>让一个好想法，<br /><i>真正发生。</i></h2>
        <div className="contact-actions">
          <a href="mailto:13120944613@163.com">13120944613@163.com <Arrow /></a>
          <a href="tel:13120944613">+86 131 2094 4613 <Arrow /></a>
        </div>
        <div className="footer-bottom"><span>CHEN TING / PORTFOLIO</span><span>SHANGHAI · CHINA</span><a href="#top">BACK TO TOP ↑</a><span>© 2026</span></div>
      </div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
