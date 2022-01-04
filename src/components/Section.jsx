export const Section = ({children, sectionTitle, noPrint}) => {
  return (
        <section className={`mt-8 xl:mt-16 text-left ${noPrint ? "print:hidden": ""}`}>
          <h2 className="text-lg font-bold">{sectionTitle}</h2>
          {children}
        </section>
  )
}
