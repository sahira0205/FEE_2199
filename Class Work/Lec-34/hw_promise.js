//create a function downloadfile which take a argument url. create a promise if url is not rejected else status must be in resolve state.
// if(xyz != mp4){
// }else{

// }


function downloadFile(url, xyz) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!url) {
                reject("Invalid URL: File download failed");
            } else if (xyz !== "mp4") {
                reject("Invalid file type: Only mp4 files are supported");
            } else {
                resolve(`File downloaded from ${url}`);
            }
        }, 2000);
    });
}


downloadFile("https://example.com/video.mp4", "mp4")
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });

downloadFile("", "mp4")
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });

downloadFile("https://example.com/video.avi", "avi")
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });
