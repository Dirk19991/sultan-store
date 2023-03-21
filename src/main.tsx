import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            distinctio consequatur obcaecati nemo est, facilis, amet nam
            doloremque ratione assumenda, quisquam quaerat iusto qui. Dolore
            omnis itaque beatae, quisquam accusantium quas illo, et ut quod
            blanditiis rerum ducimus quam quae ea eveniet neque obcaecati
            impedit fuga atque non ratione culpa? Ut esse obcaecati
            necessitatibus neque fugit. Nobis, suscipit. Qui voluptatum
            similique dolorem molestias maiores aperiam a architecto ipsum
            doloribus assumenda eos quasi expedita deleniti, illo illum pariatur
            quisquam nulla quam, esse eius ab neque! Cupiditate explicabo
            ratione enim perspiciatis beatae officiis quis? Numquam dolorum
            maiores eaque porro consequuntur fuga possimus veritatis sint aut,
            cupiditate, ab iure earum corporis cumque tempore. Magni quia
            aliquid hic est quis dignissimos, quidem consequuntur possimus alias
            dolorem quibusdam iusto, quas numquam totam, commodi eos tempore.
            Dolor numquam reprehenderit vitae ipsum sit odit reiciendis iure
            quam repellat excepturi sed, tempora, eveniet sapiente! Hic enim
            recusandae est eveniet quia reprehenderit neque dolorum ab illum!
            Architecto voluptates in assumenda tenetur, provident praesentium
            sapiente vitae ipsa sint. Earum mollitia sequi totam autem amet
            accusamus corrupti quae minima, a at repellendus, dolorem provident
            temporibus natus? Voluptatibus commodi vel molestiae aspernatur hic
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            distinctio consequatur obcaecati nemo est, facilis, amet nam
            doloremque ratione assumenda, quisquam quaerat iusto qui. Dolore
            omnis itaque beatae, quisquam accusantium quas illo, et ut quod
            blanditiis rerum ducimus quam quae ea eveniet neque obcaecati
            impedit fuga atque non ratione culpa? Ut esse obcaecati
            necessitatibus neque fugit. Nobis, suscipit. Qui voluptatum
            similique dolorem molestias maiores aperiam a architecto ipsum
            doloribus assumenda eos quasi expedita deleniti, illo illum pariatur
            quisquam nulla quam, esse eius ab neque! Cupiditate explicabo
            ratione enim perspiciatis beatae officiis quis? Numquam dolorum
            maiores eaque porro consequuntur fuga possimus veritatis sint aut,
            cupiditate, ab iure earum corporis cumque tempore. Magni quia
            aliquid hic est quis dignissimos, quidem consequuntur possimus alias
            dolorem quibusdam iusto, quas numquam totam, commodi eos tempore.
            Dolor numquam reprehenderit vitae ipsum sit odit reiciendis iure
            quam repellat excepturi sed, tempora, eveniet sapiente! Hic enim
            recusandae est eveniet quia reprehenderit neque dolorum ab illum!
            Architecto voluptates in assumenda tenetur, provident praesentium
            sapiente vitae ipsa sint. Earum mollitia sequi totam autem amet
            accusamus corrupti quae minima, a at repellendus, dolorem provident
            temporibus natus? Voluptatibus commodi vel molestiae aspernatur hic
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            distinctio consequatur obcaecati nemo est, facilis, amet nam
            doloremque ratione assumenda, quisquam quaerat iusto qui. Dolore
            omnis itaque beatae, quisquam accusantium quas illo, et ut quod
            blanditiis rerum ducimus quam quae ea eveniet neque obcaecati
            impedit fuga atque non ratione culpa? Ut esse obcaecati
            necessitatibus neque fugit. Nobis, suscipit. Qui voluptatum
            similique dolorem molestias maiores aperiam a architecto ipsum
            doloribus assumenda eos quasi expedita deleniti, illo illum pariatur
            quisquam nulla quam, esse eius ab neque! Cupiditate explicabo
            ratione enim perspiciatis beatae officiis quis? Numquam dolorum
            maiores eaque porro consequuntur fuga possimus veritatis sint aut,
            cupiditate, ab iure earum corporis cumque tempore. Magni quia
            aliquid hic est quis dignissimos, quidem consequuntur possimus alias
            dolorem quibusdam iusto, quas numquam totam, commodi eos tempore.
            Dolor numquam reprehenderit vitae ipsum sit odit reiciendis iure
            quam repellat excepturi sed, tempora, eveniet sapiente! Hic enim
            recusandae est eveniet quia reprehenderit neque dolorum ab illum!
            Architecto voluptates in assumenda tenetur, provident praesentium
            sapiente vitae ipsa sint. Earum mollitia sequi totam autem amet
            accusamus corrupti quae minima, a at repellendus, dolorem provident
            temporibus natus? Voluptatibus commodi vel molestiae aspernatur hic
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            distinctio consequatur obcaecati nemo est, facilis, amet nam
            doloremque ratione assumenda, quisquam quaerat iusto qui. Dolore
            omnis itaque beatae, quisquam accusantium quas illo, et ut quod
            blanditiis rerum ducimus quam quae ea eveniet neque obcaecati
            impedit fuga atque non ratione culpa? Ut esse obcaecati
            necessitatibus neque fugit. Nobis, suscipit. Qui voluptatum
            similique dolorem molestias maiores aperiam a architecto ipsum
            doloribus assumenda eos quasi expedita deleniti, illo illum pariatur
            quisquam nulla quam, esse eius ab neque! Cupiditate explicabo
            ratione enim perspiciatis beatae officiis quis? Numquam dolorum
            maiores eaque porro consequuntur fuga possimus veritatis sint aut,
            cupiditate, ab iure earum corporis cumque tempore. Magni quia
            aliquid hic est quis dignissimos, quidem consequuntur possimus alias
            dolorem quibusdam iusto, quas numquam totam, commodi eos tempore.
            Dolor numquam reprehenderit vitae ipsum sit odit reiciendis iure
            quam repellat excepturi sed, tempora, eveniet sapiente! Hic enim
            recusandae est eveniet quia reprehenderit neque dolorum ab illum!
            Architecto voluptates in assumenda tenetur, provident praesentium
            sapiente vitae ipsa sint. Earum mollitia sequi totam autem amet
            accusamus corrupti quae minima, a at repellendus, dolorem provident
            temporibus natus? Voluptatibus commodi vel molestiae aspernatur hic
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            distinctio consequatur obcaecati nemo est, facilis, amet nam
            doloremque ratione assumenda, quisquam quaerat iusto qui. Dolore
            omnis itaque beatae, quisquam accusantium quas illo, et ut quod
            blanditiis rerum ducimus quam quae ea eveniet neque obcaecati
            impedit fuga atque non ratione culpa? Ut esse obcaecati
            necessitatibus neque fugit. Nobis, suscipit. Qui voluptatum
            similique dolorem molestias maiores aperiam a architecto ipsum
            doloribus assumenda eos quasi expedita deleniti, illo illum pariatur
            quisquam nulla quam, esse eius ab neque! Cupiditate explicabo
            ratione enim perspiciatis beatae officiis quis? Numquam dolorum
            maiores eaque porro consequuntur fuga possimus veritatis sint aut,
            cupiditate, ab iure earum corporis cumque tempore. Magni quia
            aliquid hic est quis dignissimos, quidem consequuntur possimus alias
            dolorem quibusdam iusto, quas numquam totam, commodi eos tempore.
            Dolor numquam reprehenderit vitae ipsum sit odit reiciendis iure
            quam repellat excepturi sed, tempora, eveniet sapiente! Hic enim
            recusandae est eveniet quia reprehenderit neque dolorum ab illum!
            Architecto voluptates in assumenda tenetur, provident praesentium
            sapiente vitae ipsa sint. Earum mollitia sequi totam autem amet
            accusamus corrupti quae minima, a at repellendus, dolorem provident
            temporibus natus? Voluptatibus commodi vel molestiae aspernatur hic
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
            dignissimos dolorem, et nulla eos. Soluta architecto illum laborum.
          </div>
        ),
      },
      {
        path: '/ass',
        element: <div></div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
