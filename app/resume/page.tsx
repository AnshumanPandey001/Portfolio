export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      <h1 className="text-2xl font-semibold">Resume</h1>

      <p className="mt-1 text-sm text-muted-foreground">
        View the embedded resume below or{" "}
        <a
          href="/ANSHUMAN-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          open it in a new tab
        </a>
        .
      </p>

      <div className="mt-6 overflow-hidden rounded-md border">
        <iframe
          src="/ANSHUMAN-Resume.pdf"
          className="h-[80vh] w-full"
          title="Anshuman Resume"
        ></iframe>
      </div>
    </main>
  )
}
