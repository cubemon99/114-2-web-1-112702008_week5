  import Image from "next/image"
  import Menu from "../../components/Menu"


export default function Home() {
  return (
    <>




{/* 單一個內容區塊 */}
<div className="bg-[url('/background_right.jpg')] 
flex flex-row flex-wrap items-center rounded-2xl 
 gap-10 w-full h-[90%]
 overflow-y-auto
">
  
  {/* 左側：文字資訊 (佔 60% 寬度) */}
  <div className=" flex h-screen w-[500px] items-center justify-center  rounded-2xl bg-cover bg-center p-6">
      

   

      {/* 核心卡片容器 */}
      <div className="relative bg-[url('/bg/memo_paper.jpg')] 
        /* 1. 尺寸與形狀 */
        w-full max-w-4xl h-[60vh]     /* 限制最大寬度和高度 */
     
        
        /* 2. 毛玻璃效果 (關鍵！) */
        bg-white/60                  /* 半透明白色底 */
        backdrop-blur-xl             /* 背景模糊 (毛玻璃) */
        border border-white/20       /* 淡淡的白色邊框，增加精緻感 */
        
        /* 3. 裝飾 */
        shadow-2xl                   /* 強烈陰影 */
        overflow-y-auto              /* 如果內容太多，內部出現滾動條 */
        p-12                         /* 大量內襯 */
        text-blue-900                /* 全域文字設為深藍色 */
        
      ">




        {/* --- 學習經歷區塊 --- */}
        <section className="mb-12">
          {/* 標題：紫色橢圓形底 */ }
          <div className="flex justify-center mb-10">
            <h2 className="bg-[#EEEEEE] px-12 py-3 rounded-full text-2xl font-bold tracking-widest text-black">
              學習經歷
            </h2>
          </div>

          {/* 列表內容 */ }
          <ul className="Tanugo-font space-y-2 text-base list-none pl-8 text-black">
            {[
              
             '澳門培正中學畢業',
             '具澳門大學及澳門理工大學錄取',
             '就讀台灣國立政治大學三年級',
             '心理學系+數位內容學系'
              
            ].map((item, index) => (
              <li key={index} className="relative before:content-['•'] before:absolute before:-left-8 before:text-black before:text-3xl">
                {item}
              </li>
            ))}
          </ul>
        </section>

     

      </div>
    </div>

  {/* 右側：圖片區塊 (佔 40% 寬度) */}
  <div className="w-[300px] flex">
    <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
        <img src="/me2.jpg" alt="me2" className="w-full h-auto object-cover" />
    </div>
  </div>

      {/*第二行 */}
        
        {/* 右側：圖片區塊 (佔 40% 寬度) */}
        <div className="w-[300px] ml-10 flex">
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img src="/me3.jpg" alt="me3" className="w-full h-auto object-cover" />
          </div>
        </div>
              


      {/* 左側：文字資訊 (佔 60% 寬度) */}
      <div className=" flex w-[500px] rounded-2xl bg-cover bg-center p-6">
   
        {/* 核心卡片容器 */}
          <div className="relative bg-[url('/bg/memo_paper.jpg')] 
            /* 1. 尺寸與形狀 */
            w-full max-w-4xl h-[60vh]     /* 限制最大寬度和高度 */
        
            
            /* 2. 毛玻璃效果 (關鍵！) */
            bg-white/60                  /* 半透明白色底 */
            backdrop-blur-xl             /* 背景模糊 (毛玻璃) */
            border border-white/20       /* 淡淡的白色邊框，增加精緻感 */
            
            /* 3. 裝飾 */
            shadow-2xl                   /* 強烈陰影 */
            overflow-y-auto              /* 如果內容太多，內部出現滾動條 */
            p-12                         /* 大量內襯 */
            text-blue-900                /* 全域文字設為深藍色 */
            
          ">




            {/* --- 學習經歷區塊 --- */}
            <section className="mb-12">
              {/* 標題：紫色橢圓形底 */ }
              <div className="flex justify-center mb-10">
                <h2 className="bg-[#EEEEEE] px-12 py-3 rounded-full text-2xl font-bold tracking-widest text-black">
                社團經歷
                </h2>
              </div>

              {/* 列表內容 */ }
              <ul className="Tanugo-font space-y-2 text-base list-none pl-8 text-black">
                {[
                  
                
                  '2016-2021 WRO ',
                '2018-2020 FTC機械組-組長',
                  '2020-2021 Robot Master',
                  '2024-2025 政大港澳會 公關及活動幹事',
                  '2024-2025 心理系活動負責',
                '2024-2025 心理之夜-副召',
                  
                  
                  
                ].map((item, index) => (
                  <li key={index} className="relative before:content-['•'] before:absolute before:-left-8 before:text-black before:text-3xl">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
      </div>

       {/*第三行 */}

      {/* 左側：文字資訊 (佔 60% 寬度) */}
      <div className=" flex w-[500px] rounded-2xl bg-cover bg-center p-6">
   
        {/* 核心卡片容器 */}
          <div className="relative bg-[url('/bg/memo_paper.jpg')] 
            /* 1. 尺寸與形狀 */
            w-full max-w-4xl h-[60vh]     /* 限制最大寬度和高度 */
        
            
            /* 2. 毛玻璃效果 (關鍵！) */
            bg-white/60                  /* 半透明白色底 */
            backdrop-blur-xl             /* 背景模糊 (毛玻璃) */
            border border-white/20       /* 淡淡的白色邊框，增加精緻感 */
            
            /* 3. 裝飾 */
            shadow-2xl                   /* 強烈陰影 */
            overflow-y-auto              /* 如果內容太多，內部出現滾動條 */
            p-12                         /* 大量內襯 */
            text-blue-900                /* 全域文字設為深藍色 */
            
          ">




            {/* --- 學習經歷區塊 --- */}
            <section className="mb-12">
              {/* 標題：紫色橢圓形底 */ }
              <div className="flex justify-center mb-10">
                <h2 className="bg-[#EEEEEE] px-12 py-3 rounded-full text-2xl font-bold tracking-widest text-black">
                工作經歷
                </h2>
              </div>

              {/* 列表內容 */ }
              <ul className="Tanugo-font space-y-2 text-base list-none pl-8 text-black">
                {[
                  
                
                  
                  '2023-2024 isport 運動產品銷售',
                  '2023-至今 澳門政府空手道暑期班-總教練',
                  '2023-2024 circle bar-調酒師',
                  '2025-至今 太空號-影片剪接師',
                  '2025-至今 政大心理系-兒童臨床實驗室工讀生'
                  
                  
                  
                  
                ].map((item, index) => (
                  <li key={index} className="relative before:content-['•'] before:absolute before:-left-8 before:text-black before:text-3xl">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
      </div>

      {/* 右側：圖片區塊 (佔 40% 寬度) */}
      <div className="w-[300px] ml-10 flex">
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img src="/barjob.png" alt="barjob" className="w-full h-auto object-cover" />
          </div>
       </div>



</div>
      


  
    

     

     
  

  
   




       
    </>
  );
}
