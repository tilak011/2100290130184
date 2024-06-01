const axios = require('axios');

const data = {
  {
    companyName: 'kiet123',
    clientID: '466b757d-af50-4851-a22e-2fa7801f7058',
    clientSecret: 'VUJZYMTVixUJkBEH',
    ownerName: 'Tilak raj dixit',
    ownerEmail: 'tilak.2125it1124@kiet.edu',
    rollNo: '2100290130184'
  }
};
axios.post('http://20.244.56.144/test/auth', data)
  .then(response => {
    console.log("API Response Status:", response.status); // Log the response status code
    console.log("API Response Data:", response.data); // Log the entire response object
  })
  .catch(error => {
    console.error("Error:", error); // Log the error object
  });

  








