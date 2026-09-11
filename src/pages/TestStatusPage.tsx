import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  Mail, 
  ExternalLink, 
  RefreshCw, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  AlertTriangle,
  Send,
  Info
} from 'lucide-react'
import SeoHead from '@/components/ui/SeoHead'
import { siteConfig } from '@/config/site'

interface ApiTestResponse {
  status?: string
  service?: string
  version?: string
  deployedAt?: string
  configuredEmail?: string
  siteUrl?: string
  deploymentCheck?: {
    emailReflected?: boolean
    instructions?: string
  }
  [key: string]: any
}

export const TestStatusPage: React.FC = () => {
  const [apiData, setApiData] = useState<ApiTestResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [lastFetched, setLastFetched] = useState<string | null>(null)
  const [copied, setCopied] = useState<boolean>(false)

  const fetchApiStatus = async () => {
    setLoading(true)
    setError(null)
    try {
      // Add cache buster query to bypass any CDN or browser cache
      const res = await fetch(`/api/test.json?t=${Date.now()}`)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()
      setApiData(data)
      setLastFetched(new Date().toLocaleTimeString())
    } catch (err: any) {
      setError(err.message || 'Failed to fetch API endpoint')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApiStatus()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="min-h-screen bg-[#021A12] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead 
        title="Test Endpoints & Netlify Deployment Diagnostics | ProPeak" 
        description="Live diagnostics and test endpoints to verify build configurations, email variables, and Netlify deployment state." 
      />

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D7A58]/30 border border-[#7FFFD4]/30 text-[#7FFFD4] text-xs font-semibold uppercase tracking-wider">
            <Server className="w-3.5 h-3.5" />
            Deployment Diagnostics & Live Test Endpoint
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#E6FFF5] to-[#7FFFD4] bg-clip-text text-transparent">
            Netlify Reflection & Email Verification
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Use this dashboard and direct JSON test endpoints to check whether recent code changes (including email updates) are live on Netlify.
          </p>
        </div>

        {/* Primary Email Reflected Card */}
        <div className="bg-[#052E20]/80 border-2 border-[#7FFFD4]/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-[#7FFFD4]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#7FFFD4] text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#7FFFD4]" />
                Current Active App Email
              </div>
              <div className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-wide">
                {siteConfig.email}
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Resolved from: <code className="bg-black/40 px-2 py-0.5 rounded text-[#7FFFD4]">import.meta.env.VITE_CONTACT_EMAIL</code> or default fallback.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all active:scale-95"
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
              <a
                href={`mailto:${siteConfig.email}?subject=Netlify Deployment Email Test`}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#7FFFD4] text-[#021A12] hover:bg-[#5ce8bc] text-sm font-bold shadow-lg transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                Send Test Mail
              </a>
            </div>
          </div>
        </div>

        {/* Live Test Endpoints Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* JSON Endpoint 1: /api/test.json */}
          <div className="bg-[#052E20]/60 border border-white/10 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#7FFFD4]" />
                <h3 className="font-bold text-lg text-white">Endpoint: <code>/api/test.json</code></h3>
              </div>
              <a 
                href="/api/test.json" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#7FFFD4] hover:underline"
              >
                Open Raw <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-300">
              Direct static JSON endpoint served directly by Netlify / webserver.
            </p>
            <div className="bg-[#021A12] border border-white/5 rounded-lg p-3 font-mono text-xs text-[#7FFFD4] overflow-x-auto">
              GET /api/test.json
            </div>
            <button
              onClick={fetchApiStatus}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0D7A58] hover:bg-[#0D7A58]/80 text-white text-xs font-semibold transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Querying Endpoint...' : 'Fetch Live Response (Cache-Busted)'}
            </button>
          </div>

          {/* JSON Endpoint 2: /api/status.json */}
          <div className="bg-[#052E20]/60 border border-white/10 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#7FFFD4]" />
                <h3 className="font-bold text-lg text-white">Endpoint: <code>/api/status.json</code></h3>
              </div>
              <a 
                href="/api/status.json" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#7FFFD4] hover:underline"
              >
                Open Raw <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-300">
              Lightweight healthcheck JSON endpoint for monitoring uptime & build status.
            </p>
            <div className="bg-[#021A12] border border-white/5 rounded-lg p-3 font-mono text-xs text-[#7FFFD4] overflow-x-auto">
              GET /api/status.json
            </div>
            <a
              href="/api/status.json"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View /api/status.json in Browser
            </a>
          </div>
        </div>

        {/* Live Response Viewer */}
        <div className="bg-[#052E20]/60 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#7FFFD4]" />
              <h3 className="font-bold text-base text-white">Live Endpoint Response Inspection</h3>
            </div>
            {lastFetched && (
              <span className="text-xs text-slate-400">
                Last checked: <span className="text-white font-mono">{lastFetched}</span>
              </span>
            )}
          </div>

          {loading && (
            <div className="py-8 text-center text-slate-300 text-sm animate-pulse">
              Contacting Netlify / localhost endpoint...
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-950/50 border border-red-500/50 rounded-lg text-red-200 text-xs font-mono">
              Error fetching endpoint: {error}
            </div>
          )}

          {apiData && !loading && (
            <pre className="bg-[#021A12] border border-white/10 rounded-xl p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          )}
        </div>

        {/* Site Configuration Matrix */}
        <div className="bg-[#052E20]/60 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#7FFFD4]" />
            <h3 className="font-bold text-base text-white">Resolved Configuration Matrix</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-2.5 px-3">Configuration Key</th>
                  <th className="py-2.5 px-3">Resolved Value</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">siteConfig.email</td>
                  <td className="py-2.5 px-3 text-white font-bold">{siteConfig.email}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">siteConfig.url</td>
                  <td className="py-2.5 px-3">{siteConfig.url}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">siteConfig.phone</td>
                  <td className="py-2.5 px-3">{siteConfig.phone}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">siteConfig.googleFormUrl</td>
                  <td className="py-2.5 px-3 truncate max-w-xs">{siteConfig.googleFormUrl}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">Instagram URL</td>
                  <td className="py-2.5 px-3 truncate max-w-xs">{siteConfig.socialLinks.instagram}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-[#7FFFD4]">LinkedIn URL</td>
                  <td className="py-2.5 px-3 truncate max-w-xs">{siteConfig.socialLinks.linkedin}</td>
                  <td className="py-2.5 px-3 text-emerald-400">✓ Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Netlify Might Not Reflect Changes - Troubleshooting Guide */}
        <div className="bg-[#052E20]/80 border border-amber-500/30 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-white">
                Why Netlify Changes Might Not Reflect & How to Fix Them
              </h3>
              <p className="text-xs text-slate-300">
                Check these 4 common causes if you've updated the email in code but Netlify still shows an old address.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-[#021A12] border border-white/5 rounded-lg space-y-2">
              <span className="font-bold text-amber-300">1. Netlify Dashboard Environment Variable Override</span>
              <p className="text-slate-300">
                In Vite, build-time variables (<code className="text-[#7FFFD4]">VITE_*</code>) set inside Netlify's Web UI (<strong>Site Configuration &gt; Environment variables</strong>) completely override values in your repository's code.
              </p>
              <div className="text-slate-400">
                <strong>Fix:</strong> Go to Netlify Dashboard &gt; <em>Environment variables</em> &gt; Check if <code className="text-white">VITE_CONTACT_EMAIL</code> is set to an old email. Update or delete it, then click <strong>Trigger deploy &gt; Clear cache and deploy site</strong>.
              </div>
            </div>

            <div className="p-4 bg-[#021A12] border border-white/5 rounded-lg space-y-2">
              <span className="font-bold text-amber-300">2. Repository or Branch Mismatch</span>
              <p className="text-slate-300">
                Ensure Netlify is building the exact Git repository and branch you are pushing to (e.g., <code className="text-[#7FFFD4]">main</code> on <code className="text-[#7FFFD4]">ashycoding/ProPeakFrontend</code> vs <code className="text-[#7FFFD4]">ashok/frontend</code> on <code className="text-[#7FFFD4]">Anubhavspeaks01/ProPeak-Website-</code>).
              </p>
              <div className="text-slate-400">
                <strong>Fix:</strong> In Netlify Dashboard, check <strong>Build &amp; deploy &gt; Continuous Deployment &gt; Repository &amp; Branch to deploy</strong>.
              </div>
            </div>

            <div className="p-4 bg-[#021A12] border border-white/5 rounded-lg space-y-2">
              <span className="font-bold text-amber-300">3. Netlify Build Cache</span>
              <p className="text-slate-300">
                Netlify caches npm dependencies and build artifacts. Sometimes an incremental rebuild reuses cached chunks.
              </p>
              <div className="text-slate-400">
                <strong>Fix:</strong> In Netlify Dashboard &gt; <strong>Deploys</strong> &gt; Click <strong>"Trigger deploy"</strong> dropdown &gt; Select <strong>"Clear cache and deploy site"</strong>.
              </div>
            </div>

            <div className="p-4 bg-[#021A12] border border-white/5 rounded-lg space-y-2">
              <span className="font-bold text-amber-300">4. Browser / CDN Caching</span>
              <p className="text-slate-300">
                Browsers heavily cache JavaScript bundle files (<code className="text-white">index-[hash].js</code>) and HTML documents.
              </p>
              <div className="text-slate-400">
                <strong>Fix:</strong> Perform a hard reload in your browser (<kbd className="bg-black/50 px-1 py-0.5 rounded text-[#7FFFD4]">Ctrl + Shift + R</kbd> or <kbd className="bg-black/50 px-1 py-0.5 rounded text-[#7FFFD4]">Cmd + Shift + R</kbd>) or test in an Incognito window.
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="text-center pt-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#7FFFD4] hover:underline"
          >
            ← Return to ProPeak Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestStatusPage
