function organizeItems(items) {
    const properties = [];
    // your code here
    // get properties
    items.forEach(item=>{
    let cat = item.category;
    if(properties.includes(cat) === false) {
     properties.push(cat);                                
    }
  });    
    // after properties, prepare return obj
  const category = properties.reduce((prev, prop)=>{
    let filtered = items.filter(item=>{
    return item.category === prop;
    })
    let array = filtered.reduce((a, v) => {
        let str = v.onSale? v.itemName+'($)' : v.itemName;
        return [ ...a, str]
    }, []);
    console.log('array',prop, array)
    return {...prev, [prop]: array }
  }, null)
  return category;
  }
  
  var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false }
  ];