const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch("/create-checkout-session", {
    methos: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          _id: ObjectId("624a988076a4e82a39f39169"),
          quantity: 1,
        },
        {
          _id:  ObjectId("624a988076a4e82a39f39163"),
          quantity: 2,
        },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      console.log(url);
      // window.location = url
    })
    .catch((e) => {
      console.error(e.error);
    });
});
