const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.get('/helloworld', (req, res) => {
  (async ()=>{
    
    const products = await getProducts()
    const items = products['items']
    // console.log(items)
    res.send(items)
    
  })();

});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});

const getProducts = () => new Promise((resolve, reject) => {
  fetch("https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=iphone%2014%20pro&limit=60&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2&view_session_id=5daf7843-18ca-403e-907d-8c6389bdebc6", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0",
            "Accept": "application/json",
            "Accept-Language": "en-US,en;q=0.5",
            "X-Shopee-Language": "id",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": "WvMs7nV1z951Uj8t6eoHpf9AlKmfgP1C",
            "X-API-SOURCE": "pc",
            "Content-Type": "application/json",
            "af-ac-enc-dat": "AAcyLjQuMS0yAAABhDxe1SEAAAjwAbsAAAAAAAAAAOYyhFB7rjob26/8rq6jA0F3J6Kfg5aGEX+GYncix7fIyPghAbZMi0EuMNiQSCFIJQLoe7HJoDU2zWrwJmi46GzCiRQQm32BYELJciRCJJJj45QAoLXzKUOYil7HHJaV9RpGN+fkO1JQb1AhUtRIjdHz7ZWLY+4o9wRitQaYbFgt+DKIoBh9HRa+ATakkRRK8ipaUKBBNwZINkmJTN5UD7plEEaoFO1RazQpO/OpzaPABFCcUPsYaXtvIkt86xLca56jgooFcjRA/67OQrbc8Ydw5nO0cBrhr6iPJbK/ABUJWSFNTFwmppA0O+UMDsiIm+kWyCl4dBfH6UQQJeUeSeahNPKPIfaRwBM4lEZ444uod9CecNf1MtL9WDpVWkJfPh09AQ72apA++LfChcAk2OXsGsbrr1+fJghpnk41ZJAG6fx1Y9knzanWiWd78GLSbzD7y2sBTNcTAOnfQnOpBJPB16QU5Nw9E0mRXDzsNXHGHGiiecZ4mhwOf/+M7a2F/5c2eCbaulne3cx7EQvbreq5ELr4kWOzjLDykZY2dhCO2aemlsZu9FmNFeVrqZ4kzT/lGyHFoxPyhqmgF/SIc5NDtii4",
            "X-Sap-Access-S": "lKwJlIq08o9FTpS4pwKqTZgfrsE_lK7AMSlFFKzcnsM=",
            "X-Sap-Access-T": "1667460158",
            "X-Sap-Access-F": "3.0.0.6.0|13|2.4.1-2_5.2.32_0_171|d89c2e82ee3540b8b5d58e701e376312bca96b43de2645|10900|100",
            "sz-token": "UH3QxSpOIRCG4f8FhSdxuQ==|vK5A4tASsF7nx3RWXvBfHvpgbxYW9amzgm4ynblGk8qMm/fEpQAr/BXOUD/v2Zzra2vq2Z2HbO1xdT+fJ8Z2Zkj7bUUwh5+otA==|+EGHU/aqgqSt1gNp|06|3",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0"
        },
        "referrer": "https://shopee.co.id/search?keyword=iphone%2014%20pro",
        "method": "GET",
        "mode": "cors"
    })
  .then(res => res.json())
  .then(result => {
      // console.log(result)
      resolve(result)
  })
  .then(err => {
      reject(err)
  })
});