<?php
	header("Content-type:text/html;charset=utf-8");
	//1接收数据
	$username = $_POST['username'];
	//2处理（数据）
	$conn = mysql_connect('localhost','root','root');
	
	if (!$conn) {
		// die("没有连接成功");
		echo "服务端连接失败:数据库没有连上";
	}else{
		//2 选择数据库（目的地）
		mysql_select_db("mydb1811",$conn);
		//3 传输数据（运送）
		$sqlstr = "insert into student(studentId)
			values('$username')";
		$result = mysql_query($sqlstr,$conn);
       	//执行SQL语句
       	mysql_query($sqlstr,$conn);
		//4 关闭数据库（）
       	mysql_close($conn);
       	if($result>0){
			echo "1";
		}else{
			echo "0";
		}
	}

?>