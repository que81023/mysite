export default async function decorate(block) {
    fetchData(block);
}

async function fetchData(block) {
    // const response = await fetch('https://main--mysite--que81023.aem.page/empdata.json').then(res => {
    //    let rep
    // })
    const result = await fetch('empdata.json?offset=0&limit=20')
        .then(response => {
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON data
        })
        .then(result => {
            // Process the data
            console.log(result);
            console.log(result.data);
            const empDetails = result.data;
            const ul = document.createElement('ul');

            // Loop through the items array
            empDetails.forEach(item => {
                // Create an LI element for each item
                const li = document.createElement('li');
                li.textContent = `Name: ${item.Name} and Email: ${item.Email}`; // Set the text content
                ul.appendChild(li); // Append the LI to the UL
            });
            const container = document.getElementsByClassName('empdata')[0];
            console.log(container);
            container.appendChild(ul);
        })
        
}