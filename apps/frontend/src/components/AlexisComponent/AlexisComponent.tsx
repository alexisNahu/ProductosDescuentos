interface Props {
    a: number,
    b: number,
}

function AlexisComponent({a,b}: Props) {
  return (
    <div className='text-black'>La suma de los numeros es: {a+b}, soy Alexis Idoyaga</div>
  )
}

export default AlexisComponent