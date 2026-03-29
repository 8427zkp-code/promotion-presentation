import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  targetId: string;
  shortLabel?: string;
}

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: '关于我', targetId: 'about', shortLabel: '关于' },
    { label: '工作职责与目标', targetId: 'responsibilities', shortLabel: '职责' },
    { label: '主要工作成果', targetId: 'achievements', shortLabel: '成果' },
    { label: '未来规划', targetId: 'future', shortLabel: '规划' },
    { label: '互动交流', targetId: 'interactive', shortLabel: '互动' }
  ];

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
      setIsMenuOpen(false);
      setTimeout(() => {
        element.classList.add('highlight-pulse');
        setTimeout(() => element.classList.remove('highlight-pulse'), 600);
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.targetId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey) {
        const map: Record<string, string> = { '1': 'about', '2': 'responsibilities', '3': 'achievements', '4': 'future', '5': 'interactive' };
        if (map[e.key]) {
          e.preventDefault();
          scrollToSection(map[e.key]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      {/* 占位高度减小，帮助首屏上移 */}
      <div className="h-16" />
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="px-4 py-2">
          {/* 桌面端 - 透明背景，多巴胺选中态 */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-3 lg:gap-4">
              {navItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`px-3 py-1 text-sm font-medium transition-all duration-200
                    ${activeSection === item.targetId
                      ? 'text-[#FF1493] underline underline-offset-6 decoration-3 decoration-[#FF1493]'
                      : 'text-gray-800 hover:text-[#FF1493]'
                    }`}
                  style={{
                    backgroundColor: 'transparent',
                    textDecoration: activeSection === item.targetId
                      ? 'underline solid #FF1493 3px'
                      : 'none',
                    textUnderlineOffset: '6px'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 移动端保持不变 */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full flex items-center justify-between px-3 py-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0_#000]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{navItems.find(item => item.targetId === activeSection)?.shortLabel || '导航'}</span>
                <span className="text-xs text-gray-600">Alt+1-5快速跳转</span>
              </div>
              <div className={`w-5 h-5 flex flex-col justify-center items-center transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                <div className="w-full h-0.5 bg-black mb-1" /><div className="w-full h-0.5 bg-black mb-1" /><div className="w-full h-0.5 bg-black" />
              </div>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-2 space-y-2 overflow-hidden">
                  {navItems.map((item, index) => (
                    <motion.button key={item.targetId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} onClick={() => scrollToSection(item.targetId)} className={`w-full text-left px-3 py-2 font-bold text-sm border-2 border-black rounded-lg transition-all duration-200 hover:bg-orange-400 hover:text-white ${activeSection === item.targetId ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}>
                      <div className="flex justify-between items-center">
                        <span>{item.label}</span>
                        <span className="text-xs opacity-70">Alt+{index + 1}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;