import {Section} from "./components/Section"
const foodPictures = require('./food.json');

function App() {
  return (
    <div className="text-gray-700 print:text-black text-center flex flex-col items-center">
      <header
        className="py-8 xl:py-16 flex flex-col items-center
      "
        id="header"
      >
        <h1 className="text-4xl xl:text-7xl font-bold">Tailwind CSS v3.0</h1>
        <h2 className="text-3xl xl:text-6xl">Lightning</h2>
        <p className="text-7xl mt-4 xl:mt-8">⚡</p>

        <a
          className="mt-4 xl:mt-8 text-xl decoration-teal-500 font-bold underline"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind documentation
        </a>
      </header>
      <main className="w-full max-w-4xl px-4">
        <Section sectionTitle="Multi-column layout">
          <p className="first-letter:text-[40px] first-letter:font-bold first-letter:text-teal-700 columns-3xs text-justify gap-x-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            massa eu lorem scelerisque congue eget eget risus. Phasellus velit
            diam, dapibus sit amet euismod eu, aliquam quis purus. Integer velit
            risus, tincidunt quis rhoncus sed, vehicula sed libero. Sed enim
            tellus, efficitur dictum metus ut, dictum dictum ligula. Phasellus
            elit purus, imperdiet sit amet libero ut, interdum vehicula dui.
            Nulla vestibulum porttitor tortor, quis eleifend ipsum interdum a.
            Phasellus sollicitudin malesuada lorem et tincidunt. Nam dapibus,
            tortor vitae pharetra sollicitudin, dui leo cursus ante, mollis
            condimentum libero purus gravida tellus. Ut vestibulum sem mollis
            magna varius fringilla. Donec cursus convallis dignissim. Integer
            malesuada quis dolor in gravida. In lobortis et sapien vitae
            faucibus. Phasellus dignissim, eros a suscipit eleifend, leo erat
            tincidunt purus, tincidunt convallis leo metus nec est. Proin at
            augue id lectus facilisis suscipit sit amet a nibh. Integer felis
            velit, sagittis vel tincidunt non, porttitor ac erat. Quisque
            feugiat faucibus nisl. Maecenas condimentum mauris sit amet
            sollicitudin ullamcorper. Suspendisse sodales lorem vel posuere
            laoreet. Vestibulum faucibus ex et risus hendrerit convallis. Duis
            eget dui neque. Cras tellus tortor, interdum non nulla at,
            scelerisque ultrices purus. Nam sit amet faucibus orci.
          </p>
        </Section>
        <Section sectionTitle="Box shadow color">
          <div className="mt-4 flex justify-around">
            <a href="#header">
              <button className="px-4 py-2 font-bold rounded text-white bg-gradient-to-r from-teal-500 to-stone-900 shadow-lg">
                Click
              </button>
            </a>
            <button className="px-4 py-2 font-bold rounded text-white bg-gradient-to-r from-teal-500 to-stone-900 shadow-lg shadow-teal-500/30">
              Click
            </button>
            <button className="px-4 py-2 font-bold rounded text-white bg-gradient-to-r from-teal-500 to-stone-900 shadow-lg shadow-rose-500/30">
              Click
            </button>
          </div>
        </Section>
        <Section sectionTitle="Scroll snap" noPrint>
          <ul className="flex gap-x-8 w-full overflow-x-auto snap-x py-8">
            {Object.values(foodPictures).map(picture => (
              <li key={picture}>
                <img
                  src={picture}
                  alt=""
                  className="snap-center flex-shrink-0 min-w-[400px] h-64 object-cover rounded-lg shadow-lg shadow-orange-500/30"
                />
              </li>
            ))}
          </ul>
        </Section>
        <Section sectionTitle="Orientation modifiers">
          <p>
            Vous êtes en: <span className="portrait:hidden">paysage 🏞️</span>
            <span className="landscape:hidden">portrait 👩‍🎨</span>
          </p>
        </Section>
        <Section sectionTitle="Form styling" >
          <form className="mt-4 flex flex-col gap-y-2 accent-teal-600">
            <input
              type="file"
              className="file:bg-teal-600 file:border-none file:rounded file:px-4 file:py-2 file:text-white file:mr-6"
            />
            <div className="flex gap-x-4">
              <label className="flex gap-x-4 items-center">
                <input type="radio" name="options" />
                <span>Option 1</span>
              </label>
              <label className="flex gap-x-4 items-center">
                <input type="radio" name="options" />
                <span>Option 2</span>
              </label>
            </div>
            <div className="flex gap-x-4 items-center">
              <input type="checkbox" id="check" />
              <label htmlFor="check">My checkbox</label>
            </div>
          </form>
        </Section>
      </main>
      <footer className="mt-8 xl:mt-16 w-full h-32 flex justify-center items-center bg-gray-200 print:hidden">
        Un magnifique footer
      </footer>
    </div>
  );
}

export default App;
