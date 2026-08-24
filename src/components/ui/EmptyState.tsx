import React from 'react'
import * as Icons from 'lucide-react'

interface EmptyStateProps {
  iconName: keyof typeof Icons
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  iconName,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  const IconComponent = Icons[iconName] as React.ComponentType<any>

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border-theme bg-bg-card max-w-lg mx-auto my-8">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-bg-badge text-brand-800 mb-6 shadow-sm">
        {IconComponent && <IconComponent className="w-8 h-8 stroke-[1.5]" />}
      </div>
      
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-xs">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-brand-800 hover:bg-brand-950 transition-all duration-200 shadow-sm shadow-brand-950/10"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
