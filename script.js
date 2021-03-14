var d = new Date();
document.getElementById("date").innerHTML = d;
var url = "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=1CdBCP90Y649LQZYrzeNgXziLXG9mGYK"
function articleSelected(link) {
    sessionStorage.setItem('articleUrl', link);
    window.location = link;
    return false;
}
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: 'json',
        error: function () {
            console.log('JSON FAILED FOR DATA');
        },
        success: function (data) {
            let output = '';
            console.log(data);

            data.results.forEach(key => {
                // articleitemlist.insertAdjacentElement('beforeend',"<li>"+element.url)

                output += `

               <div class="w3-card-4 w3-margin w3-white" style="font-family: 'Shippori Mincho B1', serif;">

<div class="w3-container" style="font-family: 'Shippori Mincho B1', serif;">
<h3 style="font-family: 'Shippori Mincho B1', serif;"><b>${key.book_title}</b></h3>
<h3 style="font-family: 'Shippori Mincho B1', serif;"><b>${key.publication_dt}</b></h3>
</div>

<div class="w3-container">
<p style="font-family: 'Shippori Mincho B1', serif;">${key.summary}</p>
<div class="w3-row">
<div class="w3-col m15 s12">
 <p style="font-family: 'Shippori Mincho B1', serif;"><button class="w3-button w3-padding-large w3-white w3-border" onclick="articleSelected('${key.url}')"><b>READ MORE »</b></button></p>
</div>

</div>
</div>
</div>
          `;
                $('#output').html(output)
            });


        }
    })
})