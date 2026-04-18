import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode, FaUsers, FaBook } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

const StatCard = ({ title, icon, children, delay, className = "" }) => (
  <div 
    className={`reveal-on-scroll stat-card-glass stat-card-glow rounded-3xl p-6 md:p-7 transition-all duration-500 hover:transform hover:scale-[1.02] flex flex-col items-center text-center ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex flex-col items-center gap-2 mb-4 w-full">
      <div className="text-2xl text-cosmic-pink stat-icon-animate shrink-0">{icon}</div>
      <h3 className="text-xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-tight">
        {title}
      </h3>
    </div>
    <div className="flex-grow w-full flex flex-col items-center">
      {children}
    </div>
  </div>
);




const DeveloperStats = () => {
  useScrollReveal();
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubUser = "nandini627";
  const leetcodeUser = "KVXpAaGWcH"; // Corrected username

  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const [solvedRes, profileRes] = await Promise.all([
          fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUser}/solved`),
          fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUser}`)
        ]);

        const solvedData = await solvedRes.json();
        const profileData = await profileRes.json();

        if (solvedData && profileData) {
          // Calculate acceptance rate from submissions
          const allAcSub = solvedData.acSubmissionNum?.find(i => i.difficulty === "All")?.submissions || 0;
          const allTotalSub = solvedData.totalSubmissionNum?.find(i => i.difficulty === "All")?.submissions || 1;
          const acceptanceRate = ((allAcSub / allTotalSub) * 100).toFixed(1);

          setLeetcodeData({
            totalSolved: solvedData.solvedProblem,
            easySolved: solvedData.easySolved,
            mediumSolved: solvedData.mediumSolved,
            hardSolved: solvedData.hardSolved,
            ranking: profileData.ranking,
            acceptanceRate: acceptanceRate
          });
        }
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCode();
  }, [leetcodeUser]);



  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cosmic-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title reveal-on-scroll mb-20 text-center">
          <span className="section-title-bg">My Coding Activity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* GitHub Card */}
          <StatCard 
            title="GitHub" 
            icon={<FaGithub />} 
            delay={100}
            className="flex flex-col h-full"
          >
            <div className="mb-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors w-full">
              <p className="font-extrabold text-white text-lg tracking-tight mb-1.5">@{githubUser}</p>
              <div className="flex justify-center gap-5 text-[9px] text-gray-400 font-black uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><FaBook className="text-cosmic-pink" /> Repos</span>
                <span className="flex items-center gap-1.5"><FaUsers className="text-cosmic-pink" /> Followers</span>
              </div>
            </div>





            
            <div className="space-y-3.5 w-full flex-grow">
              <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/5 p-1.5 shadow-inner group">
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&title_color=FF00FF&text_color=ffffff&icon_color=FF00FF&hide_border=true&bg_color=00000000`}
                  alt="GitHub Stats"
                  className="w-full h-auto transform transition-transform group-hover:scale-[1.01]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/5 p-3 shadow-inner">
                <p className="text-[8px] text-gray-500 mb-2 font-black uppercase tracking-[0.25em]">Dominant Stacks</p>
                <div className="flex justify-center">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=transparent&title_color=FF00FF&text_color=ffffff&icon_color=FF00FF&hide_border=true&bg_color=00000000&langs_count=5`}
                    alt="Top Languages"
                    className="max-w-[90%] h-auto"
                  />
                </div>
              </div>
            </div>



            
            <a 
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 bg-cosmic-pink/10 hover:bg-cosmic-pink/20 text-cosmic-pink border border-cosmic-pink/30 font-bold py-3.5 rounded-2xl transition-all group shadow-lg shadow-cosmic-pink/5"
            >
              Github Profile <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </StatCard>

          {/* LeetCode Card */}
          <StatCard 
            title="LeetCode" 
            icon={<SiLeetcode className="text-orange-500" />} 
            delay={200}
            className="flex flex-col h-full"
          >
            <div className="w-full">
              <div className="mb-4 flex justify-center items-center gap-2 text-gray-400 font-bold text-[9px] uppercase tracking-widest">
                 <span className="opacity-60">ID:</span>
                 <span className="text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 font-black">{leetcodeUser}</span>
              </div>




              
              {loading ? (
                <div className="flex flex-col gap-5 animate-pulse">
                  <div className="h-24 bg-white/5 rounded-3xl w-full"></div>
                  <div className="h-20 bg-white/5 rounded-2xl w-full"></div>
                  <div className="h-20 bg-white/5 rounded-2xl w-full"></div>
                </div>
              ) : leetcodeData ? (
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-around p-5 bg-black/20 rounded-2xl border border-white/10 shadow-inner">
                    <div>
                      <p className="text-2xl font-black text-white leading-none">{leetcodeData.totalSolved}</p>
                      <p className="text-[9px] text-gray-400 uppercase mt-1.5 tracking-widest font-black">Solved</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <div>
                      <p className="text-lg font-black text-cosmic-pink leading-none">#{leetcodeData.ranking}</p>
                      <p className="text-[9px] text-gray-400 uppercase mt-1.5 tracking-widest font-black">Rank</p>
                    </div>
                  </div>






                  <div className="grid grid-cols-3 gap-4">
                    <div className="stat-grid-item text-center group">
                      <p className="text-green-500 font-extrabold text-2xl group-hover:scale-110 transition-transform">{leetcodeData.easySolved}</p>
                      <p className="text-[9px] text-gray-500 uppercase font-black mt-1">Easy</p>
                    </div>
                    <div className="stat-grid-item text-center group">
                      <p className="text-yellow-500 font-extrabold text-2xl group-hover:scale-110 transition-transform">{leetcodeData.mediumSolved}</p>
                      <p className="text-[9px] text-gray-500 uppercase font-black mt-1">Med</p>
                    </div>
                    <div className="stat-grid-item text-center group">
                      <p className="text-red-500 font-extrabold text-2xl group-hover:scale-110 transition-transform">{leetcodeData.hardSolved}</p>
                      <p className="text-[9px] text-gray-500 uppercase font-black mt-1">Hard</p>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-inner">
                    <div className="flex justify-between text-xs text-gray-400 mb-3 font-bold">
                      <span className="uppercase tracking-widest">Acceptance</span>
                      <span className="text-white font-black">{leetcodeData.acceptanceRate}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-1000 ease-out" 
                        style={{ width: `${leetcodeData.acceptanceRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-red-400 text-center py-16 border border-red-500/20 rounded-3xl bg-red-500/5">
                   <p className="font-bold">Sync Error</p>
                   <p className="text-xs mt-1 opacity-60">Failed to refresh live stats</p>
                </div>
              )}
            </div>

            <a 
              href={`https://leetcode.com/u/${leetcodeUser}/`}

              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold py-4 rounded-2xl transition-all group shadow-lg shadow-orange-500/5"
            >
              Analyze Problems <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </StatCard>

          {/* LinkedIn Card */}
          <StatCard 
            title="LinkedIn" 
            icon={<FaLinkedin className="text-[#0077B5]" />} 
            delay={300}
            className="flex flex-col h-full"
          >
             <div className="mb-4 p-4 bg-[#0077B5]/5 rounded-2xl border border-[#0077B5]/10 hover:bg-[#0077B5]/10 transition-colors w-full uppercase tracking-tighter">
                <p className="font-extrabold text-white text-lg mb-1">Nandini Prajapati</p>
                <p className="text-[9px] text-[#0077B5] font-black tracking-widest">Software Developer</p>
            </div>


            <div className="w-full flex-grow space-y-3.5">
              <div className="p-5 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden group shadow-inner">




                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077B5]/10 blur-[40px] rounded-full"></div>
                <p className="text-[10px] text-[#0077B5] font-black uppercase mb-4 tracking-[0.2em]">Latest Activity</p>
                <div className="h-32 bg-black/30 rounded-2xl mb-4 flex items-center justify-center border border-white/5 group-hover:bg-black/20 transition-colors">
                   <p className="text-gray-500 italic text-sm text-center px-6 leading-relaxed">Connecting dots in the tech universe...</p>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2 italic px-1">
                  "Building high-performance cosmic web experiences with React & Tailwind CSS."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-grid-item text-center">
                  <p className="text-white font-black text-lg">500+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-tighter">Network</p>
                </div>
                <div className="stat-grid-item text-center">
                  <p className="text-white font-black text-lg">Hot</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-tighter">Presence</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/in/nandini-prajapati-6351363b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] border border-[#0077B5]/30 font-bold py-3.5 rounded-2xl transition-all group shadow-lg shadow-[#0077B5]/5 w-full"
            >
              Connect Now <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </StatCard>
        </div>
      </div>
    </section>
  );
};

export default DeveloperStats;
