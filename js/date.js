function getFormattedDate(input){
   var pattern=/(.*?)\/(.*?)\/(.*?)$/;
   var result = input.replace(pattern,function(match,p1,p2,p3){
   var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Dec'];
   return (months[(p1-1)]+" "+p2<10?"0"+p2:p2)+" "+p3;
});
alert(result);
}