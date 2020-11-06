var images = []

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "get_images"}, respone => {
        $('.gallery').html('');
        images = respone;
        respone.map((img) => {
            $('.gallery').append('<img src="' + img.src + '" />')
        })
    })
})

$(document).on('click', '#download_all', (e) => {
    console.log("Downloding All")
    chrome.runtime.sendMessage({action: "download", data: images}, res => {
        console.log("Complete")
    })
})