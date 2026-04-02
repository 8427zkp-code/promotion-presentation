import React from 'react';
import { motion } from 'framer-motion';

const Responsibilities: React.FC = () => {
  const responsibilities = [
    {
      title: "【PC秀秀大管家 → 核心功能深耕官】",
      content: "21-24 年负责PC秀秀产品规划与落地，覆盖市场分析、产品设计与迭代全流程；25 年开始聚焦核心功能的打磨，夯实产品核心竞争力。",
      tags: ["执行力", "产品设计", "市场/用户的调研与分析"],
      icon: "💻"
    },
    {
      title: "【跨部门协同粘合剂・业务增收守门员】",
      content: "学习市场营销、商业化策略与技术，联动开发、商业化、渠道、运营等同学，为 PC 端营收目标达成保驾护航。",
      tags: ["技术知识", "项目管理", "营销市场", "商业化模式", "团队合作"],
      icon: "💰"
    },
    {
      title: "【持续学习更新认知・不断尝试积累经验】",
      content: "学习前沿技术与行业趋势，更新产品认知，多方向尝试，沉淀可复用的产品方法论。",
      tags: ["学习能力", "方法论建设", "知识传承"],
      icon: "🔄"
    },
    {
      title: "【积极分享观点・助力团队升级】",
      content: "把自己攒的方法、踩坑经验，主动分享给小伙伴，互相补位、一起进步，帮团队一起变厉害。",
      tags: ["沟通能力", "知识传承", "培养指导", "团队合作"],
      icon: "🤝"
    }
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
              工作职责与目标
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">PC人，PC魂，PC收入要完成！</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dopamine-card p-6 rounded-2xl relative z-0 hover:z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0 } }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.title}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {item.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 border border-black rounded-full text-xs font-medium bg-white/50 shadow-[1px_1px_0px_#000]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;