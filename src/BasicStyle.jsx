import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div> */}
      {/* Padding, Margin */}
      {/* <h1 className='text-blue-500 my-10 px-10 '>Test</h1></div> */}

      {/* Flex, Width, Height */}
      {/* <div className='flex'>
        <h3 className='w-1/2 bg-orange-600'>header 1</h3>
        <h3 className='w-1/2 bg-purple-600'>header 2</h3>
      </div>
      <div className='flex'>
        <h3 className='w-1/3 bg-orange-600'>header 1</h3>
        <h3 className='w-1/3 bg-purple-600'>header 2</h3>
        <h3 className='w-1/3 bg-red-600'>header 3</h3>
      </div>
      <div className='flex'>
        <h3 className='w-3/5 bg-orange-600'>header 1</h3>
        <h3 className='w-2/5 bg-purple-600'>header 2</h3>
      </div>
      <div className='w-3/5 bg-slate-300 h-96 min-w-min'>header 1</div>
      <div className='w-full bg-blue-300'>something</div> */}

      {/* Font size, font weight, font style */}
      {/* <div>
        <p className='text-xs font-thin non-italic'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          adipisci quam ducimus, sunt blanditiis aliquid, autem numquam beatae
          necessitatibus nam molestiae quasi consectetur dolores ea explicabo
          porro ab, modi natus!
        </p>
        <p className='text-sm font-bold'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          adipisci quam ducimus, sunt blanditiis aliquid, autem numquam beatae
          necessitatibus nam molestiae quasi consectetur dolores ea explicabo
          porro ab, modi natus!
        </p>
        <p className='text-lg font-black'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          adipisci quam ducimus, sunt blanditiis aliquid, autem numquam beatae
          necessitatibus nam molestiae quasi consectetur dolores ea explicabo
          porro ab, modi natus!
        </p>
        <p className='text-xl italic'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          adipisci quam ducimus, sunt blanditiis aliquid, autem numquam beatae
          necessitatibus nam molestiae quasi consectetur dolores ea explicabo
          porro ab, modi natus!
        </p>
        <p className='text-9xl font-thin'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          adipisci quam ducimus, sunt blanditiis aliquid, autem numquam beatae
          necessitatibus nam molestiae quasi consectetur dolores ea explicabo
          porro ab, modi natus!
        </p>
      </div> */}

      {/* Letter spacing, list style */}
      {/* <p className='tracking-widest mb-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        temporibus? Harum, sit. Voluptatum, nisi fugit consequuntur possimus
        mollitia adipisci minus, architecto labore ullam, a debitis vel officia
        perspiciatis quo dolores?
      </p>
      <ul className='list-decimal list-inside'>
        <li className='tracking-widest'>HTML</li>
        <li className='tracking-wider'>CSS</li>
        <li className='tracking-normal'>JS</li>
        <li className='tracking-tighter'>PHP</li>
        <li>Python</li>
      </ul> */}

      {/* Capitalize and text overflow */}
      {/* <h3 className='capitalize'>capitalize the header</h3>
      <p className='w-1/3 h-56 mb-9 truncate bg-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta suscipit nostrum consequatur doloribus a qui reprehenderit veritatis. Reiciendis beatae illum consequatur ratione, dolor ut ipsam sapiente voluptatum minima magnam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sunt, repellendus aperiam quas sit a non ullam autem. Vel eos iusto sapiente possimus consequuntur laborum quam, fugiat beatae. Nobis, totam!
      </p>
      <p className='w-1/3 h-56 text-ellipsis overflow-hidden bg-slate-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta suscipit nostrum consequatur doloribus a qui reprehenderit veritatis. Reiciendis beatae illum consequatur ratione, dolor ut ipsam sapiente voluptatum minima magnam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sunt, repellendus aperiam quas sit a non ullam autem. Vel eos iusto sapiente possimus consequuntur laborum quam, fugiat beatae. Nobis, totam!
      </p> */}

      {/* Text decoration */}
      {/* <p className='text-purple-500 text-justify'>
        Lorem ipsum dolor sit, amet <span className='underline decoration-emerald-700'>consectetur adipisicing</span> elit. Nihil fugit amet eveniet, sit praesentium <span className='underline decoration-wavy'> in repudiandae ducimus</span>, dolores ullam quia reprehenderit molestiae. Atque dolores, necessitatibus libero quis omnis veniam deleniti!
        Lorem ipsum dolor sit amet <span className='font-bold underline decoration-orange-700'>consectetur adipisicing</span> elit. Similique facere dolor iure quae, vero ab <span className='underline decoration-double decoration-2'>illo inventore quam</span> iusto explicabo reprehenderit, perspiciatis magnam pariatur quis dolores excepturi <span className='underline decoration-clone decoration-8'>quibusdam tenetur tempore</span>?
      </p> */}

      {/* Background */}
      {/* <div className='h-96 bg-gradient-to-r from-blue-600 to-red-900'>
        <h1 className='font-bold text-2xl text-center tracking-wider text-purple-500'>Gradient from - to background</h1>
      </div>
      <div className="div1 bg-cover bg-no- bg-scroll"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias, ipsa repellendus cum dignissimos iure odio deserunt maiores praesentium perferendis soluta eligendi quia. Incidunt cupiditate ex fugiat repellendus nam consequatur!
        Iure nemo illo ad explicabo repudiandae laudantium numquam error nostrum cumque unde! Atque reprehenderit, sapiente voluptates accusamus est facere praesentium itaque neque fuga voluptate, alias, nulla doloribus deserunt temporibus esse?
        Delectus placeat exercitationem ipsam commodi unde, quidem id dicta cumque quae velit. Placeat, enim maiores quas facere vitae sequi numquam quaerat neque alias ullam voluptate rerum sint in sunt. Odio.
        Mollitia ea dolorem fugiat voluptates est minus quo reprehenderit esse obcaecati omnis eum impedit dignissimos fugit, incidunt amet ducimus modi dolore? Voluptate earum labore fugiat facere nam libero natus aut?
        Animi modi deserunt accusamus voluptatibus officia! Maxime rem, vel animi et distinctio dolore consequuntur doloribus, pariatur amet, voluptates explicabo dolorum qui. Iusto sapiente non delectus, corporis blanditiis aperiam earum qui?
        Facere veniam numquam culpa sed officia, praesentium magnam ut delectus error, voluptate sequi suscipit unde libero laborum, velit quas minima animi. Eveniet minus eius et libero consequatur pariatur repellendus animi.
        Qui aliquid magni excepturi corrupti repudiandae quae nulla cupiditate voluptatibus tempora dolores vitae odio laboriosam vel optio iure ducimus adipisci veniam voluptas, eius pariatur soluta debitis! Dolorem maxime architecto mollitia.
        Libero quo quidem vel quis omnis nam blanditiis inventore deserunt dolorum eligendi. Rerum enim ab provident architecto impedit? Quas deleniti quaerat quod at adipisci quibusdam doloremque quidem suscipit similique voluptatem.
        Illum, odit temporibus exercitationem enim minus quis vitae ullam omnis rerum molestiae cum accusantium officia, porro est, corrupti consequuntur iure tempore nesciunt ex eos sint delectus nobis provident? Commodi, porro.
        Ipsam deleniti harum voluptatem. Rerum, culpa odio eveniet molestiae minima, velit necessitatibus explicabo, ratione illo veritatis tempore perferendis. Est alias quia iste quis vel veniam, officia inventore non quae nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime itaque eius? Ratione optio recusandae nam reiciendis eaque odit ut vero repudiandae, ea incidunt fuga cupiditate, esse neque velit minima.
        Nostrum tempore asperiores minima temporibus consequuntur amet eos commodi ullam repellat quia dolorem at illo, dolore, explicabo ab hic excepturi consequatur molestias esse quae quam unde odio aperiam! Quia, possimus.
        Tenetur eos culpa id laborum dolorum consequatur omnis harum doloremque maiores eum dignissimos, voluptatem ipsa odit blanditiis assumenda nulla alias nihil, officia molestias, reprehenderit qui perferendis quam voluptas at! Necessitatibus.
        Recusandae doloremque numquam ea accusamus. Quos provident illo laudantium necessitatibus eveniet rem numquam, temporibus, ipsa consequuntur ipsum sit repudiandae vero magnam exercitationem quo. Minus suscipit ducimus consectetur soluta, laborum nemo?
        Quos laborum, vero, placeat aliquam architecto sapiente corporis illo laboriosam aperiam veritatis fugit illum doloremque dolore. Beatae officiis, placeat unde a doloribus libero laudantium repellendus cumque reiciendis dolores explicabo aperiam?
        Mollitia in saepe, aspernatur, expedita asperiores eius beatae, laboriosam earum necessitatibus aliquam amet inventore esse voluptate sint provident sunt assumenda eveniet libero qui deleniti ea accusamus! Debitis nemo voluptatum alias!
        Quaerat quo dolorem odit porro impedit facere dolor non in minima, consequatur similique, reprehenderit saepe amet aperiam illo quibusdam atque nam cum error nulla eveniet culpa consectetur. Nobis, totam asperiores.
        Accusamus, dolor, repudiandae quos perferendis, molestias dolorum aperiam a nobis quod voluptatem voluptas. Neque cumque, repellendus in aut officiis vel dicta perferendis similique natus, quis mollitia minus rem. Doloribus, quos.
        Itaque tenetur beatae odit ullam ipsum aspernatur distinctio inventore voluptas. Voluptate rem repellat, impedit eum nulla, suscipit rerum doloribus earum aspernatur eaque voluptatem nostrum neque eius. Ex explicabo maiores fugiat.
        Itaque rerum ut eos, cupiditate sed molestiae rem. Itaque numquam voluptas impedit quidem, dignissimos iusto necessitatibus magnam unde vel eaque at eligendi sit maxime ducimus laborum atque temporibus corporis facere.
        Eveniet dolorem pariatur harum ipsum, et neque voluptatem numquam sed incidunt, recusandae facere quaerat amet delectus aspernatur eligendi nobis. Eligendi officia qui labore enim tenetur nihil! Rerum quam debitis esse.
        Laboriosam laborum reiciendis quas rerum, ratione nostrum recusandae hic debitis, cum praesentium assumenda eligendi est delectus doloribus illo, quo minus asperiores vitae omnis. Omnis odio repellendus pariatur non, libero nisi?
        Ad doloremque laboriosam similique voluptatem, harum rerum corporis quibusdam qui atque. Quaerat, debitis. Dolores saepe est libero veritatis exercitationem? Eaque laboriosam quas asperiores dolore commodi rem dolorem sit quia saepe?
        Labore voluptate, laudantium eum aspernatur esse dolorum enim, praesentium rem mollitia, aliquam cupiditate? Ad nesciunt soluta exercitationem voluptatem quisquam voluptatibus non quis laborum ratione. Possimus exercitationem vel labore quos quo.
        Tempore laboriosam recusandae nesciunt beatae obcaecati voluptatem eum deserunt corrupti nisi amet corporis inventore ducimus debitis, dolor accusantium nam ipsam et delectus voluptatum repellat veniam consequatur quae. In, iusto numquam!
        Officia explicabo id perspiciatis incidunt porro harum nisi veritatis eveniet blanditiis saepe dolorum eius sit vel minus iste quo, repellendus atque nemo soluta aspernatur fugiat, suscipit impedit! Sint, dicta tenetur!
        Numquam veritatis explicabo dignissimos necessitatibus magni sint. Officia quidem dignissimos dolorem id ducimus repellendus odit sunt ipsam temporibus magnam maiores, qui similique atque laboriosam iure itaque ea obcaecati! Id, soluta!
        Ducimus facere suscipit, quisquam, aliquid nisi dolores, eveniet eius odio ratione fuga quasi provident deserunt ex voluptatibus nemo repellat odit nihil placeat aperiam iusto qui neque? Eveniet, saepe voluptates. Reprehenderit.
        Nihil autem ipsa eligendi incidunt libero! Beatae inventore soluta obcaecati culpa provident est quod illum dolores doloribus. Commodi, tenetur! Dolor, nesciunt deleniti odio asperiores necessitatibus ipsa libero ut eveniet unde!
        Voluptas harum voluptate ipsa enim dignissimos aliquid repellendus incidunt cumque consequatur aliquam earum voluptatum soluta facilis minima eum, quae, illum a qui sed necessitatibus quibusdam eos sit cum? Quasi, natus.
      </p> */}

      {/* Borders */}
      {/* <div className='bg-blue-500 w-52 h-36 rounded-t-full m-7 mb-0'></div>
      <div className='bg-blue-500 w-52 h-36 rounded-b-full m-7 mt-0'></div> */}

      {/* <button className='bg-blue-500 w-36 h-16 rounded-full m-7 cursor-not-allowed'>
        Click me
      </button> */}

      {/* Border radius */}
      {/* <p className='border-4 border-blue-800 border-double'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        recusandae dolore quis esse cum eius quaerat necessitatibus minima
        totam, ullam doloremque atque. Dicta quae voluptate assumenda,
        voluptatibus sequi illum. Quaerat?u
      </p> */}

      {/* Divider */}
      {/* <div className='divide-y-4 divide-fuchsia-500 divide-double'>
        <div className='m-5 w-36 h-36 bg-slate-400 '>Test</div>
        <div className='m-5 w-36 h-36 bg-slate-400 '>Test</div>
        <div className='m-5 w-36 h-36 bg-slate-400 '>Test</div>
        <div className='m-5 w-36 h-36 bg-slate-400 '>Test</div>
      </div> */}

      {/* Outline */}
      {/* <div className='m-5 w-36 h-36 bg-slate-400 outline-double outline-yellow-900 outline-4 outline-offset-2'></div> */}

      {/* Opacity and Shadow */}
      <div>
        <button className='bg-blue-400 m-5 w-44 h-16 rounded-full shadow-xl shadow-blue-300 outline-yellow-500 outline-4 outline-offset-1'>
          Click here
        </button>
        <button className='bg-red-400 m-5 w-44 h-16 rounded-full shadow-xl shadow-orange-300 opacity-30'>
          Click here
        </button>
        <button className='bg-red-400 m-5 w-44 h-16 rounded-full shadow-xl shadow-blue-300 opacity-80'>
          Click here
        </button>
      </div>
    </>
  );
}

export default App;
