import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CoreAchievements: React.FC = () => {
  // 【新增】点击放大弹窗状态
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  // 【新增】项目1双图hover状态
  const [hoveredImage, setHoveredImage] = useState<'old' | 'new' | null>(null);

  // 完全保留你原来的所有项目数据，一丝未改，仅新增images配置
  const projects = [
    {
      title: "筑基篇 · PC 秀秀 7.0 全版本重构",
      background: "6.0版本框架老旧、功能分散，收入增长触顶，通过框架重构优化体验，打破收入瓶颈。",
      thinking: "重构产品框架，分工统筹，用户安抚与数据监控",
      metrics: [
        { value: "↑9%", detail: "保存率：74%→81%" },
        { value: "↑51%", detail: "次日留存：30.53%→46.23%" },
        { value: "↑121%", detail: "订阅率：0.34%→0.75%" },
        { value: "↑21%", detail: "客单价：34.56→41.68" }
      ],
      tags: ["执行力", "项目管理", "方法论建设"],
      icon: "🏗️",
      imageSide: "right",
      // 【新增】项目1配图配置
      images: [
        { src: "/old.png", alt: "PC秀秀6.0旧版界面", type: "old" },
        { src: "/new.png", alt: "PC秀秀7.0新版界面", type: "new" }
      ]
    },
    {
      title: "深耕篇 · AI 消除功能效果极致",
      background: "高频使用的消除功能，消除后痕迹明显，效果提升空间大；核心场景是去水印与文字，引入自动消除提高效率。",
      thinking: "联动算法快速跟进新技术，落地GAN版、GAN+SD融合消除；锁定「去水印/去文字」核心场景，全路径引导。",
      metrics: [
        { value: "↑122%", detail: "渗透率：9%→20%" },
        { value: "↑22%", detail: "保存率：45%→55%" },
        { value: "↑185%", detail: "收入：900万→2566万" },
        { value: "Top1", detail: "成为收入Top1功能" }
      ],
      tags: ["市场与用户研究", "学习能力", "产品设计"],
      icon: "🎯",
      // 【新增】项目2配图配置
      images: [
        { src: "/remove.jpg", alt: "AI消除功能界面", type: "single" }
      ]
    },
    {
      title: "实践篇 · 批处理 3.0 功能重构与增长",
      background: "原批处理框架与功能老旧，DAU与商业价值未释放，有机会再增长一波。",
      thinking: "复用AI消除打法，新增高价值功能，全路径曝光；上线「连续订阅+低价试用」模式。",
      metrics: [
        { value: "↑37%", detail: "DAU：5.1万→7万" },
        { value: "↑75%", detail: "收入：380万→625万" }
      ],
      tags: ["产品洞察能力", "营销市场", "商业化模式"],
      icon: "🔄",
      // 【新增】项目3配图配置
      images: [
        { src: "/batch.png", alt: "批处理功能界面", type: "single" }
      ]
    }
  ];

  // 【新增】打开大图方法
  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  return (
    <section className="min-h-screen px-6 py-16 relative">
      {/* 【新增】点击放大全屏弹窗 */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-pointer"
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

      <div className="max-w-5xl mx-auto">
        {/* 【核心修改】标题区域 - 完全对齐Responsibilities的样式 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              我的成长曲线
              {/* 新增橙色下划线 */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
            </span>
          </h2>
          {/* 调整副标题间距 */}
          <p className="text-xl text-gray-600 mt-4">一个全盘筑基 → 单点深耕 → 价值放大的故事</p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_#000] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* 左侧内容区 完全保留你原来的所有内容 + 移动过来的能力标签 */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">背景&目标</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.background}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">核心成果</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                          {/* 第一行：涨幅/核心结果（红色大号，居中） */}
                          <div className="text-red-600 font-bold text-lg text-center">{metric.value}</div>
                          {/* 第二行：指标+原值→现值（灰色小字，居中） */}
                          <div className="text-xs text-gray-700 text-center mt-1">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">经验总结</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {index === 0 && "聚焦高价值功能到首页、编辑器等一级页面，替代原独立弹窗，用户使用更顺畅。大版本重构需及时跟进用户反馈，避免流失。"}
                      {index === 1 && "验证「高频刚需工具路径与效果优化→用户增长→商业放大」的全链路打法，沉淀可复制的工具型产品增长变现方法论。"}
                      {index === 2 && "把前两个项目沉淀的方法论完整复用在新的业务场景，实现从「执行力」→「沉淀方法」→「复制放大价值」的闭环。"}
                    </p>
                  </div>

                  {/* 【移动到左侧的能力标签】 */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs border border-black rounded-full bg-transparent text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 右侧内容区 仅调整了间距和图片尺寸，其他完全不动 */}
                <div className="md:w-2/5 space-y-4 pt-10">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">挑战&应对</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {index === 0 && (
                        <>
                          <li>多部门协同难 → 拆解里程碑 + 模块负责制，各自跟进，最后统一验收上线</li>
                          <li>老用户习惯固化抵触 → 灰度放量 + 操作引导 + 快速迭代 + 会员安抚，平稳过渡用户无流失</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>AI技术迭代快 → 联动算法快速跟进新技术，落地GAN版、GAN+SD版融合消除，全路径引导用户使用</li>
                          <li>用户场景分散、认知度低 → 锁定「去水印/去文字」核心场景，上线专属功能</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>独立工具入口难找 → 复用AI消除打法，新增AI消除/变清晰等高价值功能，联动PC秀秀搭建全路径曝光体系</li>
                          <li>付费模式单一 → 上线「连续订阅+低价试用」模式，绑定会员权益</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* 【调整尺寸后的图片展示区】 */}
                  <div className="relative h-80 w-full flex items-center justify-center">
                    {/* 项目1：双图倾斜叠放 + Hover切换（完全不动） */}
                    {index === 0 && project.images && (
                      <div className="relative w-full h-full">
                        {/* 旧版图（左后） */}
                        <motion.div
                          className={`absolute left-4 top-8 w-48 h-36 rounded-lg border-2 border-black shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === 'new' ? 'opacity-50 -rotate-6 scale-95' : 'opacity-100 -rotate-3 scale-100'}`}
                          onMouseEnter={() => setHoveredImage('old')}
                          onMouseLeave={() => setHoveredImage(null)}
                          onClick={() => openLightbox(project.images[0].src)}
                        >
                          <img src={project.images[0].src} alt={project.images[0].alt} className="w-full h-full object-cover" />
                        </motion.div>
                        {/* 新版图（右前） */}
                        <motion.div
                          className={`absolute right-4 bottom-8 w-48 h-36 rounded-lg border-2 border-black shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${hoveredImage === 'old' ? 'opacity-50 rotate-6 scale-95' : 'opacity-100 rotate-3 scale-100'}`}
                          onMouseEnter={() => setHoveredImage('new')}
                          onMouseLeave={() => setHoveredImage(null)}
                          onClick={() => openLightbox(project.images[1].src)}
                        >
                          <img src={project.images[1].src} alt={project.images[1].alt} className="w-full h-full object-cover" />
                        </motion.div>
                      </div>
                    )}

                    {/* 项目2/3：放大后的单图 */}
                    {(index === 1 || index === 2) && project.images && (
                      <motion.div
                        className="w-72 h-52 rounded-lg border-2 border-black shadow-lg overflow-hidden cursor-pointer"
                        initial={{ rotate: index === 1 ? 2 : -2 }}
                        whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openLightbox(project.images[0].src)}
                      >
                        <img src={project.images[0].src} alt={project.images[0].alt} className="w-full h-full object-cover" />
                      </motion.div>
                    )}
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