'use client';

export default function CTA() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      // Scroll to contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Open contact form or show options after short delay
      setTimeout(() => {
        // You can add a modal or contact form trigger here
        alert('📞 Call us at: +91-XXXX-XXXX-XX or fill the form below');
      }, 500);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="contact">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Ready to Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Dream Home?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 text-balance leading-relaxed animate-fadeInUp stagger-1">
            Join 1000+ intelligent homebuyers who've already found their perfect home with Propsoch. Transform your home-buying journey with expert guidance, data-driven insights, and unbiased advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fadeInUp stagger-2">
            <button
              onClick={handleContactClick}
              aria-label="Call or book appointment with Propsoch expert"
              className="group relative px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 text-lg overflow-hidden flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span className="text-3xl">☎️</span>
              <span className="relative z-10">
                Book Your Personalized Consult
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button
              aria-label="Start exploring properties on Propsoch"
              className="px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                🔍 Start Exploring
              </span>
            </button>
          </div>

          <p className="text-blue-200 text-sm md:text-base animate-fadeInUp stagger-3">
            ✨ No commitment required. Get personalized guidance from our home-buying experts.
          </p>
        </div>

        <div className="mt-20 pt-20 border-t border-blue-800/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white animate-slideInUp">
          {[
            { icon: '🏠', value: '1000+', label: 'Homes Delivered' },
            { icon: '⏱️', value: '25 Days', label: 'Average Timeline' },
            { icon: '💰', value: '₹4.78L', label: 'Average Savings' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-b from-blue-500/10 to-indigo-500/10 border border-blue-400/20 hover:border-blue-400/50 hover:bg-gradient-to-b hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </p>
              <p className="text-4xl md:text-5xl font-bold text-blue-300 group-hover:text-white transition-colors duration-300 mb-2">
                {stat.value}
              </p>
              <p className="text-blue-100 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 animate-fadeInUp stagger-5">
          {[
            { emoji: '⭐', text: '98% Satisfaction Rating' },
            { emoji: '🔒', text: 'Secure & Transparent' },
            { emoji: '⚡', text: '24/7 Expert Support' },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-2xl">{badge.emoji}</span>
              <span className="text-white font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
