import React from 'react';
import { motion } from 'framer-motion';

const PersonalInfo: React.FC = () => {
  const achievements = [
    "项目协同推进",
    "数据与产品洞察驱动优化",
    "流程化沉淀能力",
    "结果导向执行力"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-4 title-decoration inline-block">
            <span className="text-orange">个人信息</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl text-orange mb-2 font-semibold">申请职级</h3>
              <p className="text-3xl font-bold text-gray-900">
                L2.1 → L2.2
                <span className="text-lg text-gray-600 ml-2">练习时长4年半</span>
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl text-orange mb-2 font-semibold">汇报上级</h3>
              <p className="text-2xl font-bold text-gray-900">陈静</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl text-orange mb-4 font-semibold">最近绩效</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>2025年</span>
                  <span className="text-orange font-bold">B+</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>2024年</span>
                  <span className="text-orange font-bold">B+</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>2023年</span>
                  <span className="text-orange font-bold">B+</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl text-orange mb-4 font-semibold">获奖荣誉</h3>
              <div className="space-y-3">
                <p className="text-gray-900 font-medium">2025年“智能消除”优秀项目代表</p>
                <p className="text-gray-900 font-medium">2022年“攻坚突破”优秀个人</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl text-orange mb-4 font-semibold">核心优势</h3>
              <div className="space-y-2">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-orange">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;