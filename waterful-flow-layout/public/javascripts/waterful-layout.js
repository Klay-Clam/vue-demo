/**
 * 自定义函数，根据id获得标签
 * @param {*id} id 
 */
function $(id){
    return typeof id === 'string' ? document.getElementById(id) : id;
}

/**
 * getMinBoxIndex
 * @param {*value} value
 * @param {*array} array
 * */
function getMinBoxIndex(value,array) {
    for (var i in array){
        if(array[i] === value){
            return i;
        }
    }
}
/**
 * 实现瀑布流代码
 * @param {*父盒子} parent 
 * @param {*子盒子} box 
 */
function waterFall(parent, box){
    // -----父盒子居中------
    
    // 1.1 
    var allBox = $(parent).getElementByClassName(box);
    // 1.2
    var boxWidth = allBox[0].offsetWidth;
    // 1.3
    var screenWidth = document.body.offsetWidth;
    // 1.4 
    var cols = Math.floor(screenWidth / boxWidth);
    // 1.5 
    $(parent).style.width = boxWidth * cols + 'px';
    $(parent).style.margin = '0 auto';

    // ----子盒子定位-----
    // 2.1 数组保存第一行的高度
    var heightArr = [];
    // 2.2 遍历
    for (var i = 0; i < allBox.length; i++) {
        // 2.2.1 求出单个盒子的高度
        var boxHeight = allBox[i].offsetWidth;
        if(i < cols) { // 第一行的盒子
            heightArr.push(boxHeight);
        } else { // 不是第一行的盒子
            // 2.2.2 求出最矮的盒子
            var minBoxHeight = Math.min.apply(this,heightArr);
            console.log(minBoxHeight);
            // 2.2.3 拿到最矮盒子的角标
            var minBoxIndex = getMinBoxIndex(minBoxHeight,heightArr);
            // 2.2.4 布局定位
            allBox[i].style.position = "absolute";
            allBox[i].style.top = minBoxHeight + 'px';
            allBox[i].style.left = minBoxIndex * boxWidth + 'px';
            // 2.2.5 更新数组的高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }

}

/**
 * 判断是否应该加载新的图片
 */

function checkWillLoad() {
    // 取出所有的盒子
    var allBox = $('main').getElementsByClassName('box');
    // 拿到最后一个盒子
    var lastBox = allBox[allBox.length - 1];
    // 取出最后一个盒子的头部偏移量
    var lastBoxOffsetTop = lastBox.offsetTop;
    // 求出浏览器的高度  标准模式  和   混杂模式
    // document.documentElement.clientHeight 继承了所有的浏览器兼容问题
    var screenHeight = document.body.offsetHeight || document.documentElement.clientHeight;
    // 求出浏览器页面的偏移量
    var scrollTop = document.body.scrollTop;
    // 判断
    return lastBoxOffsetTop <= scrollTop + screenHeight;
}

// 判断是否符合加载图片的条件
if(checkWillLoad()){
    // 加载新图片
    var data = {
        'dataImg':[
            {
                'img':'1.img'
            },
            {
                'img':'2.img'
            },{
                'img':'3.img'
            },{
                'img':'4.img'
            },
            {
                'img':'5.img'
            },
            {
                'img':'1.img'
            },
            {
                'img':'2.img'
            },{
                'img':'3.img'
            },{
                'img':'4.img'
            },
            {
                'img':'5.img'
            },
            {
                'img':'1.img'
            },
            {
                'img':'2.img'
            },{
                'img':'3.img'
            },{
                'img':'4.img'
            },
            {
                'img':'5.img'
            },
            {
                'img':'1.img'
            },
            {
                'img':'2.img'
            },{
                'img':'3.img'
            },{
                'img':'4.img'
            },
            {
                'img':'5.img'
            }
        ]
    };
    // 加载数据
    for (var i = 0;i < data.dataImg.length;i++){
        // 创建box
        var newBox = document.createElement('div');
        newBox.className = 'box';
        $('main').appendChild(newBox);
        // 创建 pic
        var newPic = document.createElement('div');
        newPic.className = 'pic';
        newBox.appendChild(newPic);
        // 创建 img
        var newImg = document.createElement('div');
        newImg.src = 'images/' + data.dataImg[i].img;
        newPic.appendChild(newImg);
    }
    // 瀑布流布局
    waterFall('main','box');
}