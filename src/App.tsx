import { useEffect } from 'react';
import Hero from './components/Hero';
import Responsibilities from './components/Responsibilities';
import CoreAchievements from './components/CoreAchievements';
import OrganizationalImpact from './components/OrganizationalImpact';
import FuturePlans from './components/FuturePlans';
import InteractiveQA from './components/InteractiveQA';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    // 添加全局样式
    const style = document.createElement('style');
    style.textContent = `
      body {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M10 2 C9 2 8 3 8 4 L8 14 L6 14 C5 14 4 15 4 16 C4 17 5 18 6 18 L8 18 L8 22 C8 23 9 24 10 24 L16 24 C17 24 18 23 18 22 L18 16 L20 16 C21 16 22 15 22 14 C22 13 21 12 20 12 L18 12 L18 10 C18 9 17 8 16 8 L14 8 L14 4 C14 3 13 2 12 2 Z' fill='%23FF69B4' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") 4 0, auto;
      }
      a, button, img, [role="button"], .cursor-pointer, .fade-in-up, .clickable,
      .bg-gray-50, .rounded-lg, .motion-div, .border-2, .shadow-lg {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M10 2 C9 2 8 3 8 4 L8 14 L6 14 C5 14 4 15 4 16 C4 17 5 18 6 18 L8 18 L8 22 C8 23 9 24 10 24 L16 24 C17 24 18 23 18 22 L18 16 L20 16 C21 16 22 15 22 14 C22 13 21 12 20 12 L18 12 L18 10 C18 9 17 8 16 8 L14 8 L14 4 C14 3 13 2 12 2 Z' fill='%23FFD700' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") 4 0, pointer;
      }
      html {
        scroll-behavior: smooth;
      }
      #about,
      #responsibilities,
      #achievements,
      #impact,
      #future,
      #interactive {
        scroll-margin-top: 80px;
      }
      .highlight-pulse {
        animation: highlight-pulse 0.6s ease-in-out;
      }
      @keyframes highlight-pulse {
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.02); }
        100% { opacity: 1; transform: scale(1); }
      }
      #about { scroll-margin-top: 60px; }
      #responsibilities,
      #achievements,
      #impact,
      #future,
      #interactive {
        scroll-margin-top: 50px;
      }
      @media (max-width: 768px) {
        #about { scroll-margin-top: 80px; }
        #responsibilities,
        #achievements,
        #impact,
        #future,
        #interactive {
          scroll-margin-top: 70px;
        }
      }
      .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
      }
      .lightbox-image {
        max-width: 90vw;
        max-height: 90vh;
        border: 4px solid #000;
        border-radius: 12px;
        box-shadow: 8px 8px 0px #000;
      }
      .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
      }
      .fade-in-up.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navigation />
      
      {/* ✨ 为每个模块添加底部间距（最后一个模块除外） */}
      <div id="about" className="scroll-mt-20 mb-16">
        <Hero />
      </div>
      <div id="responsibilities" className="scroll-mt-20 mb-16">
        <Responsibilities />
      </div>
      <div id="achievements" className="scroll-mt-20 mb-16">
        <CoreAchievements />
      </div>
      <div id="impact" className="scroll-mt-20 mb-16">
        <OrganizationalImpact />
      </div>
      <div id="future" className="scroll-mt-20 mb-16">
        <FuturePlans />
      </div>
      <div id="interactive" className="scroll-mt-20">
        <InteractiveQA />
      </div>
    </div>
  );
}

export default App;