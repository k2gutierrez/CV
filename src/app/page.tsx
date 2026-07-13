'use client'; 

import React from 'react';
import { 
  Mail, 
  MapPin, 
  Smartphone, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2,
  Download
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function ResumePage() {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-purple-500/30 print:py-0 print:bg-[#111111]"
      style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact', fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* ATS-Optimized print formatting with standard 1cm margins for a clean 2-page layout */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { 
            margin: 1cm; 
            size: letter portrait; 
          }
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
            font-family: Arial, Helvetica, sans-serif !important;
          }
          .page-break-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}} />

      <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 shadow-2xl rounded-xl overflow-hidden print:border-none print:shadow-none print:max-w-full">
        
        {/* Header Section */}
        <header className="relative border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#111111] p-10 print:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between page-break-avoid">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"></div>
          
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight print:text-3xl">
              Carlos E. Gutiérrez Chimal
            </h1>
            <p className="mt-3 text-xl font-mono text-purple-400 print:text-sm print:mt-1">
              &gt; Full Stack Blockchain Developer & Solidity Engineer
            </p>
            
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400 font-mono print:mt-3 print:gap-3 print:text-xs">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="print:w-3" /> Guadalajara, MX</span>
              <span className="flex items-center gap-1.5"><Smartphone size={14} className="print:w-3" /> +52 331 893 0280</span>
              <a href="mailto:cchimal.gutierrez@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                <Mail size={14} className="print:w-3" /> cchimal.gutierrez@gmail.com
              </a>
            </div>
          </div>

          {/* Hidden when printing to PDF via print:hidden */}
          <div className="mt-6 sm:mt-0 flex flex-wrap sm:flex-col lg:flex-row justify-center gap-3 print:hidden">
            <div className="flex gap-2 justify-center">
              <a href="https://github.com/k2gutierrez" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all text-white flex items-center justify-center">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-enrique-gutiérrez-chimal" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-blue-900/50 hover:border-blue-500 transition-all text-white flex items-center justify-center">
                <FaLinkedin size={18} />
              </a>
            </div>

            <div className="flex gap-2 justify-center">
              <a href="https://wa.me/523318930280" target="_blank" rel="noreferrer" className="p-3 bg-green-900/20 border border-green-800/50 rounded-lg hover:bg-green-800/40 hover:border-green-500 transition-all text-green-400 flex items-center justify-center" title="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noreferrer" className="p-3 bg-blue-900/20 border border-blue-800/50 rounded-lg hover:bg-blue-800/40 hover:border-blue-500 transition-all text-blue-400 flex items-center justify-center" title="Telegram">
                <FaTelegramPlane size={18} />
              </a>
              <button onClick={handlePrint} className="px-4 py-3 bg-purple-900/20 border border-purple-800/50 rounded-lg hover:bg-purple-800/40 hover:border-purple-500 transition-all text-purple-400 flex items-center justify-center gap-2 font-mono text-sm">
                <Download size={18} />
                <span className="hidden sm:inline">Save ATS PDF</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 sm:p-10 space-y-12 print:p-6 print:space-y-6">
          
          {/* Summary Section */}
          <section className="page-break-avoid">
            <div className="flex items-center gap-3 mb-4 print:mb-2">
              <Terminal className="text-blue-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Professional Summary</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-base print:text-xs print:leading-normal print:text-gray-300">
              Industrial Engineer and Full Stack Developer with a Master's in Data Science and AI, specializing in Web3 architecture and decentralized application (dApp) development. Expert in engineering secure Solidity smart contracts, optimizing EVM gas consumption, and building responsive full-stack interfaces using Next.js, Wagmi, and RainbowKit. Proven track record of leading smart contract integrations, managing enterprise-level IT workflows, and directing cross-functional industrial operations.
            </p>
          </section>

          {/* Skills Section - ATS Balanced Columns (6 per side) */}
          <section className="page-break-avoid">
            <div className="flex items-center gap-3 mb-6 print:mb-3">
              <Code2 className="text-cyan-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Core Skills & Technologies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg print:p-3 print:border-gray-700">
                <h3 className="font-bold text-sm text-cyan-400 mb-3 uppercase tracking-wider print:mb-2 print:text-xs">Web3 & Software Engineering</h3>
                <ul className="space-y-1.5 text-sm text-gray-300 print:text-xs">
                  <li>• Solidity & Smart Contract Architecture</li>
                  <li>• EVM & Gas Optimization Strategies</li>
                  <li>• Foundry, Hardhat & Testing Pipelines</li>
                  <li>• Next.js, React & TypeScript</li>
                  <li>• Wagmi, RainbowKit & Ethers.js</li>
                  <li>• Zero-Knowledge Proofs (ZKPs) & IPFS</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg print:p-3 print:border-gray-700">
                <h3 className="font-bold text-sm text-purple-400 mb-3 uppercase tracking-wider print:mb-2 print:text-xs">Industrial Systems & Management</h3>
                <ul className="space-y-1.5 text-sm text-gray-300 print:text-xs">
                  <li>• Agile Project & Product Management</li>
                  <li>• Supply Chain & Logistics Operations</li>
                  <li>• ISO9001 Quality Assurance Auditing</li>
                  <li>• BOM Purchase & Cost Optimization</li>
                  <li>• Just-In-Time (JIT) Inventory Controls</li>
                  <li>• AI Framework Integration (CrewAI)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-3 mb-6 print:mb-4">
              <Briefcase className="text-purple-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Professional Experience</h2>
            </div>
            
            <div className="space-y-10 print:space-y-6 border-l border-gray-800 print:border-gray-600 ml-3 pl-6 relative">
              
              {/* MINGLES NFT */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-purple-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-xl font-bold text-gray-100 print:text-sm">Full Stack Blockchain Developer <span className="text-gray-400 font-normal">| MINGLES NFT</span></h3>
                  <span className="font-mono text-sm text-purple-400 mt-1 sm:mt-0 print:text-xs">Jan 2022 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Architected, developed, and deployed highly secure smart contracts on the Ethereum blockchain using Solidity, ensuring strict adherence to ERC-721 and ERC-20 standards.</li>
                  <li>Engineered modern, responsive Web3 frontend interfaces using Next.js, TypeScript, and Tailwind CSS, seamlessly connecting dApps to smart contracts via Wagmi and RainbowKit.</li>
                  <li>Implemented rigorous testing pipelines and gas-optimization strategies using Foundry, successfully reducing transaction execution costs across deployed protocols.</li>
                  <li>Collaborated with cross-functional teams to integrate decentralized storage solutions (IPFS) and implement wallet authentication workflows for seamless user onboarding.</li>
                </ul>
              </div>

              {/* CEDEM */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-lg font-bold text-gray-200 print:text-sm">Project Manager <span className="text-gray-400 font-normal">| CEDEM - Business Owner Center</span></h3>
                  <span className="font-mono text-sm text-gray-400 mt-1 sm:mt-0 print:text-xs">May 2020 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Directed internal IT operations and led the end-to-end architecture and deployment of customized enterprise management systems and web infrastructure.</li>
                  <li>Managed cross-functional consulting projects, establishing Agile workflows and operational logistics that significantly improved project delivery timelines.</li>
                  <li>Streamlined business operations and travel logistics for executive events, optimizing resource allocation and reducing administrative overhead.</li>
                  <li>Integrated automated data management tools and web platforms to track key performance indicators (KPIs) across multiple client portfolios.</li>
                </ul>
              </div>

              {/* Comorph3 */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-blue-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-xl font-bold text-gray-100 print:text-sm">Web3 & Smart Contract Developer (Co-Founder) <span className="text-gray-400 font-normal">| Comorph3</span></h3>
                  <span className="font-mono text-sm text-blue-400 mt-1 sm:mt-0 print:text-xs">Jan 2022 – Feb 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Co-founded and managed a specialized development agency, delivering custom end-to-end Web3 dApps, tokenomics models, and smart contract solutions for external clients.</li>
                  <li>Led the technical scoping, architecture design, and development of decentralized finance (DeFi) tools, custom NFT marketplaces, and DAO voting systems.</li>
                  <li>Conducted preliminary security reviews and peer code audits on Solidity smart contracts to identify vulnerabilities and prevent potential reentrancy or overflow exploits.</li>
                  <li>Communicated complex blockchain concepts to non-technical stakeholders, translating client business requirements into robust on-chain architectural milestones.</li>
                </ul>
              </div>

              {/* Escala Brewery */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-lg font-bold text-gray-200 print:text-sm">Production Manager & Quality Engineer <span className="text-gray-400 font-normal">| Escala Brewery</span></h3>
                  <span className="font-mono text-sm text-gray-400 mt-1 sm:mt-0 print:text-xs">Jan 2017 – Jan 2020</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Supervised daily manufacturing operations, managing a cross-functional production team to ensure consistent output and strict adherence to quality benchmarks.</li>
                  <li>Developed and implemented standardized operating procedures (SOPs), reducing batch variance and improving raw material utilization efficiency.</li>
                  <li>Executed continuous quality control audits across the brewing lifecycle, utilizing statistical process control to identify and resolve production bottlenecks.</li>
                  <li>Negotiated with equipment and ingredient suppliers to optimize inventory levels, reducing procurement costs while maintaining high quality standards.</li>
                </ul>
              </div>
              
              {/* ETT'O electronics */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-lg font-bold text-gray-200 print:text-sm">Supply Chain Manager <span className="text-gray-400 font-normal">| ETT'O electronics</span></h3>
                  <span className="font-mono text-sm text-gray-400 mt-1 sm:mt-0 print:text-xs">Jan 2016 – Jan 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Managed end-to-end supply chain logistics, procurement planning, and vendor negotiations for high-volume Surface-Mount Technology (SMT) electronic manufacturing lines.</li>
                  <li>Implemented Bill of Materials (BOM) cost-optimization strategies, successfully lowering component purchasing costs across key product lines.</li>
                  <li>Directed inventory management workflows, establishing just-in-time (JIT) stock controls to prevent production line downtime and minimize warehousing expenses.</li>
                  <li>Collaborated with engineering and production managers to forecast component demand and resolve supply chain disruptions proactively.</li>
                </ul>
              </div>

              {/* Brewhouse */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-lg font-bold text-gray-200 print:text-sm">Founder & Operator <span className="text-gray-400 font-normal">| Brewhouse</span></h3>
                  <span className="font-mono text-sm text-gray-400 mt-1 sm:mt-0 print:text-xs">Aug 2012 – Aug 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Founded, scaled, and managed all business operations for a commercial bar and craft beer production facility from conceptualization to sustained profitability.</li>
                  <li>Directed financial planning, brand marketing, staff recruitment, and customer relationship management to build a loyal local customer base.</li>
                  <li>Engineered custom craft beer recipes and established small-scale production protocols, maintaining high product quality and inventory control.</li>
                  <li>Handled regulatory compliance, vendor contract negotiations, and facility maintenance to ensure safe and seamless daily operations.</li>
                </ul>
              </div>

              {/* LOMEDIC */}
              <div className="relative page-break-avoid">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                  <h3 className="text-lg font-bold text-gray-200 print:text-sm">Quality Engineer <span className="text-gray-400 font-normal">| LOMEDIC, S.A. DE C.V.</span></h3>
                  <span className="font-mono text-sm text-gray-400 mt-1 sm:mt-0 print:text-xs">Jan 2011 – Jan 2012</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-1 print:text-xs leading-relaxed">
                  <li>Conducted rigorous internal quality audits across operational departments to ensure 100% compliance with ISO9001:2010 international standards.</li>
                  <li>Documented, reviewed, and optimized quality assurance workflows, establishing clear traceable metrics for continuous improvement programs.</li>
                  <li>Identified process discrepancies during routine audits and collaborated with department heads to formulate and enforce corrective action plans.</li>
                  <li>Trained internal staff on quality compliance protocols and documentation standards, elevating organizational awareness of ISO requirements.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 print:gap-6 print:pt-2 page-break-avoid">
            
            <section>
              <div className="flex items-center gap-3 mb-5 print:mb-3">
                <GraduationCap className="text-blue-400 print:w-4" size={24} />
                <h2 className="text-2xl font-bold text-white print:text-lg">Education</h2>
              </div>
              <div className="space-y-4 print:space-y-2">
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg print:p-3 print:border-gray-700">
                  <h3 className="font-bold text-gray-100 print:text-xs">Master in Blockchain Development</h3>
                  <p className="text-gray-400 text-sm mt-1 print:text-[11px] print:mt-0.5">Blockchain Accelerator</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg print:p-3 print:border-gray-700">
                  <h3 className="font-bold text-gray-100 print:text-xs">B.S. Industrial Engineering</h3>
                  <p className="text-gray-400 text-sm mt-1 print:text-[11px] print:mt-0.5">Universidad Tecmilenio</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-5 print:mb-3">
                <Award className="text-cyan-400 print:w-4" size={24} />
                <h2 className="text-2xl font-bold text-white print:text-lg">Certifications</h2>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg h-[calc(100%-44px)] print:p-3 print:h-auto print:border-gray-700">
                <ul className="space-y-3 print:space-y-2 text-gray-300 print:text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span>
                    <span><b>Foundry Fundamentals</b> — <i>Cyfrin</i></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span>
                    <span><b>Full-Stack Web Development with React</b> — <i>The Hong Kong University of Science and Technology</i></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span>
                    <span><b>Cybersecurity Certification</b> — <i>EUNCET, Barcelona</i></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span>
                    <span><b>Master en Data Science / AI</b> — <i>DEV.F</i></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span>
                    <span><b>EF SET English Certificate</b> — <i>C1 Advanced (66/100)</i></span>
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