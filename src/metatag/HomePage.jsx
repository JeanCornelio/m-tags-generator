import logo from './logo.png';

export const HomePage = ()=> {


  return (
    <>
    <main className="px-5">
      <nav className="py-3">
        <div className="p-4 bg-slate-100 rounded-md flex justify-between">
         <img src={logo} alt="" />
          
    
          <span className="icon-[icon-park-outline--dark-mode] text-2xl" />

        </div>
      </nav>
    </main>
  

    </>
  )
}