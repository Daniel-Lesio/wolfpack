export default function imgLazyLoad (){
    let sections = document.querySelectorAll('img');
    console.log(sections)
        if(!!window.IntersectionObserver){
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                    if(entry.intersectionRatio>0){
                        let img = entry.target;
                        let src = img.getAttribute('data-lazy');
                        img.setAttribute('src', src);
                        img.classList.add('fade');
                        observer.disconnect();
                    }
                   
                });
            });
            sections.forEach(section=>{
                
                observer.observe(section);
            });
        }
         else {
             
         };
    };

