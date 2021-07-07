let g = document.querySelectorAll(".g-wrap");
window.onload = function(){
    g.forEach(item => {
        if(item.classList.contains("place-disabled"))
        {
            item.classList.add("reserved");
        }
    });
}
function changerect(e)
{
    console.dir(e.target.parentNode.classList);
    
        if(e.target.parentNode.classList.contains("place"))
        {
            if(confirm("Хотите забронировать место?"))
            {
                g.forEach(item => {
                    if(item.classList.contains("place-disabled") && !item.classList.contains("reserved"))
                    {
                        item.classList.remove("place-disabled");
                        item.classList.add("place");
                    } else {
                        e.target.parentNode.classList.remove("place");
                        e.target.parentNode.classList.add("place-disabled");
                    }
                });
            }
            
        } else if(e.target.parentNode.classList.contains("place-disabled") && !e.target.parentNode.classList.contains("reserved"))
        {
            if(confirm("Хотите снять бронь?"))
            {
                e.target.parentNode.classList.remove("place-disabled");
                e.target.parentNode.classList.add("place");
            }  
        } else if(e.target.parentNode.classList.contains("reserved"))
        {
            alert("Место забронировано");
        }
}
