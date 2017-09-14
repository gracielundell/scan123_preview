<div id='crmWebToEntityForm' style='width:600px;margin:auto;'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads1630098000010072057 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory()' accept-charset='UTF-8'>

     <!-- Do not remove this code. -->
    <input type='text' style='display:none;' name='xnQsjsdp' value='c39b2ff99354e16625c8050b5852f151ec1ea4ed4c208b53162ca85df637e262'/>
    <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
    <input type='text' style='display:none;' name='xmIwtLD' value='839370f03170892c46a7d2c62b40f50f2bdb1b027903485d52560bcba0059e6a'/>
    <input type='text' style='display:none;'  name='actionType' value='TGVhZHM='/>

    <input type='text' style='display:none;' name='returnURL' value='http&#x3a;&#x2f;&#x2f;www.scan123.com&#x2f;contact.cfm&#x2f;' />
     <!-- Do not remove this code. -->
    <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
    <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
     <!-- Do not remove this code. -->
    <style>
   	 tr , td {
   		 padding:6px;
   		 border-spacing:0px;
   		 border-width:0px;
   		 }
    </style>
    <table style='width:600px;background-color:white;color:black'>

    <tr><td colspan='2' style='text-align:left;color:black;font-family:Arial;font-size:14px;'><strong>Contact Us</strong></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Company</td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='100' name='Company' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>First Name<span style='color:red;'>*</span></td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='40' name='First Name' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Last Name<span style='color:red;'>*</span></td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='80' name='Last Name' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Email<span style='color:red;'>*</span></td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='100' name='Email' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Zip Code</td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='30' name='Zip Code' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Phone</td><td style='width:250px;' ><input type='text' style='width:250px;'  maxlength='30' name='Phone' /></td></tr>

    <tr><td  style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:200px;'>Description </td><td> <textarea name='Description' maxlength='32000' style='width:250px;'>&nbsp;</textarea></td></tr>

    <tr style='display:none;' ><td style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:50%'>Lead Source</td><td style='width:250px;'>
   	 <select style='width:250px;' name='Lead Source'>
   		 <option value='-None-'>None</option>
   		 <option value='20&#x20;Group'>20 Group</option>
   		 <option value='Additional&#x20;Store'>Additional Store</option>
   		 <option value='Booker'>Booker</option>
   		 <option value='Chat'>Chat</option>
   		 <option value='Connector'>Connector</option>
   		 <option value='Infogroup'>Infogroup</option>
   		 <option value='Call&#x20;In'>Call In</option>
   		 <option value='Referral'>Referral</option>
   		 <option value='Trade&#x20;Show'>Trade Show</option>
   		 <option value='Web&#x20;Form'>Web Form</option>
   		 <option value='Post&#x20;Card'>Post Card</option>
   		 <option value='Previous&#x20;User'>Previous User</option>
   	 </select></td></tr>

    <tr style='display:none;' ><td style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:50%'>Lead Status</td><td style='width:250px;'>
   	 <select style='width:250px;' name='Lead Status'>
   		 <option value='-None-'>None</option>
   	 <option selected value='Active'>Active</option>
   		 <option value='Dead&#x20;Lead'>Dead Lead</option>
   		 <option value='Existing&#x20;Customer'>Existing Customer</option>
   		 <option value='Out&#x20;of&#x20;Business'>Out of Business</option>
   		 <option value='Duplicate&#x20;Lead'>Duplicate Lead</option>
   	 </select></td></tr>

    <tr><td colspan='2' style='text-align:center; padding-top:15px;'>
   	 <input style='font-size:12px;color:#131307' type='submit' value='Submit' />
   	 <input type='reset' style='font-size:12px;color:#131307' value='Reset' />
    	</td>
    </tr>
   </table>
    <script>
	   var mndFileds=new Array('Last Name','Email','First Name');
	   var fldLangVal=new Array('Last Name','Email','First Name');
   	 var name='';
   	 var email='';

	   function checkMandatory() {
   	 for(i=0;i<mndFileds.length;i++) {
   	   var fieldObj=document.forms['WebToLeads1630098000010072057'][mndFileds[i]];
   	   if(fieldObj) {
   		 if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
   		  if(fieldObj.type =='file')
   			 {
   			  alert('Please select a file to upload.');
   			  fieldObj.focus();
   			  return false;
   			 }
   		 alert(fldLangVal[i] +' cannot be empty.');
  	   	  	   fieldObj.focus();
  	   	  	   return false;
   		 }  else if(fieldObj.nodeName=='SELECT') {
        	   	  if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
   			 alert(fldLangVal[i] +' cannot be none.');
   			 fieldObj.focus();
   			 return false;
   			}
   		 } else if(fieldObj.type =='checkbox'){
	            if(fieldObj.checked == false){
   			 alert('Please accept  '+fldLangVal[i]);
   			 fieldObj.focus();
   			 return false;
   			}
   		  }
   		  try {
   		  	if(fieldObj.name == 'Last Name') {
   			 name = fieldObj.value;
	           	}
   		 } catch (e) {}
   	 	}
   	 }
   	 trackVisitor();
    }
</script><script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {salesiq:{values:{},ready:function(){$zoho.salesiq.floatbutton.visible('hide');}}};var d=document;s=d.createElement('script');s.type='text/javascript';s.defer=true;s.src='https://salesiq.zoho.com/scan123/float.ls?embedname=scan123';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads1630098000010072057']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads1630098000010072057']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads1630098000010072057']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
    </form>
</div>
