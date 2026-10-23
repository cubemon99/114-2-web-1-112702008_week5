import Image from "next/image";
import Menu from "../../components/Menu";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/background_right.jpg')] bg-cover bg-center p-6 md:p-10 flex flex-col justify-center items-center">
      {/* 導航選單 (若有需要可解除註解) */}
      {/* <Menu /> */}

      {/* 主體毛玻璃容器 */}
      <main className="w-full max-w-7xl h-[88vh] bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* ===================== 左側：個人簡介、聯絡資訊與潛水故事 (佔 35%) ===================== */}
        <aside className="w-full lg:w-[45%] h-full bg-white/40 border-r border-white/30 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* 個人頭像區塊 */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white mb-4">
                <img src="/me2.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-black text-slate-800 tracking-wider">鄧柏希</h1>
              <p className="text-sm font-medium text-slate-600 mt-1">
                國立政治大學 四年級
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100/80 rounded-full text-xs font-semibold text-blue-900 border border-blue-200">
                <span>雙學位</span> 心理學系 ✕ 數位內容學系
              </div>
            </div>

            {/* 聯絡資訊與語言能力 */}
            <div className="bg-white/60 rounded-2xl p-4 shadow-sm border border-white/50 mb-6 space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 min-w-[48px]">電話:</span>
                <span>+886-972 940 574 / +853-6625 5656</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 min-w-[48px]">信箱:</span>
                <span className="text-blue-800 underline">pvpman888@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60">
                <span className="font-bold text-slate-900 min-w-[48px]">語言:</span>
                <span className="inline-flex gap-2">
                  <span className="px-2 py-0.5 bg-slate-200/70 rounded text-xs">中文流暢</span>
                  <span className="px-2 py-0.5 bg-slate-200/70 rounded text-xs">英文流暢</span>
                  <span className="px-2 py-0.5 bg-slate-200/70 rounded text-xs">粵語精通</span>
                </span>
              </div>
            </div>

            {/* 潛水經歷與合作自薦 */}
            <div className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 rounded-2xl p-5 border border-cyan-200/50 shadow-sm text-slate-700 text-sm leading-relaxed space-y-3">
              <div className="flex items-center gap-2 text-cyan-900 font-bold">
                <span className="text-lg">🤿</span>
                <span>海洋愛好者 & 潛水合作</span>
              </div>
              <p>
                今年 6 月取得 <strong>OW + AOW</strong> 執照，深深愛上了水底世界，最享受在水底抬頭仰望天空的寧靜。
              </p>
              <p>
                近四年活躍於工商心理領域，一年前雙主修數位內容設計。身處生成式 AI 時代，習慣快速學習與敏捷調整。期待有機會與店家合作，合作前若能先 <strong>fun dive</strong> 一起潛水交流就更棒了！
              </p>
              <p className="text-xs text-slate-600 bg-white/50 p-2.5 rounded-lg border border-cyan-100">
                具備專案管理、UI 設計、遊戲與網頁開發能力。若已有合適人選，我也非常樂意以實習生身分投入，運用 AOW 實務熱情讓更多人看見台灣海洋之美。
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
            Portfolio & Resume • Tang Pak Hei
          </div>
        </aside>

        {/* ===================== 右側：經歷與技能 (佔 65%，獨立滾動) ===================== */}
        <section className="w-full lg:w-[62%] h-full p-6 md:p-10 overflow-y-auto space-y-10">

          {/* 1. 專業核心技能 */}
          <div>
            <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-2">
              <span className="h-6 w-1.5 bg-blue-700 rounded-full"></span>
              <h2 className="text-xl font-black text-slate-800 tracking-wide">專業技能 (Skills)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 影像處理 */}
              <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-900">影像處理</h3>
                  <span className="text-xs text-blue-600 font-medium">DaVinci / 剪映 / After Effects</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  劇本討論、拍攝分鏡、後期剪輯、畫面調色、基礎動畫製作。
                </p>
              </div>

              {/* 平面設計與介面 */}
              <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-900">平面與介面設計</h3>
                  <span className="text-xs text-blue-600 font-medium">Figma / CorelDRAW / AI</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  網頁前端開發、人機介面互動設計 (UI/UX)、產品三視圖繪製。
                </p>
              </div>

              {/* 立體設計 */}
              <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-900">立體設計 (3D)</h3>
                  <span className="text-xs text-blue-600 font-medium">Blender / 3D列印</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  繪製規則立體零件、輔助生成式 AI 3D 建模與模型後製。
                </p>
              </div>

              {/* 專案管理 */}
              <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-900">專案管理</h3>
                  <span className="text-xs text-blue-600 font-medium">Functional Map / 專案時程</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  制定時程節點、跨職能溝通、系統流程與規格規劃。
                </p>
              </div>
            </div>
          </div>

          {/* 2. 專案管理與社團經歷 */}
          <div>
            <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-2">
              <span className="h-6 w-1.5 bg-blue-700 rounded-full"></span>
              <h2 className="text-xl font-black text-slate-800 tracking-wide">專案管理與社團歷練</h2>
            </div>

            <div className="space-y-4">
              {/* 數位內容畢展 */}
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">◆</span>
                    <h3 className="font-bold text-slate-900 text-base">數位內容畢業展覽 — 副召集人</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                    2026 - 至今
                  </span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1.5 pl-5 list-disc marker:text-blue-500">
                  <li>
                    全方位專案管理統籌：主導策展核心主題、整體視覺定位、排程推進與跨團隊溝通協調。
                  </li>
                  <li>
                    資源整合與行政對接：掌管專案總預算、校內外及政府單位補助企劃書撰寫、展演場地接洽。
                  </li>
                  <li>
                    沉浸式互動策劃：帶領團隊落實軟硬體整合與人機互動裝置開發，打造兼具敘事與科技感的展出體驗。
                  </li>
                </ul>
              </div>

              {/* 工商心理實驗室 */}
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">◆</span>
                    <h3 className="font-bold text-slate-900 text-base">政大工商心理學實驗室 — 研究成員</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                    2025 - 至今
                  </span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1.5 pl-5 list-disc marker:text-blue-500">
                  <li>
                    主持國科會大專學生研究計畫，獨立進行文獻探討、問卷量表編制、受試者施測與進階統計分析。
                  </li>
                  <li>
                    定期參與每週跨領域學術研討，協助指導教授與業界人士、政策單位洽談產學合作案。
                  </li>
                </ul>
              </div>

              {/* 心理系活動負責人 */}
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">◆</span>
                    <h3 className="font-bold text-slate-900 text-base">心理系活動 — 副負責人 / 心理之夜副召</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                    2024 - 2025
                  </span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1.5 pl-5 list-disc marker:text-blue-500">
                  <li>
                    系級大型活動統籌：負責迎新營隊、期末大會及各類節慶聯誼活動之企劃規劃與現場執行。
                  </li>
                  <li>
                    重啟睽違五年舞台劇：擔任製作專案經理，統籌編導演及公關、攝影、美宣、舞台總務等跨組幕後團隊。
                  </li>
                </ul>
              </div>

              {/* 港澳會 */}
              <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">◆</span>
                    <h3 className="font-bold text-slate-900 text-base">政大港澳會 — 公關及活動幹事</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                    2024 - 2025
                  </span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1.5 pl-5 list-disc marker:text-blue-500">
                  <li>
                    贊助接洽與品牌曝光：主動開發外部廠商洽談物資與資金贊助，落實互惠曝光方案。
                  </li>
                  <li>
                    新生事務與大型盛會：協調境外生團體機票、防疫宿舍入住；主辦校園歌唱大賽並與外籍生合辦跨文化交流晚會。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}