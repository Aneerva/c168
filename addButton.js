AFRAME.registerComponent('create-buttons',{
    init:function(){

        var button1 = document.createElement('button')
        button1.innerHTML = 'RATE US 5🌟'
        button1.setAttribute('id', 'rating-button')
        button1.setAttribute('class', 'btn btn-warning')

        var button1 = document.createElement('button')
        button2.innerHTML = 'ORDER 🍕 NOW'
        button2.setAttribute('id', 'order-button')
        button2.setAttribute('class', 'btn btn-warning')

        var button_div = document.getElementById('button-div')
        button_div.appendChild(button1)
        button_div.appendChild(button2)

    }
})