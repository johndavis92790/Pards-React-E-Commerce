const API = {
  getParts: async function () {
    try {
      return fetch("/api/part")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default API;
