import axios from 'axios';

function videosFetch(table) {
    const inpval = { courseTable: table };

    console.log(inpval);
    return axios.post("http://localhost:5000/www/ProjectOne/BackEnd/videos.php", inpval)
        .then((response) => {
            if (response.data['status'] === 'success') {
                return response.data.data;
            } else {
                throw new Error(response.data['status']+" An error occurred. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("Error fetching courses:", error);
            throw error; // Re-throw the error to be handled at the component level
        });
}

export default videosFetch;
