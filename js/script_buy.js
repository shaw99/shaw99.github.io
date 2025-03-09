// 模态框交互逻辑
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有按钮和模态框
    const detailButtons = document.querySelectorAll('.details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // 点击按钮打开对应模态框
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            if (!modalId) return; // 如果没有 data-modal 属性，则跳过

            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    // 点击关闭按钮关闭模态框
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // 点击模态框外部关闭模态框
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // 获取所有二维码图片
    const qrCodes = document.querySelectorAll('.qr-code');

    // 为每个二维码图片添加点击事件
    qrCodes.forEach(qrCode => {
        qrCode.addEventListener('click', () => {
            qrCode.classList.toggle('zoomed'); // 切换放大状态
        });
    });

    // 点击模态框外部时缩小图片
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                const zoomedImage = modal.querySelector('.qr-code.zoomed');
                if (zoomedImage) {
                    zoomedImage.classList.remove('zoomed'); // 移除放大状态
                }
            }
        });
    });
});