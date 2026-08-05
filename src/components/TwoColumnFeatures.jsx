const CARDS = [
  {
    icon: 'fa-shield-halved',
    title: 'Security and compliance',
    body: 'We lead with a security-first mindset',
  },
  {
    icon: 'fa-table-cells-large',
    title: 'Integrations',
    body: 'Integrate for planning management tools',
  },
];

export default function TwoColumnFeatures() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
      {CARDS.map((card) => (
        <div key={card.title} className="rounded-2xl bg-gray-200/60 p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-primary">
            <i className={`fa-solid ${card.icon} text-lg`} />
          </span>
          <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-500">{card.body}</p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primaryDark transition-colors hover:text-ink"
          >
            Learn More <i className="fa-solid fa-arrow-right text-xs" />
          </a>
        </div>
      ))}
    </section>
  );
}
