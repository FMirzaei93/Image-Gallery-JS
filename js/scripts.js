window.onload = function() {

    //let images = document.querySelectorAll('div#col_left>div.vignettes>img');
    //OR:
    let imgElements = document.querySelector('div#col_left>div.vignettes').children;
    var imgElementsArray = Array.from(imgElements);
    let bigFrame = document.querySelector('div.figure>img');

    let ImagesRoot = 'images/grandes/';
    var LargeImagesArray = [
        ImagesRoot + 'blue.jpg',
        ImagesRoot + 'gray.jpg',
        ImagesRoot + 'purple.jpg',
        ImagesRoot + 'red.jpg',
        ImagesRoot + 'orange.jpg',
        ImagesRoot + 'yellow.jpg',
        ImagesRoot + 'green.jpg',
    ]


    for (let [index, image] of imgElementsArray.entries()) {
        image.onclick = function() {

            if (index < LargeImagesArray.length)
            //It means if for each selected image, we have its corresponding larg image which is defined in the LargeImagesArray.
                bigFrame.src = LargeImagesArray[index];

            else
            //Means there's no corresponding image for this item that has been defied in the LargeImagesArray. For instance imagine a pink image has been added.
                bigFrame.src = this.src;

        }

    }
}