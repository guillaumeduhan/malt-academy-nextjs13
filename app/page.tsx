export default function Home() {
  return (
    <div className="text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-5">
          Malt Academy Next.js 13
        </h1>
        <div className="text-lg text-slate-400">
          <p>Bienvenue sur cette nouvelle Malt Academy.</p>
          <p>Cette application a été créée pour vous apprendre à coder avec Next.js 13.</p>
        </div>
      </header>
      <main>
        <div className="mb-8">
          <h2 className="text-3xl text-white mb-3">Cette page...</h2>
          <div className="text-lg text-slate-400">
            <p>Cette page se trouve dans la partie expérimentale de Next.js fournie par la nouvelle version de Nextjs.<br />Le chemin de cette page est: <span className="rounded-lg bg-slate-200 px-2 py-1 text-red-500 font-bold">app/page.tsx</span></p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl text-white mb-3">Pour créer une nouvelle route</h2>
          <div className="text-lg text-slate-400">
            <p>Rendez-vous dans votre dossier <span className="rounded-lg bg-slate-200 px-2 py-1 text-red-500 font-bold">app</span></p>
            <p>Créez un dossier du nom de votre route, ex: <span className="rounded-lg bg-slate-200 px-2 py-1 text-red-500 font-bold">/users</span>.</p>
            <p>Puis créer un fichier <span className="rounded-lg bg-slate-200 px-2 py-1 text-red-500 font-bold">page.(js, tsx)</span>.</p>
            <p>Maintenant, la route <span className="rounded-lg bg-slate-200 px-2 py-1 text-red-500 font-bold">/users</span> est disponible.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
