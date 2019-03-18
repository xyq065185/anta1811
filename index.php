<?php
	/*
	header("Content-type:text/html;charset=utf-8");
	//解决中文乱码

	// header("Content-type:text/html;charset=utf-8");


	// echo "<ul style=font-size:20px;><li style=list-style:none>千峰教育</li></ul>";
	//1 创建连接（搭桥）
	$conn = mysql_connect('localhost','root','root');
	
	if (!$conn) {
		die("没有连接成功");
	}else{
		//2 选择数据库（目的地）
		mysql_select_db("mydb1810",$conn);
		//3 传输数据（运送）
		$sqlstr = "insert into userinfo(username,userpass,usersex,userage,userphone)
       values('千锋上海','13156','男',20,'12345678313');";

       mysql_query($sqlstr,$conn);
		//4 关闭数据库（）
       mysql_close($conn);
	}
	*/
	header("Content-type:text/html;charset=utf-8");
	//1接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$usersex = $_POST['usersex'];
	$userage = $_POST['userage'];
	$userphone = $_POST['userphone'];
	//2处理（数据）
	$conn = mysql_connect('localhost','root','root');
	
	if (!$conn) {
		// die("没有连接成功");
		echo "服务端连接失败:数据库没有连上";
	}else{
		//2 选择数据库（目的地）
		 mysql_select_db("mydb1810",$conn);
		//3 传输数据（运送）
		$sqlstr = "insert into userinfo(username,userpass,usersex,userage,userphone)
       values('$username','$userpass','$usersex',$userage,'$userphone')";
       //执行SQL语句
       mysql_query($sqlstr,$conn);
		//4 关闭数据库（）
       mysql_close($conn);
       if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>