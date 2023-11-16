web_element_MethodOfPay = web_element_MethodOfPay.trim().split(' ')
if(web_element_MethodOfPay.length === 2){
   method_ofPay = ` ${web_element_MethodOfPay[1]}`
}else method_ofPay =` ${web_element_MethodOfPay[1]} ${web_element_MethodOfPay[2]} ${web_element_MethodOfPay[3]}`