
function Avatar ({person, size}: AvatarProp) {
  return (
    <img 
    className="avatar"
    src={"https://i.imgur.com/" + person.imageID + ".jpg" }
    alt={person.name}
    height={size}
    width={size}
    
    />
  )
}
type PersonPerop = {
  name: string,
  imageID: string
}

type AvatarProp = {
  person: PersonPerop
  size: number
}

export default function Display() {
  return (
    <>
      <Avatar 
        person={{name: 'Person1', imageID: 'OKS67lh'} }
        size={100}
      />
      <Avatar 
        person={{name: 'Person2', imageID: 'YfeOqp2'} }
        size={80}
      />
      <Avatar 
        person={{name: 'Person3', imageID: '1bX5QH6'} }
        size={50}
      />
    </>
  )
}