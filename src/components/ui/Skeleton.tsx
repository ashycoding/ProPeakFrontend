import React from 'react'

interface SkeletonProps {
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse rounded-md bg-border-theme/40 ${className}`} />
  )
}

export const SkeletonCard: React.FC = () => {
  return (
    <div className="glass-panel hover-elevate p-6 rounded-xl border border-border-theme/60 bg-bg-card">
      <Skeleton className="h-4 w-1/4 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-16 w-full mb-4" />
      <div className="flex gap-2 mb-4">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-border-theme/40">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  )
}

export const SkeletonTable: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="border border-border-theme rounded-xl overflow-hidden bg-bg-card">
        <div className="bg-brand-950/5 p-4 border-b border-border-theme flex gap-4">
          <Skeleton className="h-4 w-1/5" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/6" />
          <Skeleton className="h-4 w-1/6" />
          <Skeleton className="h-4 w-1/12 ml-auto" />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 border-b border-border-theme/40 flex gap-4 items-center">
            <Skeleton className="h-5 w-1/5" />
            <Skeleton className="h-5 w-1/4" />
            <Skeleton className="h-5 w-1/6" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-lg ml-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export const SkeletonChat: React.FC = () => {
  return (
    <div className="flex h-[600px] border border-border-theme rounded-2xl bg-bg-card overflow-hidden">
      <div className="w-80 border-r border-border-theme p-4 space-y-4">
        <Skeleton className="h-10 w-full" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 p-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-border-theme/40 pb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto">
          <div className="flex gap-3 max-w-[70%]">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-12 w-full rounded-2xl rounded-tl-none" />
          </div>
          <div className="flex gap-3 max-w-[70%] ml-auto justify-end">
            <Skeleton className="h-12 w-full rounded-2xl rounded-tr-none" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <div className="flex gap-3 max-w-[60%]">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-16 w-full rounded-2xl rounded-tl-none" />
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1 rounded-lg" />
          <Skeleton className="h-10 w-12 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
