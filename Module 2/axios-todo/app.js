
let url = "https://api.vschool.io/kevinbabauta/todo/"


function getData(){
    axios.get(url)
    .then(response => { listData(response.data) })
    .catch(error => console.log(error))
}