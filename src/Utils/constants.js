export const months_constants = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const months_constants2 = [
    {
      "id": 13,
      "month": "February",
      "amount_send": "1200.00",
      "amount_received": "37000.00",
      "sent_date": "2020-03-05",
      "channel": "Hannan",
      "rates": "38.15"
    },
    {
      "id": 14,
      "month": "April",
      "amount_send": "1700.00",
      "amount_received": "6800.00",
      "sent_date": "2020-05-22",
      "channel": "Hannan",
      "rates": "38.00"
    },
    {
      "id": 15,
      "month": "August",
      "amount_send": "1681.00",
      "amount_received": "6800.00",
      "sent_date": "2020-05-22",
      "channel": "Hannan",
      "rates": "37.30"
    },
    {
      "id": 16,
      "month": "April",
      "amount_send": "2000.00",
      "amount_received": "8001.00",
      "sent_date": "2020-04-06",
      "channel": "Hannan",
      "rates": "38.99"
    }
  ]

export function getfunction(list, currentValue) {

    let newList = [];
   
    if (currentValue !== "") {


        // list.map(element=>(<h1>element.</h1>
        // ))


        // newList = list.filter(item =>{

        //     const lc = item.toLowerCase();     

        //     const filter = currentValue.toLowerCase();       
        //     return lc.includes(filter);    

        // });
    } else {
        newList = list;
    }
    return newList
}

export const filterData = (list,value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") return list;
    else {
      const filteredData = list.filter(item => {
        return Object.keys(item).some(key =>
             item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      return filteredData;
    //   setData();
    }
  }

