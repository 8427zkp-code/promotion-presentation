import React from 'react';
import { motion } from 'framer-motion';

const OrganizationalImpact: React.FC = () => {
  const impacts = [
    {
      title: "沉淀经验，赋能团队淀",
      desc: "将 PC 秀秀 7.0 重构露出高频功能、消除路径优化等经验沉淀为方法论并分享团队。帮助团队在 25 年优化 AI 功能使用路径，助力功能进入 UV",
      highlight: "+76%",
      theme: { bg: "#FFF4CC", border: "#FFB800", text: "#B28000" },
      icon: "💡"
    },
    {
      title: "数据洞察，驱动商业新星",
      desc: "分享洞察消除用户的记录结论：“消除后再加文字路径渗透率 14%，但进入保存率仅 0.4%”。帮助团队精准定位痛点上线无痕改字功能，成为 PC 秀秀收入",
      highlight: "Top 2",
      subtext: "（仅次于消除）",
      theme: { bg: "#E6F7FF", border: "#0088FF", text: "#005C99" },
      icon: "📈"
    },
    {
      title: "核心技术，跨业务线复用",
      desc: "推动的 GAN+SD 融合生成式消除方案，解决消除后的马赛克问题，在美图秀秀、美颜相机、WHEE 等",
      highlight: "8个业务",
      subtext: "复用。",
      theme: { bg: "#F0E6FF", border: "#9900FF", text: "#5C0099" },
      icon: "🔥"
    }
  ];

  return (
    <section className="px-6 pt-8 pb-20 bg-[#f4ffea] flex items-center justify-center"> {/* 调整顶部内边距 */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-mt-20"> {/* 添加滚动偏移 */}
            <span className="relative inline-block transform -rotate-1">
              <span className="relative">
                组织影响力与贡献
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500"></div>
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 transform rotate-1">发光发热小太阳 ✨</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_#000] p-6 md:p-8 flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_#000] bg-white relative z-10"
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-sm flex-grow mt-2">
                {item.desc}
                <span className="font-black text-xl mx-1" style={{ color: item.theme.border }}>{item.highlight}</span>
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationalImpact;