"use client"

import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Props = {
  title: string
  company: string
  period: string
  location: string
  description?: string
}

export function ExperienceCard({ title, company, period, location, description }: Props) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const descId = `${title.replaceAll(" ", "-").toLowerCase()}-desc`

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const update = () => {
      setHeight(expanded ? el.scrollHeight : 0)
    }
    update()
    const ro = new ResizeObserver(() => expanded && setHeight(el.scrollHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [expanded, description])

  return (
    <div className="gradient-frame transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="glass-surface glass-inner p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-border p-2 text-primary">
              <Briefcase className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-pretty text-xl md:text-2xl font-semibold">{title}</h3>
          </div>

          <p className="text-lg text-primary font-medium">{company}</p>

          <div className="mt-1 grid grid-cols-1 gap-3 text-sm md:text-base text-foreground/80 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{location}</span>
            </div>
          </div>

          <div
            id={descId}
            aria-hidden={!expanded}
            className="mt-1 overflow-hidden transition-all duration-300 ease-out"
            style={{ height: height, opacity: expanded ? 1 : 0.0 }}
          >
            <div ref={contentRef}>
              {description ? (
                <p className="mt-1 text-sm md:text-base leading-relaxed text-foreground/80 text-pretty">
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-90"
              aria-expanded={expanded}
              aria-controls={descId}
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" aria-hidden="true" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
