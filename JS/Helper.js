function main(){
    function handleClick() {
        console.log('clicked button')
    }
    console.log('welcome')
    const ele = document.createElement('button')
    ele.innerText = 'click me'
    ele.onclick = handleClick
    document.body.appendChild(ele)
}
main()