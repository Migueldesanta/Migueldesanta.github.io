(function(){
  const $ = (id) => document.getElementById(id);
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
      const enEl = $(en), zhEl = $(zh);
      if (enEl && zhEl){
        enEl.style.display = (lang === "en" ? "" : "none");
        zhEl.style.display = (lang === "zh" ? "" : "none");
      }
    });
    localStorage.setItem("lang", lang);
  }

  const btnEn = $("lang-en");
  const btnZh = $("lang-zh");
  if (btnEn) btnEn.addEventListener("click", ()=>showLang("en"));
  if (btnZh) btnZh.addEventListener("click", ()=>showLang("zh"));

  // 默认英文；如果本地存过中文，就用中文
  const saved = localStorage.getItem("lang");
  showLang(saved === "zh" ? "zh" : "en");

  // 页脚年份
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

