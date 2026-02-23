'use client';

export default function Hero() {
  const handleContactScroll = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                Navigate Your Home Purchase
                <span className="block gradient-text">Intelligently</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed text-balance animate-fadeInUp stagger-1">
                Expert guidance + AI-powered insights for 1000+ homebuyers
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-fadeInUp stagger-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-3 border-white flex items-center justify-center text-white text-sm font-bold transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base text-slate-600">
                <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1000+</span>{' '}
                homebuyers trust us
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp stagger-3">
              <button
                aria-label="Book appointment with Propsoch expert"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">Book Free Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button
                aria-label="Explore properties on Propsoch"
                className="btn-secondary"
              >
                Explore Properties
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 animate-fadeInUp stagger-4">
              {[
                { value: '1000+', label: 'Homes Delivered' },
                { value: '80+', label: 'Data Points' },
                { value: '₹4.78L', label: 'Avg. Savings' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                >
                  <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-1 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-2xl"></div>
            <div className="relative h-72 md:h-96 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-8 md:p-12 border border-blue-200 shadow-2xl overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
              </div>

              <div className="relative space-y-6 text-center animate-float">
                <button
                  onClick={handleContactScroll}
                  aria-label="Call or contact Propsoch"
                  className="inline-block p-4 bg-white rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300 animate-pulse-glow hover:shadow-2xl hover:shadow-orange-400/50 cursor-pointer"
                >
                  <span className="text-5xl block">☎️</span>
                </button>
                <p className="text-slate-600 font-medium text-lg">
                  Book your
                  <span className="text-slate-900 font-bold block">
                    personalized consultation
                  </span>
                </p>
                <p className="text-sm text-slate-500">
                  ⚡ Average finding time: 25 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
