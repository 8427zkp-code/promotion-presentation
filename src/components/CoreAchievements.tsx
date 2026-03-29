import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoreAchievements: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const achievements = [
    {
      phase: "筑基篇",
      title: "筑基篇・PC 秀秀 7.0 全版本重构",
      subtitle: "从全盘筑基",
      background: "6.0版本框架老旧、功能分散，收入增长触顶，通过框架重构优化体验，打破收入瓶颈。",
      challenges: [
        {
          issue: "多部门协同难",
          solution: "拆解里程碑 + 模块负责制，各自跟进，最后统一验收上线"
        },
        {
          issue: "老用户习惯固化抵触",
          solution: "前置灰度 + 操作引导 + 快速迭代 + 会员安抚，平稳过渡用户无流失"
        }
      ],
      results: [
        { label: "保存率", value: "74%→81%", detail: "↑9%" },
        { label: "次日留存", value: "30.53%→46.23%", detail: "↑51%" },
        { label: "订阅率", value: "0.34%→0.75%", detail: "↑122.5%" },
        { label: "客单价", value: "34.56→41.68", detail: "↑20.6%" }
      ],
      summary: "聚焦高价值功能到首页、编辑器等一级页面，替代原独立弹窗，用户使用更顺畅。大版本重构需及时跟进用户反馈，避免流失。",
      tags: ["执行力", "项目管理", "方法论建设"],
      icon: "🏗️",
      images: {
        before: "/old.png",
        after: "/new.png"
      }
    },
    {
      phase: "深耕篇",
      title: "深耕篇・AI 消除功能效果极致",
      subtitle: "单点深耕",
      background: "大量分析消除记录，发现复杂背景消除痕迹明显；核心场景是去水印与文字，引入自动消除提高效率。",
      challenges: [
        {
          issue: "AI技术迭代快",
          solution: "快速学习前沿技术，落地GAN版、GAN+SD融合消除"
        },
        {
          issue: "用户场景分散、认知度低",
          solution: "锁定「去水印/去文字」核心场景，上线专属功能+全路径引导"
        }
      ],
      results: [
        { label: "功能渗透率", value: "9%→20%", detail: "↑122%" },
        { label: "保存率", value: "45%→55%", detail: "↑22%" },
        { label: "收入", value: "900万→2566万", detail: "↑185%" },
        { label: "排名", value: "Top1", detail: "收入Top1功能" }
      ],
      summary: "验证「高频刚需工具从体验优化→用户增长→商业放大」的全链路打法，沉淀可复制的工具型产品增长变现方法论。",
      tags: ["市场与用户研究", "学习能力", "产品设计"],
      icon: "🎯",
      images: {
        main: "/remove.jpg"
      }
    },
    {
      phase: "实践篇",
      title: "实践篇・批处理 3.0 功能重构与增长",
      subtitle: "价值放大",
      background: "原批处理框架与功能老旧，DAU与商业价值未释放，打造产品第二增长曲线。",
      challenges: [
        {
          issue: "独立工具入口难找",
          solution: "复用AI消除打法，新增AI消除/变清晰等高价值功能，搭建全路径曝光体系"
        },
        {
          issue: "付费模式单一",
          solution: "上线「连续订阅+低价试用」模式，绑定会员权益"
        }
      ],
      results: [
        { label: "DAU", value: "5.1万→7万", detail: "↑37%" },
        { label: "收入", value: "380万→625万", detail: "+65%" }
      ],
      summary: "把前两个项目沉淀的方法论完整复用在新的业务场景，实现从「学会做事」→「沉淀方法」→「复制放大价值」的闭环。",
      tags: ["产品规划", "营销市场", "商业化模式"],
      icon: "🔄",
      images: {
        main: "/batch.png"
      }
    }
  ];

  // 图片点击放大功能
  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const imageElements = document.querySelectorAll('.fade-in-up');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              我的成长曲线
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">一个全盘筑基→单点深耕→价值放大的故事</p>
        </motion.div>

        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl border-2 border-gray-900 mx-auto"
              style={{
                filter: 'drop-shadow(6px 6px 0px rgba(0,0,0,1))',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* 标题区域 - 纯白背景 + 彩色提示线 */}
              <div className="bg-white px-8 py-6 border-b-2 border-black border-l-8 border-l-[#FF3B30]">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {achievement.title}
                </h3>
              </div>

              {/* 严格的50:50对等分栏布局 - 瘦身版 */}
              <div className="flex flex-col lg:flex-row gap-6 p-6">
                {/* 左侧50% - 内容区域 */}
                <div className="lg:w-1/2 space-y-6">
                  {/* 背景与目标 - 纯白背景 */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-900">
                    <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-1 h-5 bg-blue-500 mr-2 rounded-full"></span>
                      <span className="text-sm font-bold">背景&目标</span>
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed break-words" style={{ lineHeight: 1.5 }}>
                      {achievement.background}
                    </p>
                  </div>

                  {/* 核心成果 - 红色数据 + 防换行 */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-900">
                    <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-1 h-5 bg-red-500 mr-2 rounded-full"></span>
                      <span className="text-sm font-bold">核心成果</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {achievement.results.map((result, idx) => (
                        <div key={idx} className="border border-gray-900 rounded-md p-2 text-center">
                          <div className="text-base font-bold text-red-600" style={{ whiteSpace: 'nowrap' }}>{result.value}</div>
                          <div className="text-xs font-medium text-gray-700" style={{ whiteSpace: 'nowrap' }}>{result.label}</div>
                          {result.detail && (
                            <div className="text-xs text-gray-600 mt-0.5" style={{ whiteSpace: 'nowrap' }}>{result.detail}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 经验总结 - 纯白背景 */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-900">
                    <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-1 h-5 bg-purple-500 mr-2 rounded-full"></span>
                      <span className="text-sm font-bold">经验总结</span>
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1" style={{ lineHeight: 1.5 }}>
                      {achievement.summary.split('。').filter(s => s.trim()).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-1.5 mt-1 flex-shrink-0">◆</span>
                          <span className="break-words">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 右侧50% - 挑战应对 + 图片 */}
                <div className="lg:w-1/2 space-y-6">
                  {/* 挑战与应对 - 纯白背景 */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-900">
                    <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-1 h-5 bg-red-500 mr-2 rounded-full"></span>
                      <span className="text-sm font-bold">挑战&应对</span>
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1" style={{ lineHeight: 1.5 }}>
                      {achievement.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-1.5 mt-1 flex-shrink-0">▸</span>
                          <span className="break-words">
                            <strong className="font-bold text-gray-900">{challenge.issue}：</strong>
                            {challenge.solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 图片展示区 - 滚动动效 + 交互功能 */}
                  <div className="space-y-4">
                    {achievement.title.includes("PC 秀秀 7.0") ? (
                      /* 项目1：两图错位叠放 + 悬停交互 */
                      <div className="relative h-64 lg:h-80 fade-in-up">
                        <img
                          src="/old.png"
                          alt="PC秀秀7.0重构前"
                          className="absolute top-2 left-2 w-3/4 h-3/4 object-cover border-4 border-black rounded-lg shadow-2xl transition-all duration-300 cursor-pointer"
                          style={{
                            transform: 'rotate(-4deg)',
                            boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                            zIndex: hoveredImage === 'old' ? 10 : 1
                          }}
                          onClick={() => openLightbox("/old.png")}
                          onMouseEnter={() => setHoveredImage('old')}
                          onMouseLeave={() => setHoveredImage(null)}
                        />
                        <img
                          src="/new.png"
                          alt="PC秀秀7.0重构后"
                          className="absolute bottom-2 right-2 w-3/4 h-3/4 object-cover border-4 border-black rounded-lg shadow-2xl transition-all duration-300 cursor-pointer"
                          style={{
                            transform: 'rotate(3deg)',
                            boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                            zIndex: hoveredImage === 'new' ? 10 : 2
                          }}
                          onClick={() => openLightbox("/new.png")}
                          onMouseEnter={() => setHoveredImage('new')}
                          onMouseLeave={() => setHoveredImage(null)}
                        />
                      </div>
                    ) : achievement.title.includes("AI 消除") ? (
                      /* 项目2：单图倾斜 + 点击放大 */
                      <div className="relative h-64 lg:h-80 fade-in-up">
                        <img
                          src="/remove.jpg"
                          alt="AI消除功能效果"
                          className="w-full h-full object-cover border-4 border-black rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                          style={{
                            transform: 'rotate(-2deg)',
                            boxShadow: '8px 8px 0px rgba(0,0,0,1)'
                          }}
                          onClick={() => openLightbox("/remove.jpg")}
                        />
                      </div>
                    ) : (
                      /* 项目3：单图替换 */
                      <div className="relative h-64 lg:h-80 fade-in-up">
                        <img
                          src="/batch.png"
                          alt="批处理功能重构"
                          className="w-full h-full object-cover border-4 border-black rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                          style={{
                            transform: 'rotate(2deg)',
                            boxShadow: '8px 8px 0px rgba(0,0,0,1)'
                          }}
                          onClick={() => openLightbox("/batch.png")}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 底部标签 - 多巴胺风格 */}
              <div className="px-8 py-4 bg-gray-50 border-t-2 border-gray-900">
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 图片放大弹窗 */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImage}
              alt="放大图片"
              className="max-w-[90vw] max-h-[90vh] border-4 border-black rounded-lg shadow-[12px_12px_0px_rgba(0,0,0,0.3)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoreAchievements;