
document.querySelector("#form").addEventListener("submit", loginFunction)
var userData=JSON.parse(localStorage.getItem("Info")) || []
console.log(storageName);
function loginFunction(){
  event.preventDefault();
  var userEmail=document.querySelector("#email").value;
  var userPass=document.querySelector("#pass").value;
 
  var count=0;
 
  userData.map(function (elem){
  
    if(elem.emailId==userEmail && elem.password==userPass){
      count++;
      var userInfo=elem.firstName;
      storageName.push(userInfo)
      localStorage.setItem("firstName", JSON.stringify(storageName));
      console.log(elem.firstName);
      document.querySelector("#change-value").innerText="Hi, "+userInfo;
    
    }
  })
  if(count==1){
    alert("Login Succesfull")
  }else{
    alert("Login Succesfull");
  }
  console.log(count);
 
}
window.location.href = "file:///C:/Users/dev/Desktop/unit2%20project/index.html"
// var storageName=JSON.parse(localStorage.getItem("firstName"))|| []

//   if(storageName.length==0){
//     document.querySelector("#change-value").innerText="Sign In";
//   }else{
//     document.querySelector("#change-value").innerText="first name";
//   }
