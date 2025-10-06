"use client"
import { cn } from "@/lib/utils"

type Tag = { label: string }
export type FeaturedProject = {
  title: string
  summary: string
  imageAlt?: string
  tags: Tag[]
  href?: string
  repo?: string
}

export default function FeaturedProjectCard({ project, className }: { project: FeaturedProject; className?: string }) {
  const { title, summary, tags } = project
  return (
    <article className={cn("card-gradient p-5 md:p-6 lg:p-8", className)}>
      <div className="aspect-[16/9] w-full rounded-[calc(var(--radius)_+_2px)] bg-[rgba(255,255,255,0.02)] grid place-items-center">
        <div className="flex items-center gap-6 opacity-60">
          <span className="h-9 w-9 rounded-full bg-[rgba(255,255,255,0.08)] grid place-items-center text-lg">
            {"<"}
          </span>
          <span className="h-9 w-9 rounded-full bg-[rgba(255,255,255,0.08)] grid place-items-center text-lg">
            {">"}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-3 text-balance text-[15px] leading-relaxed opacity-90">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="rounded-full px-3 py-1 text-sm"
              style={{
                background: "color-mix(in oklab, var(--brand-start) 22%, transparent)",
                border: "1px solid color-mix(in oklab, var(--brand-end) 40%, transparent)",
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
