
var nav = document.getElementById("nav")
var mainhead = document.getElementById("mainhead")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        nav.classList.add("navpadding")
        mainhead.style.backgroundColor = " rgba(0, 0, 0, 100%)"
    } else {
        nav.classList.remove("navpadding")
        mainhead.style.backgroundColor = " rgb(0, 0, 0, 5%)"
    }
})

var step_of_investing = document.getElementById("step_of_investing")
var count = 0;
step_of_investing.addEventListener("click", () => {
var step = document.getElementsByClassName("step")
count++
if (count <= 3) {
        
        Array.from(step).forEach((element) => {
            element.classList.add("d-none");
            element.classList.remove("d-flex");
        });
        step[count].classList.remove("d-none");
        step[count].classList.add("d-flex");
       
        

    }
    if (count == 4) {
        count = 0
        Array.from(step).forEach((element) => {
            element.classList.add("d-none");
            element.classList.remove("d-flex");
        });
        step[count].classList.remove("d-none");
        step[count].classList.add("d-flex");
    }

})

// ===========
// Set chart size ==>
    function ChartSize() {
        if ($(window).width() >= 992) {
            return "100"
        } else {
            return "200vh"
        }
    }
    
    
    // Set market profits ==>
    var mp = [0.05, 0.06, 0.07, 0.08, 0.09, 0.1];
    var ProfitResult = []
    
    // Calculate profit ==>
    var plan = parseInt($('#selectplan').val());
    var bill = parseInt($('#rangeValue').html());
    for (var i = 0; i < mp.length; i++) {
        var result = (mp[i] * bill) - plan;
        ProfitResult.push(result);
        //  console.log('plan==>' + plan + '   ' + 'bill==>' + bill + 'result==>' + result);
    }
    
    
    // Calculate Compound Interest ==>
    var durations = ProfitResult;
    var sum = 0;
    var array = durations.map(value => sum += value);
    
    
    console.log(ProfitResult);
    console.log(array);
    
    
    // Creat chart ==>
    $('.chartArea').append('<canvas id="myChart" height="' + ChartSize() + '" ></canvas>')
    const ctx = document.getElementById('myChart');
    Chart.defaults.font.size = 13;
    Chart.defaults.color = "#ffffff";
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'in $',
                data: array,
                borderWidth: 3,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
    
                }
            }
    
        }
    });
    
    
    $('#rangechange, #selectplan').change(function() {
    
        // Set market profits ==>
        var mp = [0.05, 0.06, 0.07, 0.08, 0.09, 0.1];
        var ProfitResult = []
            // Clear chart are ==>
        $('.chartArea').html('');
    
        // Calculate profit ==>
        var plan = parseInt($('#selectplan').val());
        var bill = parseInt($('#rangeValue').html());
        for (var i = 0; i < mp.length; i++) {
            var result = (mp[i] * bill) - plan;
            ProfitResult.push(result);
            //  console.log('plan==>' + plan + '   ' + 'bill==>' + bill + 'result==>' + result);
        }
    
        // Calculate Compound Interest ==>
        var durations = ProfitResult;
        var sum = 0;
        var array = durations.map(value => sum += value);
    
        // console.log(ProfitResult);
        //  console.log(array);
    
    
        // Creat chart ==>
        $('.chartArea').append('<canvas id="myChart" height="' + ChartSize() + '"></canvas>')
        const ctx = document.getElementById('myChart');
        Chart.defaults.font.size = 13;
        Chart.defaults.color = "#ffffff";
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'in $',
                    data: array,
                    borderWidth: 3,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
    
                    }
                }
    
            }
        });
    });
    