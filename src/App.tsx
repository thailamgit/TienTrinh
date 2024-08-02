
function Avatar () {
  return (
    <img 
    className="avatar"
    src="https://i.imgur.com/1bX5QH6.jpg" 
    alt="Someone that I don't know" 
    height={100}
    width={100}
    />
  )
}

export default function Display() {
  return (
    <>
      <Avatar />
    </>
  )
}