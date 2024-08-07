window.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("signin-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const firstname = document.getElementById("fname").value;
        const lastname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
  
        const user = await fetch("https://helponeproject.onrender.com/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => res.json())
          .catch((error) => console.log(error));

        window.location.href = "/account.html";
      });
    }
  });
  