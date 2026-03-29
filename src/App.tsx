import { useEffect } from 'react';
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

      /* 可爱点击态光标 - 卡通小手 */
      a, button, img, [role="button"], .cursor-pointer, .fade-in-up, .clickable {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg transform='translate(0,24) scale(0.1,-0.1)'%3E%3Cpath d='M85 184C60 178 39 161 32 142 25 120 26 118 55 71 83 24 85 20 85 0 85-20 83-24 55-71 26-118 25-120 32-142 39-161 60-178 85-184 95-186 115-186 125-184 150-178 171-161 178-142 185-120 184-118 155-71 127-24 125-20 125 0 125 20 127 24 155 71 184 118 185 120 178 142 171 161 150 178 125 184 115 186 95 186 85 184Z' fill='%23FF1493' stroke='%23000' stroke-width='10'/%3E%3C/g%3E%3C/svg%3E") 12 12, pointer;
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