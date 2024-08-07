window.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("signin-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
  
        const user = await fetch("https://helponeproject.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
        
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phoneNumber: phoneNumber,

          }),
        })
          .then((res) => res.json())
          .catch((error) => console.log(error));
          window.localStorage.setItem("User_firstname", firstname);
          window.localStorage.setItem("User_lastname", lastname);
          window.localStorage.setItem("User_email", email);
          window.localStorage.setItem("User_phoneNumber", phoneNumber);
          window.localStorage.setItem("User_id", User._id);

        window.location.href = "/account.html";
      });
    }
  });
  