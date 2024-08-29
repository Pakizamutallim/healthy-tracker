document.getElementById('healthDataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Health data logged successfully!');
});

document.getElementById('goalsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Goals set successfully!');
});

const ctx = document.getElementById('healthChart').getContext('2d');
const healthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3'],
        datasets: [{
            label: 'Water Intake (liters)',
            data: [2, 1.5, 2.2],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Exercise (minutes)',
            data: [30, 45, 40],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
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

// console.log(healthChart);


/**
 * firebase
 */

// firebase.database().ref('users/').set({
//     username: "John Doe",
//     email: "john.doe@example.com"
// });

// console.log(app);
