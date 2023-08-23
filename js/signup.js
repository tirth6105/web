const sign = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  fetch(`http://localhost:3000/user?email=${user.email}`)
  .then((res) => res.json())
  .then((data)=> {
    if(data.length > 0){
      alert("user already exists")
      setTimeout(
          window.location.href="/index.html"
        ,2000);
    }
    else{
      setTimeout(() => { window.location.href="/index.html" }, )

      fetch("http://localhost:3000/user",{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
      })
    }
  })
  
}
document.getElementById("sign-page").addEventListener("submit", sign)