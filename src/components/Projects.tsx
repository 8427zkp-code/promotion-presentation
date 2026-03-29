import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "111筑基篇 · PC 秀秀 7.0 全版本重构",
      background: "6.0版本收入瓶颈，老用户习惯强，框架无法支撑新功能",
      thinking: "重构产品框架，分工统筹，用户安抚与数据监控",
      metrics: [
        { label: "保存率", value: "↑9%", detail: "74%→81%", noWrap: true },
        { label: "次日留存", value: "↑51%", detail: "30.53%→46.23%" },
        { label: "订阅率", value: "↑122.5%", detail: "0.34%→0.75%" },
        { label: "客单价", value: "↑20.6%", detail: "34.56→41.68" }
      ],
      tags: ["执行力", "项目管理", "方法论建设"],
      icon: "🏗️",
      imageSide: "right"
    },
    {
      title: "深耕篇 · AI 消除功能效果极致",
      background: "大量分析消除记录，发现复杂背景消除痕迹明显；核心场景是去水印与文字，引入自动消除提高效率。",
      thinking: "快速学习前沿技术，落地GAN版、GAN+SD融合消除；锁定「去水印/去文字」核心场景，全路径引导。",
      metrics: [
        { label: "渗透率", value: "↑122%", detail: "9%→20%" },
        { label: "保存率", value: "↑22%", detail: "45%→55%" },
        { label: "收入", value: "↑185%", detail: "900万→2566万" },
        { label: "排名", value: "Top1", detail: "收入Top1功能" }
      ],
      tags: ["市场与用户研究", "学习能力", "产品设计"],
      icon: "🎯"
    },
    {
      title: "实践篇 · 批处理 3.0 功能重构与增长",
      background: "原批处理框架与功能老旧，DAU与商业价值未释放，打造产品第二增长曲线。",
      thinking: "复用AI消除打法，新增高价值功能，全路径曝光；上线「连续订阅+低价试用」模式。",
      metrics: [
        { label: "DAU", value: "↑37%", detail: "" },
        { label: "收入", value: "↑75%", detail: "25年环比24年" }
      ],
      tags: ["产品规划", "营销市场", "商业化模式"],
      icon: "🔄"
    }
  ];

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">我的成长曲线</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">一个全盘筑基 → 单点深耕 → 价值放大的故事</p>

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
                  {/* 左侧内容区 */}
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
                            {/* 第一行：指标名称 + 数值变化（不换行） */}
                            <div className="text-xs text-gray-700 whitespace-nowrap">
                              {metric.label} {metric.detail && <span className="text-gray-500">{metric.detail}</span>}
                            </div>
                            {/* 第二行：增长百分比（红色，大号） */}
                            <div className="text-red-600 font-bold text-lg mt-1">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">经验总结</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {index === 0 && "聚焦高价值功能到一级页面，大版本重构需及时跟进用户反馈。"}
                        {index === 1 && "验证「高频刚需工具从体验优化→用户增长→商业放大」全链路打法。"}
                        {index === 2 && "实现从「学会做事」→「沉淀方法」→「复制放大价值」的闭环。"}
                      </p>
                    </div>
                  </div>

                  {/* 右侧内容区 */}
                  <div className="md:w-2/5 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">挑战&应对</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        {index === 0 && (
                          <>
                            <li>多部门协同难 → 拆解里程碑 + 模块负责制</li>
                            <li>老用户习惯固化 → 前置灰度 + 操作引导 + 会员安抚</li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li>AI技术迭代快 → 落地GAN、GAN+SD融合消除</li>
                            <li>用户场景分散 → 锁定核心场景，全路径引导</li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li>独立工具入口难找 → 复用AI消除打法，全路径曝光</li>
                            <li>付费模式单一 → 上线连续订阅+低价试用</li>
                          </>
                        )}
                      </ul>
                    </div>

                    {/* 图片展示区（占位） */}
                    <div className="bg-gray-100 rounded-lg border-2 border-black p-2 text-center">
                      <div className="text-4xl mb-1">📸</div>
                      <div className="text-xs text-gray-500">配图占位</div>
                    </div>

                    {/* 能力标签 */}
                    <div className="flex flex-wrap gap-2 pt-2">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;