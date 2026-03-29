import React from 'react';
import { motion } from 'framer-motion';

const FuturePlans: React.FC = () => {
  const workPlans = [
    {
      period: "短期规划（1年内）",
      title: "技术深耕 + 持续升级",
      action: "结合Agent、OpenClaw等前沿技术，升级AI消除、批处理两大王牌功能",
      target: "AI消除、批处理DAU、收入增长30%+",
      path: "联动算法、生态团队小步快跑"
    },
    {
      period: "中长期规划（1-3年）",
      title: "复用经验，放大价值",
      actions: [
        "复制两大功能方法论，带动PC端更多工具功能增长",
        "深耕PC端独有场景优势，打造差异化功能体验",
        "沉淀工具型产品迭代方法论，团队内部分享复用"
      ]
    }
  ];

  const personalPlans = [
    "通过学习更多商业分析报告、战略分析方法，提升全局产品规划与战略思考能力",
    "通过啃透行业趋势、与用户聊更多真实需求，希望能做引领行业潮流的产品"
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              未来规划
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">加油、努力，工作要用力！</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">          {/* 工作计划 - 左右并列布局 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="relative inline-block transform -rotate-2">
                <span className="relative">
                  工作计划
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></div>
                </span>
              </span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {workPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-white dopamine-card p-4 h-fit"
                  initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                >
                  <h4 className="text-base font-bold text-orange-600 mb-2">{plan.period.replace('（1年内）', '：').replace('（1-3年）', '：')}{plan.title}</h4>

                  {plan.action && (
                    <p className="text-gray-700 mb-2 text-sm">
                      <span className="text-orange-600 font-semibold">核心动作：</span> {plan.action}
                    </p>
                  )}

                  {plan.target && (
                    <p className="text-gray-700 mb-2 text-sm">
                      <span className="text-orange-600 font-semibold">落地目标：</span>
                      <span className="text-orange-600 font-bold">{plan.target}</span>
                    </p>
                  )}

                  {plan.path && (
                    <p className="text-gray-700 text-sm">
                      <span className="text-orange-600 font-semibold">执行路径：</span> {plan.path}
                    </p>
                  )}

                  {plan.actions && (
                    <div className="space-y-1">
                      {plan.actions.map((action, idx) => (
                        <p key={idx} className="text-gray-700 text-sm">
                          <span className="text-orange-600 mr-2">•</span>
                          {action}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 个人发展计划 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="relative inline-block transform rotate-2">
                <span className="relative">
                  个人发展计划
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></div>
                </span>
              </span>
            </h3>

            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-white dopamine-card p-4 md:p-6"
                initial={{ opacity: 0, y: 30, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="space-y-3">
                  {personalPlans.map((plan, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-base font-bold text-orange-600 mt-0.5 flex-shrink-0">{idx + 1}.</span>
                      <p className="text-gray-700 text-sm leading-relaxed break-words">{plan}</p>
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