

export default function blog({ params }: {
  params: {id:string}
}) {
  
  
  return (
    <>
      <h1>Blog</h1>
      <h2>ID: {params.id }</h2>
    </>
  )
}
