
export async function noteSendRequest(url, method, payload, user){

    const options = { method: method };

    if(payload) {
        options.headers = { 'Content-Type': 'application/json'};
        options.body = JSON.stringify({ note: payload, user: user });
        const res = await fetch(url, options);
        if (res.ok) return res.json();
        throw new Error('Bad Request');
    }else{
        console.log("Error at note send request, payload not true", payload);
    }

};