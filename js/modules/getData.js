const urlApi = "https://nabil-4.github.io/Esprit-Cretois-Nabil/json/products.json"

const loadData = async () => {
    fetch(urlApi)
    .then(response => {
        return response.json()
    })
    .then(datas => {
        if (!sessionStorage.getItem("datas")) {
            sessionStorage.setItem("datas", JSON.stringify(datas))
        }
    })   
}
loadData()

export {loadData}


