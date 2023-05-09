import { useState } from 'react';

//importar las imagenes
import uag from './assets/logos/logoBlanco.svg'
import aju from './assets/icons/gears.png'
import prox from './assets/icons/proximo.png'

//importa las etructuras de login y menu paara poder contruirlas, al igual que sus funciones
import {Login} from './components/login'
import {Menu} from './components/menu'
import {Selectuser} from './components/selectuser'

//importa el archivo css
import './index.css'

function App() {
  /*obtiene la variable de la estructura del archivo del login.jsx ya que la funcion 
  se ejecuta  en el return de esta funcino, especificamente en la estrroctura de control selectiva*/
  
  const [lgv, setlogm] = useState("false");/* la funcion de esta linea es establcer que lpgm ya tiene un dato que es false, 
  este se remplasara cuando stlogm obtenga un dato*/

  /*graicias a que en la estructura de control se manda a llamar la funcion con una variable que es setlog esta regresa con 
  dicha variable llamando a la funcion con el mismo nombre para poder con la unica funccion de  guardar el dato de la variable setlog en setlogm 
  */
  function setlog(state){
    setlogm(state)
  }


  const [ajv, setaj] = useState("false");/*este const useState nos servira para al momanto hacer clic en el engranaje o en la flecha,
   se cambie el estado de la variable ajv que incialmente esta en false, esto para hacer la comprobacion de cambio de panatalla a usuarios*/


  return (
    <>
    <body>
      <header>

        <img id="logo" src={uag} alt=""/>

        {lgv === "false" ? "": ajv === "true" ? <img id="aj" src={prox} alt="" onClick={()=>{setaj("false")}}/>:<img id="aj" src={aju} alt="" onClick={()=>{setaj("true")} }/>}
     
      </header>
      <main>
        {/*la eqyiqueta login manda llamar a la funcion login para que pueda contruir este mismo, esta misma etiqueta tiene un atributo setlog que tiene como 
        manda la varaible setlog sin ningun dato, esto sirve mas adelante para que se pueda regresar dicha variable con el dato , este ejecunta la funcion para poder manejarlo en una variable de este archivo
        */}
        {lgv === "false" ? <Login setLog={setlog}/>: ajv === "true" ?  <Selectuser/>:  <Menu/>}
        {/* esta estructura de control comprueba si la variable es falsa,
         esta misma variable es la que llega de la funcion login y cambia al iniciar seccion a true, esto hace que cambie automaticamente a otra pantalla*/}

      </main>
      <footer>
        @Universidad Autonoma de Guadalajara

      </footer>
    </body>
    </>
  )
}

//todo esto lo exporta a la estructura app en main
export default App
