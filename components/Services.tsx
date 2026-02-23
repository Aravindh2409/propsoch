'use client';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Guided Home Buying',
    description:
      'Personalized shortlisting, site visit coordination, and expert negotiation support from start to finish.',
    icon: '🏠',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Peace of Mind Report',
    description:
      '80+ data points per property: design analysis, legal checks, investment potential, and risk assessment.',
    icon: '📋',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 3,
    title: 'Expert Negotiation',
    description:
      'Armed with market insights, our wizards negotiate on your behalf to secure the best possible offer.',
    icon: '💼',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Legal & Financial',
    description:
      'Navigate title checks, agreement reviews, tax planning, and home loan coordination with trusted experts.',
    icon: '⚖️',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 5,
    title: 'Market Insights',
    description:
      'Understand connectivity, location potential, builder credibility, and investment returns before committing.',
    icon: '📊',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 6,
    title: 'Property Comparison',
    description:
      'Compare up to 3 properties side by side across pricing, amenities, timelines, and floor plans.',
    icon: '🔄',
    color: 'from-orange-500 to-red-600',
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mb-16 md:mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            What Makes Us
            <span className="block gradient-text">Different</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-balance mt-6">
            We simplify the complex home-buying journey with transparent data, unbiased advice, and end-to-end support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="animate-fadeInUp stagger group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`}
                ></div>

                <div className="relative">
                  <div className={`text-6xl mb-6 group-hover:scale-125 transform transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-slate-200 animate-fadeInUp stagger-5">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-balance">
            How We Compare to Traditional Options
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200">
                  <th className="text-left py-5 px-6 font-bold text-slate-900">
                    Feature
                  </th>
                  <th className="text-center py-5 px-6 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Propsoch
                  </th>
                  <th className="text-center py-5 px-6 font-semibold text-slate-600">
                    Online Portals
                  </th>
                  <th className="text-center py-5 px-6 font-semibold text-slate-600">
                    Local Brokers
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Data Points Per Property', propsoch: '80+', portals: '20-40', brokers: '20-40' },
                  { feature: 'Unbiased Guidance', propsoch: '✓', portals: '✗', brokers: '✗' },
                  { feature: 'Expert Analysis', propsoch: '✓', portals: '✗', brokers: 'Limited' },
                  { feature: 'End-to-End Support', propsoch: '✓', portals: '✗', brokers: 'Limited' },
                  { feature: 'Transparent Pricing', propsoch: '✓', portals: '✓', brokers: '✗' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-300 group"
                  >
                    <td className="py-5 px-6 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="text-center py-5 px-6 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {row.propsoch}
                    </td>
                    <td className="text-center py-5 px-6 text-slate-600 group-hover:text-slate-900 transition-colors">
                      {row.portals}
                    </td>
                    <td className="text-center py-5 px-6 text-slate-600 group-hover:text-slate-900 transition-colors">
                      {row.brokers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
