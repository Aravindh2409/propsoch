'use client';

interface JourneyStage {
  id: number;
  stage: string;
  title: string;
  description: string;
  icon: string;
}

const journeyStages: JourneyStage[] = [
  {
    id: 1,
    stage: 'Stage 1',
    title: 'Discovery',
    description:
      "Tell us about you and your ideal home. We'll prioritize your family's non-negotiables.",
    icon: '🔍',
  },
  {
    id: 2,
    stage: 'Stage 2',
    title: 'Shortlisting',
    description:
      'Explore curated options sorted by location, builder, and budget with detailed insights.',
    icon: '📝',
  },
  {
    id: 3,
    stage: 'Stage 3',
    title: 'Site Visits',
    description:
      'Visit properties with our market experts. Professional guidance at every step.',
    icon: '🚶',
  },
  {
    id: 4,
    stage: 'Stage 4',
    title: 'Analysis',
    description:
      'Spot design risks, legal troubles, and hidden costs that others overlook.',
    icon: '📊',
  },
  {
    id: 5,
    stage: 'Stage 5',
    title: 'Negotiation',
    description:
      'Armed with insights, we negotiate on your behalf for the best possible offer.',
    icon: '🤝',
  },
  {
    id: 6,
    stage: 'Stage 6',
    title: 'Home Sweet Home',
    description:
      'Connect with our trusted legal and financial experts for final support.',
    icon: '🏡',
  },
];

export default function About() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="journey">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="section-container relative">
        <div className="mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Your Complete
            <span className="block gradient-text">Home-Buying Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl text-balance mt-6">
            From understanding your needs to closing the deal, we guide you through every step with expertise and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {journeyStages.map((stage, idx) => (
            <div
              key={stage.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="group relative p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-white hover:bg-gradient-to-br hover:from-indigo-50 to-purple-50 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden cursor-pointer">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                  }}
                ></div>

                <div className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transform transition-all duration-300">
                      <span className="text-2xl">{stage.icon}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1 group-hover:text-indigo-700">
                      {stage.stage}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:gradient-text transition-all duration-300">
                      {stage.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {stage.description}
                    </p>
                  </div>

                  {/* Connection line indicator */}
                  {idx < journeyStages.length - 1 && idx % 2 === 0 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 border-t border-slate-200">
          <div className="animate-fadeInLeft">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight text-balance">
              Why Intelligent Homebuyers Choose Propsoch
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: '🎯 Unbiased Expertise',
                  desc: 'Our advisors work for you, not sellers. Zero commission conflicts.',
                },
                {
                  title: '📊 Data-Driven Decisions',
                  desc: '80+ verified data points per property including design, legal, and financial analysis.',
                },
                {
                  title: '👨‍🔧 Trained Architects',
                  desc: 'Professional site visit analysis conducted by certified architects and experts.',
                },
                {
                  title: '💰 Transparent Pricing',
                  desc: 'Know exactly what you\'re paying for. No hidden costs or surprise fees.',
                },
                {
                  title: '✅ Proven Results',
                  desc: '9 in 10 homebuyers find their home within 25 days. Average savings: ₹4.78L.',
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 animate-fadeInLeft stagger"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-2xl"></div>
            <div className="relative space-y-6">
              {[
                { label: 'Homebuyer Satisfaction', value: '98%', desc: 'Would recommend to friends & family' },
                { label: 'Average Timeline', value: '25 Days', desc: 'From first meeting to property booking' },
                { label: 'Average Savings', value: '₹4.78L', desc: 'Through smart negotiation & market insights' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl group cursor-pointer transition-all duration-300 animate-slideInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                  <div className="relative">
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
                      {stat.label}
                    </p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">
                      {stat.value}
                    </p>
                    <p className="text-slate-600 text-sm mt-3 group-hover:text-slate-900 transition-colors duration-300">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
