import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './section_blog.css?inline';
  
export default component$(() => {
useStyles$(styles);
  return (
    <>
    {/* 
        del layout raiz de carpeta route
        en el html se el section esta dentro de main 
        del layout principal
        <main>
            <section>
                <h1>About</h1>
            </section>
        </main>
    */}
      <section>
        <Slot />
      </section>  
    </>
  );
});
