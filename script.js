let btns = document.querySelectorAll('.btn') ;
       let inp = document.getElementById('value') ;
       let arr = Array.from(btns) ;
       let st= ""
       console.log(arr)
       arr.forEach(e => {
         e.addEventListener('click' , clicktype)
        function clicktype(d){
            if(d.currentTarget.innerHTML == "="){
                st = eval(st)
                 inp.value = st 
            }
            else if(d.target.textContent === "AC"){
                st = ""
                inp.value = st 
                
            }
            else if(d.currentTarget.innerHTML === "DEL"){
                st = st.substring(0,st.length-1)
                inp.value = st 
            }
            else{
                st += d.target.textContent ;
                inp.value = st ;
            }
        }
       })