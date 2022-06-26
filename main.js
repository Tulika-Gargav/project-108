function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
   
}

function modelReady()
{
    classifier.classify( gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('barking')
        img1 = document.getElementById('meowing')
        img2 = document.getElementById('mooing')
        

        if (results[0].label == "barking") {
            img.src = 'https://cdn3.vectorstock.com/i/1000x1000/89/52/cute-little-dog-cartoon-vector-20778952.jpg';
            
        } else if (results[0].label == "meowing") {
            img.src = 'https://cdn.friendlystock.com/wp-content/uploads/2018/05/6-cute-baby-kitten-cartoon-clipart.jpg';
             
        } else if (results[0].label == "mooing") {
            img.src = 'https://image.freepik.com/free-vector/cute-cow-cartoon_160606-325.jpg';
           
        } else {
            img.src = 'https://media3.giphy.com/media/l378hhjDB5kjSs0qk/giphy.gif';
            
        }
        
    } 
     
}