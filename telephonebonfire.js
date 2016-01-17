function telephoneCheckHelper(str, notUsedInitial1, notUsedParends, notUsedAreaCode) {
  if (str[0]===' ') str = str.substr(1);
  if (notUsedInitial1&&str[0]==='1') {
console.log("leading 1");  
    if (telephoneCheckHelper(str.substr(1),false,notUsedParends,notUsedAreaCode))
      return true;
  }
  if (notUsedParends&&str[0]=='('&&str[4]==')'){
console.log("parends");
    if (telephoneCheckHelper(str.substr(1,3)+str.substr(5),false,false,notUsedAreaCode))
      return true;
  }
  var maybeMatch = str.match(/\d\d\d[-|\s]?/);
  if (maybeMatch!==null){
console.log("maybeMatch");
    if (notUsedAreaCode&&(maybeMatch[0].length===3)){
      if (telephoneCheckHelper(str.substr(3),false,false,false))
        return true;
    }
    if (notUsedAreaCode&&(maybeMatch[0].length===4)){
      if (telephoneCheckHelper(str.substr(4),false,false,false))
        return true;
    }
  }  
  if (str[0]===' ') str = str.substr(1);
  var localnum = str.match(/\d\d\d[-|\s]?\d\d\d\d/);
  if (localnum&&str==localnum[0])
    return true;
  return false;
}

function telephoneCheck(str) {
  if (str[0]===' ') str = str.substr(1);
  return (telephoneCheckHelper(str, true, true, true));
}

console.log(telephoneCheck("-1 (757) 622-7382"));

