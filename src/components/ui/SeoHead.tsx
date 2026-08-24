import { useEffect } from 'react'
import { siteConfig } from '@/config/site'

interface SeoHeadProps {
  title?: string
  description?: string
  canonicalPath?: string
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | ${siteConfig.tagline}`
    document.title = formattedTitle

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]')
    const descContent =
      description ||
      'ProPeak connects businesses with skilled talent for websites, AI solutions, data, video, content, and digital projects.'
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent)
    }

    // 3. Update or Append Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    const fullCanonicalUrl = `${siteConfig.url.replace(/\/$/, '')}${
      canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`
    }`

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullCanonicalUrl)

    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [title, description, canonicalPath])

  return null
}

export default SeoHead
