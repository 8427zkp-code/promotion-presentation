import React, { useState } from 'react';

// Tooltip 组件（保持不变）
const TooltipQuestion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-300 to-pink-300 text-white text-xs font-bold shadow-sm cursor-help transition-transform hover:scale-105"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      ?
      {visible && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-80 bg-[#FFF9E8] border-2 border-pink-200 rounded-2xl shadow-md p-3 text-sm text-gray-700 font-medium leading-relaxed">
          {children}
        </div>
      )}
    </span>
  );
};

const getTooltipContent = (label: string): React.ReactNode => {
  switch (label) {
    case '经典消除':
      return <>📌 仿制图章的原理，取消除区域周围15px来覆盖该区域。</>;
    case 'GAN消除':
      return <>🎯 也是取消除区域附近的内容进行填充，区别是加入了判别器逐像素判断和重新填充，直到判别器通过才算修复完成。但GAN本身是没有生成修复物体的能力。</>;
    case 'GAN+SD融合生成式消除':
      return (
        <>
          <div className="flex items-start gap-1 mb-1">⚠️ GAN算法消除背景后没有生成修补物体的能力，复杂背景下会破坏原图。</div>
          <div className="flex items-start gap-1 mb-1">⚡ 而当时的纯SD扩散性生成在文字和水印场景容易“不消反生”，成本高了25倍（GAN消除 ￥0.0006/次→SD消除￥0.02/次），耗时多了9s（3s→12s），不适合PC“快”的需求。</div>
          <div className="flex items-start gap-1 flex-col">
            <div>💡 所以我们用了一些小窍门：</div>
            <div className="ml-4">✨用GAN消除原内容再用SD生成还原，降低「不消反生」的概率；</div>
            <div className="ml-4">✨算法侧优化资源+产品侧细分场景匹配最佳算法，降低成本和耗时。（通过给用户记录打标，发现PC有32%的简单场景可以用GAN算法，其他用GAN+SD融合的生成式算法，这样成本降了10倍（￥0.02/次→￥0.002/次）和耗时降了一半多（12s→5s），这个细分场景匹配最佳算法的策略也成为今年实验室迭代消除的重点方向）</div>
          </div>
        </>
      );
    default:
      return null;
  }
};

// 图片查看大图模态框组件
const ImageModal: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-5xl max-h-[90vh] p-2 bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="max-w-full max-h-[85vh] object-contain rounded-xl" />
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 text-gray-700 hover:bg-white transition-all flex items-center justify-center text-xl font-bold shadow-md"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

// 可缩放图片组件（hover放大 + 点击弹窗）
const ZoomableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-300 hover:scale-105 cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

// 可缩放数据卡片组件（hover放大 + 保持原有样式）
const ZoomableCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <div className={`transition-transform duration-300 hover:scale-105 ${className}`}>{children}</div>;
};

const GrowthCurve = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#FFFBE6] text-gray-800 font-sans pb-20 flex flex-col gap-16">
      {/* 全局样式：不抖动的星星发光效果 */}
      <style>{`
        .star-glow {
          transition: all 0.2s ease;
        }
        .star-glow:hover {
          background: linear-gradient(135deg, #fff9e6, #fff0cc);
          border-color: #ffd966;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6), 0 0 12px rgba(255, 180, 70, 0.4);
        }
        .star-glow:hover::before {
          content: "✨";
          margin-right: 6px;
          display: inline-block;
        }
        .star-glow:hover::after {
          content: "✨";
          margin-left: 6px;
          display: inline-block;
        }
      `}</style>

      {/* 模块主标题 */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="relative">
            我的成长曲线
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
          </span>
        </h2>
        <p className="text-xl text-gray-600 mt-4">重构定位 → 找“钩子” → 再找“钩子”</p>
      </div>

      {/* ================= 卡片 1：PC 秀秀 7.0 重构 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-blue-100 relative pb-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-blue-400 w-4 h-8 rounded-full inline-block"></span>
          重构定位：PC 秀秀 7.0 全版本重构
        </h2>

        {/* 改版前后对比与原因连接 */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mb-12">
          {/* 6.0 旧版 */}
          <div className="flex-1 flex flex-col items-center bg-gray-50 border-2 border-gray-200 rounded-3xl p-6 shadow-sm relative">
            <h3 className="text-sm font-bold mb-4 text-gray-600 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 absolute -top-4">6.0旧版</h3>
            <div className="w-full h-40 mb-6 mt-2 flex items-center justify-center overflow-hidden">
              <ZoomableImage src="/old.png" alt="6.0旧版" className="object-contain w-full h-full" />
            </div>
            <p className="text-2xl font-bold text-gray-800">复刻秀秀App</p>
            <p className="text-gray-500 mt-2 text-center text-sm">重点迭代人像美容、C端贴纸素材<br />框架老旧、功能散似满天星</p>
          </div>

          {/* 中间区域：黄色框 + 向下箭头，垂直居中 */}
          <div className="flex-[1.2] flex flex-col items-center justify-center relative px-2 py-4 gap-3">
            {/* 黄色用户洞察卡片 - 修改为左对齐并添加符号 */}
            <div className="bg-yellow-50 border-2 border-yellow-300 p-5 rounded-2xl text-sm text-yellow-800 text-left shadow-[4px_4px_0_0_rgba(253,224,71,0.8)] z-10 font-medium leading-relaxed flex flex-col gap-1">
              <div>• 发现PC秀秀用户在工作时间活跃，节假日DAU下降；</div>
              <div>• 高频功能是消除、抠图、裁剪，而重点突出的人像美容渗透率不到5%；</div>
              <div>• 投放问卷，进一步确认PC是电商办公用户，核心需求是高效做电商图。</div>
            </div>
            {/* 向下箭头 */}
            <div className="text-yellow-400 font-black text-4xl drop-shadow-md">➔</div>
          </div>

          {/* 7.0 新版 */}
          <div className="flex-1 flex flex-col items-center bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 shadow-sm relative">
            <h3 className="text-sm font-bold mb-4 text-blue-600 bg-white px-4 py-1.5 rounded-full shadow-sm border border-blue-100 absolute -top-4">7.0新版</h3>
            <div className="w-full h-40 mb-6 mt-2 flex items-center justify-center overflow-hidden">
              <ZoomableImage src="/new.png" alt="7.0新版" className="object-contain w-full h-full" />
            </div>
            <p className="text-2xl font-bold text-blue-700">PC电商办公工具</p>
            <p className="text-blue-500/80 mt-2 text-center text-sm">重构入口，聚焦消除、抠图等核心能力<br />上线海报设计模板化制作电商图片<br />上线电商爆炸贴等商用素材</p>
          </div>
        </div>

        {/* 核心指标展示（数据卡片支持hover放大） */}
        <div className="bg-gray-50 rounded-3xl p-6 mb-8 border-2 border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
            <span className="font-bold text-gray-700 text-lg">核心成果</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ZoomableCard className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑9%</p>
              <p className="text-gray-500 text-xs font-medium">保存率: 74% → 81%</p>
            </ZoomableCard>
            <ZoomableCard className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑51%</p>
              <p className="text-gray-500 text-xs font-medium">次日留存: 30.53% → 46.23%</p>
            </ZoomableCard>
            <ZoomableCard className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑121%</p>
              <p className="text-gray-500 text-xs font-medium">订阅率: 0.34% → 0.75%</p>
            </ZoomableCard>
            <ZoomableCard className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑21%</p>
              <p className="text-gray-500 text-xs font-medium">客单价: ￥34.5 → ￥41.68</p>
            </ZoomableCard>
          </div>
        </div>

        {/* 方法论与标签（所有技能标签应用星星发光） */}
        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
            <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 我的收获</span>
            作为核心执行，前期为boss们提供数据、问卷调研帮助决策；后期跟进方案落地并收集新版反馈快速迭代。更学到了「匹配核心人群的产品定位+聚焦高频功能」能驱动产品增长的经验。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['执行力', '数据分析', '用户调研', '学习能力', '方法论建设'].map(tag => (
            <span
              key={tag}
              className="star-glow px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ================= 卡片 2：AI 消除功能 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-pink-100">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-pink-400 w-4 h-8 rounded-full inline-block"></span>
          找“钩子”：AI 消除功能效果极致
        </h2>
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 bg-white border-2 border-pink-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="text-pink-500 font-bold text-lg mb-2">📊 洞察用户需求</div>
              <p className="text-gray-700 font-medium leading-relaxed">核心电商用户每天都需要「扒图去LOGO、去牛皮癣、改文字」、去除AI平台水印，消除是端内渗透率top1功能。</p>
            </div>
            <div className="flex-1 bg-white border-2 border-pink-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="text-pink-500 font-bold text-lg mb-2">⚠️ 现有方案局限</div>
              <p className="text-gray-700 font-medium leading-relaxed">仿制图章版的经典消除→简单背景涂抹效果OK，复杂背景会变成马赛克，且涂抹费时费力，不太匹配PC高效工作需求。</p>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <div className="bg-pink-200 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0_0_rgba(244,114,182,0.5)] border-2 border-pink-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
          </div>
          {/* ✨ 修改：规划核心策略拆分为两行并加符号 */}
          <div className="w-full bg-pink-100 border-2 border-pink-300 rounded-2xl p-5 shadow-sm text-left">
            <div className="text-pink-700 font-bold text-lg mb-2">✨ 规划核心策略</div>
            <div className="space-y-2 text-pink-800 font-bold leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>升级消除后的填充算法：通过市场与竞品分析，立项推动实验室研发GAN算法、GAN+SD融合的生成式算法。</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-pink-600">•</span>
                <span>上线自动消除：支持「自动去水印、文字、LOGO」，并在全路径曝光引导用户使用。</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['原图', '经典消除', 'GAN消除', 'GAN+SD融合生成式消除'].map((label, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-3 rounded-2xl border-2 border-gray-100">
              <div className="mb-3 font-bold text-sm text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm inline-flex items-center">
                {label}
                {label !== '原图' && <TooltipQuestion>{getTooltipContent(label)}</TooltipQuestion>}
              </div>
              <ZoomableImage src={`/remove_${index + 1}.png`} alt={label} className="w-full aspect-square object-cover rounded-xl border border-gray-200 shadow-sm" />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">这个“钩子”有点用！</h3>

        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
          <div className="flex-1 flex flex-col gap-4 justify-center w-full">
            <ZoomableCard className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑22%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">保存率：45% → 55%</p>
            </ZoomableCard>
            <ZoomableCard className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑91%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">功能渗透率：11% → 21%</p>
            </ZoomableCard>
            <ZoomableCard className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑185%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">全年收入：900W → 2566W</p>
            </ZoomableCard>
          </div>
          <div className="flex-[2] bg-pink-50/50 border-2 border-pink-100 rounded-3xl p-6 flex items-center justify-center w-full shadow-inner h-full min-h-[300px]">
            <ZoomableImage src="/remove.jpg" alt="PC端消除活跃&保存走势" className="max-h-72 object-contain rounded-xl" />
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
            <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 我的收获</span>
            从7.0的学习和执行到这几年主导消除的规划和设计，我也积累了「高频刚需工具→优化路径、效果、耗时→提升用户增长和收入」。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['产品规划', '产品设计', '用户研究', '技术知识'].map(tag => (
            <span key={tag} className="star-glow px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ================= 卡片 3：批处理 3.0 功能 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-purple-100">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-purple-400 w-4 h-8 rounded-full inline-block"></span>
          再找“钩子”：批处理 3.0 功能重构与增长
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">🔍 用户本地的批量需求</div>
            <p className="text-gray-700 leading-relaxed text-center">线上批处理每天大概有20个用户来处理上万张图，最高一次跑了7.8万张，会放一整晚自动执行。</p>
          </div>
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">🚫 更多用户对批处理</div>
            <p className="text-gray-700 leading-relaxed text-center">不知道<br />不好用<br />没得用</p>
          </div>
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">💰 商业化策略</div>
            <p className="text-gray-700 leading-relaxed text-center">复刻PC秀秀连续订阅+低价试用提升用户长期价值的策略。</p>
          </div>
        </div>
        <div className="flex justify-center py-2 mb-6">
          <div className="bg-purple-200 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0_0_rgba(192,132,252,0.5)] border-2 border-purple-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </div>
        <div className="bg-purple-100 border-2 border-purple-300 rounded-2xl p-5 mb-12 text-center">
          <p className="text-purple-800 font-bold">重构批处理，在PC秀秀全路径曝光批处理+新增AI消除和变清晰+接入订阅与低价试用。</p>
        </div>
        <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">这个“钩子”也不错！</h3>
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-stretch">
          <div className="flex-[2] bg-purple-50/50 border-2 border-purple-100 rounded-3xl p-6 flex items-center justify-center shadow-inner">
            <ZoomableImage src="/batch.png" alt="批处理DAU&收入走势" className="max-h-72 object-contain rounded-xl" />
          </div>
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <ZoomableCard className="border-2 border-red-200 bg-red-50 rounded-3xl p-6 text-center shadow-sm">
              <p className="text-red-500 font-black text-4xl mb-2">↑37%</p>
              <p className="text-red-800/70 font-bold text-sm">DAU: 5.1W → 7W</p>
            </ZoomableCard>
            <ZoomableCard className="border-2 border-red-200 bg-red-50 rounded-3xl p-6 text-center shadow-sm">
              <p className="text-red-500 font-black text-4xl mb-2">↑65%</p>
              <p className="text-red-800/70 font-bold text-sm">收入: 380W → 625W</p>
            </ZoomableCard>
          </div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
            <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 我的收获</span>
            复用有效经验，放大「匹配场景的工具曝光→核心能力赋能→商业化策略」方法的价值。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['产品洞察力', '产品规划', '商业化模式', '沟通能力', '项目管理'].map(tag => (
            <span key={tag} className="star-glow px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GrowthCurve;