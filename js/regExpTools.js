
//封装正则:
//参数：
//验证的类型（"email"：表示邮箱；phone：表示手机号码）
//要验证的字符串
//返回值：true或false

// check("email",$("#email").value);

function check(type,str){
	switch(type){
		case "email":var r = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;break;
		case "ip":var r = /^(((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3})(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;break;
		case "phone":var r = /^1[1-9]\d{9}$/;break;
		case "card":var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[0-9X]$/;break;
		case "user":var r = /^[a-zA-Z_]\w{5,14}$/;break;
		case "post":var r = /^[1-9]\d{5}$/;break;
		case "date":var r = /^(([12]\d{3}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01]))|([12]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])))$/;break;

	}

	return r.test(str);

}
