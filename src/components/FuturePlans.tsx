import React from 'react';
import { motion } from 'framer-motion';

const FuturePlans: React.FC = () => {
  // 工作计划：双主题色多巴胺区分，已修改目标文本
  const workPlans = [
    {
      period: "短期规划（1年内）",
      title: "技术深耕 + 持续升级",
      action: "结合Agent、OpenClaw等前沿技术，升级AI消除、批处理两大王牌功能",
      target: "AI消除、批处理DAU&收入增长", // 已按要求修改，不标色
      path: "联动算法、生态团队小步快跑",
      // 多巴胺主题色：活力橙
      theme: {
        main: "#ff5c00",
        bg: "#fff5e6",
        border: "#ff5c00",
        dot: "#ff5c00"
      }
    },
    {
      period: "中长期规划（1-3年）",
      title: "复用经验，放大价值",
      actions: [
        "复制两大功能方法论，带动PC端更多工具功能增长",
        "深耕PC端独有场景优势，打造差异化功能体验",
        "沉淀工具型产品迭代方法论，团队内部分享复用"
      ],
      // 多巴胺主题色：清爽蓝（和短期规划撞色区分）
      theme: {
        main: "#0088ff",
        bg: "#e6f4ff",
        border: "#0088ff",
        dot: "#0088ff"
      }
    }
  ];

  // 个人发展计划：甜酷粉多巴胺主题，和工作计划颜色完全区分
  const personalPlans = [
    <>
      <span className="text-pink-600 font-bold">产品洞察力/前瞻性、产品全局规划能力</span> 不足，计划通过学习更多商业分析报告、战略分析方法，来提升全局产品规划与战略思考能力
    </>,
    <>
      <span className="text-pink-600 font-bold">行业深层需求</span> 还没挖透，计划通过深度跟进行业趋势、开展用户深度访谈，挖掘用户真实需求，做核心行业的效率、赚钱工具，产品驱动增长
    </>
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-[#fffbe8]">
      <div className="max-w-6xl mx-auto">
        {/* 顶部大标题：多巴胺加粗下划线 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            <span className="relative inline-block">
              未来规划
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-orange-500 -z-10 transform skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-medium">加油、努力，大力出奇迹！</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* 工作计划区域：多巴胺双撞色卡片 */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-10 text-center">
              <span className="relative inline-block transform -rotate-1">
                <span className="relative text-gray-900">
                  工作计划
                  <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-orange-500"></div>
                </span>
              </span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_#000] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000]`}
                  style={{ backgroundColor: plan.theme.bg }}
                  initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-black mb-4" style={{ color: plan.theme.main }}>
                    {plan.period.replace('（1年内）', '：').replace('（1-3年）', '：')}{plan.title}
                  </h4>

                  {plan.action && (
                    <p className="text-gray-800 mb-3 text-sm font-medium">
                      <span className="font-black" style={{ color: plan.theme.main }}>核心动作：</span> {plan.action}
                    </p>
                  )}

                  {plan.target && (
                    <p className="text-gray-800 mb-3 text-sm font-medium">
                      <span className="font-black" style={{ color: plan.theme.main }}>落地目标：</span>
                      <span className="font-normal text-gray-900"> {plan.target}</span>
                    </p>
                  )}

                  {plan.path && (
                    <p className="text-gray-800 text-sm font-medium">
                      <span className="font-black" style={{ color: plan.theme.main }}>执行路径：</span> {plan.path}
                    </p>
                  )}

                  {plan.actions && (
                    <div className="space-y-2">
                      {plan.actions.map((action, idx) => (
                        <p key={idx} className="text-gray-800 text-sm font-medium flex items-start gap-2">
                          <span className="font-black mt-0.5 flex-shrink-0" style={{ color: plan.theme.dot }}>•</span>
                          {action}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 个人发展计划：甜酷粉多巴胺主题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-10 text-center">
              <span className="relative inline-block transform rotate-1">
                <span className="relative text-gray-900">
                  个人发展计划
                  <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-pink-500"></div>
                </span>
              </span>
            </h3>

            <div className="max-w-3xl mx-auto">
              <motion.div
                className="bg-[#ffeef6] rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_#000] p-6 md:p-8 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000]"
                initial={{ opacity: 0, y: 30, rotate: 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-4">
                  {personalPlans.map((plan, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-lg font-black text-pink-600 mt-0.5 flex-shrink-0">{idx + 1}.</span>
                      <p className="text-gray-800 text-sm leading-relaxed break-words font-medium">{plan}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;