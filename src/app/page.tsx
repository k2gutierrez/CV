import { 
  Mail, 
  MapPin, 
  Smartphone, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 shadow-2xl rounded-xl overflow-hidden">
        
        {/* Header Section */}
        <header className="relative border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#111111] p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"></div>
          
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Carlos E. Gutiérrez
            </h1>
            <p className="mt-3 text-xl font-mono text-purple-400">
              &gt; Full Stack Blockchain Developer & Solidity Engineer
            </p>
            
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400 font-mono">
              <span className="flex items-center gap-1.5"><MapPin size={16} /> Guadalajara, MX</span>
              <span className="flex items-center gap-1.5"><Smartphone size={16} /> +52 331 893 0280</span>
              <a href="mailto:cchimal.gutierrez@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                <Mail size={16} /> cchimal.gutierrez@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 flex sm:flex-col gap-4">
            <a href="https://github.com/k2gutierrez" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all text-white flex items-center justify-center">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/carlos-enrique-gutiérrez-chimal" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-blue-900/50 hover:border-blue-500 transition-all text-white flex items-center justify-center">
              <FaLinkedin size={20} />
            </a>
          </div>
        </header>

        <div className="p-8 sm:p-10 space-y-12">
          
          {/* Summary Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Profile Summary</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Industrial Engineer and Full Stack Developer with a Master's in Data Science and AI, specializing in Web3. Expertise in engineering secure Solidity smart contracts and building scalable decentralized applications (dApps) using Next.js, Wagmi, and RainbowKit. Proven track record of leading smart contract integrations for Web3 organizations and driving enterprise-level technological solutions.
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg">
                <h3 className="font-mono text-sm text-gray-500 mb-3 uppercase tracking-wider">Web3 & Blockchain</h3>
                <div className="flex flex-wrap gap-2 text-sm font-mono text-cyan-300">
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded">Solidity</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded">Foundry</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded">Wagmi</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded">RainbowKit</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded">ZKPs</span>
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg">
                <h3 className="font-mono text-sm text-gray-500 mb-3 uppercase tracking-wider">Frontend & Backend</h3>
                <div className="flex flex-wrap gap-2 text-sm font-mono text-purple-300">
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded">Next.js</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded">React</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded">Supabase</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded">Python</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-purple-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-8 border-l border-gray-800 ml-3 pl-6 relative">
              
              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-100">Full Stack Blockchain Developer <span className="text-gray-500 font-normal">@ MINGLES NFT</span></h3>
                  <span className="font-mono text-sm text-purple-400 mt-1 sm:mt-0">Jan 2022 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Engineer and deploy secure smart contracts on the Ethereum blockchain using Solidity.</li>
                  <li>Develop and maintain modern, responsive decentralized applications (dApps) using Next.js.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-100">Web3 & Smart Contract Dev <span className="text-gray-500 font-normal">@ Comorph3</span></h3>
                  <span className="font-mono text-sm text-blue-400 mt-1 sm:mt-0">Jan 2022 – Feb 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Co-founded a specialized development agency delivering end-to-end Web3 projects.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-200">Project Manager <span className="text-gray-500 font-normal">@ CEDEM</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0">May 2020 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Lead internal IT operations, including the architecture of custom management systems.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-200">Production Manager <span className="text-gray-500 font-normal">@ Escala Brewery</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0">Jan 2017 – Jan 2020</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Served as production manager and quality engineer, overseeing brewing operations.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-200">Supply Chain Manager <span className="text-gray-500 font-normal">@ ETT'O electronics</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0">Jan 2016 – Jan 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Managed supply chain operations including planning, purchasing, negotiating, and controlling production in the SMT line.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-200">Founder <span className="text-gray-500 font-normal">@ Brewhouse</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0">Aug 2012 – Aug 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Founded and operated a business venture featuring a commercial bar and craft beer production.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-200">Quality Engineer <span className="text-gray-500 font-normal">@ LOMEDIC, S.A. DE C.V.</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0">Jan 2011 – Jan 2012</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1.5">
                  <li>Executed internal audits and enforced continuous improvement protocols for ISO9001:2010 compliance.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="text-blue-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-100">Master in Blockchain Development</h3>
                  <p className="text-gray-500 text-sm mt-1">Blockchain Accelerator</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-100">B.S. Industrial Engineering</h3>
                  <p className="text-gray-500 text-sm mt-1">Universidad Tecmilenio</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <Award className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg h-[calc(100%-44px)]">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▹</span> Foundry Fundamentals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▹</span> Fundamentals of Zero-Knowledge Proofs (ZKPs)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▹</span> Cybersecurity (EUNCET, Barcelona)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▹</span> EF SET English (C1 Advanced)
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}