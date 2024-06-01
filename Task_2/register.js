const axios = require('axios');

const data = {
    companyName: 'Ganesh',
    clientID: '43b18f88-fa2d-493c-8dbf-2935fb64f3a5',
    clientSecret: 'gCELWgMVnSQlKDIb',
    ownerName: 'T Ganesh',
    ownerEmail: 'ganeshclever235@gmail.com',
    rollNo: '20MIC0017'
};
axios.post('http://20.244.56.144/test/auth', data)
  .then(response => {
    console.log("API Response Status:", response.status); // Log the response status code
    console.log("API Response Data:", response.data); // Log the entire response object
  })
  .catch(error => {
    console.error("Error:", error); // Log the error object
  });

  








