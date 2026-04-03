import React from 'react';
import { motion } from 'framer-motion';

const InteractiveQA: React.FC = () => {
  const questions = [
    {
      icon: "🙋‍♀️",
      title: "问题一",
      content: "我个人全局思考的能力不足，大概源于我会随时迸发新想法，有想法就急切想方案落地，过早陷入方案细节里，做着做着就脱离了想法的初衷，想请教老师们有什么建议吗？"
    },
    {
      icon: "💡",
      title: "问题二",
      content: "读史能明智，这次准备时复盘了很多事，无数次拍大腿感叹当时怎么没想到，比如22年PC秀秀重构时就发现用户需要高效批量的工具，但没有深挖批量，到24年常看消除记录才洞察到，好像总会存在这种机会点才能动起来，大家关于如何把握住机会点有什么建议吗？"
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block transform -rotate-1">
              <span className="relative">
                互动交流
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 transform rotate-1">开心做产品，在线蹲指南~</p>
        </motion.div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white dopamine-card p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{question.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-orange-600 mb-3">{question.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{question.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-orange-600 font-semibold transform -rotate-1">
            感谢各位老师的聆听！一起加油呀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveQA;