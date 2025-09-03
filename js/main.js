(function(){
  const $ = (id) => document.getElementById(id);

  // 所有成对元素：英文显示、中文显示（通过统一 ID 规则管理）
  const pairs = [
    ["name-en","name-zh"],
    ["about-en","about-zh"],
    ["skills-title-en","skills-title-zh"],
    ["skills-en","skills-zh"],
    ["projects-title-en","projects-title-zh"],
    ["proj1-en","proj1-zh"],
    ["proj2-en","proj2-zh"],
    ["proexp-title-en","proexp-title-zh"],
    ["proexp1-en","proexp1-zh"],
    ["researchexp-title-en","researchexp-title-zh"],
    ["researchexp1-en","researchexp1-zh"],
    ["researchexp2-en","researchexp2-zh"],
    ["foot-en","foot-zh"]
  ];

  function showLang(lang){
    pairs.forEach(([en,zh])=>{
      if ($(en) && $(zh)){
        $(en).style.display = (lang === "en" ? "" : "none");
        $(zh).style.display = (lang === "zh" ? "" : "none");
      }
    });
    // 导航栏按钮状态可选：略
    localStorage.setItem("lang", lang);
  }

  // 按钮
  const btnEn = $("lang-en");
  const btnZh = $("lang-zh");
  if (btnEn) btnEn.addEventListener("click", ()=>showLang("en"));
  if (btnZh) btnZh.addEventListener("click", ()=>showLang("zh"));

  // 初始语言：从存储恢复，默认英文
  const saved = localStorage.getItem("lang");
  showLang(saved === "zh" ? "zh" : "en");

  // 年份
  const yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
