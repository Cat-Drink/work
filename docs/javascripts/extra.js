/* ==========================================
   Zensical-CatDrink-Blog 自定义脚本
   ========================================== */

// 即时导航兼容
document$.subscribe(function() {
  console.log('Zensical-CatDrink-Blog loaded');
});

// 搞笑标题功能
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 鼠标点击效果 - 本地实现
document.addEventListener('click', function(e) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    pointer-events: none;
    z-index: 9999;
    font-size: 20px;
    color: ${randomColor};
    animation: heart-float 1s ease-out forwards;
  `;
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes heart-float {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -150%) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// 独立鼠标波纹效果实现
(function() {
  // 创建画布
  const canvas = document.createElement('canvas');
  canvas.id = 'water-ripple-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let ripples = [];
  
  // 设置画布大小
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // 创建水波
  function createRipple(x, y) {
    ripples.push({ x, y, radius: 0, opacity: 1, phase: 0 });
  }
  
  // 更新水波
  function updateRipples() {
    for (let i = ripples.length - 1; i >= 0; i--) {
      const ripple = ripples[i];
      ripple.radius += 3;
      ripple.opacity -= 0.01;
      ripple.phase += 0.5;
      
      if (ripple.opacity <= 0) {
        ripples.splice(i, 1);
      }
    }
  }
  
  // 绘制水波
  function drawRipples() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ripples.forEach(ripple => {
      // 绘制多层波纹
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offset = Math.sin(ripple.phase + i) * 5;
        ctx.arc(ripple.x, ripple.y, ripple.radius + offset, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(102, 126, 234, ${ripple.opacity * (0.8 - i * 0.2)})`;
        ctx.lineWidth = 1 + i * 0.5;
        ctx.stroke();
      }
    });
  }
  
  // 动画循环
  function animate() {
    updateRipples();
    drawRipples();
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // 鼠标移动事件
  document.addEventListener('mousemove', e => {
    createRipple(e.clientX, e.clientY);
  });
})();

// 看板娘拖动功能
(function() {
  let isDragging = false;
  let offsetX, offsetY;
  let waifuElement;
  
  // 监听看板娘加载
  function waitForWaifu() {
    waifuElement = document.getElementById('waifu');
    if (waifuElement) {
      initDrag();
    } else {
      setTimeout(waitForWaifu, 1000);
    }
  }
  
  // 初始化拖动
  function initDrag() {
    waifuElement.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
  }
  
  // 开始拖动
  function startDrag(e) {
    isDragging = true;
    const rect = waifuElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    waifuElement.style.cursor = 'grabbing';
  }
  
  // 拖动中
  function drag(e) {
    if (!isDragging) return;
    
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    // 限制在可视区域内
    const maxX = window.innerWidth - waifuElement.offsetWidth;
    const maxY = window.innerHeight - waifuElement.offsetHeight;
    
    const clampedX = Math.max(0, Math.min(x, maxX));
    const clampedY = Math.max(0, Math.min(y, maxY));
    
    waifuElement.style.left = `${clampedX}px`;
    waifuElement.style.top = `${clampedY}px`;
    waifuElement.style.right = 'auto';
    waifuElement.style.bottom = 'auto';
  }
  
  // 结束拖动
  function endDrag() {
    isDragging = false;
    if (waifuElement) {
      waifuElement.style.cursor = 'grab';
    }
  }
  
  // 启动监听
  waitForWaifu();
})();
