function downloadfile(url,download){
   console.log("Started downloading");
   setTimeout(() => {
    
    let path=url.split("/").pop();
    download(path)
   }, 2000);
    
}
function compressfile(path,compress){
    //compress path and zip convert
    console.log("File ready for compress,Compress started");
    setTimeout(() => {
        const comp=path.split(".")[0]+"zip"
        compress(comp)
        
    }, 2000);
}
function uploadfile(comp,upload){
    console.log("File started uploading");
setTimeout(() => {
    const upl="https://localstorage"+comp;
    upload(upl)
}, 2000);}

downloadfile("https://www.facebook.com/abc.mp3",function(upload){
    console.log(`file downloaded successfully${path}`)
});