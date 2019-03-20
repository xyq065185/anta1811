// 1、给减号绑定事件
    let $minus = $(".minus");
    for(let i=0;i<$minus.length;i++ ){
        $minus.click(function(){
            let $spanDom = $(this).next();
            changeCount($(this),$spanDom,-1);
        });
    }

    //2、给加号绑定事件
    let $add = $(".add");
    for(let i=0;i<$add.length;i++){
        $add.click(function(){
            let $spanDom = $(this).prev();
            changeCount($(this),$spanDom,1);
        });
    }



function changeCount($selfDom,$spanDom,inc){
    let $count = parseFloat($spanDom.val());
    count = $count+inc;
    if(count<0){
        count=0;
    }
    $spanDom.val(count);
        
        //3、计算金额
        // 1)获取单价
        let $price = parseFloat($selfDom.parent().parent().prev().children(".priceButton").html()*1);
        // // 2)获取优惠
        // 2)计算金额
        let money = count*$price;
        // 3)显示金额
        $selfDom.parent().parent().parent().next().next().children(".closeRight").children(".four").children(".payable").html(money);
    
}



//  单选全返和反选

jQuery.fn.extend({
	checkboxBind:function($subCheckbox,$unBtn){
		this.click(function(){
			//this是事件源，dom对象
			$subCheckbox.checkAll(this.checked);
		});	

		$subCheckbox.click(()=>{
			//this:事件源，所点击的复选框
			this.changeCheck($subCheckbox);
		});	
		if($unBtn){
			$unBtn.click(()=>{
				$subCheckbox.unCheck(this);
			});
		}
	},

	checkAll:function(isChecked){
		// this//jQuery对象
		this.each(function(){
			// this//jQuery对象中的每一个DOM元素
			this.checked = isChecked;
		});
	},
	unCheck:function($checkboxAll){
		this.each(function(){
			this.checked = !this.checked;
		});
		$checkboxAll.changeCheck(this);
	},
	//子控制父
	changeCheck:function($obj){
		// this
		//假定是全部选中
		let isAllCheck = true;
		for(let i=0;i<$obj.length;i++){
			if(!$obj[i].checked){
				//推翻了
				isAllCheck = false;
				break;
			}
		}
		this.attr({"checked":isAllCheck});		
	}
});

$(function(){
	$("#checkallid").checkboxBind($("#box :checkbox"),$("#btn"));
});