---
title: CatDrink's Blog
description: 
hide:
#   - navigation # 显示右
#   - toc #显示左
  - footer
  - feedback
comments: true
---


<!-- 加载 Inter 字体 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet">

<!-- 预加载头像图片 -->
<link rel="preload" href="https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png" as="image" fetchpriority="high">
<!-- wcowin-header.html -->
<div class="wcowin-header-row">
  <!-- 左侧：文字内容 -->
  <div class="wcowin-header-text">
    <div class="wcowin-header-title">Hi, I'm <span class="wcowin-name-box"><span class="name-text">CatDrink</span><span class="corner-bl"></span><span class="corner-br"></span></span></div>
    <div class="wcowin-header-subtitle">
      <span class="wcowin-header-subtitle-inner">
        <span id="typewriter-text"></span><span class="typewriter-cursor">|</span>
      </span>
    </div>
    <!-- <div class="wcowin-header-motto">Free and diffuse</div> -->
    <div class="wcowin-header-btns">
      <a href="https://github.com/Cat-Drink" target="_blank" class="md-button">
        <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span>
        Github
      </a>
      <a href="2738035238@qq.com" class="md-button">
        <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
        Email me
      </a>
    </div>
  </div>
  <!-- 右侧：头像及光辉 -->
  <div class="wcowin-header-avatar">
    <div class="flip-glow-ultimate">
      <div class="flip-glow-ultimate-glow"></div>
      <div class="flip-glow-ultimate-imgs">
      <!-- 交互切换 -->
        <img src="https://s1.imagehub.cc/images/2026/01/21/a17fdd59f676b539c9ba10f7517e25a2.jpg" alt="Back Image" class="flip-glow-ultimate-front" loading="eager" fetchpriority="high" width="250" height="250">
        <img src="https://s1.imagehub.cc/images/2026/01/21/a9f29a62776b5aba1f0e34d1dbfe92cc.jpg" alt="Front Image" class="flip-glow-ultimate-back" loading="lazy" width="250" height="250">
      </div>
    </div>
  </div>
</div>

<!-- 移动端显示的标语 -->
<div class="mobile-motto">
  <h1>人生如逆旅，我亦是行人</h1>
</div>

<style>
/* ====== 布局主容器 ====== */
.wcowin-header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: -30px 0 16px 0;
  flex-wrap: wrap;
  min-height: 320px;
  /* Safari flexbox 兼容性 */
  -webkit-box-align: center;
  -webkit-box-pack: center;
}

/* ====== 左侧文字区 ====== */
.wcowin-header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  max-width: 420px;
  flex: 1 1 320px;
  padding: 0 8px;
}

.wcowin-header-title {
  font-size: 2.1rem;
  font-family: 'Inter', 'Montserrat', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 18px;
  color: #4a4a4a;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
}

/* Wcowin 名字带边框效果 */
.wcowin-name-box {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 4px 14px;
  margin-left: 8px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px dashed #6b8e6b;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(107, 142, 107, 0.15);
  vertical-align: middle;
}

