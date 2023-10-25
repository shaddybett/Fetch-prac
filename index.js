fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the first item in the "data" array
    const firstItem = data.data[0];

    // Handle the data here
    const image = document.createElement("img");
    image.src = firstItem.image_url;
    document.body.appendChild(image);

    const names = document.createElement('p');
    names.textContent = firstItem.common_name;
    document.body.appendChild(names);
  })
  .catch((error) => {
    // Handle any errors that may occur during the fetch
    console.error(error);
  });
