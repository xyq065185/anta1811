
$.get(
    "getGoodsList.php",
    function(data){
        showData(data);
    }
)

function showData($str){
    let $objs = JSON.parse($str);
    let $htmlStr="";
    for(let i in $objs){
        $htmlStr += `
    <li class="pro_item">  
        <div class="info">
        <a href="##" class="link" name="${$objs[i].goodsId}">
            <i></i>
            关注
        </a>
        <a href="##" class="pro_img">
            <img src="${$objs[i].goodsImg}">
        </a>
        <div class="srcoll">
            <div class="warp current">
                <ul>
                    <li>
                        <a class="current"><img src="productImg/min01.jpg" style="display:inline"></a>
                    </li>
                    <li>
                        <a><img src="productImg/min01.jpg" class="current"></a>
                    </li>
                    <li>
                        <a><img src="productImg/min01.jpg" class="current"></a>
                    </li>
                    <li>
                        <a><img src="productImg/min01.jpg" class="current"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="price">
            <span>￥<b>${$objs[i].goodsPrice}</b></span>
        </div>
        <p class="titer"><a href="##">${$objs[i].goodsName}</a></p>
        <!-- 快速加入购物车 -->
        <div class="option">
            <div class="pro_btns" style="display:block;">
                <a href="##" class="pro_btn pro_btn_buy">
                    <i></i>
                    <span>立即购买</span>
                </a>
                <a href="##" class="pro_btn_cart pro_btn" id="addBtn">
                    <i></i>
                    <span>加入购物车</span>
                </a>
            </div>
            <div class="pro_addCart">
                <p class="color_select">
                    颜色
                    <span></span>
                </p>
                <ul class="proColor"></ul>
                <p class="size_select">
                    尺码
                    <span></span>
                </p>
                <div class="proSize"></div>
                <div class="pro_addCart_btns">
                        <a class="pro_addCart_btn addCart_btn_cancel">取消</a>
                        <a class="pro_addCart_btn addCart_btn_add">加入购物车</a>
                </div>
            </div>
        </div>
    </div>
    </li>`
    }
    $("#ulsDom").html($htmlStr);
}

// $(".option").hover(function(){
//     $(".pro_btns").css("display","block");
//     $(".pro_addCart").css("display","block");
// });

// pro_btn_cart
// $(父元素).on(事件，点击的dom，function(){})

// let $pro_btn_cart = $(".pro_btn_cart");

$("#ulsDom").on("click",$(".pro_btn_cart"),function(){
        $.get(
            "addShoppingCart.php",
            {"vipName":"张三丰","goodsId":"00010","goodsCount":"28"},
            function(data){
                if(data="1"){
                    location.href="shoppingCar.html";
                }else{
                    alert("您添加的商品有误");
                }
            }
        );
    });


    

