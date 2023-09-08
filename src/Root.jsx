import { useEffect, useState } from 'react';
import { routes } from './core/routes';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { getProducts } from './firebase';

function Root() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(list => setProducts(list))
      .catch(console.log)

  }, [])
  return (
    <div>
      <RouterProvider router={routes} />

      {/* {
        products.map((product) => {
          return (
            <div key={product.id}>
              <p>Name: {product.name}</p>
              <p>sizes: {product.sizes.join(' ')}</p>
              <p>gender: {product.gender}</p>
              <p>season: {product.season}</p>
              <h1>{product.info}</h1>
            </div>
          )
        })
      } */}

    </div>
  );
}

export default Root;


// const createUser = async () => {
//   await addDoc(usersCollectionRef, { name: newName, age: newAge });
//   setNewName('');
//   setNewAge(0);
// }

// const updateUser = async (id, age) => {
//   const userDoc = doc(db, "users", id)
//   const newField = { age: age + 1 }
//   await updateDoc(userDoc, newField)
// }

// const deleteUser = async (id) => {
//   const userDoc = doc(db, "users", id)
//   await deleteDoc(userDoc);
// }
