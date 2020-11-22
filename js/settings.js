let data = fetch('./json/data.json').then(results => results.json()).then(console.log)
console.log(data) 