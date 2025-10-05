export const getImageUrl = (path) => {
    console.log("Received path in getImageUrl:",path);
    if (!path) {
      console.error("Error: 'path' is undefined in getImageUrl");
      return ""; // Fallback to an empty string or a placeholder image URL
    }

   let url= new URL(`../../assets/${path}`, import.meta.url);
    console.log(url)
    return url;
  };
  