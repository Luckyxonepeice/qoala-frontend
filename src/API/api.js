const API_URL="http://localhost:5000";

export async function cardInfo(){

    //console.log("!");
    const response = await fetch(`${API_URL}/get/card`);
    //console.log(response.json());
    return response.json();
}

export async function uploadCard(file){

    //console.log(file);
    const formData= new FormData();
    formData.append('card',file);

    const response = await fetch(`${API_URL}/add/card`,{
        method:'POST',
        body:formData
    });

    console.log(response);

} 

export async function deleteCard(cardId){

    try{
        const response = await fetch(`${API_URL}/delete/card/${cardId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete the card');
        }
    }catch (error) {
        console.error("Error deleting card:", error);
    }
};