import Placeholder from './Placeholder.jsx';

const CARDS = [
  {
    icon: 'shield icon',
    title: 'Security and compliance',
    body: 'We lead with a security-first mindset',
  },
  {
    icon: 'grid icon',
    title: 'Integrations',
    body: 'Integrate for planning management tools',
  },
];

export default function TwoColumnFeatures() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
      {CARDS.map((card) => (
        <div key={card.title} className="rounded-2xl bg-gray-200/60 p-8">
          <Placeholder label={card.icon} dark className="h-12 w-12 rounded-xl" />
          <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-500">{card.body}</p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primaryDark transition-all hover:gap-3"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      ))}
    </section>
  );
}
