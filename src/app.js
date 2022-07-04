import { DOMS } from "./dom";

DOMS['IMGLIST'].forEach((img) => {
    img.addEventListener('click', () => {
        // 判断当前元素是否处于大图状态
        if (img.classList.contains('active')) {
            changeClass('none', img);
            img.style.zoom = 1;
        } else {
            changeClass('block', img);
         
        }
    })
    // 鼠标滚轮滚动，改变图片尺寸
    img.addEventListener('mousewheel', (e) => {
        if (img.classList.contains('active')) {
            wheelZoomFun(e, img);
        }
    })
});
// 为灰色遮罩绑定点击事件
DOMS['MASK'].addEventListener('click', () => {
    DOMS['IMGLIST'].forEach((img) => {
        if (img.classList.contains('active')) {
            changeClass('none', img);
            img.style.zoom = 1;
        }
    })
});
// 将改变class操作封装成函数
function changeClass(state, img) {
    img.classList.toggle('active');
    DOMS['MASK'].style.display = `${state}`;
};
// 图片缩放函数
function wheelZoomFun(e, img) {
    let zoom = parseInt(img.style.zoom) || 100;
    zoom += e.wheelDelta / 12;
    if (zoom > 30) img.style.zoom = zoom + '%';
    return false;
};
