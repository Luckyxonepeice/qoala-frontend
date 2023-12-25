const API_URL="http://localhost:5000";

export async function cardInfo(){

    //console.log("!");
    const response = await fetch(`${API_URL}/get/card`);
    //console.log(response.json());
    return response.json();
}