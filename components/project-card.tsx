"use client" // 👈 REQUIRED for useState, useRef, useEffect

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react" // Added Chevron icons
import { useEffect, useRef, useState } from "react" // Added React Hooks

// Define the character limit for the initial truncated view
const TRUNCATE_LENGTH = 180; 

export type Project = {
  title: string
  description: string
  href?: string
  tags?: string[]
  repo?: string
  live?: string
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  
  // A unique ID for accessibility
  const descId = `${project.title.replaceAll(" ", "-").toLowerCase()}-desc`;

  // Check if the description is long enough to require truncation and the button
  const isTooLong = project.description.length > TRUNCATE_LENGTH;
  
  // The truncated text shown initially
  const initialDescription = isTooLong
    ? project.description.substring(0, TRUNCATE_LENGTH) + '...'
    : project.description;
  
  const fullDescription = project.description;

  // Effect for measuring content height and smooth animation (using ResizeObserver)
  useEffect(() => {
    const el = contentRef.current;
    if (!el || !isTooLong) {
        setHeight(0);
        return;
    }

    const updateHeight = () => {
      // Set height to scrollHeight when expanding, or 0 when collapsing
      setHeight(expanded ? el.scrollHeight : 0);
    };

    updateHeight();

    const ro = new ResizeObserver(() => expanded && setHeight(el.scrollHeight));
    ro.observe(el);

    return () => ro.disconnect();
  }, [expanded, isTooLong, project.description]);


  return (
    <Card className="h-full border-t-2 border-primary ring-1 ring-border transition-all hover:-translate-y-1 hover:bg-secondary/40 hover:ring-accent hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent">
      <CardHeader className="pb-2"> {/* Reduced padding for tighter layout */}
        <CardTitle className="text-base">{project.title}</CardTitle>
        {project.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </CardHeader>

      <CardContent>
        {/* 1. Project Description: Truncated view (or full view if short) */}
        {/* We use CardDescription style here, hiding it when the full view is expanded */}
        <CardDescription className={`text-pretty ${isTooLong && expanded ? 'hidden' : ''}`}>
          {initialDescription}
        </CardDescription>

        {/* 2. Hidden/Animated Expanded Content (only renders if description is too long) */}
        {isTooLong && (
          <div
            id={descId}
            aria-hidden={!expanded}
            className="overflow-hidden transition-all duration-300 ease-out"
            // Set height and opacity for the smooth collapse animation
            style={{ height: height, opacity: expanded ? 1 : 0 }}
          >
            {/* The div wrapped by the ref contains the full content */}
            <div ref={contentRef}>
                {/* Apply the CardDescription class to the full description for styling */}
                <CardDescription className="text-pretty">
                    {fullDescription}
                </CardDescription>
            </div>
          </div>
        )}
        
        {/* 3. Read More/Show Less Button (only renders if description is too long) */}
        {isTooLong && (
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1 text-primary text-sm transition-opacity hover:opacity-90"
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
        )}

        {/* Link Icons Section */}
        {project.repo || project.live ? (
          <div className={`flex items-center gap-4 ${isTooLong ? 'mt-4' : 'mt-2'}`}> 
            {project.repo ? (
              <Link
                href={project.repo}
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </Link>
            ) : null}
            {project.live ? (
              <Link
                href={project.live}
                aria-label={`Open live ${project.title}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Live</span>
              </Link>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}