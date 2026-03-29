import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-2 pb-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* 左侧文本区 - 占6/10 */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8 max-w-2xl">
                {/* 名字突出显示 - 倾斜多巴胺风格 */}
                <div className="flex items-end gap-4">
                  <span className="text-3xl md:text-4xl font-black text-black">我是</span>
                  <div className="bg-pink-400 border-4 border-black rounded-2xl shadow-[6px_6px_0px_#000] px-6 py-3 transform -rotate-3 inline-block">
                    <h1 className="text-5xl md:text-6xl font-black text-black">赵坤萍</h1>
                  </div>
                </div>

                {/* 英文标语 */}
                <div className="text-4xl md:text-5xl font-black text-black leading-tight">
                  美图设计室-PC秀秀-产品经理
                </div>

                {/* 申请目标卡片 - 重新排序并倾斜 */}
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold text-gray-600">练习时长4年半</span>
                  <div className="bg-yellow-400 border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] px-5 py-2 transform rotate-2 inline-block">
                    <span className="text-xl md:text-2xl font-bold text-black">申请 L2.1 → L2.2</span>
                  </div>
                </div>

                {/* 个人信息简介 - 便利贴风格倾斜卡片 */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="bg-yellow-50 border-2 border-black rounded-lg p-4 transform -rotate-1 shadow-[2px_2px_0px_#000]">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">最近绩效:</h3>
                    <p className="text-gray-700 text-xs">2025年 B+、2024年 B+、2023年 B+</p>
                  </div>
                  <div className="bg-blue-50 border-2 border-black rounded-lg p-4 transform rotate-2 shadow-[2px_2px_0px_#000]">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">个人荣誉:</h3>
                    <p className="text-gray-700 text-xs">2025年"智能消除"优秀项目代表</p>
                    <p className="text-gray-700 text-xs">2022年"攻坚突破"优秀个人</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 右侧图片区 - 占4/10 */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              <img
                src="/card.png"
                alt="个人名片"
                className="max-w-[400px] w-full border-4 border-black rounded-2xl shadow-[8px_8px_0px_#000]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;