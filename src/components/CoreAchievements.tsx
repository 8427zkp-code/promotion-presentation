import React, { useState } from 'react';

// Tooltip 组件，children 支持 JSX（保持大小 w-5 h-5，颜色变浅，无小三角箭头）
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
      return <>🎯 也是取消除区域附近的内容进行填充，但加入了判别器逐像素判断和重新填充，直到判别器通过才算修复完成。</>;
    case 'GAN+SD融合生成式消除':
      return (
        <>
          <div className="flex items-start gap-1 mb-1">⚠️ GAN算法消除背景后没有生成修补物体的能力，复杂背景下会破坏原图。</div>
          <div className="flex items-start gap-1 mb-1">⚡ 而当时的纯SD扩散性生成在文字和水印场景容易“不消反生”，成本高耗时久，不适合PC快的需求。</div>
          <div className="flex items-start gap-1 flex-col">
            <div>💡 所以我们用了一些小窍门：</div>
            <div className="ml-4">✨先用GAN消除原内容再用SD生成还原，降低「不消反生」的概率；</div>
            <div className="ml-4">✨再细分场景匹配最佳算法：通过给用户记录打标，发现PC有32%的小面积、纯色场景可以用快且低成本的GAN算法，而其他用GAN+SD融合的生成式算法，这样成本和耗时降了一半（从6s降到3s）。</div>
          </div>
        </>
      );
    default:
      return null;
  }
};

const GrowthCurve = () => {
  return (
    // 整体背景调整为类似多巴胺风格的淡黄色
    <div className="max-w-6xl mx-auto p-6 bg-[#FFFBE6] text-gray-800 font-sans pb-20 flex flex-col gap-16">
      
      {/* 1、模块主标题与副标题 - 样式统一为职责模块风格 */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="relative">
            我的成长曲线
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
          </span>
        </h2>
        <p className="text-xl text-gray-600 mt-4">转定位 → 找“钩子” → 再找“钩子”</p>
      </div>

      {/* ================= 卡片 1：PC 秀秀 7.0 重构 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-blue-100 relative pb-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-blue-400 w-4 h-8 rounded-full inline-block"></span>
          转定位：PC 秀秀 7.0 全版本重构
        </h2>
        
        {/* 2、第一个项目：改版前后对比与原因连接 */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mb-12">
          {/* 6.0 旧版 */}
          <div className="flex-1 flex flex-col items-center bg-gray-50 border-2 border-gray-200 rounded-3xl p-6 shadow-sm relative">
            <h3 className="text-sm font-bold mb-4 text-gray-600 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 absolute -top-4">6.0旧版</h3>
            <div className="w-full h-40 mb-6 mt-2 flex items-center justify-center overflow-hidden">
              <img src="/old.png" alt="6.0旧版" className="object-contain w-full h-full" />
            </div>
            <p className="text-2xl font-bold text-gray-800">复刻App秀秀</p>
            <p className="text-gray-500 mt-2 text-center text-sm">重点迭代人像美容、C端贴纸素材<br/>框架老旧、功能散成满天星</p>
          </div>

          {/* 中间连接与原因（包含用户洞察 + 我的核心执行，构成完整原因） */}
          <div className="flex-[1.2] flex flex-col items-center justify-start relative px-2 py-4 gap-3">
            {/* 上方：用户洞察/市场发现的原因分析 */}
            <div className="bg-yellow-50 border-2 border-yellow-300 p-5 rounded-2xl text-sm text-yellow-800 text-center shadow-[4px_4px_0_0_rgba(253,224,71,0.8)] z-10 font-medium leading-relaxed">
              发现PC用户工作时段活跃，假日DAU下降；<br/>而人像美容占比不到5%，和App秀秀相反；<br/>投放问卷，进一步确认PC是电商办公用户。
            </div>
            {/* 多巴胺风格箭头 */}
            <div className="text-yellow-400 font-black text-4xl drop-shadow-md">➔</div>
            {/* 下方：我的核心执行动作（已按新文案修改） */}
            <div className="bg-blue-50/80 border-2 border-blue-200 p-4 rounded-2xl text-sm text-blue-800 text-center shadow-sm w-full leading-relaxed">
              <span className="font-bold">我是一个小帮手：</span><br/>
              先上线数据统计SDK、问卷调研，帮助决策；<br/>后落地方案，快速迭代新版反馈，平稳过渡。
            </div>
          </div>

          {/* 7.0 新版 */}
          <div className="flex-1 flex flex-col items-center bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 shadow-sm relative">
            <h3 className="text-sm font-bold mb-4 text-blue-600 bg-white px-4 py-1.5 rounded-full shadow-sm border border-blue-100 absolute -top-4">7.0新版</h3>
            <div className="w-full h-40 mb-6 mt-2 flex items-center justify-center overflow-hidden">
              <img src="/new.png" alt="7.0新版" className="object-contain w-full h-full" />
            </div>
            <p className="text-2xl font-bold text-blue-700">PC电商办公工具</p>
            <p className="text-blue-500/80 mt-2 text-center text-sm">重构入口，聚焦消除、抠图等核心能力<br/>上线电商爆炸贴等商用素材</p>
          </div>
        </div>

        {/* 核心指标展示（保持原有数据不改动） */}
        <div className="bg-gray-50 rounded-3xl p-6 mb-8 border-2 border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
            <span className="font-bold text-gray-700 text-lg">核心成果</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑9%</p>
              <p className="text-gray-500 text-xs font-medium">保存率: 74% → 81%</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑51%</p>
              <p className="text-gray-500 text-xs font-medium">次月留存: 30.53% → 46.23%</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑121%</p>
              <p className="text-gray-500 text-xs font-medium">订阅率: 0.34% → 0.75%</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <p className="text-red-500 font-black text-3xl mb-1">↑21%</p>
              <p className="text-gray-500 text-xs font-medium">客单价: ￥34.5 → ￥41.68</p>
            </div>
          </div>
        </div>

        {/* 方法论与标签 */}
        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
            <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 一些小经验</span>
            验证了「匹配核心人群的产品定位+聚焦高频功能」能驱动产品增长。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['数据分析', '用户调研', '执行力', '学习能力', '方法论建设'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm">{tag}</span>
          ))}
        </div>
      </section>

      {/* ================= 卡片 2：AI 消除功能 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-pink-100">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-pink-400 w-4 h-8 rounded-full inline-block"></span>
          找“钩子”：AI 消除功能效果极致
        </h2>
        
        {/* 探索过程 - 重构为两个卡片横排 + 箭头指向解决方案 */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* 第一行：两个卡片横排并列 */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* 卡片1：用户需求 */}
            <div className="flex-1 bg-white border-2 border-pink-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="text-pink-500 font-bold text-lg mb-2">📊 洞察用户需求</div>
              <p className="text-gray-700 font-medium leading-relaxed">
                端内消除渗透率11%，电商用户存在「扒图去LOGO、去牛皮癣、改文字」、去除AI平台水印的高频需求。
              </p>
            </div>
            {/* 卡片2：现有问题 */}
            <div className="flex-1 bg-white border-2 border-pink-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="text-pink-500 font-bold text-lg mb-2">⚠️ 现有方案局限</div>
              <p className="text-gray-700 font-medium leading-relaxed">
                仿制图章版的经典消除→纯色背景或小面积涂抹效果OK，复杂背景会糊，且涂抹费时费力，不太匹配PC高效工作需求。
              </p>
            </div>
          </div>
          {/* 向下箭头指向解决方案 */}
          <div className="flex justify-center py-2">
            <div className="bg-pink-200 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0_0_rgba(244,114,182,0.5)] border-2 border-pink-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
          </div>
          {/* 解决方案卡片 */}
          <div className="w-full bg-pink-100 border-2 border-pink-300 rounded-2xl p-5 shadow-sm text-center">
            <div className="text-pink-700 font-bold text-lg mb-2">✨ 核心策略</div>
            <p className="text-pink-800 font-bold leading-relaxed">
              先后接入了GAN算法、GAN+SD融合的生成式算法优化消除后的填充效果。上线「自动去水印、文字」，并全路径优化帮助用户使用。
            </p>
          </div>
        </div>

        {/* 效果图对比展示 —— 标题旁添加多巴胺风格问号及Tooltip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['原图', '经典消除', 'GAN消除', 'GAN+SD融合生成式消除'].map((label, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-3 rounded-2xl border-2 border-gray-100">
              {/* 标题行：保留原样式，原图不显示问号，其他显示 */}
              <div className="mb-3 font-bold text-sm text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm inline-flex items-center">
                {label}
                {label !== '原图' && (
                  <TooltipQuestion>
                    {getTooltipContent(label)}
                  </TooltipQuestion>
                )}
              </div>
              <div className="w-full aspect-square bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <img src={`/remove_${index + 1}.png`} alt={label} className="object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">这个“钩子”有点用！</h3>
        
        {/* 左边的趋势图和右边的具体涨幅左右对换 */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
          {/* 具体涨幅移至左侧 */}
          <div className="flex-1 flex flex-col gap-4 justify-center w-full">
            <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑91%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">功能渗透率：11% → 21%</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑22%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">保存率：45% → 55%</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-red-500 font-black text-3xl">↑185%</p>
              <p className="text-red-800/70 font-bold text-sm mt-1">收入：900W → 2566W</p>
            </div>
          </div>

          {/* 趋势图移至右侧 */}
          <div className="flex-[2] bg-pink-50/50 border-2 border-pink-100 rounded-3xl p-6 flex items-center justify-center w-full shadow-inner h-full min-h-[300px]">
            <img src="/remove.jpg" alt="PC端消除活跃&保存走势" className="max-h-72 object-contain rounded-xl" />
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
             <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 一些小经验</span>
             从执行到主导，验证了「高频刚需工具→路径、效果、耗时优化→用户增长→商业放大」的方法。
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {['产品规划', '产品设计', '用户研究', '技术知识'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm">{tag}</span>
          ))}
        </div>
      </section>

      {/* ================= 卡片 3：批处理 3.0 功能 ================= */}
      <section className="bg-white rounded-[40px] shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] p-8 md:p-10 border-4 border-purple-100">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
          <span className="bg-purple-400 w-4 h-8 rounded-full inline-block"></span>
          再找“钩子”：批处理 3.0 功能重构与增长
        </h2>
        
        {/* 三个卡片横排并列 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* 卡片1：用户痛点 */}
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">🔍 用户有批量需求</div>
            <p className="text-gray-700 leading-relaxed text-center">
              消除记录里，每天好多用户手动消除一百张图片以上，消除同样的内容，消一张保存一张，机械的重复一百多次。
            </p>
          </div>
          {/* 卡片2：产品缺失原因 */}
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">🚫 竟不用批处理</div>
            <p className="text-gray-700 leading-relaxed text-center">
              不知道、不好用、没得用<br/>（单图人均保存PV最高的消除和变清晰都不支持批处理）。
            </p>
          </div>
          {/* 卡片3：商业化策略洞察 */}
          <div className="flex-1 bg-white border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="text-purple-500 font-bold text-lg mb-2 text-center">💰 商业化策略</div>
            <p className="text-gray-700 leading-relaxed text-center">
              PC秀秀之前接入连续订阅+低价试用验证能提升用户的长期价值，所以我坚持重构成类似的商业化策略。
            </p>
          </div>
        </div>

        {/* 箭头（可选，增加视觉引导） */}
        <div className="flex justify-center py-2 mb-6">
          <div className="bg-purple-200 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0_0_rgba(192,132,252,0.5)] border-2 border-purple-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </div>

        <div className="bg-purple-100 border-2 border-purple-300 rounded-2xl p-5 mb-12 text-center">
          <p className="text-purple-800 font-bold">
            重构批处理，在PC秀秀全路径曝光批处理+新增AI消除和变清晰+接入订阅与低价试用。
          </p>
        </div>

        {/* 新增：这个“钩子”也有点用！小标题 */}
        <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">这个“钩子”也不错！</h3>

        <div className="flex flex-col md:flex-row gap-8 mb-8 items-stretch">
          <div className="flex-[2] bg-purple-50/50 border-2 border-purple-100 rounded-3xl p-6 flex items-center justify-center shadow-inner">
            <img src="/batch.png" alt="批处理DAU&收入走势" className="max-h-72 object-contain rounded-xl" />
          </div>
          
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="border-2 border-red-200 bg-red-50 rounded-3xl p-6 text-center shadow-sm">
              <p className="text-red-500 font-black text-4xl mb-2">↑37%</p>
              <p className="text-red-800/70 font-bold text-sm">DAU: 5.1W → 7W</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-3xl p-6 text-center shadow-sm">
              <p className="text-red-500 font-black text-4xl mb-2">↑65%</p>
              <p className="text-red-800/70 font-bold text-sm">收入: 380W → 625W</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 p-5 rounded-2xl mb-6 shadow-sm">
          <p className="text-sm text-green-800 font-medium">
             <span className="font-bold text-green-600 bg-white px-2 py-1 rounded-md mr-2">● 一些小经验</span>
             复用有效经验，放大「匹配场景的工具曝光→核心能力赋能→商业化策略」方法的价值。
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {['产品洞察力', '产品规划', '商业化模式', '沟通能力', '项目管理'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-white border-2 border-gray-200 text-gray-600 rounded-full text-sm font-bold shadow-sm">{tag}</span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default GrowthCurve;