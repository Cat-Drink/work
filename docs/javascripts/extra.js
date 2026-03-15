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
// 独立鼠标光尾效果实现
(function() {
  // 创建画布
  const canvas = document.createElement('canvas');
  canvas.id = 'mouse-trail-canvas';
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
  
  // 存储轨迹点的数组
  let trailPoints = [];
  
  // 设置画布大小
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // 添加轨迹点
  function addPoint(x, y) {
    // 可以限制点数，避免过多（比如最多保留100个点）
    if (trailPoints.length > 100) {
      trailPoints.shift(); // 移除最早的点
    }
    trailPoints.push({ x, y, life: 1.0 }); // life 初始为1，逐渐减小
  }
  
  // 更新轨迹点（降低生命值）
  function updateTrail() {
    for (let i = trailPoints.length - 1; i >= 0; i--) {
      trailPoints[i].life -= 0.02; // 衰减速度，可调整
      if (trailPoints[i].life <= 0) {
        trailPoints.splice(i, 1);
      }
    }
  }
  
  // 绘制光尾
  function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 从旧到新绘制，使光点重叠自然
    for (let i = 0; i < trailPoints.length; i++) {
      const p = trailPoints[i];
      // 根据生命值设置透明度和大小
      const opacity = p.life;
      const radius = 8 * p.life; // 光点大小随生命值减小，可调整乘数
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      
      // 光点颜色（这里使用亮蓝色，可自定义）
      ctx.fillStyle = `rgba(102, 126, 234, ${opacity})`;
      
      // 绘制光晕效果（用径向渐变增加柔和感）
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
      gradient.addColorStop(0, `rgba(102, 126, 234, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(102, 126, 234, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(102, 126, 234, 0)`);
      ctx.fillStyle = gradient;
      
      ctx.fill();
    }
  }
  
  // 动画循环
  function animate() {
    updateTrail();
    drawTrail();
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // 鼠标移动事件
  let lastX = 0, lastY = 0;
  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    
    // 可选：限制添加频率，避免点过于密集
    // 如果距离上一个点太近，则不添加（平滑轨迹）
    const distance = Math.hypot(x - lastX, y - lastY);
    if (distance > 5) { // 可调整阈值
      addPoint(x, y);
      lastX = x;
      lastY = y;
    } else {
      // 即使不移动，也可以偶尔添加点，但这里不添加
    }
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
