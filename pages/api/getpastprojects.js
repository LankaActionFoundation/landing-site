

export default function getpastprojects (req, res) {
    console.log("cccccccccccccccccccccccccc");
    const axios = require('axios');
    
        var data = JSON.stringify({
          "collection": "donations",
          "database": "myFirstDatabase",
          "dataSource": "lankaaction",
          "filter": {
            "isComplete": false,
            "featured": false,
          },
      });
                  
      var config = {
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/action/find`,
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          data : data
      };
                  
      axios(config)
          .then(function (response) {
              console.log('api-projects',response.data);
              var response  = response.data;
              res.status(200)
              .json({
                  data:response,
              });
          })
          .catch(function (error) {
              console.log('api-error',error);
          });

      


}