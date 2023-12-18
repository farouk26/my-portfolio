function EducationPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full minh-fit gap-4">
        {/* Header */}
        <div className="bg-zinc-800 h-80 w-full rounded-3xl shadow-sm p-8">
          <div className="flex flex-col h-full gap-3 w-1/2 justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Education
            </h1>
            <p className="text-md text-white font-light">
              This section serves as
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage
