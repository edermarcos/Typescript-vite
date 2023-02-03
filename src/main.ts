import './style.css'
import { Person } from './decorators'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Hello World
  </div>

  ${ new Person('John').getName() }
`

// setupCounter(document.querySelector<HTMLButtonElem>ent>('#counter')!)
