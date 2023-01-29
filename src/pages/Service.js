import { Header } from "../components/header/header";
import { Drawer } from "../components/drawertable/drawer";
import { Setings } from "../components/setings/setings";
const Service = () => {
   return(
      <>
   <body>
    <header>
      <Header />
    </header>
    <main>
<Setings />
<Drawer />
    </main>
   </body>
   </>
   )
};

export {Service};
