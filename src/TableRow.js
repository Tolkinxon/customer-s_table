import './App.css'

export default function TableRow({ id, children }) {
  return (
    <div
      className="row"
      style={{ backgroundColor: id === 0 ? 'khaki' : 'white' }}
    >
      {children}
    </div>
  )
}
