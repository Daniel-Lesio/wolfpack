export default function io (){
    let sections = document.querySelectorAll('section');
        if(!!window.IntersectionObserver){
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                    if(entry.intersectionRatio>0){
                        console.log(entry.target);
                    }
                    else{
                        
                    };
                });
            });
            sections.forEach(section=>{
                observer.observe(section);
            });
        }
         else {
            console.log('not working');
         };
    };