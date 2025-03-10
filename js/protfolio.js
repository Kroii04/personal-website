let currentIndex = 0;
let isAnimating = false;
const protfolio_lists = document.querySelectorAll('.protfolio_list');
const scroll_points = document.querySelectorAll('.scroll_point');
let autoScrollInterval;

// 初始化状态
function initCarousel() {
    // 重置所有元素状态
    protfolio_lists.forEach((item, index) => {
        item.style.animation = '';
        item.style.left = index === 0 ? '0' : '100%';
        item.style.zIndex = index === 0 ? '2' : '1';
        item.style.display = 'block';
    });

    scroll_points.forEach((point, index) => {
        point.classList.toggle('active', index === 0);
        point.style.animation = '';
    });

    currentIndex = 0;
    startAutoScroll();
}

function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        handleTransition((currentIndex + 1) % protfolio_lists.length, 'next');
    }, 6000); // 与动画总时间一致
}

function handleTransition(newIndex, direction) {
    if (isAnimating || newIndex === currentIndex) return;
    isAnimating = true;
    clearInterval(autoScrollInterval);

    const currentItem = protfolio_lists[currentIndex];
    const newItem = protfolio_lists[newIndex];

    // 准备新元素状态
    newItem.style.display = 'block';
    newItem.style.zIndex = '2';
    newItem.style.left = direction === 'next' ? '100%' : '-100%';

    // 强制重绘
    void newItem.offsetHeight;

    // 设置动画
    currentItem.style.animation = `${direction === 'next' ? 'move_middle_to_left' : 'move_middle_to_right'} 1s forwards`;
    newItem.style.animation = `${direction === 'next' ? 'move_right_to_middle' : 'move_left_to_middle'} 1s forwards`;

    // 更新指示点
    scroll_points[currentIndex].classList.remove('active');
    scroll_points[newIndex].classList.add('active');

    const cleanUp = () => {
        // 重置完成动画的元素
        currentItem.style.animation = '';
        currentItem.style.zIndex = '1';
        currentItem.style.left = direction === 'next' ? '-100%' : '100%';

        newItem.style.animation = '';
        newItem.style.zIndex = '2';
        newItem.style.left = '0';

        // 隐藏非相邻元素
        protfolio_lists.forEach((item, index) => {
            if (index !== currentIndex && index !== newIndex) {
                item.style.display = 'none';
                item.style.left = index < newIndex ? '-100%' : '100%';
            }
        });

        isAnimating = false;
        currentIndex = newIndex;
        startAutoScroll();
    };

    // 单一事件监听器
    const animationHandler = e => {
        if (e.target === currentItem || e.target === newItem) {
            currentItem.removeEventListener('animationend', animationHandler);
            newItem.removeEventListener('animationend', animationHandler);
            cleanUp();
        }
    };

    currentItem.addEventListener('animationend', animationHandler);
    newItem.addEventListener('animationend', animationHandler);
}

// 事件绑定
document.getElementById('left_arrow').addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + protfolio_lists.length) % protfolio_lists.length;
    handleTransition(newIndex, 'prev');
});

document.getElementById('right_arrow').addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % protfolio_lists.length;
    handleTransition(newIndex, 'next');
});

// 初始化轮播
initCarousel();