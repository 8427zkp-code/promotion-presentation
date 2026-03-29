import React from 'react';
import { motion } from 'framer-motion';

const Contributions: React.FC = () => {
  const contributions = [
    {
      title: "文档模板沉淀",
      description: "建立标准化的文档体系，提升团队协作效率",
      examples: [
        "项目管理 Checklist - 覆盖需求评审到上线全流程",
        "需求文档模板 - 统一PRD格式，减少沟通成本",
        "数据分析报告模板 - 标准化数据呈现方式"
      ],
      icon: "📋"
    },
    {
      title: "跨团队协作机制",
      description: "建立高效的跨部门协作流程，确保项目顺利推进",
      examples: [
        "与设计团队建立设计评审流程，提前介入减少返工",
        "与开发团队制定技术方案预评审机制，降低技术风险",
        "建立需求变更响应机制，确保项目按时交付"
      ],
      icon: "🤝"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 title-decoration inline-block">
            <span className="text-orange">组织贡献与方法论</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-orange mb-3">
                  具体实践案例
                </h4>
                <ul className="space-y-3">
                  {item.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-orange mt-1">•</span>
                      <span className="text-gray-600 leading-relaxed">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;