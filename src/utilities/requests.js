const menuUrl = "https://cors-anywhere.herokuapp.com/https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json";
const getMenu = async () => {

  try {
    let response = await fetch(menuUrl);
    if (response) {
      const jsonResponse = await response.json();
      return jsonResponse.menu ;
    }
  } catch (error) {
    console.log(error);
  }
};
export { getMenu };

