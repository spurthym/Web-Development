function (){
var num;
var td=document.querySelector('tbody');
for(num=0;num<=10;num++)
{
td.insertAdjacentHTML('beforeend','<tr><td>'+num+'</td><td>'+num*num+'</td><td>'+num*num*num+'</td></tr>');
}
}