import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-1 pb-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* 左侧文本区 - 占6/10 */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 md:space-y-6 max-w-2xl">
                {/* 名字突出显示 - 【修改】hover回正，移开自动恢复倾斜 */}
                <div className="flex items-end gap-4">
                  <span className="text-3xl md:text-4xl font-black text-black">我是</span>
                  <motion.div
                    className="bg-pink-400 border-4 border-black rounded-2xl shadow-[6px_6px_0px_#000] px-6 py-3 inline-block cursor-pointer"
                    initial={{ rotate: -3 }} // 初始倾斜
                    animate={{ rotate: -3 }} // 常态保持倾斜
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0, // hover回正
                      backgroundColor: '#FF69B4'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h1 className="text-5xl md:text-6xl font-black text-black">赵坤萍</h1>
                  </motion.div>
                </div>

                {/* 英文标语 */}
                <div className="text-4xl md:text-5xl font-black text-black leading-tight">
                  美图设计室-PC秀秀-产品经理
                </div>

                {/* 申请目标卡片 - 【修改】hover回正，移开自动恢复倾斜 */}
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold text-gray-600">练习时长4年半</span>
                  <motion.div
                    className="bg-yellow-400 border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] px-5 py-2 inline-block cursor-pointer"
                    initial={{ rotate: 2 }} // 初始倾斜
                    animate={{ rotate: 2 }} // 常态保持倾斜
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0, // hover回正
                      backgroundColor: '#FFD700'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl md:text-2xl font-bold text-black">申请 L2.1 → L2.2</span>
                  </motion.div>
                </div>

                {/* 个人信息简介 - 紧凑排列 + 雷达图 */}
                <div className="flex flex-col lg:flex-row gap-4 mt-6 items-start">
                  {/* 左侧文字模块 - 上下排列 */}
                  <div className="flex flex-col gap-3 flex-1">
                    {/* 绩效框 - 【修改】hover回正，移开自动恢复倾斜 */}
                    <motion.div
                      className="bg-yellow-50 border-2 border-black rounded-lg p-3 shadow-[2px_2px_0px_#000] cursor-pointer"
                      initial={{ rotate: -1 }} // 初始倾斜
                      animate={{ rotate: -1 }} // 常态保持倾斜
                      whileHover={{ 
                        scale: 1.03, 
                        rotate: 0, // hover回正
                        backgroundColor: '#FFFACD'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">最近绩效:</h3>
                      <p className="text-gray-700 text-xs">2025年 B+、2024年 B+、2023年 B+</p>
                    </motion.div>
                    {/* 荣誉框 - 【修改】hover回正，移开自动恢复倾斜 */}
                    <motion.div
                      className="bg-blue-50 border-2 border-black rounded-lg p-3 shadow-[2px_2px_0px_#000] cursor-pointer"
                      initial={{ rotate: 1 }} // 初始倾斜
                      animate={{ rotate: 1 }} // 常态保持倾斜
                      whileHover={{ 
                        scale: 1.03, 
                        rotate: 0, // hover回正
                        backgroundColor: '#E0FFFF'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">个人荣誉:</h3>
                      <p className="text-gray-700 text-xs">2024年"智能消除"优秀项目代表</p>
                      <p className="text-gray-700 text-xs">2022年"攻坚突破"优秀个人</p>
                    </motion.div>
                  </div>

                  {/* 右侧雷达图 - 保留原有hover放大效果 */}
                  <div className="flex-shrink-0">
                    <motion.img
                      src="/ability.png"
                      alt="能力雷达图"
                      className="w-32 h-32 md:w-40 md:h-40 object-contain border-4 border-black rounded-xl shadow-[4px_4px_0px_#000] cursor-pointer clickable"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        const style = document.createElement('style');
                        style.textContent = `
                          .lightbox-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; cursor: pointer; }
                          .lightbox-image { max-width: 90vw; max-height: 90vh; border: 4px solid #000; border-radius: 12px; box-shadow: 8px 8px 0px #000; }
                        `;
                        document.head.appendChild(style);

                        const overlay = document.createElement('div');
                        overlay.className = 'lightbox-overlay';
                        overlay.onclick = () => overlay.remove();

                        const img = document.createElement('img');
                        img.src = '/ability.png';
                        img.alt = '能力雷达图';
                        img.className = 'lightbox-image';
                        img.onclick = (e) => e.stopPropagation();

                        overlay.appendChild(img);
                        document.body.appendChild(overlay);
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 右侧图片区 - 占4/10（原有hover效果完全保留） */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
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