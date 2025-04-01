export default function ButtonComponent (props){
   

   return(
    <>
    <button onClick={props.onClick}>{props.text}</button>
    </>
   )
}