
let btn = document.querySelector('.off');
let state = true;
btn.onclick = ()=> // Arrow functions are great!
{
    if (state == true)
    {
        state = false;
        btn.innerHTML = "Machine is off";
    }
    else
    {
        state = true;
        btn.innerHTML = "Machine is on";
    }
}

//part 1 done