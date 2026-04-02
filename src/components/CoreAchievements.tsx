import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CoreAchievements: React.FC = () => {
  // 点击放大弹窗状态
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  // 项目1双图hover状态
  const [hoveredImage, setHoveredImage] = useState<'old' | 'new' | null>(null);

  const projects = [
    {
      title: "筑基篇 · PC 秀秀 7.0 全版本重构",
      background: [
        "6.0版本框架老旧，功能分散、操作路径长，收入增长触顶。",
        "目标是通过框架重构优化体验，打破收入瓶颈。",
        "我作为核心产品，全程跟进方案、跨部门协同与落地、并跟进上线后反馈的全流程。"
      ],
      challenge: [
        "框架老旧：打散重来，聚焦高价值功能到首页、编辑器等一级页面、砍掉冗余操作。",
        "多部门协同难：拆解里程碑 + 模块负责制，各自跟进，最后统一验收上线。",
        "老用户习惯固化抵触：灰度放量 + 操作引导 + 快速迭代 + 会员安抚，平稳过渡用户无流失。"
      ],
      metrics: [
        { value: "↑9%", detail: "保存率：74%→81%" },
        { value: "↑51%", detail: "次日留存：30.53%→46.23%" },
        { value: "↑121%", detail: "订阅率：0.34%→0.75%" },
        { value: "↑21%", detail: "客单价：34.56→41.68" }
      ],
      summary: [
        "验证了「聚焦高频功能+砍掉冗余操作」能带动正向增长。",
        "通过本次大版本重构，提升了跨部门项目统筹能力，建立了从体验优化到商业放大的全局产品思维。"
      ],
      tags: ["执行力", "项目管理", "方法论建设"],
      icon: "🏗️",
      images: [
        { src: "/old.png", alt: "PC秀秀6.0旧版界面", type: "old" },
        { src: "/new.png", alt: "PC秀秀7.0新版界面", type: "new" }
      ]
    },
    {
      title: "深耕篇 · AI 消除功能效果极致",
      background: [
        "消除是PC核心工具，原算法消除痕迹明显，效果提升空间大；同时用户集中在「去水印、去文字」场景，手动消除效率低。",
        "目标是优化效果，锁定核心场景做产品设计，实现用户规模与收入双增长。",
        "我作为该功能的产品负责人，主导功能的产品规划、技术落地与数据复盘。"
      ],
      challenge: [
        "效果不达预期：联动算法团队先后上线GAN版消除、GAN+SD融合版消除，持续迭代优化消除效果。",
        "消除效率低：上线「自动去水印、去文字」专属功能，并全路径引导用户使用。"
      ],
      metrics: [
        { value: "↑122%", detail: "渗透率：9%→20%" },
        { value: "↑22%", detail: "保存率：45%→55%" },
        { value: "↑185%", detail: "收入：900万→2566万" },
        { value: "Top1", detail: "成为收入Top1功能" }
      ],
      summary: [
        "验证「高频刚需工具→路径与效果优化→用户增长→商业放大」的方法。",
        "通过本项目提升了对AI技术类产品的落地能力，以及用户需求挖掘、核心场景聚焦的产品洞察力。"
      ],
      tags: ["市场与用户研究", "学习能力", "产品设计"],
      icon: "🎯",
      images: [
        { src: "/remove.jpg", alt: "AI消除功能界面", type: "single" }
      ]
    },
    {
      title: "实践篇 · 批处理 3.0 功能重构与增长",
      background: [
        "原批处理框架与功能老旧，与PC秀秀联动不足，DAU与商业价值未释放。",
        "目标是重构批处理功能体验与商业化逻辑，实现DAU与商业收入的突破。",
        "我作为负责人，主导重构规划、方案设计、落地与增长全流程。"
      ],
      challenge: [
        "框架与功能老旧：复刻AI消除价值最大化经验，在批处理新增AI消除、变清晰等高价值高频功能，同时联动PC秀秀搭建全路径曝光体系",
        "付费模式单一：引入「连续订阅+低价试用」的付费模式，降低用户首次付费门槛与长期价值"
      ],
      metrics: [
        { value: "↑37%", detail: "DAU：5.1万→7万" },
        { value: "↑65%", detail: "收入：380万→625万" }
      ],
      summary: [
        "复用前两个项目沉淀的方法论，实现从「执行力」→「沉淀方法」→「复制放大价值」的闭环。",
        "通过本项目提升了全局规划能力，以及可复用产品方法论的沉淀与落地能力。"
      ],
      tags: ["学习能力", "产品规划", "商业化模式"],
      icon: "🔄",
      images: [
        { src: "/batch.png", alt: "批处理功能界面", type: "single" }
      ]
    }
  ];

  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  return (
    // 【修改1】模块上下内边距缩小，大屏更紧凑
    <section className="min-h-screen px-6 py-8 lg:py-6 relative bg-white">
      {/* 全屏图片放大弹窗 */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-pointer backdrop-blur-sm transition-all"
          onClick={() => setLightboxOpen(false)}
        >
          <img 
            src={currentImage} 
            alt="放大预览" 
            className="max-w-[90vw] max-h-[90vh] rounded-xl border-4 border-white shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* 标题区域：【修改2】标题下边距缩小 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            我的成长曲线
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-orange-500 -z-10 transform skew-x-12"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-medium">找定位 → 找亮点 → 放大亮点</p>
        </motion.div>

        {/* 【修改3】项目卡片之间的间距缩小 */}
        <div className="space-y-6 lg:space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border-[3px] border-black rounded-2xl shadow-[8px_8px_0px_#000] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* 项目标题栏：内边距缩小 */}
              <div className="bg-gray-50 border-b-[3px] border-black px-5 py-3 flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <h3 className="text-2xl font-black text-gray-900">{project.title}</h3>
              </div>

              {/* 【修改4】卡片内部内边距、左右栏间距缩小 */}
              <div className="flex flex-col md:flex-row p-4 md:p-5 lg:p-4 gap-5 lg:gap-4">
                
                {/* ======== 左侧栏 ======== */}
                <div className="md:w-1/2 flex flex-col gap-4">
                  
                  {/* 背景 & 目标 */}
                  <div className="bg-blue-50/50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>背景 & 目标
                    </h4>
                    <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                      {project.background.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* 核心成果 */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>核心成果
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white border-2 border-black rounded-xl p-2.5 shadow-[3px_3px_0px_#000] transform transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000]">
                          <div className="text-red-600 font-black text-xl text-center">{metric.value}</div>
                          <div className="text-xs font-bold text-gray-700 text-center mt-1 whitespace-nowrap">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 经验总结 */}
                  <div className="bg-green-50/50 border-l-4 border-green-500 p-3 rounded-r-lg mt-auto">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>经验总结 (沉淀方法论)
                    </h4>
                    <div className="text-gray-700 text-sm leading-relaxed font-medium space-y-1">
                      {project.summary.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ======== 右侧栏 ======== */}
                <div className="md:w-1/2 flex flex-col gap-4 md:border-l-2 border-dashed border-gray-300 md:pl-6">
                  
                  {/* 挑战 & 应对策略 */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-3">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>挑战 & 应对策略
                    </h4>
                    <ul className="space-y-2">
                      {project.challenge.map((item, idx) => {
                        const splitIdx = item.indexOf('：');
                        if (splitIdx !== -1) {
                          const title = item.substring(0, splitIdx + 1);
                          const desc = item.substring(splitIdx + 1);
                          return (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                              <span className="text-orange-500 font-bold mt-0.5">→</span>
                              <span><b>{title}</b>{desc}</span>
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-orange-500 font-bold mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* 图片展示区 */}
                  <div className="relative h-56 w-full flex items-center justify-center">
                    {/* 项目1：双图 */}
                    {index === 0 && project.images && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                          className={`absolute z-10 w-52 h-36 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_#000] overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === 'new' ? 'opacity-40 -translate-x-6 rotate-[-8deg] scale-95' : 'opacity-100 -translate-x-4 rotate-[-4deg] scale-100 hover:z-30 hover:scale-105'}`}
                          onMouseEnter={() => setHoveredImage('old')}
                          onMouseLeave={() => setHoveredImage(null)}
                          onClick={() => openLightbox(project.images[0].src)}
                        >
                          <img src={project.images[0].src} alt={project.images[0].alt} className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                          className={`absolute z-20 w-52 h-36 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_#000] overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === 'old' ? 'opacity-40 translate-x-6 rotate-[8deg] scale-95' : 'opacity-100 translate-x-4 rotate-[4deg] scale-100 hover:z-30 hover:scale-105'}`}
                          onMouseEnter={() => setHoveredImage('new')}
                          onMouseLeave={() => setHoveredImage(null)}
                          onClick={() => openLightbox(project.images[1].src)}
                        >
                          <img src={project.images[1].src} alt={project.images[1].alt} className="w-full h-full object-cover" />
                        </motion.div>
                      </div>
                    )}

                    {/* 项目2/3：单图 */}
                    {(index === 1 || index === 2) && project.images && (
                      <motion.div
                        className="w-72 h-44 rounded-lg border-[3px] border-black shadow-[6px_6px_0px_#000] overflow-hidden cursor-pointer"
                        initial={{ rotate: index === 1 ? 3 : -3 }}
                        whileHover={{ rotate: 0, scale: 1.05, y: -5, zIndex: 30 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openLightbox(project.images[0].src)}
                      >
                        <img src={project.images[0].src} alt={project.images[0].alt} className="w-full h-full object-cover" />
                      </motion.div>
                    )}
                  </div>

                  {/* 能力标签 */}
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-medium border border-gray-400 rounded-full bg-transparent text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreAchievements;