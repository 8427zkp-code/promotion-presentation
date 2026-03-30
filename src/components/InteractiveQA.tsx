import React from 'react';
import { motion } from 'framer-motion';

const InteractiveQA: React.FC = () => {
  const questions = [
    {
      icon: "🙋‍♀️",
      title: "问题一",
      content: "请教各位老师，在打造驱动增长的产品或功能有什么宝贵的经验吗？"
    },
    {
      icon: "💡",
      title: "问题二",
      content: "请教各位老师，结合本次的分享，对我的职业发展有什么宝贵的感受与建议？"
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
          <p className="text-xl text-gray-600 transform rotate-1">开心做产品，在线蹲老师们的升级指南~</p>
        </motion.div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white dopamine-card p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -1 : 1 }}
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