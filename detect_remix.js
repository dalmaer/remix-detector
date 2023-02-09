if (window["__remixContext"]) {   
    var image = document.createElement("img");
    image.src = "data:image/jpeg;base64,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";
    image.alt = "Remix Logo";
    image.style.opacity = "0.5";
    image.style.width = "60px";
    image.style.height = "60px";
    image.style.position = "fixed";
    image.style.bottom = "20px";
    image.style.right = "20px";
    image.style.display = "block";
    
    document.body.appendChild(image);

    console.log("I smell some Remix!");
}