
const Profile = ({ desc }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left"><span className="blue_gradient"> Profile</span></h1>
      <p className="desc text-left">{desc}</p>
      <div className='mt-10 prompt_layout'>
    </div>
    </section>
  )
}

export default Profile