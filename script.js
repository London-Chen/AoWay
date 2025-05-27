document.addEventListener('DOMContentLoaded', function() {
    // 汉堡菜单交互
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
      mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
      });
    }
    
    // 行业应用轮播
    const paginationDots = document.querySelectorAll('.pagination span');
    if (paginationDots.length) {
      paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
          // 移除所有active类
          paginationDots.forEach(d => d.classList.remove('active'));
          // 添加当前点击的active类
          this.classList.add('active');
          // 这里可以添加轮播逻辑
        });
      });
    }
    
    // 在线客服点击事件
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
      chatButton.addEventListener('click', function() {
        alert('感谢您的咨询，我们的客服人员将很快与您联系！');
        // 这里可以替换为实际的在线客服系统
      });
    }
  
    // 语言切换功能
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
      langSelector.addEventListener('click', function() {
        // 获取当前语言
        const currentLang = langSelector.querySelector('span').textContent;
        
        // 切换语言
        if (currentLang === 'EN') {
          // 如果当前是英文，切换到中文
          window.location.href = 'index.html'; // 中文页面
        } else {
          // 如果当前是中文，切换到英文
          window.location.href = 'index-en.html'; // 英文页面
        }
      });
    }
  });
