
function friendly(a) {
  HumanDates=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th",
            "13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd",
           "23rd","24th","25th","26th","27th","28th","29th","30th","31st"];
  HumanMonths=["January","February","March","April","May","June","July","August",
            "September","October","November","December"];
  var currentDate=new Date();
  var currentDateYearInFuture=new Date();
  currentDateYearInFuture.setFullYear(currentDate.getFullYear()+1);

  function getYearConditionally(date){
  /* It would make sense to me to uncomment these three lines,
     but that isn't the instruction
           if (date.getFullYear()==currentDate.getFullYear())
             return "";
           else */
    return (", "+date.getFullYear());
  }

  function getFullFriendly(date){
    return (HumanMonths[(date.getMonth())]+" "+HumanDates[date.getDate()-1] +   
            getYearConditionally(date));
  }

  var retval =[];
  var date1=new Date(parseInt(a[0].split("-")[0]),parseInt(a[0].split("-")[1])-1,parseInt(a[0].split("-")[2]),0,0,0,0);
  var date2=new Date(parseInt(a[1].split("-")[0]),parseInt(a[1].split("-")[1])-1,parseInt(a[1].split("-")[2]),0,0,0,0);
  console.log(date1.getTime()+"  "+date2.getTime());
  
  if (date1.getTime()==date2.getTime()){
    retval=getFullFriendly(date1);
  }
  else if ((date2.getMonth()===date1.getMonth()) && (date2.getYear()===date1.getYear())) {
    console.log("month and year matches");
    retval.push(HumanMonths[date1.getMonth()]+" "+HumanDates[date1.getDate()-1]);
    retval.push(HumanDates[date2.getDate()-1]);
  }
 // else if (date1.getYear()==currentDate.getYear()&&
   else if (((date1-currentDate)<(currentDateYearInFuture-currentDate))&&
    ((date2-date1)<(currentDateYearInFuture-currentDate))) {
    console.log("years match and second year is less than a year into the future from 1st date");
    retval.push(HumanMonths[date1.getMonth()]+" "+HumanDates[date1.getDate()-1]);
    retval.push(HumanMonths[date2.getMonth()]+" "+HumanDates[date2.getDate()-1]);
  }
  else {
  // append the two something like 
    retval.push(getFullFriendly(date1));
    retval.push(getFullFriendly(date2));  
  }
  return retval;
//  console.log(date2-date1);
}
console.log(friendly(["2015-12-01", "2015-12-01"]));

