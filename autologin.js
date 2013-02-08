document.getElementsByTagName('body').item(0).addEventListener('DOMSubtreeModified',function(){
	try{
	if(document.body.innerHTML.indexOf('input') != -1 || document.getElementById('loginmsgdiv').innerHTML.indexOf("xAutoLoginXtension") != -1){
	chrome.extension.sendMessage({},
     function(localStorage){
		if(!localStorage.password || !localStorage.username){
			 if(document.getElementById('loginmsgdiv').innerHTML.indexOf("xAutoLoginXtension") == -1 )
				document.getElementById('loginmsgdiv').innerHTML = document.getElementById('loginmsgdiv').innerHTML +"<br/><div id='xAutoLoginXtension'>Save your username and password in 'Auto login' extension settings, to enable <b>AutoLogin</b>.</div>";
		}
		else
		{
			$('#uname').val(localStorage.username);
			$('#paswd').val(localStorage.password);
			$('#LoginButton').trigger('click');
		}
	 });}
	}catch(e){ 
		
	}
});