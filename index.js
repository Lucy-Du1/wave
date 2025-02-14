document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("a");

    link.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止默认跳转行为

        document.body.style.transition = "opacity 1s ease-in-out"; 
        document.body.style.opacity = "0"; // 触发淡出效果

        setTimeout(() => {
            window.location.href = link.href; // 1秒后跳转
        }, 1000);
    });
});
