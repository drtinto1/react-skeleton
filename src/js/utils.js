
export function loadAsyncJSONData(url, successCallback, errorCallback) {
    "use strict";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE) {
            if(xhr.status == 200) {
                successCallback(JSON.parse(xhr.responseText));
            } else {
                console.warn(`Failed to load "${url}"\n Error ${xhr.status}: ${xhr.statusText}`);
                if(errorCallback !== undefined) {
                    errorCallback(xhr.status, xhr.statusText);
                }
            }
        }
    };
    xhr.send();
}

