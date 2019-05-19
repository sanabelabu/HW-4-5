

/**********************1****************************/
function ID()
{
  var i=1 ;
  var flag=false;
  var x;
     let str = document.getElementById("textone").value;
    if(str.lenght==9)
   {
       while(i<=9)
       {
        if(parseInt(charAt(i))>=0 && parseInt((charAt(i))<=9))
        {
          flag=True;
         }

       i++;
      }
    }
      if (flag==1)
      {
        console.log("Valid ID");
      }
      else
      {
        console.log( "Not valid ID");
      }
    
}
(ID());

/**********************2****************************/
let prime=(num)=>
{
  let flag=true;

 for(i=2;i<num;i++)
 {
      if(num%i==0)
      {
      flag=0;
      }
}


if (flag==1)
      {
        console.log("Prime");
      }
      else
      {
        console.log( "Not Prime");
      }
}
console.log(prime(7));
//***************************3*************************** */
function Bigletter(str)
{
  

  let i=0, count=0;
for (i=0;i<str.length;i++){
  if(str.charAt(i).charCodeAt()>=65 && str.charAt(i).charCodeAt()<= 90) 
    {
      count=count+1;
    }
  }

 return count;

}

console.log(Bigletter("HELLO"));
console.log("Big Letters");
//***************************4*************************** */
function shlele()
{
  var max=0;
  var num=0;
  do {
    
    num = document.getElementById("getnumber").value;
    if(num>=max)
    {
       max=num;

    }
   
  }while(num<0)
   return max;
}

//*******************5**************************//
function keywordCount(  str,  substr){
  let count = 0;
  let i = 0;
  while ((i=str.indexOf(substr, i)) != -1)
   {
      count++;
      i += substr.length;
  }
  return count;
}
console.log("str in str");
console.log(keywordCount("hellohello","he"));
document.write("<br/>");
//*******************6**************************//
function stars3(num)
{
  for( i = 0; i<num;i++) 
  {
     document.write("*"); 
  }
  for( i = 0; i<num-2;i++) 
  {
    document.write("<br/>");
     document.write("*"); 
     document.write('   ' + "*"); 
  }
  document.write("<br/>");

  for( i = 0; i<num;i++) 
  {
     document.write("*"); 
  }
}

stars3(4);


 
//****************7********************* */
function strwithespace(str)
{
 let newstr="";

for(i=0;i<str.length ;i++)
{

  if(str.charCodeAt(i)>= 65 && str.charCodeAt(i)<= 90) 
  {
    
     newstr=newstr+" "+str.charAt(i);
  
  }
  else{
    
    newstr=newstr+str.charAt(i);
  }

}
return newstr;

}

console.log(strwithespace("abCdEf"));


//*****************8******************** */
function stars(n){
  var str = '';
  for(var i=1; i<=n; i++){
      for(var k=1; k<=n-i; k++){
          str += "\t";
      }
      for(var j=1; j<=i; j++){
          str += "*\t\t";
      }
      console.log(str);
      str = "";
  }
}
stars(5)
//******************9******************* */

 function GoodEmail(mail)
{
  flag=0;
  let index;
if (mail.lenght>=5) {
    index=email.indexOf("@");
       if ((email.charAt(index-1)>=0) && (email.charAt(index+1)>=0))
        {
            var str=email.slice(index,email.lenght)
             if(str.indexOf("."))
                {
                   var i=indexOf(".");
                    var str2=slice(i,email.lenght)
                   if(str2.lenght>=2)
                    {
                      flag=1;
                    }
                 }
         }
         console.log("The email is  OK")
  }
  console.log("The email is not OK")
}
GoodEmail("abc@hfh.nvn");


//****************10********************* */
function Palindrome(number)
	{
		var ind, temp, final = 0;

		temp = number;
		while(number>0)
		{
			ind = number%10;
			number = parseInt(number/10);
			final = final*10+ind;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
  }

//**************11*************** */
function month2(num,str)
{
  var day=str.slice(0,str.indexOf("."));
  var newstr=str.slice(str.indexOf(".")+1,str.lenght-1);
 
  console.log(str);
  console.log(parseInt(day)+num);
}

month2(3,"21.3.2001");