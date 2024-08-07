const user = await fetch("https://helponeproject.onrender.com/home", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

  
