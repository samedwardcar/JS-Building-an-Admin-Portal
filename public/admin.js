async function getBooks()
{
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    
    let mainDiv = document.getElementById('root')
    let unList = document.createElement('ul')

    books.forEach(book => {

        let li = document.createElement('li')
        let input = document.createElement('input')
        let button = document.createElement('button')
 
        //Construct list items
        li.textContent = book.title
        li.id = book.id

        //Construct input
        input.setAttribute('type', 'text')
        input.setAttribute('value', book.quantity)

        //Construct button
        button.textContent = 'Save'
        button.setAttribute('class', 'btn btn-primary')
        button.setAttribute('type', 'submit')

       button.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
       })

        unList.appendChild(li)
        unList.appendChild(input)
        unList.appendChild(button)
    })
    mainDiv.appendChild(unList)
        
}
getBooks()
