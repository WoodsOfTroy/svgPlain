let cost = document.querySelectorAll(".place-cost");
let g = document.querySelectorAll("g");
function changerect(e)
{
    if(e.target && e.target.parentNode.classList.contains("place"))
    {
        console.dir(e);
        if(confirm(`Вы уверенны что хотите забронировать место?`))
        {
            e.target.parentNode.classList.remove("place");
            e.target.parentNode.classList.add("place-disabled");
            cost.forEach((item, i) => {
                if(item.parentNode.classList.contains("place-disabled"))
                {
                    item.textContent = "0";
                }
            });
        }
    } else {
        alert("Место уже забронировано");
    }
}
