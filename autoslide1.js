var y="x1"; 
		var j="i1"; 
		var count=1;
		var continue1=1;
		function fun1(x,i)
		{
			continue1=0;
			//document.write(x,i);
			document.getElementById(y).style.opacity=0;
			document.getElementById(x).style.opacity=1;
			document.getElementById(j).style.backgroundColor="#282828";
			document.getElementById(i).style.backgroundColor="#ff7766";
			j=i;
			y=x;
			setTimeout("fun3()",7000);
		}
		function fun2()
		{
			if(continue1==1)
			{
				var x="x"+count;
				var i="i"+count;
				//document.write(x,i);
				document.getElementById(y).style.opacity=0;
				document.getElementById(x).style.opacity=1;
				document.getElementById(j).style.backgroundColor="#282828";
				document.getElementById(i).style.backgroundColor="#ff7766";
				y=x;
				j=i;
				if(count<3)
				{
					count=count+1;
				}
				else
				{
					count=1;
				}
			}
			setTimeout("fun2()",5000);
		}
		function fun3()
		{
			continue1=1;
		}