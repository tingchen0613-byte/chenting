const fs = require('node:fs/promises')
const path = require('node:path')
const sharp = require('sharp')

const root = path.resolve(__dirname, '..')
const outputRoot = path.join(root, 'public/assets/optimized/v1')
const standardWidths = [640, 1024, 1600]

const sources = [
  'public/assets/chen-ting-new.jpg',
  ...[
    'dashboard.jpg', 'sponsored-ads.jpg', 'diagnostic-center-full.png',
    'amc-subscribe-analysis.png', 'amc-audience-labels.png',
    'brand-insight-full.png', 'keyword-insight-full.png', 'ai-notifications-full.png',
  ].map((file) => `public/assets/originals/xnurta/${file}`),
  ...[
    'home.jpg', 'intent-analysis.jpg', 'advertising-solutions.jpg',
    'optimization-plans.jpg', 'campaign-creation.jpg', 'campaign-optimization.jpg',
    'managed-group.jpg', 'product-management.jpg',
  ].map((file) => `public/assets/originals/sparkx/${file}`),
  ...[
    'macbook.png', 'spacing-diagram.png', 'icon-template.png', 'icon-grid.png',
    'process-diagram.png', 'reusable-components.png', 'data-visualization.png',
    'candidate-profile.jpg', 'data-dashboard.jpg',
  ].map((file) => `public/assets/originals/ats/${file}`),
  ...[
    'home.jpg', 'project-map.jpg', 'floor-plan.jpg', 'solution.jpg',
    'space-config.jpg', 'component-config.jpg', 'standard.jpg',
  ].map((file) => `public/assets/originals/cpa3/${file}`),
]

async function optimize(source) {
  const absoluteSource = path.join(root, source)
  const metadata = await sharp(absoluteSource).metadata()
  const publicRelative = source.replace(/^public\/assets\//, '').replace(/\.[^.]+$/, '')
  const widths = source.endsWith('chen-ting-new.jpg')
    ? [480, 768, 960]
    : source.endsWith('icon-template.png')
      ? [504]
      : standardWidths

  await Promise.all(widths.map(async (width) => {
    const destination = path.join(outputRoot, `${publicRelative}-${width}.webp`)
    await fs.mkdir(path.dirname(destination), { recursive: true })
    await sharp(absoluteSource)
      .rotate()
      .resize({ width })
      .webp({ quality: 82, alphaQuality: 90, smartSubsample: true, effort: 5 })
      .toFile(destination)
  }))

  return { source, width: metadata.width, height: metadata.height, widths }
}

Promise.all(sources.map(optimize))
  .then((items) => {
    const variants = items.reduce((total, item) => total + item.widths.length, 0)
    console.log(`Optimized ${items.length} source images into ${variants} responsive WebP files.`)
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
