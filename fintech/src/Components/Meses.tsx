import MesBtn from "./MesBtn"

const Meses = () => {
  return (
    <div className="meses">
      <MesBtn n={0} />
      <MesBtn n={-1} />
      <MesBtn n={-2} />
      <MesBtn n={-3} />
    </div>
  )
}

export default Meses