/* 四角小方块装饰 */
.wcowin-name-box::before,
.wcowin-name-box::after,
.wcowin-name-box .corner-bl,
.wcowin-name-box .corner-br {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.wcowin-name-box::before {
  top: -3px;
  left: -3px;
}

.wcowin-name-box::after {
  top: -3px;
  right: -3px;
}

.wcowin-name-box .corner-bl {
  position: absolute;
  bottom: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.wcowin-name-box .corner-br {
  position: absolute;
  bottom: -3px;
  right: -3px;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.wcowin-name-box .name-text {
  font-weight: 800;
  color: #2d3436;
  font-size: 1em;
  line-height: 1.2;
}

/* 深色模式适配 */
[data-md-color-scheme="slate"] .wcowin-name-box {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-color: #68d391;
  box-shadow: 0 2px 8px rgba(104, 211, 145, 0.2);
}

[data-md-color-scheme="slate"] .wcowin-name-box::before,
[data-md-color-scheme="slate"] .wcowin-name-box::after,
[data-md-color-scheme="slate"] .wcowin-name-box .corner-bl,
[data-md-color-scheme="slate"] .wcowin-name-box .corner-br {
  background: #68d391;
}

[data-md-color-scheme="slate"] .wcowin-name-box .name-text {
  color: #f7fafc;
}

.wcowin-header-subtitle {
  font-size: 1.7rem;
  font-weight: bold;
  color: #6D6D6D;
  position: relative;
  margin-bottom: 22px;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap; /* 防止文本换行 */
}

.wcowin-header-subtitle-inner {
  color: #6D6D6D;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  white-space: nowrap; /* 确保文本不会换行 */
  width: auto; /* 确保宽度自适应内容 */
  min-width: 280px; /* 防止打字时宽度跳动 */
}

/* 打字机光标样式 */
.typewriter-cursor {
  display: inline-block;
  color: #518FC1;
  font-weight: 300;
  animation: blink 1s steps(1, end) infinite;
  margin-left: 2px;
  /* 跨浏览器优化 */
  -webkit-animation: blink 1s steps(1, end) infinite;
  will-change: opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@-webkit-keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Safari特定修复 */
/* @media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) {
    .wcowin-header-subtitle-inner {
      display: inline-block;
      width: auto !important;
      min-width: 280px; 
    }
  }
} */



/* 添加深色模式的文字颜色适配 */
[data-md-color-scheme="slate"] .wcowin-header-subtitle {
  color: #757575;
}

[data-md-color-scheme="slate"] .wcowin-header-subtitle-inner {
  color: #b0b0b0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

[data-md-color-scheme="slate"] .wcowin-header-motto {
  color: #d0d0d0;
}

.wcowin-header-motto {
  /* font-family: 'LXGW WenKai', sans-serif; */
  font-size: 1.2rem;
  color: #757575;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 22px;
  opacity: 0.92;
}

.wcowin-header-btns {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

/* Safari 按钮兼容性修复 */
.wcowin-header-btns .md-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-appearance: none;
  -webkit-user-select: none;
}

.wcowin-header-btns .md-button .twemoji {
  display: inline-flex;
  align-items: center;
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
}

.wcowin-header-btns .md-button .twemoji svg {
  width: 100%;
  height: 100%;
}


/* ====== 右侧头像区 ====== */
.wcowin-header-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  flex: 0 0 250px;
}

.flip-glow-ultimate {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 彩虹渐变动画 - 完全复刻VitePress效果 */
@keyframes rainbow {
  0% { --rainbow-prev: #009ff7; --rainbow-next: #c76dd1; }
  1.25% { --rainbow-prev: #009dfa; --rainbow-next: #cf69c9; }
  2.5% { --rainbow-prev: #009bfc; --rainbow-next: #d566c2; }
  3.75% { --rainbow-prev: #0098fd; --rainbow-next: #dc63ba; }
  5% { --rainbow-prev: #0096fd; --rainbow-next: #e160b3; }
  6.25% { --rainbow-prev: #0093fd; --rainbow-next: #e65eab; }
  7.5% { --rainbow-prev: #2e90fc; --rainbow-next: #e95ca2; }
  8.75% { --rainbow-prev: #4d8dfa; --rainbow-next: #ed5a9a; }
  10% { --rainbow-prev: #638af8; --rainbow-next: #ef5992; }
  11.25% { --rainbow-prev: #7587f5; --rainbow-next: #f15989; }
  12.5% { --rainbow-prev: #8583f1; --rainbow-next: #f25981; }
  13.75% { --rainbow-prev: #9280ed; --rainbow-next: #f25a79; }
  15% { --rainbow-prev: #9f7ce9; --rainbow-next: #f25c71; }
  16.25% { --rainbow-prev: #aa78e3; --rainbow-next: #f15e69; }
  17.5% { --rainbow-prev: #b574dd; --rainbow-next: #ef6061; }
  18.75% { --rainbow-prev: #be71d7; --rainbow-next: #ed635a; }
  20% { --rainbow-prev: #c76dd1; --rainbow-next: #eb6552; }
  21.25% { --rainbow-prev: #cf69c9; --rainbow-next: #e8694b; }
  22.5% { --rainbow-prev: #d566c2; --rainbow-next: #e46c44; }
  23.75% { --rainbow-prev: #dc63ba; --rainbow-next: #e06f3d; }
  25% { --rainbow-prev: #e160b3; --rainbow-next: #db7336; }
  26.25% { --rainbow-prev: #e65eab; --rainbow-next: #d77630; }
  27.5% { --rainbow-prev: #e95ca2; --rainbow-next: #d17a2a; }
  28.75% { --rainbow-prev: #ed5a9a; --rainbow-next: #cc7d24; }
  30% { --rainbow-prev: #ef5992; --rainbow-next: #c6811e; }
  31.25% { --rainbow-prev: #f15989; --rainbow-next: #bf8418; }
  32.5% { --rainbow-prev: #f25981; --rainbow-next: #b98713; }
  33.75% { --rainbow-prev: #f25a79; --rainbow-next: #b28a0f; }
  35% { --rainbow-prev: #f25c71; --rainbow-next: #ab8d0c; }
  36.25% { --rainbow-prev: #f15e69; --rainbow-next: #a3900b; }
  37.5% { --rainbow-prev: #ef6061; --rainbow-next: #9c920d; }
  38.75% { --rainbow-prev: #ed635a; --rainbow-next: #949510; }
  40% { --rainbow-prev: #eb6552; --rainbow-next: #8b9715; }
  41.25% { --rainbow-prev: #e8694b; --rainbow-next: #83991b; }
  42.5% { --rainbow-prev: #e46c44; --rainbow-next: #7a9b21; }
  43.75% { --rainbow-prev: #e06f3d; --rainbow-next: #719d27; }
  45% { --rainbow-prev: #db7336; --rainbow-next: #679e2e; }
  46.25% { --rainbow-prev: #d77630; --rainbow-next: #5da035; }
  47.5% { --rainbow-prev: #d17a2a; --rainbow-next: #51a13c; }
  48.75% { --rainbow-prev: #cc7d24; --rainbow-next: #44a244; }
  50% { --rainbow-prev: #c6811e; --rainbow-next: #34a44b; }
  51.25% { --rainbow-prev: #bf8418; --rainbow-next: #1ba553; }
  52.5% { --rainbow-prev: #b98713; --rainbow-next: #00a65b; }
  53.75% { --rainbow-prev: #b28a0f; --rainbow-next: #00a663; }
  55% { --rainbow-prev: #ab8d0c; --rainbow-next: #00a76c; }
  56.25% { --rainbow-prev: #a3900b; --rainbow-next: #00a874; }
  57.5% { --rainbow-prev: #9c920d; --rainbow-next: #00a87d; }
  58.75% { --rainbow-prev: #949510; --rainbow-next: #00a985; }
  60% { --rainbow-prev: #8b9715; --rainbow-next: #00a98e; }
  61.25% { --rainbow-prev: #83991b; --rainbow-next: #00a996; }
  62.5% { --rainbow-prev: #7a9b21; --rainbow-next: #00a99f; }
  63.75% { --rainbow-prev: #719d27; --rainbow-next: #00a9a7; }
  65% { --rainbow-prev: #679e2e; --rainbow-next: #00a9b0; }
  66.25% { --rainbow-prev: #5da035; --rainbow-next: #00a9b8; }
  67.5% { --rainbow-prev: #51a13c; --rainbow-next: #00a9c0; }
  68.75% { --rainbow-prev: #44a244; --rainbow-next: #00a8c7; }
  70% { --rainbow-prev: #34a44b; --rainbow-next: #00a8cf; }
  71.25% { --rainbow-prev: #1ba553; --rainbow-next: #00a7d5; }
  72.5% { --rainbow-prev: #00a65b; --rainbow-next: #00a6dc; }
  73.75% { --rainbow-prev: #00a663; --rainbow-next: #00a6e2; }
  75% { --rainbow-prev: #00a76c; --rainbow-next: #00a4e7; }
  76.25% { --rainbow-prev: #00a874; --rainbow-next: #00a3ec; }
  77.5% { --rainbow-prev: #00a87d; --rainbow-next: #00a2f1; }
  78.75% { --rainbow-prev: #00a985; --rainbow-next: #00a0f4; }
  80% { --rainbow-prev: #00a98e; --rainbow-next: #009ff7; }
  81.25% { --rainbow-prev: #00a996; --rainbow-next: #009dfa; }
  82.5% { --rainbow-prev: #00a99f; --rainbow-next: #009bfc; }
  83.75% { --rainbow-prev: #00a9a7; --rainbow-next: #0098fd; }
  85% { --rainbow-prev: #00a9b0; --rainbow-next: #0096fd; }
  86.25% { --rainbow-prev: #00a9b8; --rainbow-next: #0093fd; }
  87.5% { --rainbow-prev: #00a9c0; --rainbow-next: #2e90fc; }
  88.75% { --rainbow-prev: #00a8c7; --rainbow-next: #4d8dfa; }
  90% { --rainbow-prev: #00a8cf; --rainbow-next: #638af8; }
  91.25% { --rainbow-prev: #00a7d5; --rainbow-next: #7587f5; }
  92.5% { --rainbow-prev: #00a6dc; --rainbow-next: #8583f1; }
  93.75% { --rainbow-prev: #00a6e2; --rainbow-next: #9280ed; }
  95% { --rainbow-prev: #00a4e7; --rainbow-next: #9f7ce9; }
  96.25% { --rainbow-prev: #00a3ec; --rainbow-next: #aa78e3; }
  97.5% { --rainbow-prev: #00a2f1; --rainbow-next: #b574dd; }
  98.75% { --rainbow-prev: #00a0f4; --rainbow-next: #be71d7; }
  100% { --rainbow-prev: #009ff7; --rainbow-next: #c76dd1; }
}

.flip-glow-ultimate-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 230px; height: 230px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  --rainbow-prev: #009ff7;
  --rainbow-next: #c76dd1;
  background: linear-gradient(-45deg, var(--rainbow-prev) 30%, var(--rainbow-next));
  filter: blur(60px);
  -webkit-filter: blur(60px);
  opacity: 0.85;
  animation: rainbow 8s linear infinite;
  will-change: filter, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* 深色模式调整 */
[data-md-color-scheme="slate"] .flip-glow-ultimate-glow {
  opacity: 0.7;
}

.flip-glow-ultimate-imgs {
  position: relative;
  width: 250px;
  height: 250px;
  perspective: 1200px;
  z-index: 2;
}
.flip-glow-ultimate-imgs img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(14, 30, 37, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2);
  backface-visibility: hidden;
  transition: transform 1.2s cubic-bezier(.4,2,.6,1), box-shadow 0.3s ease;
  background: #fff;
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-back {
  z-index: 1;
  transform: rotateY(0deg);
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-front {
  z-index: 0;
  transform: rotateY(180deg);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-back {
  transform: rotateY(180deg);
  z-index: 2;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-front {
  transform: rotateY(0deg);
  z-index: 3;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}

/* ====== 响应式布局 ====== */
@media (max-width: 1100px) {
  .wcowin-header-row {
    gap: 32px;
  }
  .wcowin-header-title {
    font-size: 2.2rem;
  }
  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 200px;
    height: 200px;
  }
  .flip-glow-ultimate-glow {
    width: 180px;
    height: 180px;
  }
}
@media (max-width: 700px) {
  .wcowin-header-row {
    flex-direction: column-reverse;
    gap: 0px;
    min-height: unset;
    margin: 12px 0 12px 0;
  }
  .wcowin-header-text {
    align-items: center;
    text-align: center;
    max-width: 98vw;
    margin-top: -10px;
  }
  .wcowin-header-avatar {
    margin-bottom: 0px;
  }
  .wcowin-header-title {
    margin-bottom: 12px;
  }
  .wcowin-header-subtitle {
    margin-bottom: 16px;
  }
  .wcowin-header-motto {
    margin-bottom: 16px;
  }

  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 180px;
    height: 180px;
  }
  .flip-glow-ultimate-glow {
    width: 160px;
    height: 160px;
  }
}
/* 添加一个额外的样式类，可以直接应用到元素上 */
.dark-visible-text {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important;
}

/* 移动端样式 */
.mobile-motto {
  display: none;
  text-align: center;
  padding: 15px 0;
  margin: 5px 0;
}

.mobile-motto h1 {
  font-size: 1.8rem;
  color: #757575;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  font-weight: 500;
  margin: 0;
}

@media (max-width: 700px) {
  /* 隐藏原有头部 */
  .wcowin-header-row {
    display: none !important;
  }

  /* 显示移动端标语 */
  .mobile-motto {
    display: block;
  }
}
</style>

<!-- 打字机效果脚本 - 支持多语言 -->
<script>
(function() {
  // 多语言文字列表
  const phrasesData = {
    chinese_simplified: [
      "A college student",
      "A developer",
      "人生如逆旅，我亦是行人"
    ],
    english: [
      "A college student",
      "A developer",
      "Life is a tough journey, I'm just a wander"
    ],
    japanese: [
      "A college student",
      "A developer",
      "人生は逆旅なり、我が身もまた旅人なり。"
    ]
  };
  
  // 获取当前语言
  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem('glm_global_translation_preference');
      return saved && saved !== 'null' ? saved : 'chinese_simplified';
    } catch (e) {
      return 'chinese_simplified';
    }
  }
  
  // 获取当前语言的短语列表
  function getPhrases() {
    const lang = getCurrentLanguage();
    return phrasesData[lang] || phrasesData.chinese_simplified;
  }
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typewriterElement = null;
  
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;
  const startDelay = 500;
  
  function typeWriter() {
    if (!typewriterElement) {
      typewriterElement = document.getElementById('typewriter-text');
      if (!typewriterElement) {
        setTimeout(typeWriter, 100);
        return;
      }
    }
    
    const phrases = getPhrases();
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    if (isDeleting) {
      charIndex--;
      typewriterElement.textContent = currentPhrase.substring(0, charIndex);
      
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, startDelay);
      } else {
        setTimeout(typeWriter, deleteSpeed);
      }
    } else {
      charIndex++;
      typewriterElement.textContent = currentPhrase.substring(0, charIndex);
      
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseTime);
      } else {
        setTimeout(typeWriter, typeSpeed);
      }
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(typeWriter, startDelay);
    });
  } else {
    setTimeout(typeWriter, startDelay);
  }
})();
</script>

<!-- 修改分隔线上下的间距 -->
<style>
/* 移除了冗余的 .desktop-only 样式 */

/* 减少分隔线的边距 */
hr {
  margin: 0.5rem 0 !important;
}

/* 减少卡片网格的间距 */
.grid.cards {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

/* 减少卡片内部的间距 */
.grid.cards > ul > li {
  padding: 0.8rem !important;
}

/* 减少卡片之间的间距 */
.grid.cards > ul {
  gap: 0.5rem !important;
}

/* 减少问候框的边距 */
#greeting {
  margin-bottom: 10px !important;
  padding: 8px !important;
}
</style>

<div id="greeting" class="greeting-container">
  <span id="greeting-text" class="greeting-text">加载中...</span>
</div>

<style>
  .greeting-container {
    text-align: center;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(240, 240, 240, 0.5);
    border: 1px solid rgba(200, 200, 200, 0.3);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .greeting-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
    /* font-family: 'LXGW WenKai', sans-serif; */
    /* 添加最小高度避免布局抖动 */
    min-height: 1.5rem;
  }

  /* 夜间模式适配 */
  [data-md-color-scheme="slate"] .greeting-container {
    background-color: rgba(30, 41, 59, 0.6);
    border-color: rgba(80, 100, 140, 0.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }

  [data-md-color-scheme="slate"] .greeting-text {
    color: #e0e0e0;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .greeting-container {
      padding: 10px;
      margin-bottom: 15px;
    }

    .greeting-text {
      font-size: 1.3rem;
    }
  }
</style>

<script>
  // 问候函数
  (function() {
    function updateGreeting() {
      const el = document.getElementById('greeting-text');
      if (!el) return;
      
      const hour = new Date().getHours();
      const greetings = [
        [0, 5, "夜深了，注意休息 🌙"],
        [5, 7, "早安，新的一天开始啦 🌅"],
        [7, 9, "早上好，开始美好的一天 ☀️"],
        [9, 11, "上午好，保持专注 ✨"],
        [11, 13, "中午好，该休息一下了 🍲"],
        [13, 15, "午后时光，继续加油 ☕"],
        [15, 18, "下午好，别忘了喝水 🌤️"],
        [18, 20, "傍晚好，放松一下吧 🌆"],
        [20, 22, "晚上好，享受宁静时光 🌃"],
        [22, 24, "夜深了，早点休息哦 🌠"]
      ];
      
      el.textContent = greetings.find(([s, e]) => hour >= s && hour < e)?.[2] || "夜深了，注意休息 🌙";
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateGreeting);
    } else {
      updateGreeting();
    }
  })();
</script>

---

<div class="grid cards" markdown>

-   :material-notebook-edit-outline:{ .lg .middle } __𝚆𝚎 𝚖𝚎𝚎𝚝 𝚒𝚗 𝚝𝚑𝚎 𝚏𝚊𝚕𝚕.__

    ---
    ![image](https://s1.imagehub.cc/images/2026/01/21/da6f0de203248cb422d350438e3d6801.jpg){ class="responsive-image" loading="lazy" align=right width="340" height="226" style="border-radius: 2.5em 1.5em 3em 2em / 2em 2.5em 1.5em 3em;" }

    - [x] 通过<mark>目录</mark>以打开文章
    - [x] 搜索<ins>关键词</ins>查询文章
    - [x] 如遇页面卡顿，请使用<del>[科学上网](blog/technique%20sharing/kexue.md)</del>
    - [x] 𝕙𝕒𝕧𝕖 𝕒 𝕘𝕠𝕠𝕕 𝕥𝕚𝕞𝕖 !

    === "Mac/PC端"

        请在上方标签选择分类/左侧目录选择文章

    === "移动端"

        请点击左上角图标选择分类和文章

</div>
<style>
    @media only screen and (max-width: 768px) {
        .responsive-image {
            display: none;
        }
    }
</style>


***


<div class="grid cards" markdown>

<!-- -   :material-account-box-outline:{ .lg .middle } __关于__ -->

-   :material-gamepad-variant-outline:{ .lg .middle } __学习__
    
    ---
    [Bug笔记](blog/study/2026-02-11-Bug笔记.md)  
    [Dos Comand](blog/study/2026-02-11-Dos_Command.md)  
    [虚拟机相关问题解决](blog/study/2026-02-11-虚拟机相关问题解决.md)
    [大数据系统在低水平主机的性能优化方案](blog/study/2026-02-19-大数据系统在低水平主机的性能优化方案.md)
    ---

-   :material-gamepad-variant-outline:{ .lg .middle } __分享__
    
    ---
    [一些不错的github项目](blog/web/2026-02-09-一些不错的github项目.md)  
    [一些不错的应用](blog/web/2026-02-08-一些不错的应用.md)  
    [一些工具网站](blog/web/2026-02-24-一些工具网站推荐.md)
    [一些好玩的小网站](blog/web/2026-02-07-一些好玩的小网站.md)

<!-- - [:octicons-arrow-right-24: 了解我](about/geren/#_4){ data-preview } -->
</div>




<style>
body {
  position: relative; /* 确保 body 元素的 position 属性为非静态值 */
}

/* 原CSS网格已替换为Canvas交互网格 */

@media (max-width: 768px) {
  body::before {
    display: none; /* 在手机端隐藏网格效果 */
  }

  /* 在移动端禁用复杂动画以提升性能 */
  .flip-glow-ultimate-glow {
    animation: none;
    opacity: 0.3;
  }
}

</style>

<!-- 网格起伏效果 Canvas -->
<canvas id="gridCanvas"></canvas>

<script>
(function() {
  const canvas = document.getElementById('gridCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let mouseX = -1000, mouseY = -1000;
  const gridSize = 50;
  const influenceRadius = 150;
  const maxDisplacement = 8;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = 600;
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  document.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  
  document.addEventListener('mouseleave', function() {
    mouseX = -1000;
    mouseY = -1000;
  });
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const isDark = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1;
    
    // 绘制垂直线
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      for (let y = 0; y <= canvas.height; y += 5) {
        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let offsetX = 0;
        if (dist < influenceRadius) {
          const force = (1 - dist / influenceRadius) * maxDisplacement;
          offsetX = (dx / dist) * force || 0;
        }
        
        if (y === 0) {
          ctx.moveTo(x + offsetX, y);
        } else {
          ctx.lineTo(x + offsetX, y);
        }
      }
      ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let offsetY = 0;
        if (dist < influenceRadius) {
          const force = (1 - dist / influenceRadius) * maxDisplacement;
          offsetY = (dy / dist) * force || 0;
        }
        
        if (x === 0) {
          ctx.moveTo(x, y + offsetY);
        } else {
          ctx.lineTo(x, y + offsetY);
        }
      }
      ctx.stroke();
    }
    
    requestAnimationFrame(draw);
  }
  
  draw();
})();
</script>

<style>
#gridCanvas {
  position: absolute;
  top: 95px; /* 从公告栏下方开始 */
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
  -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
  mask: linear-gradient(-20deg, transparent 50%, white);
  /* Safari 渲染优化 */
  image-rendering: -webkit-optimize-contrast;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  /* Safari mask 兼容性增强 */
  -webkit-mask-image: linear-gradient(-20deg, transparent 50%, white);
  -webkit-mask-size: 100% 100%;
  -webkit-mask-position: 0 0;
  -webkit-mask-repeat: no-repeat;
}

@media (max-width: 768px) {
  #gridCanvas {
    display: none;
  }
}
</style>


 
<!-- Umami Analytics -->
<script defer src="https://cloud.umami.is/script.js" data-website-id="061b4dea-9b7b-4ffa-9071-74cde70f3dfb"></script>