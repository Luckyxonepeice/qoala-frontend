const API_URL="http://localhost:5000";

export async function cardInfo(filter){

    let queryParams = {};

    // Check if the filter is 'prevDate'
    if (filter === 'prevCard') {
        queryParams = { dateType: 'prevCard' };
    }

    // Check if the filter matches one of the given statuses
    if (['complete', 'incomplete', 'wrongData'].includes(filter)) {
        queryParams = { status: filter };
    }

    const queryString = new URLSearchParams(queryParams).toString();

    const response = await fetch(`${API_URL}/get/card?${queryString}`);
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

export async function updateCard(data){
    const cardId=data._id;
    try{
        const response = await fetch(`${API_URL}/update/card/${cardId}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to Post the Data');
        }
    }catch (error) {
        console.error("Error Updating the card:", error);
    }
}