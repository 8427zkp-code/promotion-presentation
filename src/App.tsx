import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Responsibilities from './components/Responsibilities';
import CoreAchievements from './components/CoreAchievements';
import FuturePlans from './components/FuturePlans';
import InteractiveQA from './components/InteractiveQA';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    // 添加全局样式
    const style = document.createElement('style');
    style.textContent = `
      /* 可爱多巴胺鼠标光标 */
      body {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M10 2l2.5 5l5.5 1l-4 3.5l1 5.5l-5-2.5l-5 2.5l1-5.5l-4-3.5l5.5-1z' fill='%23FFD700' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") 10 10, auto;
      }

      /* 可爱点击态光标 */
      a, button, img, [role="button"], .cursor-pointer, .fade-in-up {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 20 20'%3E%3Cpath d='M8 2L5 8l-6 1 4.5 4-1 6 5.5-3 5.5 3-1-6 4.5-4-6-1z' fill='%23FF6B6B' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") 11 11, pointer;
      }

      html {
        scroll-behavior: smooth;
      }

      #about,
      #responsibilities,
      #achievements,
      #future,
      #interactive {
        scroll-margin-top: 80px;
      }

      /* 高亮闪烁动画 */
      .highlight-pulse {
        animation: highlight-pulse 0.6s ease-in-out;
      }

      @keyframes highlight-pulse {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.02);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* 响应式滚动偏移 - 胶囊导航优化 */
      #about {
        scroll-margin-top: 60px;
      }

      #responsibilities,
      #achievements,
      #future,
      #interactive {
        scroll-margin-top: 50px;
      }

      @media (max-width: 768px) {
        #about {
          scroll-margin-top: 80px;
        }

        #responsibilities,
        #achievements,
        #future,
        #interactive {
          scroll-margin-top: 70px;
        }
      }

      /* 图片点击放大样式 */
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

      /* 图片入场动画 */
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
      <div id="about" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="responsibilities" className="scroll-mt-20">
        <Responsibilities />
      </div>
      <div id="achievements" className="scroll-mt-20">
        <CoreAchievements />
      </div>
      <div id="future" className="scroll-mt-20">
        <FuturePlans />
      </div>
      <div id="interactive" className="scroll-mt-20">
        <InteractiveQA />
      </div>
    </div>
  );
}

export default App;