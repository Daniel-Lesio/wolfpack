import './styles.scss'
const app = () => {
    ()=> console.log('red');
    const arr = [11,22,33]
    const nr = 22
    const newArray = [...arr, nr ]
    console.log(newArray)
}
 
export default app;