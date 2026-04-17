import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a15] via-[#1A1A2E] to-[#0f1420]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AetherGrid"
              width={48}
              height={48}
              priority
            />
            <span className="text-2xl font-bold text-white">AetherGrid</span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#0099cc] bg-clip-text text-transparent"> Cloud Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AetherGrid delivers next-generation cloud solutions with unparalleled performance, security, and scalability. Build faster, scale smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#00D9FF]/50 transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-[#00D9FF] text-[#00D9FF] rounded-lg font-semibold text-lg hover:bg-[#00D9FF]/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/30 rounded-2xl p-8">
            <div className="text-red-400 text-sm font-semibold mb-3">THE PROBLEM</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Traditional Infrastructure Is Holding You Back
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Slow deployment times costing you competitive advantage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Unpredictable scaling leading to downtime or wasted resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Complex security configurations creating vulnerabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Skyrocketing costs with legacy cloud providers</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-[#00D9FF]/20 to-[#0099cc]/20 border border-[#00D9FF]/30 rounded-2xl p-8">
            <div className="text-[#00D9FF] text-sm font-semibold mb-3">THE SOLUTION</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              AetherGrid: Built for Speed & Scale
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Deploy in seconds with our intelligent automation platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Auto-scaling that predicts demand before it happens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Enterprise-grade security built in from the ground up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Transparent pricing that scales with your actual usage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features, Zero Complexity
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">Deploy your applications in seconds with our optimized infrastructure and global CDN.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bank-Level Security</h3>
            <p className="text-gray-400">SOC 2 compliant with end-to-end encryption, DDoS protection, and automated threat detection.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Auto-Scaling</h3>
            <p className="text-gray-400">AI-powered scaling that predicts traffic patterns and adjusts resources automatically.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Edge Network</h3>
            <p className="text-gray-400">Serve content from 150+ locations worldwide with 99.99% uptime guarantee.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Developer-Friendly</h3>
            <p className="text-gray-400">Simple APIs, comprehensive docs, and CLI tools that developers actually enjoy using.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing</h3>
            <p className="text-gray-400">Pay only for what you use. No hidden fees, no surprises. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-2xl p-8 hover:border-[#00D9FF]/50 transition-all">
            <div className="text-gray-400 text-sm font-semibold mb-2">STARTER</div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-gray-400 mb-6">Perfect for side projects and MVPs</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>100GB bandwidth</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>10GB storage</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>SSL certificates</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Community support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-[#00D9FF] text-[#00D9FF] rounded-lg font-semibold hover:bg-[#00D9FF]/10 transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div className="bg-gradient-to-br from-[#00D9FF]/20 to-[#0099cc]/20 border-2 border-[#00D9FF] rounded-2xl p-8 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] rounded-full text-sm font-semibold text-white">
              MOST POPULAR
            </div>
            <div className="text-[#00D9FF] text-sm font-semibold mb-2">PRO</div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$49</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-gray-300 mb-6">For growing teams and businesses</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-200">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>1TB bandwidth</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>100GB storage</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Auto-scaling</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#00D9FF]/50 transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0f1420] border border-gray-700/50 rounded-2xl p-8 hover:border-[#00D9FF]/50 transition-all">
            <div className="text-gray-400 text-sm font-semibold mb-2">ENTERPRISE</div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <p className="text-gray-400 mb-6">For large-scale applications</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Unlimited bandwidth</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Dedicated infrastructure</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>24/7 phone support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#00D9FF] mt-1">✓</span>
                <span>Custom SLA</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-[#00D9FF] text-[#00D9FF] rounded-lg font-semibold hover:bg-[#00D9FF]/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#00D9FF]/20 to-[#0099cc]/20 border border-[#00D9FF]/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and companies already building on AetherGrid
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0099cc] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#00D9FF]/50 transition-all">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2026 AetherGrid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
