# 🪄 DMP 美妆洞察 Copilot (Bzhi_DMP)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Chrome_Extension-4285F4.svg)
![Tech Stack](https://img.shields.io/badge/tech-Vanilla_JS_|_HTML_|_CSS-F7DF1E.svg)
![Analytics](https://img.shields.io/badge/analytics-PostHog-FF5A5F.svg)

**DMP 美妆洞察 Copilot** 是一款专为电商美妆业务打造的“达摩盘”数据提效引擎（Chrome 浏览器扩展程序）。

本工具旨在解决传统人群洞察中“单点查询效率低”、“数据出表难清洗”、“优质分析思路难共享”三大痛点。只需一键，即可对目标人群进行全维穿透提取、自动 Rebase 数据归一化，并生成微可视化报表。支持以“口令”形式与团队共享特征模型，让人群策略分析提效 10 倍以上！

---

## ✨ 核心功能 (Core Features)

- **🚀 全维批量穿透提取**
  - 突破底层单次查询限制，一键并发抓取【用户特征】、【消费特征】、【品类特征】、【私域特征】等多维数据节点。
- **🧠 智能归一化引擎 (Auto-Rebase)**
  - 针对底层数据存在的单选题/多选题统计差异，内建智能清洗算法。自动聚合占比总和，消除长尾误差，生成高置信度的 `Rebase` 比例，彻底告别 Excel 手工清洗。
- **📦 模型资产协同 (方案口令分享)**
  - 创新式方案复用机制：支持将高价值的特征组合保存为本地模型。
  - 支持将模型序列化为 `Base64` 加密口令（如 `DMP_MODEL_xxx...`），通过 IM 工具发送给同事，一键粘贴导入，实现分析思路的 100% 传承。
- **📊 商业级透明埋点 (Powered by PostHog)**
  - 摒弃繁杂的后端服务器，通过纯前端直连 PostHog Capture API 构建数据大盘。
  - 内置极简实名制认证，精细化追踪团队成员的“最爱特征”、“热门方案”及核心转化漏斗，实现数据工具的“自闭环分析”。
- **💾 极简轻量可视化**
  - 抛弃厚重的图表库，采用纯 CSS 构建带双轨热力图（粉/蓝）的轻量级矩阵表。
  - 支持一键导出无冗余格式的 `.csv` 文件，或直接复制结构化数据至剪贴板，平滑对接飞书/Excel 等办公协同软件。

---

## 🛠️ 安装指南 (Installation)

由于本插件含有深度定制的业务拦截逻辑，暂不上架 Chrome 商店，请采用开发者模式加载安装：

1. **获取代码**：
   将本仓库克隆至本地，或下载为 ZIP 压缩包并解压。
   ```bash
   git clone [https://github.com/aidenLi377/dmp.git](https://github.com/aidenLi377/dmp.git)