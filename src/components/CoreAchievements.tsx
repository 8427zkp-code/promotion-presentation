import React from 'react';

const GrowthCurve = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 bg-gray-50 text-gray-800">
      
      {/* 模块 1：PC 秀秀 7.0 全版本重构（需求匹配） */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">转定位：PC 秀秀 7.0 全版本重构</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* 6.0 旧版 */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">6.0旧版</h3>
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-200">
              {/* 替换为你的 6.0 图片 */}
              <img src="/old.png" alt="6.0旧版" className="object-cover w-full h-full" />
            </div>
            <div className="text-center font-medium">
              <p className="text-xl font-bold">复刻App秀秀</p>
              <p className="text-gray-500 mt-2">重在人像美容<br/>C端贴纸素材</p>
            </div>
          </div>

          {/* 中间转换文案 */}
          <div className="hidden md:flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-1/3 z-10">
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-xs text-center text-blue-800 shadow-sm relative">
              <p>但PC用户在工作时间活跃，节假日DAU下降；人像美容占比不到5%，这和App秀秀相反；</p>
              <p className="mt-1">投放问卷，进一步确认PC用户是电商办公用户。</p>
              {/* 箭头装饰 */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-blue-300">→</div>
            </div>
          </div>

          {/* 7.0 新版 */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">7.0新版</h3>
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-200 shadow-md">
              {/* 替换为你的 7.0 图片 */}
              <img src="/new.png" alt="7.0新版" className="object-cover w-full h-full" />
            </div>
            <div className="text-center font-medium">
              <p className="text-xl font-bold text-blue-700">电脑办公的生产力工具</p>
              <p className="text-gray-500 mt-2">强化消除、抠图等核心能力<br/>上线电商爆炸贴等商用素材</p>
            </div>
          </div>
        </div>

        {/* 移动端中间文案适配 */}
        <div className="md:hidden mt-6 bg-blue-50 border border-blue-100 p-4 rounded-lg text-sm text-center text-blue-800">
          但PC用户在工作时间活跃，节假日DAU下降；人像美容占比不到5%，这和App秀秀相反；<br/>投放问卷，进一步确认PC用户是电商办公用户。
        </div>

        {/* 方法论沉淀 */}
        <div className="mt-10 bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
          <p className="text-sm text-green-900 leading-relaxed">
            <span className="font-bold">我的角色：</span>b)我作为核心执行，前置上线了数据统计SDK、收集大量用户反馈、输出问卷调研结果，帮助leader们决策；设计具体的方案细节跟进上线，并跟进后续新版的反馈，快速迭代，最后平稳过渡到新版。

          </p>
        </div>
      </section>

      {/* 模块 2：PC 秀秀 7.0 全版本重构（收获） */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">转定位：PC 秀秀 7.0 全版本重构，收获满满！</h2>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="font-semibold text-gray-700">核心指标</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-red-500 font-bold text-3xl">↑9%</p>
            <p className="text-gray-500 text-sm mt-1">保存率: 74% → 81%</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-red-500 font-bold text-3xl">↑51%</p>
            <p className="text-gray-500 text-sm mt-1">次月留存: 30.53% → 46.23%</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-red-500 font-bold text-3xl">↑121%</p>
            <p className="text-gray-500 text-sm mt-1">订阅率: 0.34% → 0.75%</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-red-500 font-bold text-3xl">↑21%</p>
            <p className="text-gray-500 text-sm mt-1">客单价: ￥34.5 → ￥41.68</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-6">
          <p className="text-sm text-green-900">
            <span className="font-bold text-green-700">● 方法论沉淀</span><br/>
            验证了「匹配核心人群的产品定位+聚焦高频功能」能驱动产品增长。

          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['数据分析', '用户调研', '执行力', '学习能力', '方法论建设'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
          ))}
        </div>
      </section>

      {/* 模块 3：AI 消除功能效果极致 (探索过程) */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">找“钩子”：AI 消除功能效果极致</h2>
        
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-gray-700 max-w-3xl">端内消除渗透率11%，电商用户存在「扒图去LOGO、去牛皮癣、改文字」+去除AI平台水印的高频需求。</p>
          <div className="text-gray-300">↓</div>
          <p className="text-gray-700 max-w-3xl">经典消除（仿制图章版）纯色背景或小面积精细涂抹效果OK，复杂背景会糊，且涂抹费时费力，不太匹配PC秀秀的高效工作需求。</p>
          <div className="text-gray-300">↓</div>
          <p className="text-gray-700 max-w-3xl">先后接入了GAN算法、GAN+SD融合的生成式算法优化消除后的填充效果。上线「自动去水印、文字」，并全路径优化帮助用户使用。</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10">
          {['原图', '经典消除', 'GAN消除', 'GAN+SD融合生成式消除'].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="mb-2 font-medium text-sm text-gray-700">{label}</span>
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                 {/* 请分别替换为四张过程图片 */}
                <img src={`/remove_${index + 1}.png`} alt={label} className="object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 模块 4：AI 消除功能效果极致 (成果) */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">找“钩子”：AI 消除功能效果极致，这个“钩子”有用！</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-[2] bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-center">
            {/* 替换为PC端消除活跃&保存走势折线图 */}
            <img src="/remove.jpg" alt="PC端消除活跃&保存走势" className="max-h-64 object-contain" />
          </div>
          
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-center">
              <p className="text-red-500 font-bold text-2xl">↑91%</p>
              <p className="text-gray-600 text-xs mt-1">功能渗透率：11% → 21%</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-center">
              <p className="text-red-500 font-bold text-2xl">↑22%</p>
              <p className="text-gray-600 text-xs mt-1">保存率：45% → 55%</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-center">
              <p className="text-red-500 font-bold text-2xl">↑185%</p>
              <p className="text-gray-600 text-xs mt-1">收入：900W → 2566W</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-6">
          <p className="text-sm text-green-900">
             <span className="font-bold text-green-700">● 方法论沉淀</span><br/>
             a)从执行到主导，验证「高频刚需工具→路径、效果、耗时优化→用户增长→商业放大」的方法。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['产品规划', '产品设计', '用户研究', '技术知识'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
          ))}
        </div>
      </section>

      {/* 模块 5：批处理 3.0 功能重构与增长 */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">再找“钩子”：批处理 3.0 功能重构与增长</h2>
        
        <div className="text-sm text-gray-700 space-y-4 mb-8 text-justify leading-relaxed">
          <p>在消除记录里，每天好多用户手动消除一百多张图片，不同图片消除同样的内容，消一张保存一张，机械的重复一百多次。用户没用我们的批处理，原因是不知道、不好用、没得用（单图编辑人均保存PV最高消除和变清晰在批处理都没有）。另外，PC秀秀之前接入连续订阅+低价试用验证能提升用户的长期价值，所以我坚持重构版得加入这套商业化策略。</p>
          <div className="text-center text-gray-300 py-2">↓</div>
          <p className="text-center font-medium">开始重构批处理，在PC秀秀全路径曝光批处理+新增AI消除和变清晰+接入订阅与低价试用。</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-[2] bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-center">
            {/* 替换为批处理DAU&收入走势柱状图/折线图 */}
            <img src="/batch.png" alt="批处理DAU&收入走势" className="max-h-64 object-contain" />
          </div>
          
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <div className="border border-red-200 bg-red-50 rounded-xl p-5 text-center">
              <p className="text-red-500 font-bold text-2xl">↑37%</p>
              <p className="text-gray-600 text-sm mt-1">DAU: 5.1W → 7W</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-5 text-center">
              <p className="text-red-500 font-bold text-2xl">↑65%</p>
              <p className="text-gray-600 text-sm mt-1">收入: 380W → 625W</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-6">
          <p className="text-sm text-green-900">
             <span className="font-bold text-green-700">● 方法论沉淀</span><br/>
             再次验证「匹配场景的工具曝光→新能力赋能→商业化策略」的方法。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['产品洞察力', '产品规划', '商业化模式', '沟通能力', '项目管理'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default GrowthCurve;