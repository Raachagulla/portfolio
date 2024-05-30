let h=document.querySelector(".hi")
let hi=document.querySelector(".hlo")
console.log(h.innerText)
let b=h.innerText.slice("")
console.log(b)
let a=' '
console.log(hi)
let l=b.length
console.log(l)
   let ref= setInterval(getdata,100)
    i=0
    function getdata(){
           
            hi.innerText+=h.innerText[i]
            i+=1
            if(i==l){
                clearInterval(ref)
                hi.innerText=h.innerText
                hi.style.color="aqua"
            }
    
    }
