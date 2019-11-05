import jumps from "../ui/jumps";

const scrollTo = () => {
    const links = document.querySelectorAll('.link');
    
    links.forEach(link=>{
        link.addEventListener('click',()=>{
            jumps(link.getAttribute("value"))
            
        }
        
    )})
    

}
 
export default scrollTo;